import { HeartHandshake, MessageCircle, Network } from "lucide-react";

import { RevealRingList } from "@/components/motion/RevealRingList";
import { RevealSection } from "@/components/motion/RevealSection";
import { SectionTitle } from "@/components/SectionTitle";

const items = [
  {
    title: "医師によるバックアップ",
    body: "小児・精神領域の医療的視点に基づくアセスメントと、必要時の迅速な連携。お子さまの安全を土台にします。",
    icon: HeartHandshake,
  },
  {
    title: "システムが生む「対話の時間」",
    body: "記録業務を効率化し、お子さまとご家族の話をじっくり聴く時間を創出。成長段階に合わせた関わりを大切にします。",
    icon: MessageCircle,
  },
  {
    title: "ご家庭と地域を繋ぐ「輪」",
    body: "主治医・ケアマネージャー・学校・ご家族をつなぎ、不登校や発達の特性など、暮らしの文脈で支援します。",
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
          lead="小児精神科の訪問看護は、お子さまだけでなくご家族の「輪」として設計します。"
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
