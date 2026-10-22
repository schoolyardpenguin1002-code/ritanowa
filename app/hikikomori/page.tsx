import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ひきこもりのご本人とご家族へ｜高崎市・前橋市の訪問看護による支援",
  description:
    "外に出られなくても、支援は家に来られます。高崎市・前橋市の訪問看護ステーションりたのわは、ひきこもりのご本人とご家族への訪問支援を行っています。本人がまだ会いたがらない段階からのご相談も受けています。",
};

export default function HikikomoriPage() {
  return (
    <SiteLayout>
      <header className="border-b border-border/60 bg-gradient-to-b from-[color-mix(in_srgb,var(--ritanowa-sage-light)_40%,var(--background))] to-[var(--background)] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-widest text-[var(--ritanowa-sage-deep)]">
            ひきこもりのご本人とご家族へ
          </p>
          <h1 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl md:leading-tight">
            外に出られなくても、
            <br className="md:hidden" />
            支援は家に来られます。
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            りたのわは、高崎市・前橋市で訪問看護を行うステーションです。相談窓口に行けない、病院に行けない——その段階のご本人とご家族にこそ、私たちは会いに行きます。
          </p>
        </div>
      </header>

      <RevealSection className="mx-auto max-w-3xl space-y-16 px-4 py-14 text-lg leading-relaxed md:px-8 md:py-20">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            「本人を連れてきてください」と言われ続けていませんか
          </h2>
          <p className="text-muted-foreground">
            相談窓口はある。病院もある。でもそのほとんどが「本人が来ること」を前提に作られています。本人は部屋から出られない。家族が代わりに相談に行くと「ご本人と話してみないと」と返される。この堂々めぐりの中で、何年も時間だけが過ぎていく——ひきこもりの支援で、いちばん多いつまずきです。
          </p>
          <p className="text-muted-foreground">
            訪問看護は、この前提が逆向きです。本人が動けないなら、こちらが動く。玄関が開かないなら、開くまでの道のりから一緒に考える。「来られたら支援します」ではなく「行くところから始めます」が仕事です。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            訪問看護が、ひきこもりにできること
          </h2>
          <p className="text-muted-foreground">
            ひきこもりの背景には、こころの不調や発達の特性、過去の傷つきが隠れていることが少なくありません。看護師が定期的にご自宅に伺い、医療の目で見守りながら、こんな伴走をします。
          </p>
          <div className="space-y-4">
            {[
              {
                t: "会えないところから始める",
                b: "初回から本人に会えなくて構いません。まずはご家族とだけ話す、ドア越しに挨拶だけ、手紙を置いてくる——その段階を焦らず積み重ねます。「家に他人が来ること」に慣れるのが最初の一歩です。",
              },
              {
                t: "生活リズムの立て直し",
                b: "昼夜逆転、食事、入浴。責めずに、本人が「これならできる」と思える小ささまで分解して、一つずつ戻していきます。",
              },
              {
                t: "ご家族の消耗を止める",
                b: "声のかけ方、お金の渡し方、どこまで世話をするか。正解のない問いをひとりで抱えているご家族にとって、毎週の訪問が作戦会議と息抜きの時間になります。",
              },
              {
                t: "医療と社会への橋渡し",
                b: "受診が必要そうなとき、就労や居場所につなぎたいとき。家での様子を知っている看護師が間に入ることで、本人が一から説明し直さなくて済みます。",
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
            18歳を過ぎても、支援は途切れません
          </h2>
          <p className="text-muted-foreground">
            不登校からそのまま家にいる時間が長くなった。高校を離れてから昼夜が逆転した。二十歳を過ぎて、相談できる場所が一気に減った——不登校とひきこもりは、地続きです。
          </p>
          <p className="text-muted-foreground">
            りたのわは子どもの訪問看護に力を入れていますが、大人の方への訪問も行っています。「子どもの支援は18歳まで」という区切りで支援が途切れてしまった方も、どうぞご相談ください。長い目で見れば、家族だけで抱えて10年経つより、今つながるほうがずっと早道です。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">利用の流れと費用</h2>
          <p className="text-muted-foreground">
            訪問看護は医療サービスで、主治医の指示書に基づいて始まります。健康保険が使え、自立支援医療の対象になれば自己負担は原則1割です。「何年も病院にかかっていない」「本人が受診を嫌がる」という場合の進め方も、連携クリニックを含めてご相談に乗れます。
          </p>
          <p className="text-muted-foreground">
            くわしくは<Link href="/flow" className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline">利用の流れ</Link>をご覧ください。
          </p>
        </section>

        <section className="space-y-3 rounded-3xl border border-border/80 bg-card p-7 shadow-sm md:p-9">
          <h2 className="text-xl font-bold tracking-tight">
            支援者・関係機関の皆様へ
          </h2>
          <p className="text-base text-muted-foreground">
            「本人に会えないまま何年も経っているケース」「医療につながっていないケース」も、あきらめる前にご相談ください。導入前のケース相談は無料です。
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[var(--ritanowa-terracotta)]/40 bg-card p-7 text-center shadow-sm md:p-9">
          <h2 className="text-2xl font-bold tracking-tight">
            ご家族だけのご相談から、始められます
          </h2>
          <p className="mx-auto max-w-xl text-base text-muted-foreground">
            本人には内緒で、まず話を聞いてほしい——それで大丈夫です。いま家で起きていることを、そのまま話してください。
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
