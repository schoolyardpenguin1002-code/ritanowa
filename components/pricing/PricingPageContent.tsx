import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Phone,
} from "lucide-react";

import { RevealRingList } from "@/components/motion/RevealRingList";
import { RevealSection } from "@/components/motion/RevealSection";
import { SectionTitle } from "@/components/SectionTitle";
import { buttonVariants } from "@/lib/button-variants";
import {
  pricingConsultationNote,
  pricingHighlights,
} from "@/lib/pricing-content";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const heroImage =
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=2000&q=80";

const LINE_GREEN = "#06C755";

const steps = [
  {
    step: "01",
    title: "LINE・お電話で気軽に",
    body: "「こんなこと聞いていいのかな」で大丈夫。無料のご相談から始めます。",
  },
  {
    step: "02",
    title: "整理とお繋ぎ",
    body: "状況を一緒に整理し、必要なら主治医・地域の公的機関・行政・NPOなどへつなぎます。",
  },
  {
    step: "03",
    title: "訪問看護のスタート",
    body: "指示書とケアプランが整い次第、お子さまとご家族に寄り添う訪問を開始します。",
  },
] as const;

export function PricingPageContent() {
  const lineReady =
    siteConfig.lineUrl.trim().length > 0 &&
    /^https?:\/\//i.test(siteConfig.lineUrl);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--background)_90%,transparent)] via-[color-mix(in_srgb,var(--ritanowa-sand)_55%,transparent)] to-[color-mix(in_srgb,var(--ritanowa-gold)_18%,transparent)]"
            aria-hidden
          />
        </div>
        <div className="page-container py-12 md:py-20">
          <p className="text-sm font-semibold tracking-wide text-[var(--ritanowa-gold)] sm:text-base">
            Pricing
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            料金の不安は、
            <br className="sm:hidden" />
            まず無料相談で
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            小児精神科の訪問看護は、多くのご家庭で
            <strong className="font-semibold text-foreground">
              実質自己負担0円
            </strong>
            で受けられます。手続きの前から、りたのわをご家族の駆け込み寺としてお使いください。
          </p>
          <div className="mt-8 inline-flex flex-col gap-1 rounded-3xl border-2 border-[var(--ritanowa-gold)]/50 bg-card/90 px-6 py-5 shadow-sm backdrop-blur-sm sm:px-8 sm:py-6">
            <span className="text-sm font-semibold text-[var(--ritanowa-gold)]">
              目安
            </span>
            <span className="text-4xl font-bold tracking-tight text-[var(--ritanowa-terracotta)] sm:text-5xl">
              自己負担 0円
            </span>
            <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              ※子ども医療証等の対象となる場合が多いです。詳しくは下記または
              <Link href="/faq#cost" className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline">
                よくある質問
              </Link>
            </span>
          </div>
        </div>
      </section>

      <RevealSection className="page-container py-14 md:py-20">
        <SectionTitle
          eyebrow="Points"
          title="料金・費用で知っておきたいこと"
          lead="制度のしくみは人それぞれ異なります。ここでは、ご家族が安心して一歩を踏み出すための大切なポイントをまとめました。"
          className="!px-0"
        />
        <RevealRingList className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {pricingHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8"
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--ritanowa-gold)_20%,transparent)] text-[var(--ritanowa-terracotta)]">
                  <Icon className="size-7" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-xl font-bold leading-snug text-foreground sm:text-2xl">
                  {item.title}
                </h3>
                <p className="flex-1 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {item.body}
                </p>
              </article>
            );
          })}
        </RevealRingList>
      </RevealSection>

      <RevealSection
        id="free-consultation"
        className="scroll-mt-24 border-y border-border/60 bg-[color-mix(in_srgb,var(--ritanowa-sand)_35%,var(--background))] py-14 md:py-20"
      >
        <div className="page-container">
          <div className="mx-auto max-w-3xl text-center">
            <MessageCircle
              className="mx-auto size-12 text-[var(--ritanowa-terracotta)]"
              strokeWidth={1.5}
              aria-hidden
            />
            <h2 className="mt-4 text-balance text-2xl font-bold sm:text-3xl md:text-4xl">
              {pricingConsultationNote.title}
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {pricingConsultationNote.body}
            </p>
            <p className="mt-6 text-pretty text-lg font-medium leading-relaxed text-foreground sm:text-xl">
              {pricingConsultationNote.lineLead}
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4">
            {lineReady ? (
              <Link
                href={siteConfig.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[4.5rem] items-center justify-center gap-3 rounded-3xl px-6 py-5 text-lg font-bold text-white shadow-lg transition-[filter,transform] hover:brightness-105 active:scale-[0.99] sm:text-xl"
                style={{ backgroundColor: LINE_GREEN }}
              >
                <span
                  className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/20 text-sm font-bold"
                  aria-hidden
                >
                  LINE
                </span>
                公式LINEで気軽に相談する
                <ArrowRight
                  className="size-5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            ) : (
              <p className="rounded-3xl border border-dashed border-border/80 bg-card px-6 py-5 text-center text-muted-foreground">
                公式LINEのURLを設定すると、ここから相談できます。
              </p>
            )}
            <Link
              href={`tel:${siteConfig.phone}`}
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "flex min-h-[3.5rem] items-center justify-center gap-2 rounded-3xl border-2 border-border/80 px-6 py-5 text-lg font-semibold"
              )}
            >
              <Phone className="size-5" aria-hidden />
              お電話 {siteConfig.phoneDisplay}
            </Link>
            <Link
              href="/contact"
              className="text-center text-base font-semibold text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline sm:text-lg"
            >
              お問い合わせフォームはこちら
            </Link>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="page-container py-14 md:py-20">
        <SectionTitle
          eyebrow="Flow"
          title="ご相談から訪問看護まで"
          lead="いきなり完璧な手続きがなくても大丈夫。無料相談から、ゆっくり整えていきます。"
          className="!px-0"
        />
        <ol className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((s) => (
            <li
              key={s.step}
              className="relative rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8"
            >
              <span className="text-3xl font-bold tabular-nums text-[var(--ritanowa-gold)]/80">
                {s.step}
              </span>
              <h3 className="mt-3 text-xl font-bold leading-snug">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-center">
          <Link
            href="/flow"
            className="inline-flex items-center gap-1 text-lg font-semibold text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
          >
            ご利用の流れ（詳しく）
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </p>
      </RevealSection>

      <RevealSection className="page-container-narrow pb-16 md:pb-24">
        <aside className="rounded-3xl border border-border/70 bg-[color-mix(in_srgb,var(--ritanowa-sand)_25%,var(--card))] p-6 text-sm leading-relaxed text-muted-foreground sm:p-8 sm:text-base">
          <p className="font-semibold text-foreground">ご確認ください</p>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>
              自己負担額は、お住まいの自治体・医療証・被保険者区分・利用内容により異なります。確定額は自治体・担当窓口や保険者のご説明をご確認ください。
            </li>
            <li>
              本ページは一般的な説明であり、すべての方に同じ条件が適用されるわけではありません。
            </li>
            <li>
              訪問看護の開始には、医師の指示とケアプランが必要です。当ステーションは診断や治療方針を決める立場ではありません。
            </li>
          </ul>
        </aside>
      </RevealSection>
    </>
  );
}
