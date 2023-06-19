import React from "react";

const TodoLayout = ({ children }: any) => {
  return (
    <html>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default TodoLayout;
