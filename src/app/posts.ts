import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "src/posts");
const fileNames = fs.readdirSync(postsDir);

export function getSortedPostsData() {
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    return getPostDetails(id);
  });

  return allPostsData.sort(({ date: a }, { date: b }) => {
    return a - b;
  });
}

export function getLatestPostsData() {
  const allData = getSortedPostsData();
  return allData.slice(-3).reverse();
}

export function getAllIDs() {
  return getSortedPostsData().map(({ id }: { id: string }) => id);
}

export function getPostDetails(id: string) {
  const fullPath = path.join(postsDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  return {
    id,
    date: 0,
    title: "",
    content: matterResult.content,
    ...matterResult.data,
  };
}
