import { TodoItem, TodoComputed } from ".";
import { TodoI } from "./TodoMain";
import { Draggable, Droppable } from "@hello-pangea/dnd";

interface Props {
  todos: TodoI[];
  onUpdate: (id: string, completed: boolean) => void;
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

const TodoList = ({ todos, onRemove, onUpdate, onClearAll }: Props) => {
  return (
    <Droppable droppableId="todos">
      {(droppableProvided) => (
        <div
          className="bg-white dark:bg-gray-800 overflow-hidden rounded-md mt-8 transition-all duration-1000"
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
        >
          {todos.map((todo, idx) => (
            <Draggable key={todo.id} index={idx} draggableId={String(todo.id)}>
              {(draggableProvided) => (
                <TodoItem
                  ref={draggableProvided.innerRef}
                  {...todo}
                  handleRemove={onRemove}
                  handleUpdate={onUpdate}
                  {...draggableProvided.dragHandleProps}
                  {...draggableProvided.draggableProps}
                />
              )}
            </Draggable>
          ))}
          {droppableProvided.placeholder}
          <TodoComputed todos={todos} handleClearAll={onClearAll} />
        </div>
      )}
    </Droppable>
  );
};

export default TodoList;
