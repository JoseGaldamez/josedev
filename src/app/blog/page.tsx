import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/utils/blog';
import { Header, Footer } from "@/components/v3";
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Blog | Josá Galdámez',
    description: 'Artículos y tutoriales sobre desarrollo de software',
};

export default async function BlogPage() {
    const posts = await getAllPosts();

    return (
        <div className="text-white py-5">
            <Header />
            <div className="container max-w-5xl mx-auto px-4 py-24">
                <h1 className="text-4xl font-bold mb-8 text-[#a1d8da]">Blog</h1>
                <div className="grid gap-8">
                    {posts.map((post) => (
                        <Link key={post.slug} href={`/blog/${post.slug}`}>
                            <article className="rounded-lg mb-5 border-b-2 border-transparent hover:border-[#37baba] bg-[#1e293b] bg-opacity-0 hover:bg-opacity-20 flex flex-col md:flex-row gap-8 ">
                                <div className='w-full md:w-1/3'>
                                    <Image className='rounded-t-xl w-full h-full object-cover' src={post.image} alt={post.title} width={300} height={200} priority />
                                </div>
                                <div className='w-full md:w-2/3 p-3'>
                                    <h3 className="text-2xl font-semibold my-2 text-gray-50">{post.title}</h3>
                                    <p className="text-gray-500 mb-4">{post.description}</p>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
} 