import { PostPagination } from "../components";
import PostList from "../components/PostList";
import { Post, allPosts } from "contentlayer/generated";

const posts: Post[] = allPosts.sort((a, b) => b.date.localeCompare(a.date));

const totalPosts = posts.length;
const postPerPage = 1;
const totalPages = Math.ceil(totalPosts / postPerPage);

const PostsListPage = () => {
  const currentPage = Number(1);
  const offset = (currentPage - 1) * postPerPage;
  const currentPosts = posts.slice(offset, offset + postPerPage);
  return (
    <div>
      <h1 className="text-center my-4 text-3xl">My blog</h1>
      <div className="grid gap-4">
        <PostList posts={currentPosts} />
        <PostPagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default PostsListPage;
