import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  Coins,
  HeartHandshake,
  HelpCircle,
  Home,
  MapPin,
  Stethoscope,
  Users,
} from "lucide-react";

export type FaqCornerItem = {
  id: string;
  q: string;
  a: string;
  icon: LucideIcon;
  imageSrc: string;
  imageAlt: string;
};

/** よくある質問コーナー（パンフレット・HP向け） */
export const faqCornerItems: readonly FaqCornerItem[] = [
  {
    id: "cost",
    q: "料金は？",
    a: "医療保険が適用されます。「子ども医療証（子ども医療費助成制度）」をお持ちの場合、実質自己負担0円（無料）でご利用いただける地域が多くあります。対象外の場合でも、自立支援医療制度を活用して自己負担を軽減することが可能です。",
    icon: Coins,
    imageSrc:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    imageAlt: "書類とペン（料金・制度のイメージ）",
  },
  {
    id: "who-eligible",
    q: "具体的にどんな人が対象になる？",
    a: "主に0歳から18歳までのお子さまとそのご家族が対象です。発達の遅れや不登校、ひきこもりに悩むお子さまのほか、発達障害や精神疾患の診断を受けた方、日常生活の援助や医療的ケアが必要なお子さまなど幅広くご利用いただけます。",
    icon: Users,
    imageSrc:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80",
    imageAlt: "笑顔の子ども（対象のイメージ）",
  },
  {
    id: "when-to-use",
    q: "どんな時に利用できるの？",
    a: "「学校に行き渋る」「昼夜逆転やゲーム依存になっている」「感情のコントロールが苦手」といったお子さまに関するお悩みのほか、「子どもの叱り方が分からず親もつらい」など、子育ての不安や日々の困りごとを感じた時にご利用いただけます。",
    icon: HelpCircle,
    imageSrc:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
    imageAlt: "子どもと大人が向き合う様子",
  },
  {
    id: "no-diagnosis",
    q: "はっきりと診断名がついていなくても大丈夫ですか？",
    a: "はい、はっきりとした病名の診断がなくてもご相談は可能です。「発達がゆっくりな気がする」など、日常生活で困りごとを感じている場合、主治医に相談して「訪問看護指示書」を発行してもらうことでサービスを利用できるケースが多くあります。",
    icon: Stethoscope,
    imageSrc:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "相談するご家族のイメージ",
  },
  {
    id: "flow",
    q: "利用するまでの流れは？",
    a: "まずは当ステーションへお気軽にお問い合わせ・ご相談ください。その後、かかりつけ医を受診して相談し、「訪問看護指示書」を発行してもらいます。指示書が届き次第、事前の面談とご契約を行い、訪問サポートがスタートします。",
    icon: ClipboardList,
    imageSrc:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "手順・流れのイメージ",
  },
  {
    id: "parent-support",
    q: "子どものことだけではなく、親の悩み相談にも乗ってもらえますか？",
    a: "はい、ご家族のサポートも訪問看護の大切な役割です。毎日の育児疲れや悩みを専門スタッフが丁寧にお聞きし、心の負担を和らげます。お子さまの特性に合わせた関わり方のアドバイスや、親御さんが休息（レスパイト）をとるための見守りなども行っています。",
    icon: HeartHandshake,
    imageSrc:
      "https://images.unsplash.com/photo-1511895426328-dc871419eb0a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "親子が寄り添う様子",
  },
  {
    id: "visit-services",
    q: "訪問では具体的にどのようなことをしてもらえますか？",
    a: "遊びを通じた感覚の調整や、ゲーム等で順番やルールを学ぶ社会生活スキルトレーニング（SST）など、お子さまに合わせたリハビリを行います。また、生活リズムの調整、学習支援、服薬管理、急な体調不良への対応といった医療的ケアまで幅広くサポートします。",
    icon: Home,
    imageSrc:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "自宅で遊ぶ子ども",
  },
  {
    id: "off-site-visit",
    q: "自宅以外の場所（学校など）に訪問してもらうことはできますか？",
    a: "訪問看護は原則としてご自宅への訪問となります。ただし、お子さまの状況によっては、主治医や学校と相談の上でご自宅以外の場所への訪問を検討できる場合があります。なお、利用前の「無料相談・初回面談」はご自宅以外でも実施可能です。",
    icon: MapPin,
    imageSrc:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    imageAlt: "学校・外出のイメージ",
  },
] as const;
