import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SectionTitle } from "@/components/SectionTitle";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export function Recruit() {
  return (
    <RevealSection
      id="recruit"
      className="relative overflow-hidden bg-[color-mix(in_srgb,var(--ritanowa-terracotta)_10%,var(--background))] py-24 md:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-8 size-[28rem] -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--ritanowa-gold)_18%,transparent)] blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-8">
        <SectionTitle
          eyebrow="採用のご案内"
          title="スタッフ採用のお知らせ"
          lead="このサイトのトップは、ご利用をお考えの方・ケアマネジャー様・ご家族様向けの内容です。採用に関する詳細は、求職者向けの専用ページをご覧ください。ご利用・ご相談は「お問い合わせ」よりお願いいたします。"
          align="center"
        />
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          カジュアル面談や事務所見学も承っています。まずはお気軽にご連絡ください。
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/recruit"
            className={cn(
              buttonVariants({ variant: "default" }),
              "min-h-14 justify-center rounded-full px-10 py-6 text-lg"
            )}
          >
            採用情報の詳細を見る
          </Link>
          <Link
            href="/contact?topic=recruit"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "min-h-14 justify-center rounded-full border-2 border-[var(--ritanowa-gold)]/60 bg-background px-10 py-6 text-lg"
            )}
          >
            採用・見学のお問い合わせ
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}
