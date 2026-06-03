import type { Metadata } from "next";

import { ContactGoogleForm } from "@/components/contact/ContactGoogleForm";
import { ContactLinePrimary } from "@/components/contact/ContactLinePrimary";
import { EmailCopyButton } from "@/components/EmailCopyButton";
import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SocialLinks } from "@/components/SocialLinks";
import { SubpageHeader } from "@/components/SubpageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${siteConfig.name}へのご相談・お問い合わせ。LINEが便利です。フォーム・お電話も承ります。`,
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <SubpageHeader
        title="お問い合わせ"
        description="LINEからのお問い合わせが便利です。なんでもお気軽にどうぞ。くわしい内容は下記フォーム、お急ぎの場合はお電話ください。"
      />
      <RevealSection className="page-container-narrow py-12 md:py-16">
        <ContactLinePrimary />

        <ContactGoogleForm />

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
      </RevealSection>
    </SiteLayout>
  );
}
