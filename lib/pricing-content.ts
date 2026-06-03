import type { LucideIcon } from "lucide-react";
import {
  CircleDollarSign,
  HandHeart,
  Network,
  Sparkles,
} from "lucide-react";

export type PricingHighlight = {
  id: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

export const pricingHighlights: readonly PricingHighlight[] = [
  {
    id: "zero-copay",
    title: "基本的に自己負担0円で受けられること",
    body: "医療保険が適用されます。「子ども医療証（子ども医療費助成制度）」をお持ちの場合、実質自己負担0円（無料）でご利用いただける地域が多くあります。対象外の場合でも、自立支援医療制度などで負担を軽減できることがあります。",
    icon: CircleDollarSign,
  },
  {
    id: "consult-first",
    title: "まずは当ステーションにご相談ください",
    body: "担当者は相談支援事業所やケアマネージャー様であることが多いですが、手続きの前から当ステーションに相談していただいてまったく構いません。困りごとを整理するところから、一緒に始められます。",
    icon: HandHeart,
  },
  {
    id: "safe-place",
    title: "ご家族の「駆け込み寺」に",
    body: "困っている皆さま——特にお子さまとご両親——が、安心して話せる場所でありたいと考えています。診断名の有無や、手続きが進んでいるかどうかにかかわらず、まずはお気持ちをお聞かせください。",
    icon: Sparkles,
  },
  {
    id: "coordination",
    title: "関係各所につなぎ、連携を密に",
    body: "ご相談の内容に応じて、主治医・相談支援事業所・学校・地域の支援者など、必要な窓口へお繋ぎします。りたのわをハブに、医療・福祉・ご家庭が一つの輪になるよう、連携を大切にしています。",
    icon: Network,
  },
] as const;

export const pricingConsultationNote = {
  title: "相談は無料です",
  body: "料金がかかるのは、訪問看護のサービスが開始して以降（保険の自己負担分）です。事前のご相談・お問い合わせ・初回のご不安の整理には、費用はかかりません。",
  lineLead:
    "LINEから、てきとうな一文でも大丈夫です。「ちょっと聞きたいことがある」だけでも、お気軽に送ってください。",
} as const;
