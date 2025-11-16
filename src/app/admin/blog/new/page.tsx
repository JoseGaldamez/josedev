'use client';

import { useRouter } from 'next/navigation';
import { PostEditor } from '@/components/admin/PostEditor';

export default function NewPostPage() {
  const router = useRouter();

  const handleSave = (savedPost: any) => {
    // Redirect to edit page after creation
    router.push(`/admin/blog/${savedPost.slug}`);
  };

  return (
    <PostEditor
      onSave={handleSave}
    />
  );
}