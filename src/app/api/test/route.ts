import { NextRequest, NextResponse } from 'next/server';
import { configDotenv } from "dotenv";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

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
    const tc = client.db("test").collection("test");
    const test = await tc.findOne({_id: new ObjectId("66edc06ab4d55d141888c5f1")});
    return NextResponse.json({...test, _id:0});
  }
  finally {
    await client.close();
  }
  
}
