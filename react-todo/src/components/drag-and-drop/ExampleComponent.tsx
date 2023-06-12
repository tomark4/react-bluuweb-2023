import { useEffect, useState } from "react";
import "./styles.css";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const initialTodos = [
  { id: crypto.randomUUID(), text: "Learn react" },
  { id: crypto.randomUUID(), text: "Learn css" },
  { id: crypto.randomUUID(), text: "Learn drag and drop" },
];

interface TodoI {
  id: string;
  text: string;
}

const ExampleComponent = () => {
  const [todos, setTodos] = useState<TodoI[]>(
    "todos" in localStorage
      ? JSON.parse(localStorage.getItem("todos") || "{}")
      : initialTodos
  );

  useEffect(() => {
    localStorage.todos = JSON.stringify(todos);
  }, [todos]);

  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    const copyArray = [...todos];
    const [x] = copyArray.splice(startIndex, 1);
    copyArray.splice(endIndex, 0, x);

    setTodos(copyArray);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div style={{ margin: "20px auto" }}>
        <h1 style={{ fontSize: "45px" }} className="text-center mb-4">
          Drag and drop
        </h1>
        <Droppable droppableId="my-todos">
          {(dropableProvided) => (
            <ul
              ref={dropableProvided.innerRef}
              {...dropableProvided.droppableProps}
            >
              {todos.map(({ id, text }, index) => (
                <Draggable draggableId={String(id)} key={id} index={index}>
                  {(draggableProvided) => (
                    <li
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      {text}
                    </li>
                  )}
                </Draggable>
              ))}
              {dropableProvided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default ExampleComponent;
