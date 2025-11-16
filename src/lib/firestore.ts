import { 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy, 
  where,
  Timestamp 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from './firebase';
import { Post } from '@/types/blog';

const POSTS_COLLECTION = 'posts';

// Get all posts
export async function getAllPosts(): Promise<Post[]> {
  try {
    const postsQuery = query(
      collection(db, POSTS_COLLECTION)
    );
    
    const querySnapshot = await getDocs(postsQuery);
    const posts: Post[] = [];
    
    querySnapshot.forEach((docData) => {
      const data = docData.data();
      posts.push({
        id: docData.id,
        title: data.title || '',
        slug: data.slug || '',
        excerpt: data.excerpt || '',
        featuredImage: data.featuredImage || '',
        categories: data.categories || [],
        blocks: data.blocks || [],
        status: data.status || 'draft',
        publishedAt: data.publishedAt?.toDate() || null,
        updatedAt: data.updatedAt?.toDate() || new Date(),
        createdAt: data.createdAt?.toDate(),
      } as Post);
    });
    
    return posts;
  } catch (error) {
    console.error('Error getting posts:', error);
    throw error;
  }
}

// Get published posts only (for public blog)
export async function getPublishedPosts(): Promise<Post[]> {
  try {
    const postsQuery = query(
      collection(db, POSTS_COLLECTION),
      where('status', '==', 'published'),
      orderBy('publishedAt', 'desc')
    );
    
    const querySnapshot = await getDocs(postsQuery);
    const posts: Post[] = [];
    
    querySnapshot.forEach((docData) => {
      const data = docData.data();
      posts.push({
        id: docData.id,
        title: data.title || '',
        slug: data.slug || '',
        excerpt: data.excerpt || '',
        featuredImage: data.featuredImage || '',
        categories: data.categories || [],
        blocks: data.blocks || [],
        status: data.status || 'draft',
        publishedAt: data.publishedAt?.toDate() || null,
        updatedAt: data.updatedAt?.toDate() || new Date(),
        createdAt: data.createdAt?.toDate(),
      } as Post);
    });
    
    return posts;
  } catch (error) {
    console.error('Error getting published posts:', error);
    throw error;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const postsQuery = query(
      collection(db, POSTS_COLLECTION),
      where('slug', '==', slug)
    );
    
    const querySnapshot = await getDocs(postsQuery);
    
    if (querySnapshot.empty) {
      return null;
    }
    
    const docData = querySnapshot.docs[0];
    const data = docData.data();
    
    return {
      id: docData.id,
      title: data.title || '',
      slug: data.slug || '',
      excerpt: data.excerpt || '',
      featuredImage: data.featuredImage || '',
      categories: data.categories || [],
      blocks: data.blocks || [],
      status: data.status || 'draft',
      publishedAt: data.publishedAt?.toDate() || null,
      updatedAt: data.updatedAt?.toDate() || new Date(),
      createdAt: data.createdAt?.toDate(),
    } as Post;
  } catch (error) {
    console.error('Error getting post by slug:', error);
    throw error;
  }
}

// Get published post by slug (for public blog)
export async function getPublishedPostBySlug(slug: string): Promise<Post | null> {
  try {
    const postsQuery = query(
      collection(db, POSTS_COLLECTION),
      where('slug', '==', slug),
      where('status', '==', 'published')
    );
    
    const querySnapshot = await getDocs(postsQuery);
    
    if (querySnapshot.empty) {
      return null;
    }
    
    const docData = querySnapshot.docs[0];
    const data = docData.data();
    
    return {
      id: docData.id,
      title: data.title || '',
      slug: data.slug || '',
      excerpt: data.excerpt || '',
      featuredImage: data.featuredImage || '',
      categories: data.categories || [],
      blocks: data.blocks || [],
      status: data.status || 'draft',
      publishedAt: data.publishedAt?.toDate() || null,
      updatedAt: data.updatedAt?.toDate() || new Date(),
      createdAt: data.createdAt?.toDate(),
    } as Post;
  } catch (error) {
    console.error('Error getting published post by slug:', error);
    throw error;
  }
}

// Create new post
export async function createPost(postData: Partial<Post>): Promise<Post> {
  try {
    const now = Timestamp.now();
    
    const post = {
      ...postData,
      status: postData.status || 'draft',
      publishedAt: postData.status === 'published' ? now : null,
      updatedAt: now,
      createdAt: now,
    };
    
    const docRef = await addDoc(collection(db, POSTS_COLLECTION), post);
    
    return {
      id: docRef.id,
      title: post.title || '',
      slug: post.slug || '',
      excerpt: post.excerpt || '',
      featuredImage: post.featuredImage || '',
      categories: post.categories || [],
      blocks: post.blocks || [],
      status: post.status as 'draft' | 'published',
      publishedAt: post.publishedAt?.toDate() || null,
      updatedAt: post.updatedAt?.toDate() || new Date(),
      createdAt: post.createdAt?.toDate(),
    } as Post;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
}

// Update post
export async function updatePost(slug: string, postData: Partial<Post>): Promise<Post> {
  try {
    const existingPost = await getPostBySlug(slug);
    
    if (!existingPost) {
      throw new Error('Post not found');
    }
    
    const now = Timestamp.now();
    const updatedData = {
      ...postData,
      updatedAt: now.toDate(),
    };
    
    // If changing status to published and wasn't published before
    if (postData.status === 'published' && existingPost.status !== 'published') {
      updatedData.publishedAt = now.toDate();
    }
    
    const docRef = doc(db, POSTS_COLLECTION, existingPost.id);
    await updateDoc(docRef, updatedData);
    
    return {
      ...existingPost,
      ...updatedData,
      publishedAt: (updatedData.publishedAt as any)?.toDate() || existingPost.publishedAt,
      updatedAt: (updatedData.updatedAt as any)?.toDate() || new Date(),
    } as Post;
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
}

// Delete post
export async function deletePost(slug: string): Promise<boolean> {
  try {
    const existingPost = await getPostBySlug(slug);
    
    if (!existingPost) {
      throw new Error('Post not found');
    }
    
    // Delete featured image if exists
    if (existingPost.featuredImage) {
      try {
        const imageRef = ref(storage, existingPost.featuredImage);
        await deleteObject(imageRef);
      } catch (error) {
        console.warn('Could not delete featured image:', error);
      }
    }
    
    // Delete images in blocks
    if (existingPost.blocks) {
      for (const block of existingPost.blocks) {
        if (block.type === 'image' && block.src) {
          try {
            const imageRef = ref(storage, block.src);
            await deleteObject(imageRef);
          } catch (error) {
            console.warn('Could not delete block image:', error);
          }
        }
      }
    }
    
    const docRef = doc(db, POSTS_COLLECTION, existingPost.id);
    await deleteDoc(docRef);
    
    return true;
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
}

// Upload image to Firebase Storage
export async function uploadImageToStorage(file: File, folder = 'blog-images'): Promise<string> {
  try {
    const timestamp = Date.now();
    const fileName = `${timestamp}-${file.name}`;
    const storageRef = ref(storage, `${folder}/${fileName}`);
    
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}

// Generate unique slug
export async function generateUniqueSlug(title: string, excludeId?: string): Promise<string> {
  let baseSlug = title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
  
  let slug = baseSlug;
  let counter = 1;
  
  while (true) {
    const existingPost = await getPostBySlug(slug);
    
    if (!existingPost || (excludeId && existingPost.id === excludeId)) {
      return slug;
    }
    
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
}

// Get posts by category
export async function getPostsByCategory(category: string): Promise<Post[]> {
  try {
    const postsQuery = query(
      collection(db, POSTS_COLLECTION),
      where('categories', 'array-contains', category),
      where('status', '==', 'published'),
      orderBy('publishedAt', 'desc')
    );
    
    const querySnapshot = await getDocs(postsQuery);
    const posts: Post[] = [];
    
    querySnapshot.forEach((docData) => {
      const data = docData.data();
      posts.push({
        id: docData.id,
        title: data.title || '',
        slug: data.slug || '',
        excerpt: data.excerpt || '',
        featuredImage: data.featuredImage || '',
        categories: data.categories || [],
        blocks: data.blocks || [],
        status: data.status || 'draft',
        publishedAt: data.publishedAt?.toDate() || null,
        updatedAt: data.updatedAt?.toDate() || new Date(),
        createdAt: data.createdAt?.toDate(),
      } as Post);
    });
    
    return posts;
  } catch (error) {
    console.error('Error getting posts by category:', error);
    throw error;
  }
}

// Get all categories
export async function getAllCategories(): Promise<string[]> {
  try {
    const posts = await getPublishedPosts();
    const categoriesSet = new Set<string>();
    
    posts.forEach(post => {
      if (post.categories && Array.isArray(post.categories)) {
        post.categories.forEach(category => categoriesSet.add(category));
      }
    });
    
    return Array.from(categoriesSet).sort();
  } catch (error) {
    console.error('Error getting categories:', error);
    throw error;
  }
}