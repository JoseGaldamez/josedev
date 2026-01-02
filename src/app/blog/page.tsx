import { Suspense } from 'react';
import { Metadata } from 'next';
import { BlogCard } from '@/components/blog/BlogCard';
import { getPublishedPosts } from '@/lib/firestore';
import { Topbar } from '@/components/Topbar';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BlogGridSkeleton } from '@/components/blog/BlogGridSkeleton';

export const metadata: Metadata = {
  title: 'Blog - José Galdámez',
  description: 'Artículos sobre desarrollo web, tecnología y programación',
  openGraph: {
    images: "https://josegaldamez.dev/jose-portada.png",
    title: 'Blog - José Galdámez',
    description: 'Artículos sobre desarrollo web, tecnología y programación',
  },
  alternates: {
    canonical: 'https://josegaldamez.dev/blog',
  }
};

export default async function BlogPage() {
  return (
    <>
      <Topbar />
      <div className="min-h-screen bg-[#01050a] text-[#f2f2f2]">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <header className="text-center my-12">
            <h1 className="text-4xl md:text-5xl font-thin text-white/70 mb-4">
              Blog
            </h1>
            <p className="text-xl text-white/40 max-w-2xl mx-auto font-light">
              Comparto mis experiencias y conocimientos sobre desarrollo web,
              tecnologías modernas y las mejores prácticas en programación.
            </p>
          </header>

          {/* Posts Grid */}
          <Suspense fallback={<BlogGridSkeleton />}>
            <BlogGrid />
          </Suspense>
        </div>
      </div>
    </>
  );
}
