import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { getAllBlogPosts, getBlogCategories } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "ブログ・コラム",
  description: `小児精神科訪問看護・お子さまとご家族向けのコラム。${siteConfig.nameShort}（高崎市）。`,
};

type Props = {
  searchParams: Promise<{ category?: string; sort?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const { category, sort } = await searchParams;
  const all = getAllBlogPosts();
  const categories = getBlogCategories();
  const filtered = category
    ? all.filter((p) => p.frontmatter.category === category)
    : all;
  const posts =
    sort === "asc" ? [...filtered].reverse() : filtered;
  const countOf = (c?: string) =>
    c ? all.filter((p) => p.frontmatter.category === c).length : all.length;
  const buildHref = (c?: string, s?: string) => {
    const params = new URLSearchParams();
    if (c) params.set("category", c);
    if (s === "asc") params.set("sort", "asc");
    const q = params.toString();
    return q ? `/blog?${q}` : "/blog";
  };

  return (
    <SiteLayout>
      <SubpageHeader
        title="ブログ・コラム"
        description="小児精神科訪問看護や、お子さま・ご家族向けの読み物を掲載しています。"
      />
      <RevealSection className="mx-auto max-w-3xl px-4 py-10 md:px-8 md:py-14">
        <div className="mb-6 flex flex-wrap gap-2">
          <Link
            href={buildHref(undefined, sort)}
            className={`rounded-full px-4 py-2 text-lg font-medium ${
              !category
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card hover:bg-secondary"
            }`}
          >
            すべて（{countOf()}）
          </Link>
          {categories.map((c) => (
            <Link
              key={c}
              href={buildHref(c, sort)}
              className={`rounded-full px-4 py-2 text-lg font-medium ${
                category === c
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card hover:bg-secondary"
              }`}
            >
              {c}（{countOf(c)}）
            </Link>
          ))}
        </div>

        <div className="mb-8 flex items-center justify-between text-base text-muted-foreground">
          <span>{posts.length}件</span>
          <span className="flex gap-3">
            <Link
              href={buildHref(category)}
              className={
                sort !== "asc"
                  ? "font-semibold text-foreground underline underline-offset-4"
                  : "hover:underline"
              }
            >
              新しい順
            </Link>
            <Link
              href={buildHref(category, "asc")}
              className={
                sort === "asc"
                  ? "font-semibold text-foreground underline underline-offset-4"
                  : "hover:underline"
              }
            >
              古い順
            </Link>
          </span>
        </div>

        <ul className="flex flex-col gap-6">
          {posts.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/blog/${item.slug}`}
                className="block rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="text-base font-medium text-[var(--ritanowa-gold)]">
                  {item.frontmatter.category}
                </span>
                <h2 className="mt-2 text-xl font-semibold leading-snug">
                  {item.frontmatter.title}
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  {item.frontmatter.excerpt}
                </p>
                <time
                  dateTime={item.frontmatter.date}
                  className="mt-3 block text-base text-muted-foreground"
                >
                  {item.frontmatter.date}
                </time>
              </Link>
            </li>
          ))}
        </ul>

        {posts.length === 0 ? (
          <p className="text-lg text-muted-foreground">
            該当する記事がありません。
          </p>
        ) : null}
      </RevealSection>
    </SiteLayout>
  );
}
