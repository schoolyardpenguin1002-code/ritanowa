import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { getAllNews } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "お知らせ",
  description: `${siteConfig.name}からのお知らせ・更新情報です。`,
};

export default function NewsPage() {
  const items = getAllNews();

  return (
    <SiteLayout>
      <SubpageHeader
        title="お知らせ"
        description="最新のお知らせを掲載しています。"
      />
      <RevealSection className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
        <ul className="flex flex-col gap-6">
          {items.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/news/${item.slug}`}
                className="block rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <time
                  dateTime={item.frontmatter.date}
                  className="text-base font-medium text-[var(--ritanowa-gold)]"
                >
                  {item.frontmatter.date}
                </time>
                <h2 className="mt-2 text-xl font-semibold leading-snug">
                  {item.frontmatter.title}
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">
                  {item.frontmatter.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </RevealSection>
    </SiteLayout>
  );
}
