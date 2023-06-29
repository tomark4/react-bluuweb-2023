import PageCardImage from "@/components/PageCardImage";
import PageHeader from "@/components/PageHeader";
import { fetchApi } from "@/helpers/fetch-api";
import React from "react";
import { Post } from "./interfaces/post";

const getData = async (page = 1, pageSize = 2) => {
  return fetchApi("/posts", {
    populate: "*",
    sort: { createdAt: "asc" },
    pagination: { page, pageSize },
  });
};

const PostPage = async () => {
  const { data, pagination } = await getData();

  return (
    <div className="mt-4">
      <PageHeader text="Latest posts" />
      <div className="grid gap-4">
        {data.map((post: Post) => (
          <PageCardImage key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
