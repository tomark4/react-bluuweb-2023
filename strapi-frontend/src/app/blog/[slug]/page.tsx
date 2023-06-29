import { fetchApi } from "@/helpers/fetch-api";
import React from "react";
import { Post } from "../interfaces/post";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import { formatDate } from "@/helpers/format-date";
import { getImageUrl } from "@/helpers/image-url";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";

const getData = async (slug: string) => {
  const { data } = await fetchApi("/posts", {
    populate: "*",
    filters: {
      slug,
    },
  });
  return data[0];
};

interface Props {
  params: { slug: string };
}

const PostDetail = async ({ params }: Props) => {
  const post: Post = await getData(params.slug);

  if (!post) {
    notFound();
  }

  const { title, description, createdAt, image, body } = post.attributes;
  const { url, width, height } = image.data.attributes.formats.medium;

  return (
    <div className="space-y-8">
      <PageHeader text={title} />
      <p className="text-gray-500">{formatDate(createdAt)}</p>
      <Image
        className="h-auto rounded-lg"
        src={getImageUrl(url)}
        alt=""
        width={width}
        height={height}
      />
      <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
        {description}
      </p>
      <div className="prose">
        {/* Este error en particular está codificado en TypeScript. El equipo de React está trabajando con el equipo de TypeScript para resolver esto. */}
        {/* https://github.com/vercel/next.js/issues/42292 */}
        {/* @ts-ignore Server Component */}
        <MDXRemote source={body} />
      </div>
    </div>
  );
};

export default PostDetail;
