import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { siteConfig } from "@/lib/site-config";

export function ContactGoogleForm() {
  return (
    <section
      id="inquiry-form"
      className="scroll-mt-28 mt-12 border-t border-border/60 pt-12"
      aria-labelledby="inquiry-form-heading"
    >
      <h2
        id="inquiry-form-heading"
        className="text-xl font-bold text-foreground sm:text-2xl"
      >
        お問い合わせフォーム
      </h2>
      <p className="mt-3 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
        お子さまの様子やご家族のお困りごとを、下記フォームからお送りください。送信後、
        <strong className="font-semibold text-foreground">3営業日以内</strong>
        に担当者よりご連絡いたします。相談のみでも大歓迎です。
      </p>
      <p className="mt-4">
        <Link
          href={siteConfig.googleContactFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-base font-semibold text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline sm:text-lg"
        >
          フォームを新しいタブで開く
          <ExternalLink className="size-4" aria-hidden />
        </Link>
      </p>

      <div className="responsive-embed mt-6 overflow-hidden">
        <iframe
          title="訪問看護りたのわ お問い合わせフォーム"
          src={siteConfig.googleContactFormEmbedUrl}
          className="!min-h-[640px] !h-[min(3200px,90vh)] w-full border-0 bg-white"
          loading="lazy"
        />
      </div>

      <p className="mt-4 text-center text-sm text-muted-foreground sm:text-base">
        フォームが表示されない場合は、
        <Link
          href={siteConfig.googleContactFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
        >
          こちら
        </Link>
        から直接ご入力ください。
      </p>
    </section>
  );
}
