import type { Metadata } from "next";

import { PhilosophyContent } from "@/components/philosophy/PhilosophyContent";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "経営理念",
  description: `${siteConfig.nameShort}のミッション・ビジョン・バリュー。利他をつなぎ地域を幸せにする使命、群馬から1,000の利他の拠点を目指すビジョン、行動指針「人のため、正しく、仲良く」をご紹介します。`,
  openGraph: {
    title: `経営理念 | ${siteConfig.nameShort}`,
    description:
      "ミッション・ビジョン・バリュー。利他をつなぎ、地域の人々を幸せにする。群馬から1,000の利他の拠点を創る未来像。",
  },
};

export default function PhilosophyPage() {
  return (
    <SiteLayout>
      <PhilosophyContent />
    </SiteLayout>
  );
}
