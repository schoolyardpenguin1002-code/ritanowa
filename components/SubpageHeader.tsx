import Link from "next/link";

type SubpageHeaderProps = {
  title: string;
  description?: string;
};

export function SubpageHeader({ title, description }: SubpageHeaderProps) {
  return (
    <header className="border-b border-border/60 bg-[color-mix(in_srgb,var(--ritanowa-sand)_25%,var(--background))] px-4 py-10 sm:px-5 sm:py-12 md:px-8 md:py-20">
      <div className="mx-auto min-w-0 max-w-3xl">
        <p className="mb-3 text-base font-medium text-[var(--ritanowa-gold)] sm:text-lg">
          <Link
            href="/"
            className="rounded-full text-[var(--ritanowa-terracotta)] hover:underline"
          >
            トップ
          </Link>
          <span className="text-muted-foreground"> / </span>
          <span className="text-muted-foreground">{title}</span>
        </p>
        <h1 className="text-balance text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
