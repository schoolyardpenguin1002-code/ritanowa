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

/** カテゴリごとの「サムネ」タイルの下地色（やわらかい色をローテーション） */
const CATEGORY_TINTS = [
  "color-mix(in srgb, var(--ritanowa-sand) 55%, var(--background))",
  "color-mix(in srgb, var(--ritanowa-sage-light) 45%, var(--background))",
  "color-mix(in srgb, var(--ritanowa-terracotta) 14%, var(--background))",
  "color-mix(in srgb, var(--ritanowa-gold) 16%, var(--background))",
] as const;

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
      <RevealSection className="mx-auto max-w-5xl px-4 py-10 md:px-8 md:py-14">
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

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((item) => {
            const tint =
              CATEGORY_TINTS[
                categories.indexOf(item.frontmatter.category) %
                  CATEGORY_TINTS.length
              ];
            return (
              <li key={item.slug} className="h-full">
                <Link
                  href={`/blog/${item.slug}`}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div
                    className="flex min-h-36 items-center p-5"
                    style={{ background: tint }}
                  >
                    <h2 className="text-lg font-bold leading-snug">
                      {item.frontmatter.title}
                    </h2>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="text-sm font-semibold text-[var(--ritanowa-gold)]">
                      {item.frontmatter.category}
                    </span>
                    <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {item.frontmatter.excerpt}
                    </p>
                    <time
                      dateTime={item.frontmatter.date}
                      className="mt-auto pt-1 text-xs text-muted-foreground"
                    >
                      {item.frontmatter.date}
                    </time>
                  </div>
                </Link>
              </li>
            );
          })}
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
