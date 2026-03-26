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
      className="relative overflow-hidden bg-[color-mix(in_srgb,var(--ritanowa-sand)_42%,var(--background))] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Our Strengths"
          title="「りたの輪」3つの約束"
          lead="ケアは一方通行ではなく、想いと時間が巡る「輪」として設計しています。"
        />

        <RevealRingList className="mt-16 grid gap-8 md:grid-cols-3 md:gap-10">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-card p-8 shadow-sm"
              >
                <div
                  className="flex size-14 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--ritanowa-gold)_22%,transparent)] text-[var(--ritanowa-terracotta)]"
                  aria-hidden
                >
                  <Icon className="size-7" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold leading-snug">{item.title}</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            );
          })}
        </RevealRingList>
      </div>
    </RevealSection>
  );
}
