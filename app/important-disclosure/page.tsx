import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "重要事項説明書",
  description: `${siteConfig.name}の重要事項説明書。現在準備中です。`,
  robots: { index: true, follow: true },
};

export default function ImportantDisclosurePage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="重要事項説明書"
        description="サービス内容・料金・ご利用条件などをご契約前にご説明するための文書です。"
      />
      <RevealSection className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
        <div className="rounded-3xl border border-dashed border-border/90 bg-muted/30 p-8 md:p-10">
          <p className="text-lg font-semibold text-foreground">準備中</p>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            重要事項説明書の本文を現在整備しています。整い次第、本ページに掲載する予定です（PDFでの提供を想定しています）。
          </p>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            ご契約・ご利用にあたってのご質問は、お電話またはお問い合わせフォームよりお気軽にどうぞ。
          </p>
          <p className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center rounded-full border-2 border-[var(--ritanowa-gold)]/70 bg-card px-5 py-2.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              お問い合わせ
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center text-base font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
            >
              ← トップへ
            </Link>
          </p>
        </div>
      </RevealSection>
    </SiteLayout>
  );
}
