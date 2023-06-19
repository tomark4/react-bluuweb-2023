"use client";
import React, { useState } from "react";

interface Props {
  onSubmit: (value: string) => void;
}
const TodoForm = ({ onSubmit }: Props) => {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(text);
        setText("");
      }}
    >
      <label>
        <input
          type="text"
          placeholder="Add todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default TodoForm;
