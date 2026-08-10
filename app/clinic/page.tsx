import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "連携クリニック（オンライン精神科診療）",
  description:
    "りたのわの連携クリニック（ロコクリニック）のご案内。訪問看護指示書のご相談、発達・不登校のオンライン診察に対応します。",
};

const SERVICES = [
  {
    title: "訪問看護指示書のご相談",
    body: "「主治医の予約が数ヶ月先で、訪問看護を始められない」——そんなときの相談先です。支援者の方からのご相談も受け付けます。",
  },
  {
    title: "発達・不登校のご相談",
    body: "お子さまの発達特性や不登校について、生活の文脈をふまえて医師が相談に応じます。",
  },
  {
    title: "自宅からのオンライン診察",
    body: "外出がむずかしい方も、ご自宅から受診できます。通院のハードルそのものを下げます。",
  },
] as const;

const FLOW = [
  "公式LINEまたはお問い合わせからご相談",
  "オンラインで診察（ご自宅からでOK）",
  "必要に応じて訪問看護指示書を発行",
  "りたのわの訪問看護がスタート",
] as const;

export default function ClinicPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="連携クリニック"
        description="オンライン精神科診療（ロコクリニック）——りたのわと連携し、受診と訪問看護をなめらかにつなぎます。2026年9月より順次対応予定です。"
      />

      <RevealSection className="mx-auto max-w-3xl space-y-12 px-4 py-12 text-lg leading-relaxed md:px-8 md:py-16">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">できること</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="space-y-2 rounded-3xl border border-border/80 bg-card p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">ご利用の流れ</h2>
          <ol className="space-y-3">
            {FLOW.map((step, i) => (
              <li
                key={step}
                className="flex items-start gap-4 rounded-2xl border border-border/80 bg-card p-5 shadow-sm"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--ritanowa-terracotta)] text-sm font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-base">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">ご相談はこちら</h2>
          <p className="text-muted-foreground">
            受診がよいのか、訪問看護がよいのか分からない段階でも大丈夫です。窓口はりたのわが一つにしてご案内します。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "inline-flex rounded-3xl px-6 py-6"
              )}
            >
              公式LINEで相談する
            </a>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "inline-flex rounded-3xl px-6 py-6"
              )}
            >
              お問い合わせフォーム
            </Link>
          </div>
        </section>

        <section className="space-y-2 border-t border-border/60 pt-6 text-sm text-muted-foreground">
          <h2 className="text-base font-semibold text-foreground">クリニック概要</h2>
          <p>名称：ロコクリニック（オンライン精神科診療）</p>
          <p>管理者（医師）：狩野 遊太</p>
          <p>
            ※診療体制・対応時間は準備中のため、最新の状況はお問い合わせください。緊急のご相談には対応できません。緊急時は最寄りの医療機関または救急（119）へご連絡ください。
          </p>
        </section>
      </RevealSection>
    </SiteLayout>
  );
}
