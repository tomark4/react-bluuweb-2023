import { Todo } from "@/app/todos/page";
import React from "react";

interface Props {
  todos: Todo[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

const TodoList = ({ todos, onToggle, onRemove }: Props) => {
  return (
    <div>
      {todos.map((todo) => (
        <article key={String(todo.id)}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onToggle(todo.id)}
            />
            {todo.name}
          </label>
          <button onClick={() => onRemove(todo.id)} className="contrast">
            Remove
          </button>
        </article>
      ))}
    </div>
  );
};

export default TodoList;
