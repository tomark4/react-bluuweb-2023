import { PostList, PostPagination } from "@/app/components";
import { Post, allPosts } from "contentlayer/generated";
import React from "react";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPosts = posts.length;
const postPerPage = 1;
const totalPages = Math.ceil(totalPosts / postPerPage);

interface Props {
  params: { p: string };
}

const PageNumberComponent = ({ params }: Props) => {
  const currentPage = Number(params.p);
  const offset = (currentPage - 1) * postPerPage;
  const currentPosts = posts.slice(offset, offset + postPerPage);
  return (
    <>
      <PostList posts={currentPosts} />
      <PostPagination currentPage={currentPage} totalPages={totalPages} />
    </>
  );
};

export default PageNumberComponent;
