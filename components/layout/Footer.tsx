import Link from "next/link";

import { EmailCopyButton } from "@/components/EmailCopyButton";
import { RevealSection } from "@/components/motion/RevealSection";
import { SocialLinks } from "@/components/SocialLinks";
import { navGroups, recruitNavLink } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";

const legalLinks = [
  { href: "/privacy", label: "プライバシーポリシー" },
] as const;

export function Footer() {
  return (
    <RevealSection
      id="contact"
      className="border-t border-border/70 bg-[color-mix(in_srgb,var(--ritanowa-sand)_35%,var(--background))] py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 md:grid-cols-[minmax(0,1fr)_minmax(280px,0.95fr)] md:gap-12 md:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)] lg:gap-14">
        <div className="max-w-xl space-y-5 md:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            会社概要・お問い合わせ
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            群馬県高崎市浜尻町を拠点に、精神科特化型の訪問看護サービスを提供しています。ご相談・ご不明点はお電話またはお問い合わせフォームにて承ります。
          </p>
          <dl className="space-y-3.5 text-sm leading-relaxed md:text-[0.9375rem]">
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
                電話（タップで発信）
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
                公式アカウント
              </dt>
              <dd className="mt-1 pt-0.5">
                <SocialLinks instanceId="footer" />
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                指定訪問看護事業所番号
              </dt>
              <dd className="mt-1 text-foreground">{siteConfig.officeNumber}</dd>
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
    </RevealSection>
  );
}
