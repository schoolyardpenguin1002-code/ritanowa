import Image from "next/image";
import Link from "next/link";

import { CommunityCalendarEmbed } from "@/components/community/CommunityCalendarEmbed";
import { SupporterDirectory } from "@/components/community/SupporterDirectory";
import { RevealSection } from "@/components/motion/RevealSection";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/lib/site-config";

const heroImage =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=80";

export function CommunityPageContent() {
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
            className="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--background)_88%,transparent)] via-[color-mix(in_srgb,var(--ritanowa-sand)_50%,transparent)] to-transparent"
            aria-hidden
          />
        </div>
        <div className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
          <p className="text-sm font-semibold tracking-wide text-[var(--ritanowa-gold)] sm:text-base">
            Community
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.nameShort}
            と地域で支え合う仲間の入口です。母子・家族向けのイベント情報と、連携サポーターのリンクをまとめています。
          </p>
        </div>
      </section>

      <RevealSection id="events" className="scroll-mt-24 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
          <SectionTitle
            eyebrow="Events"
            title="母子・家族向け 地域イベント"
            lead="共有Googleカレンダーに掲載されたイベント一覧です。サポーターの皆さまが更新します。内容・申込方法は各イベントの詳細をご確認ください。"
          />
          <div className="mt-10">
            <CommunityCalendarEmbed defaultMode="AGENDA" />
          </div>
          <aside className="mt-8 rounded-2xl border border-border/70 bg-[color-mix(in_srgb,var(--ritanowa-sand)_22%,var(--card))] p-5 text-sm leading-relaxed text-muted-foreground sm:p-6 sm:text-base">
            <p className="font-semibold text-foreground">ご利用上の注意</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>イベントの主催・運営は各団体・個人に帰属します。</li>
              <li>日時・会場・参加条件の変更は、カレンダーまたは主催者の案内を優先してください。</li>
              <li>{siteConfig.name}の訪問看護サービスとは別の情報です。</li>
            </ul>
          </aside>
        </div>
      </RevealSection>

      <SupporterDirectory />

      <RevealSection className="border-t border-border/60 bg-[color-mix(in_srgb,var(--ritanowa-terracotta)_6%,var(--background))] py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <p className="text-lg font-semibold text-foreground">
            掲載・イベント登録のご希望
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            共生サポーターとしての掲載、またはカレンダーへのイベント登録については、お問い合わせください。
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-[3rem] items-center justify-center rounded-full bg-[var(--ritanowa-terracotta)] px-8 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 sm:text-lg"
          >
            お問い合わせ
          </Link>
        </div>
      </RevealSection>
    </>
  );
}
