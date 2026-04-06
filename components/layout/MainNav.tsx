"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { buttonVariants } from "@/lib/button-variants";
import { navGroups, recruitNavLink } from "@/lib/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

function DesktopDropdown({
  groupId,
  label,
  items,
}: {
  groupId: string;
  label: string;
  items: readonly { href: string; label: string }[];
}) {
  return (
    <div className="group/nav relative">
      <button
        type="button"
        className="inline-flex items-center gap-0.5 rounded-full px-2 py-1.5 text-base font-medium text-foreground/90 transition-colors hover:bg-secondary hover:text-foreground xl:px-2.5 xl:text-lg"
        aria-expanded={false}
        aria-haspopup="menu"
        aria-controls={`nav-menu-${groupId}`}
        id={`nav-trigger-${groupId}`}
      >
        {label}
        <ChevronDown
          className="size-4 shrink-0 opacity-70 transition-transform duration-200 group-hover/nav:rotate-180"
          aria-hidden
        />
      </button>
      <div
        id={`nav-menu-${groupId}`}
        role="menu"
        aria-labelledby={`nav-trigger-${groupId}`}
        className="pointer-events-none invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover/nav:pointer-events-auto group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:pointer-events-auto group-focus-within/nav:visible group-focus-within/nav:opacity-100"
      >
        <ul className="min-w-[220px] rounded-2xl border border-border/80 bg-card p-2 shadow-lg">
          {items.map((item) => (
            <li key={item.href} role="none">
              <Link
                role="menuitem"
                href={item.href}
                className="block rounded-xl px-3 py-2.5 text-base text-foreground/95 transition-colors hover:bg-secondary xl:text-lg"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function MainNav({
  variant,
  onNavigate,
}: {
  variant: "desktop" | "mobile";
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  if (variant === "desktop") {
    return (
      <nav
        className="hidden max-w-[70%] flex-1 flex-wrap items-center justify-end gap-x-0.5 gap-y-1 lg:flex xl:max-w-none xl:gap-x-1"
        aria-label="メインナビゲーション"
      >
        {navGroups.map((g) => (
          <DesktopDropdown
            key={g.id}
            groupId={g.id}
            label={g.label}
            items={g.items}
          />
        ))}
        <Link
          href={recruitNavLink.href}
          className={cn(
            "relative ml-2 shrink-0 overflow-hidden rounded-full border-2 border-[var(--ritanowa-gold)] bg-gradient-to-br from-[color-mix(in_srgb,var(--ritanowa-gold)_28%,#fffefb)] via-[color-mix(in_srgb,var(--ritanowa-sand)_55%,#fff)] to-[color-mix(in_srgb,var(--ritanowa-terracotta)_14%,var(--background))] px-4 py-2.5 text-base font-bold tracking-tight text-[var(--ritanowa-ink)] shadow-md ring-2 ring-[var(--ritanowa-gold)]/25 transition-[filter,box-shadow] hover:brightness-[1.03] hover:shadow-lg xl:px-5 xl:text-lg"
          )}
        >
          <span className="relative z-10">{recruitNavLink.label}</span>
        </Link>
        <Link
          href={`tel:${siteConfig.phone}`}
          className={cn(
            buttonVariants({ variant: "default" }),
            "ml-1 shrink-0 rounded-full px-4 py-5 text-base shadow-sm xl:px-6 xl:text-lg"
          )}
        >
          電話
        </Link>
      </nav>
    );
  }

  return (
    <nav
      className="flex flex-col gap-3 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] lg:hidden"
      aria-label="メインナビゲーション"
    >
      <Accordion multiple className="rounded-2xl border border-border/60 bg-card/50">
        {navGroups.map((g) => (
          <AccordionItem key={g.id} value={g.id} className="border-border/60 px-2">
            <AccordionTrigger className="py-4 text-lg font-semibold hover:no-underline">
              {g.label}
            </AccordionTrigger>
            <AccordionContent className="pb-3">
              <ul className="flex flex-col gap-1">
                {g.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-2xl px-3 py-2.5 text-lg text-foreground/95 hover:bg-secondary"
                      onClick={onNavigate}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Link
        href={recruitNavLink.href}
        className="group relative overflow-hidden rounded-3xl border-2 border-[var(--ritanowa-gold)] bg-gradient-to-br from-[color-mix(in_srgb,var(--ritanowa-gold)_22%,#fffefb)] via-[color-mix(in_srgb,var(--ritanowa-sand)_50%,#fff)] to-[color-mix(in_srgb,var(--ritanowa-terracotta)_12%,var(--background))] px-5 py-5 text-left shadow-lg ring-2 ring-[var(--ritanowa-gold)]/20 transition hover:shadow-xl"
        onClick={onNavigate}
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ritanowa-gold)]">
          Recruit LP
        </span>
        <span className="mt-1 block text-xl font-bold text-foreground">
          {recruitNavLink.label}
        </span>
        <span className="mt-2 block text-base leading-snug text-muted-foreground">
          ビジョン・職場環境・働き方を掲載しています（求職者向け）
        </span>
      </Link>

      <Link
        href={pathname === "/" ? "#contact" : "/#contact"}
        className="rounded-3xl px-4 py-3 text-lg font-medium hover:bg-secondary"
        onClick={onNavigate}
      >
        地図・会社情報（フッター）
      </Link>
      <Link
        href={`tel:${siteConfig.phone}`}
        className="rounded-3xl px-4 py-3 text-lg font-semibold text-[var(--ritanowa-terracotta)]"
        onClick={onNavigate}
      >
        {siteConfig.phoneDisplay}（優先・携帯）
      </Link>
      <div className="rounded-3xl px-4 py-2 text-sm text-muted-foreground">
        <Link
          href={`tel:${siteConfig.phoneLandline}`}
          className="font-medium text-[var(--ritanowa-terracotta)] underline"
          onClick={onNavigate}
        >
          固定 {siteConfig.phoneLandlineDisplay}
        </Link>
        <span className="mt-1 block">※出られない可能性があります</span>
      </div>
    </nav>
  );
}
