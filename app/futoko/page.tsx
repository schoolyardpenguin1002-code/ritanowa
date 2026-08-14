import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { buttonVariants } from "@/lib/button-variants";
import { getAllBlogPosts } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "不登校のお子さまとご家族へ｜高崎市の訪問看護による支援",
  description:
    "学校に行けない朝を、家で支える。高崎市の訪問看護ステーションりたのわは、不登校のお子さまとご家族への支援に力を入れています。エネルギー回復の考え方、学校との連携、利用の流れをご案内します。",
};

export default function FutokoPage() {
  const futokoPosts = getAllBlogPosts()
    .filter((p) => p.frontmatter.category === "不登校")
    .slice(0, 6);

  return (
    <SiteLayout>
      <header className="border-b border-border/60 bg-gradient-to-b from-[color-mix(in_srgb,var(--ritanowa-sage-light)_40%,var(--background))] to-[var(--background)] px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-widest text-[var(--ritanowa-sage-deep)]">
            不登校のお子さまとご家族へ
          </p>
          <h1 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl md:leading-tight">
            学校に行けない朝を、
            <br className="md:hidden" />
            家で支える。
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            りたのわは、不登校のお子さまとご家族への支援に力を入れている、高崎市の訪問看護ステーションです。学校に行けなくても、支援は家に来られます。
          </p>
        </div>
      </header>

      <RevealSection className="mx-auto max-w-3xl space-y-16 px-4 py-14 text-lg leading-relaxed md:px-8 md:py-20">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            毎朝の玄関で、ひとりで戦っていませんか
          </h2>
          <p className="text-muted-foreground">
            制服には着替えた。でも玄関から動けない。「おなかが痛い」と小さな声。学校からの電話、職場への連絡、周囲の目——不登校でいちばん消耗しているのは、実はご家族かもしれません。
          </p>
          <p className="text-muted-foreground">
            不登校の小中学生は全国で30万人を超えていて、クラスに1人以上いる計算です。決して珍しいことではないのに、支援の多くは「学校に来られたら」「相談室まで来られたら」という前提で作られています。家から出られない時期の親子が、いちばん支援から遠い——この矛盾を埋めるのが、家に伺う私たちの仕事です。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            訪問看護が、不登校にできること
          </h2>
          <p className="text-muted-foreground">
            不登校の背景には、こころの不調や発達の特性、体の病気（起立性調節障害など）が隠れていることがあります。看護師が定期的にご自宅に伺い、医療の目で見守りながら、こんな伴走をします。
          </p>
          <div className="space-y-4">
            {[
              {
                t: "本人の居場所になる",
                b: "最初は雑談やゲームの話からで構いません。「学校の人でも親でもない、安心して話せる相手」が週に一度来ること自体が、回復の土台になります。",
              },
              {
                t: "エネルギーの回復を設計する",
                b: "睡眠・食事・昼夜逆転の立て直しを、責めずに、小さな一歩ずつ。「まず朝カーテンを開ける」から始めます。",
              },
              {
                t: "ご家族の作戦会議の相手になる",
                b: "「朝どう声をかけるか」「ゲームはどこまで」「学校に何と伝えるか」。毎週の訪問が、ご家族が息をつける時間にもなります。",
              },
              {
                t: "医療と学校への橋渡し",
                b: "家での様子を、主治医の診察や学校との話し合いに伝わる形で整理します。体の症状が隠れていそうなときは、受診の組み立てからお手伝いします。",
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
            「まず休ませる」は、甘やかしではありません
          </h2>
          <p className="text-muted-foreground">
            スマホの電池が切れかけのとき、まず充電するはずです。エネルギーが切れた子を無理に走らせ続けるより、安心できる環境でしっかり充電したほうが、結果的に回復は早い——これが、いま多くの支援現場で共有されている考え方です。
          </p>
          <p className="text-muted-foreground">
            大事なのは、休んでいる間の家が「責められない場所」であること。そして、回復の段階に合わせて、次の一歩（別室登校、教育支援センター、フリースクール、再登校）を焦らず選べること。私たちはその見極めを、医療の視点でお手伝いします。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            学校・地域とつながりながら支えます
          </h2>
          <p className="text-muted-foreground">
            不登校の支援は、家庭の中だけでは完結しません。りたのわは、学校の先生方、スクールソーシャルワーカー、教育支援センター、相談支援事業所、行政の窓口と連携しながら動きます。ご家族が窓口ごとに同じ説明を繰り返さなくて済むように、情報の整理役も担います。
          </p>
          <p className="text-muted-foreground">
            夕方から夜（21時まで）、土日も訪問できるので、平日はお仕事のご家族とも、ゆっくり話す時間が持てます。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">利用の流れと費用</h2>
          <p className="text-muted-foreground">
            訪問看護は医療サービスで、主治医の指示書に基づいて始まります。健康保険が使え、自立支援医療の対象になれば自己負担は原則1割です。「かかりつけ医がいない」「主治医の予約が先すぎる」という場合の進め方も、連携クリニックを含めてご相談に乗れます。
          </p>
          <p className="text-muted-foreground">
            くわしくは<Link href="/flow" className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline">利用の流れ</Link>、費用は<Link href="/blog/jiritsu-shien-iryo-guide" className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline">自立支援医療の解説</Link>をどうぞ。
          </p>
        </section>

        <section className="space-y-3 rounded-3xl border border-border/80 bg-card p-7 shadow-sm md:p-9">
          <h2 className="text-xl font-bold tracking-tight">
            支援者・関係機関の皆様へ
          </h2>
          <p className="text-base text-muted-foreground">
            「本人がまだ外部の人に会いたがらない」「医療につながっていない」段階のケースも、あきらめる前にご相談ください。導入前のケース相談は無料です。支援検討時の整理には<Link href="/blog/support-staff-psychiatric-visit-nursing-checklist" className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline">支援者向けチェックリスト</Link>もご活用いただけます。
          </p>
        </section>

        {futokoPosts.length > 0 ? (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              不登校について、もっと読む
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {futokoPosts.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="block h-full rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <span className="text-base font-semibold leading-snug">
                      {p.frontmatter.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-base text-muted-foreground">
              <Link
                href="/blog?category=%E4%B8%8D%E7%99%BB%E6%A0%A1"
                className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
              >
                不登校の記事一覧へ
              </Link>
            </p>
          </section>
        ) : null}

        <section className="space-y-4 rounded-3xl border border-[var(--ritanowa-terracotta)]/40 bg-card p-7 text-center shadow-sm md:p-9">
          <h2 className="text-2xl font-bold tracking-tight">
            「話だけ聞いてほしい」で、大丈夫です
          </h2>
          <p className="mx-auto max-w-xl text-base text-muted-foreground">
            朝のこと、学校とのやりとり、この先のこと。何から話せばいいか分からないままで構いません。ご本人が会いたがらない段階の、ご家族だけのご相談も受けています。
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
