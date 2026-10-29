import { RevealRingList } from "@/components/motion/RevealRingList";
import { RevealSection } from "@/components/motion/RevealSection";
import { SectionTitle } from "@/components/SectionTitle";
import { HandDrawnDoodle } from "@/components/decorative/HandDrawnDoodle";
import { specialtyMission, specialtyPillars } from "@/lib/specialty-pillars";
import { siteConfig } from "@/lib/site-config";

export function SpecialtyPillars() {
  return (
    <RevealSection
      id="specialty"
      className="border-b border-border/50 bg-background py-16 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="relative mx-auto max-w-4xl">
          <HandDrawnDoodle kind="rainbow" className="pointer-events-none absolute -top-8 right-0 size-14 rotate-[-9deg] opacity-90 sm:right-6 sm:size-20 md:-top-10" />
        <SectionTitle
          eyebrow="Pediatric × Mental health"
          title={`${siteConfig.specialtyCross}の訪問看護`}
          lead="りたのわは、お子さまのこころと暮らしに焦点を当てた小児精神科の訪問看護ステーションです。発達の特性、不登校、ご家族の負担など、ご家庭の文脈で伴走します。"
        />

        </div>
        <div
          className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:mt-10"
          aria-label="専門領域"
        >
          {siteConfig.specialtyPillars.map((label) => (
            <span
              key={label}
              className="rounded-full border-2 border-[var(--ritanowa-gold)] bg-[color-mix(in_srgb,var(--ritanowa-gold)_14%,transparent)] px-4 py-1.5 text-sm font-bold tracking-wide text-[var(--ritanowa-blue)] sm:px-5 sm:text-base"
            >
              {label}
            </span>
          ))}
        </div>

        <RevealRingList className="mt-10 grid gap-6 sm:mt-14 md:grid-cols-2 md:gap-8">
          {specialtyPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.id}
                className="flex h-full min-w-0 flex-col gap-4 rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--ritanowa-gold)_22%,transparent)] text-[var(--ritanowa-terracotta)]"
                    aria-hidden
                  >
                    <Icon className="size-6" strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-[var(--ritanowa-gold)]">
                    {pillar.label}
                  </span>
                </div>
                <h3 className="text-lg font-semibold leading-snug sm:text-xl">
                  {pillar.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {pillar.body}
                </p>
              </article>
            );
          })}
        </RevealRingList>

        <div className="mt-8 rounded-3xl border border-[var(--ritanowa-gold)]/35 bg-[color-mix(in_srgb,var(--ritanowa-sand)_40%,var(--card))] p-6 text-center shadow-sm sm:mt-10 sm:p-8 md:text-left">
          <p className="text-sm font-bold tracking-wide text-[var(--ritanowa-gold)]">
            {siteConfig.specialtyCross}
          </p>
          <h3 className="mt-2 text-xl font-bold leading-snug sm:text-2xl">
            {specialtyMission.title}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {specialtyMission.body}
          </p>
        </div>
      </div>
    </RevealSection>
  );
}
