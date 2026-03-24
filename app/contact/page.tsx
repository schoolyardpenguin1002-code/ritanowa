import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/ContactForm";
import { EmailCopyButton } from "@/components/EmailCopyButton";
import { RevealSection } from "@/components/motion/RevealSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { SocialLinks } from "@/components/SocialLinks";
import { SubpageHeader } from "@/components/SubpageHeader";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: `${siteConfig.name}へのご相談・お問い合わせフォームです。`,
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
        description="フォーム送信後、メールアプリが開きます。お急ぎの場合はお電話ください。"
      />
      <RevealSection className="mx-auto max-w-3xl px-4 py-12 md:px-8 md:py-16">
        <div className="mb-10 rounded-3xl border border-border/80 bg-card p-6 text-lg leading-relaxed shadow-sm">
          <p className="font-semibold text-foreground">お電話でのお問い合わせ（タップで発信）</p>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>
              <a
                href={`tel:${siteConfig.phone}`}
                className="-mx-2 block min-h-[52px] rounded-2xl px-2 py-3 font-semibold text-[var(--ritanowa-terracotta)] transition-colors hover:bg-secondary/80 hover:underline"
              >
                <span className="block text-base font-normal">優先（携帯）</span>
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phoneLandline}`}
                className="-mx-2 block min-h-[52px] rounded-2xl px-2 py-3 font-semibold text-[var(--ritanowa-terracotta)] transition-colors hover:bg-secondary/80 hover:underline"
              >
                <span className="block text-base font-normal">固定</span>
                {siteConfig.phoneLandlineDisplay}
              </a>
              <p className="mt-1 px-2 text-sm text-muted-foreground">
                ※固定電話は出られない可能性があります
              </p>
            </li>
          </ul>
        </div>

        <div className="mb-10 rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
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

        <div className="mb-10 rounded-3xl border border-border/80 bg-card p-6 shadow-sm">
          <SocialLinks showCaption instanceId="contact" />
        </div>

        <ContactForm defaultInquiryType={defaultInquiryType} />
      </RevealSection>
    </SiteLayout>
  );
}
