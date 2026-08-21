import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { GoyokikiArea } from "@/components/sections/GoyokikiArea";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "りたのわサポーター募集（高崎・ご近所のお手伝い）",
  description:
    "ご近所の「ちょっと困った」をお手伝いする、りたのわサポーターを募集しています。シフトなし・週1件から・資格不要。高崎市浜尻町のご近所で、あなたの得意がお仕事になります。",
};

const GREEN = "#2f5d46";

const STEPS = [
  ["1. LINEで連絡", "「サポーターに興味があります」とひとこと送ってください。それだけで大丈夫です。"],
  ["2. お茶のみ面談", "事務所やお近くで、30分ほどおしゃべりします。履歴書は要りません。どんなことが得意か、どのくらい関わりたいか、聞かせてください。"],
  ["3. 初回はいっしょに", "最初の御用は、スタッフがいっしょに伺います。様子がわかれば、次からはおひとりで。"],
  ["4. サポーターデビュー", "LINEグループに届く御用から、できるものに手を挙げるだけ。断っても、なにも気まずくありません。"],
] as const;

const FAQ = [
  [
    "資格や経験は必要ですか？",
    "要りません。電球を替えられる、話を聞ける、買い物に行ける——ふだんの暮らしでやっていることが、そのままお仕事になります。",
  ],
  [
    "どのくらいの頻度で働くのですか？",
    "決まったシフトはありません。週1件でも、月1件でも。届いた御用から、できるときに、できるものだけ手を挙げてください。",
  ],
  [
    "報酬はどうなっていますか？",
    "20分の御用で650円、40分なら1,300円です。週払いで、その週の分をその週のうちにお支払いします。雇用ではなく業務委託という形で、契約書もきちんと交わします。",
  ],
  [
    "物を壊してしまったら？",
    "会社で賠償責任保険に入っており、サポーターさんも補償の対象です。ひとりで抱えず、まず事務所に連絡してください。",
  ],
  [
    "訪問先で体調が悪そうな方がいたら？",
    "それに気づけるのが、りたのわサポーターのいちばん大事な仕事です。運営は医師が代表の会社。看護師・医師にすぐつなぎます。",
  ],
] as const;

export default function GoyokikiRecruitPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="りたのわサポーター募集"
        description="ご近所の「ちょっと困った」をお手伝いする人を、私たちはりたのわサポーターと呼んでいます。"
      />
      <RevealSection className="mx-auto max-w-3xl space-y-10 px-4 py-12 text-lg leading-relaxed md:px-8 md:py-16">
        {/* リード */}
        <section className="space-y-4 rounded-3xl border-2 bg-card p-8 shadow-sm" style={{ borderColor: `${GREEN}66` }}>
          <h2 className="text-2xl font-bold" style={{ color: GREEN }}>
            あなたの「ふつう」が、誰かの助けになります。
          </h2>
          <p className="text-muted-foreground">
            電球を替える。いっしょに買い物へ行く。届いた書類を読む。お茶をのみながら話を聞く。
            ご近所には、それができなくて困っている方がいます。
          </p>
          <p className="text-muted-foreground">
            りたのわサポーターは、近所の世話焼きな人、子育てがひと段落した人、まだまだ元気な人——「実家の親戚」のような人たちの集まりです。
            高崎市浜尻町の訪問看護ステーションりたのわから、だいたい3キロのご近所で活動しています。
          </p>
        </section>

        {/* どんな御用？ */}
        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">どんな御用があるの？</h2>
          <p className="text-muted-foreground">
            お掃除やお買い物、スマホの「わからない」、通院の付き添い、庭の水やり、話し相手。
            どれも20分〜60分ほどの「ちょっと」したお手伝いです。
          </p>
          <Link
            href="/goyokiki#menu"
            className="text-[var(--ritanowa-blue)] underline-offset-4 hover:underline"
          >
            御用の例をみる（りたのわ御用聞きのページへ）
          </Link>
        </section>

        {/* 働き方 */}
        <section className="grid gap-4 md:grid-cols-3">
          {[
            ["シフトなし", "LINEに届く御用から、できるものに手を挙げるだけ。断ってもなにも気まずくありません。"],
            ["週1件から", "すきま時間で大丈夫。件数のノルマはありません。"],
            ["資格いらず", "暮らしの経験がそのまま活きます。最初はスタッフがいっしょに伺います。"],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-3xl border-t-4 bg-card p-6 shadow-sm"
              style={{ borderTopColor: GREEN }}
            >
              <h3 className="text-lg font-bold" style={{ color: GREEN }}>
                {title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </section>

        {/* 報酬 */}
        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">報酬のこと</h2>
          <p className="text-2xl font-bold" style={{ color: GREEN }}>
            20分の御用で、650円。お支払いは週払いです。
          </p>
          <p className="text-muted-foreground">
            御用ごとに計算して、1週間分をその週のうちにお支払いします。月末まで待たせません。
            40分の御用なら1,300円、60分なら1,950円。かんたんな決まりなので、面談のときに紙でもお見せします。
          </p>
          <p className="text-base text-muted-foreground">
            雇用ではなく業務委託という形です。受けるかどうかはいつも自由で、契約書もきちんと交わします。
          </p>
        </section>

        {/* はじめるまで */}
        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">はじめるまでの流れ</h2>
          <ol className="space-y-3">
            {STEPS.map(([title, body]) => (
              <li key={title} className="rounded-2xl bg-background/60 px-5 py-4">
                <p className="font-bold" style={{ color: GREEN }}>
                  {title}
                </p>
                <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* 安心 */}
        <section className="space-y-4 rounded-3xl border-2 border-[var(--ritanowa-blue)] bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">ひとりにしません</h2>
          <p className="text-muted-foreground">
            運営しているのは、医師が代表の会社です。訪問先で困ったこと、迷ったこと、心配なことは、その場でLINEや電話で相談できます。
            賠償責任保険にも会社で入っており、サポーターさんも補償の対象です。
          </p>
        </section>

        {/* FAQ */}
        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">よくある質問</h2>
          <div className="space-y-3">
            {FAQ.map(([q, a]) => (
              <details
                key={q}
                className="group rounded-2xl border border-border/80 bg-background/60 px-5 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-bold md:text-lg">
                  <span>{q}</span>
                  <span
                    aria-hidden
                    className="text-sm transition-transform group-open:rotate-180"
                    style={{ color: GREEN }}
                  >
                    ▼
                  </span>
                </summary>
                <p className="mt-3 border-t border-border/60 pt-3 text-base leading-relaxed text-muted-foreground">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <GoyokikiArea />

        {/* CTA */}
        <section className="space-y-4 rounded-3xl border-2 bg-card p-8 text-center shadow-sm" style={{ borderColor: `${GREEN}66` }}>
          <h2 className="text-2xl font-bold">まずは、お茶をのみに来ませんか。</h2>
          <p className="text-muted-foreground">
            応募、というほど堅いものではありません。「話だけ聞いてみたい」で大丈夫です。
          </p>
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto block w-fit rounded-3xl bg-[var(--ritanowa-blue)] px-10 py-5 text-xl font-bold text-white shadow-md transition hover:brightness-110"
          >
            LINEで「興味あります」と送る
          </a>
          <p className="text-base text-muted-foreground">
            お電話をご希望の方は、ページ下部の会社情報にある番号へどうぞ（{siteConfig.officeHoursLine}）。
          </p>
        </section>

        <section className="text-center">
          <Link
            href="/goyokiki"
            className="text-[var(--ritanowa-blue)] underline-offset-4 hover:underline"
          >
            りたのわ御用聞きのページへもどる
          </Link>
        </section>
      </RevealSection>
    </SiteLayout>
  );
}
