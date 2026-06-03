/**
 * 方式A: 共有Googleカレンダー1本をサイトに埋め込む
 *
 * Vercel 等では NEXT_PUBLIC_GOOGLE_COMMUNITY_CALENDAR_ID に
 * カレンダーID（xxxx@group.calendar.google.com）を設定してください。
 */

const TIMEZONE = "Asia/Tokyo";

function encodeCalendarId(id: string): string {
  return encodeURIComponent(id.trim());
}

/** 環境変数から共有カレンダーIDを取得 */
export function getCommunityCalendarId(): string | null {
  const id = process.env.NEXT_PUBLIC_GOOGLE_COMMUNITY_CALENDAR_ID?.trim();
  return id || null;
}

/** 埋め込み用 iframe の src（一覧＝AGENDA、月表示タブも利用可） */
export function getCommunityCalendarEmbedSrc(
  calendarId: string,
  mode: "AGENDA" | "MONTH" = "AGENDA"
): string {
  const src = encodeCalendarId(calendarId);
  const params = new URLSearchParams({
    src,
    ctz: TIMEZONE,
    hl: "ja",
    mode,
    showTitle: "0",
    showNav: "1",
    showDate: "1",
    showPrint: "0",
    showTabs: "1",
    showCalendars: "0",
  });
  return `https://calendar.google.com/calendar/embed?${params.toString()}`;
}

/** Googleカレンダーで開く（購読・詳細確認用） */
export function getCommunityCalendarOpenUrl(calendarId: string): string {
  return `https://calendar.google.com/calendar/u/0/r?cid=${encodeCalendarId(calendarId)}`;
}
