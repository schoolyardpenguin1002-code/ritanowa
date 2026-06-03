import Link from "next/link";

import { RevealSection } from "@/components/motion/RevealSection";
import { RepresentativeNurseCard } from "@/components/staff/RepresentativeNurseCard";
import { SectionTitle } from "@/components/SectionTitle";
import { buttonVariants } from "@/lib/button-variants";
import { representativeNurse } from "@/lib/staff-data";
import { cn } from "@/lib/utils";

export function RepresentativeNurseIntro() {
  return (
    <RevealSection
      id="representative-nurse"
      className="border-t border-border/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Staff"
          title="管理者／代表看護師"
          lead="訪問看護の現場をまとめる代表看護師をご紹介します。"
        />
        <div className="mt-10 md:mt-14">
          <RepresentativeNurseCard nurse={representativeNurse} showStaffLink />
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/staff"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-base text-muted-foreground underline-offset-4 hover:underline"
            )}
          >
            スタッフ紹介ページへ
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}
