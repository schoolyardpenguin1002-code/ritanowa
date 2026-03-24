import Link from "next/link";

type SubpageHeaderProps = {
  title: string;
  description?: string;
};

export function SubpageHeader({ title, description }: SubpageHeaderProps) {
  return (
    <header className="border-b border-border/60 bg-[color-mix(in_srgb,var(--ritanowa-sand)_25%,var(--background))] px-4 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-lg font-medium text-[var(--ritanowa-gold)]">
          <Link
            href="/"
            className="rounded-full text-[var(--ritanowa-terracotta)] hover:underline"
          >
            トップ
          </Link>
          <span className="text-muted-foreground"> / </span>
          <span className="text-muted-foreground">{title}</span>
        </p>
        <h1 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 text-pretty text-xl leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
