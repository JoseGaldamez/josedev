import { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogCard } from '@/components/blog/BlogCard';
import { getPostsByCategory, getAllCategories } from '@/lib/firestore';
import Link from 'next/link';
import { Topbar } from '@/components/Topbar';

// ISR: Revalidar cada 15 minutos (900 segundos)
export const revalidate = 900;

interface PageProps {
  params: {
    category: string;
  };
}

// Generar páginas estáticas para categorías existentes, pero permitir páginas dinámicas para nuevas categorías
export async function generateStaticParams() {
  try {
    const categories = await getAllCategories();
    
    return categories?.map((category) => ({
      category: encodeURIComponent(category),
    })) || [];
  } catch (error) {
    console.error('Error generating static params for categories:', error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = decodeURIComponent(params.category);
  const baseUrl = 'https://josegaldamez.dev';

  return {
    title: `${category} - Blog de José Galdámez`,
    description: `Explora todos los artículos sobre ${category}. Tutoriales, tips y experiencias en desarrollo web por José Galdámez, Full Stack Developer.`,
    keywords: [
      category,
      'José Galdámez',
      'desarrollo web',
      'programación',
      'full stack developer',
      'blog tecnología',
      'tutoriales programación'
    ].join(', '),
    authors: [{ name: 'José Galdámez' }],
    creator: 'José Galdámez',
    publisher: 'José Galdámez',
    robots: 'index, follow',
    alternates: {
      canonical: `${baseUrl}/blog/category/${encodeURIComponent(category)}`,
    },
    openGraph: {
      title: `${category} - Blog de José Galdámez`,
      description: `Explora todos los artículos sobre ${category}. Tutoriales y experiencias en desarrollo web.`,
      type: 'website',
      url: `${baseUrl}/blog/category/${encodeURIComponent(category)}`,
      siteName: 'José Galdámez - Full Stack Developer',
      locale: 'es_ES',
      images: [
        {
          url: `${baseUrl}/jose-portada.png`,
          width: 1200,
          height: 630,
          alt: `${category} - José Galdámez`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category} - Blog de José Galdámez`,
      description: `Explora todos los artículos sobre ${category}. Tutoriales y experiencias en desarrollo web.`,
      creator: '@josegaldamez',
      site: '@josegaldamez',
      images: [`${baseUrl}/jose-portada.png`],
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const category = decodeURIComponent(params.category);

  return (
    <>
    <Topbar />
    <div className="min-h-screen bg-black text-[#f2f2f2] py-8">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <nav className="mb-4">
            <Link 
              href="/blog"
              className="text-white/50 hover:text-white/80 font-light transition-colors"
            >
              ← Volver al blog
            </Link>
          </nav>
          
          <h1 className="text-4xl md:text-5xl font-thin text-white/70 mb-4">
            Categoría: {category}
          </h1>
          <p className="text-xl text-white/40 max-w-2xl mx-auto font-light">
            Todos los artículos relacionados con {category}
          </p>
        </header>

        {/* Posts Grid */}
        <Suspense fallback={<CategoryGridSkeleton />}>
          <CategoryGrid category={category} />
        </Suspense>
      </div>
    </div>
    </>
  );
}

async function CategoryGrid({ category }: { category: string }) {
  const posts = await getPostsByCategory(category);

  if (!posts || posts.length === 0) {
    notFound();
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

function CategoryGridSkeleton() {
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