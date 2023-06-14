import { useParams } from "react-router-dom";
import { PostI } from "../interfaces/posts";
import { useFetch } from "../hooks";

const Blog = () => {
  const { id } = useParams();
  const { data: post, loading } = useFetch<PostI>({
    uri: `https://jsonplaceholder.typicode.com/posts/${id}`,
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Post</h1>
      {post && (
        <>
          <h6>{post.id}</h6>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default Blog;
