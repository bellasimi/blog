import CarouselPosts from "@/components/CarouselPosts";
import FeaturedPost from "@/components/FeaturedPosts";
import Profile from "@/components/Profile";

export default function Home() {
  return (
    <section className="mt-10">
      <Profile />
      <FeaturedPost />
      <CarouselPosts />
    </section>
  );
}
