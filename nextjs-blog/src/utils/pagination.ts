import { Post, allPosts } from "contentlayer/generated";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPosts = posts.length;
const postPerPage = 1;
export const totalPages = Math.ceil(totalPosts / postPerPage);

export const getPostPagination = (currentPage = 1) => {
  if (currentPage > totalPages) {
    throw new Error(`Page not exists`);
  }
  const offset = (currentPage - 1) * postPerPage;
  const currentPosts = posts.slice(offset, offset + postPerPage);

  return {
    currentPosts,
  };
};
