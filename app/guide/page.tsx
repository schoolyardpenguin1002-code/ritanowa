import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "ご相談のヒント",
  description: `精神科訪問看護を検討する前の不安や、ご家族の悩みについて。${siteConfig.nameShort}（高崎市）。`,
};

const topics = [
  {
    title: "不登校・学校に行きづらさ",
    body: "ご家族の見守りや不安について、話を聞くことから始められます。医療的判断や診断の確定は医師の役割です。",
    href: "/blog/school-refusal-and-family",
    faqHref: "/faq#school-refusal",
  },
  {
    title: "軽いつらさ・気持ちの落ち込み",
    body: "「まだ大ごとではない」と感じる段階でも、相談のタイミングは人それぞれです。窓口の選び方のヒントをまとめました。",
    href: "/blog/mild-mood-and-consultation",
    faqHref: "/faq#mild-symptoms",
  },
  {
    title: "発達の特性・ご家族の負担",
    body: "特性や発達に関する不安は、介護負担にもつながります。支援のつなぎ方を、生活の文脈で整理します。",
    href: "/blog/developmental-diversity-and-family",
    faqHref: "/faq#developmental",
  },
  {
    title: "精神科がハードルに感じるとき",
    body: "受診への怖さや抵抗感は珍しくありません。無理に決めつけず、まずは相談の一歩を考えるための視点です。",
    href: "/blog/psychiatry-feels-like-a-high-bar",
    faqHref: "/faq#psychiatry-barrier",
  },
] as const;

export default function GuidePage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="ご相談のヒント"
        description="診断や治療効果を約束するものではありません。生活の中でのつらさや不安を言葉にし、主治医・ケアマネ・訪問看護などの役割を整理するための入口です。"
      />
      <RevealSection className="mx-auto max-w-5xl px-4 py-10 md:px-8 md:py-14">
        <p className="mx-auto max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
          精神科に「まだ行けない」、症状が「はっきりしない」——そう感じる方やご家族向けに、コラムとFAQを分類しました。お困りごとに近いものからお読みください。
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {topics.map((t) => (
            <li key={t.title}>
              <article className="flex h-full flex-col rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <h2 className="text-xl font-semibold leading-snug">{t.title}</h2>
                <p className="mt-3 flex-1 text-lg leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
                <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                  <Link
                    href={t.href}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    コラムを読む
                  </Link>
                  <Link
                    href={t.faqHref}
                    className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    関連FAQ
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-12 max-w-3xl text-center text-base text-muted-foreground">
          ご利用の可否は主治医の判断とケアプランに基づきます。お急ぎの場合は
          <Link href="/contact" className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline">
            お問い合わせ
          </Link>
          またはお電話にてご相談ください。
        </p>
      </RevealSection>
    </SiteLayout>
  );
}
