import { TodoI } from "./TodoMain";

interface Props {
  todos: TodoI[];
  handleClearAll: () => void;
}

const TodoComputed = ({ todos, handleClearAll }: Props) => {
  return (
    <section className="p-4 flex justify-between rounded-b-md dark:bg-gray-800">
      <span className="text-gray-400">
        {todos.filter((t) => !t.completed).length} items left
      </span>
      <button className="text-gray-400" onClick={handleClearAll}>
        Clear all tasks completed
      </button>
    </section>
  );
};

export default TodoComputed;
