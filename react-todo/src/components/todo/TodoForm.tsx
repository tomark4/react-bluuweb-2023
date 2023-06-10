import { useState } from "react";
import validator from "validator";

interface Props {
  onCreate: (v: string) => void;
}

const TodoForm = ({ onCreate }: Props) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (validator.isEmpty(title.trim())) {
      setTitle("");
      return;
    }

    onCreate(title.trim());
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white mt-8 rounded-md overflow-hidden py-4 flex gap-4 items-center px-4"
    >
      <span className="rounded-full border-2 w-5 h-5 inline-block "></span>
      <input
        autoComplete="off"
        type="text"
        name="value"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Create a new TODO"
        className="w-full text-gray-600 outline-none"
      />
    </form>
  );
};

export default TodoForm;
