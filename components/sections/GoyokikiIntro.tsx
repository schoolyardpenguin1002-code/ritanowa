import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const EXAMPLES = [
  ["電球、かえます", "高いところ・かたいフタ・重いもの。20分1,000円で伺います"],
  ["お買い物、ごいっしょします", "荷物持ちも、運転も。おしゃべりしながら行きましょう"],
  ["スマホの「わからない」、なおします", "LINEの返し方も、写真の送り方も、何度でも"],
] as const;

export function GoyokikiIntro() {
  return (
    <RevealSection className="border-t border-border/50 bg-[color-mix(in_srgb,var(--ritanowa-gold)_10%,var(--background))] py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-[var(--ritanowa-blue)]">
          Ritakiki
        </p>
        <h2 className="mt-3 text-center text-2xl font-bold tracking-tight md:text-4xl">
          はじめました。「りたのわ御用聞き」
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-pretty text-lg leading-relaxed text-muted-foreground">
          訪問看護でご家庭に伺うなかで、制度では拾えない「ちょっと困った」がどの家にもあることを知りました。
          シニアの暮らしの「ちょっと」に、ご近所の御用聞きさんが伺います。
          <strong className="font-semibold text-foreground">20分1,000円・高崎から</strong>。
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {EXAMPLES.map(([title, body]) => (
            <li
              key={title}
              className="rounded-3xl border border-border/80 bg-card p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                {body}
              </p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-2xl text-center text-pretty text-base leading-relaxed text-muted-foreground">
          離れて暮らす親御さんのことが気になるご家族からの、LINEでのご依頼も承ります（訪問後は写真つきでご報告）。
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-center text-pretty text-base leading-relaxed text-muted-foreground">
          看護だけではなく、大切な家族のように関わりたい——地域に「輪」をつくる、私たちの入り口です。
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/goyokiki"
            className={cn(
              buttonVariants({ variant: "default" }),
              "rounded-3xl px-7 py-6 text-base"
            )}
          >
            りたのわ御用聞きをくわしく
          </Link>
          <a
            href={siteConfig.lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-[var(--ritanowa-blue)] underline-offset-4 hover:underline"
          >
            公式LINEで相談する
          </a>
        </div>
      </div>
    </RevealSection>
  );
}
