import { Link, useLoaderData } from "react-router-dom";
import { PostI } from "../interfaces/posts";

export const loaderPosts = async () => {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const posts = await resp.json();
  return { posts };
};

const Home = () => {
  const { posts } = useLoaderData() as { posts: PostI[] };

  return (
    <div>
      <h1>Home</h1>
      <ul className="list-group">
        {posts?.map((post: PostI) => (
          <li className="list-group-item" key={post.id}>
            <Link to={`/post/${post.id}`}>
              {" "}
              {post.id}- {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
