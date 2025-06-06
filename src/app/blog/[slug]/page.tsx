import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/utils/blog';
import { BlogPost } from '@/types/blog';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

import './blog.css';
import { Header } from '@/components/v2/Header';
import Image from 'next/image';
import { Footer } from '@/components/v2/Footer';

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    try {
        const post = await getPostBySlug(params.slug);
        return {
            title: `${post.title} | José Galdámez Blog`,
            description: post.description,
            openGraph: {
                images: post.image
            }
        };
    } catch {
        return {
            title: 'Artículo no encontrado',
            description: 'El artículo que buscas no existe',
        };
    }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    let post: BlogPost;

    try {
        post = await getPostBySlug(params.slug);
    } catch {
        notFound();
    }

    return (
        <>
            <Header />
            <article className="container max-w-4xl mx-auto px-4 py-24">
                <header className="mb-8">
                    <div>
                        <span className='text-sm font-bold text-[#061929] underline'> {post.category} </span>
                    </div>
                    <h1 className="text-4xl font-bold mb-4 text-[#061929]">{post.title}</h1>
                    <div className="text-gray-600 mb-4">
                        <span>{new Date(post.date).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}</span>
                    </div>
                    <div className="flex gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className='overflow-hidden rounded-xl mt-5 w-full'>
                        <Image className='rounded-lg w-full h-auto' src={post.image} alt={post.title} width={1000} height={1000} />
                    </div>
                </header>
                <div className="prose prose-lg max-w-none">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>{post.content}</ReactMarkdown>
                </div>
            </article>
            <Footer />
        </>
    );
} 