/**
 * Karty i małe elementy używane na kilku podstronach:
 * zwykła karta, opinia, lista z ptaszkami, cennik, kroki „co dalej” i ocena z Google.
 */

import type { ReactNode } from "react";
import { Check, Star } from "lucide-react";
import { GOOGLE_RATING, GOOGLE_REVIEWS_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

/** Podstawowa karta: ciemne tło, cienka ramka, zaokrąglone rogi. Reszta kart poniżej z niej korzysta. */
export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-lg border border-white/10 bg-surface/80 p-5 sm:p-6", className)}>{children}</div>;
}

/** Jedna opinia: imię, krótki opis (np. „Redukcja”) i treść. */
export type Review = { name: string; meta: string; text: string };

/** Karta opinii z pięcioma gwiazdkami. */
export function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="flex h-full flex-col">
      <div className="flex gap-1 text-red-500" aria-label="5 na 5 gwiazdek">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-red-500" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-6 text-white/80 sm:text-base sm:leading-7">„{review.text}”</blockquote>
      <p className="mt-5 font-black text-white">{review.name}</p>
      <p className="text-sm text-white/50">{review.meta}</p>
    </Card>
  );
}

/** Lista punktów z czerwonym ptaszkiem, np. „W obu wariantach: …”. */
export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-white/85 sm:text-base">
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-500 text-red-500">
            <Check className="h-3 w-3" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

type PriceCardProps = {
  /** Czerwona plakietka nad kartą, np. „Polecam”. Opcjonalna. */
  badge?: string;
  title: string;
  /** Cena dużymi cyframi, np. „400 zł”. */
  price: string;
  /** Mały dopisek pod ceną, np. „/ miesiąc, bez zobowiązania”. */
  priceNote: string;
  /** Dodatkowy opis pod ceną. Opcjonalny. */
  children?: ReactNode;
  /** true = czerwona ramka i poświata (wariant polecany). */
  highlighted?: boolean;
};

/** Karta jednego wariantu cennika. */
export function PriceCard({ badge, title, price, priceNote, children, highlighted }: PriceCardProps) {
  return (
    <Card className={cn("relative flex h-full flex-col", highlighted && "border-red-500/70 shadow-[0_0_60px_rgba(239,35,42,0.15)]")}>
      {badge && (
        <span className="absolute -top-3 left-5 rounded-full bg-red-600 px-3 py-1 text-xs font-black uppercase tracking-wider text-white">
          {badge}
        </span>
      )}
      <p className="text-lg font-black text-white sm:text-xl">{title}</p>
      <p className="mt-4 text-4xl font-black text-white">{price}</p>
      <p className="mt-1 text-sm text-white/60">{priceNote}</p>
      {children && <div className="mt-5 space-y-3 text-sm leading-6 text-white/75 sm:text-base">{children}</div>}
    </Card>
  );
}

/** Ponumerowane kroki (01, 02, 03…), np. „Co się dzieje, gdy napiszesz”. Na komputerze 4 w rzędzie. */
export function Steps({ steps }: { steps: { title: string; text: ReactNode }[] }) {
  return (
    <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li key={step.title}>
          <Card className="h-full">
            <p className="text-3xl font-black text-red-500">{String(index + 1).padStart(2, "0")}</p>
            <p className="mt-3 text-lg font-black text-white">{step.title}</p>
            <div className="mt-2 text-sm leading-6 text-white/70 sm:text-base">{step.text}</div>
          </Card>
        </li>
      ))}
    </ol>
  );
}

/**
 * „★★★★★ 5,0 · 6 opinii w Google”.
 * Dane bierze z lib/site.ts. Gdy GOOGLE_REVIEWS_URL jest uzupełniony, napis staje się linkiem do opinii.
 */
export function GoogleRatingBadge() {
  const content = (
    <>
      <span className="text-yellow-400">★★★★★</span>
      <span>
        {GOOGLE_RATING.value} · {GOOGLE_RATING.count} opinii w Google
      </span>
    </>
  );
  const className = "inline-flex items-center gap-2 text-sm text-white/75";

  if (!GOOGLE_REVIEWS_URL) return <span className={className}>{content}</span>;

  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(className, "underline-offset-4 hover:text-white hover:underline")}
    >
      {content}
    </a>
  );
}
