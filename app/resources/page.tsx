import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "お役立ち情報（群馬・高崎の相談窓口と制度）",
  description:
    "群馬県・高崎市で、お子さまの発達・不登校・こころの不調に悩むご家族のための相談窓口と制度のまとめ。自立支援医療・精神科訪問看護の使い方も解説します。",
};

const TAKASAKI = [
  {
    name: "高崎市 こども発達支援課",
    tel: "027-345-5191",
    body: "ことばの遅れ・発達の心配など、お子さまの発達に関する高崎市の相談窓口。臨床心理士・作業療法士・言語聴覚士などの専門職がいます。",
    url: "https://www.city.takasaki.gunma.jp/page/74048.html",
  },
  {
    name: "高崎市 障害福祉課",
    tel: "027-321-1358",
    body: "障害福祉サービス・手帳・受給者証など、制度の入り口。平日8:30〜17:15。",
    url: "https://www.city.takasaki.gunma.jp/page/4416.html",
  },
  {
    name: "ばる〜ん高崎（高崎市障害者支援SOSセンター）",
    tel: "",
    body: "「どこに相談したらいいか分からない」をまるごと受け止めてくれる総合窓口。高崎市総合保健センター2階。",
    url: "https://www.balloon-takasaki.jp/",
  },
] as const;

const GUNMA = [
  {
    name: "群馬県発達障害者支援センター",
    tel: "027-254-5380",
    body: "発達障害のあるご本人・ご家族の、日常生活のご相談。医療・福祉・教育・労働の関係機関も紹介してくれます（前橋市）。",
    url: "https://www.pref.gunma.jp/page/4185.html",
  },
  {
    name: "群馬県こころの健康センター",
    tel: "027-263-1166",
    body: "不登校・ひきこもり・こころの悩みの相談窓口（前橋市）。ご家族からの相談もできます。",
    url: "https://www.pref.gunma.jp/page/19861.html",
  },
] as const;

const SYSTEMS = [
  {
    name: "自立支援医療（精神通院医療）",
    body: "精神科の通院・訪問看護の自己負担が原則1割になり、所得に応じた月の上限額も設定される制度です。申請は高崎市の障害福祉課へ。当ステーションのご利用でも使えます。",
  },
  {
    name: "訪問看護指示書",
    body: "訪問看護は主治医の「指示書」があって始まります。「主治医の予約が先で始められない」場合は、連携クリニックでの相談もできますので、まずはお問い合わせください。",
  },
  {
    name: "精神障害者保健福祉手帳",
    body: "税の軽減や各種割引などが受けられる手帳です。取得するかどうかを含めて、迷ったら窓口や私たちにご相談ください。",
  },
  {
    name: "相談支援事業所",
    body: "障害福祉サービスを使うときの「計画」を一緒に作ってくれる、ご家族の心強い伴走者です。地域の事業所をご紹介できます。",
  },
] as const;

export default function ResourcesPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="お役立ち情報"
        description="群馬・高崎で、お子さまの発達・不登校・こころの不調に悩むご家族のための相談窓口と制度をまとめました。※2026年8月時点の情報です。最新の受付時間などは各機関にご確認ください。"
      />

      <RevealSection className="mx-auto max-w-3xl space-y-12 px-4 py-12 text-lg leading-relaxed md:px-8 md:py-16">
        <nav aria-label="ページ内メニュー" className="flex flex-wrap gap-2">
          {[
            ["#madoguchi-takasaki", "高崎市の窓口"],
            ["#madoguchi-gunma", "群馬県の窓口"],
            ["#seido", "制度"],
            ["#kinkyu", "緊急のとき"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="rounded-full border border-border bg-card px-4 py-2 text-base font-medium hover:bg-secondary"
            >
              {label}
            </a>
          ))}
        </nav>

        <section className="space-y-3 rounded-3xl border border-[var(--ritanowa-terracotta)]/40 bg-card p-6 shadow-sm md:p-8">
          <h2 className="text-xl font-bold">どこに相談したらいいか迷ったら</h2>
          <p className="text-base text-muted-foreground">
            「うちの場合はどこ？」という段階で大丈夫です。{siteConfig.nameShort}
            が窓口を一つにして、必要な場所へおつなぎします。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "default" }), "inline-flex rounded-3xl px-6 py-5")}
            >
              公式LINEで相談する
            </a>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "secondary" }), "inline-flex rounded-3xl px-6 py-5")}
            >
              お問い合わせフォーム
            </Link>
          </div>
        </section>

        <section id="madoguchi-takasaki" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold">高崎市の相談窓口</h2>
          <div className="space-y-4">
            {TAKASAKI.map((r) => (
              <div key={r.name} className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold">{r.name}</h3>
                {r.tel ? (
                  <p className="mt-1 text-base font-semibold text-[var(--ritanowa-terracotta)]">
                    TEL: {r.tel}
                  </p>
                ) : null}
                <p className="mt-1 text-base text-muted-foreground">{r.body}</p>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-muted-foreground underline underline-offset-4"
                >
                  公式ページを見る
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="madoguchi-gunma" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold">群馬県の相談窓口</h2>
          <div className="space-y-4">
            {GUNMA.map((r) => (
              <div key={r.name} className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold">{r.name}</h3>
                <p className="mt-1 text-base font-semibold text-[var(--ritanowa-terracotta)]">
                  TEL: {r.tel}
                </p>
                <p className="mt-1 text-base text-muted-foreground">{r.body}</p>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm text-muted-foreground underline underline-offset-4"
                >
                  公式ページを見る
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="seido" className="scroll-mt-24 space-y-4">
          <h2 className="text-2xl font-bold">知っておきたい制度</h2>
          <div className="space-y-4">
            {SYSTEMS.map((s) => (
              <div key={s.name} className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold">{s.name}</h3>
                <p className="mt-1 text-base text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            制度のくわしい使い方は<Link href="/blog" className="underline underline-offset-4">ブログ</Link>
            でも順次解説しています。
          </p>
        </section>

        <section id="kinkyu" className="scroll-mt-24 space-y-3 rounded-3xl bg-[color-mix(in_srgb,var(--ritanowa-sand)_45%,var(--background))] p-6 md:p-8">
          <h2 className="text-xl font-bold">緊急のとき</h2>
          <p className="text-base text-muted-foreground">
            命の危険があるときは、ためらわず119番へ。つらい気持ちの相談は、こころの健康相談統一ダイヤル（0570-064-556）が利用できます。
          </p>
        </section>
      </RevealSection>
    </SiteLayout>
  );
}
