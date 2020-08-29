// Source: https://github.com/samselikoff/samselikoff.com/blob/master/lib/posts.js

import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "utils/readingTime";

const postsDirectory = join(process.cwd(), "pages", "blog");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((slug) => !slug.startsWith("."));
}

export function getPostBySlug(slug, fields = []) {
  const pathToPost = join(postsDirectory, slug);
  const files = fs.readdirSync(pathToPost);
  const indexFile = files.find((file) => file.substr(0, file.lastIndexOf(".")) === "index");

  const fullPath = join(pathToPost, indexFile);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  data.slug = slug;

  return { ...data, readingTime: readingTime(content) };
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
  return posts;
}
