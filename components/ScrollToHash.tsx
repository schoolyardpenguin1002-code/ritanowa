"use client";

import { useEffect } from "react";

/** RevealSection の描画で初期ハッシュスクロールが中断されるため、遅延して自前でスクロールする */
export function ScrollToHash() {
  useEffect(() => {
    const scroll = () => {
      const hash = decodeURIComponent(window.location.hash.replace("#", ""));
      if (!hash) return;
      // RevealSection の出現アニメーションで smooth スクロールが中断され、
      // 描画直後はレイアウトも動くため、instant で2回合わせ直す
      for (const delay of [150, 600]) {
        window.setTimeout(() => {
          document
            .getElementById(hash)
            ?.scrollIntoView({ behavior: "instant", block: "start" });
        }, delay);
      }
    };
    scroll();
    window.addEventListener("hashchange", scroll);
    return () => window.removeEventListener("hashchange", scroll);
  }, []);

  return null;
}
