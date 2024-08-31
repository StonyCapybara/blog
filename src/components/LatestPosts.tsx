/* eslint-disable react/no-children-prop */
import { getLatestPostsData } from "@/app/posts";
import Link from "next/link";

export default function LatestPosts() {
    const latestPostsData = getLatestPostsData();
    return (
        <div className="flex flex-col gap-4">
            {latestPostsData.map((obj) => (
                <Link key={obj.id} href={`/blog/${obj.id}`}>
                    <div className="flex flex-col bg-neutral-800 p-3 rounded-md hover:cursor-pointer group">
                        <p className="text-lg font-bold group-hover:text-cyan-200 transition-all">{obj.title}</p>
                        <p className="text-neutral-600">{obj.id}</p>
                        <p className="text-neutral-600">{new Date(obj.date).toLocaleString()}</p>
                    </div>
                </Link>
            ))}
            <Link href="/blog" className="flex items-center justify-center gap-2 hover:gap-3 cursor-pointer transition-all group">
                <span className="group-hover:text-cyan-200">All posts</span>
                <span className="group-hover:text-cyan-200">\(\rightarrow\)</span>
            </Link>
        </div>
    );
}
