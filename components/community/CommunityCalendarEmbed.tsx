import Link from "next/link";
import { CalendarDays, ExternalLink } from "lucide-react";

import {
  getCommunityCalendarEmbedSrc,
  getCommunityCalendarId,
  getCommunityCalendarOpenUrl,
} from "@/lib/google-calendar";

type CommunityCalendarEmbedProps = {
  /** AGENDA=一覧寄り、MONTH=月表示 */
  defaultMode?: "AGENDA" | "MONTH";
};

export function CommunityCalendarEmbed({
  defaultMode = "AGENDA",
}: CommunityCalendarEmbedProps) {
  const calendarId = getCommunityCalendarId();

  if (!calendarId) {
    return (
      <div className="rounded-3xl border-2 border-dashed border-[var(--ritanowa-gold)]/45 bg-[color-mix(in_srgb,var(--ritanowa-sand)_35%,var(--card))] p-8 text-center md:p-12">
        <CalendarDays
          className="mx-auto size-12 text-[var(--ritanowa-gold)]"
          strokeWidth={1.5}
          aria-hidden
        />
        <p className="mt-4 text-lg font-semibold text-foreground">
          イベントカレンダーは準備中です
        </p>
        <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
          母子・家族向けの地域イベントを、共有Googleカレンダーで掲載予定です。公開までしばらくお待ちください。
        </p>
      </div>
    );
  }

  const embedSrc = getCommunityCalendarEmbedSrc(calendarId, defaultMode);
  const openUrl = getCommunityCalendarOpenUrl(calendarId);

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm">
        <iframe
          title="地域イベントカレンダー（母子・家族向け）"
          src={embedSrc}
          className="h-[min(720px,75vh)] w-full border-0 bg-white"
          loading="lazy"
        />
      </div>
      <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center text-sm text-muted-foreground sm:text-base">
        <span>日時・場所・申込は各イベントの詳細をご確認ください。</span>
        <Link
          href={openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-[var(--ritanowa-terracotta)] underline-offset-4 hover:underline"
        >
          Googleカレンダーで開く
          <ExternalLink className="size-4" aria-hidden />
        </Link>
      </p>
    </div>
  );
}
