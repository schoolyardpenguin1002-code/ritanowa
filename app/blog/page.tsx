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
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogPage({ searchParams }: Props) {
  const { category } = await searchParams;
  const all = getAllBlogPosts();
  const categories = getBlogCategories();
  const posts = category
    ? all.filter((p) => p.frontmatter.category === category)
    : all;

  return (
    <SiteLayout>
      <SubpageHeader
        title="ブログ・コラム"
        description="小児精神科訪問看護や、お子さま・ご家族向けの読み物を掲載しています。"
      />
      <RevealSection className="mx-auto max-w-3xl px-4 py-10 md:px-8 md:py-14">
        <div className="mb-10 flex flex-wrap gap-2">
          <Link
            href="/blog"
            className={`rounded-full px-4 py-2 text-lg font-medium ${
              !category
                ? "bg-primary text-primary-foreground"
                : "border border-border bg-card hover:bg-secondary"
            }`}
          >
            すべて
          </Link>
          {categories.map((c) => (
            <Link
              key={c}
              href={`/blog?category=${encodeURIComponent(c)}`}
              className={`rounded-full px-4 py-2 text-lg font-medium ${
                category === c
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card hover:bg-secondary"
              }`}
            >
              {c}
            </Link>
          ))}
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
