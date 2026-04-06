import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "flex h-full min-w-0 flex-col gap-3 rounded-3xl border border-border/80 bg-card p-5 shadow-sm transition-shadow hover:shadow-md sm:gap-4 sm:p-8",
        className
      )}
    >
      <div
        className="flex size-14 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--ritanowa-terracotta)_12%,transparent)] text-[var(--ritanowa-terracotta)]"
        aria-hidden
      >
        <Icon className="size-7" strokeWidth={1.75} />
      </div>
      <h3 className="text-lg font-semibold leading-snug sm:text-xl">{title}</h3>
      <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
    </article>
  );
}
