export type NavLink = {
  href: string;
  label: string;
};

export type NavGroup = {
  id: string;
  label: string;
  items: readonly NavLink[];
};

/** ヘッダー「採用サイト」用（ご相談・お問い合わせと電話の間に表示） */
export const recruitNavLink = {
  href: "/recruit",
  label: "採用サイト",
} as const;

/** ヘッダー・フッター共通の階層ナビ */
export const navGroups: readonly NavGroup[] = [
  {
    id: "about",
    label: "施設・トップ",
    items: [
      { href: "/#strengths", label: "3つの約束" },
      { href: "/#director-message", label: "代表挨拶" },
      { href: "/#services", label: "サービス" },
      { href: "/staff", label: "スタッフ" },
    ],
  },
  {
    id: "use",
    label: "ご利用ガイド",
    items: [
      { href: "/flow", label: "利用の流れ" },
      { href: "/pricing", label: "料金" },
      { href: "/area", label: "地域" },
    ],
  },
  {
    id: "content",
    label: "お知らせ・読み物",
    items: [
      { href: "/news", label: "お知らせ" },
      { href: "/blog", label: "ブログ" },
      { href: "/guide", label: "ご相談のヒント" },
    ],
  },
  {
    id: "support",
    label: "ご相談・お問い合わせ",
    items: [
      { href: "/faq", label: "よくある質問" },
      { href: "/contact", label: "お問い合わせ" },
    ],
  },
] as const;
