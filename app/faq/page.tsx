import type { Metadata } from "next";

import { FaqCornerContent } from "@/components/faq/FaqCornerContent";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SubpageHeader } from "@/components/SubpageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "よくある質問コーナー",
  description: `${siteConfig.nameShort}のよくある質問コーナー。料金・対象・利用の流れ・訪問内容など、ご家族からよくいただく質問にお答えします。`,
};

export default function FaqPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="よくある質問コーナー"
        description="小児精神科訪問看護について、ご家族からよくいただく質問をわかりやすくまとめました。"
      />
      <FaqCornerContent />
    </SiteLayout>
  );
}
