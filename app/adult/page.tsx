import type { Metadata } from "next";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const adultWorries = [
  {
    title: "子育てのしんどさ・産後のこころ",
    body: "子どもはかわいいのに、涙が出る、イライラが止まらない、眠れない。「母親なのに」と自分を責めて、誰にも相談できずにいる。",
  },
  {
    title: "うつ・気分の落ち込み",
    body: "朝起き上がれず、家事や仕事が手につかない日が続いている。「怠けているだけでは」と自分を責めてしまい、誰にも言えないまま時間だけが過ぎていく。",
  },
  {
    title: "引きこもり",
    body: "職場での挫折をきっかけに人と会うのを避けるようになり、やがて外に出られなくなった。ご家族は心配しているが、本人は「困っていない」と言う——そんなご家庭からのご相談も多くあります。",
  },
  {
    title: "ストレス・不眠",
    body: "眠れない、体が重い、頭に霧がかかったようで集中できない。内科では「異常なし」と言われるが、つらさは続いていて、発散のしかたもわからない。",
  },
  {
    title: "燃え尽き",
    body: "仕事一筋で頑張ってきたのに、ある日ふっと火が消えたように意欲がなくなった。食欲も落ち、何のために働いてきたのかわからなくなっている。",
  },
  {
    title: "介護疲れ・看病疲れ",
    body: "家族の介護や看病が続き、夜眠れず、食欲も落ちて気分が沈んだまま。支える側の自分が倒れそうなのに、弱音を吐ける相手がいない。",
  },
  {
    title: "更年期のこころの不調",
    body: "急な発汗やほてりに加えて、倦怠感や不眠、気分の波が続く。婦人科や漢方を試しても良くならず、こころの面の支えも欲しいと感じている。",
  },
  {
    title: "物忘れ・生活の乱れ",
    body: "同じ話を繰り返す、薬を飲み忘れる、家事がこなせなくなってきた。外出や人との交流が減り、ご家族の心配が募っている。",
  },
  {
    title: "退院後の暮らしの不安",
    body: "入院中は整っていた生活と服薬を、家でも続けられるか自信がない。次の外来までの間、日々の変化を見てくれる人がそばにいない。",
  },
] as const;

const adultServiceItems = [
  {
    title: "服薬のサポート",
    body: "飲み忘れや量の不安、やめたい気持ちも含めて、主治医の指示のもと一緒に整えます。",
  },
  {
    title: "心と体の状態の観察・ケア",
    body: "気分・睡眠・食事・体調の変化を定期的に見守り、小さなサインを主治医と共有します。",
  },
  {
    title: "生活リズムの立て直し",
    body: "眠り・食事・外出のリズムを、ご本人のペースで少しずつ取り戻すお手伝いをします。",
  },
  {
    title: "社会生活への復帰の伴走",
    body: "外出・買い物・就労や復職など、暮らしの行動範囲を広げる一歩に付き添います。",
  },
  {
    title: "対話とコミュニケーションの時間",
    body: "週に一度、安心して話せる相手がいること自体が、回復の土台になります。",
  },
  {
    title: "ご家族への支援",
    body: "支える側の疲れや迷いにも目を向け、ご家族が一人で抱え込まない形をつくります。",
  },
] as const;

export const metadata: Metadata = {
  title: "大人・女性の精神科訪問看護",
  description: `${siteConfig.nameShort}は大人の方の精神科訪問看護も行っています。お母さん・女性のこころのご相談に特に力を入れています。うつ・不安・更年期・介護疲れ・退院後の在宅療養の支援。${siteConfig.primaryServiceAreaLabel}。`,
};

export default function AdultPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="大人・女性の精神科訪問看護"
        description="りたのわは、お子さまだけでなく、大人の方の精神科訪問看護も行っています。なかでも、お母さん・女性のこころのご相談に力を入れています。"
      />

      <RevealSection className="mx-auto max-w-3xl space-y-14 px-4 py-12 md:px-8 md:py-16">
        <section className="space-y-4 rounded-3xl border border-[var(--ritanowa-gold)]/35 bg-[color-mix(in_srgb,var(--ritanowa-sand)_40%,var(--card))] p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            女性のこころに、力を入れています
          </h2>
          <p className="text-lg text-muted-foreground">
            りたのわは{siteConfig.specialtyCross}を軸にした訪問看護ステーションです。お子さまの訪問を重ねるなかで、いちばん近くで支えているお母さんが、いちばん疲れている——そんな場面にたくさん出会ってきました。
          </p>
          <p className="text-lg text-muted-foreground">
            子育てのこと、仕事のこと、更年期のこと、家族の介護のこと。女性のこころの負担は、暮らしのいくつもの役割と重なって押し寄せます。だからりたのわは、
            <strong className="font-semibold text-foreground">
              お子さまと、お母さんと、女性のこころ
            </strong>
            を一本の線で支える訪問看護をつくっています。訪問するのは、自身も子育て中の女性看護師を中心としたチームです。
          </p>
          <p className="text-lg text-muted-foreground">
            精神科訪問看護は年齢を問わない制度です。
            <strong className="font-semibold text-foreground">
              男性のご相談も、もちろんお受けしています。
            </strong>
            どなたも、ご家庭まるごと支える同じ姿勢でお引き受けします。
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            このようなことはありませんか？
          </h2>
          <p className="text-lg text-muted-foreground">
            診断名の有無や、症状の軽い・重いは問いません。「病院に行くほどではない気がするけれど、つらい」という段階からご相談いただけます。
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {adultWorries.map((w) => (
              <li
                key={w.title}
                className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm"
              >
                <p className="font-semibold text-foreground">{w.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            大人の精神科訪問看護でできること
          </h2>
          <p className="text-lg text-muted-foreground">
            主治医の指示にもとづき、看護師がご自宅に伺います。治療方針の決定は主治医にお任せし、私たちは在宅での看護と暮らしの支援に専念します。
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {adultServiceItems.map((s) => (
              <li
                key={s.title}
                className="rounded-2xl border border-border/80 bg-card p-5 shadow-sm"
              >
                <p className="font-semibold text-foreground">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">ご利用いただける方</h2>
          <ul className="list-inside list-disc space-y-2 text-lg text-muted-foreground">
            <li>精神科・心療内科などに通院中で、主治医が訪問看護を必要と認めた方</li>
            <li>退院後の在宅療養を、自宅で続けていきたい方</li>
            <li>うつ・不安・統合失調症・依存症など、診断名や症状の程度は問いません</li>
            <li>ご本人だけでなく、支えるご家族からのご相談も承ります</li>
          </ul>
          <p className="text-muted-foreground">
            医療保険が使え、自立支援医療（精神通院医療）の対象となる場合は自己負担が軽くなります。くわしくは
            <Link
              href="/pricing"
              className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
            >
              料金のご案内
            </Link>
            をご覧ください。
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-[var(--ritanowa-terracotta)]/40 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">
            暮らしの場も、準備しています——グループホーム（2026年11月開設予定）
          </h2>
          <p className="text-lg text-muted-foreground">
            「自宅での療養」の先に、「家族と離れて暮らす練習がしたい」「親なきあとが心配」という声があります。りたのわは高崎市に、看護と地続きのグループホームを開設予定です。訪問看護と同じチームが、暮らしの拠点づくりまで伴走します。
          </p>
          <p>
            <Link
              href="/group-home"
              className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
            >
              グループホームのご案内（開設前の見学・入居相談を受付中）
            </Link>
          </p>
        </section>

        <section className="space-y-4 rounded-3xl border border-border/80 bg-[color-mix(in_srgb,var(--ritanowa-sand)_35%,var(--card))] p-8 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">訪問の時間帯・エリア</h2>
          <p className="text-lg text-muted-foreground">
            営業時間は{siteConfig.officeHoursLine}。お仕事をされている方の夕方以降のご希望にも、できる限り合わせます。訪問エリアは
            {siteConfig.primaryServiceAreaLabel}を中心に、
            <Link
              href="/area"
              className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
            >
              地域のご案内
            </Link>
            に記載の市町村へ伺っています。
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
