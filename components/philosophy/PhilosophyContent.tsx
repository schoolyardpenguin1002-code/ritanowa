"use client";

import { AnimatePresence, animate, motion, useReducedMotion } from "framer-motion";
import { Heart, Scale, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { RevealSection } from "@/components/motion/RevealSection";
import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

const HERO_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=2000&q=80",
    alt: "夕暮れの浜辺で手をつなぐ大家族",
  },
  {
    src: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=2000&q=80",
    alt: "リビングで子どもたちと過ごす母親",
  },
  {
    src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&w=2000&q=80",
    alt: "子どもたちを抱いて笑う父親",
  },
] as const;

function VisionHero() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(
      () => setIndex((v) => (v + 1) % HERO_IMAGES.length),
      6000
    );
    return () => clearInterval(timer);
  }, [reduce]);

  const current = HERO_IMAGES[index];

  return (
    <div className="relative h-[58vh] min-h-[420px] w-full overflow-hidden md:h-[68vh]">
      <AnimatePresence initial={false}>
        <motion.div
          key={current.src}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: reduce ? 1 : 1.07 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.8, ease: "easeInOut" },
            scale: { duration: 7.5, ease: "linear" },
          }}
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/20" />

      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.3em] text-white/85 md:text-sm">
            Vision
          </p>
          <h2 className="mt-4 text-balance font-serif font-bold leading-[1.25] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] text-[clamp(1.8rem,6.2vw,4.2rem)]">
            <span className="inline-block">大きな家族。</span>
          </h2>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {HERO_IMAGES.map((img, i) => (
          <button
            key={img.src}
            type="button"
            aria-label={`写真 ${i + 1} を表示`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-6 bg-white/95" : "w-1.5 bg-white/45"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

const VISION_TARGET = 1000;

function VisionThousand() {
  const [n, setN] = useState(0);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (reduce) {
      setN(VISION_TARGET);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let controls: ReturnType<typeof animate> | undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        const hit = entries[0];
        if (!hit?.isIntersecting || started.current) return;
        started.current = true;
        controls = animate(0, VISION_TARGET, {
          duration: 2.35,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (latest) => setN(Math.round(latest)),
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      controls?.stop();
    };
  }, [reduce]);

  return (
    <span
      ref={ref}
      className="inline-block min-w-[4ch] tabular-nums tracking-tight text-[var(--ritanowa-sage-deep)]"
      aria-hidden
    >
      {n.toLocaleString("ja-JP")}
    </span>
  );
}

const valueCards = [
  {
    title: "人のため",
    body: "常に相手の立場に立ち、付加価値を追求する。",
    icon: Heart,
  },
  {
    title: "正しく",
    body: "科学的・合理的な仕組みを構築し、誠実に運営する。",
    icon: Scale,
  },
  {
    title: "仲良く",
    body: "互いを尊重し、チーム一丸となって目標へ向かう。",
    icon: Users,
  },
] as const;

export function PhilosophyContent() {
  return (
    <div className="bg-[color-mix(in_srgb,var(--ritanowa-sage-light)_55%,var(--background))]">
      <VisionHero />
      <header className="relative overflow-hidden border-b border-[color-mix(in_srgb,var(--ritanowa-sage)_18%,transparent)] px-4 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, color-mix(in srgb, var(--ritanowa-sage) 25%, transparent) 0%, transparent 45%),
              radial-gradient(circle at 85% 60%, color-mix(in srgb, var(--ritanowa-gold) 18%, transparent) 0%, transparent 50%)`,
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-[var(--ritanowa-sage)] sm:text-sm">
            Philosophy
          </p>
          <h1 className="mt-6 font-serif text-3xl font-semibold leading-tight tracking-tight text-[var(--ritanowa-sage-deep)] sm:text-4xl md:text-5xl">
            経営理念
          </h1>
          <p className="mt-10 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ritanowa-sage)]">
            社是
          </p>
          <p className="mt-3 font-serif text-2xl font-semibold tracking-[0.12em] text-[var(--ritanowa-sage-deep)] sm:text-3xl">
            利他主義
          </p>
          <p className="mt-10 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ritanowa-sage)]">
            理念
          </p>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-pretty text-xl font-medium leading-relaxed text-[var(--ritanowa-sage-deep)] sm:text-2xl md:text-[1.7rem] md:leading-[1.7]">
            人生を心から楽しめる土台を創造し、
            <br className="hidden sm:block" />
            ウェルビーイングで世界を満たす。
          </p>
          <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-[color-mix(in_srgb,var(--ritanowa-sage)_16%,transparent)] bg-card/80 px-6 py-5 backdrop-blur-sm">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ritanowa-sage)]">
              自社におけるウェルビーイングの定義
            </p>
            <p className="mt-2 font-serif text-base font-medium leading-relaxed text-[var(--ritanowa-sage-deep)] sm:text-lg">
              精神的・肉体的・社会的に満たされ、持続可能な状態。
            </p>
          </div>
        </div>
      </header>

      <RevealSection className="mx-auto max-w-4xl px-4 py-16 sm:px-5 md:px-8 md:py-24">
        <div className="rounded-[2rem] border border-[color-mix(in_srgb,var(--ritanowa-sage)_12%,transparent)] bg-card/90 p-8 shadow-sm backdrop-blur-sm sm:p-12 md:p-16">
          <p className="text-center font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ritanowa-sage)]">
            Mission
          </p>
          <p className="mt-2 text-center font-sans text-sm text-muted-foreground">
            私たちの使命
          </p>
          <p className="mx-auto mt-10 max-w-2xl text-center font-serif text-2xl font-medium leading-relaxed tracking-wide text-[var(--ritanowa-sage-deep)] sm:text-3xl md:text-[1.85rem] md:leading-[1.65] lg:text-4xl">
            利他をつなぎ、地域の人々を幸せにする
          </p>
        </div>
      </RevealSection>

      <RevealSection className="border-t border-[color-mix(in_srgb,var(--ritanowa-sage)_10%,transparent)] bg-[color-mix(in_srgb,var(--card)_92%,var(--ritanowa-sage-light))] px-4 py-16 sm:px-5 md:px-8 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-center font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ritanowa-sage)]">
            Vision
          </p>
          <p className="mt-2 text-center font-sans text-sm text-muted-foreground">
            私たちが目指す未来
          </p>

          <p className="mx-auto mt-10 max-w-3xl text-center font-serif font-bold leading-snug tracking-tight text-[var(--ritanowa-sage-deep)] text-[clamp(1.7rem,5vw,3rem)]">
            <span className="inline-block">大きな家族。</span>
          </p>

          <p className="sr-only">
            ビジョン：大きな家族。群馬から1,000の利他の拠点を創り、子供たちの未来を照らすインフラになる。
          </p>
          <div
            className="mt-12 flex flex-col items-center gap-2 text-center sm:gap-3"
            aria-hidden
          >
            <p className="font-sans text-lg font-medium text-[var(--ritanowa-sage-deep)] sm:text-xl">
              群馬から
            </p>
            <div className="flex flex-wrap items-end justify-center gap-x-2 gap-y-1 sm:gap-x-3">
              <span className="font-serif text-6xl font-bold leading-none text-[var(--ritanowa-sage)] sm:text-7xl md:text-8xl lg:text-9xl">
                <VisionThousand />
              </span>
              <span className="pb-1 font-serif text-2xl font-semibold text-[var(--ritanowa-sage-deep)] sm:pb-2 sm:text-3xl md:text-4xl">
                の利他の拠点を創り、
              </span>
            </div>
            <p className="max-w-3xl font-serif text-xl font-medium leading-snug text-[var(--ritanowa-sage-deep)] sm:text-2xl md:text-[1.65rem] md:leading-relaxed">
              子供たちの未来を照らすインフラになる
            </p>
          </div>

          <p className="mx-auto mt-12 max-w-2xl font-sans text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            大きな家族のように頼れて、少しおせっかいなくらい気にかけてくれる——そんな拠点が1,000、網の目のようにつながり、地域全体を温かく包み込むセーフティネットになる。今日の支援を、次の世代の子どもたちが安心して暮らせる街の礎にしていきます。
          </p>
        </div>
      </RevealSection>

      <RevealSection className="mx-auto max-w-6xl px-4 py-16 sm:px-5 md:px-8 md:py-24">
        <p className="text-center font-sans text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ritanowa-sage)]">
          Value
        </p>
        <p className="mt-2 text-center font-sans text-sm text-muted-foreground">
          私たちの行動指針
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-center font-serif text-xl font-medium text-[var(--ritanowa-sage-deep)] sm:text-2xl">
          人のため、正しく、仲良く
        </p>

        <ul className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {valueCards.map(({ title, body, icon: Icon }) => (
            <li
              key={title}
              className="flex flex-col rounded-3xl border border-[color-mix(in_srgb,var(--ritanowa-sage)_14%,transparent)] bg-card p-7 shadow-sm transition-shadow hover:shadow-md sm:p-8"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--ritanowa-sage-light)_80%,var(--card))] text-[var(--ritanowa-sage)]">
                <Icon className="size-6" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-[var(--ritanowa-sage-deep)]">
                {title}
              </h3>
              <p className="mt-3 flex-1 font-sans text-base leading-relaxed text-muted-foreground">
                {body}
              </p>
            </li>
          ))}
        </ul>
      </RevealSection>

      <RevealSection className="border-t border-[color-mix(in_srgb,var(--ritanowa-sage)_10%,transparent)] px-4 py-14 sm:px-5 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <p className="font-sans text-sm leading-relaxed text-muted-foreground">
            ご相談・採用については、お気軽にお問い合わせください。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "min-h-12 rounded-full border-2 border-[var(--ritanowa-accent-red)] bg-transparent px-8 font-semibold text-[var(--ritanowa-accent-red)] shadow-none transition-colors hover:bg-[var(--ritanowa-accent-red)] hover:text-white"
              )}
            >
              お問い合わせ
            </Link>
            <Link
              href="/recruit"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "min-h-12 rounded-full px-8 font-semibold"
              )}
            >
              採用情報
            </Link>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}
