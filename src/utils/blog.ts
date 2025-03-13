import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, BlogPostMeta } from "@/types/blog";

const POSTS_DIR = path.join(process.cwd(), "src/content/blog/posts");

export async function getAllPosts(): Promise<BlogPostMeta[]> {
    const files = fs.readdirSync(POSTS_DIR);

    const posts = files
        .filter((file) => file.endsWith(".md"))
        .map((file) => {
            const filePath = path.join(POSTS_DIR, file);
            const fileContent = fs.readFileSync(filePath, "utf8");
            const { data } = matter(fileContent);
            const slug = file.replace(".md", "");

            return {
                slug,
                title: data.title,
                category: data.category,
                image: data.image,
                date: data.date,
                description: data.description,
                author: data.author,
                tags: data.tags,
            };
        })
        .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );

    return posts;
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
    const filePath = path.join(POSTS_DIR, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);

    return {
        slug,
        title: data.title,
        date: data.date,
        category: data.category,
        image: data.image,
        description: data.description,
        author: data.author,
        tags: data.tags,
        content,
    };
}
