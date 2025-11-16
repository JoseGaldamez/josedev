import { Suspense } from 'react';
import { Metadata } from 'next';
import { BlogCard } from '@/components/blog/BlogCard';
import { getPublishedPosts } from '@/lib/firestore';
import { Topbar } from '@/components/Topbar';

// ISR: Revalidar cada 15 minutos (900 segundos)
export const revalidate = 900;

export const metadata: Metadata = {
  title: 'Blog - José Galdámez',
  description: 'Artículos sobre desarrollo web, tecnología y programación',
};

export default async function BlogPage() {
  return (
    <>
    <Topbar />
    <div className="min-h-screen bg-black text-[#f2f2f2]">
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

async function BlogGrid() {
  const posts = await getPublishedPosts();

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

function BlogGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-black/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
          <div className="w-full h-48 bg-white/5 animate-pulse" />
          <div className="p-6">
            <div className="flex gap-2 mb-3">
              <div className="w-16 h-5 bg-white/10 rounded animate-pulse" />
              <div className="w-20 h-5 bg-white/10 rounded animate-pulse" />
            </div>
            <div className="w-full h-6 bg-white/10 rounded animate-pulse mb-3" />
            <div className="w-3/4 h-6 bg-white/10 rounded animate-pulse mb-4" />
            <div className="space-y-2 mb-4">
              <div className="w-full h-4 bg-white/5 rounded animate-pulse" />
              <div className="w-full h-4 bg-white/5 rounded animate-pulse" />
              <div className="w-2/3 h-4 bg-white/5 rounded animate-pulse" />
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <div className="w-20 h-4 bg-white/5 rounded animate-pulse" />
              <div className="w-16 h-4 bg-white/5 rounded animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}