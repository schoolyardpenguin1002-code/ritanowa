import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "料金・費用について",
  description: `訪問看護の費用に関する一般的な説明です。${siteConfig.name}`,
};

export default function PricingPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="料金・費用について"
        description="個別の金額は、保険者区分や利用回数等により異なります。必ずケアマネジャー等の説明をご確認ください。"
      />
      <RevealSection className="mx-auto max-w-3xl space-y-8 px-4 py-12 text-lg leading-relaxed md:px-8 md:py-16">
        <div className="rounded-3xl border border-amber-200/80 bg-amber-50/90 p-6 text-foreground">
          <p className="font-semibold">重要なお知らせ</p>
          <p className="mt-2 text-muted-foreground">
            本ページは一般的な説明です。医療広告ガイドラインおよび最新の制度に照らし、必要に応じて文言を調整してください。具体的な自己負担額は、被保険者区分・上限額・回数等により変動します。
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">保険診療下の訪問看護</h2>
          <p className="text-muted-foreground">
            要介護・要支援の方を対象とした居宅サービスとしての訪問看護には、原則として一定の自己負担がかかります。負担割合（1割・2割・3割）は被保険者区分により異なります。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">ご確認いただきたい方</h2>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>介護保険のケアマネジャー（または担当者）</li>
            <li>ご利用者様の加入している保険の窓口</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">ご相談</h2>
          <p className="text-muted-foreground">
            当ステーションでも利用イメージのご説明は可能ですが、金額の最終的な確定は上記の窓口でのご確認をお願いいたします。
          </p>
          <p>
            <Link
              href="/contact"
              className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
            >
              お問い合わせフォーム
            </Link>
            {" / "}
            <a
              href={`tel:${siteConfig.phone}`}
              className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
            >
              {siteConfig.phoneDisplay}
            </a>
            <span className="block text-sm text-muted-foreground">
              （固定 {siteConfig.phoneLandlineDisplay}
              は出られない可能性があります）
            </span>
          </p>
        </section>
      </RevealSection>
    </SiteLayout>
  );
}
