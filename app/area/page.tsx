import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "対応地域・アクセス",
  description: `${siteConfig.name}の訪問エリア（高崎・前橋・安中・富岡・藤岡・甘楽郡ほか）とアクセスについて。`,
};

export default function AreaPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="対応地域・アクセス"
        description="訪問可能エリアは、お住まいの地域・体調・スケジュールにより異なります。お気軽にご相談ください。"
      />
      <RevealSection className="mx-auto max-w-3xl space-y-10 px-4 py-12 text-lg leading-relaxed md:px-8 md:py-16">
        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">拠点</h2>
          <p className="text-muted-foreground">{siteConfig.addressLine}</p>
          <a
            href={siteConfig.mapSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "inline-flex w-fit rounded-3xl px-6 py-6"
            )}
          >
            Googleマップで開く
          </a>
        </section>

        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">主な担当エリア</h2>
          <ul className="list-inside list-disc space-y-2 text-muted-foreground">
            {siteConfig.serviceAreaMunicipalities.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
          <p className="text-muted-foreground">{siteConfig.serviceAreaNote}</p>
        </section>

        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">営業時間（事務・お電話）</h2>
          <p className="font-semibold text-foreground">{siteConfig.officeHoursLine}</p>
          <p className="text-muted-foreground">{siteConfig.officeHoursNote}</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">緊急時の連絡</h2>
          <p className="text-muted-foreground">
            緊急時の受付方法・連絡先は、契約内容や運用に沿ってご案内します。まずは公式LINEかお問い合わせフォームへご連絡ください。
          </p>
          <ul className="space-y-3">
            <li>
              <span className="text-muted-foreground">固定: </span>
              <a
                href={`tel:${siteConfig.phoneLandline}`}
                className="font-semibold text-[var(--ritanowa-terracotta)] underline"
              >
                {siteConfig.phoneLandlineDisplay}
              </a>
              <span className="mt-1 block text-sm text-muted-foreground">
                ※固定電話は出られない可能性があります
              </span>
            </li>
          </ul>
        </section>

        <p>
          <Link
            href="/contact"
            className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
          >
            お問い合わせフォームはこちら
          </Link>
        </p>
      </RevealSection>
    </SiteLayout>
  );
}
