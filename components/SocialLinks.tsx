import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

/** LINEブランド緑（アイコンは常にこの色。URL未設定時もグレーにしない） */
const LINE_BRAND_GREEN = "#06C755";

/** 緑地に白の「LINE」——ブランドの緑を常に表示 */
function LineAppIcon({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex size-12 shrink-0 items-center justify-center rounded-[22%] text-[12px] font-bold leading-none tracking-tight text-white shadow-md transition-[filter] hover:brightness-110",
        className
      )}
      style={{ backgroundColor: LINE_BRAND_GREEN }}
      aria-hidden
    >
      LINE
    </span>
  );
}

/** Instagram公式に近いカラー（グラデーション＋白のカメラマーク） */
function InstagramColoredIcon({
  gradientId,
  muted,
}: {
  gradientId: string;
  muted?: boolean;
}) {
  const gid = `ig-${gradientId}`;
  return (
    <span
      className={cn(
        "relative flex size-12 items-center justify-center overflow-hidden rounded-[22%] shadow-md",
        muted && "opacity-55"
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 24 24"
        className="absolute inset-0 size-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id={gid}
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#f09433" />
            <stop offset="45%" stopColor="#e6683c" />
            <stop offset="60%" stopColor="#dc2743" />
            <stop offset="100%" stopColor="#bc1888" />
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill={`url(#${gid})`} />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="relative z-10 size-[58%] text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.8" />
        <circle cx="17" cy="7" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}

function isReadyUrl(url: string) {
  const u = url.trim();
  return u.length > 0 && /^https?:\/\//i.test(u);
}

type SocialLinksProps = {
  className?: string;
  /** 説明テキストを上に表示（お問い合わせページ用） */
  showCaption?: boolean;
  /** false のとき LINE アイコンを非表示（フッター等で別表示する場合） */
  showLine?: boolean;
  /** 同一ページに複数配置するときの識別子（SVGグラデーションID用） */
  instanceId?: string;
};

export function SocialLinks({
  className,
  showCaption,
  showLine = true,
  instanceId = "default",
}: SocialLinksProps) {
  const lineReady = isReadyUrl(siteConfig.lineUrl);
  const igReady = isReadyUrl(siteConfig.instagramUrl);

  const hitArea =
    "inline-flex transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-[24%]";

  const inactiveWrap =
    "inline-flex cursor-not-allowed rounded-[24%] opacity-95";

  return (
    <div className={cn("space-y-3", className)}>
      {showCaption ? (
        <p className="text-base text-muted-foreground">
          公式LINE・Instagram（URLを設定するとリンクが有効になります）
        </p>
      ) : null}
      <div className="flex flex-wrap items-center gap-4">
        {showLine ? (
          lineReady ? (
            <Link
              href={siteConfig.lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={hitArea}
              aria-label="公式LINEを開く"
            >
              <LineAppIcon />
            </Link>
          ) : (
            <span
              className={inactiveWrap}
              aria-label="公式LINE（準備中）"
              title="準備中"
            >
              <LineAppIcon />
            </span>
          )
        ) : null}

        {igReady ? (
          <Link
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={hitArea}
            aria-label="公式Instagramを開く"
          >
            <InstagramColoredIcon gradientId={`${instanceId}-ig`} />
          </Link>
        ) : (
          <span
            className={inactiveWrap}
            aria-label="公式Instagram（準備中）"
            title="準備中"
          >
            <InstagramColoredIcon gradientId={`${instanceId}-ig`} muted />
          </span>
        )}
      </div>
    </div>
  );
}
