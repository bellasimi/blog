import { Nullable } from "@/type/Nullable";
import { readFile } from "fs/promises";
import path from "path";

export interface Post {
  title: string;
  description: string;
  date: Date;
  category: string;
  path: string;
  featured: boolean;
}

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then(JSON.parse)
    .then((posts) =>
      posts.sort((a: Post, b: Post) => (b.date > a.date ? -1 : 1)),
    );
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => post.featured);
}

export async function getNonFeaturedPosts(): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.filter((post) => !post.featured);
}

export async function getPostByCategory(category: string): Promise<Post[]> {
  const posts = await getAllPosts();

  if (category === "All Posts") {
    return posts;
  }

  return posts.filter((post) => post.category === category);
}

export interface PostData extends Post {
  content: string;
}

export async function getPostData(fileName: string): Promise<PostData> {
  const metadata = await getAllPosts().then((posts) =>
    posts.find((post) => post.path === fileName),
  );

  if (!metadata) {
    throw new Error(`No such post: ${fileName}`);
  }

  const filePath = path.join(process.cwd(), "data", "posts", `${fileName}.md`);
  const content = await readFile(filePath, "utf-8");

  return { ...metadata, content };
}
