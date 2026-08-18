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
      <div className="flex w-full items-center justify-between gap-2 py-2.5 pl-1 pr-3 sm:gap-3 sm:py-3 sm:pl-2 sm:pr-4 md:pr-8">
        <Link
          href="/"
          className="group flex min-w-0 max-w-[calc(100vw-5.5rem)] items-center gap-2 rounded-2xl py-1 pl-0 pr-1.5 text-left transition-colors hover:bg-secondary/50 sm:max-w-md sm:gap-3 sm:rounded-3xl sm:pr-2 md:max-w-xl md:gap-3.5"
          aria-label={`${siteConfig.headerBrandTitle} トップへ`}
        >
          <Image
            src="/apple-icon.png"
            alt=""
            width={180}
            height={180}
            className="size-10 shrink-0 rounded-xl object-cover shadow-sm sm:size-11 sm:rounded-2xl md:size-14"
            sizes="(max-width: 640px) 40px, (max-width: 768px) 44px, 56px"
            priority
          />
          <span className="min-w-0 flex-1 break-words text-pretty text-[0.7rem] font-bold leading-snug tracking-tight text-foreground min-[360px]:text-xs sm:text-sm md:text-base lg:text-lg">
            {siteConfig.headerBrandTitle}
          </span>
        </Link>

        <MainNav variant="desktop" />

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon-lg" }),
            "shrink-0 rounded-full xl:hidden"
          )}
          aria-expanded={open}
          aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <div
        className={cn(
          "max-h-[min(75vh,calc(100dvh-5rem))] overflow-y-auto overscroll-contain border-t border-border/50 bg-background xl:hidden",
          open ? "block" : "hidden"
        )}
      >
        <MainNav variant="mobile" onNavigate={() => setOpen(false)} />
      </div>
    </header>
  );
}
