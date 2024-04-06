import { Post } from "@/service/posts";
import Link from "next/link";
import Image from "next/image";

interface Props {
  post: Post;
}

export default function PostCard({
  post: { title, description, date, path, category },
}: Props) {
  return (
    <Link href={`/posts/${path}`}>
      <article className="overflow-hidden rounded-md shadow-md transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-lg">
        <Image
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
          className="w-full"
        />
        <div className="flex flex-col items-center p-4">
          <time className="self-end">{date.toString()}</time>
          <h3 className="mt-1 text-lg font-bold">{title}</h3>
          <p className="w-full truncate text-center">{description}</p>
          <span className="my-2 rounded-lg bg-green-100 px-2 text-sm">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
