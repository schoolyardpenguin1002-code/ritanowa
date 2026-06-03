/**
 * 共生サポーター（連携団体・個人）の掲載データ
 *
 * 追加・更新はこのファイルを編集してください。
 * logoSrc は /public/supporters/ 配下の画像パス、または省略可。
 */
export type SupporterOrg = {
  id: string;
  name: string;
  description: string;
  website?: string;
  lineUrl?: string;
  instagramUrl?: string;
  /** 例: 高崎市 */
  area?: string;
  tags?: readonly string[];
  logoSrc?: string;
};

/** 掲載するサポーター一覧（下に追記） */
export const supporterOrgs: readonly SupporterOrg[] = [
  // 例:
  // {
  //   id: "sample-salon",
  //   name: "○○母子サロン",
  //   description: "親子の居場所・相談会を定期的に開催しています。",
  //   website: "https://example.com",
  //   area: "高崎市",
  //   tags: ["母子", "相談"],
  // },
] as const;
