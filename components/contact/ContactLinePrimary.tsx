import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

const LINE_GREEN = "#06C755";

const lineReady =
  siteConfig.lineUrl.trim().length > 0 && /^https?:\/\//i.test(siteConfig.lineUrl);

export function ContactLinePrimary() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border-2 border-[var(--ritanowa-gold)]/45 bg-[color-mix(in_srgb,var(--ritanowa-sand)_30%,var(--card))] p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold tracking-wide text-[var(--ritanowa-gold)]">
          いちばんおすすめ
        </p>
        <p className="mt-3 text-pretty text-lg leading-relaxed text-foreground sm:text-xl">
          <strong className="font-bold">LINEからのお問い合わせが便利です。</strong>
          なんでもお気軽にお問い合わせください。お急ぎの場合はお電話ください。
        </p>

        {lineReady ? (
          <Link
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 flex min-h-[4.25rem] w-full items-center justify-center gap-3 rounded-3xl px-6 py-5 text-lg font-bold text-white shadow-lg transition-[filter,transform] hover:brightness-105 active:scale-[0.99] sm:text-xl"
            style={{ backgroundColor: LINE_GREEN }}
          >
            <span
              className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/20 text-sm font-bold"
              aria-hidden
            >
              LINE
            </span>
            公式LINEで相談する
            <ArrowRight
              className="size-5 transition-transform group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        ) : (
          <p className="mt-6 rounded-2xl border border-dashed border-border/80 bg-background/80 px-4 py-3 text-center text-muted-foreground">
            公式LINEの準備中です。お電話または下記フォームをご利用ください。
          </p>
        )}
      </div>

      <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
        <p className="flex items-center gap-2 text-base font-semibold text-foreground sm:text-lg">
          <Phone className="size-5 shrink-0 text-[var(--ritanowa-terracotta)]" aria-hidden />
          お急ぎの方はお電話ください
        </p>
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href={`tel:${siteConfig.phone}`}
              className="-mx-2 block min-h-[52px] rounded-2xl px-2 py-3 font-semibold text-[var(--ritanowa-terracotta)] transition-colors hover:bg-secondary/80 hover:underline"
            >
              <span className="block text-sm font-normal text-muted-foreground">
                優先（携帯）
              </span>
              <span className="text-lg sm:text-xl">{siteConfig.phoneDisplay}</span>
            </a>
          </li>
          <li>
            <a
              href={`tel:${siteConfig.phoneLandline}`}
              className="-mx-2 block min-h-[52px] rounded-2xl px-2 py-3 font-semibold text-[var(--ritanowa-terracotta)] transition-colors hover:bg-secondary/80 hover:underline"
            >
              <span className="block text-sm font-normal text-muted-foreground">固定</span>
              <span className="text-lg sm:text-xl">{siteConfig.phoneLandlineDisplay}</span>
            </a>
            <p className="mt-1 px-2 text-sm text-muted-foreground">
              ※固定電話は出られない可能性があります
            </p>
          </li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground sm:text-base">
          受付時間の目安：{siteConfig.officeHoursLine}
        </p>
      </div>
    </div>
  );
}
