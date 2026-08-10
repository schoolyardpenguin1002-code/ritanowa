import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "運営会社",
  description:
    "株式会社かのう商会のビジョン。「大きな実家、最強のおせっかい組織」——人生を心から楽しめる土台を創造し、ウェルビーイングで世界を満たす。",
};

const ROADMAP = [
  {
    period: "いま",
    title: "訪問看護ステーションりたのわ",
    body: "小児×精神に特化した訪問看護。夕方〜夜・週末も、ご家庭のリズムに合わせて伺います。",
  },
  {
    period: "2026年11月（予定）",
    title: "グループホーム",
    body: "病院でも施設でもない、もうひとつの実家。地域で自分らしく暮らす住まいをつくります。",
  },
  {
    period: "2026年9月〜",
    title: "オンライン診療との連携",
    body: "連携クリニックとともに、受診のハードルを下げ、診察と診察のあいだの毎日を支えます。",
  },
  {
    period: "これから",
    title: "AIとともに、暮らしを支える",
    body: "記録や事務はAIに任せ、人は人にしかできないことへ。テクノロジーで「おせっかい」を増やします。",
  },
] as const;

export default function CompanyPage() {
  return (
    <SiteLayout>
      {/* ヒーロー：ビジョンを一枚で */}
      <div className="relative overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=80"
          alt="肩を組み合う仲間たち"
          width={2000}
          height={1200}
          className="h-[420px] w-full object-cover md:h-[520px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-4xl px-4 pb-12 md:px-8 md:pb-16">
            <p className="text-sm font-semibold tracking-widest text-white/80">
              VISION
            </p>
            <h1 className="mt-2 text-balance font-bold leading-tight text-white text-[clamp(1.7rem,5.5vw,3.2rem)]">
              <span className="inline-block">大きな実家、</span>
              <span className="inline-block">最強のおせっかい組織。</span>
            </h1>
          </div>
        </div>
      </div>

      <RevealSection className="mx-auto max-w-4xl space-y-16 px-4 py-14 text-lg leading-relaxed md:px-8 md:py-20">
        {/* 理念ブロック */}
        <section className="space-y-8 text-center">
          <div className="space-y-3">
            <p className="text-sm font-semibold tracking-widest text-[var(--ritanowa-gold)]">
              理念
            </p>
            <p className="text-balance text-2xl font-bold leading-snug md:text-3xl">
              人生を心から楽しめる土台を創造し、
              <br className="hidden md:block" />
              ウェルビーイングで世界を満たす。
            </p>
          </div>
          <div className="mx-auto max-w-2xl space-y-3 rounded-3xl border border-border/80 bg-card p-8 shadow-sm">
            <p className="text-sm font-semibold tracking-widest text-[var(--ritanowa-gold)]">
              自社におけるウェルビーイングの定義
            </p>
            <p className="text-xl font-semibold">
              精神的・肉体的・社会的に満たされ、持続可能な状態。
            </p>
          </div>
        </section>

        {/* 代表の物語 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">なぜ医師が、訪問看護から始めたのか</h2>
          <p className="text-muted-foreground">
            外来の数分間では、届かないものがあります。診察と診察のあいだ——1年のうち353日は、ご本人とご家族だけの時間です。
            その毎日にこそ、支えが要る。そう思い、高崎で訪問看護ステーションりたのわを立ち上げました。
          </p>
          <p className="text-muted-foreground">
            めざすのは、群馬で「診る・通う・住む」がひとつにつながった地域です。
            困ったとき、実家のように頼れて、少しおせっかいなくらい気にかけてくれる人がいる。
            私たちはそれを事業としてまじめに、本気でつくります。
          </p>
          <p className="text-right text-base font-semibold">
            株式会社かのう商会 代表・医師　狩野 遊太
          </p>
        </section>

        {/* ロードマップ */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">私たちがつくるもの</h2>
          <div className="space-y-4">
            {ROADMAP.map((r) => (
              <div
                key={r.title}
                className="flex flex-col gap-1 rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:flex-row sm:items-baseline sm:gap-6"
              >
                <span className="shrink-0 text-sm font-bold tracking-wide text-[var(--ritanowa-terracotta)] sm:w-40">
                  {r.period}
                </span>
                <div>
                  <h3 className="text-lg font-bold">{r.title}</h3>
                  <p className="mt-1 text-base text-muted-foreground">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ビジョン採用 */}
        <section className="space-y-6 rounded-3xl bg-[color-mix(in_srgb,var(--ritanowa-sage-light)_55%,var(--background))] p-8 md:p-12">
          <p className="text-sm font-semibold tracking-widest text-[var(--ritanowa-sage-deep)]">
            RECRUIT
          </p>
          <h2 className="text-3xl font-bold">何のために、生きますか。</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">Dust to dust</span>
              ——人は塵から生まれ、塵に帰る。旧約聖書（創世記3:19）にある古い言葉です。
            </p>
            <p>
              138億年という宇宙の時間から見れば、私たちの一生はまばたきほどの長さしかありません。
              偶然が幾重にも重なって、いま、ここに生きている。そう考えると、この短くて奇跡のような時間を、
              お金を追いかけるためだけに使ってしまうのは、少しもったいない気がするのです。
            </p>
            <p>
              何のために生きるのか。誰と、どんな時間を過ごすのか。
              私たちは、「働くこと」をその問いを一緒に考える時間にしたい。
              りたのわで働くことが、誰かの暮らしを支えながら、
              <span className="font-semibold text-foreground">
                あなた自身の人生を豊かにするきっかけになる
              </span>
              ——そんな組織を、本気でつくっています。
            </p>
            <p className="font-semibold text-foreground">
              一生、何のために生きますか。よかったら、私たちと一緒に考えませんか。
            </p>
            <p>
              だから働き方も、あなたの「ありたい暮らし」に合わせます。
              夜の時間だけ。週2日だけ。子育てを最優先に——それでいい、ではなく、それがいい。
            </p>
          </div>
          <ul className="space-y-2 text-base text-muted-foreground">
            <li>・記録は音声とAIで、ほとんど書きません。人と向き合う時間に集中できます</li>
            <li>・夕方〜夜、週末など「新しい時間帯の訪問看護」を一緒につくる仲間を探しています</li>
            <li>・経験の長さより、「教わる側に回れること」「明るさ」を大切にします</li>
          </ul>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/recruit"
              className={cn(
                buttonVariants({ variant: "default" }),
                "inline-flex rounded-3xl px-6 py-6"
              )}
            >
              採用情報を見る
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "secondary" }),
                "inline-flex rounded-3xl px-6 py-6"
              )}
            >
              カジュアル面談・見学の相談
            </Link>
          </div>
        </section>

        {/* 会社概要 */}
        <section className="space-y-3 border-t border-border/60 pt-8 text-base">
          <h2 className="text-xl font-bold">会社概要</h2>
          <dl className="grid gap-x-8 gap-y-2 sm:grid-cols-[10rem_1fr]">
            <dt className="font-semibold text-muted-foreground">社名</dt>
            <dd>株式会社かのう商会</dd>
            <dt className="font-semibold text-muted-foreground">代表</dt>
            <dd>狩野 遊太（医師）</dd>
            <dt className="font-semibold text-muted-foreground">事業内容</dt>
            <dd>
              訪問看護ステーションりたのわの運営／グループホーム（2026年11月開設予定）／医療・福祉に関わる事業
            </dd>
            <dt className="font-semibold text-muted-foreground">所在地</dt>
            <dd>群馬県高崎市浜尻町209-5</dd>
          </dl>
        </section>
      </RevealSection>
    </SiteLayout>
  );
}
