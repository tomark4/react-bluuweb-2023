import { Link } from "react-router-dom";
import { useFetch } from "../hooks/";
import { PostI } from "../interfaces/posts";

const Home = () => {
  const { data, loading } = useFetch<PostI[]>({
    uri: `https://jsonplaceholder.typicode.com/posts/`,
  });

  return (
    <div>
      <h1>Home</h1>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul className="list-group">
          {data?.map((d) => (
            <li className="list-group-item" key={d.id}>
              <Link to={`/post/${d.id}`}>
                {d.id} | {d.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
