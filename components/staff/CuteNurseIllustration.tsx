/** 代表看護師カード用のかわいいSVGイラスト */
export function CuteNurseIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 240"
      className={className}
      role="img"
      aria-label="看護師のイラスト"
    >
      <ellipse cx="100" cy="228" rx="52" ry="8" fill="currentColor" className="text-[var(--ritanowa-terracotta)]/15" />
      <path
        d="M55 118c0-28 20-50 45-50s45 22 45 50v62H55V118z"
        fill="color-mix(in srgb, var(--ritanowa-sand) 70%, white)"
        stroke="var(--ritanowa-terracotta)"
        strokeWidth="2"
      />
      <circle cx="100" cy="78" r="38" fill="#fde8dc" stroke="var(--ritanowa-terracotta)" strokeWidth="2" />
      <path
        d="M62 72c6-8 16-12 26-12 12 0 22 6 28 14"
        fill="none"
        stroke="#8b5e4a"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="86" cy="82" r="4" fill="#5c4030" />
      <circle cx="114" cy="82" r="4" fill="#5c4030" />
      <path d="M92 96c8 6 16 6 24 0" fill="none" stroke="#c97b63" strokeWidth="2.5" strokeLinecap="round" />
      <path
        d="M68 48c12-18 28-26 32-26s20 8 32 26"
        fill="var(--ritanowa-terracotta)"
        opacity="0.85"
      />
      <rect x="78" y="118" width="44" height="8" rx="4" fill="white" stroke="var(--ritanowa-gold)" strokeWidth="1.5" />
      <path
        d="M100 126v54"
        stroke="var(--ritanowa-terracotta)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M72 168h56"
        stroke="var(--ritanowa-terracotta)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="148" cy="150" r="10" fill="#f4c4b8" stroke="var(--ritanowa-gold)" strokeWidth="1.5" />
      <path d="M148 140v6M143 145h10" stroke="var(--ritanowa-terracotta)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
