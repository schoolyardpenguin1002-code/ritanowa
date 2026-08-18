import { siteConfig } from "@/lib/site-config";

export type NavLink = {
  href: string;
  label: string;
};

export type NavGroup = {
  id: string;
  label: string;
  items: readonly NavLink[];
};

/** ヘッダー「AIに相談」用（外部リンク・NotebookLM） */
export const aiConsultNavLink = {
  label: "AIに相談",
} as const;

/** ヘッダー「お問い合わせ」用（目立つCTA） */
export const contactNavLink = {
  href: "/contact",
  label: "お問い合わせ",
} as const;

/** ヘッダー「採用サイト」用 */
export const recruitNavLink = {
  href: "/recruit",
  label: "採用サイト",
} as const;

/** ヘッダー・フッター共通の階層ナビ */
export const navGroups: readonly NavGroup[] = [
  {
    id: "ritanowa",
    label: "りたのわ",
    items: [
      { href: "/about", label: "私たちについて" },
      { href: "/philosophy", label: "経営理念" },
      { href: "/#director-message", label: "代表挨拶" },
      { href: "/staff", label: "スタッフ" },
      { href: "/company", label: "運営会社" },
      { href: "/news", label: "お知らせ" },
      { href: "/blog", label: "ブログ" },
      { href: "/events", label: "イベント情報" },
      { href: "/community", label: "協力サポーター" },
      { href: "/group-home", label: "グループホーム（開設予定）" },
      { href: "/clinic", label: "連携クリニック" },
    ],
  },
  {
    id: "pediatric",
    label: "小児精神科訪問看護",
    items: [
      { href: "/#specialty", label: siteConfig.specialtyCross },
      { href: "/#concern-gateway", label: "お悩みから探す" },
      { href: "/futoko", label: "不登校のご家庭へ" },
      { href: "/visit-nursing", label: "訪問看護とは" },
      { href: "/for-whom", label: "お子さま・ご家族へ" },
      { href: "/guide", label: "ご相談のヒント" },
      { href: "/flow", label: "利用の流れ" },
      { href: "/pricing", label: "料金" },
      { href: "/area", label: "地域" },
      { href: "/faq", label: "よくある質問" },
      { href: "/resources", label: "お役立ち情報（群馬の相談窓口・制度）" },
    ],
  },
  {
    id: "goyokiki",
    label: "りたきき（御用聞きサービス）",
    items: [
      { href: "/goyokiki", label: "りたのわ御用聞きとは（自費・シニアの暮らし）" },
    ],
  },
  {
    id: "support",
    label: "お問い合わせ",
    items: [
      { href: "/contact", label: "お問い合わせ" },
    ],
  },
] as const;

/** ヘッダー用（お問い合わせは contactNavLink で別表示） */
export const headerNavGroups = navGroups.filter((g) => g.id !== "support");
