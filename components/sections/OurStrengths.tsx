import { HeartHandshake, MessageCircle, Network } from "lucide-react";

import { RevealRingList } from "@/components/motion/RevealRingList";
import { RevealSection } from "@/components/motion/RevealSection";
import { SectionTitle } from "@/components/SectionTitle";

const items = [
  {
    title: "医師によるバックアップ",
    body: "医療的なエビデンスに基づいた的確なアセスメントと迅速な判断。",
    icon: HeartHandshake,
  },
  {
    title: "システムが生む「対話の時間」",
    body: "最新ツールの導入で記録業務を効率化。その分、お一人おひとりの話をじっくり聴く時間を創出。",
    icon: MessageCircle,
  },
  {
    title: "地域を繋ぐ循環のケア",
    body: "利用者様を中心に、主治医やケアマネジャー、ご家族を一つの「輪」として繋ぐ連携。",
    icon: Network,
  },
] as const;

export function OurStrengths() {
  return (
    <RevealSection
      id="strengths"
      className="relative overflow-x-clip overflow-y-visible bg-[color-mix(in_srgb,var(--ritanowa-sand)_42%,var(--background))] py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <SectionTitle
          eyebrow="Our Strengths"
          title="「りたのわ」3つの約束"
          lead="ケアは一方通行ではなく、想いと時間が巡る「輪」として設計しています。"
        />

        <RevealRingList className="mt-10 grid gap-6 sm:mt-16 md:grid-cols-3 md:gap-8 lg:gap-10">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex h-full min-w-0 flex-col gap-3 rounded-3xl border border-border/70 bg-card p-5 shadow-sm sm:gap-4 sm:p-8"
              >
                <div
                  className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--ritanowa-gold)_22%,transparent)] text-[var(--ritanowa-terracotta)] sm:size-14"
                  aria-hidden
                >
                  <Icon className="size-6 sm:size-7" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold leading-snug sm:text-xl">{item.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{item.body}</p>
              </article>
            );
          })}
        </RevealRingList>
      </div>
    </RevealSection>
  );
}
