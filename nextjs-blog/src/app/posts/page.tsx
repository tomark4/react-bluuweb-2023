import { getPostPagination, totalPages } from "@/utils/pagination";
import { PostPagination } from "../components";
import PostList from "../components/PostList";

const PostsListPage = () => {
  const { currentPosts } = getPostPagination();

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
