import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="grid gap-4 place-content-center h-screen">
      <h1 className="text-center text-2xl">404 | Page not found</h1>
      <Link
        href="/"
        className="bg-black text-white px-4 py-2 rounded hover:bg-slate-700"
      >
        Back to home
      </Link>
    </div>
  );
};

export default NotFound;
