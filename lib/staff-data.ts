/** スタッフ掲載データ。写真・文言は必要に応じて差し替えてください。 */

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

export type RepresentativeNurseProfile = {
  id: string;
  name: string;
  nameKana: string;
  roleLabel: string;
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
  message: `高崎市で「りたのわ」を立ち上げた想いは、ひとつです。お子さまとご家族が、心を落ち着けて暮らせる時間を少しでも増やしたい。私たちは小児・精神領域の医療的視点を背景に、現場の看護師と二人三脚で、ご家庭のペースを大切にします。

不登校や発達の特性、お子さまのこころの不調——ご家族だけで抱え込まないでください。主治医や地域の公的機関・行政・NPO、学校の皆様とも線をつなぎながら、安心が循環するケアを目指します。どうぞ、お気軽にご相談ください。`,
};

export const representativeNurse: RepresentativeNurseProfile = {
  id: "representative-nurse",
  name: "上原 実紅",
  nameKana: "うえはら みくべに",
  roleLabel: "管理者／代表看護師",
  intro: "自己紹介は Coming Soon",
};
