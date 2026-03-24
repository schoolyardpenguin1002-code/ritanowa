"use client";

import { motion, useReducedMotion } from "framer-motion";

type CircleRingProps = {
  className?: string;
  size?: number;
  strokeWidth?: number;
};

export function CircleRing({
  className,
  size = 120,
  strokeWidth = 2,
}: CircleRingProps) {
  const reduce = useReducedMotion();
  const r = (size - strokeWidth) / 2;
  const cx = size / 2;
  const cy = size / 2;

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden
      initial={reduce ? false : { scale: 0.92, opacity: 0 }}
      whileInView={reduce ? undefined : { scale: 1, opacity: 0.35 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={
        reduce ? undefined : { type: "spring", stiffness: 260, damping: 22 }
      }
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </motion.svg>
  );
}
