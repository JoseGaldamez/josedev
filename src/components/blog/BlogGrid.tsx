'use client';
import { getPublishedPostsWithLimit } from '@/lib/firestore';
import React, { useEffect, useState } from 'react'
import { BlogCard } from './BlogCard';
import { Post } from '@/types/blog';


export const BlogGrid = ({ limit }: { limit?: number }) => {

    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        const result = await getPublishedPostsWithLimit(limit);
        setPosts(result);
    }

    if (!posts || posts.length === 0) {
        return (
            <div className="text-center py-12">
                <h2 className="text-2xl font-thin text-white/60 mb-4">
                    No hay posts publicados aún
                </h2>
                <p className="text-white/30">
                    Vuelve pronto para leer los últimos artículos sobre desarrollo web.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
}
