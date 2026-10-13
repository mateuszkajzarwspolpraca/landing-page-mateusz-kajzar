"use client";

/**
 * Przyciski „Napisz do mnie na Instagramie”.
 *
 * Każde kliknięcie otwiera rozmowę na Instagramie i wysyła do Google Tag Managera zdarzenie
 * `dm_click` z polem `dm_source`. Dzięki temu w statystykach widać, który przycisk działa najlepiej.
 */

import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { INSTAGRAM_DM_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

type DmButtonProps = {
  /** Skąd kliknięto, np. "online-hero". Trafia do statystyk jako `dm_source`. Każdy przycisk powinien mieć inną wartość. */
  source: string;
  /** Tekst na przycisku. */
  label?: string;
  /** Dodatkowe klasy Tailwinda. */
  className?: string;
};

/** Sam przycisk (link do DM na Instagramie). */
export function DmButton({ source, label = "Napisz do mnie na Instagramie", className }: DmButtonProps) {
  return (
    <a
      href={INSTAGRAM_DM_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent({ event: "dm_click", dm_source: source })}
      className={cn(
        "group inline-flex w-full items-center justify-center gap-3 rounded-lg bg-red-600 px-6 py-4 text-base font-black text-white shadow-[0_18px_60px_rgba(236,31,39,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-red-500 sm:w-auto sm:min-w-[320px]",
        className
      )}
    >
      {label}
      <ArrowRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

type DmBlockProps = {
  /** Jak w DmButton: skąd kliknięto. */
  source: string;
  /** Słowo, które klient ma wpisać w wiadomości, np. "ONLINE". Po nim poznajesz, z której strony przyszedł. */
  keyword: string;
  /** Zdanie pod przyciskiem (po „Wpisz „…”.”). Jeśli puste, używany jest tekst domyślny. */
  note?: string;
  /** Wyrównanie: do lewej albo do środka. */
  align?: "left" | "center";
};

/**
 * Przycisk + krótka informacja pod nim, co wpisać i co się stanie dalej.
 *
 * Atrybut `data-dm-block` mówi przyklejonemu przyciskowi na telefonie (StickyDm),
 * żeby się schował, kiedy ten blok jest widoczny. Inaczej na ekranie byłyby dwa przyciski.
 */
export function DmBlock({ source, keyword, note, align = "left" }: DmBlockProps) {
  return (
    <div
      data-dm-block
      className={cn("flex flex-col gap-3", align === "center" ? "items-center text-center" : "items-stretch sm:items-start")}
    >
      <DmButton source={source} />
      <p className="text-sm leading-6 text-white/70">
        Wpisz „{keyword}”. {note ?? "Odpisuję w ciągu 24 godzin. Pogadamy bez ciśnienia, nic Ci nie wcisnę."}
      </p>
    </div>
  );
}
