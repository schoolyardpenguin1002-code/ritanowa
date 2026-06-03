import type { Metadata } from "next";

import { CommunityPageContent } from "@/components/community/CommunityPageContent";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "共生サポーター・地域のつながり",
  description: `${siteConfig.nameShort}の共生サポーター紹介と、母子・家族向け地域イベント（共有Googleカレンダー）の一覧。群馬・高崎周辺。`,
};

export default function CommunityPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="共生サポーター・地域のつながり"
        description="連携団体のご紹介と、母子・家族向けの地域イベントをひとつのカレンダーでお届けします。"
      />
      <CommunityPageContent />
    </SiteLayout>
  );
}
