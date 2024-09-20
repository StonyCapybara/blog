import { NextRequest, NextResponse } from 'next/server';
import { configDotenv } from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

configDotenv();

const uri = !!process.env.MONGODB_URI?process.env.MONGODB_URI:"mongodb+srv://";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  if (query.get("id")===null) {
    return NextResponse.json({error: "id not provided"}, {status: 400})
  }
  const id = query.get("id")
  try{
    await client.connect();
    const vc = client.db("views").collection("views");
    const viewDoc = await vc.findOne({id});
    if (viewDoc === null){
      return NextResponse.json({error: "post with id does not exist"}, {status: 400});
    }
    await vc.updateOne({id}, {"$set": {views: viewDoc.views+1}});
    return NextResponse.json({views: viewDoc.views + 1}, {status: 200});
  }
  finally {
    await client.close();
  }
  
}
