import { getNonFeaturedPosts } from "@/service/posts";
import PostCard from "../PostCard";
import MultiCarousel from "../MultiCarousel";

export default async function CarouselPosts() {
  const posts = await getNonFeaturedPosts();

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-bold">관심있을 만한 포스트</h2>
      <MultiCarousel>
        {posts.map((post) => (
          <li key={post.path}>
            <PostCard post={post} />
          </li>
        ))}
      </MultiCarousel>
    </section>
  );
}
