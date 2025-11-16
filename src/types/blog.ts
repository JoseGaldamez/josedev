export interface Block {
  id: string;
  type: 'heading' | 'paragraph' | 'image' | 'code' | 'list' | 'quote';
  level?: number;
  content?: string;
  src?: string;
  caption?: string;
  language?: string;
  items?: string[];
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  categories: string[];
  blocks: Block[];
  status: 'draft' | 'published';
  publishedAt: Date | null;
  updatedAt: Date | null;
  createdAt?: Date;
}

export interface EditorState {
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  categories: string[];
  blocks: Block[];
  status: 'draft' | 'published';
}