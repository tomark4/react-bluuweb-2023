import React from "react";

const Title = ({ text }: { text: string }) => {
  return <h1 className="text-center text-indigo-600 text-5xl mt-3">{text}</h1>;
};

export default Title;
