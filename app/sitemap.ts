import type { MetadataRoute } from "next";

import { getAllBlogPosts, getAllNews } from "@/lib/content";

const base =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "http://localhost:4000";

const staticPaths = [
  "",
  "/about",
  "/visit-nursing",
  "/for-whom",
  "/news",
  "/blog",
  "/staff",
  "/faq",
  "/flow",
  "/area",
  "/pricing",
  "/contact",
  "/privacy",
  "/important-disclosure",
  "/guide",
  "/recruit",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const news = getAllNews().map((n) => ({
    url: `${base}/news/${n.slug}`,
    lastModified: new Date(n.frontmatter.date),
  }));

  const blog = getAllBlogPosts().map((b) => ({
    url: `${base}/blog/${b.slug}`,
    lastModified: new Date(b.frontmatter.date),
  }));

  const main = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  return [...main, ...news, ...blog];
}
