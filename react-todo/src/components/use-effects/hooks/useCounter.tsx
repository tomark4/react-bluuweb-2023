import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => setCounter((prev) => prev + 1);

  const handleMinus = () => setCounter((prev) => prev - 1);

  return { counter, handleAdd, handleMinus };
};

export default useCounter;
