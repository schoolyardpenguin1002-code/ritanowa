import Image from "next/image";
import Link from "next/link";

import { SupporterDirectory } from "@/components/community/SupporterDirectory";
import { RevealSection } from "@/components/motion/RevealSection";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/lib/site-config";

const heroImage =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=80";

export function CommunityPageContent() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 -z-10">
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-[color-mix(in_srgb,var(--background)_88%,transparent)] via-[color-mix(in_srgb,var(--ritanowa-sand)_50%,transparent)] to-transparent"
            aria-hidden
          />
        </div>
        <div className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
          <p className="text-sm font-semibold tracking-wide text-[var(--ritanowa-gold)] sm:text-base">
            Community
          </p>
          <h2 className="mt-3 text-balance text-2xl font-bold leading-snug tracking-tight md:text-4xl">
            大きな実家を、
            <br className="md:hidden" />
            一緒につくりませんか。
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {siteConfig.nameShort}
            と地域で支え合う仲間のページです。母子・家族向けのイベントは、
            <Link href="/events" className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline">
              イベント情報
            </Link>
            のページでお届けしています。
          </p>
        </div>
      </section>

      <RevealSection className="py-14 md:py-20">
        <div className="mx-auto max-w-3xl space-y-14 px-4 text-lg leading-relaxed md:px-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              手をつなぐと、幸せは増えて、大変さは減る
            </h2>
            <p className="text-muted-foreground">
              高崎の地域には、すてきな場所や人が、実はたくさんあります。子ども食堂、フリースクール、親の会、放課後の居場所、農家さん、公園のイベント、街のお店。それぞれが、それぞれの場所で、誰かのためにがんばっている。
            </p>
            <p className="text-muted-foreground">
              ただ、それらは点在していて、いちばん必要としている家庭に届いていないことがあります。「そんな場所があるなんて知らなかった」——ご家庭を訪問するなかで、私たちは何度もこの言葉を聞いてきました。
            </p>
            <p className="text-muted-foreground">
              だから、つなぎたいのです。地域にあるリソース同士が手をつなげば、幸せの総量は増えて、ひとりで抱える大変さは減る。私たちはそう信じています。これは利益の話ではありません。同じ地域で、同じ方向を向いている者同士の、ゆるくてあたたかい連携の話です。
            </p>
          </section>

          <section className="space-y-4 rounded-3xl bg-[color-mix(in_srgb,var(--ritanowa-sand)_40%,var(--background))] p-7 md:p-9">
            <h2 className="text-2xl font-bold tracking-tight">
              私たちがつくりたいもの
            </h2>
            <p className="text-muted-foreground">
              りたのわの運営会社が掲げているビジョンは「大きな実家、最強のおせっかい組織」です。困ったときに頼れて、少しおせっかいなくらい気にかけてくれる人がいる。誰にでも、心から安心できる場所と、人とつながれる環境がある——そんな地域を、本気でつくろうとしています。
            </p>
            <p className="text-muted-foreground">
              でも、実家は一軒では建ちません。台所を担う人、縁側になる場所、庭で遊ばせてくれる人。いろんな役割が集まって、はじめて「実家」になります。あなたの活動が、その一部になってくれませんか。
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              サポーターになると、お互いにできること
            </h2>
            <p className="text-muted-foreground">
              契約書も、費用も、ノルマもありません。条件はひとつだけ——「地域の子どもと家族のために」という方向が同じであること。そのうえで、こんな交換ができます。
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[var(--ritanowa-terracotta)]">
                  りたのわから、あなたへ
                </h3>
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-muted-foreground">
                  <li>・このページで活動をご紹介します（リンク掲載）</li>
                  <li>・イベントを共有カレンダーでお知らせします</li>
                  <li>・訪問先のご家庭に、合いそうな活動として直接ご案内します</li>
                  <li>・医療・福祉制度のことで困ったら、相談相手になります</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-[var(--ritanowa-sage-deep)]">
                  あなたから、地域へ
                </h3>
                <ul className="mt-3 space-y-2 text-base leading-relaxed text-muted-foreground">
                  <li>・困っているご家庭に出会ったら、りたのわを思い出してください</li>
                  <li>・イベントや活動の情報を聞かせてください</li>
                  <li>・現場で感じる「地域に足りないもの」を教えてください</li>
                  <li>・できる範囲で、ゆるく、長く、つながってください</li>
                </ul>
              </div>
            </div>
            <p className="text-base text-muted-foreground">
              団体でも、個人でも構いません。子ども食堂、フリースクール、放課後等デイ、親の会、農家さん、お店、習いごとの先生——「うちの活動なんて」と思う方ほど、ぜひ。
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              はじまりは、お茶を一杯から
            </h2>
            <p className="text-muted-foreground">
              手続きは、ほぼありません。ご連絡をいただいたら、まずお会いして（オンラインでも）、お互いの活動の話をします。方向が同じだと感じられたら、このページに仲間として掲載させてください。それだけです。やめたくなったら、いつでもやめられます。
            </p>
          </section>
        </div>
      </RevealSection>

      <SupporterDirectory />

      <RevealSection className="border-t border-border/60 bg-[color-mix(in_srgb,var(--ritanowa-terracotta)_6%,var(--background))] py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <p className="text-lg font-semibold text-foreground">
            サポーター掲載のご希望
          </p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            協力サポーターとしての掲載をご希望の団体・個人の方は、お気軽にご連絡ください。
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex min-h-[3rem] items-center justify-center rounded-full bg-[var(--ritanowa-terracotta)] px-8 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90 sm:text-lg"
          >
            お問い合わせ
          </Link>
        </div>
      </RevealSection>
    </>
  );
}
