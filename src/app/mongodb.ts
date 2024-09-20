import { MongoClient, ServerApiVersion } from 'mongodb';
import { configDotenv } from "dotenv";

configDotenv();

// Global variables to cache the connection
let cachedClient: MongoClient | null = null;
let cachedDb: any = null;
let cachedVc: any = null;
const uri = !!process.env.MONGODB_URI?process.env.MONGODB_URI:"mongodb+srv://";

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    // Reuse the cached connection and database
    return { client: cachedClient, db: cachedDb, vc: cachedVc };
  }

  // Establish a new connection
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  await client.connect();
  const db = client.db("views");
  const vc = db.collection("views");

  // Cache the connection
  cachedClient = client;
  cachedDb = db;
  cachedVc = vc;

  return { client, db, vc };
}
