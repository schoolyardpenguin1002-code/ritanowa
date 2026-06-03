import type { Metadata } from "next";

import { PricingPageContent } from "@/components/pricing/PricingPageContent";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "料金・費用について",
  description: `${siteConfig.nameShort}の料金のご案内。多くの場合実質自己負担0円。相談は無料。まずはLINE・お電話でお気軽に。小児精神科訪問看護・高崎市。`,
};

export default function PricingPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="料金・費用について"
        description="費用の不安を抱えたままにしないでください。相談は無料。まずはお子さまとご家族のお話をお聞かせください。"
      />
      <PricingPageContent />
    </SiteLayout>
  );
}
