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
          <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-gray-600 mt-2">
            Gestiona todos los posts de tu blog
          </p>
        </div>
        
        <Link href="/admin/blog/new">
          <Button>
            Crear nuevo post
          </Button>
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="text-2xl font-bold text-gray-900">
            {posts.length}
          </div>
          <div className="text-sm text-gray-600">
            Total posts
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="text-2xl font-bold text-green-600">
            {posts.filter(p => p.status === 'published').length}
          </div>
          <div className="text-sm text-gray-600">
            Publicados
          </div>
        </Card>
        
        <Card className="p-6">
          <div className="text-2xl font-bold text-yellow-600">
            {posts.filter(p => p.status === 'draft').length}
          </div>
          <div className="text-sm text-gray-600">
            Borradores
          </div>
        </Card>
      </div>

      {/* Posts List */}
      {posts.length === 0 ? (
        <Card className="p-12 text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            No hay posts aún
          </h2>
          <p className="text-gray-600 mb-6">
            Crea tu primer post para empezar a gestionar tu blog
          </p>
          <Link href="/admin/blog/new">
            <Button>
              Crear primer post
            </Button>
          </Link>
        </Card>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Card key={post.id} className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {post.title}
                    </h3>
                    <Badge 
                      variant={post.status === 'published' ? 'default' : 'secondary'}
                    >
                      {post.status === 'published' ? 'Publicado' : 'Borrador'}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    Slug: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{post.slug}</span>
                  </p>
                  
                  {post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((category) => (
                        <Badge key={category} variant="outline" className="text-xs">
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
                      <Button variant="outline" size="sm">
                        Ver ↗
                      </Button>
                    </Link>
                  )}
                  
                  <Link href={`/admin/blog/${post.slug}`}>
                    <Button variant="outline" size="sm">
                      Editar
                    </Button>
                  </Link>
                  
                  <Button 
                    variant="destructive" 
                    size="sm"
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
          <div className="w-48 h-8 bg-gray-200 rounded animate-pulse mb-2" />
          <div className="w-64 h-4 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="w-32 h-10 bg-gray-200 rounded animate-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="p-6">
            <div className="w-12 h-8 bg-gray-200 rounded animate-pulse mb-2" />
            <div className="w-20 h-4 bg-gray-200 rounded animate-pulse" />
          </Card>
        ))}
      </div>

      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Card key={i} className="p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="w-64 h-6 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="w-48 h-4 bg-gray-200 rounded animate-pulse mb-3" />
                <div className="flex gap-2 mb-3">
                  <div className="w-16 h-5 bg-gray-200 rounded animate-pulse" />
                  <div className="w-20 h-5 bg-gray-200 rounded animate-pulse" />
                </div>
                <div className="w-40 h-4 bg-gray-200 rounded animate-pulse" />
              </div>
              <div className="flex gap-2">
                <div className="w-16 h-8 bg-gray-200 rounded animate-pulse" />
                <div className="w-16 h-8 bg-gray-200 rounded animate-pulse" />
                <div className="w-20 h-8 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}