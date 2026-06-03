/** 代表看護師カード用のかわいい看護師さんイラスト */
export function CuteNurseIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 260"
      className={className}
      role="img"
      aria-label="かわいい看護師さんのイラスト"
    >
      <ellipse cx="110" cy="248" rx="58" ry="9" fill="#c97b63" opacity="0.12" />

      {/* 体・白衣 */}
      <path
        d="M62 138c0-6 48-10 96-6 6 38-4 72-12 88H74c-8-16-18-50-12-82z"
        fill="#fffefb"
        stroke="#c97b63"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M110 138v88"
        stroke="#e8d4c8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M88 168h44"
        stroke="#e8d4c8"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* ポケット */}
      <path
        d="M92 175h16v14h-16z"
        fill="none"
        stroke="#e8d4c8"
        strokeWidth="1.25"
        rx="2"
      />
      {/* 胸の十字マーク */}
      <circle cx="110" cy="158" r="11" fill="#f4e8e0" stroke="#c97b63" strokeWidth="1.5" />
      <path
        d="M110 152v12M104 158h12"
        stroke="#c97b63"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* 頭 */}
      <circle cx="110" cy="88" r="44" fill="#ffe8dc" stroke="#c97b63" strokeWidth="2" />

      {/* ほっぺ */}
      <ellipse cx="82" cy="98" rx="9" ry="6" fill="#f4a9a0" opacity="0.55" />
      <ellipse cx="138" cy="98" rx="9" ry="6" fill="#f4a9a0" opacity="0.55" />

      {/* 目（きらきら） */}
      <ellipse cx="94" cy="86" rx="7" ry="9" fill="#5c4030" />
      <ellipse cx="126" cy="86" rx="7" ry="9" fill="#5c4030" />
      <circle cx="97" cy="83" r="2.5" fill="#fff" />
      <circle cx="129" cy="83" r="2.5" fill="#fff" />

      {/* 口 */}
      <path
        d="M102 104c4 4 12 4 16 0"
        fill="none"
        stroke="#d4846f"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* ナースキャップ */}
      <path
        d="M66 62c8-22 32-34 44-34s36 12 44 34"
        fill="#fffefb"
        stroke="#c97b63"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect x="66" y="58" width="88" height="10" rx="4" fill="#f4e8e0" stroke="#c97b63" strokeWidth="1.5" />
      <path
        d="M104 48v10M110 48v10"
        stroke="#c97b63"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* 髪（横） */}
      <path
        d="M68 78c-6 14-4 28 2 36M152 78c6 14 4 28-2 36"
        fill="none"
        stroke="#8b5e4a"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* 聴診器 */}
      <path
        d="M148 118c14 8 18 28 8 40"
        fill="none"
        stroke="#b8956a"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="154" cy="162" r="9" fill="#d4b896" stroke="#b8956a" strokeWidth="1.5" />
      <circle cx="154" cy="162" r="4" fill="#8b7355" opacity="0.5" />

      {/* 手（ハート） */}
      <ellipse cx="72" cy="178" rx="12" ry="10" fill="#ffe8dc" stroke="#c97b63" strokeWidth="1.5" />
      <path
        d="M68 176c-2-4 2-8 6-4 4-4 8 0 6 4-2 6-6 8-6 8s-4-2-6-8z"
        fill="#f4a9a0"
        stroke="#e8897f"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* きらきら */}
      <path
        d="M178 52l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z"
        fill="#d4a84b"
        opacity="0.85"
      />
      <path
        d="M42 120l1.5 4 4 1.5-4 1.5-1.5 4-1.5-4-4-1.5 4-1.5 1.5-4z"
        fill="#d4a84b"
        opacity="0.7"
      />
    </svg>
  );
}
