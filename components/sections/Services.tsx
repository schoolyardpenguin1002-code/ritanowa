import Link from "next/link";
import {
  BookOpen,
  Clock,
  Heart,
  Pill,
  Sparkles,
  Users,
} from "lucide-react";

import { RevealRingList } from "@/components/motion/RevealRingList";
import { RevealSection } from "@/components/motion/RevealSection";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionTitle } from "@/components/SectionTitle";

const services = [
  {
    icon: Pill,
    title: "お子さまの病状観察と服薬サポート",
    description: "成長に合わせた変化を見守り、お薬に関する不安にも、主治医の指示のもと寄り添います。",
  },
  {
    icon: BookOpen,
    title: "不登校・学校生活の伴走",
    description: "登校のペースを尊重しつつ、ご家族の不安や学校との連携を、生活の文脈で整理します。",
  },
  {
    icon: Sparkles,
    title: "発達特性に配慮した関わり",
    description: "特性を「直す」のではなく、暮らしやすい工夫や自己理解を深める支援を大切にします。",
  },
  {
    icon: Users,
    title: "生活リズム・対人の悩み相談",
    description: "眠り・食事・外出など、日々のリズムと、お子さま・ご家族の対話の時間を確保します。",
  },
  {
    icon: Heart,
    title: "ご家族の心のケア",
    description: "見守りや介護育児の負担にも配慮し、支え合える関係づくりを後押しします。",
  },
  {
    icon: Clock,
    title: "緊急時の連絡体制",
    description: "いざというときに繋がる体制づくりを、地域の医療・介護と連携しながら整えています。",
  },
] as const;

export function Services() {
  return (
    <RevealSection id="services" className="py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <SectionTitle
          eyebrow="Services"
          title="小児精神科訪問看護でできること"
          lead="医師の指示とケアプランに基づき、お子さまの在宅療養とご家族の暮らしを支えます。"
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
            小児精神科訪問看護とは（詳しい説明）
          </Link>
        </p>
      </div>
    </RevealSection>
  );
}
