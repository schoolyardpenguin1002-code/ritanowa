"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import {
  reducedSectionReveal,
  sectionReveal,
} from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export function RevealSection({ children, className, id }: RevealSectionProps) {
  const reduce = useReducedMotion();
  const variants = reduce ? reducedSectionReveal : sectionReveal;

  return (
    <motion.section
      id={id}
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
