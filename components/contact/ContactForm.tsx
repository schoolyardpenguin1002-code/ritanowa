"use client";

import { useActionState, useEffect } from "react";

import { submitContact, type ContactState } from "@/app/actions/contact";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const initialState: ContactState | null = null;

type InquiryType = "利用相談" | "採用" | "取材・その他";

export function ContactForm({
  defaultInquiryType,
}: {
  /** URLパラメータ等で事前選択（例: 採用ページから） */
  defaultInquiryType?: InquiryType;
} = {}) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  useEffect(() => {
    if (state?.ok) {
      window.location.href = state.mailto;
    }
  }, [state]);

  return (
    <form action={formAction} className="mx-auto max-w-2xl space-y-8">
      {state && !state.ok ? (
        <p className="rounded-3xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-lg text-destructive">
          {state.error}
        </p>
      ) : null}

      <div className="space-y-2">
        <label htmlFor="name" className="text-lg font-semibold">
          お名前 <span className="text-[var(--ritanowa-terracotta)]">*</span>
        </label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="w-full rounded-3xl border border-input bg-card px-4 py-3 text-lg outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-lg font-semibold">
          電話番号
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder={`例: ${siteConfig.phoneDisplay}（優先）`}
          className="w-full rounded-3xl border border-input bg-card px-4 py-3 text-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-lg font-semibold">
          メールアドレス
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-3xl border border-input bg-card px-4 py-3 text-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="type" className="text-lg font-semibold">
          お問い合わせ種別
        </label>
        <select
          id="type"
          name="type"
          className="w-full rounded-3xl border border-input bg-card px-4 py-3 text-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
          defaultValue={defaultInquiryType ?? ""}
        >
          <option value="" disabled>
            選択してください
          </option>
          <option value="利用相談">利用相談</option>
          <option value="採用">採用・見学</option>
          <option value="取材・その他">取材・その他</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-lg font-semibold">
          お問い合わせ内容 <span className="text-[var(--ritanowa-terracotta)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full resize-y rounded-3xl border border-input bg-card px-4 py-3 text-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      <div className="flex items-start gap-3 rounded-3xl border border-border/80 bg-card/50 p-4">
        <input
          id="agree"
          name="agree"
          type="checkbox"
          className="mt-1 size-5 rounded border-input"
        />
        <label htmlFor="agree" className="text-base leading-relaxed text-muted-foreground">
          <a href="/privacy" className="font-medium text-[var(--ritanowa-terracotta)] underline">
            プライバシーポリシー
          </a>
          の内容を確認し、個人情報の取扱いに同意します。
        </label>
      </div>

      <p className="text-base text-muted-foreground">
        送信後、お使いのメールアプリが開きます。宛先は {siteConfig.email}{" "}
        です。届かない場合はお電話（優先 {siteConfig.phoneDisplay}
        ／固定 {siteConfig.phoneLandlineDisplay}
        <span className="text-sm"> ※固定は出られない可能性があります</span>
        ）もご利用ください。
      </p>

      <button
        type="submit"
        disabled={pending}
        className={cn(
          buttonVariants({ variant: "default" }),
          "min-h-14 w-full justify-center rounded-3xl px-8 py-6 text-lg disabled:opacity-60"
        )}
      >
        {pending ? "送信中…" : "内容を確認して送信"}
      </button>
    </form>
  );
}
