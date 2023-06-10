import { useState } from "react";
import { TodoForm, TodoList, TodoListFilter } from ".";

export interface TodoI {
  id: string;
  title: string;
  completed?: boolean;
}

export type FilterT = "all" | "completed" | "not_completed";

const initialState: TodoI[] = [
  { id: crypto.randomUUID(), title: "Complete react course", completed: true },
  { id: crypto.randomUUID(), title: "English conversational course" },
  { id: crypto.randomUUID(), title: "Lorem ipsum" },
  { id: crypto.randomUUID(), title: "Dolor sit amet" },
];

const TodoMain = () => {
  const [todos, setTodos] = useState<TodoI[]>(initialState);
  const [filter, setFilter] = useState<FilterT>("all");

  const handleAdd = (value: string) => {
    setTodos((prev) => [...prev, { id: crypto.randomUUID(), title: value }]);
  };

  const handleRemove = (id: string) => {
    setTodos(todos.filter((i) => i.id !== id));
  };

  const handleUpdate = (id: string) => {
    setTodos(
      todos.map((i) => (i.id === id ? { ...i, completed: !i.completed } : i))
    );
  };

  const clearAllCompleted = () => {
    setTodos(todos.filter((t) => !t.completed));
  };

  const handleFilterTodos = (): TodoI[] => {
    switch (filter) {
      case "all": {
        return todos;
      }

      case "completed": {
        return todos.filter((t) => t.completed);
      }

      case "not_completed": {
        return todos.filter((t) => !t.completed);
      }

      default: {
        return todos;
      }
    }
  };

  const changeFilter = (value: FilterT) => setFilter(value);

  return (
    <>
      <main className="container mx-auto px-4 mt-8">
        <TodoForm onCreate={handleAdd} />

        <TodoList
          todos={handleFilterTodos()}
          onRemove={handleRemove}
          onUpdate={handleUpdate}
          onClearAll={clearAllCompleted}
        />

        <TodoListFilter onFilter={changeFilter} filter={filter} />
      </main>
    </>
  );
};

export default TodoMain;
