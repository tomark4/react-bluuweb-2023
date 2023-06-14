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
      {post && (
        <>
          <h1>{post.title}</h1>
          <h4>#Id: {post.id}</h4>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default Blog;
