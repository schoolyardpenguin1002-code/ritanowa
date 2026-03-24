import type { Metadata } from "next";
import { MessageCircle, Phone, Stethoscope, Users } from "lucide-react";

import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { siteConfig } from "@/lib/site-config";

const steps = [
  {
    title: "ご相談・お問い合わせ",
    body: "お電話またはお問い合わせフォームより、ご状況やご不安をお聞かせください。訪問看護が適切かどうかは、かかりつけ医やケアマネジャーと相談のうえ決まります。",
    icon: Phone,
  },
  {
    title: "ケアプランと契約",
    body: "居宅サービス計画（ケアプラン）に訪問看護が位置づけられれば、サービスが始まります。必要な手続きはケアマネジャーがご案内します。",
    icon: Users,
  },
  {
    title: "訪問看護の開始",
    body: "計画に基づき、看護師がご自宅を訪問します。病状の観察・服薬支援、生活や対人の相談など、内容はお一人おひとり異なります。",
    icon: Stethoscope,
  },
  {
    title: "主治医・ケアマネとの連携",
    body: "利用者様を中心に、医療・介護・ご家族が情報を共有し、安心して療養が続くよう連携します。",
    icon: MessageCircle,
  },
] as const;

export const metadata: Metadata = {
  title: "ご利用の流れ",
  description: `訪問看護の利用までの流れの概要です。${siteConfig.nameShort}`,
};

export default function FlowPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="ご利用の流れ"
        description="実際の手続きは、かかりつけ医・ケアマネジャーの説明を優先してください。ここでは一般的な流れを示します。"
      />
      <RevealSection className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
        <ol className="space-y-10">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
            <li
              key={step.title}
              className="relative flex gap-4 rounded-3xl border border-border/80 bg-card p-6 shadow-sm md:gap-6 md:p-8"
            >
              <span className="absolute -left-1 top-6 flex size-10 items-center justify-center rounded-full bg-[var(--ritanowa-terracotta)] text-lg font-bold text-primary-foreground md:relative md:top-0">
                {index + 1}
              </span>
              <div className="min-w-0 flex-1 pt-1 md:pt-0">
                <div className="mb-3 flex items-center gap-3">
                  <StepIcon
                    className="size-7 text-[var(--ritanowa-terracotta)]"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <h2 className="text-xl font-bold md:text-2xl">{step.title}</h2>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </li>
            );
          })}
        </ol>
      </RevealSection>
    </SiteLayout>
  );
}
