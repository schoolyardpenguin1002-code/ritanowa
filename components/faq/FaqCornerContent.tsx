import Image from "next/image";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { buttonVariants } from "@/lib/button-variants";
import { faqCornerItems } from "@/lib/faq-corner-data";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const heroImage =
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=80";

export function FaqCornerContent() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[color-mix(in_srgb,var(--background)_92%,transparent)] via-[color-mix(in_srgb,var(--background)_78%,transparent)] to-[color-mix(in_srgb,var(--ritanowa-sand)_55%,transparent)]"
            aria-hidden
          />
        </div>
        <div className="mx-auto flex min-h-[220px] max-w-6xl flex-col justify-center px-4 py-12 sm:min-h-[260px] sm:px-5 md:min-h-[300px] md:px-8 md:py-16">
          <p className="text-sm font-semibold tracking-wide text-[var(--ritanowa-gold)] sm:text-base">
            FAQ Corner
          </p>
          <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            よくある質問コーナー
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            料金・対象・利用の流れなど、ご家族からよくいただく質問をまとめました。くわしいご状況は、お気軽にご相談ください。
          </p>
        </div>
      </section>

      <RevealSection className="border-b border-border/50 bg-[color-mix(in_srgb,var(--ritanowa-sand)_28%,var(--background))] py-8 md:py-10">
        <nav
          aria-label="質問一覧"
          className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2 px-4 sm:gap-3 md:px-8"
        >
          {faqCornerItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full border border-border/80 bg-card px-3 py-2 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-[var(--ritanowa-gold)]/60 hover:bg-[color-mix(in_srgb,var(--ritanowa-gold)_10%,var(--card))] sm:px-4 sm:text-base"
            >
              <span className="mr-1.5 text-[var(--ritanowa-terracotta)]">Q{index + 1}</span>
              {item.q}
            </a>
          ))}
        </nav>
      </RevealSection>

      <RevealSection className="mx-auto max-w-6xl space-y-10 px-4 py-12 md:space-y-14 md:px-8 md:py-16 lg:space-y-16">
        {faqCornerItems.map((item, index) => {
          const Icon = item.icon;
          const imageRight = index % 2 === 1;

          return (
            <article
              key={item.id}
              id={item.id}
              className="scroll-mt-28 overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm"
            >
              <div
                className={cn(
                  "grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]",
                  imageRight && "md:[&>*:first-child]:order-2"
                )}
              >
                <div className="relative aspect-[16/10] min-h-[200px] w-full md:aspect-auto md:min-h-[280px]">
                  <Image
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent md:bg-gradient-to-r md:from-black/20 md:to-transparent"
                    aria-hidden
                  />
                  <div className="absolute left-4 top-4 flex size-12 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--background)_88%,transparent)] text-[var(--ritanowa-terracotta)] shadow-md backdrop-blur-sm">
                    <Icon className="size-6" strokeWidth={1.75} aria-hidden />
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-4 p-6 sm:p-8 md:p-10">
                  <p className="text-sm font-bold tracking-wide text-[var(--ritanowa-gold)]">
                    Question {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-xl font-bold leading-snug text-foreground sm:text-2xl md:text-[1.65rem]">
                    <span className="mr-2 text-[var(--ritanowa-terracotta)]">Q.</span>
                    {item.q}
                  </h3>
                  <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed">
                    <span className="mr-1 font-semibold text-foreground">A.</span>
                    {item.a}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </RevealSection>

      <RevealSection className="border-t border-border/60 bg-[color-mix(in_srgb,var(--ritanowa-terracotta)_8%,var(--background))] py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <p className="text-lg font-semibold text-foreground md:text-xl">
            ご不明点は、お電話またはお問い合わせフォームで承ります
          </p>
          <p className="mt-3 text-base text-muted-foreground sm:text-lg">
            受付時間の目安：{siteConfig.officeHoursLine}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "default" }),
                "inline-flex min-h-[3.25rem] justify-center rounded-3xl px-8 py-6 text-lg"
              )}
            >
              相談してみる（無料）
            </Link>
            <Link
              href="/flow"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "inline-flex min-h-[3.25rem] justify-center rounded-3xl px-8 py-6 text-lg"
              )}
            >
              ご利用の流れ
            </Link>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex min-h-[3.25rem] items-center justify-center text-lg font-semibold text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
            >
              お電話 {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </RevealSection>
    </>
  );
}
