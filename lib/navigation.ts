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
    id: "pediatric",
    label: "小児精神科訪問看護",
    items: [
      { href: "/visit-nursing", label: "訪問看護とは" },
      { href: "/for-whom", label: "お子さま・ご家族へ" },
      { href: "/guide", label: "ご相談のヒント" },
      { href: "/flow", label: "利用の流れ" },
    ],
  },
  {
    id: "station",
    label: "当ステーションについて",
    items: [
      { href: "/about", label: "私たちについて" },
      { href: "/philosophy", label: "経営理念" },
      { href: "/staff", label: "スタッフ" },
    ],
  },
  {
    id: "about",
    label: "施設・トップ",
    items: [
      { href: "/#specialty", label: "小児・精神科・特化" },
      { href: "/#concern-gateway", label: "お悩みから探す" },
      { href: "/#director-message", label: "代表挨拶" },
    ],
  },
  {
    id: "use",
    label: "ご利用ガイド",
    items: [
      { href: "/pricing", label: "料金" },
      { href: "/area", label: "地域" },
      { href: "/faq", label: "よくある質問" },
    ],
  },
  {
    id: "content",
    label: "お知らせ・読み物",
    items: [
      { href: "/news", label: "お知らせ" },
      { href: "/blog", label: "ブログ" },
      { href: "/community", label: "協力サポーター・イベント" },
    ],
  },
  {
    id: "support",
    label: "ご相談・お問い合わせ",
    items: [
      { href: "/contact", label: "お問い合わせ" },
    ],
  },
] as const;
