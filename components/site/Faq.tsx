"use client";

/**
 * Lista pytań i odpowiedzi (FAQ). Kliknięcie w pytanie rozwija odpowiedź,
 * a otwarte może być tylko jedno pytanie naraz.
 * Pod spodem korzysta z gotowego akordeonu z components/ui/accordion.tsx.
 */

import type { ReactNode } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/** Jedno pytanie: `q` = pytanie, `a` = odpowiedź (tekst albo JSX, np. z linkiem). */
export type FaqItem = { q: string; a: ReactNode };

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="mt-8 max-w-3xl divide-y divide-white/10 rounded-lg border border-white/10 bg-surface/70"
    >
      {items.map((item, index) => (
        <AccordionItem key={item.q} value={`faq-${index}`} className="border-0 px-5">
          <AccordionTrigger className="py-5 text-base font-black text-white hover:no-underline sm:text-lg">{item.q}</AccordionTrigger>
          <AccordionContent className="pb-5 text-base leading-7 text-white/75">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
