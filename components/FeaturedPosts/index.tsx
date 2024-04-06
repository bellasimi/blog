import PostsGrid from "../PostsGrid";
import { getFeaturedPosts } from "@/service/posts";

export default async function FeaturedPost() {
  const posts = await getFeaturedPosts();

  return (
    <section className="mx-auto mt-10">
      <h1 className="mb-5 text-2xl font-bold">최근 포스트</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}
