import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { buttonVariants } from "@/lib/button-variants";
import { specialtyMission, specialtyPillars } from "@/lib/specialty-pillars";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const worrySnapshots = [
  {
    title: "不登校・学校に行きづらさが続いている",
    body: "お子さまのペースと、ご家族の不安の両方に向き合いたい。",
  },
  {
    title: "発達の特性があり、日常生活や対人でつらさがある",
    body: "特性への理解と、暮らしやすい工夫を一緒に考えたい。",
  },
  {
    title: "気分の落ち込み・不安・生活リズムの乱れ",
    body: "成長とともに変化する心身のサインが気になる。",
  },
  {
    title: "ご家族の見守り・介護育児に限界を感じている",
    body: "一人で抱え込まず、専門職と役割分担したい。",
  },
] as const;

const serviceItems = [
  "お子さまの病状観察と服薬に関する支援（主治医の指示に基づく）",
  "不登校・学校生活・生活リズムのサポート",
  "発達特性に配慮した関わりと、ご家族への相談",
  "対人関係や外出など、社会生活への復帰に向けた伴走",
  "主治医・地域の公的機関・行政・NPO・学校等との情報共有と連携",
] as const;

export const metadata: Metadata = {
  title: "小児精神科訪問看護とは",
  description: `${siteConfig.nameShort}が提供する小児精神科訪問看護の概要。不登校・発達の特性・在宅療養の支援。高崎市・群馬県内。`,
};

export default function VisitNursingPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="小児精神科訪問看護とは"
        description={`${siteConfig.specialtyCross}を軸に、お子さまの在宅療養とご家族の暮らしを支える訪問看護です。`}
      />

      <RevealSection className="mx-auto max-w-3xl space-y-14 px-4 py-12 md:px-8 md:py-16">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            {siteConfig.specialtyCross}の考え方
          </h2>
          <ul className="grid gap-4 sm:grid-cols-1">
            {specialtyPillars.map((p) => (
              <li
                key={p.id}
                className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm"
              >
                <p className="text-sm font-bold text-[var(--ritanowa-gold)]">{p.label}</p>
                <p className="mt-1 font-semibold text-foreground">{p.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-[var(--ritanowa-gold)]/35 bg-[color-mix(in_srgb,var(--ritanowa-sand)_40%,var(--card))] p-5 shadow-sm sm:p-6">
            <h3 className="text-lg font-bold leading-snug md:text-xl">
              {specialtyMission.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              {specialtyMission.body}
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            このようなことはありませんか？
          </h2>
          <p className="text-lg text-muted-foreground">
            お子さまの心や生活の負担は、ご家族の関係にも影響します。ひとりで抱え込まず、専門職に相談できる選択肢があります。
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {worrySnapshots.map((w) => (
              <li
                key={w.title}
                className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm"
              >
                <p className="font-semibold text-foreground">{w.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </li>
            ))}
          </ul>
          <p>
            <Link
              href="/for-whom"
              className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
            >
              お子さま・ご家族へ（詳しく）
            </Link>
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">訪問看護とは</h2>
          <p className="text-lg text-muted-foreground">
            訪問看護は、医師の指示とケアプランに基づき、看護師等が{" "}
            <strong className="font-semibold text-foreground">ご自宅を訪問して看護を提供する</strong>
            制度です。通院が難しいお子さまも、住み慣れた場所で医療的な支援を受けられます。
          </p>
          <p className="text-lg text-muted-foreground">
            当ステーションはそのなかでも、
            <strong className="font-semibold text-foreground">
              {siteConfig.specialtyCross}
            </strong>
            の領域を中心に、不登校、発達の特性、気分や不安、ご家族の負担など、ご家庭の文脈で看護を行います。
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-border/80 bg-[color-mix(in_srgb,var(--ritanowa-sand)_35%,var(--card))] p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">小児精神科訪問看護のイメージ</h2>
          <p className="text-lg text-muted-foreground">
            成長段階ごとに、心と体の「充電」と「消費」のバランスは変わります。学校や対人、発達の特性、服薬など、さまざまな要因が重なるとき、ご家族も含めて負担がたまりやすくなります。
          </p>
          <p className="text-lg text-muted-foreground">
            訪問看護師は、{" "}
            <strong className="font-semibold text-foreground">
              お子さまとご家族のペースを取り戻すための伴走者
            </strong>
            です。治療方針の決定は主治医に任せ、私たちは在宅での看護と生活の支援に専念します。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">主なサービス内容</h2>
          <ul className="list-inside list-disc space-y-2 text-lg text-muted-foreground">
            {serviceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-muted-foreground">
            医療保険・介護保険など、ご加入の保険に応じた訪問看護を行います。費用のしくみは
            <Link href="/pricing" className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline">
              料金のご案内
            </Link>
            をご覧ください。
          </p>
        </section>

        <div className="flex flex-col gap-4 border-t border-border/60 pt-10 sm:flex-row sm:flex-wrap">
          <Link
            href="/flow"
            className={cn(
              buttonVariants({ variant: "default" }),
              "inline-flex justify-center rounded-3xl px-8 py-6 text-lg"
            )}
          >
            ご利用の流れ
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "inline-flex justify-center rounded-3xl px-8 py-6 text-lg"
            )}
          >
            お問い合わせ
          </Link>
          <Link
            href="/faq"
            className="inline-flex min-h-[52px] items-center justify-center text-lg font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            よくある質問
          </Link>
        </div>
      </RevealSection>
    </SiteLayout>
  );
}
