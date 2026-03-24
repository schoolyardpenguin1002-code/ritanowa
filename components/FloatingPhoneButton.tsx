"use client";

import { Phone } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function FloatingPhoneButton() {
  return (
    <Link
      href={`tel:${siteConfig.phone}`}
      className={cn(
        "fixed z-50 flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 md:hidden",
        "bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))]"
      )}
      aria-label={`電話相談（優先） ${siteConfig.phoneDisplay}`}
    >
      <Phone className="size-7" strokeWidth={2} />
    </Link>
  );
}
