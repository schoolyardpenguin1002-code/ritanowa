/** スタッフ掲載データ。写真・文言は必要に応じて差し替えてください。 */

export type DirectorProfile = {
  id: string;
  name: string;
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
  roleLabel: string;
  intro: string;
  /** null のときはイラストを表示 */
  imageSrc: string | null;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
};

export const director: DirectorProfile = {
  id: "director",
  name: "狩野 遊太",
  title: "代表／医師",
  imageSrc: "/staff/director.jpg",
  imageAlt: "代表・医師 狩野 遊太",
  message: `高崎市で「りたのわ」を立ち上げた想いは、ひとつです。お子さまとご家族が、心を落ち着けて暮らせる時間を少しでも増やしたい。私たちは小児・精神領域の医療的視点を背景に、現場の看護師と二人三脚で、ご家庭のペースを大切にします。

不登校や発達の特性、お子さまのこころの不調——ご家族だけで抱え込まないでください。主治医や地域の公的機関・行政・NPO、学校の皆様とも線をつなぎながら、安心が循環するケアを目指します。どうぞ、お気軽にご相談ください。`,
};

export const representativeNurse: RepresentativeNurseProfile = {
  id: "representative-nurse",
  name: "上原 実紅",
  roleLabel: "管理者／保健師・看護師",
  intro:
    "看護師の上原実紅です。私自身も、子育て真っ最中です。かわいくてたまらない反面、大変だなと思う日もたくさんあります。だからこそ、お子さまとご家族が、楽しく自分らしくいられる選択肢を、一緒に見つけられる存在でいたいと思っています。",
  imageSrc: "/staff/representative-nurse.jpg",
  imageAlt: "管理者・保健師・看護師 上原 実紅",
  imageWidth: 1108,
  imageHeight: 1477,
};

export const nurses: RepresentativeNurseProfile[] = [
  {
    id: "nurse-kano-yuka",
    name: "狩野 友伽",
    roleLabel: "看護師",
    intro:
      "看護師の狩野友伽です。家に帰れば、悩んだり笑ったりの、ごく普通の毎日を過ごしています。だからこそ、特別な場所ではなく「暮らしのそば」で支える看護がしたい。めざすのは、頼るのが上手じゃない人こそ頼れる、実家のような訪問看護です。ちょっとおせっかいなくらい気にかけて、些細な変化に気づいて、一緒に喜ぶ——お子さまとご家族の「その人らしさ」が守られる毎日を、そばで支えます。",
    imageSrc: "/staff/nurse-kano-yuka.jpg",
    imageAlt: "看護師 狩野 友伽",
    imageWidth: 1500,
    imageHeight: 1125,
  },
];
