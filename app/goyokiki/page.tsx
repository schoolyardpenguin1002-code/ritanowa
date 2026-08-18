import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "りたのわ御用聞き（自費・シニアの暮らしのお手伝い）",
  description:
    "高崎・前橋のシニアの「ちょっと困った」に、ご近所の御用聞きさんが伺います。20分1,000円・明朗会計。医師が代表の会社が運営。離れて暮らすご家族からのご依頼も。",
};

const MENU = [
  "電球・電池、かえます",
  "お買い物、ごいっしょします（代行もできます)",
  "ゴミ出し・ちょっとした片付け、やります",
  "お話し相手・見守りに、うかがいます",
  "スマホ・テレビの「わからない」、なおします",
  "通院に、付き添います（院内ではお待ちしています）",
  "庭の水やり・草むしり、20分でできる分だけ",
  "手紙や書類、いっしょに読みます・書きます",
  "衣替え・年賀状・お墓参りなど、季節の御用も",
  "そのほかの「ちょっと」も、まず聞かせてください",
] as const;

export default function GoyokikiPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="りたのわ御用聞き"
        description="ちょっと困ったら、ちょっとりたのわ。シニアの暮らしの「ちょっと」に、ご近所の御用聞きさんが伺います。"
      />
      <RevealSection className="mx-auto max-w-3xl space-y-10 px-4 py-12 text-lg leading-relaxed md:px-8 md:py-16">
        {/* 電話番号ヒーロー */}
        <section className="space-y-4 rounded-3xl border-2 border-[var(--ritanowa-gold)] bg-card p-8 text-center shadow-sm">
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

        {/* できること */}
        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">できること</h2>
          <ul className="space-y-2 text-muted-foreground">
            {MENU.map((m) => (
              <li key={m} className="flex gap-2">
                <span aria-hidden>・</span>
                <span>{m}</span>
              </li>
            ))}
          </ul>
          <p className="text-base text-muted-foreground">
            たとえば、40分のお買い物ごいっしょで2,000円です。時間はご一緒に相談しながら決めます。
          </p>
        </section>

        {/* 使い方 */}
        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">使い方は3つだけ</h2>
          <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
            <li>お電話かLINEで「御用」を教えてください</li>
            <li>日時を決めます</li>
            <li>ご近所の御用聞きさんが伺います</li>
          </ol>
          <p className="text-base text-muted-foreground">
            お支払いは当日の現金のほか、離れて暮らすご家族からのお振込などもご相談いただけます。
          </p>
        </section>

        {/* 遠方のご家族へ（本命） */}
        <section className="space-y-4 rounded-3xl border-2 border-[var(--ritanowa-blue)] bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">離れて暮らすご家族へ</h2>
          <p className="text-muted-foreground">
            「実家の親のことが気になるけれど、なかなか帰れない」。そんなご家族に代わって、高崎・前橋の御用聞きさんがご実家に伺います。電球ひとつの御用でも、様子を見てきてほしいという御用でも。
          </p>
          <p className="text-muted-foreground">
            ご依頼はLINEで完結します。訪問のあとは、その日の様子を写真つきでご報告します。
          </p>
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
            <li>御用聞きさんは、りたのわが面談してお願いしている、地域の顔の見える方たちです。</li>
            <li>万一の物損などに備えて、損害保険に加入しています。</li>
            <li>
              そして、ここがりたのわの御用聞きです——訪問のなかで「あれ、少しお元気がないな」という変化に気づいたら、ご本人・ご家族の同意のうえで、看護師や医師におつなぎできます。
            </li>
          </ul>
        </section>

        {/* 御用聞きさん */}
        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">御用聞きさんのこと</h2>
          <p className="text-muted-foreground">
            御用聞きさんは、特別な資格を持ったプロではありません。近所の世話焼きな人、子育てがひと段落した人、まだまだ元気なシニア。「実家の親戚」のような人たちです。このページで、少しずつお顔を紹介していきます。
          </p>
          <p className="text-muted-foreground">
            言い出しっぺは代表（医師）です。訪問看護で毎日ご家庭に伺うなかで、制度では拾えない「ちょっと困った」がどの家にもあることを知りました。そして、看護だけではなく、大切な家族のように関わりたいという思いが、ずっとあります。
          </p>
          <p className="text-muted-foreground">
            りたのわは「利他の輪」です。ご近所の困りごとを手伝い合ううちに、世代を越えたつながりが生まれて、地域に輪ができていく。その輪は、ここで働く看護師やスタッフの幸福にもつながっていく。人と人がつながる社会をつくること——それが、こころの問題だけでなく、これからのいろいろな社会課題を解くヒントになると、本気で考えています。御用聞きは、その入り口です。
          </p>
        </section>

        {/* RITA */}
        <section className="space-y-3 rounded-3xl border border-dashed border-[var(--ritanowa-gold)] bg-card p-8 shadow-sm">
          <h2 className="text-xl font-bold">じゅんび中：ありがとうの通貨「RITA」</h2>
          <p className="text-base text-muted-foreground">
            だれかをお手伝いすると貯まって、こんど自分が困ったときに使える。そんな「ありがとうの通貨」を準備しています。りたのわは「利他の輪」。助け合いが地域をぐるぐる回る仕組みを、これから育てていきます。
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
        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">御用聞きさん、募集しています</h2>
          <p className="text-muted-foreground">
            ご近所のちょっとしたお手伝いで、20分650円から。決まったシフトはありません。LINEに届く御用のなかから、できるものに手を挙げるだけ。すきま時間で、地域の役に立てる仕事です。
          </p>
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "inline-flex w-fit rounded-3xl px-6 py-6"
            )}
          >
            LINEで話を聞いてみる
          </a>
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

        <section className="text-center">
          <p className="text-muted-foreground">
            対応エリア：訪問看護ステーションりたのわ（高崎市浜尻町）から、おおよそ半径5キロのご近所が基本です（そのほかの地域はご相談ください）
          </p>
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
