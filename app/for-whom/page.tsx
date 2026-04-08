import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { buttonVariants } from "@/lib/button-variants";
import { concernGatewayCards } from "@/lib/concern-gateway-cards";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const scenarios = [
  {
    title: "介護や育児で限界に近く、気分の落ち込みや不眠が続いている",
    body: "本人の支援に追われるあまり、自分の心身のサインを後回しにしてしまうことがあります。訪問看護はご利用者様だけでなく、ご家族の状況にも耳を傾け、連携のなかで支え方を一緒に考えます。",
  },
  {
    title: "以前は元気に働けていたのに、急にやる気が出なくなった",
    body: "体調に目に見えた変化がなくても、心の疲れは行動や表情に表れることがあります。早めの相談で、主治医・ケアマネージャー・訪問看護が同じ方向を向けるようお手伝いします。",
  },
  {
    title: "服薬や通院が続かず、生活が不規則になってきた",
    body: "リズムを取り戻す小さな一歩から始められます。訪問看護では、お薬の管理だけでなく、眠りや食事、外出の工夫など、日々の生活全体を見ながら支援します。",
  },
  {
    title: "不登校・ひきこもりが長引き、家族だけでは相談先がわからない",
    body: "お子さまのペースを尊重しつつ、ご家族の不安にも向き合います。学校・医療機関との連携が必要な場合は、情報を整理しながら伴走します。",
  },
  {
    title: "精神科の受診自体が怖い、ハードルが高く感じる",
    body: "「まず訪問看護から」という選択肢もあります。診断や治療方針は医師の役割であり、訪問看護は在宅での看護と生活支援に特化しています。無理に受診を勧める立場ではありません。",
  },
  {
    title: "発達の特性があり、職場や対人で疲れやすい",
    body: "特性そのものを「直す」のではなく、暮らしやすい工夫や自己理解を深める支援ができます。必要に応じて、就労や地域活動につながる情報も共有します。",
  },
] as const;

export const metadata: Metadata = {
  title: "こんな方・ご家族へ",
  description: `${siteConfig.name}が支援しやすいご状況の例。精神科訪問看護・在宅療養を検討中の方・ご家族向け。高崎市・群馬。`,
};

export default function ForWhomPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="こんな方・ご家族へ"
        description="診断名の有無を問わず、生活のなかで感じている負担やモヤモヤを整理するお手伝いができます。以下は例です。ご自身の状況と必ずしも一致しなくても構いません。"
      />

      <RevealSection className="mx-auto max-w-3xl space-y-14 px-4 py-12 md:px-8 md:py-16">
        <section className="space-y-6">
          {scenarios.map((s) => (
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
            訪問看護とは
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
