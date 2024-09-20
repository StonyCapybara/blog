import LatestPosts from "@/components/LatestPosts";
import { Metadata } from "next";
import DBTest from "@/components/DBTest";

export const metadata: Metadata = {
  title: "Divjot's Blog",
  description: "I made a blog because I can"
}

export default function Home() {
  return (
    <main>
      <div className="px-4">
        <h1 className="text-2xl md:text-3xl lg:text-5xl">Welcome to my website!</h1>
        <div className="text-2xl md:text-3xl lg:text-4xl my-4">Latest blog posts</div>
        <hr className="my-4 line-bg" />
        <DBTest />
        <LatestPosts />
      </div>
    </main>
  );
}