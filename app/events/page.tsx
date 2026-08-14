import type { Metadata } from "next";
import Link from "next/link";

import { CommunityCalendarEmbed } from "@/components/community/CommunityCalendarEmbed";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { RevealSection } from "@/components/motion/RevealSection";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "イベント情報",
  description: `群馬・高崎周辺の母子・家族向け地域イベントの一覧。${siteConfig.nameShort}と協力サポーターの皆さまがお届けします。`,
};

export default function EventsPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="イベント情報"
        description="母子・家族向けの地域イベントを、共有カレンダーでお届けします。協力サポーターの皆さまが更新しています。"
      />

      <RevealSection id="events" className="scroll-mt-24 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <CommunityCalendarEmbed defaultMode="AGENDA" />
          <aside className="mt-8 rounded-2xl border border-border/70 bg-[color-mix(in_srgb,var(--ritanowa-sand)_22%,var(--card))] p-5 text-sm leading-relaxed text-muted-foreground sm:p-6 sm:text-base">
            <p className="font-semibold text-foreground">ご利用上の注意</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>イベントの主催・運営は各団体・個人に帰属します。</li>
              <li>日時・会場・参加条件の変更は、カレンダーまたは主催者の案内を優先してください。</li>
              <li>{siteConfig.name}の訪問看護サービスとは別の情報です。</li>
            </ul>
          </aside>
          <p className="mt-8 text-center text-base text-muted-foreground">
            主催団体の一覧は
            <Link
              href="/community"
              className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
            >
              協力サポーターのページ
            </Link>
            をご覧ください。
          </p>
        </div>
      </RevealSection>

      <RevealSection className="border-t border-border/60 bg-[color-mix(in_srgb,var(--ritanowa-terracotta)_6%,var(--background))] py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <p className="text-lg font-semibold text-foreground">
            カレンダーへのイベント登録のご希望
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            地域の母子・家族向けイベントの掲載をご希望の団体・個人の方は、お気軽にご連絡ください。
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-[3rem] items-center justify-center rounded-full bg-[var(--ritanowa-terracotta)] px-8 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 sm:text-lg"
          >
            お問い合わせ
          </Link>
        </div>
      </RevealSection>
    </SiteLayout>
  );
}
