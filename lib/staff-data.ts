/** 看護師の写真・氏名の一部はイメージです。必要に応じて実データに差し替えてください。 */

export type DirectorProfile = {
  id: string;
  name: string;
  nameKana: string;
  title: string;
  /** null のときはプレースホルダーを表示（トップ・スタッフの代表挨拶） */
  imageSrc: string | null;
  imageAlt: string;
  message: string;
  note?: string;
};

export type NurseProfile = {
  id: string;
  name: string;
  nameKana: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  intro: string;
};

export const director: DirectorProfile = {
  id: "director",
  /** サイト上は氏名非掲載のため未使用。必要になったら設定してください。 */
  name: "",
  nameKana: "",
  title: "代表／医師",
  imageSrc: null,
  imageAlt: "代表・医師（写真準備中）",
  message: `高崎市で「りたの輪」を立ち上げた想いは、ひとつです。地域の皆さまが、心を落ち着けて暮らせる時間を少しでも増やしたい。私たちは医療的な視点を背景に、現場の看護師と二人三脚で、ご本人とご家族のペースを大切にします。

かしこまった言葉より、まずはお話を伺うこと。困りごとは一人で抱えず、主治医やケアマネの方々とも線をつなぎながら、安心が循環するケアを目指します。どうぞ、お気軽にご相談ください。`,
};

export const nurses: NurseProfile[] = [
  {
    id: "nurse-1",
    name: "山田 美咲",
    nameKana: "やまだ みさき",
    title: "訪問看護師",
    imageSrc:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    imageAlt: "看護師のイメージ写真",
    intro:
      "在宅の看護が好きで、ご本人の「今日はこうしたい」を一緒に考えることを大切にしています。落ち着いて話せる時間をつくります。",
  },
  {
    id: "nurse-2",
    name: "佐藤 あかり",
    nameKana: "さとう あかり",
    title: "訪問看護師",
    imageSrc:
      "https://images.unsplash.com/photo-1594824476966-48c8b964273f?auto=format&fit=crop&w=800&q=80",
    imageAlt: "看護師のイメージ写真",
    intro:
      "服薬や生活リズムの工夫、ご家族の不安にも耳を傾けます。小さな変化も見逃さないよう、丁寧にフォローします。",
  },
  {
    id: "nurse-3",
    name: "高橋 奈々",
    nameKana: "たかはし なな",
    title: "訪問看護師",
    imageSrc:
      "https://images.unsplash.com/photo-1640622842228-3a785e6e3b36?auto=format&fit=crop&w=800&q=80",
    imageAlt: "看護師のイメージ写真",
    intro:
      "地域の医療・介護の皆さまと連携しながら、ご利用者様がご自宅で安心して過ごせるよう伴走します。よろしくお願いします。",
  },
];
