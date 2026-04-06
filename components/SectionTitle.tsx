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
        "mx-auto w-full max-w-3xl min-w-0 space-y-3 px-4 sm:space-y-4",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-[var(--ritanowa-gold)] sm:text-base md:text-lg">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {lead ? (
        <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
