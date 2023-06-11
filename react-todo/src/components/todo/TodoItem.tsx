import { CheckIcon, CrossIcon } from "../icons";

interface Props {
  id: string;
  title: string;
  completed?: boolean;
  handleUpdate: (id: string) => void;
  handleRemove: (id: string) => void;
}

const completeStyle =
  "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center";

const TodoItem = ({
  id,
  title,
  completed,
  handleUpdate,
  handleRemove,
}: Props) => {
  return (
    <article className="flex gap-4 border-b-gray-200 border-b px-4 py-5 dark:bg-gray-800 ">
      <button
        className={`rounded-full border-2 w-5 h-5 flex-none ${
          completed ? completeStyle : "inline-block"
        }`}
        onClick={() => handleUpdate(id)}
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
};

export default TodoItem;
