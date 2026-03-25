"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
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
          className="group flex min-w-0 max-w-[min(100%,22rem)] items-center gap-3 rounded-3xl py-1 pl-0.5 pr-2 text-left transition-colors hover:bg-secondary/50 sm:max-w-md md:max-w-xl md:gap-3.5"
          aria-label={`${siteConfig.headerBrandTitle} トップへ`}
        >
          <Image
            src="/apple-icon.png"
            alt=""
            width={180}
            height={180}
            className="size-11 shrink-0 rounded-2xl object-cover shadow-sm sm:size-12 md:size-14"
            sizes="(max-width: 640px) 44px, (max-width: 768px) 48px, 56px"
            priority
          />
          <span className="min-w-0 flex-1 text-pretty text-sm font-bold leading-snug tracking-tight text-foreground sm:text-base md:text-lg">
            {siteConfig.headerBrandTitle}
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
