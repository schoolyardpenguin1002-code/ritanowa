import type { Metadata } from "next";

import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { faqItems } from "@/lib/faq-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "よくある質問",
  description: `${siteConfig.name}へのよくあるご質問と回答です。`,
};

export default function FaqPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="よくある質問"
        description="ご利用・費用・連携など、よくいただく質問をまとめました。"
      />
      <RevealSection className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
        <FaqAccordion items={faqItems} />
      </RevealSection>
    </SiteLayout>
  );
}
