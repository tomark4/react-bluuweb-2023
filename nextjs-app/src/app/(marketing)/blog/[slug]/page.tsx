"use client";
import { Title } from "@/components";
import React, { useEffect, useState } from "react";
import { Post } from "../page";
import { useRouter } from "next/navigation";

// this page executed in server

const BlogPageDetails = ({ params }: any) => {
  const { slug } = params;
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const resp = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${slug}`
        );
        const data = await resp.json();
        setPost(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Title text="Blog details page" />
      <p className="text-center mt-5">Article: {slug}</p>
      <div className="mt-2">
        <h2 className="text-center text-2xl mb-2">{post?.title}</h2>
        <p className="text-center text-xl mb-2">{post?.body}</p>
        <div className="text-center">
          <button
            onClick={() => router.back()}
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPageDetails;
