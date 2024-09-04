import { getAllIDs, getPostDetails } from "@/app/posts";
import { notFound } from "next/navigation";
import Blog from "@/components/Blog";
import { Metadata } from "next";
import type { ResolvingMetadata } from "next";

type Props = {
  params: { id: string },
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  if (!getAllIDs().includes(params.id)) {
    return {
      title: "Not Found"
    }
  }
  const id = params.id;
  const data = getPostDetails(id);
  return {
    title: data.title
  }
}

export default function Page({ params }: { params: { id: string } }) {
  if (!getAllIDs().includes(params.id)) notFound();
  return <Blog data={getPostDetails(params.id)} />
}