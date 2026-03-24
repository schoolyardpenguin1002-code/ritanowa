"use server";

import { siteConfig } from "@/lib/site-config";

export type ContactState =
  | { ok: false; error: string }
  | { ok: true; mailto: string };

export async function submitContact(
  _prev: ContactState | null,
  formData: FormData
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const type = String(formData.get("type") ?? "");
  const message = String(formData.get("message") ?? "").trim();
  const agree = formData.get("agree") === "on";

  if (!name) {
    return { ok: false, error: "お名前を入力してください。" };
  }
  if (!message) {
    return { ok: false, error: "お問い合わせ内容を入力してください。" };
  }
  if (!agree) {
    return { ok: false, error: "個人情報の取扱いに同意してください。" };
  }

  const body = [
    `お名前: ${name}`,
    `電話: ${phone || "（未入力）"}`,
    `メール: ${email || "（未入力）"}`,
    `種別: ${type || "（未選択）"}`,
    "",
    message,
  ].join("\n");

  const subject = encodeURIComponent(`【${siteConfig.nameShort}】お問い合わせ`);
  const mailtoBody = encodeURIComponent(body);
  const mailto = `mailto:${siteConfig.email}?subject=${subject}&body=${mailtoBody}`;

  return { ok: true, mailto };
}
