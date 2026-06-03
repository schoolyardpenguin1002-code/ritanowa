import Link from "next/link";

import { CuteNurseIllustration } from "@/components/staff/CuteNurseIllustration";
import { buttonVariants } from "@/lib/button-variants";
import type { RepresentativeNurseProfile } from "@/lib/staff-data";
import { cn } from "@/lib/utils";

type RepresentativeNurseCardProps = {
  nurse: RepresentativeNurseProfile;
  showStaffLink?: boolean;
};

export function RepresentativeNurseCard({
  nurse,
  showStaffLink = false,
}: RepresentativeNurseCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-border/80 bg-card shadow-md">
      <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:gap-8 md:p-10">
        <div className="mx-auto flex w-full max-w-[12.5rem] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-b from-[color-mix(in_srgb,var(--ritanowa-sand)_60%,#fff)] to-[color-mix(in_srgb,var(--ritanowa-terracotta)_8%,var(--card))] p-5 sm:mx-0">
          <CuteNurseIllustration className="h-auto w-full text-[var(--ritanowa-terracotta)]" />
        </div>
        <div className="min-w-0 flex-1 space-y-3 text-center sm:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--ritanowa-gold)]">
            {nurse.roleLabel}
          </p>
          <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{nurse.name}</h3>
          <p className="rounded-2xl border border-dashed border-[var(--ritanowa-gold)]/50 bg-[color-mix(in_srgb,var(--ritanowa-sand)_35%,var(--background))] px-4 py-3 text-lg font-medium text-foreground/90">
            {nurse.intro}
          </p>
          {showStaffLink ? (
            <Link
              href="/staff"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-2 inline-flex min-h-11 rounded-full border-[var(--ritanowa-gold)]/60"
              )}
            >
              スタッフ紹介を見る
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
