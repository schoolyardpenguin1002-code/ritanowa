import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Globe, Users } from "lucide-react";

import { RevealRingList } from "@/components/motion/RevealRingList";
import { RevealSection } from "@/components/motion/RevealSection";
import { SectionTitle } from "@/components/SectionTitle";
import type { SupporterOrg } from "@/lib/supporters-data";
import { supporterOrgs } from "@/lib/supporters-data";

function SupporterCard({ org }: { org: SupporterOrg }) {
  const links = [
    org.website && { href: org.website, label: "公式サイト" },
    org.lineUrl && { href: org.lineUrl, label: "LINE" },
    org.instagramUrl && { href: org.instagramUrl, label: "Instagram" },
  ].filter(Boolean) as { href: string; label: string }[];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start gap-4 border-b border-border/60 bg-[color-mix(in_srgb,var(--ritanowa-sand)_25%,var(--card))] p-5 sm:p-6">
        {org.logoSrc ? (
          <div className="relative size-14 shrink-0 overflow-hidden rounded-2xl border border-border/70 bg-background">
            <Image
              src={org.logoSrc}
              alt=""
              fill
              className="object-contain p-1"
              sizes="56px"
            />
          </div>
        ) : (
          <div
            className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--ritanowa-gold)_18%,transparent)] text-[var(--ritanowa-terracotta)]"
            aria-hidden
          >
            <Users className="size-7" strokeWidth={1.75} />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold leading-snug text-foreground sm:text-xl">
            {org.name}
          </h3>
          {org.area ? (
            <p className="mt-1 text-sm text-muted-foreground">{org.area}</p>
          ) : null}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
        <p className="flex-1 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {org.description}
        </p>
        {org.tags && org.tags.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {org.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[color-mix(in_srgb,var(--ritanowa-gold)_14%,transparent)] px-3 py-0.5 text-sm font-medium text-[var(--ritanowa-terracotta)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
        {links.length > 0 ? (
          <ul className="flex flex-col gap-2 border-t border-border/60 pt-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base font-semibold text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
                >
                  <Globe className="size-4 shrink-0" aria-hidden />
                  {link.label}
                  <ExternalLink className="size-3.5 opacity-70" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

export function SupporterDirectory() {
  return (
    <RevealSection id="supporters" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <SectionTitle
          eyebrow="Supporters"
          title="協力サポーターの皆さま"
          lead="りたのわと共感・連携している団体・個人のご紹介です。くわしい活動内容は、各リンク先のホームページ等をご覧ください。"
        />

        {supporterOrgs.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-dashed border-border/80 bg-[color-mix(in_srgb,var(--ritanowa-sand)_30%,var(--background))] p-8 text-center md:p-12">
            <p className="text-lg font-semibold text-foreground">掲載を準備しています</p>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              連携団体・サポーターの情報は順次掲載します。掲載のご希望は
              <Link
                href="/contact"
                className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
              >
                お問い合わせ
              </Link>
              よりご連絡ください。
            </p>
          </div>
        ) : (
          <RevealRingList className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
            {supporterOrgs.map((org) => (
              <SupporterCard key={org.id} org={org} />
            ))}
          </RevealRingList>
        )}
      </div>
    </RevealSection>
  );
}
