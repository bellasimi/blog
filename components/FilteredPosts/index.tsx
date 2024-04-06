"use client";
import { Post, getPostByCategory } from "@/service/posts";
import PostsGrid from "../PostsGrid";
import { useState } from "react";

interface Props {
  posts: Post[];
}
export enum Categories {
  All_POSTS = "All Posts",
  JAVASCRIPT = "javascript",
  BACKEND = "backend",
  FRONTEND = "frontend",
  MY_STORY = "my story",
}

export default function FilteredPosts({ posts }: Props) {
  const [selectedCategory, setSelectedCategory] = useState(
    Categories.All_POSTS,
  );

  const filteredPosts = () => {
    if (selectedCategory === Categories.All_POSTS) {
      return posts;
    }
    return posts.filter((post) => post.category === selectedCategory);
  };

  return (
    <article>
      <select
        onChange={(e) => setSelectedCategory(e.target.value as Categories)}
      >
        {Object.values(Categories).map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
      <PostsGrid posts={filteredPosts()} />
    </article>
  );
}
