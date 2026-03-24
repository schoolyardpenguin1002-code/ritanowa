import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  lead,
  align = "center",
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-3xl space-y-4 px-4",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-base font-semibold tracking-wide text-[var(--ritanowa-gold)] md:text-lg">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-bold leading-snug tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {lead ? (
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
