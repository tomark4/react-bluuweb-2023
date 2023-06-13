import { useState } from "react";
import { TodoForm, TodoList, TodoListFilter } from ".";
import { DragDropContext } from "@hello-pangea/dnd";
import useTodos from "./hooks/useTodos";

export interface TodoI {
  id: string;
  title: string;
  completed: boolean;
}

export type FilterT = "all" | "completed" | "not_completed";

const TodoMain = () => {
  const [filter, setFilter] = useState<FilterT>("all");
  const {
    loading,
    error,
    todos,
    handleAdd,
    handleUpdate,
    handleRemove,
    handleClearCompleted,
    handleDragEnd,
  } = useTodos({
    filter,
  });

  const changeFilter = (status: FilterT) => setFilter(status);

  if (loading)
    return (
      <h1 className="uppercase mt-5 font-bold text-white text-center">
        Loading...
      </h1>
    );

  if (error) return <p>{(error as any).message} - Was an error</p>;

  return (
    <>
      <main className="container mx-auto px-4 mt-8 md:max-w-xl transition-all duration-1000">
        <TodoForm onCreate={handleAdd} />
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={todos}
            onRemove={handleRemove}
            onUpdate={(id, completed) =>
              handleUpdate({ id, completed: !completed })
            }
            onClearAll={handleClearCompleted}
          />
        </DragDropContext>

        <TodoListFilter onFilter={changeFilter} filter={filter} />
      </main>
    </>
  );
};

export default TodoMain;
