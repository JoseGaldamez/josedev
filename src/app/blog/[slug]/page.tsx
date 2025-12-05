import { Suspense } from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPost } from '@/components/blog/BlogPost';
import { getPublishedPostBySlug, getPublishedPosts } from '@/lib/firestore';
import { Post } from '@/types/blog';
import { BlogPostSkeleton } from '@/components/blog/BlogPostSkeleton';
import { Topbar } from '@/components/Topbar';

// ISR: Revalidar cada 15 minutos (900 segundos)
export const revalidate = 900;

interface PageProps {
  params: {
    slug: string;
  };
}

// Generar páginas estáticas para posts existentes, pero permitir páginas dinámicas para nuevos posts
export async function generateStaticParams() {
  try {
    const posts = await getPublishedPosts();
    
    return posts?.map((post) => ({
      slug: post.slug,
    })) || [];
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPublishedPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post no encontrado - José Galdámez',
      description: 'El artículo que buscas no existe o ha sido eliminado.',
      robots: 'noindex, nofollow',
    };
  }

  const baseUrl = 'https://josegaldamez.dev';
  const canonicalUrl = `${baseUrl}/blog/${post.slug}`;
  
  return {
    title: `${post.title} - José Galdámez`,
    description: post.excerpt || `Lee el artículo completo sobre ${post.title}. Desarrollador Full Stack especializado en React, Next.js y tecnologías modernas.`,
    keywords: [
      ...post.categories,
      'José Galdámez',
      'desarrollo web',
      'programación',
      'full stack developer',
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript'
    ].join(', '),
    authors: [{ name: 'José Galdámez' }],
    creator: 'José Galdámez',
    publisher: 'José Galdámez',
    robots: 'index, follow',
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt || `Lee el artículo completo sobre ${post.title}`,
      type: 'article',
      publishedTime: post.publishedAt?.toISOString(),
      modifiedTime: post.updatedAt?.toISOString(),
      authors: ['José Galdámez'],
      section: post.categories[0] || 'Desarrollo Web',
      tags: post.categories,
      url: canonicalUrl,
      siteName: 'José Galdámez - Full Stack Developer',
      locale: 'es_ES',
      images: post.featuredImage ? [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ] : [
        {
          url: `${baseUrl}/jose-portada.png`,
          width: 1200,
          height: 630,
          alt: 'José Galdámez - Full Stack Developer',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `Lee el artículo completo sobre ${post.title}`,
      creator: '@josegaldamez',
      site: '@josegaldamez',
      images: post.featuredImage ? [post.featuredImage] : [`${baseUrl}/jose-portada.png`],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  return (
    <>
    <Topbar />
    <div className="min-h-screen bg-black text-[#f2f2f2] py-10">
      <Suspense fallback={<BlogPostSkeleton />}>
        <BlogPostContent slug={params.slug} />
      </Suspense>
    </div>
    </>
  );
}

async function BlogPostContent({ slug }: { slug: string }) {
  const post = await getPublishedPostBySlug(slug);

  if (!post || !post.publishedAt) {
    notFound();
  }

  const baseUrl = 'https://josegaldamez.dev';
  
  // Structured Data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.title,
    image: post.featuredImage || `${baseUrl}/jose-portada.png`,
    datePublished: post.publishedAt.toISOString(),
    dateModified: post.updatedAt?.toISOString() || post.publishedAt.toISOString(),
    author: {
      '@type': 'Person',
      name: 'José Galdámez',
      url: baseUrl,
      sameAs: [
        'https://github.com/JoseGaldamez',
        'https://www.linkedin.com/in/josegaldamezdev/',
        'https://twitter.com/josegaldamezdev'
      ]
    },
    publisher: {
      '@type': 'Person',
      name: 'José Galdámez',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/jose.jpeg`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/blog/${post.slug}`
    },
    keywords: post.categories.join(', '),
    articleSection: post.categories[0] || 'Desarrollo Web',
    inLanguage: 'es',
    isPartOf: {
      '@type': 'Blog',
      name: 'Blog de José Galdámez',
      url: `${baseUrl}/blog`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <BlogPost post={post} />
    </>
  );
}

