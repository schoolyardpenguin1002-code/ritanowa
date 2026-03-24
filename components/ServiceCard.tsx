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
        "flex h-full flex-col gap-4 rounded-3xl border border-border/80 bg-card p-8 shadow-sm transition-shadow hover:shadow-md",
        className
      )}
    >
      <div
        className="flex size-14 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--ritanowa-terracotta)_12%,transparent)] text-[var(--ritanowa-terracotta)]"
        aria-hidden
      >
        <Icon className="size-7" strokeWidth={1.75} />
      </div>
      <h3 className="text-xl font-semibold leading-snug">{title}</h3>
      <p className="text-lg leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}
