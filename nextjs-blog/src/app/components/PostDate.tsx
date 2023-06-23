import React from "react";

const PostDate = ({ value }: { value: string }) => {
  return (
    <time>
      {new Date(value).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>
  );
};

export default PostDate;
