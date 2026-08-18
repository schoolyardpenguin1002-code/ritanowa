import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { EmailCopyButton } from "@/components/EmailCopyButton";
import { SocialLinks } from "@/components/SocialLinks";
import { navGroups, recruitNavLink } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

const LINE_GREEN = "#06C755";

const lineReady =
  siteConfig.lineUrl.trim().length > 0 && /^https?:\/\//i.test(siteConfig.lineUrl);

const legalLinks = [
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/important-disclosure", label: "重要事項説明書" },
] as const;

export function Footer() {
  return (
    <section
      id="contact"
      className="border-t border-border/70 bg-[color-mix(in_srgb,var(--ritanowa-sand)_35%,var(--background))] py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 sm:px-5 md:grid-cols-[minmax(0,1fr)_minmax(260px,0.95fr)] md:gap-12 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)] lg:gap-14">
        <div className="min-w-0 max-w-xl space-y-5 md:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            会社概要・お問い合わせ
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            群馬県高崎市浜尻町を拠点に、小児精神科の訪問看護サービスを提供しています。
          </p>

          <div className="rounded-2xl border-2 border-[color-mix(in_srgb,#06C755_45%,var(--border))] bg-[color-mix(in_srgb,#06C755_8%,var(--card))] p-4 shadow-sm sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#06C755]">
              お問い合わせはまずこちら
            </p>
            <p className="mt-2 text-pretty text-base font-medium leading-relaxed text-foreground md:text-lg">
              まず公式LINEからお問い合わせをください。公式LINEが最も繋がりやすいです。
            </p>
            {lineReady ? (
              <Link
                href={siteConfig.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-base font-bold text-white shadow-md transition-[filter,transform] hover:brightness-105 active:scale-[0.99] sm:text-lg"
                style={{ backgroundColor: LINE_GREEN }}
              >
                <span
                  className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/20 text-xs font-bold"
                  aria-hidden
                >
                  LINE
                </span>
                公式LINEで相談する
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </Link>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">公式LINE（準備中）</p>
            )}
            <p className="mt-3 text-sm text-muted-foreground">
              お急ぎの方は下記お電話、くわしい内容は
              <Link
                href="/contact"
                className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
              >
                お問い合わせページ
              </Link>
              のフォームもご利用ください。
            </p>
          </div>

          <dl className="mt-6 space-y-3.5 text-sm leading-relaxed md:text-[0.9375rem]">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                事業所名
              </dt>
              <dd className="mt-1 text-foreground">{siteConfig.name}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                所在地
              </dt>
              <dd className="mt-1 text-foreground">
                {siteConfig.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                主な担当エリア
              </dt>
              <dd className="mt-1 text-foreground">
                <p className="break-words">{siteConfig.serviceAreaMunicipalities.join("、")}</p>
                <p className="mt-2 break-words text-muted-foreground">{siteConfig.serviceAreaNote}</p>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                営業時間（事務・お電話）
              </dt>
              <dd className="mt-1 text-foreground">
                <p className="font-medium">{siteConfig.officeHoursLine}</p>
                <p className="mt-2 text-muted-foreground">{siteConfig.officeHoursNote}</p>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                お電話（お急ぎの方・タップで発信）
              </dt>
              <dd className="mt-1 space-y-2">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="-mx-2 block min-h-[44px] rounded-xl px-2 py-2 text-base font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 transition-colors hover:bg-secondary/80 hover:underline"
                >
                  <span className="block text-xs text-muted-foreground">優先（携帯）</span>
                  {siteConfig.phoneDisplay}
                </a>
                <div>
                  <a
                    href={`tel:${siteConfig.phoneLandline}`}
                    className="-mx-2 block min-h-[44px] rounded-xl px-2 py-2 text-base font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 transition-colors hover:bg-secondary/80 hover:underline"
                  >
                    <span className="block text-xs text-muted-foreground">固定</span>
                    {siteConfig.phoneLandlineDisplay}
                  </a>
                  <p className="mt-1 px-2 text-xs text-muted-foreground">
                    ※固定電話は出られない可能性があります
                  </p>
                </div>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                メール
              </dt>
              <dd className="mt-1 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="min-h-[44px] break-all py-1 text-sm font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline md:text-base"
                >
                  {siteConfig.email}
                </a>
                <EmailCopyButton email={siteConfig.email} />
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Instagram
              </dt>
              <dd className="mt-1 pt-0.5">
                <SocialLinks instanceId="footer" showLine={false} />
              </dd>
            </div>
          </dl>

          <nav
            aria-label="サイト内リンク（カテゴリ別）"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {navGroups.map((g) => (
              <div key={g.id} className="space-y-2">
                <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-muted-foreground">
                  {g.label}
                </p>
                <ul className="flex flex-col gap-1.5">
                  {g.items.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-foreground hover:underline"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <Link
            href={recruitNavLink.href}
            className="flex items-center justify-between gap-3 rounded-2xl border-2 border-[var(--ritanowa-gold)]/65 bg-gradient-to-r from-[color-mix(in_srgb,var(--ritanowa-gold)_14%,var(--card))] to-[color-mix(in_srgb,var(--ritanowa-sand)_30%,var(--card))] px-4 py-3 text-base font-bold text-foreground shadow-sm transition hover:shadow-md"
          >
            <span>{recruitNavLink.label}</span>
            <span className="text-xl text-[var(--ritanowa-gold)]" aria-hidden>
              →
            </span>
          </Link>

          <div className="flex flex-wrap gap-2 border-t border-border/50 pt-5">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-border/80 bg-card px-2.5 py-1.5 text-sm font-medium text-foreground/90 transition-colors hover:bg-secondary"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            <a
              href={siteConfig.mapSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
            >
              Googleマップで所在地を開く
            </a>
          </p>
        </div>

        <div className="min-w-0 overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm md:sticky md:top-24">
          <div className="aspect-[4/3] w-full md:aspect-[4/5] lg:min-h-0">
            <iframe
              title="Googleマップ — 群馬県高崎市浜尻町209-5 付近"
              src={siteConfig.mapEmbedUrl}
              className="size-full min-h-[220px] border-0 md:min-h-[min(52vh,420px)]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-border/60 px-4 pt-6 text-center text-sm text-muted-foreground md:mt-14 md:px-8 md:pt-8 md:text-base">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </section>
  );
}
