import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "ご相談のヒント",
  description: `小児精神科訪問看護を検討する前の不安や、お子さま・ご家族の悩みについて。${siteConfig.nameShort}（高崎市）。`,
};

const topics = [
  {
    title: "不登校・学校に行きづらさ",
    body: "お子さまのペースと、ご家族の見守り・不安について、話を聞くことから始められます。",
    href: "/blog/school-refusal-and-family",
    faqHref: "/faq#when-to-use",
  },
  {
    title: "発達の特性・ご家族の負担",
    body: "特性や発達に関する不安は、ご家族の負担にもつながります。支援のつなぎ方を、生活の文脈で整理します。",
    href: "/blog/developmental-diversity-and-family",
    faqHref: "/faq#who-eligible",
  },
  {
    title: "お子さまの気持ち・生活リズム",
    body: "眠り・食事・服薬など、在宅での変化を一緒に整理するヒントをまとめました。",
    href: "/blog/rhythm-and-medication-at-home",
    faqHref: "/faq#no-diagnosis",
  },
  {
    title: "ご家族の心のケア・見守りの限界",
    body: "介護育児や見守りの負担について、専門職と役割分担する視点です。",
    href: "/blog/family-burnout",
    faqHref: "/faq#parent-support",
  },
  {
    title: "精神科受診への不安・ハードル",
    body: "受診への怖さや抵抗感は珍しくありません。まずは相談の一歩を考えるための視点です。",
    href: "/blog/psychiatry-feels-like-a-high-bar",
    faqHref: "/faq#no-diagnosis",
  },
  {
    title: "診断前・軽いつらさから相談したい",
    body: "「まだ大ごとではない」と感じる段階でも、相談のタイミングは人それぞれです。",
    href: "/blog/mild-mood-and-consultation",
    faqHref: "/faq#no-diagnosis",
  },
] as const;

export default function GuidePage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="ご相談のヒント"
        description="診断や治療効果を約束するものではありません。お子さまとご家族の生活のなかでのつらさや不安を言葉にし、主治医・ケアマネージャー・訪問看護などの役割を整理するための入口です。"
      />
      <RevealSection className="mx-auto max-w-5xl px-4 py-10 md:px-8 md:py-14">
        <p className="mx-auto max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
          不登校、発達の特性、お子さまの気持ちの不調——ご家族が抱えやすいテーマごとに、コラムとFAQを分類しました。お困りごとに近いものからお読みください。
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {topics.map((t) => (
            <li key={t.title}>
              <article className="flex h-full flex-col rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <h2 className="text-xl font-semibold leading-snug">{t.title}</h2>
                <p className="mt-3 flex-1 text-lg leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-4 text-base">
                  <Link
                    href={t.href}
                    className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
                  >
                    コラムを読む
                  </Link>
                  <Link
                    href={t.faqHref}
                    className="font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
                  >
                    関連FAQ
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </RevealSection>
    </SiteLayout>
  );
}
