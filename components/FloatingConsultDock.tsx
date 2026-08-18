"use client";

import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const LINE_GREEN = "#06C755";

function isReadyUrl(url: string) {
  return url.trim().length > 0 && /^https?:\/\//i.test(url);
}

export function FloatingConsultDock() {
  const lineReady = isReadyUrl(siteConfig.lineUrl);

  return (
    <div
      className="pointer-events-none fixed z-50 flex flex-col items-end gap-2.5"
      style={{
        bottom: "max(1rem, env(safe-area-inset-bottom))",
        right: "max(0.75rem, env(safe-area-inset-right))",
      }}
      aria-label="クイック相談"
    >
      {lineReady ? (
        <Link
          href={siteConfig.lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "pointer-events-auto flex min-h-[3rem] items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold text-white shadow-lg ring-2 ring-white/40 transition-[transform,filter] hover:brightness-105 active:scale-95 sm:min-h-[3.25rem] sm:px-5 sm:text-base",
            "animate-[pyokon-pop_0.55s_cubic-bezier(0.34,1.4,0.64,1)_0.05s_both,pyokon-float_3s_ease-in-out_1s_infinite]"
          )}
          style={{ backgroundColor: LINE_GREEN }}
        >
          <span
            className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/25 text-xs font-bold"
            aria-hidden
          >
            LINE
          </span>
          <span>公式LINEで相談</span>
        </Link>
      ) : null}
    </div>
  );
}
