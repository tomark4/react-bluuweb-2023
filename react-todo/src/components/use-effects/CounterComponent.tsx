import { useState } from "react";
import useFecth from "./hooks/useFecth";

const CounterComponent = () => {
  const [counter, setCounter] = useState(0);
  const { loading, users } = useFecth();

  // FETCH VERSION
  // useEffect(() => {
  //   setLoading(true);
  //   fetch(`https://jsonplaceholder.typicode.com/users`)
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setUsers(data);
  //       setLoading(false);
  //     })
  //     .catch((e) => console.error(e));
  // }, []);

  if (loading) {
    return (
      <div
        className="flex"
        style={{
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 className="text-4xl">Loading...</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Counter</h1>
      <button
        className="btn"
        onClick={() => setCounter((prev) => prev + 1)}
        style={{
          background: "blue",
          color: "white",
          width: "100px",
          borderRadius: "10px",
          padding: "5px",
          marginTop: "10px",
        }}
      >
        {counter}
      </button>

      <ul className="list-decimal">
        {users.map((user) => (
          <ol className="mt-3 border-b" key={user.id}>
            {user.email}
          </ol>
        ))}
      </ul>
    </div>
  );
};

export default CounterComponent;
