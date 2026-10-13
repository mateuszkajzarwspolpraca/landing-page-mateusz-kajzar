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
export type StoryColor = "amber" | "sky" | "emerald";

/** Klasy Tailwinda dla każdego koloru: kółko z inicjałem, pasek na górze karty i podpis. */
const STORY_COLORS: Record<StoryColor, { avatar: string; band: string; tag: string }> = {
  amber: { avatar: "bg-amber-400 text-black", band: "from-amber-400", tag: "text-amber-300" },
  sky: { avatar: "bg-sky-400 text-black", band: "from-sky-400", tag: "text-sky-300" },
  emerald: { avatar: "bg-emerald-400 text-black", band: "from-emerald-400", tag: "text-emerald-300" },
};

/** Dane jednej historii podopiecznego. */
export type Story = {
  /** Samo imię (pierwsza litera trafia do kółka). */
  name: string;
  /** Krótki podpis pod imieniem, np. „Pierwszy raz na siłowni”. */
  tag: string;
  color: StoryColor;
  /** Sekcja „Start”: z czym przyszła/przyszedł. */
  start: ReactNode;
  /** Sekcja „Po drodze”: co się działo w trakcie. */
  journey: ReactNode;
  /** Nagłówek sekcji wyniku, np. „Po 3 miesiącach”. */
  resultLabel: string;
  /** Wynik: tekst albo tabelka (ResultTable). */
  result: ReactNode;
  /** Cytat podopiecznego na dole karty (bez cudzysłowów, dodają się same). */
  quote: string;
  /** Opcjonalne zdanie przed cytatem, np. „Po zawodach napisała:”. */
  quoteLead?: string;
};

/** Karta jednej historii w karuzeli „Historie”. */
export function StoryCard({ story }: { story: Story }) {
  const color = STORY_COLORS[story.color];
  return (
    <article className="relative flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-surface">
      <div className={cn("h-1.5 w-full bg-gradient-to-r to-transparent", color.band)} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
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

        <dl className="mt-6 flex-1 space-y-5 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
          <div>
            <dt className="text-xs font-black uppercase tracking-[0.18em] text-white/45">Start</dt>
            <dd className="mt-1">{story.start}</dd>
          </div>
          <div>
            <dt className="text-xs font-black uppercase tracking-[0.18em] text-white/45">Po drodze</dt>
            <dd className="mt-1">{story.journey}</dd>
          </div>
          <div>
            <dt className="text-xs font-black uppercase tracking-[0.18em] text-white/45">{story.resultLabel}</dt>
            <dd className="mt-1 text-white">{story.result}</dd>
          </div>
        </dl>

        <figure className="mt-6 rounded-md bg-white/[0.04] p-4">
          {story.quoteLead && <figcaption className="text-sm text-white/55">{story.quoteLead}</figcaption>}
          <blockquote className="mt-1 text-base font-bold leading-7 text-white sm:text-lg">„{story.quote}”</blockquote>
        </figure>
      </div>
    </article>
  );
}

/** Mała tabelka „ćwiczenie: przed → po”. */
export function ResultTable({ rows }: { rows: [string, string][] }) {
  return (
    <table className="w-full text-left text-sm sm:text-base">
      <tbody className="divide-y divide-white/10">
        {rows.map(([label, value]) => (
          <tr key={label}>
            <td className="py-1.5 pr-3 text-white/70">{label}</td>
            <td className="whitespace-nowrap py-1.5 text-right font-black text-white">{value}</td>
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
