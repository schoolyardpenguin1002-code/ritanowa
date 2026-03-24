"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Children, type ReactNode } from "react";

import {
  reducedRingChild,
  ringStaggerChild,
  ringStaggerParent,
} from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

type RevealRingListProps = {
  children: ReactNode;
  className?: string;
};

export function RevealRingList({ children, className }: RevealRingListProps) {
  const reduce = useReducedMotion();
  const childVariants = reduce ? reducedRingChild : ringStaggerChild;

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={ringStaggerParent}
    >
      {Children.map(children, (child, i) => (
        <motion.div key={i} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
