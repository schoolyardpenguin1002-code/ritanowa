import Image from "next/image";

import { RevealSection } from "@/components/motion/RevealSection";
import { SectionTitle } from "@/components/SectionTitle";
import { director } from "@/lib/staff-data";

export function DirectorMessage() {
  return (
    <RevealSection
      id="director-message"
      className="bg-[color-mix(in_srgb,var(--ritanowa-sand)_30%,var(--background))] py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Message"
          title="代表挨拶"
          lead="お子さまとご家族に寄り添い、地域の小児精神科訪問看護を誠実に支えます。"
        />

        <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-start md:gap-12 lg:gap-16">
          <div className="mx-auto w-full max-w-sm shrink-0 md:mx-0 md:w-[min(100%,380px)]">
            {director.imageSrc ? (
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/80 bg-card shadow-md">
                <Image
                  src={director.imageSrc}
                  alt={director.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width:768px) 100vw, 380px"
                />
              </div>
            ) : (
              <div
                className="flex aspect-[4/5] items-center justify-center rounded-3xl border-2 border-dashed border-[var(--ritanowa-gold)]/45 bg-[color-mix(in_srgb,var(--ritanowa-sand)_45%,var(--card))] shadow-sm"
                aria-label={director.imageAlt}
              >
                <span className="px-4 text-center text-sm leading-relaxed text-muted-foreground">
                  写真準備中
                </span>
              </div>
            )}
            <div className="mt-3 text-center md:text-left">
              <p className="font-semibold text-foreground">{director.name}</p>
              <p className="text-sm text-muted-foreground">{director.title}</p>
            </div>
          </div>

          <div className="min-w-0 flex-1 space-y-6">
            <div className="space-y-4 whitespace-pre-line text-lg leading-relaxed text-foreground/95 md:text-xl md:leading-relaxed">
              {director.message}
            </div>
            {director.note ? (
              <p className="text-sm text-muted-foreground">{director.note}</p>
            ) : null}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
