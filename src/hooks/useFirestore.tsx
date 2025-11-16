'use client';

import { useState, useCallback } from 'react';
import {
  getAllPosts,
  getPublishedPosts,
  getPostBySlug,
  createPost,
  updatePost,
  deletePost,
  uploadImageToStorage,
  generateUniqueSlug,
  getPostsByCategory,
  getAllCategories,
} from '@/lib/firestore';
import { Post, Block } from '@/types/blog';

export function useFirestore() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAsync = useCallback(async <T,>(
    asyncFn: () => Promise<T>
  ): Promise<T | null> => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await asyncFn();
      return result;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Firestore error:', err);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const posts = {
    getAll: useCallback(() => handleAsync(getAllPosts), [handleAsync]),
    getPublished: useCallback(() => handleAsync(getPublishedPosts), [handleAsync]),
    getBySlug: useCallback((slug: string) => handleAsync(() => getPostBySlug(slug)), [handleAsync]),
    create: useCallback((postData: Omit<Post, 'id'>) => handleAsync(() => createPost(postData)), [handleAsync]),
    update: useCallback((slug: string, postData: Partial<Post>) => handleAsync(() => updatePost(slug, postData)), [handleAsync]),
    delete: useCallback((slug: string) => handleAsync(() => deletePost(slug)), [handleAsync]),
    getByCategory: useCallback((category: string) => handleAsync(() => getPostsByCategory(category)), [handleAsync]),
  };

  const images = {
    upload: useCallback((file: File, folder?: string) => handleAsync(() => uploadImageToStorage(file, folder)), [handleAsync]),
  };

  const utils = {
    generateSlug: useCallback((title: string, excludeId?: string) => handleAsync(() => generateUniqueSlug(title, excludeId)), [handleAsync]),
    getCategories: useCallback(() => handleAsync(getAllCategories), [handleAsync]),
  };

  return {
    loading,
    error,
    posts,
    images,
    utils,
  };
}