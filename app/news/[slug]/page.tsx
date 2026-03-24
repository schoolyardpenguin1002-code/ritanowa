import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MarkdownBody } from "@/components/MarkdownBody";
import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { getAllNews, getNewsBySlug } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllNews().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) return { title: "お知らせ" };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getNewsBySlug(slug);
  if (!post) notFound();

  return (
    <SiteLayout>
      <SubpageHeader title={post.frontmatter.title} />
      <RevealSection className="mx-auto max-w-3xl px-4 py-10 md:px-8 md:py-14">
        <p className="mb-8 text-lg text-muted-foreground">
          <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
        </p>
        <MarkdownBody content={post.content} />
        <p className="mt-12">
          <Link
            href="/news"
            className="text-lg font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
          >
            ← お知らせ一覧
          </Link>
        </p>
      </RevealSection>
    </SiteLayout>
  );
}
