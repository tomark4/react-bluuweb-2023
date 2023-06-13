import { CheckIcon, CrossIcon } from "../icons";
import { forwardRef } from "react";

interface Props {
  id: string;
  title: string;
  completed: boolean;
  handleUpdate: (id: string, completed: boolean) => void;
  handleRemove: (id: string) => void;
  [x: string]: any;
}

const completeStyle =
  "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center";

const TodoItem = forwardRef<HTMLDivElement, Props>(
  ({ id, title, completed, handleUpdate, handleRemove, ...rest }, ref) => {
    return (
      <article
        className="flex gap-4 border-b-gray-200 dark:border-b-gray-700 border-b px-4 py-5 dark:bg-gray-800 "
        ref={ref}
        {...rest}
      >
        <button
          className={`rounded-full border-2 w-5 h-5 flex-none ${
            completed ? completeStyle : "inline-block"
          }`}
          onClick={() => handleUpdate(id, completed)}
        >
          {completed && <CheckIcon />}
        </button>
        <p
          className={`text-gray-700 dark:text-gray-400 grow ${
            completed && "line-through"
          }`}
        >
          {title}
        </p>
        <button className="flex-none" onClick={() => handleRemove(id)}>
          <CrossIcon />
        </button>
      </article>
    );
  }
);

export default TodoItem;
