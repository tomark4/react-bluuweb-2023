import { useState } from "react";
import { TodoForm, TodoList, TodoListFilter } from ".";
import {
  addTodo,
  clearCompletedTodos,
  getTodos,
  removeTodo,
  updateOrder,
  updateTodo,
} from "./services/todos";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { DragDropContext } from "@hello-pangea/dnd";

export interface TodoI {
  id: string;
  title: string;
  completed: boolean;
}

export type FilterT = "all" | "completed" | "not_completed";

const TodoMain = () => {
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState<FilterT>("all");

  const handleSuccess = () => {
    queryClient.invalidateQueries({ queryKey: ["todos", filter] });
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });

  const handleAdd = useMutation(addTodo, {
    onSuccess: handleSuccess,
  });

  const handleUpdate = useMutation(updateTodo, {
    onSuccess: handleSuccess,
  });

  const handleRemove = useMutation(removeTodo, {
    onSuccess: handleSuccess,
  });

  const handleClearCompleted = useMutation(clearCompletedTodos, {
    onSuccess: handleSuccess,
  });

  const changeFilter = (status: FilterT) => setFilter(status);

  const handleChangeOrder = useMutation(updateOrder);

  const handleDragEnd = (result: any) => {
    const copyArray = [...data];
    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    const [x] = copyArray.splice(startIndex, 1);
    copyArray.splice(endIndex, 0, x);
    queryClient.setQueryData(["todos", filter], copyArray);
    handleChangeOrder.mutate(copyArray.map((i) => i.id));
  };

  if (isLoading)
    return (
      <h1 className="uppercase mt-5 font-bold text-white text-center">
        Loading...
      </h1>
    );

  if (isError) return <p>{(error as any).message} - Was an error</p>;

  return (
    <>
      <main className="container mx-auto px-4 mt-8 md:max-w-xl transition-all duration-1000">
        <TodoForm
          onCreate={(title) =>
            handleAdd.mutate({ id: "", title, completed: false })
          }
        />
        <DragDropContext onDragEnd={handleDragEnd}>
          <TodoList
            todos={data}
            onRemove={handleRemove.mutate}
            onUpdate={(id, completed) =>
              handleUpdate.mutate({ id, completed: !completed })
            }
            onClearAll={handleClearCompleted.mutate}
          />
        </DragDropContext>

        <TodoListFilter onFilter={changeFilter} filter={filter} />
      </main>
    </>
  );
};

export default TodoMain;
