import Link from "next/link";
import {
  Clock,
  Heart,
  Pill,
  UserRound,
  Users,
} from "lucide-react";

import { RevealRingList } from "@/components/motion/RevealRingList";
import { RevealSection } from "@/components/motion/RevealSection";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionTitle } from "@/components/SectionTitle";

const services = [
  {
    icon: Pill,
    title: "病状の観察と服薬サポート",
    description: "状態の変化を丁寧に見守り、お薬に関する不安にも寄り添います。",
  },
  {
    icon: Users,
    title: "対人関係や日常生活の悩み相談",
    description: "暮らしの中の困りごとを、落ち着いて話せる時間として大切にします。",
  },
  {
    icon: UserRound,
    title: "社会復帰・リハビリへの伴走",
    description: "ご本人のペースを尊重しながら、一歩ずつ前へ進めるよう支えます。",
  },
  {
    icon: Clock,
    title: "24時間365日の緊急対応",
    description: "いざというときに繋がる体制づくりを、地域と連携しながら整えています。",
  },
  {
    icon: Heart,
    title: "ご家族の心のケア",
    description: "ご家族の負担やお気持ちにも配慮し、支え合える関係づくりを後押しします。",
  },
] as const;

export function Services() {
  return (
    <RevealSection id="services" className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <SectionTitle
          eyebrow="Services"
          title="サービス内容"
          lead="精神科訪問看護として、医療と生活のあいだを支える支援を行います。"
        />

        <RevealRingList className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              icon={s.icon}
              title={s.title}
              description={s.description}
            />
          ))}
        </RevealRingList>

        <p className="mt-12 text-center text-lg">
          <Link
            href="/visit-nursing"
            className="font-semibold text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
          >
            訪問看護とは（詳しい説明）
          </Link>
        </p>
      </div>
    </RevealSection>
  );
}
