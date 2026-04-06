import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const worrySnapshots = [
  {
    title: "介護や家事に疲れ、夜も眠れず気分が沈みがち",
    body: "体調を崩しやすくなり、受診の回数が増えてきた。",
  },
  {
    title: "意欲や集中が続かず、仕事や学校に行きづらい",
    body: "本人は困っていないように見えても、家族は不安を抱えている。",
  },
  {
    title: "服薬や生活リズムが乱れ、外出や交流が減ってきた",
    body: "物忘れや同じ話の繰り返しなど、変化が気になる。",
  },
  {
    title: "精神科を受診するハードルを感じている",
    body: "症状のはっきりしないモヤモヤを、誰かに話して整理したい。",
  },
] as const;

const serviceItems = [
  "病状の観察と服薬に関する支援",
  "精神・心理状態に配慮したケア",
  "生活リズムや日常生活の工夫のサポート",
  "対人関係や社会生活への復帰に向けた伴走",
  "ご家族への相談・情報提供",
] as const;

export const metadata: Metadata = {
  title: "訪問看護とは（精神科）",
  description: `${siteConfig.nameShort}が提供する精神科訪問看護の概要。在宅療養での看護、保険対応、ご利用までの流れへの導線。高崎市・群馬県内。`,
};

export default function VisitNursingPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="訪問看護とは"
        description="在宅での療養を、看護の専門性で支えるサービスです。精神科領域に強みを持つ当ステーションの考え方をご紹介します。"
      />

      <RevealSection className="mx-auto max-w-3xl space-y-14 px-4 py-12 md:px-8 md:py-16">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            このようなことはありませんか？
          </h2>
          <p className="text-lg text-muted-foreground">
            心や生活の負担は、体の不調として現れたり、ご家族の関係にも影響したりします。ひとりで抱え込まず、専門職に相談できる選択肢があります。
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {worrySnapshots.map((w) => (
              <li
                key={w.title}
                className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm"
              >
                <p className="font-semibold text-foreground">{w.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </li>
            ))}
          </ul>
          <p>
            <Link
              href="/for-whom"
              className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
            >
              こんな方・ご家族へ（詳しく）
            </Link>
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">訪問看護とは</h2>
          <p className="text-lg text-muted-foreground">
            訪問看護は、医師の指示とケアプランに基づき、看護師等が{" "}
            <strong className="font-semibold text-foreground">ご自宅を訪問して看護を提供する</strong>
            制度です。病院に行くことが難しい方も、住み慣れた場所で医療的な支援を受けられます。
          </p>
          <p className="text-lg text-muted-foreground">
            当ステーションはそのなかでも、うつ病・双極性障害・統合失調症など精神疾患の在宅療養、発達や不安に関する支援、ご家族の負担に配慮したケアなど、
            <strong className="font-semibold text-foreground">精神・心理の領域に力を入れて</strong>
            います。
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-border/80 bg-[color-mix(in_srgb,var(--ritanowa-sand)_35%,var(--card))] p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">精神科訪問看護のイメージ</h2>
          <p className="text-lg text-muted-foreground">
            心のエネルギーは、充電と消費のバランスで保たれているとイメージできます。ストレスや症状で「消費」が続くとき、生活のリズムや服薬、人間関係のなかに負担がたまりやすくなります。
          </p>
          <p className="text-lg text-muted-foreground">
            訪問看護師は、{" "}
            <strong className="font-semibold text-foreground">
              その人らしいペースを取り戻すための「充電」と「負担の調整」
            </strong>
            を、対話と観察を通じて一緒に考えるパートナーです。治療方針の決定は主治医に任せ、私たちは在宅での看護と生活の支援に専念します。
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">主なサービス内容</h2>
          <ul className="list-inside list-disc space-y-2 text-lg text-muted-foreground">
            {serviceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="text-muted-foreground">
            医療保険・介護保険など、ご加入の保険に応じた訪問看護を行います。費用のしくみは
            <Link href="/pricing" className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline">
              料金のご案内
            </Link>
            をご覧ください。
          </p>
        </section>

        <div className="flex flex-col gap-4 border-t border-border/60 pt-10 sm:flex-row sm:flex-wrap">
          <Link
            href="/flow"
            className={cn(
              buttonVariants({ variant: "default" }),
              "inline-flex justify-center rounded-3xl px-8 py-6 text-lg"
            )}
          >
            ご利用の流れ
          </Link>
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "inline-flex justify-center rounded-3xl px-8 py-6 text-lg"
            )}
          >
            お問い合わせ
          </Link>
          <Link
            href="/faq"
            className="inline-flex min-h-[52px] items-center justify-center text-lg font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            よくある質問
          </Link>
        </div>
      </RevealSection>
    </SiteLayout>
  );
}
