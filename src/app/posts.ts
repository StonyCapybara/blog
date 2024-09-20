import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { configDotenv } from "dotenv";
import { MongoClient, ServerApiVersion, ObjectId } from "mongodb";

configDotenv();

const uri = !!process.env.MONGODB_URI?process.env.MONGODB_URI:"mongodb+srv://";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function updateViewCollection(){
  const allIds = await getAllIDs();
  try {
    await client.connect();
    const vc = client.db("views").collection("views");
    let data = await vc.find().toArray();
    let dataIds = data.map(doc => doc.id);
    for(let id of allIds){
      if(!dataIds.includes(id)){
        console.log(`Adding ${id} to collection`)
        await vc.insertOne({
          _id: new ObjectId(),
          id,
          views: 0
        });
        console.log(`Added ${id} to collection`)
      }
    }
  }
  finally {
  }
}

const postsDir = path.join(process.cwd(), "src/posts");
const fileNames = fs.readdirSync(postsDir);

export async function getSortedPostsData() {
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      const id = fileName.replace(/\.md$/, "");
      return await getPostDetails(id);
    })
  );

  return allPostsData.sort(({ date: a }, { date: b }) => {
    return a - b;
  });
}

export async function getLatestPostsData() {
  const allData = await getSortedPostsData();
  return allData.slice(-3).reverse();
}

export async function getAllIDs() {
  const allPostsData = await getSortedPostsData();
  return allPostsData.map(({ id }) => id);
}

export async function getPostDetails(id: string) {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  try{
      return {
      id,
      date: 0,
      title: "",
      content: matterResult.content,
      ...matterResult.data,
    };
  }
  finally {
    client.close();
  }
}

updateViewCollection();
// Example: Close the connection when the application exits
process.on('SIGINT', async () => {
  await client.close();
  process.exit(0);
});
