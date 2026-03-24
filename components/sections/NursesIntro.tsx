import Image from "next/image";
import Link from "next/link";

import { RevealRingList } from "@/components/motion/RevealRingList";
import { RevealSection } from "@/components/motion/RevealSection";
import { SectionTitle } from "@/components/SectionTitle";
import { nurses } from "@/lib/staff-data";

export function NursesIntro() {
  return (
    <RevealSection id="nurses" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Team"
          title="看護師のご紹介"
          lead="訪問看護を担うスタッフです。掲載はイメージ用の写真・仮名です。"
        />

        <RevealRingList className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {nurses.map((n) => (
            <article
              key={n.id}
              className="flex flex-col overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm"
            >
              <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
                <Image
                  src={n.imageSrc}
                  alt={n.imageAlt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
                <div>
                  <h3 className="text-xl font-bold md:text-2xl">{n.name}</h3>
                  <p className="text-base text-muted-foreground">
                    {n.nameKana} ／ {n.title}
                  </p>
                </div>
                <p className="text-lg leading-relaxed text-foreground/90">{n.intro}</p>
              </div>
            </article>
          ))}
        </RevealRingList>

        <p className="mt-12 text-center text-lg">
          <Link
            href="/staff"
            className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
          >
            スタッフ紹介ページへ
          </Link>
        </p>
      </div>
    </RevealSection>
  );
}
