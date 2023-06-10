import { TodoItem, TodoComputed } from ".";
import { TodoI } from "./TodoMain";

interface Props {
  todos: TodoI[];
  onUpdate: (id: string) => void;
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

const TodoList = ({ todos, onRemove, onUpdate, onClearAll }: Props) => {
  return (
    <div className="bg-white rounded-md mt-8">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          handleRemove={onRemove}
          handleUpdate={onUpdate}
        />
      ))}

      <TodoComputed todos={todos} handleClearAll={onClearAll} />
    </div>
  );
};

export default TodoList;
