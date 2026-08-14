import type { Metadata } from "next";

import { CommunityPageContent } from "@/components/community/CommunityPageContent";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "協力サポーター",
  description: `${siteConfig.nameShort}の協力サポーターのご紹介。群馬・高崎周辺で地域を支え合う仲間たちです。`,
};

export default function CommunityPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="協力サポーター"
        description="りたのわと地域で支え合う、連携団体・サポーターの皆さまをご紹介します。"
      />
      <CommunityPageContent />
    </SiteLayout>
  );
}
