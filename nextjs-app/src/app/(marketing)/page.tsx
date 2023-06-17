import { Title } from "@/components";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <Title text={"Homepage"} />
      <Link href="/about">About us</Link>
    </div>
  );
};

export default Home;
