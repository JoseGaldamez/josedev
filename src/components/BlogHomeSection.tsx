import React, { Suspense } from 'react'
import { BlogGridSkeleton } from './blog/BlogGridSkeleton'
import { BlogGrid } from './blog/BlogGrid'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export const BlogHomeSection = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 pt-24">
            <h2 className="text-4xl md:text-5xl font-thin text-white/70 mb-4">
                Blog
            </h2>
            <p className="text-xl text-white/40">
                Comparto mis experiencias y conocimientos sobre desarrollo web,
                tecnologías modernas, las mejores prácticas en programación y noticias de la industria.
            </p>
            <hr className="border-gray-600 border-t my-10" />
            <Suspense fallback={<BlogGridSkeleton />}>
                <BlogGrid limit={3} />

                <Link href="/blog" className="my-20 flex items-center justify-center text-center text-white/70 hover:text-white font-medium border p-3 bg-transparent hover:bg-white/5 w-fit transition-colors duration-300 mx-auto">
                    Ver todos los posts <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
            </Suspense>
        </div>
    )
}
