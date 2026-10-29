import { Heart, Palette, Sparkles, Star, Sun } from "lucide-react";

const frames = [
  { title: "ここに、みんなの絵を", note: "お絵かき・色えんぴつの作品", color: "bg-[#f7e6d5]", icon: Sun, tilt: "-rotate-2" },
  { title: "すきなもの、いっぱい", note: "折り紙や工作の写真", color: "bg-[#e7eee0]", icon: Star, tilt: "rotate-2" },
  { title: "ひとりひとりの色", note: "自由な発想をそのままに", color: "bg-[#f4e8e8]", icon: Heart, tilt: "-rotate-1" },
] as const;

export function ChildrenArtGallery() {
  return (
    <section aria-labelledby="children-art-heading" className="relative overflow-hidden border-y border-[var(--ritanowa-gold)]/25 bg-[color-mix(in_srgb,var(--ritanowa-sand)_55%,var(--background))] py-14 sm:py-20">
      <div className="pointer-events-none absolute left-3 top-5 text-[var(--ritanowa-terracotta)]/40 sm:left-12" aria-hidden="true">
        <Sparkles className="size-9 rotate-12 sm:size-12" strokeWidth={1.6} />
      </div>
      <div className="pointer-events-none absolute right-5 top-12 text-[var(--ritanowa-gold)]/70 sm:right-16" aria-hidden="true">
        <Sun className="size-12 -rotate-12 sm:size-16" strokeWidth={1.5} />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--ritanowa-gold)]/50 bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--ritanowa-sage-deep)]">
            <Palette className="size-4" aria-hidden="true" /> りたのわの小さなアトリエ
          </span>
          <h2 id="children-art-heading" className="mt-5 text-balance text-2xl font-bold leading-snug sm:text-3xl">
            みんなの「すき」が、ここに集まる。
          </h2>
          <p className="mt-4 text-pretty text-base leading-8 text-foreground/80 sm:text-lg">
            上手・下手なんて関係ない。描きたいもの、つくりたいもの。
            子どもたち一人ひとりの表現を大切にする、小さな作品コーナーです。
          </p>
        </div>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {frames.map((frame) => {
            const Icon = frame.icon;
            return (
              <div key={frame.title} className={`min-w-0 ${frame.tilt} transition-transform duration-300 hover:rotate-0`}>
                <div className="rounded-[1.6rem] border border-[#e7dccd] bg-white p-3 shadow-[0_10px_30px_rgba(78,58,39,0.09)] sm:p-4">
                  <div className={`flex aspect-[4/3] flex-col items-center justify-center rounded-[1rem] border-2 border-dashed border-[#9b8a79]/30 p-5 text-center ${frame.color}`}>
                    <Icon className="mb-4 size-12 text-[var(--ritanowa-terracotta)]/70 sm:size-14" strokeWidth={1.3} aria-hidden="true" />
                    <p className="text-base font-bold text-[var(--ritanowa-ink)] sm:text-lg">{frame.title}</p>
                    <p className="mt-2 text-sm text-[var(--ritanowa-ink)]/70">{frame.note}</p>
                  </div>
                  <p className="pt-3 text-center text-sm font-medium text-[var(--ritanowa-sage-deep)]">作品展示スペース（準備中）</p>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-muted-foreground">
          ※現在は展示場所の準備中です。実際の作品は、本人・保護者の掲載同意を確認したものだけを掲載します。
        </p>
      </div>
    </section>
  );
}
