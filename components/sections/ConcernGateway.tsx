import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { RevealSection } from "@/components/motion/RevealSection";
import { SectionTitle } from "@/components/SectionTitle";
import { HandDrawnDoodle } from "@/components/decorative/HandDrawnDoodle";
import { concernGatewayCards } from "@/lib/concern-gateway-cards";

export function ConcernGateway() {
  return (
    <RevealSection
      id="concern-gateway"
      className="border-t border-border/50 bg-[color-mix(in_srgb,var(--background)_92%,var(--ritanowa-sand))] py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="relative mx-auto max-w-4xl">
          <HandDrawnDoodle kind="flower" className="pointer-events-none absolute -top-8 right-0 size-14 rotate-[-9deg] opacity-90 sm:right-6 sm:size-20 md:-top-10" />
        <SectionTitle
          eyebrow="For children & families"
          title="こんなことで困っていませんか"
          lead="不登校、発達の特性、お子さまの気持ちの不調、ご家族の負担——診断名の有無にかかわらず、一人で抱え込まず、まずは読み物やFAQで整理してみてください。医療的判断は主治医にお任せし、私たちは訪問看護の立場からご家庭に寄り添います。"
        />

        </div>
        <ul className="mt-10 grid gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {concernGatewayCards.map((c) => (
            <li key={c.href} className="min-w-0">
              <Link
                href={c.href}
                className="group flex h-full min-h-[100px] flex-col justify-between rounded-3xl border border-border/80 bg-card p-4 shadow-sm transition-all hover:border-[var(--ritanowa-gold)]/50 hover:shadow-md sm:min-h-[120px] sm:p-5"
              >
                <span className="text-base font-semibold leading-snug text-foreground sm:text-lg">
                  {c.title}
                </span>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--ritanowa-gold)] sm:mt-4 sm:text-base">
                  コラムへ
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex w-full min-w-0 flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <Link
            href="/for-whom"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-[var(--ritanowa-gold)] bg-transparent px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-[color-mix(in_srgb,var(--ritanowa-gold)_12%,transparent)] sm:px-8 sm:py-4 sm:text-lg"
          >
            お子さま・ご家族へ
          </Link>
          <Link
            href="/guide"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-border/80 bg-card px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary sm:px-8 sm:py-4 sm:text-lg"
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
