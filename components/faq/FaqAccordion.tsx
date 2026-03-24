"use client";

import { useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/faq-data";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [value, setValue] = useState<string[]>([]);

  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!hash || !items.some((i) => i.id === hash)) return;
    queueMicrotask(() => {
      setValue([hash]);
    });
    const t = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 350);
    return () => window.clearTimeout(t);
  }, [items]);

  return (
    <Accordion
      multiple={false}
      value={value}
      onValueChange={(next) => setValue(next as string[])}
      className="divide-y divide-border rounded-3xl border border-border/80 bg-card px-2 shadow-sm"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          id={item.id}
          className="scroll-mt-28 border-0 px-4"
        >
          <AccordionTrigger className="py-5 text-lg font-semibold leading-snug hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-lg leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
