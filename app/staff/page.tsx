import type { Metadata } from "next";
import Image from "next/image";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { RepresentativeNurseCard } from "@/components/staff/RepresentativeNurseCard";
import { director, representativeNurse } from "@/lib/staff-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "スタッフ紹介",
  description: `${siteConfig.name}の代表挨拶と管理者／代表看護師をご紹介します。`,
};

export default function StaffPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="スタッフ紹介"
        description="代表のメッセージと、訪問看護の現場を担う管理者／代表看護師です。"
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
              <div className="mt-3">
                <p className="font-semibold text-foreground">{director.name}</p>
                <p className="text-sm text-muted-foreground">{director.title}</p>
              </div>
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
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            管理者／代表看護師
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            訪問看護の現場をまとめる代表看護師です。
          </p>
          <div className="mt-10">
            <RepresentativeNurseCard nurse={representativeNurse} />
          </div>
        </div>
      </RevealSection>
    </SiteLayout>
  );
}
