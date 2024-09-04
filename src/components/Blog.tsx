"use client";
/* eslint-disable react/no-children-prop */
import Markdown from "react-markdown"
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function Blog({ data }: { data: { id: string; date: number; title: string; content: string; } }) {
  const router = useRouter();
  return <div className="px-2 sm:px-6 md:px-12 mb-8">
    <Head>
      <title>{data.title}</title>
    </Head>
    <div className="transition hover:text-cyan-200 mb-4 w-fit"><button onClick={() => { router.back() }}>\(\leftarrow\) Back</button></div>
    <h1 className="text-3xl font-bold">{data.title}</h1>
    <p className="text-neutral-600">{data.id}</p>
    <p className="text-neutral-600">{new Date(data.date).toString()}</p>
    <hr className="mb-6" />
    <div className="blog">
      <Markdown children={data.content} />
    </div>
  </div>
}