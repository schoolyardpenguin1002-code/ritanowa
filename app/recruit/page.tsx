import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarHeart,
  Handshake,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { RepresentativeNurseCard } from "@/components/staff/RepresentativeNurseCard";
import { buttonVariants } from "@/lib/button-variants";
import { jobCommonTerms, jobOpenings } from "@/lib/job-openings";
import { director, nurses, representativeNurse } from "@/lib/staff-data";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "採用情報",
  description: `${siteConfig.nameShort}の採用情報。高崎市で小児精神科訪問看護に携わる仲間を募集しています。カジュアル面談・事務所見学も承ります。`,
};

function CtaBlock({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-[var(--ritanowa-gold)]/35 bg-[color-mix(in_srgb,var(--ritanowa-sand)_40%,var(--card))] p-8 text-center shadow-sm md:p-10",
        className
      )}
    >
      <p className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
        まずはカジュアル面談・事務所見学から
      </p>
      <p className="mx-auto mt-3 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
        応募を急がせることはありません。働き方の希望や不安を、無理のないペースでお聞かせください。
      </p>
      <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap">
        <Link
          href="/contact?topic=recruit"
          className={cn(
            buttonVariants({ variant: "default" }),
            "min-h-14 justify-center rounded-full px-8 py-6 text-lg"
          )}
        >
          お問い合わせ（採用・見学）
        </Link>
        <a
          href={siteConfig.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "min-h-14 justify-center rounded-full px-8 py-6 text-lg"
          )}
        >
          公式LINEで気軽に質問
        </a>
      </div>
    </div>
  );
}

/**
 * Google しごと検索・Indeed などに拾ってもらうための構造化データ（JobPosting）。
 * 内容は lib/job-openings.ts から生成しているので、条件を直すときはそちらを編集してください。
 */
function JobPostingJsonLd() {
  const hiringOrganization = {
    "@type": "Organization",
    name: siteConfig.name,
    sameAs: siteConfig.instagramUrl,
  };
  const jobLocation = {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressLine,
      addressLocality: "高崎市",
      addressRegion: "群馬県",
      addressCountry: "JP",
    },
  };

  const data = jobOpenings.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `${job.summary}\n\n【応募資格】${job.qualification}\n【勤務時間】${job.hours}\n【勤務日数】${job.days}\n【待遇】${jobCommonTerms.benefits.join(
      "／"
    )}\n${jobCommonTerms.wageNote}`,
    datePosted: jobCommonTerms.datePosted,
    validThrough: jobCommonTerms.validThrough,
    employmentType: jobCommonTerms.employmentType,
    hiringOrganization,
    jobLocation,
    occupationalCategory: job.occupation,
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "JPY",
      value: {
        "@type": "QuantitativeValue",
        value: job.hourlyWage,
        unitText: "HOUR",
      },
    },
  }));

  return (
    <script
      type="application/ld+json"
      // 静的に生成した JSON のみを埋め込みます（ユーザー入力は含みません）
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function OpeningsSection() {
  if (jobOpenings.length === 0) return null;

  return (
    <RevealSection className="border-y-2 border-[var(--ritanowa-terracotta)]/40 bg-[color-mix(in_srgb,var(--ritanowa-terracotta)_10%,var(--background))] py-14 md:py-20">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <p className="text-center text-lg font-semibold tracking-wide text-[var(--ritanowa-terracotta)] md:text-xl">
          いま募集しています
        </p>
        <h2 className="mt-3 text-balance text-center text-2xl font-bold tracking-tight md:text-4xl">
          夕方〜夜の時間帯に
          <br className="md:hidden" />
          動ける方を探しています
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground">
          学校やお仕事が終わってからでないと会えないご家庭があります。
          <strong className="font-semibold text-foreground">
            夕方から夜は、その時間にしか届けられないケアがある時間帯
          </strong>
          です。日中は別のお仕事をされている方、お子さんのことが一段落してから働きたい方、ブランクのある方も歓迎します。
        </p>

        <div className="mt-12 space-y-6">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="overflow-hidden rounded-3xl border border-border/80 bg-card shadow-md"
            >
              <div className="bg-gradient-to-r from-[var(--ritanowa-terracotta)] to-[color-mix(in_srgb,var(--ritanowa-gold)_55%,var(--ritanowa-terracotta))] px-7 py-6 md:px-10 md:py-7">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/85">
                  Open Positions
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {job.occupation.split("・").map((o) => (
                    <span
                      key={o}
                      className="rounded-full bg-white/95 px-4 py-1.5 text-base font-bold text-[var(--ritanowa-terracotta)] shadow-sm md:px-5 md:text-lg"
                    >
                      {o}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm font-semibold text-white md:text-base">
                  {jobCommonTerms.employmentTypeLabel}／週2コマから
                </p>
              </div>

              <div className="grid gap-3 px-7 pt-6 sm:grid-cols-3 md:px-10">
                <div className="rounded-2xl bg-[color-mix(in_srgb,var(--ritanowa-terracotta)_8%,var(--background))] p-5 text-center">
                  <p className="text-xs font-semibold tracking-widest text-[var(--ritanowa-terracotta)]">
                    時給
                  </p>
                  <p className="mt-1 text-2xl font-bold text-foreground">
                    {job.hourlyWage.toLocaleString("ja-JP")}
                    <span className="text-base font-semibold">円〜</span>
                  </p>
                </div>
                <div className="rounded-2xl bg-[color-mix(in_srgb,var(--ritanowa-sage)_10%,var(--background))] p-5 text-center">
                  <p className="text-xs font-semibold tracking-widest text-[var(--ritanowa-sage-deep)]">
                    平日の夕コマ
                  </p>
                  <p className="mt-1 text-2xl font-bold text-foreground">
                    16:00
                    <span className="text-base font-semibold">〜</span>
                    21:00
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    ここが主戦場です
                  </p>
                </div>
                <div className="rounded-2xl bg-[color-mix(in_srgb,var(--ritanowa-gold)_14%,var(--background))] p-5 text-center">
                  <p className="text-xs font-semibold tracking-widest text-[color-mix(in_srgb,var(--ritanowa-gold)_70%,var(--foreground))]">
                    土日祝のコマ
                  </p>
                  <p className="mt-1 text-xl font-bold leading-snug text-foreground">
                    昼 9:00〜15:00
                    <span className="mt-0.5 block">夕 15:00〜21:00</span>
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    土日祝は手当が付きます
                  </p>
                </div>
              </div>

              <div className="space-y-5 px-7 py-7 md:px-10 md:py-8">
                <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                  {job.summary}
                </p>
                <div className="rounded-2xl border border-border/70 bg-background/60 p-5">
                  <p className="text-sm font-bold text-foreground">応募資格</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {job.qualification}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-[var(--ritanowa-terracotta)]/40 bg-card p-7 shadow-sm md:p-8">
          <h3 className="text-lg font-bold md:text-xl">コマ制という働き方</h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
            りたのわの勤務は「コマ」で組みます。平日の夕コマは16時から21時までの5時間。土日祝は昼コマ（9〜15時）と夕コマ（15〜21時）です。週に何コマ入るかを契約で決めて、その分の収入をこちらが保障します。
          </p>
          <ul className="mt-5 space-y-3 text-base leading-relaxed text-muted-foreground">
            <li>
              <span className="font-semibold text-foreground">週2コマから始められます。</span>
              日中は別のお仕事、夜だけりたのわ。そんな働き方の方がたくさんいます。
            </li>
            <li>
              <span className="font-semibold text-foreground">コマの前後は多少ずらせます。</span>
              「16時は保育園のお迎えで無理、16時半からなら」といった調整はご相談ください。基本の形はありますが、そこから少し動かすことはできます。
            </li>
            <li>
              <span className="font-semibold text-foreground">入るコマが増えるほど時給も上がります。</span>
              週4コマの方は週2コマの方より高い時給になる仕組みです。土日祝のコマには別途手当が付きます。
            </li>
            <li>
              <span className="font-semibold text-foreground">シフトの谷でも収入は減りません。</span>
              契約したコマ数と週給は会社が守ります。訪問が入らなかった時間の保障も制度にしています。
            </li>
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            日中だけの勤務は、いまは募集の中心ではありません。夕方から夜の時間帯に動ける方を探しています。
          </p>
        </div>

        <div className="mt-6 rounded-3xl border border-[var(--ritanowa-gold)]/40 bg-card p-7 shadow-sm md:p-8">
          <h3 className="text-lg font-bold md:text-xl">共通の待遇</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {jobCommonTerms.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex gap-2 text-base leading-relaxed text-muted-foreground"
              >
                <span aria-hidden className="text-[var(--ritanowa-terracotta)]">
                  ●
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {jobCommonTerms.wageNote}
          </p>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-pretty text-center text-lg leading-relaxed text-muted-foreground">
          応募を決めていなくて大丈夫です。
          <strong className="font-semibold text-foreground">
            まずは見学だけでも歓迎します。
          </strong>
        </p>
        <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap">
          <Link
            href="/contact?topic=recruit"
            className={cn(
              buttonVariants({ variant: "default" }),
              "min-h-14 justify-center rounded-full px-10 py-6 text-lg shadow-lg"
            )}
          >
            見学・面談を申し込む
          </Link>
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "min-h-14 justify-center rounded-full border-2 border-[var(--ritanowa-gold)]/60 bg-card/90 px-10 py-6 text-lg"
            )}
          >
            公式LINEで気軽に質問
          </a>
        </div>
      </div>
    </RevealSection>
  );
}

export default function RecruitPage() {
  return (
    <SiteLayout>
      <JobPostingJsonLd />
      <header className="relative overflow-x-clip overflow-y-visible border-b border-[var(--ritanowa-gold)]/35 bg-gradient-to-b from-[color-mix(in_srgb,var(--ritanowa-gold)_22%,var(--background))] via-[color-mix(in_srgb,var(--ritanowa-sand)_45%,var(--background))] to-[color-mix(in_srgb,var(--ritanowa-terracotta)_8%,var(--background))] px-4 pb-16 pt-10 sm:px-5 md:px-8 md:pb-24 md:pt-14">
        <div className="pointer-events-none absolute -right-20 top-10 size-80 rounded-full bg-[color-mix(in_srgb,var(--ritanowa-gold)_25%,transparent)] blur-3xl" />
        <div className="pointer-events-none absolute -left-16 bottom-0 size-72 rounded-full bg-[color-mix(in_srgb,var(--ritanowa-terracotta)_18%,transparent)] blur-3xl" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="text-lg font-semibold tracking-wide text-[var(--ritanowa-gold)] md:text-xl">
            採用情報（求職者向け）
          </p>
          <h1 className="mt-4 text-balance text-2xl font-bold leading-tight tracking-tight text-foreground min-[400px]:text-3xl md:text-5xl md:leading-tight">
            地域と長く、
            <br className="md:hidden" />
            看護の本質に向き合うチームへ
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            高崎市を拠点に、小児精神科訪問看護でお子さまとご家族に寄り添う。ICTで記録の負担を減らし、対話に時間をかけられる職場づくりを大切にしています。
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact?topic=recruit"
              className={cn(
                buttonVariants({ variant: "default" }),
                "min-h-14 justify-center rounded-full px-10 py-6 text-lg shadow-lg"
              )}
            >
              カジュアル面談・見学を申し込む
            </Link>
            <a
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "min-h-14 justify-center rounded-full border-2 border-[var(--ritanowa-gold)]/60 bg-card/90 px-10 py-6 text-lg"
              )}
            >
              公式LINEで気軽に質問
            </a>
          </div>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            <Link href="/" className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline">
              トップページ
            </Link>
            はご利用者様・ご家族様向けです。ご利用のご相談はお問い合わせへ。
          </p>
        </div>
      </header>

      <OpeningsSection />

      <RevealSection className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
        <div className="overflow-hidden rounded-3xl border border-[var(--ritanowa-terracotta)]/30 bg-card shadow-sm">
          <div className="bg-[color-mix(in_srgb,var(--ritanowa-terracotta)_8%,var(--background))] px-8 pb-6 pt-8 md:px-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--ritanowa-terracotta)]">
              Message
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              「仕事だから」で終わらせない場所を、つくりたい。
            </h2>
          </div>
          <div className="space-y-5 px-8 py-8 text-pretty text-base leading-relaxed text-muted-foreground md:px-10 md:text-lg">
            <p>
              りたのわは、すこし変わった訪問看護ステーションです。訪問して看護を届けるだけでなく、地域に
              <strong className="font-semibold text-foreground">
                「大きな実家」のようなつながり——家族
              </strong>
              をつくっていきたいと、本気で考えています。
            </p>
            <p>
              これまで、地域のこうした活動の多くは、NPOやボランティアの善意が支えてきました。ボランティアは尊い行動です。でも私は、同じことを
              <strong className="font-semibold text-foreground">
                「本業」としてやれたら、もっと多くの人を、もっと長く支えられる
              </strong>
              と考えています。
            </p>
            <p>
              そして、もうひとつ大切にしたいことがあります。人に親切にすること。信頼関係を築くこと。新しいことに挑戦すること——本当はこんなにハッピーなことが、お給料をもらった途端に「これは仕事だから」と、つまらなくなってしまうことがあります。私は、それが嫌なのです。
            </p>
            <p>
              ここでは、楽しんでほしい。人との関わり、信頼、誰かの役に立てた実感——
              <strong className="font-semibold text-foreground">
                お金では測れない「本当の豊かさ」をここで得ながら、きちんとお給料も受け取ってほしい。
              </strong>
              働くあなた自身に、人生の素晴らしい時間を過ごしてもらいたいのです。
            </p>
            <p>そういう場所を、仲間と一緒につくっていきます。</p>
            <p className="text-right font-semibold text-foreground">
              代表・医師　狩野 遊太
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
        <div className="rounded-3xl border border-border/80 bg-card p-8 shadow-sm md:p-10">
          <div className="flex items-start gap-4">
            <Sparkles
              className="mt-1 size-8 shrink-0 text-[var(--ritanowa-gold)]"
              strokeWidth={1.75}
              aria-hidden
            />
            <div>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                ビジョン
              </h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                「りたのわ」は、利用者様とご家族様、主治医・地域の公的機関・行政・NPOがつながる<strong className="font-semibold text-foreground">“輪”</strong>
                を大切にする小児精神科の訪問看護ステーションです。看護の本質である対話と観察に集中できるよう、ICTで記録の負担を減らし、現場の看護師が心に余白を持てる運営を目指しています。
              </p>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                高崎市を拠点に、地域の方々の暮らしに長く寄り添えるケアを積み重ねていきたい——そのために、互いを尊重し、学び合える職場でありたいと考えています。
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="border-t border-border/50 bg-[color-mix(in_srgb,var(--background)_94%,var(--ritanowa-sand))] py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            働きやすさ・チームの雰囲気
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty text-lg leading-relaxed text-muted-foreground">
            無理な長時間労働や非効率な紙の記録に追われすぎないよう、業務の仕組みづくりに継続的に取り組んでいます。直行直帰の運用を基本とし、チーム内で相談しやすい関係性を大切にしています。
          </p>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "ICT・記録の効率化",
                body: "記録や事務にかかる時間を減らし、対話や観察に時間を戻す——そのためのツール導入と運用を進めています。",
                icon: MessageCircle,
              },
              {
                title: "小児精神科領域と医師のバックアップ",
                body: "小児・精神領域の医療的視点を背景に、現場の判断を支える体制を整えています。",
                icon: HeartHandshake,
              },
              {
                title: "連携を重視する文化",
                body: "主治医・地域の公的機関・行政・NPO・ご家族様との線をつなぎ、利用者様を中心にしたケアを一緒に考えるチームを目指しています。",
                icon: Handshake,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm"
                >
                  <Icon
                    className="size-9 text-[var(--ritanowa-terracotta)]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </RevealSection>

      <RevealSection className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-[var(--ritanowa-gold)]">
            How We Grow
          </p>
          <h2 className="mt-3 text-center text-2xl font-bold tracking-tight md:text-3xl">
            りたのわの育ちかた・評価のしくみ
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty text-lg leading-relaxed text-muted-foreground">
            評価と給与のしくみは、入職前に全部お見せします。基準が見えないまま働く不安を、私たちはつくりたくありません。
          </p>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "毎月チャンスがある昇格ランク",
                body: "C から始まり、CC、CCC…と文字が増えていく昇格制度をつくりました。判定は毎月。基準は全員に公開されたチェックリストだけで決まるので、上司の気分で左右されません。ランクは偉さの序列ではなく、仕事を分かりやすくする道具。誰もが同じ発言権を持つチームです。",
              },
              {
                title: "成長図鑑（300項目の行動リスト）",
                body: "「挨拶を自分からする」から「拠点の運営を任される」まで、できることがひとつずつ増えていく図鑑があります。読んだとおりにやれば誰でもできる行動だけを書いた、マニュアル兼スタンプ帳。なお、集めるかどうかは自由です。落ち着いたペースで働きたい方の働き方も、同じように尊重します。",
              },
              {
                title: "勘ではなく、型で守られる",
                body: "「この様子が見えたら、こう動く。ここから先は医師に相談する」——観察と判断の型を、WHOの国際プログラム（mhGAP）に準拠して整備しています。訪問はひとりでも、判断はひとりで背負いません。代表が医師なので、迷ったらその場で電話できます。精神科が未経験の方に、安心して始めてもらうための仕組みです。",
              },
              {
                title: "お互い様の約束",
                body: "会社は、契約した勤務枠と収入を守ります。シフトの変更をお願いすることはあっても、それは相談であって命令ではなく、断っても不利益はありません。子どもの行事も、急な用事も、お互い様。この約束は制度として文章になっています。",
              },
              {
                title: "記録は音声とAIで",
                body: "訪問後の記録は、音声入力とAIが下書きまで作ります。夜まで記録に追われる訪問看護の常識を、仕組みで変えているところです。浮いた時間は、利用者様との対話と、あなた自身の暮らしに返します。",
              },
              {
                title: "AIで学べるステーション",
                body: "利用者役のAIを相手にした会話のトレーニングなど、新しい学び方を取り入れています。「同行できる先輩の数」に縛られず、失敗を気にせず何度でも練習できる環境を整えていきます。新しい道具を面白がれる方、大歓迎です。",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-3xl border border-border/80 bg-card p-7 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[var(--ritanowa-terracotta)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            主な数字は下にそのまま載せています。さらに細かい条件は、カジュアル面談で資料を見ながらご説明します。
          </p>
        </div>
      </RevealSection>

      <RevealSection className="border-t border-border/50 bg-[color-mix(in_srgb,var(--background)_94%,var(--ritanowa-sand))] py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-[var(--ritanowa-gold)]">
            Money Talks
          </p>
          <h2 className="mt-3 text-center text-2xl font-bold tracking-tight md:text-3xl">
            お金の話を、先にぜんぶ
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty text-lg leading-relaxed text-muted-foreground">
            「詳細は面談で」と隠すお金の話が、応募の一番のブレーキだと思っています。だから先に載せます。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-border/80 bg-card p-7 shadow-sm">
              <h3 className="text-lg font-bold">コマではたらく（枠社員）</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                平日の夕コマは時給1,600円から。週のコマ数が増えると1,700円、1,800円と上がります。土日祝のコマは1,800〜2,000円。
                <strong className="font-semibold text-foreground">
                  契約したコマ数と週給は、訪問が少ない週でも会社が保障します。
                </strong>
              </p>
            </div>
            <div className="rounded-3xl border border-border/80 bg-card p-7 shadow-sm">
              <h3 className="text-lg font-bold">1件ずつはたらく（出来高）</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                訪問1件3,500円（30〜60分・移動と記録の時間を含む）。
                <strong className="font-semibold text-foreground">
                  利用者様都合のキャンセルでも、1件につき1,750円をお支払いします
                </strong>
                （空振りをあなたの損にしない約束です）。
              </p>
            </div>
            <div className="rounded-3xl border border-border/80 bg-card p-7 shadow-sm">
              <h3 className="text-lg font-bold">正社員（月給）</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                看護師は月給28万円スタート、独り立ちで30万円。その先は32万〜45万円まで昇格の階段が公開されています（准看護師・作業療法士は26万円から）。
                <strong className="font-semibold text-foreground">
                  オンコール・夜間待機はありません。
                </strong>
              </p>
            </div>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            昇格の基準はチェックリストとして全員に公開。社会保険は法定どおり完備。22時以降の勤務は原則ありません（発生時は深夜割増を支給）。
          </p>
        </div>
      </RevealSection>

      <RevealSection className="border-t border-border/50 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            ある日の働き方（夕方の訪問枠の例）
          </h2>
          <div className="mt-10 space-y-0">
            {[
              ["15:45", "自宅から直行。移動中に今日の利用者様の情報をアプリで確認"],
              ["16:00", "1件目の訪問。学校から帰ってきたお子さまと、今日の話から"],
              ["17:30", "2件目へ。移動の車内で、1件目の記録を音声入力"],
              ["19:00", "3件目の訪問。お仕事から帰られたご家族とゆっくり話せる時間帯"],
              ["20:30", "訪問終了。記録はAIの下書きを確認して完了、そのまま直帰"],
            ].map(([time, body]) => (
              <div
                key={time}
                className="flex gap-5 border-l-2 border-[var(--ritanowa-gold)]/50 pb-7 pl-6 last:pb-0"
              >
                <span className="w-14 shrink-0 font-bold text-[var(--ritanowa-terracotta)]">
                  {time}
                </span>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {body}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm leading-relaxed text-muted-foreground">
            ※一例です。担当件数や時間帯は、契約した勤務枠とご希望に合わせて組みます。
          </p>
        </div>
      </RevealSection>

      <RevealSection className="border-t border-border/50 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            正直に、大変なこともあります
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty text-lg leading-relaxed text-muted-foreground">
            いいことばかり書いて入職後にがっかりされるのが、いちばん悲しいので。
          </p>
          <ul className="mt-10 space-y-4">
            {[
              "こころの揺れに付き合う仕事です。うまく言葉が届かない日、帰り道に考え込んでしまう日もあります。だからこそ、ひとりで抱えない仕組み（チームでの相談・医師のバックアップ・観察の型）を整えています。",
              "訪問はひとりで伺う場面が中心です。同行期間をしっかり取り、「ひとりで行ける」とお互いに思えるまで先に立ちませんが、最初は緊張すると思います。",
              "車での移動が毎日あります。雨の日も、暑い日もあります。",
              "立ち上げ期のステーションです。仕組みが毎月のように良くなっていく面白さと、まだ整っていないものに出会う不便さの両方があります。",
            ].map((body) => (
              <li
                key={body}
                className="rounded-3xl border border-border/80 bg-card p-6 text-base leading-relaxed text-muted-foreground shadow-sm"
              >
                {body}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center text-pretty text-base leading-relaxed text-muted-foreground">
            決まった正解だけをこなしたい方には、揺らぎの多い仕事かもしれません。逆に、目の前の人に合わせて考えることが好きな方には、これ以上ない仕事だと思っています。
          </p>
        </div>
      </RevealSection>

      <RevealSection className="border-t border-border/50 py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            訪問看護がはじめての方・一度離れた方へ
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty text-lg leading-relaxed text-muted-foreground">
            看護師さんが訪問看護をためらう理由、離れていく理由は、だいたい決まっています。りたのわは、それをひとつずつ設計で消してきました。いまの正直な答えを書きます。
          </p>
          <ul className="mt-10 space-y-4">
            {[
              ["「夜のオンコールが不安」", "りたのわに、オンコールはありません。夜中に携帯が鳴る生活は、ここにはありません。"],
              ["「ひとりで訪問する責任が重い」", "代表が医師です。判断に迷ったら、その場で医師に連絡し、対応の指示を仰ぐことができます。最初のひと月は必ず同行から始めます。"],
              ["「記録と書類を、家に持ち帰りたくない」", "ICTを重視しています。書類のための残業や持ち帰りをなくす仕組みづくりを続けています。"],
              ["「教育がないまま現場に出されるのが怖い」", "うちでは、ありえません。成長図鑑という300項目のリストで、できることが増えるのが目に見えます。いきなりひとりでは行かせません。"],
              ["「子どもの熱で休みにくいのでは」", "うちは休みやすい職場です。お互い様を約束にしています。それでも正直、小さな所帯なので調整をお願いする日はあります。それにあわせて働きやすさを大きくあげる働き方も用意しました。"],
            ].map(([q, a]) => (
              <li
                key={q}
                className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm"
              >
                <p className="font-bold">{q}</p>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {a}
                </p>
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-2xl text-center text-pretty text-base leading-relaxed text-muted-foreground">
            気になることは、見学のときに今のスタッフへ直接聞いてください。
          </p>
        </div>
      </RevealSection>

      <RevealSection className="border-t border-border/50 bg-[color-mix(in_srgb,var(--background)_94%,var(--ritanowa-sand))] py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            応募から入職まで
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty text-lg leading-relaxed text-muted-foreground">
            全部で2週間ほど。最短1週間です。どの段階でやめても大丈夫です。
          </p>
          <ol className="mt-10 space-y-0">
            {[
              ["1", "LINEか電話で連絡", "「質問だけ」「話を聞くだけ」で大丈夫です。履歴書は要りません。"],
              ["2", "カジュアル面談（30分・オンライン可)", "働き方とお金の話を、資料を見ながら正直にします。志望動機は聞きません。"],
              ["3", "同行見学（半日）", "実際の訪問に一緒に伺います。現場を見てから決めてください。条件のすり合わせもここで。"],
              ["4", "内定・入職", "書類はこちらで整えます。社会保険や扶養の相談もお任せください。"],
            ].map(([step, title, body]) => (
              <li
                key={step}
                className="flex gap-5 border-l-2 border-[var(--ritanowa-terracotta)]/40 pb-8 pl-6 last:pb-0"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--ritanowa-terracotta)] font-bold text-white">
                  {step}
                </span>
                <div>
                  <h3 className="font-bold text-foreground">{title}</h3>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-3xl px-4 py-14 md:px-8 md:py-20">
        <div className="flex items-start gap-4">
          <MapPin
            className="mt-1 size-8 shrink-0 text-[var(--ritanowa-terracotta)]"
            strokeWidth={1.75}
            aria-hidden
          />
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              地域と長く、向き合うキャリア
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              訪問看護は、ご利用者様との関係が長く続く仕事です。私たちは、短期的な数字よりも、信頼関係と継続的なケアを重視しています。高崎市周辺の暮らしに根ざし、地域医療・介護の仲間と協働しながら、プロとして成長し続けられる環境を整えていきたいと考えています。
            </p>
          </div>
        </div>

        <div className="mt-12 flex items-start gap-4">
          <Users
            className="mt-1 size-8 shrink-0 text-[var(--ritanowa-terracotta)]"
            strokeWidth={1.75}
            aria-hidden
          />
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              あなたに合わせた働き方を一緒に考える
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              ライフステージや家庭の事情は人それぞれです。訪問看護には制度上の枠組みもありますが、その中で無理のないシフトや役割を、まずはご希望を伺いながら整理していきます。「話してみないと分からない」ことも多いので、カジュアル面談で疑問をぶつけていただいて大丈夫です。
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="border-t border-border/50 bg-[color-mix(in_srgb,var(--ritanowa-terracotta)_8%,var(--background))] py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <CtaBlock />
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-3xl px-4 py-14 md:px-8 md:py-20">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          募集職種・勤務の目安
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
          詳細の条件は変更になる場合があります。最新の募集状況はお問い合わせください。
        </p>
        <div className="-mx-1 overflow-x-auto rounded-3xl border border-border/80 bg-card shadow-sm sm:mx-0">
          <table className="w-full min-w-[280px] text-left text-sm sm:text-base md:text-lg">
            <tbody className="divide-y divide-border/70">
              <tr>
                <th className="w-[34%] min-w-[5.5rem] bg-secondary/50 px-3 py-3 font-semibold text-foreground sm:w-[32%] sm:px-5 sm:py-4 md:w-[32%]">
                  職種
                </th>
                <td className="min-w-0 break-words px-3 py-3 text-muted-foreground sm:px-5 sm:py-4">
                  訪問看護師（正社員・パートはご相談）
                </td>
              </tr>
              <tr>
                <th className="bg-secondary/50 px-3 py-3 font-semibold text-foreground sm:px-5 sm:py-4">
                  勤務地
                </th>
                <td className="min-w-0 break-words px-3 py-3 text-muted-foreground sm:px-5 sm:py-4">
                  {siteConfig.addressLines[0]}
                  <span className="mt-1 block text-base">
                    （訪問エリアは主に高崎市周辺。詳細は面談時にご案内します）
                  </span>
                </td>
              </tr>
              <tr>
                <th className="bg-secondary/50 px-3 py-3 font-semibold text-foreground sm:px-5 sm:py-4">
                  応募資格
                </th>
                <td className="min-w-0 break-words px-3 py-3 text-muted-foreground sm:px-5 sm:py-4">
                  看護師免許をお持ちの方。訪問看護の経験は不問です。精神科領域にご関心のある方を歓迎します。
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-3xl px-4 pb-14 md:px-8 md:pb-20">
        <div className="rounded-3xl border border-dashed border-border/90 bg-muted/30 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
            {director.imageSrc ? (
              <div className="relative mx-auto aspect-[4/5] w-full shrink-0 overflow-hidden rounded-2xl border border-border/80 shadow-md md:mx-0 md:max-w-[260px]">
                <Image
                  src={director.imageSrc}
                  alt={director.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="260px"
                />
              </div>
            ) : (
              <div
                className="flex min-h-[220px] w-full shrink-0 items-center justify-center rounded-2xl border-2 border-dashed border-[var(--ritanowa-gold)]/40 bg-[color-mix(in_srgb,var(--ritanowa-sand)_40%,var(--background))] md:max-w-[260px]"
                aria-label={director.imageAlt}
              >
                <p className="px-4 text-center text-base text-muted-foreground">
                  医師・代表の写真
                  <span className="mt-2 block text-sm">（準備中・未掲載）</span>
                </p>
              </div>
            )}
            <div>
              <h2 className="text-xl font-bold md:text-2xl">代表メッセージ</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {director.name}　{director.title}
              </p>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                代表は医師として、現場の看護師と二人三脚で、ご本人とご家族のペースを大切にするケアを目指しています。
              </p>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                ご本人のメッセージ全文は
                <Link
                  href="/staff"
                  className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
                >
                  スタッフ紹介
                </Link>
                ページもご覧ください。
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="border-t border-border/50 bg-[color-mix(in_srgb,var(--background)_94%,var(--ritanowa-sand))] py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4 md:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            一緒に働く仲間
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-pretty text-lg leading-relaxed text-muted-foreground">
            どんな人と働くのかが、いちばん気になるところだと思います。まずは2人、紹介させてください。
          </p>
          <div className="mt-10 space-y-8">
            <RepresentativeNurseCard nurse={representativeNurse} />
            {nurses.map((nurse) => (
              <RepresentativeNurseCard key={nurse.id} nurse={nurse} />
            ))}
          </div>
          <p className="mt-8 text-center text-base text-muted-foreground">
            <Link
              href="/staff"
              className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
            >
              スタッフ紹介ページはこちら
            </Link>
          </p>
        </div>
      </RevealSection>

      <RevealSection className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="rounded-3xl border border-[var(--ritanowa-gold)]/40 bg-card p-8 shadow-sm md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--ritanowa-gold)]">
              Referral
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
              ご紹介、大歓迎です
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              いい仲間は、いい仲間を知っている——私たちはそう考えています。りたのわに合いそうな看護師・作業療法士のお知り合いがいたら、ぜひ引き合わせてください。ご紹介から入職につながった場合は、紹介してくださった方にも、入職された方にも、感謝の気持ちとしてそれぞれ3万円をお渡ししています（支給条件の詳細は面談でご説明します）。
            </p>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              「まず話だけ聞いてみたい」という段階のご友人の同席も歓迎です。
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="border-t border-border/60 bg-[color-mix(in_srgb,var(--ritanowa-sand)_30%,var(--background))] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-8">
          <div className="flex items-center justify-center gap-3 text-[var(--ritanowa-gold)]">
            <CalendarHeart className="size-8" strokeWidth={1.75} aria-hidden />
            <h2 className="text-2xl font-bold md:text-3xl">ご応募・お問い合わせ</h2>
          </div>
          <p className="mx-auto mt-4 max-w-xl text-center text-pretty text-lg leading-relaxed text-muted-foreground">
            採用に関するご質問、カジュアル面談、事務所見学のご希望は、お電話またはフォームよりお気軽にどうぞ。
          </p>
          <CtaBlock className="mt-10" />
          <p className="mt-8 text-center text-base text-muted-foreground">
            <Link
              href="/faq#recruit"
              className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
            >
              採用・見学に関するよくある質問（FAQ）
            </Link>
          </p>
        </div>
      </RevealSection>
    </SiteLayout>
  );
}
