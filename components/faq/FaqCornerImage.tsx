"use client";

import Image from "next/image";
import { ImageOff } from "lucide-react";
import { useState } from "react";

const FALLBACK_SRC =
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80";

type FaqCornerImageProps = {
  src: string;
  alt: string;
  sizes?: string;
};

export function FaqCornerImage({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 45vw",
}: FaqCornerImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className="flex size-full min-h-[200px] flex-col items-center justify-center gap-2 bg-[color-mix(in_srgb,var(--ritanowa-sand)_50%,var(--card))] p-6 text-center md:min-h-[280px]"
        role="img"
        aria-label={alt}
      >
        <ImageOff className="size-10 text-muted-foreground" strokeWidth={1.5} aria-hidden />
        <span className="text-sm text-muted-foreground">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      className="object-cover"
      sizes={sizes}
      onError={() => {
        if (currentSrc !== FALLBACK_SRC) {
          setCurrentSrc(FALLBACK_SRC);
          return;
        }
        setFailed(true);
      }}
    />
  );
}
