import React from 'react'

export const BlogPostSkeleton = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header skeleton */}
      <header className="mb-8">
        <div className="w-3/4 h-12 bg-white/10 rounded animate-pulse mb-4" />
        <div className="flex gap-4 mb-6">
          <div className="w-32 h-6 bg-white/10 rounded animate-pulse" />
          <div className="flex gap-2">
            <div className="w-16 h-6 bg-white/10 rounded-full animate-pulse" />
            <div className="w-20 h-6 bg-white/10 rounded-full animate-pulse" />
          </div>
        </div>
        <div className="w-full h-4 bg-white/5 rounded animate-pulse mb-2" />
        <div className="w-2/3 h-4 bg-white/5 rounded animate-pulse mb-8" />
        <div className="w-full h-64 md:h-96 bg-white/10 rounded-xl animate-pulse mb-8" />
      </header>

      {/* Content skeleton */}
      <div className="space-y-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="w-full h-4 bg-white/5 rounded animate-pulse" />
            <div className="w-full h-4 bg-white/5 rounded animate-pulse" />
            <div className="w-3/4 h-4 bg-white/5 rounded animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
