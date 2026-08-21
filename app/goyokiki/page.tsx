import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { GoyokikiArea } from "@/components/sections/GoyokikiArea";
import { ScrollToHash } from "@/components/ScrollToHash";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "りたのわ御用聞き（暮らしのお手伝い・20分1,000円）",
  description:
    "高崎・前橋の「ちょっと困った」に、ご近所のりたのわサポーターが伺います。20分1,000円・明朗会計。医師が代表の会社が運営。離れて暮らすご家族からのご依頼も。",
};

const GREEN = "#2f5d46";

const CATEGORIES = [
  ["そうじ・片付け", [
    ["お部屋の掃除機がけ", "20分 1,000円"],
    ["窓ふき・網戸のそうじ", "40分 2,000円"],
    ["ゴミ出し・分別のお手伝い", "20分 1,000円"],
  ]],
  ["お買い物", [
    ["食品・日用品のお買い物ごいっしょ", "40分 2,000円"],
    ["お買い物の代行", "40分 2,000円"],
    ["ネット注文のお手伝い", "20分 1,000円"],
  ]],
  ["スマホ・家電", [
    ["LINEの使い方・写真の送り方", "20分 1,000円"],
    ["テレビ・リモコン・家電の設定", "20分 1,000円"],
    ["スマホの写真の整理", "40分 2,000円"],
  ]],
  ["付き添い・同行", [
    ["通院の付き添い（徒歩・タクシー同乗）", "60分 3,000円"],
    ["お散歩・お墓参りのお供", "40分 2,000円"],
    ["銀行・役所への同行", "40分 2,000円"],
  ]],
  ["庭・ちょっとした力仕事", [
    ["電球・電池の交換", "20分 1,000円"],
    ["水やり・草むしり", "20分 1,000円"],
    ["植木鉢や重い物の移動", "20分 1,000円"],
  ]],
  ["書類・手紙", [
    ["届いた書類をいっしょに読む", "20分 1,000円"],
    ["手紙・年賀状の代筆", "40分 2,000円"],
    ["郵便局へのおつかい", "20分 1,000円"],
  ]],
  ["話し相手・見守り", [
    ["お茶のみ話し相手", "40分 2,000円"],
    ["元気かな？ののぞき訪問", "20分 1,000円"],
    ["将棋・編み物など趣味のお相手", "40分 2,000円"],
  ]],
  ["季節の御用・入院中", [
    ["衣替えのお手伝い", "40分 2,000円"],
    ["入院中のご自宅の水やり・郵便確認", "20分 1,000円"],
    ["お墓参りの代行", "40分 2,000円"],
  ]],
] as const;

export default function GoyokikiPage() {
  return (
    <SiteLayout>
      <ScrollToHash />
      <SubpageHeader
        title="りたのわ御用聞き"
        description="ちょっと困ったら、ちょっとりたのわ。シニアの暮らしの「ちょっと」に、ご近所のりたのわサポーターが伺います。"
      />
      <RevealSection className="mx-auto max-w-3xl space-y-10 px-4 py-12 text-lg leading-relaxed md:px-8 md:py-16">
        {/* 電話番号ヒーロー */}
        <section className="relative space-y-4 overflow-hidden rounded-3xl border-2 border-[#2f5d46]/40 bg-card p-8 text-center shadow-sm">
          <p
            aria-hidden
            className="pointer-events-none absolute right-4 top-4 hidden select-none text-lg font-semibold tracking-[0.3em] text-[#2f5d46]/30 md:block"
            style={{ writingMode: "vertical-rl" }}
          >
            御用聞き、はじめました。
          </p>
          <p className="text-sm tracking-widest text-muted-foreground">
            ご予約・ご相談（{siteConfig.officeHoursLine}）
          </p>
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto block w-fit rounded-3xl bg-[var(--ritanowa-blue)] px-10 py-5 text-2xl font-bold text-white shadow-md transition hover:brightness-110 md:text-3xl"
          >
            公式LINEで「御用」を送る
          </a>
          <p className="text-base text-muted-foreground">
            お電話をご希望の方は、ページ下部の会社情報にある番号へどうぞ。
          </p>
          <p className="text-2xl font-bold">20分 1,000円（出張費なし・明朗会計）</p>
        </section>

        {/* 3つの約束 */}
        <section className="grid gap-4 md:grid-cols-3">
          {[
            ["01 ご近所", "りたのわ（浜尻町）から、だいたい3キロのご近所へ。顔の見える距離だから、すぐ伺えます。"],
            ["02 なんでも", "まず聞きます。私たちにできない御用は、できる人・できる窓口をいっしょに探します。"],
            ["03 医療につながる", "運営は医師が代表の会社。「少しお元気がないな」に気づいたら、看護師・医師につなげます。"],
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

        {/* 利用例×料金 */}
        <section id="menu" className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">御用の例と料金</h2>
          <p className="text-base text-muted-foreground">
            すべて20分1,000円のつみ重ねです（40分なら2,000円）。ここにない「ちょっと」も、まず聞かせてください。
          </p>
          <div className="space-y-3">
            {CATEGORIES.map(([cat, items]) => (
              <details
                key={cat}
                className="group rounded-2xl border border-border/80 bg-background/60 px-5 py-4"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold">
                  <span>{cat}</span>
                  <span
                    aria-hidden
                    className="text-sm transition-transform group-open:rotate-180"
                    style={{ color: GREEN }}
                  >
                    ▼
                  </span>
                </summary>
                <ul className="mt-3 space-y-2 border-t border-border/60 pt-3">
                  {items.map(([name, price]) => (
                    <li
                      key={name}
                      className="flex items-baseline justify-between gap-4 text-base"
                    >
                      <span className="text-muted-foreground">{name}</span>
                      <span className="shrink-0 font-bold" style={{ color: GREEN }}>
                        {price}
                      </span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            ※料金は一例です。延長は現地でご相談してから。入会金・出張費はかかりません。
          </p>
        </section>

        {/* 使い方 */}
        <section id="flow" className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">使い方は3つだけ</h2>
          <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
            <li>お電話かLINEで「御用」を教えてください</li>
            <li>日時を決めます</li>
            <li>ご近所のりたのわサポーターが伺います</li>
          </ol>
          <p className="rounded-2xl px-4 py-3 text-base font-semibold" style={{ background: "#eef4f0", color: GREEN }}>
            はじめては「お試し20分・1,000円」からどうぞ。相性を見てから続けるか決めてください。
          </p>
          <p className="text-base text-muted-foreground">
            お支払いは当日の現金のほか、離れて暮らすご家族からのお振込などもご相談いただけます。
          </p>
        </section>

        {/* 遠方のご家族へ（本命） */}
        <section id="family" className="space-y-4 rounded-3xl border-2 border-[var(--ritanowa-blue)] bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">離れて暮らすご家族へ</h2>
          <p className="text-muted-foreground">
            「実家の親のことが気になるけれど、なかなか帰れない」。そんなご家族に代わって、高崎・前橋のりたのわサポーターがご実家に伺います。電球ひとつの御用でも、様子を見てきてほしいという御用でも。
          </p>
          <p className="text-muted-foreground">
            ご依頼はLINEで完結します。訪問のあとは、その日の様子を写真つきでご報告します。
          </p>
          <div className="rounded-2xl border border-border/70 bg-background/60 p-5 text-left">
            <p className="text-xs font-semibold tracking-widest text-muted-foreground">
              ご報告のイメージ（LINEでお送りします）
            </p>
            <div className="mt-3 space-y-2">
              <p className="w-fit max-w-full rounded-2xl rounded-tl-sm bg-card px-4 py-2.5 text-sm leading-relaxed shadow-sm">
                本日15時、お買い物にごいっしょしました。スーパーまで往復ゆっくり歩けています。「膝の調子がいい」と笑っていらっしゃいました🍀
              </p>
              <p className="w-fit max-w-full rounded-2xl rounded-tl-sm bg-card px-4 py-2.5 text-sm leading-relaxed shadow-sm">
                📷（お母さまの了解をいただいて、今日の様子のお写真を添えます）
              </p>
              <p className="w-fit max-w-full rounded-2xl rounded-tl-sm bg-card px-4 py-2.5 text-sm leading-relaxed shadow-sm">
                冷蔵庫の作り置きが少なめでした。次回、一緒に買い足しましょうか？
              </p>
            </div>
          </div>
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "default" }),
              "inline-flex w-fit rounded-3xl px-6 py-6"
            )}
          >
            LINEで相談する
          </a>
        </section>

        {/* 安心の仕組み */}
        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">安心の仕組み</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li>
              運営は、医師が代表をつとめる株式会社かのう商会（訪問看護ステーションりたのわ）です。
            </li>
            <li>りたのわサポーターは、りたのわが面談してお願いしている、地域の顔の見える方たちです。</li>
            <li>万一の物損などに備えて、損害保険に加入しています。</li>
            <li>
              そして、ここがりたのわの御用聞きです——訪問のなかで「あれ、少しお元気がないな」という変化に気づいたら、ご本人・ご家族の同意のうえで、看護師や医師におつなぎできます。
            </li>
          </ul>
        </section>

        {/* りたのわサポーター */}
        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">りたのわサポーターのこと</h2>
          <p className="text-muted-foreground">
            りたのわサポーターは、特別な資格を持ったプロではありません。近所の世話焼きな人、子育てがひと段落した人、まだまだ元気なシニア。「実家の親戚」のような人たちです。このページで、少しずつお顔を紹介していきます。
          </p>
          <p className="text-muted-foreground">
            言い出しっぺは代表（医師）です。訪問看護で毎日ご家庭に伺うなかで、制度では拾えない「ちょっと困った」がどの家にもあることを知りました。そして、看護だけではなく、大切な家族のように関わりたいという思いが、ずっとあります。
          </p>
          <p className="text-muted-foreground">
            りたのわは「利他の輪」です。ご近所の困りごとを手伝い合ううちに、世代を越えたつながりが生まれて、地域に輪ができていく。その輪は、ここで働く看護師やスタッフの幸福にもつながっていく。人と人がつながる社会をつくること——それが、こころの問題だけでなく、これからのいろいろな社会課題を解くヒントになると、本気で考えています。御用聞きは、その入り口です。
          </p>
        </section>


        {/* ケアマネ・支援者へ */}
        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">ケアマネジャー・支援者のみなさまへ</h2>
          <p className="text-muted-foreground">
            「制度では組み込めないけれど、誰かがやらないと困る」——そんなご依頼の投げ先としてお使いください。保険外の自費サービスなので、ケアプランの外側の困りごとをそのままお受けできます。まずはお電話で構いません。
          </p>
        </section>

        {/* 募集 */}
        <section id="recruit" className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">りたのわサポーター、募集しています</h2>
          <p className="text-muted-foreground">
            ご近所の「ちょっと」をお手伝いする仲間を探しています。決まったシフトはなく、週1件から。資格は要りません。
            世話焼きな方、子育てがひと段落した方、大歓迎です。
          </p>
          <Link
            href="/goyokiki/recruit"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "inline-flex w-fit rounded-3xl px-6 py-6"
            )}
          >
            サポーター募集のくわしいページへ
          </Link>
        </section>

        {/* やらないこと・FAQ */}
        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">正直に、やらないこと</h2>
          <ul className="list-inside list-disc space-y-2 text-muted-foreground">
            <li>医療行為（それは訪問看護・医療の仕事として、きちんとした形でお受けします）</li>
            <li>入浴やお手洗いの介助などの身体介護</li>
            <li>屋根の上など、危険をともなう作業</li>
            <li>現金・通帳・貴重品をお預かりすること</li>
          </ul>
          <p className="text-base text-muted-foreground">
            できない御用も、できる人・できる窓口をいっしょに探します。「りたのわに聞けばどこかにつながる」を目指しています。
          </p>
        </section>

        <GoyokikiArea />

        <section className="text-center">
          <Link
            href="/"
            className="text-[var(--ritanowa-blue)] underline-offset-4 hover:underline"
          >
            訪問看護ステーションりたのわのトップへ
          </Link>
        </section>
      </RevealSection>
    </SiteLayout>
  );
}
