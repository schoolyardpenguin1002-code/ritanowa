import Image from "next/image";
import Link from "next/link";

import { CircleRing } from "@/components/decorative/CircleRing";
import { RevealSection } from "@/components/motion/RevealSection";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const heroImage =
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  return (
    <RevealSection className="relative overflow-hidden">
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
          className="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--background)_82%,transparent)] via-[color-mix(in_srgb,var(--ritanowa-sand)_55%,transparent)] to-[color-mix(in_srgb,var(--ritanowa-terracotta)_28%,transparent)]"
          aria-hidden
        />
      </div>

      <div className="pointer-events-none absolute -left-16 top-24 text-[var(--ritanowa-gold)] opacity-40 md:top-32">
        <CircleRing size={180} strokeWidth={3} />
      </div>
      <div className="pointer-events-none absolute -right-10 bottom-16 text-[var(--ritanowa-terracotta)] opacity-30">
        <CircleRing size={140} strokeWidth={2} />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-24 md:gap-14 md:px-8 md:py-36">
        <div className="max-w-3xl space-y-6">
          <p className="text-lg font-semibold tracking-wide text-[var(--ritanowa-gold)] md:text-xl">
            {siteConfig.concept}
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            <span className="block">「利他の輪」を</span>
            <span className="block">あなたの日常の隣に。</span>
          </h1>
          <p className="text-pretty text-xl leading-relaxed text-foreground/90 md:text-2xl md:leading-relaxed">
            高崎市の精神科特化型訪問看護。医師がバックアップする専門性と、ICTが生み出す「ゆとりの時間」で、あなたの心に深く寄り添います。
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "min-h-[3.25rem] justify-center rounded-3xl px-8 py-6 text-lg shadow-md"
            )}
          >
            相談してみる（無料）
          </Link>
          <div className="flex flex-col gap-2 sm:min-h-[3.25rem] sm:justify-center">
            <Link
              href={`tel:${siteConfig.phone}`}
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "inline-flex min-h-[3.25rem] items-center justify-center rounded-3xl border border-border/80 px-8 py-6 text-lg"
              )}
            >
              お電話（優先）{siteConfig.phoneDisplay}
            </Link>
            <a
              href={`tel:${siteConfig.phoneLandline}`}
              className="block min-h-[48px] rounded-2xl px-2 py-2 text-center text-base text-foreground/90 transition-colors hover:bg-black/5 sm:text-left"
            >
              <span className="block text-muted-foreground">固定（タップで発信）</span>
              <span className="font-semibold text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline">
                {siteConfig.phoneLandlineDisplay}
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                ※出られない可能性があります
              </span>
            </a>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
