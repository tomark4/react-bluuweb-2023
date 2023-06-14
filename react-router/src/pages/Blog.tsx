import { useLoaderData } from "react-router-dom";
import { PostI } from "../interfaces/posts";

export const loaderPost = async ({ params }: any) => {
  const resp = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  console.log(resp);

  if (!resp.ok)
    throw {
      status: resp.status,
      statusText: "Not found",
      error: { message: "There was an error" },
    };

  const post = await resp.json();

  return { post };
};

const Blog = () => {
  const { post } = useLoaderData() as { post: PostI };

  return (
    <div>
      {post && (
        <>
          <h4>{post.id}</h4>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  );
};

export default Blog;
