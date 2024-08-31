import { getAllIDs, getPostDetails } from "@/app/posts";
import { notFound } from "next/navigation";
import Blog from "@/components/Blog";

export default function Page({ params }: { params: { id: string } }) {
  if (!getAllIDs().includes(params.id)) notFound();
  return <Blog data={getPostDetails(params.id)} />
}