import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const getUsers = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  return res.data;
};

const test = () => {
  const { error, isError, isLoading, data } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>{error.message}</h1>;

  return (
    <div>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default test;
