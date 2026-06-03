import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { ContactLinePrimary } from "@/components/contact/ContactLinePrimary";
import { EmailCopyButton } from "@/components/EmailCopyButton";
import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SocialLinks } from "@/components/SocialLinks";
import { SubpageHeader } from "@/components/SubpageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${siteConfig.name}へのご相談・お問い合わせ。LINEが便利です。お急ぎの方はお電話ください。`,
};

type Props = {
  searchParams: Promise<{ topic?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { topic } = await searchParams;
  const defaultInquiryType = topic === "recruit" ? ("採用" as const) : undefined;
  return (
    <SiteLayout>
      <SubpageHeader
        title="お問い合わせ"
        description="LINEからのお問い合わせが便利です。なんでもお気軽にどうぞ。お急ぎの場合はお電話ください。"
      />
      <RevealSection className="page-container-narrow py-12 md:py-16">
        <ContactLinePrimary />

        <div className="mt-10 rounded-3xl border border-border/80 bg-card p-6 shadow-sm sm:p-8">
          <p className="font-semibold text-foreground">メール</p>
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`mailto:${siteConfig.email}`}
              className="min-h-[48px] break-all text-lg font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
            >
              {siteConfig.email}
            </a>
            <EmailCopyButton email={siteConfig.email} />
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
          <SocialLinks showCaption instanceId="contact" />
        </div>

        <div className="mt-12 border-t border-border/60 pt-12">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            フォームからのお問い合わせ
          </h2>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground sm:text-lg">
            送信後、お使いのメールアプリが開きます。LINE・お電話でも承ります。
          </p>
          <div className="mt-8">
            <ContactForm defaultInquiryType={defaultInquiryType} />
          </div>
        </div>
      </RevealSection>
    </SiteLayout>
  );
}
