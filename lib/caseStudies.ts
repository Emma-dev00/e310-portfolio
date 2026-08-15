import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CASE_DIR = path.join(process.cwd(), "content", "case-studies");

export async function getCaseStudies() {
  try {
    const files = await fs.promises.readdir(CASE_DIR);
    const items = await Promise.all(
      files
        .filter((f) => f.endsWith(".md"))
        .map(async (file) => {
          const full = path.join(CASE_DIR, file);
          const raw = await fs.promises.readFile(full, "utf8");
          const { data, content } = matter(raw);
          return {
            title: data.title || file.replace(/\.md$/, ""),
            excerpt: data.excerpt || (content || "").slice(0, 200),
            slug: file.replace(/\.md$/, ""),
          };
        })
    );
    return items;
  } catch {
    return [];
  }
}
