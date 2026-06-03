import type { Metadata } from "next";
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
import { buttonVariants } from "@/lib/button-variants";
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
          href={`tel:${siteConfig.phone}`}
          className={cn(
            buttonVariants({ variant: "outline" }),
            "min-h-14 justify-center rounded-full px-8 py-6 text-lg"
          )}
        >
          電話で相談（{siteConfig.phoneDisplay}）
        </a>
      </div>
    </div>
  );
}

export default function RecruitPage() {
  return (
    <SiteLayout>
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
              href={`tel:${siteConfig.phone}`}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "min-h-14 justify-center rounded-full border-2 border-[var(--ritanowa-gold)]/60 bg-card/90 px-10 py-6 text-lg"
              )}
            >
              電話で相談（{siteConfig.phoneDisplay}）
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
                body: "小児・精神領域の医療的視点を背景に、現場の判断を支える体制を整えています（詳細は面談時にご説明します）。",
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
            <div
              className="flex min-h-[220px] w-full shrink-0 items-center justify-center rounded-2xl border-2 border-dashed border-[var(--ritanowa-gold)]/40 bg-[color-mix(in_srgb,var(--ritanowa-sand)_40%,var(--background))] md:max-w-[260px]"
              aria-label="医師・代表の写真（未掲載）"
            >
              <p className="px-4 text-center text-base text-muted-foreground">
                医師・代表の写真
                <span className="mt-2 block text-sm">（準備中・未掲載）</span>
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold md:text-2xl">代表メッセージ</h2>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                代表は医師として、現場の看護師と二人三脚で、ご本人とご家族のペースを大切にするケアを目指しています。写真は準備が整い次第、掲載いたします。
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
