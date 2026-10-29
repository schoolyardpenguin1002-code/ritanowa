type DoodleKind = "rainbow" | "flower" | "star" | "house";

export function HandDrawnDoodle({ kind, className = "" }: { kind: DoodleKind; className?: string }) {
  const common = { fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 3.8 };
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="手描き風の飾りイラスト">
      {kind === "rainbow" && (
        <g {...common}>
          <path d="M11 75 C10 19 90 19 89 75" stroke="#d77d68" />
          <path d="M23 75 C22 35 78 35 77 75" stroke="#e3b45f" />
          <path d="M36 75 C35 52 65 52 64 75" stroke="#7f9f86" />
          <path d="M8 83 Q16 79 23 83 M77 83 Q87 79 94 83" stroke="#a9b9a2" />
        </g>
      )}
      {kind === "flower" && (
        <g {...common}>
          <path d="M51 47 C27 23 50 8 59 29 C75 8 92 32 71 45 C95 57 75 79 57 62 C39 84 20 63 42 49" stroke="#df8e7b" />
          <circle cx="56" cy="48" r="8" fill="#edc76d" stroke="#d2a451" strokeWidth="2" />
          <path d="M55 66 Q57 82 51 96 M55 82 Q35 67 29 81 Q39 90 55 82" stroke="#779a77" />
        </g>
      )}
      {kind === "star" && (
        <g {...common}>
          <path d="M50 9 L60 37 L89 40 L67 58 L73 88 L49 72 L24 88 L31 58 L10 40 L39 37 Z" stroke="#d9a65d" />
          <path d="M8 17 L14 23 M88 17 L82 24 M88 77 L94 83" stroke="#df8e7b" />
        </g>
      )}
      {kind === "house" && (
        <g {...common}>
          <path d="M14 49 L49 18 L86 49 M23 45 V85 H77 V45" stroke="#cf806b" />
          <path d="M43 85 V60 H59 V85 M31 54 H39 V63 H31 Z M64 54 H72 V63 H64 Z" stroke="#7f9f86" />
          <path d="M12 86 Q50 91 89 86" stroke="#d9a65d" />
        </g>
      )}
    </svg>
  );
}
