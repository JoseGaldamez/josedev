import React from 'react'

export const BlogGridSkeleton = () => {
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
