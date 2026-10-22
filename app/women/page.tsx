import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "お母さんと女性のこころ｜高崎市・前橋市の訪問看護",
  description:
    "産後のつらさ、子育て中の限界、更年期の落ち込み。高崎市・前橋市の訪問看護ステーションりたのわは、お母さんと女性のこころを家で支えます。産婦人科での診療経験を持つ医師と連携しています。",
};

export default function WomenPage() {
  return (
    <SiteLayout>
      <header className="border-b border-border/60 bg-gradient-to-b from-[color-mix(in_srgb,var(--ritanowa-sage-light)_40%,var(--background))] to-[var(--background)] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-widest text-[var(--ritanowa-sage-deep)]">
            お母さんと女性のこころ
          </p>
          <h1 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl md:leading-tight">
            家族を支えるあなたに、
            <br className="md:hidden" />
            支える人を。
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            りたのわは、高崎市・前橋市で訪問看護を行うステーションです。お子さまだけでなく、お母さんと女性のこころの訪問看護を行っています。
          </p>
        </div>
      </header>

      <RevealSection className="mx-auto max-w-3xl space-y-16 px-4 py-14 text-lg leading-relaxed md:px-8 md:py-20">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            あなたのつらさは、後回しにされがちです
          </h2>
          <p className="text-muted-foreground">
            子どもの体調、夫の仕事、親の介護。家族のことは全部把握しているのに、自分の眠れない夜のことは誰にも話していない——そういうお母さんに、私たちは訪問先でたくさん出会ってきました。
          </p>
          <p className="text-muted-foreground">
            「病院に行くほどではない気がする」「子どもを置いて通院できない」「誰に話せばいいのか分からない」。理由はさまざまですが、結果は同じで、家族の真ん中にいる人がいちばん支援から遠くなります。訪問看護なら、あなたが家から出られなくても、支援のほうが家に来ます。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            こんな時期の、こんなつらさに
          </h2>
          <div className="space-y-4">
            {[
              {
                t: "産前・産後",
                b: "眠れない。涙が止まらない。赤ちゃんをかわいいと思えない自分を責めてしまう。産後のこころの不調は、お母さんの約10人に1人が経験するといわれる、誰にでも起こりうるものです。授乳や夜泣きで通院が難しい時期こそ、家で話せる相手が力になります。",
              },
              {
                t: "子育ての限界",
                b: "子どもに手が上がりそうになる。朝起き上がれない。発達の特性がある子や不登校の子を支え続けて、自分のほうが折れそうになっている——お子さまの訪問看護に伺う中で、いちばん多く出会うつらさです。お母さんご自身の訪問看護として、あなたの回復を支えます。",
              },
              {
                t: "更年期前後",
                b: "気分の波、眠れない夜、わけもなく涙が出る。体の変化とこころの変化が重なる時期は、「怠け」でも「性格」でもなく、ケアの対象です。婦人科と精神科のあいだで行き場がなかった方も、ご相談ください。",
              },
            ].map((item) => (
              <div
                key={item.t}
                className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[var(--ritanowa-sage-deep)]">
                  {item.t}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {item.b}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4 rounded-3xl bg-[color-mix(in_srgb,var(--ritanowa-sand)_40%,var(--background))] p-7 md:p-9">
          <h2 className="text-2xl font-bold tracking-tight">
            産婦人科の現場を知る医師と、一緒に支えます
          </h2>
          <p className="text-muted-foreground">
            りたのわの代表は、産婦人科で多くのお産と産後に向き合ってきた医師です。妊娠・出産・産後の体に何が起きるか、その時期のこころがどれほど揺れるかを、診療の現場で見てきました。
          </p>
          <p className="text-muted-foreground">
            訪問するのは経験ある看護師ですが、その後ろにこの視点があります。「気のせい」「みんな通る道」で済まされてきたつらさを、医療としてきちんと受け止めます。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            お子さまと、お母さんと。親子で支えられます
          </h2>
          <p className="text-muted-foreground">
            りたのわは子どものこころの訪問看護に力を入れているステーションです。だからこそ、お子さまの訪問で家に伺う中で、お母さんの限界に最初に気づける場所にいます。
          </p>
          <p className="text-muted-foreground">
            お子さまとお母さん、それぞれの訪問看護として一緒に支えることができます。「子どものことで相談していたけれど、実は自分も」——その一言から始まったご家庭が、実際にあります。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">利用の流れと費用</h2>
          <p className="text-muted-foreground">
            訪問看護は医療サービスで、主治医の指示書に基づいて始まります。健康保険が使え、自立支援医療の対象になれば自己負担は原則1割です。「かかりつけがない」「まず話だけ聞いてほしい」という段階からで大丈夫です。進め方は、連携クリニックを含めてご相談に乗れます。
          </p>
          <p className="text-muted-foreground">
            くわしくは<Link href="/flow" className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline">利用の流れ</Link>をご覧ください。
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[var(--ritanowa-terracotta)]/40 bg-card p-7 text-center shadow-sm md:p-9">
          <h2 className="text-2xl font-bold tracking-tight">
            まず、あなたの話からで大丈夫です
          </h2>
          <p className="mx-auto max-w-xl text-base text-muted-foreground">
            誰かに弱音を吐くのは久しぶりかもしれません。うまくまとまっていなくて構いません。眠れていますか——そんな話から始めましょう。
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "default" }), "inline-flex rounded-3xl px-6 py-6")}
            >
              公式LINEで相談する
            </a>
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "secondary" }), "inline-flex rounded-3xl px-6 py-6")}
            >
              お問い合わせフォーム
            </Link>
          </div>
        </section>
      </RevealSection>
    </SiteLayout>
  );
}
