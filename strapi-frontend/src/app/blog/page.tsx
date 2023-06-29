import PageCardImage from "@/components/PageCardImage";
import PageHeader from "@/components/PageHeader";
import { fetchApi } from "@/helpers/fetch-api";
import React from "react";
import { Post } from "./interfaces/post";
import PagePagination from "@/components/PagePagination";

const getData = async (page = 1, pageSize = 2) => {
  return fetchApi("/posts", {
    populate: "*",
    sort: { createdAt: "asc" },
    pagination: { page, pageSize },
  });
};

const PostPage = async ({ searchParams }: { searchParams: { p: string } }) => {
  const { p } = searchParams;
  let pageNumber = p ? parseInt(p) : 1;

  if (pageNumber < 1 || isNaN(pageNumber)) {
    pageNumber = 1;
    console.error("Page number not valid");
  }

  const { data, pagination } = await getData(pageNumber);

  return (
    <div className="space-y-8">
      <PageHeader text="Latest posts" />
      <PagePagination pagination={pagination} />
      <div className="grid gap-4">
        {data.map((post: Post) => (
          <PageCardImage key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
