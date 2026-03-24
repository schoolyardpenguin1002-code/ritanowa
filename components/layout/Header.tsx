"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { MainNav } from "@/components/layout/MainNav";
import { buttonVariants } from "@/lib/button-variants";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-[color-mix(in_srgb,var(--background)_88%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 md:px-8">
        <Link
          href="/"
          className="group flex min-w-0 flex-col rounded-3xl px-1 py-1 text-left transition-colors"
        >
          <span className="text-xs font-medium text-muted-foreground">
            {siteConfig.nameKana}
          </span>
          <span className="truncate text-lg font-bold tracking-tight text-foreground md:text-xl">
            {siteConfig.nameShort}
          </span>
        </Link>

        <MainNav variant="desktop" />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon-lg" }),
            "shrink-0 rounded-full lg:hidden"
          )}
          aria-expanded={open}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          "max-h-[min(75vh,calc(100dvh-5rem))] overflow-y-auto border-t border-border/50 bg-background lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <MainNav variant="mobile" onNavigate={() => setOpen(false)} />
      </div>
    </header>
  );
}
