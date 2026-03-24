import type { Metadata } from "next";
import Image from "next/image";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { director, nurses } from "@/lib/staff-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "スタッフ紹介",
  description: `${siteConfig.name}の代表挨拶とスタッフをご紹介します。`,
};

export default function StaffPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="スタッフ紹介"
        description="代表のメッセージと、訪問看護を担うスタッフです。看護師の写真・氏名の一部はイメージ用です。"
      />

      <RevealSection className="border-b border-border/60 bg-[color-mix(in_srgb,var(--ritanowa-sand)_25%,var(--background))] py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">代表挨拶</h2>
          <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-start md:gap-12">
            <div className="mx-auto w-full max-w-sm shrink-0 md:mx-0">
              {director.imageSrc ? (
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/80 shadow-md">
                  <Image
                    src={director.imageSrc}
                    alt={director.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width:768px) 100vw, 400px"
                    priority
                  />
                </div>
              ) : (
                <div
                  className="flex aspect-[4/5] items-center justify-center rounded-3xl border-2 border-dashed border-[var(--ritanowa-gold)]/45 bg-[color-mix(in_srgb,var(--ritanowa-sand)_45%,var(--card))]"
                  aria-label={director.imageAlt}
                >
                  <span className="px-4 text-center text-sm text-muted-foreground">
                    写真準備中
                  </span>
                </div>
              )}
              <p className="mt-3 text-sm text-muted-foreground">代表／医師</p>
            </div>
            <div className="min-w-0 flex-1 space-y-4">
              <div className="whitespace-pre-line text-lg leading-relaxed md:text-xl">
                {director.message}
              </div>
              {director.note ? (
                <p className="text-sm text-muted-foreground">{director.note}</p>
              ) : null}
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">看護師チーム</h2>
          <p className="mt-2 text-lg text-muted-foreground">
            訪問看護に携わるスタッフのご紹介です（仮名・イメージ写真）。
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {nurses.map((n) => (
              <article
                key={n.id}
                className="flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm"
              >
                <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
                  <Image
                    src={n.imageSrc}
                    alt={n.imageAlt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
                  <h3 className="text-xl font-bold">{n.name}</h3>
                  <p className="text-base text-muted-foreground">
                    {n.nameKana} ／ {n.title}
                  </p>
                  <p className="text-lg leading-relaxed text-foreground/90">{n.intro}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealSection>
    </SiteLayout>
  );
}
