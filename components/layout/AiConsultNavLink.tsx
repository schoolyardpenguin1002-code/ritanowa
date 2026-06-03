import Link from "next/link";
import { ExternalLink, Sparkles } from "lucide-react";

import { aiConsultNavLink } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type AiConsultNavLinkProps = {
  variant: "desktop" | "mobile" | "footer";
  className?: string;
  onNavigate?: () => void;
};

export function AiConsultNavLink({
  variant,
  className,
  onNavigate,
}: AiConsultNavLinkProps) {
  const href = siteConfig.aiConsultUrl;

  if (variant === "mobile") {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onNavigate}
        className={cn(
          "group relative overflow-hidden rounded-3xl border-2 border-[color-mix(in_srgb,#6366f1_55%,var(--border))] bg-gradient-to-br from-[color-mix(in_srgb,#6366f1_18%,#fff)] via-[color-mix(in_srgb,#8b5cf6_12%,#fffefb)] to-[color-mix(in_srgb,var(--ritanowa-sand)_40%,#fff)] px-5 py-5 text-left shadow-lg ring-2 ring-[color-mix(in_srgb,#6366f1_25%,transparent)] transition hover:shadow-xl",
          className
        )}
      >
        <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#6366f1]">
          <Sparkles className="size-4" aria-hidden />
          AI Consult
        </span>
        <span className="mt-1 flex items-center gap-2 text-xl font-bold text-foreground">
          {aiConsultNavLink.label}
          <ExternalLink className="size-4 opacity-70" aria-hidden />
        </span>
        <span className="mt-2 block text-base leading-snug text-muted-foreground">
          24時間いつでも、りたのわの情報をもとにAIがご質問にお答えします（外部ページが開きます）
        </span>
      </Link>
    );
  }

  if (variant === "footer") {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group flex items-center justify-between gap-3 rounded-2xl border-2 border-[color-mix(in_srgb,#6366f1_45%,var(--border))] bg-gradient-to-r from-[color-mix(in_srgb,#6366f1_12%,var(--card))] to-[color-mix(in_srgb,#8b5cf6_8%,var(--card))] px-4 py-3 text-base font-bold text-foreground shadow-sm transition hover:shadow-md",
          className
        )}
      >
        <span className="flex items-center gap-2">
          <Sparkles className="size-5 text-[#6366f1]" aria-hidden />
          {aiConsultNavLink.label}
        </span>
        <ExternalLink className="size-4 text-muted-foreground" aria-hidden />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onNavigate}
      className={cn(
        "relative ml-1 inline-flex shrink-0 items-center gap-1.5 overflow-hidden rounded-full border-2 border-[color-mix(in_srgb,#6366f1_50%,var(--border))] bg-gradient-to-br from-[color-mix(in_srgb,#6366f1_22%,#fff)] via-[color-mix(in_srgb,#8b5cf6_14%,#fffefb)] to-[color-mix(in_srgb,var(--ritanowa-sand)_45%,#fff)] px-3.5 py-2.5 text-base font-bold tracking-tight text-[#4338ca] shadow-md ring-2 ring-[color-mix(in_srgb,#6366f1_20%,transparent)] transition-[filter,box-shadow] hover:brightness-[1.03] hover:shadow-lg xl:gap-2 xl:px-4 xl:py-2.5 xl:text-lg",
        className
      )}
    >
      <Sparkles className="size-4 shrink-0 xl:size-[1.125rem]" aria-hidden />
      <span>{aiConsultNavLink.label}</span>
      <ExternalLink className="size-3.5 opacity-60" aria-hidden />
    </Link>
  );
}
