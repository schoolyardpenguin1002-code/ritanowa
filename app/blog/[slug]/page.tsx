import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MarkdownBody } from "@/components/MarkdownBody";
import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { getAllBlogPosts, getBlogBySlug } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "ブログ" };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <SiteLayout>
      <SubpageHeader title={post.frontmatter.title} />
      <RevealSection className="mx-auto max-w-3xl px-4 py-10 md:px-8 md:py-14">
        <p className="mb-2 text-lg font-medium text-[var(--ritanowa-gold)]">
          {post.frontmatter.category}
        </p>
        <p className="mb-8 text-lg text-muted-foreground">
          <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
          {post.frontmatter.author ? (
            <span className="ml-3">／ {post.frontmatter.author}</span>
          ) : null}
        </p>
        <MarkdownBody content={post.content} />
        <p className="mt-12">
          <Link
            href="/blog"
            className="text-lg font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
          >
            ← ブログ一覧
          </Link>
        </p>
      </RevealSection>
    </SiteLayout>
  );
}
