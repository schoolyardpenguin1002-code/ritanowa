import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

export type NewsFrontmatter = {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
};

export type BlogFrontmatter = {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  category: string;
  author?: string;
};

function normalizeDate(value: unknown): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  return String(value ?? "");
}

function readMdFiles<T extends { slug: string; date: string }>(
  subdir: "news" | "blog"
): { slug: string; frontmatter: T; content: string }[] {
  const dir = path.join(contentDir, subdir);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files.map((file) => {
    const raw = fs.readFileSync(path.join(dir, file), "utf8");
    const { data, content } = matter(raw);
    const d = data as T & { date?: unknown };
    return {
      slug: d.slug,
      frontmatter: { ...d, date: normalizeDate(d.date) } as T,
      content,
    };
  });
}

export function getAllNews(): { slug: string; frontmatter: NewsFrontmatter; content: string }[] {
  const items = readMdFiles<NewsFrontmatter>("news");
  return items.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getNewsBySlug(slug: string) {
  return getAllNews().find((n) => n.slug === slug);
}

export function getAllBlogPosts(): {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}[] {
  const items = readMdFiles<BlogFrontmatter>("blog");
  return items.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export function getBlogBySlug(slug: string) {
  return getAllBlogPosts().find((b) => b.slug === slug);
}

export function getBlogCategories(): string[] {
  const posts = getAllBlogPosts();
  const set = new Set(posts.map((p) => p.frontmatter.category).filter(Boolean));
  return Array.from(set).sort();
}
