'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFirestore } from '@/hooks/useFirestore';
import { PostEditor } from '@/components/admin/PostEditor';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function EditPostPage({ params }: PageProps) {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { posts } = useFirestore();
  const router = useRouter();

  useEffect(() => {
    loadPost();
  }, [params.slug]);

  const loadPost = async () => {
    try {
      const result = await posts.getBySlug(params.slug);
      if (!result) {
        notFound();
        return;
      }
      setPost(result);
    } catch (error) {
      console.error('Error loading post:', error);
      notFound();
    } finally {
      setLoading(false);
    }
  };

  const handleSave = (savedPost: any) => {
    setPost(savedPost);
    // Optionally redirect back to posts list
    // router.push('/admin/blog');
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="w-48 h-8 bg-gray-200 rounded animate-pulse" />
          <div className="flex gap-3">
            <div className="w-32 h-10 bg-gray-200 rounded animate-pulse" />
            <div className="w-24 h-10 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg border p-6">
                <div className="w-32 h-4 bg-gray-200 rounded animate-pulse mb-3" />
                <div className="w-full h-10 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg border p-6">
                <div className="w-24 h-5 bg-gray-200 rounded animate-pulse mb-4" />
                <div className="w-full h-32 bg-gray-200 rounded animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <PostEditor
      initialData={post}
      isEditing={true}
      onSave={handleSave}
    />
  );
}