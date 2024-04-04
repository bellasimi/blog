import FilteredPosts from "@/components/FilteredPosts";
import { getAllPosts } from "@/service/posts";

export default async function PostsPage() {
  const posts = await getAllPosts();
  return (
    <section>
      <FilteredPosts posts={posts} />
    </section>
  );
}
