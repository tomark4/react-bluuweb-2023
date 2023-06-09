import { useState } from "react";
import { CrossIcon, MoonIcon } from "./components/icons";

interface Todo {
  id: string;
  text: string;
  completed?: boolean;
}

const App = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setTodos((prev) => [...prev, { id: crypto.randomUUID(), text: value }]);
    setValue("");
  };

  return (
    <div className="bg-[url('./assets/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
            Todo
          </h1>
          <button>
            <MoonIcon className="fill-yellow-300" />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white mt-8 rounded-md overflow-hidden py-4 flex gap-4 items-center px-4"
        >
          <span className="rounded-full border-2 w-5 h-5 inline-block "></span>
          <input
            type="text"
            name="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Create a new TODO"
            className="w-full text-gray-600 outline-none"
          />
        </form>
      </header>

      <main className="container mx-auto px-4 mt-8">
        <div className="bg-white rounded-md">
          {todos.map((todo) => (
            <article
              key={todo.id}
              className="flex gap-4 border-b-gray-200 border-b px-4 py-5"
            >
              <button className="rounded-full border-2 w-5 h-5 inline-block flex-none"></button>
              <p className="text-gray-700 grow">{todo.text}</p>
              <button className="flex-none">
                <CrossIcon />
              </button>
            </article>
          ))}

          <section className="p-4 flex justify-between">
            <span className="text-gray-400">{todos.length} items left</span>
            <button className="text-gray-400">Clear all tasks completed</button>
          </section>
        </div>
      </main>

      <section className="px-4 container mx-auto mt-8">
        <div className="bg-white p-4 rounded-md flex justify-center gap-4">
          <button className="text-blue-600">All</button>
          <button className="hover:text-blue-600">Active</button>
          <button className="hover:text-blue-600">Completed</button>
        </div>
      </section>

      <section className="text-center mt-8">
        {/* TODO: drag and drop to reorder list */}
        <p>Drag and drop</p>
      </section>
    </div>
  );
};

export default App;
