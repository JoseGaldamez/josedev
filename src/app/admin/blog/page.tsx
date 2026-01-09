'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useFirestore } from '@/hooks/useFirestore';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

interface Post {
  id: string;
  title: string;
  slug: string;
  status: 'draft' | 'published';
  publishedAt: Date | null;
  updatedAt: Date;
  categories: string[];
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { posts: postActions, loading, error } = useFirestore();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const result = await postActions.getAll();
    if (result) {
      setPosts(result as Post[]);
    }
  };

  const handleDeletePost = async (slug: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este post? Esta acción no se puede deshacer.')) {
      return;
    }

    const result = await postActions.delete(slug);
    if (result) {
      loadPosts(); // Refresh the list
    }
  };

  if (loading) {
    return <AdminBlogSkeleton />;
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md inline-block">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white">Blog Posts</h1>
          <p className="text-gray-400 mt-2">
            Gestiona todos los posts de tu blog
          </p>
        </div>

        <Link href="/admin/blog/new">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Crear nuevo post
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-white/5 border-white/10 text-white">
          <div className="text-2xl font-bold text-white">
            {posts.length}
          </div>
          <div className="text-sm text-gray-400">
            Total posts
          </div>
        </Card>

        <Card className="p-6 bg-white/5 border-white/10">
          <div className="text-2xl font-bold text-green-400">
            {posts.filter(p => p.status === 'published').length}
          </div>
          <div className="text-sm text-gray-400">
            Publicados
          </div>
        </Card>

        <Card className="p-6 bg-white/5 border-white/10">
          <div className="text-2xl font-bold text-yellow-500">
            {posts.filter(p => p.status === 'draft').length}
          </div>
          <div className="text-sm text-gray-400">
            Borradores
          </div>
        </Card>
      </div>

      {/* Posts List */}
      {posts.length === 0 ? (
        <Card className="p-12 text-center bg-white/5 border-white/10">
          <h2 className="text-xl font-semibold text-white mb-2">
            No hay posts aún
          </h2>
          <p className="text-gray-400 mb-6">
            Crea tu primer post para empezar a gestionar tu blog
          </p>
          <Link href="/admin/blog/new">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Crear primer post
            </Button>
          </Link>
        </Card>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {post.title}
                    </h3>
                    <Badge
                      variant={post.status === 'published' ? 'default' : 'secondary'}
                      className={post.status === 'published' ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}
                    >
                      {post.status === 'published' ? 'Publicado' : 'Borrador'}
                    </Badge>
                  </div>

                  <p className="text-sm text-gray-400 mb-3">
                    Slug: <span className="font-mono bg-black/30 px-2 py-1 rounded text-gray-300">{post.slug}</span>
                  </p>

                  {post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((category) => (
                        <Badge key={category} variant="outline" className="text-xs border-white/20 text-gray-300">
                          {category}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="text-sm text-gray-500">
                    {post.status === 'published' && post.publishedAt ? (
                      <span>
                        Publicado: {format(post.publishedAt, "d 'de' MMMM 'de' yyyy", { locale: es })}
                      </span>
                    ) : (
                      <span>
                        Última actualización: {format(post.updatedAt, "d 'de' MMMM 'de' yyyy", { locale: es })}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  {post.status === 'published' && (
                    <Link
                      href={`/blog/${post.slug}`}
                      target="_blank"
                    >
                      <Button variant="outline" size="sm" className="border-white/20 text-gray-300 hover:text-white hover:bg-white/10 bg-transparent">
                        Ver ↗
                      </Button>
                    </Link>
                  )}

                  <Link href={`/admin/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="border-white/20 text-gray-300 hover:text-white hover:bg-white/10 bg-transparent">
                      Editar
                    </Button>
                  </Link>

                  <Button
                    variant="destructive"
                    size="sm"
                    className="bg-red-900/50 text-red-200 hover:bg-red-900/80 border border-red-900"
                    onClick={() => handleDeletePost(post.slug)}
                  >
                    Eliminar
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function AdminBlogSkeleton() {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="w-48 h-8 bg-gray-800 rounded animate-pulse mb-2" />
          <div className="w-64 h-4 bg-gray-800 rounded animate-pulse" />
        </div>
        <div className="w-32 h-10 bg-gray-800 rounded animate-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="p-6 bg-white/5 border-white/10">
            <div className="w-12 h-8 bg-gray-800 rounded animate-pulse mb-2" />
            <div className="w-20 h-4 bg-gray-800 rounded animate-pulse" />
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i} className="p-6 bg-white/5 border-white/10">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="w-64 h-6 bg-gray-800 rounded animate-pulse mb-2" />
                <div className="w-48 h-4 bg-gray-800 rounded animate-pulse mb-3" />
                <div className="flex gap-2 mb-3">
                  <div className="w-16 h-5 bg-gray-800 rounded animate-pulse" />
                  <div className="w-20 h-5 bg-gray-800 rounded animate-pulse" />
                </div>
                <div className="w-40 h-4 bg-gray-800 rounded animate-pulse" />
              </div>
              <div className="flex gap-2">
                <div className="w-16 h-8 bg-gray-800 rounded animate-pulse" />
                <div className="w-16 h-8 bg-gray-800 rounded animate-pulse" />
                <div className="w-20 h-8 bg-gray-800 rounded animate-pulse" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}