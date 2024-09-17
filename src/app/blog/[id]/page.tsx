import { getAllIDs, getPostDetails, addView, getViews } from "@/app/posts";
import { notFound } from "next/navigation";
import Blog from "@/components/Blog";
import { Metadata } from "next";
import type { ResolvingMetadata } from "next";
// import { configDotenv } from "dotenv";
// import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

// configDotenv();

// const uri = !!process.env.DB_URI?process.env.DB_URI:"";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

type Props = {
  params: { id: string },
}

export async function generateMetadata({ params }: Props, _parent: ResolvingMetadata): Promise<Metadata> {
  if (!(await getAllIDs()).includes(params.id)) {
    return {
      title: "Not Found"
    }
  }
  const id = params.id;
  const data = await getPostDetails(id);
  return {
    title: data.title
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  if (!(await getAllIDs()).includes(params.id)) notFound();
  // addView(params.id);
  let views = await getViews(params.id);
  let data = {
    ...await getPostDetails(params.id),
    views: views || 0,
  }
  return <Blog data={data} />
}