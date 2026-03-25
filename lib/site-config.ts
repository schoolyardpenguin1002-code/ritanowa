/**
 * 連絡先・地図の一部は運用に合わせて更新してください。
 */
export const siteConfig = {
  name: "訪問看護ステーション りたの輪",
  nameShort: "りたの輪",
  nameKana: "りたのわ",
  /** ヘッダーロゴ横の表記（ファビコンと並べる） */
  headerBrandTitle: "訪問看護ステーションりたの輪",
  concept:
    "想いが巡り、心が整う。利他の心が循環する、新しい訪問看護。",
  /** 優先の連絡先（携帯） */
  phone: "09071816814",
  phoneDisplay: "090-7181-6814",
  /** 固定電話（出られない場合があります） */
  phoneLandline: "0273950443",
  phoneLandlineDisplay: "027-395-0443",
  email: "schoolyard.penguin.1002@gmail.com",
  /** 必要に応じて郵便番号を追記（例: 〒xxx-xxxx） */
  addressLine: "群馬県高崎市浜尻町209-5",
  addressLines: ["群馬県高崎市浜尻町209-5"] as const,
  /** 指定訪問看護事業所番号（確定後に入力） */
  officeNumber: "（指定番号は確定次第に記載）",
  /** Googleマップ埋め込み（住所検索ベース） */
  mapEmbedUrl:
    "https://www.google.com/maps?q=%E7%BE%A4%E9%A6%AC%E7%9C%8C%E9%AB%98%E5%B4%8E%E5%B8%82%E6%B5%9C%E5%B0%BB%E7%94%BA209-5&hl=ja&z=17&output=embed",
  mapSearchUrl:
    "https://www.google.com/maps/search/?api=1&query=%E7%BE%A4%E9%A6%AC%E7%9C%8C%E9%AB%98%E5%B4%8E%E5%B8%82%E6%B5%9C%E5%B0%BB%E7%94%BA209-5",
  /** 公式LINE（https://… を入れるとアイコンがリンク有効になります） */
  lineUrl: "",
  /** 公式Instagram */
  instagramUrl: "",
} as const;
