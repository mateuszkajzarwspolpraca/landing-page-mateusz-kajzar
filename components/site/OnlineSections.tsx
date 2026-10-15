/**
 * Elementy używane tylko na stronie /online:
 * karta historii podopiecznego, tabelka wyników, karta obawy, 3 etapy pracy, roadmapa i wyróżnione zdanie.
 *
 * Same teksty (kto, co, jakie liczby) są w app/online/content.tsx. Tutaj jest tylko wygląd.
 */
import type { ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

/* ---------- Historie ---------- */

/** Kolor akcentu karty historii. Każda historia ma inny, żeby karty się od siebie odróżniały. */
export type StoryColor = "amber" | "sky" | "emerald" | "violet";

/** Klasy Tailwinda dla każdego koloru: kółko z inicjałem i podpis pod imieniem. */
const STORY_COLORS: Record<StoryColor, { avatar: string; tag: string }> = {
  amber: { avatar: "bg-amber-400 text-black", tag: "text-amber-300" },
  sky: { avatar: "bg-sky-400 text-black", tag: "text-sky-300" },
  emerald: { avatar: "bg-emerald-400 text-black", tag: "text-emerald-300" },
  violet: { avatar: "bg-violet-400 text-black", tag: "text-violet-300" },
};

/** Dane jednej historii podopiecznego. */
export type Story = {
  /** Samo imię (pierwsza litera trafia do kółka). */
  name: string;
  /** Krótki podpis pod imieniem, np. „Pierwszy raz na siłowni”. */
  tag: string;
  color: StoryColor;
  /** Nagłówek pierwszej sekcji: „Przyszła z” albo „Przyszedł z”. */
  startLabel: string;
  /** Z czym przyszła/przyszedł (cel i punkt startu). */
  start: string;
  /** Co stało na drodze. */
  obstacles: string;
  /** Kiedy liczony efekt, np. „po 3 miesiącach” (wyświetla się jako „Efekt · po 3 miesiącach”). */
  when: string;
  /** Główny efekt dużymi literami, np. „Talia −6 cm”. */
  headline: string;
  /** Szczegóły efektu: [co, wynik], np. ["Hip thrust", "0 → 45 kg"]. */
  rows: [string, string][];
  /** Cytat podopiecznego na dole karty (bez cudzysłowów, dodają się same). */
  quote: string;
};

/** Mały szary nagłówek sekcji w karcie, np. „PRZESZKODY”. */
function CardLabel({ children }: { children: ReactNode }) {
  return <p className="text-xs font-black uppercase tracking-[0.18em] text-white/45">{children}</p>;
}

/**
 * Karta jednej historii w karuzeli „Historie”.
 * Układ: imię → z czym przyszła/przyszedł → przeszkody → efekt (duży nagłówek + tabelka) → cytat.
 * Efekt jest dosunięty do dołu karty, żeby w różnych kartach wypadał na podobnej wysokości.
 */
export function StoryCard({ story }: { story: Story }) {
  const color = STORY_COLORS[story.color];
  return (
    <article className="flex h-full flex-col rounded-lg border border-white/10 bg-surface p-5 sm:p-6">
      <header className="flex items-center gap-4">
        <span
          aria-hidden="true"
          className={cn("flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-2xl font-black", color.avatar)}
        >
          {story.name.charAt(0)}
        </span>
        <div>
          <p className="text-2xl font-black leading-tight text-white">{story.name}</p>
          <p className={cn("mt-0.5 text-sm font-bold leading-snug", color.tag)}>{story.tag}</p>
        </div>
      </header>

      <div className="mt-6 space-y-4 text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
        <div>
          <CardLabel>{story.startLabel}</CardLabel>
          <p className="mt-1">{story.start}</p>
        </div>
        <div>
          <CardLabel>Przeszkody</CardLabel>
          <p className="mt-1">{story.obstacles}</p>
        </div>
      </div>

      {/* Efekt dosunięty do dołu (mt-auto) */}
      <div className="mt-auto pt-8">
        <CardLabel>Efekt · {story.when}</CardLabel>
        <p className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">{story.headline}</p>
        <div className="mt-4 border-t border-white/10">
          <ResultTable rows={story.rows} />
        </div>
        <blockquote className="mt-5 rounded-md bg-white/[0.04] p-4 text-sm leading-6 text-white sm:text-base sm:leading-7">
          „{story.quote}”
        </blockquote>
      </div>
    </article>
  );
}

/** Tabelka wyników: [co, wynik] w wierszach, np. „Hip thrust · 0 → 45 kg”. */
export function ResultTable({ rows }: { rows: [string, string][] }) {
  return (
    <table className="w-full text-left text-sm">
      <tbody className="divide-y divide-white/10">
        {rows.map(([label, value]) => (
          <tr key={label}>
            <td className="py-2 pr-3 text-white/70">{label}</td>
            <td className="whitespace-nowrap py-2 text-right font-black text-white">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ---------- Czego nie dostaniesz ---------- */

/** Jedna obawa klienta (`fear`) i odpowiedź, jak wygląda to u Mateusza (`answer`). */
export type Fear = { fear: string; answer: ReactNode };

/** Karta obawy w karuzeli „Czego u mnie nie dostaniesz”. `index` służy do numeru 01, 02… */
export function FearCard({ fear, index }: { fear: Fear; index: number }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-white/10 bg-surface p-5 sm:p-6">
      <div className="flex items-center justify-between">
        <span className="text-sm font-black text-white/35">{String(index + 1).padStart(2, "0")}</span>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600/15 text-red-500">
          <X className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-white/40">Obawa</p>
      <p className="mt-2 text-xl font-black leading-7 text-white/90 sm:text-2xl sm:leading-8">{fear.fear}</p>
      <div className="mt-5 h-px bg-white/10" />
      <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-red-500">U mnie</p>
      <div className="mt-2 text-base leading-7 text-white/85">{fear.answer}</div>
    </article>
  );
}

/* ---------- Jak pracuję ---------- */

/** Trzy ponumerowane etapy (Wykonujesz → Rozumiesz → Decydujesz). */
export function PhaseCards({ phases }: { phases: { title: string; text: string }[] }) {
  return (
    <ol className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
      {phases.map((phase, index) => (
        <li key={phase.title} className="relative rounded-lg border border-white/10 bg-surface p-5 sm:p-6">
          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black text-red-500">{index + 1}</span>
            <p className="text-2xl font-black text-white">{phase.title}</p>
          </div>
          <p className="mt-3 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">{phase.text}</p>
        </li>
      ))}
    </ol>
  );
}

/* ---------- Roadmapa (jak plan projektu) ---------- */

/** Jeden etap roadmapy: `when` = kiedy (np. „Miesiąc 1”), `title` = co zyskujesz, `text` = krótkie rozwinięcie. */
export type Milestone = { when: string; title: string; text: string };

/**
 * Roadmapa pierwszych 3 miesięcy.
 * Na komputerze: pozioma linia z numerami nad kartami. Na telefonie: karty jedna pod drugą, numer w karcie.
 */
export function Roadmap({ milestones }: { milestones: Milestone[] }) {
  return (
    <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
      {milestones.map((m, index) => (
        <li key={m.when} className="relative lg:pr-4">
          {/* pasek postępu: na komputerze jedna linia przez wszystkie etapy */}
          <div className="mb-4 hidden items-center lg:flex" aria-hidden="true">
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-black text-white">
              {index + 1}
            </span>
            {index < milestones.length - 1 && <span className="h-0.5 flex-1 bg-gradient-to-r from-red-600 to-red-600/30" />}
          </div>
          <div className="h-full rounded-lg border border-white/10 bg-surface p-5">
            <div className="flex items-center gap-3 lg:block">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-black text-white lg:hidden">
                {index + 1}
              </span>
              <p className="text-xs font-black uppercase tracking-[0.16em] text-red-500">{m.when}</p>
            </div>
            <p className="mt-3 text-lg font-black leading-snug text-white">{m.title}</p>
            <p className="mt-2 text-sm leading-6 text-white/70">{m.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Wyróżnione zdanie bez wcięcia: krótka czerwona kreska nad tekstem. */
export function Highlight({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("text-xl font-black leading-snug text-white sm:text-2xl", className)}>
      <span aria-hidden="true" className="mb-3 block h-0.5 w-10 bg-red-600" />
      {children}
    </p>
  );
}
