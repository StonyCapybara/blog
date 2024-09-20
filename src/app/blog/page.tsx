import { getAllIDs, getPostDetails } from "../posts";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All my blogs",
  description: "I made a blog because I can"
}

export default async function Blog() {
  return <div className="px-4">
    <h1 className="text-3xl">All Posts</h1>
    <hr className="mb-6" />
    <div className="flex flex-col gap-4 my-4">
      {(await getAllIDs()).reverse().map(async (id) => {
        const data = await getPostDetails(id);
        return <Link href={`/blog/${id}`} key={id}>
          <div className="flex flex-col bg-neutral-800 p-3 rounded-md hover:cursor-pointer group">
            <p className="text-lg font-bold group-hover:text-cyan-200 transition-all">{data.title}</p>
            <p className="text-neutral-600">{data.id}</p>
            <p className="text-neutral-600">{new Date(data.date).toLocaleString()}</p>
          </div>
        </Link>
      })}
    </div>
  </div>
}