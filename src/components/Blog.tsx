"use client";
/* eslint-disable react/no-children-prop */
import Markdown from "react-markdown"
import { useRouter } from "next/navigation";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Blog({ data }: { data: { id: string; date: number; title: string; content: string; } }) {
  const [views, setViews] = useState(0);

  // (async () => {
  //   if (views !== 0) return;
  //   fetch(`/api/getviews?id=${data.id}`).then(async data => { setViews((await data.json())?.views) })
  // })();

  useEffect(() => {
    if (views === 0) {
      fetch(`/api/getviews?id=${data.id}`).then(async data => setViews((await data.json())?.views))
    }
  }, [data.id, views])

  const router = useRouter();
  return <div className="px-2 sm:px-6 md:px-12 mb-8">
    <Head>
      <title>{data.title}</title>
    </Head>
    <div className="transition hover:text-cyan-200 mb-4 w-fit"><button onClick={() => { router.back() }}>\(\leftarrow\) Back</button></div>
    <h1 className="text-3xl font-bold">{data.title}</h1>
    <p className="text-neutral-600">{data.id}</p>
    <p className="text-neutral-600">{new Date(data.date).toString()}</p>
    <p className="text-neutral-600">{views == 0 ? <span className="loadingViews">loading...</span> : `${views} views`}</p>
    <hr className="mb-6" />
    <div className="blog">
      <Markdown children={data.content} />
    </div>
  </div>
}