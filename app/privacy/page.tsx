import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: `${siteConfig.name}の個人情報の取り扱いについて。`,
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <SiteLayout>
      <SubpageHeader title="プライバシーポリシー" />
      <RevealSection className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
        <p className="text-lg text-muted-foreground">
          {siteConfig.name}（以下「当ステーション」）は、お預かりする個人情報の重要性を認識し、適切に取り扱います。実際の運営に合わせて本文を精査してください。
        </p>

        <div className="mt-12 space-y-10 text-lg leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">1. 個人情報の利用目的</h2>
            <p className="text-muted-foreground">
              ご相談・お問い合わせへの対応、サービス提供に必要な連絡、法令に基づく対応のために利用します。
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">2. 第三者提供</h2>
            <p className="text-muted-foreground">
              法令に基づく場合を除き、ご本人の同意なく第三者に個人情報を提供しません。
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">3. 安全管理</h2>
            <p className="text-muted-foreground">
              個人情報への不正アクセス、漏えい、滅失、毀損などを防止するため、必要かつ適切な安全管理措置を講じます。
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold">4. お問い合わせ</h2>
            <p className="text-muted-foreground">
              個人情報の取扱いに関するお問い合わせは、お電話（優先{" "}
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-medium text-[var(--ritanowa-terracotta)] underline"
              >
                {siteConfig.phoneDisplay}
              </a>
              ／固定 {siteConfig.phoneLandlineDisplay}
              <span className="text-sm"> ※固定は出られない可能性があります</span>
              ）または
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-medium text-[var(--ritanowa-terracotta)] underline"
              >
                メール
              </a>
              までご連絡ください。
            </p>
          </section>
        </div>

        <p className="mt-12">
          <Link
            href="/"
            className="text-lg font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
          >
            ← トップへ
          </Link>
        </p>
      </RevealSection>
    </SiteLayout>
  );
}
