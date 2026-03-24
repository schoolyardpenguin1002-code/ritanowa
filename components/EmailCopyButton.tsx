"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { buttonVariants } from "@/lib/button-variants";
import { cn } from "@/lib/utils";

type EmailCopyButtonProps = {
  email: string;
  className?: string;
};

export function EmailCopyButton({ email, className }: EmailCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* フォールバック */
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        buttonVariants({ variant: "secondary" }),
        "inline-flex items-center gap-2 rounded-full px-4 py-2 text-base font-medium",
        className
      )}
      aria-label={`メールアドレス ${email} をコピー`}
    >
      {copied ? (
        <>
          <Check className="size-4" aria-hidden />
          コピーしました
        </>
      ) : (
        <>
          <Copy className="size-4" aria-hidden />
          アドレスをコピー
        </>
      )}
    </button>
  );
}
