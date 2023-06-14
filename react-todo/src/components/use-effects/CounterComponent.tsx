import useCounter from "./hooks/useCounter";
import useFetch from "./hooks/useFetch";

const stylesBtn = {
  color: "white",
  width: "100px",
  borderRadius: "10px",
  padding: "5px",
  marginTop: "10px",
};

const CounterComponent = () => {
  const {
    loading,
    data: users,
    error,
  } = useFetch({
    uri: "https://jsonplaceholder.typicode.com/users/",
  });

  const { handleAdd, handleMinus, counter } = useCounter();

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

  if (error) {
    return <h1>{error.message}</h1>;
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
      <h1 className="text-4xl">Counter</h1>
      <h2 className="text-4xl">{counter}</h2>
      <div style={{ display: "flex", gap: "4px" }}>
        <button
          className="btn"
          onClick={handleAdd}
          style={{ ...stylesBtn, background: "#7dd3fc" }}
        >
          +1
        </button>
        <button
          className="btn"
          onClick={handleMinus}
          style={{ ...stylesBtn, background: "#f43f5e" }}
        >
          -1
        </button>
      </div>

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
