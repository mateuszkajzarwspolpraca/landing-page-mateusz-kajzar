/**
 * Podstawowe klocki układu strony: sekcja, nagłówek sekcji i blok tekstu.
 * Dzięki nim wszystkie sekcje mają te same odstępy, szerokość i typografię.
 */

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  /** Kotwica do linków w menu, np. id="faq" → link "#faq" przewija do tej sekcji. */
  id?: string;
  children: ReactNode;
  className?: string;
  /** Kolor tła: "black" albo "dark" (odrobinę jaśniejszy). Naprzemiennie oddzielają sekcje. */
  tone?: "black" | "dark";
};

/** Sekcja na całą szerokość ekranu, z treścią wyśrodkowaną i ograniczoną do max-w-6xl. */
export function Section({ id, children, className, tone = "black" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        // scroll-mt-20: po kliknięciu w menu nagłówek nie chowa się pod przyklejonym paskiem u góry
        "scroll-mt-20 px-4 py-16 sm:px-8 sm:py-24",
        tone === "black" ? "bg-black" : "bg-surface-dark",
        className
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  /** Mały czerwony napis nad tytułem, np. "FAQ". Opcjonalny. */
  eyebrow?: string;
  /** Tytuł sekcji (renderowany jako h2). */
  title: ReactNode;
  /** Krótki tekst pod tytułem. Opcjonalny. */
  intro?: ReactNode;
  align?: "left" | "center";
};

/** Nagłówek sekcji: [eyebrow + czerwona kreska] → tytuł → [wstęp]. */
export function SectionHeading({ eyebrow, title, intro, align = "left" }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">{eyebrow}</p>
          <div className={cn("mt-3 h-0.5 w-16 bg-red-600", align === "center" && "mx-auto")} />
        </>
      )}
      <h2 className="mt-4 text-3xl font-black leading-[1.15] sm:text-5xl sm:leading-[1.1]">{title}</h2>
      {intro && <div className="mt-4 text-base leading-7 text-white/70">{intro}</div>}
    </div>
  );
}

/** Blok zwykłego tekstu: akapity <p> z odstępami i wygodną szerokością do czytania. */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("max-w-2xl space-y-5 text-base leading-7 text-white/80 sm:text-lg sm:leading-8", className)}>
      {children}
    </div>
  );
}
