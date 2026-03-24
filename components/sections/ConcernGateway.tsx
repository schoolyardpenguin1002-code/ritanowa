import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { RevealSection } from "@/components/motion/RevealSection";
import { SectionTitle } from "@/components/SectionTitle";

const cards = [
  {
    title: "不登校・学校に行きづらさ",
    href: "/blog/school-refusal-and-family",
  },
  {
    title: "軽いつらさ・気持ちの落ち込み",
    href: "/blog/mild-mood-and-consultation",
  },
  {
    title: "発達の特性・家族の負担",
    href: "/blog/developmental-diversity-and-family",
  },
  {
    title: "精神科がハードルに感じる",
    href: "/blog/psychiatry-feels-like-a-high-bar",
  },
] as const;

export function ConcernGateway() {
  return (
    <RevealSection
      id="concern-gateway"
      className="border-t border-border/50 bg-[color-mix(in_srgb,var(--background)_92%,var(--ritanowa-sand))] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionTitle
          eyebrow="For families & individuals"
          title="こんなことで困っていませんか"
          lead="診断名の有無にかかわらず、生活の中で感じるモヤモヤを一人で抱え込まず、まずは読み物やFAQで整理してみてください。医療的判断は主治医にお任せし、私たちは訪問看護の立場から伴走します。"
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
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
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/guide"
            className="inline-flex items-center justify-center rounded-full border-2 border-[var(--ritanowa-gold)] bg-transparent px-8 py-4 text-lg font-semibold text-foreground transition-colors hover:bg-[color-mix(in_srgb,var(--ritanowa-gold)_12%,transparent)]"
          >
            ご相談のヒント（一覧）
          </Link>
          <Link
            href="/faq"
            className="text-lg font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            よくある質問へ
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}
