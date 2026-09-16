import type { Metadata } from "next";

import { PhilosophyContent } from "@/components/philosophy/PhilosophyContent";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "経営理念",
  description: `${siteConfig.nameShort}の社是・理念・ビジョン。社是「利他主義」、理念「人生を心から楽しめる土台を創造し、ウェルビーイングで世界を満たす」、ビジョン「大きな家族」、行動指針「人のため、正しく、仲良く」をご紹介します。`,
  openGraph: {
    title: `経営理念 | ${siteConfig.nameShort}`,
    description:
      "社是「利他主義」、理念「人生を心から楽しめる土台を創造し、ウェルビーイングで世界を満たす」、ビジョン「大きな家族」。",
  },
};

export default function PhilosophyPage() {
  return (
    <SiteLayout>
      <PhilosophyContent />
    </SiteLayout>
  );
}
