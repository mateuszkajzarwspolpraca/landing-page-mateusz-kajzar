/**
 * Wspólny układ stron prawnych (regulamin, polityka prywatności):
 * nagłówek strony, tytuł, treść dokumentu, data aktualizacji i stopka.
 *
 * Treść podaje się jako dzieci (children). Nagłówki <h2>, linki i listy wewnątrz
 * dostają style automatycznie, przez klasy [&_h2]:… w kontenerze poniżej.
 */
import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type LegalPageProps = {
  /** Mały czerwony napis nad tytułem. */
  eyebrow: string;
  title: ReactNode;
  /** Data ostatniej aktualizacji dokumentu, np. „27 września 2026 r.”. Zmieniaj przy każdej zmianie treści. */
  updated: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, updated, children }: LegalPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 px-4 py-14 sm:px-8 sm:py-20">
        <article className="mx-auto max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">{eyebrow}</p>
          <div className="mt-3 h-0.5 w-16 bg-red-600" />
          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
          <div className="mt-10 space-y-8 text-sm leading-7 text-neutral-300 sm:text-base [&_h2]:text-2xl [&_h2]:font-black [&_h2]:text-white [&_h2+p]:mt-3 [&_a]:text-red-500 [&_a]:underline [&_a]:underline-offset-4 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
            {children}
          </div>
          <p className="mt-10 text-sm text-neutral-500">Data ostatniej aktualizacji: {updated}</p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
