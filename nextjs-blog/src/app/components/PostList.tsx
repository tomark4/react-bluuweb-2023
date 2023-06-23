import PostItem from "./PostItem";
import { Post } from "contentlayer/generated";

interface Props {
  posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <PostItem post={post} key={post._raw.flattenedPath} />
      ))}
    </>
  );
};

export default PostList;
