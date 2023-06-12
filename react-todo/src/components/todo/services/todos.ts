import axios from "axios";
import { FilterT, TodoI } from "../TodoMain";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

const getTodos = async (status: FilterT) => {
  let uri = `/todos/`;

  if (status !== "all") {
    uri += `?status=${status}`;
  }

  const resp = await axiosInstance.get(uri);
  return resp.data;
};

const addTodo = async (payload: TodoI) => {
  return await axiosInstance.post(`/todos/`, payload);
};

const updateTodo = async ({
  id,
  completed,
}: {
  id: string;
  completed: boolean;
}) => {
  return await axiosInstance.patch(`/todos/${id}/`, { completed });
};

const removeTodo = async (id: string) => {
  return await axiosInstance.delete(`/todos/${id}/`);
};

const clearCompletedTodos = async () => {
  return await axiosInstance.delete(`/todos/clear_all_completed/`);
};

export { getTodos, addTodo, updateTodo, removeTodo, clearCompletedTodos };

export default axiosInstance;
