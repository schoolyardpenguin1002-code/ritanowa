import Image from "next/image";
import Link from "next/link";

import { CircleRing } from "@/components/decorative/CircleRing";
import { RevealSection } from "@/components/motion/RevealSection";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const heroImage =
  "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=2000&q=80";

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
          className="absolute inset-0 bg-[color-mix(in_srgb,var(--background)_78%,transparent)] md:bg-transparent md:bg-gradient-to-br md:from-[color-mix(in_srgb,var(--background)_85%,transparent)] md:via-[color-mix(in_srgb,var(--ritanowa-sand)_50%,transparent)] md:to-[color-mix(in_srgb,var(--ritanowa-terracotta)_22%,transparent)]"
          aria-hidden
        />
      </div>

      <div className="pointer-events-none absolute -left-16 top-24 hidden text-[var(--ritanowa-gold)] opacity-40 sm:block md:top-32">
        <CircleRing size={180} strokeWidth={3} />
      </div>
      <div className="pointer-events-none absolute -right-10 bottom-16 hidden text-[var(--ritanowa-terracotta)] opacity-30 sm:block">
        <CircleRing size={140} strokeWidth={2} />
      </div>

      <div className="mx-auto flex w-full min-w-0 max-w-6xl flex-col gap-8 px-4 py-16 sm:gap-10 sm:py-20 md:gap-14 md:px-8 md:py-32">
        <div className="max-w-3xl min-w-0 space-y-4 sm:space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[color-mix(in_srgb,var(--ritanowa-terracotta)_88%,#fff)] px-3.5 py-1 text-sm font-bold tracking-wide text-white shadow-sm sm:px-4 sm:text-base">
              {siteConfig.specialtyCross}
            </span>
            <span className="text-sm font-semibold text-[var(--ritanowa-gold)] sm:text-base">
              訪問看護
            </span>
          </div>
          <p className="text-base font-semibold tracking-wide text-[var(--ritanowa-gold)] sm:text-lg md:text-xl">
            {siteConfig.concept}
          </p>
          <h1 className="text-balance text-[1.65rem] font-bold leading-[1.2] tracking-tight text-foreground min-[400px]:text-[1.85rem] sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block">お子さまとご家族の</span>
            <span className="block">「利他の輪」を、日常の隣に。</span>
          </h1>
          <p className="text-pretty text-base leading-relaxed text-foreground/90 sm:text-lg md:text-2xl md:leading-relaxed">
            {siteConfig.primaryServiceAreaLabel}の{siteConfig.specialtyShort}訪問看護。不登校・発達の特性・お子さまのこころの不調——ご家庭のペースを大切に、地域の皆さまとともにお子さまとご家族を支えます。
          </p>
          <p className="text-pretty text-base font-bold leading-relaxed text-[var(--ritanowa-terracotta)] sm:text-lg md:text-xl">
            営業時間は9:00〜21:00。夕方〜夜や週末の訪問にも対応し、学校のあとの時間帯も、ご家庭のリズムに合わせて伺えます。
          </p>
        </div>

        <div className="flex w-full min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "default" }),
              "flex min-h-[3.25rem] w-full items-center justify-center rounded-3xl px-6 py-5 text-base shadow-md sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
            )}
          >
            ご家族の相談（無料）
          </Link>
        </div>

        <nav
          aria-label="主要ガイド"
          className="flex flex-wrap gap-x-4 gap-y-2 border-t border-foreground/10 pt-5 text-sm sm:gap-x-6 sm:pt-6 sm:text-base"
        >
          <Link
            href="/visit-nursing"
            className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
          >
            小児精神科訪問看護とは
          </Link>
          <Link
            href="/for-whom"
            className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
          >
            お子さま・ご家族へ
          </Link>
          <Link
            href="/#concern-gateway"
            className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
          >
            お悩みから探す
          </Link>
        </nav>
      </div>
    </RevealSection>
  );
}
