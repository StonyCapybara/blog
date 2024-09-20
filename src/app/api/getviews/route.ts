import { NextRequest, NextResponse } from 'next/server';
import { configDotenv } from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

configDotenv();

const uri = !!process.env.DB_URI?process.env.DB_URI:"";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export async function GET(request: NextRequest) {
  try{
    await client.connect();
    return NextResponse.json((await client.db("views").collection("views").findOne({id: request.nextUrl.searchParams.get("id")}))?.views);
  }
  catch {
    return NextResponse.json("err")
  }
  finally {
    client.close();
  }
  
}
