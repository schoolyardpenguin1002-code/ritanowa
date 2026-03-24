import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "送信ありがとうございました",
  description: "お問い合わせを受け付けました。",
  robots: { index: false, follow: false },
};

export default function ContactThanksPage() {
  return (
    <SiteLayout>
      <SubpageHeader title="お問い合わせ" />
      <RevealSection className="mx-auto max-w-3xl px-4 py-16 text-center md:px-8 md:py-24">
        <p className="text-2xl font-bold">メールアプリをご確認ください</p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          送信ボタン後にメール作成画面が開いています。内容をご確認のうえ送信してください。開かない場合は
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-[var(--ritanowa-terracotta)] underline"
          >
            メール
          </a>
          またはお電話（優先 {siteConfig.phoneDisplay}
          ／固定 {siteConfig.phoneLandlineDisplay}
          <span className="text-sm"> ※固定は出られない可能性があります</span>
          ）にてご連絡ください。
        </p>
        <p className="mt-10">
          <Link
            href="/"
            className="text-lg font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
          >
            トップへ戻る
          </Link>
        </p>
      </RevealSection>
    </SiteLayout>
  );
}
