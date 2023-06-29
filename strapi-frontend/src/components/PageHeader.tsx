import React from "react";

const PageHeader = ({ text }: { text: string }) => {
  return (
    <h1 className="text-5xl font-extrabold dark:text-white mb-4">{text}</h1>
  );
};

export default PageHeader;
