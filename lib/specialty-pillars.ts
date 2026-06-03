import type { LucideIcon } from "lucide-react";
import { Baby, Brain } from "lucide-react";

export type SpecialtyPillar = {
  id: string;
  label: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

/** トップ「小児×精神」セクション */
export const specialtyPillars: readonly SpecialtyPillar[] = [
  {
    id: "pediatric",
    label: "小児",
    title: "お子さまの発達と暮らしに寄り添う",
    body: "成長段階ごとの心身の変化を大切にし、ご家庭のペースで関わります。学校・生活リズム・ご家族の負担もひとつの文脈として見ます。",
    icon: Baby,
  },
  {
    id: "mental-health",
    label: "精神",
    title: "精神・心理の専門性を土台に",
    body: "気分や不安、服薬など、精神領域の看護知識をもとに在宅を支えます。医師の指示とケアプランに沿い、お子さまとご家族のペースを大切に伴走します。",
    icon: Brain,
  },
] as const;

/** 小児×精神セクション全体のまとめ（「特化」という項目名では出さない） */
export const specialtyMission = {
  title: "小児精神科領域に特化した訪問看護",
  body: "不登校・発達の特性・お子さまのこころの不調など、ご家族が抱えやすいテーマに経験を重ね、地域の医療・教育・福祉とつなぎます。",
} as const;
