import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/utils/blog';
import { Header } from '@/components/v2/Header';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Blog | Tu Nombre',
    description: 'Artículos y tutoriales sobre desarrollo de software',
};

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <>
            <Header />
            <div className="container max-w-5xl mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold mb-8">Blog</h1>
                <div className="grid gap-8">
                    {posts.map((post) => (
                        <article key={post.slug} className="rounded-lg py-6 hover:shadow-lg transition-shadow flex flex-col md:flex-row gap-8">
                            <div className='w-full md:w-1/3'>
                                <Link href={`/blog/${post.slug}`}>
                                    <Image className='rounded-lg w-full h-full object-cover' src={post.image} alt={post.title} width={500} height={500} />
                                </Link>
                            </div>
                            <div className='w-full md:w-2/3'>

                                <Link href={`/blog/${post.slug}`}>
                                    <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                                </Link>

                                <p className="text-gray-700 mb-4">{post.description}</p>

                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </>
    );
} 