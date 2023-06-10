import { FilterT } from "./TodoMain";

interface Props {
  filter: FilterT;
  onFilter: (v: FilterT) => void;
}

const TodoListFilter = ({ filter, onFilter }: Props) => {
  return (
    <section className="container mx-auto mt-8">
      <div className="bg-white p-4 rounded-md flex justify-center gap-4">
        <button
          className={`${filter === "all" ? "text-blue-600" : "text-gray-500"}`}
          onClick={() => onFilter("all")}
        >
          All
        </button>
        <button
          className={`${
            filter === "not_completed" ? "text-blue-600" : "text-gray-500"
          }`}
          onClick={() => onFilter("not_completed")}
        >
          Active
        </button>
        <button
          className={`${
            filter === "completed" ? "text-blue-600" : "text-gray-500"
          }`}
          onClick={() => onFilter("completed")}
        >
          Completed
        </button>
      </div>
    </section>
  );
};

export default TodoListFilter;
