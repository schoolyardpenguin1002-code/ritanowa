import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "私たちについて",
  description: `${siteConfig.name}の理念、名称の由来、精神科特化型訪問看護としての想い。高崎市を拠点に群馬県内で在宅療養を支えます。`,
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="私たちについて"
        description="利他の心が循環するケアを、地域の日常のなかで。"
      />
      <RevealSection className="mx-auto max-w-3xl space-y-12 px-4 py-12 text-lg leading-relaxed md:px-8 md:py-16">
        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">りたのわとは</h2>
          <p className="text-muted-foreground">
            {siteConfig.name}は、群馬県高崎市を拠点に、{" "}
            <strong className="font-semibold text-foreground">精神科領域に強みを持った訪問看護</strong>
            を提供しています。ご本人のペースを大切にし、ご家族・主治医・ケアマネジャーと連携しながら、在宅での療養生活を支えます。
          </p>
          <p className="text-muted-foreground">
            記録や事務に追われすぎないよう ICT を活用し、看護師が{" "}
            <strong className="font-semibold text-foreground">対話と観察に時間をかけられる</strong>{" "}
            運営を目指しています。医師によるバックアップのもと、安心してご相談いただける体制を整えています。
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">名称の由来</h2>
          <p className="text-muted-foreground">
            <strong className="font-semibold text-foreground">「利他」</strong>
            は、他者の幸せを願い、支え合う心です。利用者様・ご家族、地域の医療・介護の仲間たちとのあいだに、小さな優しさと信頼が{" "}
            <strong className="font-semibold text-foreground">「輪」</strong>{" "}
            のように広がっていく——そんなケアを大切にしています。
          </p>
          <p className="text-muted-foreground">
            一方通行のサービスではなく、想いと時間がめぐる関係性のなかで、心が少しずつ整っていく。それが私たちの描く訪問看護です。
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">主な対応エリア</h2>
          <p className="text-muted-foreground">
            {siteConfig.serviceAreaMunicipalities.join("、")}
            などを中心に、お住まいの地域・状況に応じて訪問可能かどうかをご案内します。詳しくは
            <Link
              href="/area"
              className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
            >
              対応地域・アクセス
            </Link>
            をご覧ください。
          </p>
        </section>

        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href="/visit-nursing"
            className={cn(
              buttonVariants({ variant: "default" }),
              "inline-flex justify-center rounded-3xl px-8 py-6 text-lg"
            )}
          >
            訪問看護とは
          </Link>
          <Link
            href="/staff"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "inline-flex justify-center rounded-3xl px-8 py-6 text-lg"
            )}
          >
            スタッフ紹介
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[52px] items-center justify-center text-lg font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
          >
            お問い合わせ
          </Link>
        </div>
      </RevealSection>
    </SiteLayout>
  );
}
