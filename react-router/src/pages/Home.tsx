import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/";
import { PostI } from "../interfaces/posts";
import { useCallback, useEffect } from "react";

const Home = () => {
  const { data, loading } = useFetch<PostI[]>({
    uri: `https://jsonplaceholder.typicode.com/posts/`,
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const filterData = useCallback(() => {}, [searchParams]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  return (
    <div>
      <h1>Home</h1>
      <div>
        <input
          type="search"
          className="form-control mb-2"
          name="filter"
          placeholder="Search..."
          value={searchParams.get("filter") || ""}
          onChange={(e) => setSearchParams({ filter: e.target.value })}
        />
      </div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <ul className="list-group">
          {data
            ?.filter((i) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = i.title.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((d) => (
              <ol className="list-group-item" key={d.id}>
                <Link to={`/post/${d.id}`}>
                  {d.id}- {d.title}
                </Link>
              </ol>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
