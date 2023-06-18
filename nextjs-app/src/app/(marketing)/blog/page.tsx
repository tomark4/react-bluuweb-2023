import { Title } from "@/components";
import Link from "next/link";

export const generateMetadata = ({ params }: any) => {
  return {
    title: "Lorem",
    description: "Lorem ipsum",
  };
};

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Result {
  data: Post[] | null;
  error: any;
}

const getData = async (): Promise<Result> => {
  try {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = (await resp.json()) as Post[];
    return { data, error: null };
  } catch (e) {
    console.error(e);
    return { data: null, error: e };
  }
};

const BlogPage = async () => {
  const { data: posts, error } = await getData();

  if (error) {
    return <h1>Error....</h1>;
  }

  return (
    <div>
      <Title text="Blog" />
      <div className="grid gap-5">
        {posts?.map((post) => (
          <div key={post.id} className="shadow rounded-md p-5">
            <h2 className="text-2xl font-600">{post.title}</h2>
            <Link
              href={`/blog/${post.id}`}
              className="text-center text-indigo-500 text-xl"
            >
              More info
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
