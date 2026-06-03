/**
 * 連絡先・地図の一部は運用に合わせて更新してください。
 */
export const siteConfig = {
  name: "訪問看護ステーション りたのわ",
  nameShort: "りたのわ",
  nameKana: "りたのわ",
  /** ヘッダーロゴ横の表記（ファビコンと並べる） */
  headerBrandTitle: "訪問看護ステーションりたのわ",
  /** サイト全体の専門領域（SEO・ヒーロー等で使用） */
  specialtyShort: "小児精神科特化型",
  specialtyPillars: ["小児", "精神科", "特化"] as const,
  concept:
    "想いが巡り、心が整う。お子さまとご家族に寄り添う、小児精神科の訪問看護。",
  /** 優先の連絡先（携帯） */
  phone: "09071816814",
  phoneDisplay: "090-7181-6814",
  /** 固定電話（出られない場合があります） */
  phoneLandline: "0273950443",
  phoneLandlineDisplay: "027-395-0443",
  email: "ritanowa.official@gmail.com",
  /** 必要に応じて郵便番号を追記（例: 〒xxx-xxxx） */
  addressLine: "群馬県高崎市浜尻町209-5",
  addressLines: ["群馬県高崎市浜尻町209-5"] as const,
  /** 主な担当エリア（市町村名・表示順） */
  serviceAreaMunicipalities: [
    "高崎市",
    "前橋市",
    "安中市",
    "富岡市",
    "藤岡市",
    "甘楽郡",
  ] as const,
  /** 担当エリアの補足（訪問可否は個別案内など） */
  serviceAreaNote:
    "お住まいの地域・体調・スケジュールにより訪問可否が異なります。お気軽にご相談ください。",
  /** 事務・お電話の受付時間（表示用） */
  officeHoursLine: "平日 9:00〜18:00",
  /** 受付時間の補足 */
  officeHoursNote:
    "上記以外の時間帯も、お気軽にご相談ください。フットワークよく対応いたします。",
  /** Googleマップ埋め込み（住所検索ベース） */
  mapEmbedUrl:
    "https://www.google.com/maps?q=%E7%BE%A4%E9%A6%AC%E7%9C%8C%E9%AB%98%E5%B4%8E%E5%B8%82%E6%B5%9C%E5%B0%BB%E7%94%BA209-5&hl=ja&z=17&output=embed",
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=%E7%BE%A4%E9%A6%AC%E7%9C%8C%E9%AB%98%E5%B4%8E%E5%B8%82%E6%B5%9C%E5%B0%BB%E7%94%BA209-5",
  /** お問い合わせ Google フォーム（閲覧用） */
  googleContactFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdZq6FDmI8MBxFizLvtAMB3e5ubbURu6Vpqjeh41VJrS1NfjQ/viewform",
  /** お問い合わせ Google フォーム（サイト埋め込み用） */
  googleContactFormEmbedUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdZq6FDmI8MBxFizLvtAMB3e5ubbURu6Vpqjeh41VJrS1NfjQ/viewform?embedded=true",
  /** AI相談（NotebookLM） */
  aiConsultUrl:
    "https://notebooklm.google.com/notebook/0792ec83-6dcf-4dfc-8ddb-aa4196e674ac",
  /** 公式LINE（https://… を入れるとアイコンがリンク有効になります） */
  lineUrl: "https://lin.ee/tuWuLYJ",
  /** 公式Instagram */
  instagramUrl: "",
  /** サイト共通：連携先の表記 */
  regionalPartners: "地域の公的機関・行政・NPO",
  regionalPartnersHonorific: "地域の公的機関・行政・NPO様",
} as const;
