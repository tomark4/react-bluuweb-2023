"use client";

import { AddTodo, TodoList } from "@/components/todos";
import { useState } from "react";

export interface Todo {
  id: string;
  name: string;
  completed: boolean;
}

export const initialState = [
  { id: "1", name: "Lorem 1", completed: false },
  { id: "2", name: "Lorem 2", completed: true },
];

const TodoPage = () => {
  const [todos, setTodos] = useState(initialState);

  const handleSubmit = (value: string) => {
    // TODO: validation here
    if (!value.trim()) return;

    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: value.trim(), completed: false },
    ]);
  };

  const handleToogleCheck = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <h1>Todos</h1>
      <AddTodo onSubmit={handleSubmit} />

      <TodoList
        todos={todos}
        onToggle={handleToogleCheck}
        onRemove={removeTodo}
      />
    </div>
  );
};

export default TodoPage;
