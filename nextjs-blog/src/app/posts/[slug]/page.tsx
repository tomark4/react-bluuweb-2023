import { PostDate } from "@/app/components/";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import { useMDXComponent } from "next-contentlayer/hooks";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export const generateStaticParams = async () => {
  return allPosts.map((post) => ({ slug: post._raw.flattenedPath }));
};

// Seo by page
export const generateMetadata = ({ params }: Props) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  return {
    title: post?.title ?? "Post not found",
    description: post?.description ?? "Post not found",
  };
};

const PostDetailPage: React.FC<Props> = ({ params }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  const MdxContent = useMDXComponent(post?.body.code ?? "");

  if (!post) {
    return notFound();
  }

  return (
    <article>
      <h2 className="text-2xl">
        <Link href={`${post.url}`}>{post.title}</Link>
      </h2>
      <PostDate value={post.date} />
      <p>{post.description}</p>
      <MdxContent />
    </article>
  );
};

export default PostDetailPage;
