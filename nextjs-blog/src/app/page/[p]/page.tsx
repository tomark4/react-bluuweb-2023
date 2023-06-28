import React from "react";
import { notFound } from "next/navigation";
import { PostList, PostPagination } from "@/app/components";
import { getPostPagination, totalPages } from "@/utils/pagination";

export const generateStaticParams = async () => {
  return Array.from({ length: totalPages }).map((_, index: number) => ({
    p: `${index + 1}`,
  }));
};

interface Props {
  params: { p: string };
}

const PageNumberComponent = ({ params }: Props) => {
  const currentPage = Number(params.p);
  const { p } = params;
  let posts = [];

  try {
    if (!/^\d+$/.test(p)) {
      notFound();
    }
    posts = getPostPagination(currentPage).currentPosts;
  } catch (e) {
    notFound();
  }

  return (
    <>
      <PostList posts={posts} />
      <PostPagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
};

export default PageNumberComponent;
