import { getPostData } from "@/service/posts";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Page({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  return (
    <section>
      <h1>{post.title}</h1>
      <pre>{post.content}</pre>
    </section>
  );
}
