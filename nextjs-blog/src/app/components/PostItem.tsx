import Link from "next/link";
import PostDate from "./PostDate";
import { Post } from "contentlayer/generated";

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <article className="rounded shadow-md p-4">
      <h2 className="text-2xl">
        <Link href={`${post.url}`}>{post.title}</Link>
      </h2>
      <PostDate value={post.date} />
      <p>{post.description}</p>
    </article>
  );
};

export default PostItem;
