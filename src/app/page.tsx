import LatestPosts from "@/components/LatestPosts";
// import Image from "next/image";
// import pic from "@/images/ai_pic.png"


export default function Home() {
  return (
    <main>
      <div className="px-4">
        <h1 className="text-2xl md:text-3xl lg:text-5xl">Welcome to my website!</h1>
        <div className="text-2xl md:text-3xl lg:text-4xl my-4">Latest blog posts</div>
        <hr className="my-4 line-bg" />
        <LatestPosts />
      </div>
    </main>
  );
}