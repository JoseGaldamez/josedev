'use client';

import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Post } from '@/types/blog';

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-black/50 backdrop-blur-sm border border-white/10 overflow-hidden hover:border-white/20 hover:bg-black/60 transition-all duration-300">
      {/* Featured Image */}
      {post.featuredImage && (
        <div className="relative w-full h-48">
          <Link href={`/blog/${post.slug}`}>
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Categories */}
        {post.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.slice(0, 2).map((category) => (
              <Link
                key={category}
                href={`/blog/category/${encodeURIComponent(category)}`}
                className="px-2 py-1 bg-white/10 text-white/70 rounded text-xs font-medium hover:bg-white/20 hover:text-white/90 transition-colors"
              >
                {category}
              </Link>
            ))}
            {post.categories.length > 2 && (
              <span className="px-2 py-1 bg-white/5 text-white/40 rounded text-xs">
                +{post.categories.length - 2}
              </span>
            )}
          </div>
        )}

        {/* Title */}
        <h2 className="text-xl font-thin text-white/70 mb-3 line-clamp-2">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-white/90 transition-colors"
          >
            {post.title}
          </Link>
        </h2>

        {/* Excerpt */}
        {post.excerpt && (
          <p className="text-white/40 text-sm leading-relaxed mb-4 line-clamp-3 font-light">
            {post.excerpt}
          </p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          {post.publishedAt && (
            <time
              dateTime={post.publishedAt.toISOString()}
              className="text-xs text-white/30"
            >
              {format(post.publishedAt, "d MMM yyyy", { locale: es })}
            </time>
          )}

          <Link
            href={`/blog/${post.slug}`}
            className="text-white/50 hover:text-white/80 text-sm font-light transition-colors"
          >
            Leer más →
          </Link>
        </div>
      </div>
    </article>
  );
}