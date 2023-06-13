import { useCallback, useEffect, useState } from "react";
import {
  addTodo,
  clearCompletedTodos,
  getTodos,
  removeTodo,
  updateOrder,
  updateTodo,
} from "../services/todos";
import { FilterT, TodoI } from "../TodoMain";

interface Params {
  filter: FilterT;
}
const useTodos = ({ filter }: Params) => {
  const [todos, setTodos] = useState<TodoI[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getTodos(filter);
      setTodos(data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [filter]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleAdd = async (title: string) => {
    try {
      const resp = await addTodo({ id: "", title, completed: false });
      setTodos((prev) => [resp.data, ...prev]);
    } catch (e) {
      console.error(e);
      setError(e);
    }
  };

  const handleUpdate = async ({
    id,
    completed,
  }: {
    id: string;
    completed: boolean;
  }) => {
    try {
      await updateTodo({ id, completed });
      setTodos(
        todos.map((i) => (i.id === id ? { ...i, completed: !i.completed } : i))
      );
    } catch (e) {
      console.error(e);
      setError(e);
    }
  };

  const handleRemove = async (id: string) => {
    try {
      await removeTodo(id);
      setTodos(todos.filter((i) => i.id !== id));
    } catch (e) {
      console.error(e);
      setError(e);
    }
  };

  const handleClearCompleted = async () => {
    try {
      await clearCompletedTodos();
      setTodos(todos.filter((i) => !i.completed));
    } catch (e) {
      console.error(e);
      setError(e);
    }
  };

  const handleDragEnd = async (result: any) => {
    const copyArray = [...todos];
    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    const [x] = copyArray.splice(startIndex, 1);
    copyArray.splice(endIndex, 0, x);
    setTodos(copyArray);
    try {
      await updateOrder(copyArray.map((i) => Number(i.id)));
    } catch (e) {
      console.error(e);
      setError(e);
    }
  };

  return {
    todos,
    loading,
    error,
    handleAdd,
    handleUpdate,
    handleRemove,
    handleClearCompleted,
    handleDragEnd,
  };
};

export default useTodos;
