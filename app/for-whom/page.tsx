import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { buttonVariants } from "@/lib/button-variants";
import { concernGatewayCards } from "@/lib/concern-gateway-cards";
import { pediatricScenarios } from "@/lib/pediatric-scenarios";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "お子さま・ご家族へ",
  description: `${siteConfig.name}が支援しやすいご状況の例。小児精神科訪問看護・不登校・発達の特性など、お子さまとご家族向け。高崎市・群馬。`,
};

export default function ForWhomPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="お子さま・ご家族へ"
        description="不登校、発達の特性、お子さまの気持ちの不調、ご家族の負担——診断名の有無を問わず、暮らしのなかで感じているモヤモヤを整理するお手伝いができます。以下は例です。"
      />

      <RevealSection className="mx-auto max-w-3xl space-y-14 px-4 py-12 md:px-8 md:py-16">
        <section className="rounded-3xl border border-[var(--ritanowa-gold)]/40 bg-[color-mix(in_srgb,var(--ritanowa-sand)_30%,var(--card))] p-6 md:p-8">
          <p className="text-lg leading-relaxed text-muted-foreground">
            当ステーションは
            <strong className="font-semibold text-foreground">
              {siteConfig.specialtyShort}の訪問看護
            </strong>
            を提供しています。お子さまの成長段階と、ご家族の状況をひとつの文脈として見ながら、主治医・ケアマネージャーと連携します。
          </p>
        </section>

        <section className="space-y-6">
          {pediatricScenarios.map((s) => (
            <article
              key={s.title}
              className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm md:p-8"
            >
              <h2 className="text-xl font-bold leading-snug text-foreground md:text-2xl">
                {s.title}
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">テーマ別のコラム</h2>
          <p className="text-lg text-muted-foreground">
            くわしくはブログ記事もあわせてご覧ください。
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {concernGatewayCards.map((c) => (
              <li key={c.href}>
                <Link
                  href={c.href}
                  className="group flex h-full min-h-[120px] flex-col justify-between rounded-3xl border border-border/80 bg-card p-5 shadow-sm transition-all hover:border-[var(--ritanowa-gold)]/50 hover:shadow-md"
                >
                  <span className="text-lg font-semibold leading-snug text-foreground">
                    {c.title}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1 text-base font-medium text-[var(--ritanowa-gold)]">
                    コラムへ
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="flex flex-col gap-4 border-t border-border/60 pt-8 sm:flex-row sm:flex-wrap">
          <Link
            href="/visit-nursing"
            className={cn(
              buttonVariants({ variant: "default" }),
              "inline-flex justify-center rounded-3xl px-8 py-6 text-lg"
            )}
          >
            小児精神科訪問看護とは
          </Link>
          <Link
            href="/guide"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "inline-flex justify-center rounded-3xl px-8 py-6 text-lg"
            )}
          >
            ご相談のヒント
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[52px] items-center justify-center text-lg font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
          >
            お問い合わせ
          </Link>
        </div>
      </RevealSection>
    </SiteLayout>
  );
}
