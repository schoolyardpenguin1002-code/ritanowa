import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "グループホーム（2026年11月開設予定）",
  description:
    "訪問看護ステーションりたのわが高崎市に開設予定のグループホーム。病院でも施設でもない、もうひとつの実家。開設前の見学・入居のご相談を受け付けています。",
};

const FEATURES = [
  {
    title: "少人数の暮らし",
    body: "定員4名の小さなホーム。大きな施設ではなく、「家」の空気を大切にします。食卓を囲み、それぞれのペースで暮らします。",
  },
  {
    title: "看護と地続き",
    body: "訪問看護ステーションりたのわと連携し、こころと体調の変化を日常の中で見守ります。医療とつながっている安心が土台です。",
  },
  {
    title: "夜間の見守り",
    body: "夜間の体制を整え、ご本人にもご家族にも「ひとりにしない」環境をつくります。",
  },
] as const;

const FAQ = [
  {
    q: "費用はどのくらいかかりますか？",
    a: "障害福祉サービス（共同生活援助）の利用を前提に、家賃・食費・光熱費などの実費をあわせた金額になります。詳細は指定手続きの進行にあわせてご案内します。まずはご相談ください。",
  },
  {
    q: "どんな人が入居できますか？",
    a: "精神・発達の特性など生きづらさがあり、地域で自分らしく暮らしたい方を想定しています。「家族と離れて暮らす練習をしたい」という段階のご相談も歓迎です。",
  },
  {
    q: "開設前でも相談できますか？",
    a: "できます。開設前の見学・入居のご相談を先行して受け付けています。公式LINEまたはお問い合わせからご連絡ください。",
  },
] as const;

export default function GroupHomePage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="グループホーム"
        description="病院でも、施設でもない。もうひとつの実家。──2026年11月、高崎市に開設予定です（指定申請準備中）。"
      />

      <RevealSection className="mx-auto max-w-3xl space-y-12 px-4 py-12 text-lg leading-relaxed md:px-8 md:py-16">
        <div className="overflow-hidden rounded-3xl border border-border/80 shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80"
            alt="やわらかな光の入るリビングのイメージ"
            width={1600}
            height={1000}
            className="h-64 w-full object-cover md:h-80"
            priority
          />
          <p className="bg-card px-6 py-3 text-sm text-muted-foreground">
            ※写真はイメージです。実際のホームの写真は、準備が進み次第掲載します。
          </p>
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">なぜ、訪問看護がグループホームを？</h2>
          <p className="text-muted-foreground">
            ご家庭を訪問するなかで、私たちは「親なきあとが心配」「そろそろ一人暮らしの練習をさせたい」という声をたくさん聴いてきました。
            診る・通うの先に、必要だったのは「住まい」でした。
          </p>
          <p className="text-muted-foreground">
            りたのわのグループホームは、訪問看護と同じ想いでつくります。想いが巡り、心が整う——その暮らしの拠点です。
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="space-y-2 rounded-3xl border border-border/80 bg-card p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-[var(--ritanowa-terracotta)]">
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </section>

        <section className="space-y-5 rounded-3xl border border-[var(--ritanowa-terracotta)]/40 bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold">開設前の見学・入居相談を受け付けています</h2>
          <p className="text-muted-foreground">
            「話だけ聞いてみたい」で大丈夫です。ご本人・ご家族・支援者の方、どなたからのご相談も歓迎します。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default" }),
                "inline-flex rounded-3xl px-6 py-6"
              )}
            >
              公式LINEで相談する
            </a>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "inline-flex rounded-3xl px-6 py-6"
              )}
            >
              お問い合わせフォーム
            </Link>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">よくある質問</h2>
          <div className="space-y-3">
            {FAQ.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-border/80 bg-card p-5 shadow-sm"
              >
                <summary className="cursor-pointer list-none font-semibold">
                  {item.q}
                </summary>
                <p className="mt-3 text-base text-muted-foreground">{item.a}</p>
              </details>
            ))}
          </div>
        </section>
      </RevealSection>
    </SiteLayout>
  );
}
