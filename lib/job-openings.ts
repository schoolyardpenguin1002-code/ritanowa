/**
 * 募集中の求人（夕方〜夜の時間帯）。
 * ここを直すと採用ページの表示と構造化データ（JobPosting）の両方が変わります。
 * ※募集を止めるときは openings を空配列にしてください。
 */

export type JobOpening = {
  id: string;
  /** 求人タイトル（構造化データにもそのまま使われます） */
  title: string;
  /** 職種の表示名 */
  occupation: string;
  /** 応募資格 */
  qualification: string;
  /** 仕事内容（3〜4行） */
  summary: string;
  /** 時給（円・数値） */
  hourlyWage: number;
  /** 勤務時間の表示 */
  hours: string;
  /** 勤務日数の表示 */
  days: string;
};

/** 募集の共通条件（全職種でそろえる） */
export const jobCommonTerms = {
  /** 掲載日（構造化データ用・YYYY-MM-DD） */
  datePosted: "2026-08-01",
  /** 掲載終了予定（構造化データ用） */
  validThrough: "2027-03-31",
  employmentTypeLabel: "パート・アルバイト",
  /** 構造化データ用の雇用形態 */
  employmentType: "PART_TIME",
  benefits: [
    "オンコール・夜間待機はありません",
    "交通費支給",
    "直行直帰OK",
    "入職後はしばらく同行訪問。ひとりで行けると思えるまで一緒に回ります",
    "Wワーク可",
  ],
  /** 22時以降は深夜割増（法定25%）が付く旨の注記 */
  wageNote:
    "22時以降の勤務が発生した場合は、法定どおり深夜割増（25%）を加算します。",
} as const;

export const jobOpenings: readonly JobOpening[] = [
  {
    id: "nurse-evening",
    title: "訪問看護師（パート・夕方〜夜／週1日からOK）",
    occupation: "看護師・准看護師",
    qualification:
      "看護師または准看護師の免許をお持ちの方。訪問看護の経験は不問です。ブランクのある方もご相談ください。",
    summary:
      "精神科・小児の訪問看護が中心です。ご本人の暮らしの場に伺い、生活のリズムや困りごとをご家族と一緒に整えていきます。夕方から夜は、学校や仕事が終わった時間にしか会えないご家庭に届けられる、大切な時間帯です。",
    hourlyWage: 1800,
    hours: "17:00〜21:00（14:00〜22:00の枠もご相談いただけます）",
    days: "週1日・1回の訪問から。増やしたい場合はご相談ください。",
  },
  {
    id: "ot-evening",
    title: "作業療法士（パート・夕方〜夜／週1日からOK）",
    occupation: "作業療法士",
    qualification:
      "作業療法士の免許をお持ちの方。訪問の経験は不問です。病院・施設と兼務されている方も歓迎します。",
    summary:
      "精神科訪問看護のなかでのリハビリ・生活支援が中心です。病院の中では見えにくい「その人の暮らし」に直接関われます。小児・精神の領域に関心のある方を歓迎します。",
    hourlyWage: 1800,
    hours: "17:00〜21:00（14:00〜22:00の枠もご相談いただけます）",
    days: "週1日・1回の訪問から。増やしたい場合はご相談ください。",
  },
];
