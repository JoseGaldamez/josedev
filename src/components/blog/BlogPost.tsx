
import { BlockRenderer } from './BlockRenderer';
import { BlogPostFooter } from './BlogPostFooter';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Post } from '@/types/blog';

interface BlogPostProps {
  post: Post;
}

export function BlogPost({ post }: BlogPostProps) {
  // Breadcrumbs data
  const breadcrumbItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: post.title, current: true }
  ];

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={breadcrumbItems} generateStructuredData />

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-4xl font-semibold text-white/80 mb-4 leading-tight">
            {post.title}
          </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-white/50 mb-6">
          {post.publishedAt && (
            <time dateTime={post.publishedAt.toISOString()}>
              {format(post.publishedAt, "d 'de' MMMM 'de' yyyy", { locale: es })}
            </time>
          )}
          
          {post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.categories.map((category) => (
                <Link
                  key={category}
                  href={`/blog/category/${encodeURIComponent(category)}`}
                  className="px-3 py-1 bg-white/10 text-white/70 rounded-full text-xs font-medium hover:bg-white/20 hover:text-white/90 transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative w-full h-64 md:h-96 mb-8">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        )}
      </header>

      {/* Content */}
      <div className="px-5 md:px-10 prose prose-invert max-w-none prose-headings:text-white/80 prose-headings:font-thin prose-p:text-white/60 prose-p:font-light prose-a:text-white/70 prose-a:hover:text-white/90 prose-strong:text-white/80 prose-code:text-white/80 prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10">
        {post.blocks.map((block) => (
          <BlockRenderer key={block.id} block={block} />
        ))}
      </div>

        {/* Footer */}
        <BlogPostFooter updatedAt={post.updatedAt} />
      </article>
    </>
  );
}