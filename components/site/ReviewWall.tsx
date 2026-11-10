"use client";

/**
 * „Ściana opinii”: karty opinii ułożone w kolumnach jak cegły (masonry),
 * na telefonie w jednej kolumnie, na tablecie w dwóch, na komputerze w trzech.
 *
 * Na start widać tylko górną część. Dół jest przyciemniony gradientem, a na nim przycisk
 * „Zobacz więcej opinii”, który rozwija całość. Jeśli opinii jest mało i mieszczą się w całości,
 * gradient i przycisk się nie pokazują.
 *
 * Gradient musi mieć ten sam kolor co tło sekcji, w której stoi ściana.
 * Dlatego podaje się `tone` – taki sam jak w <Section tone=…>.
 */

import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ReviewCard, type Review } from "./Cards";

type ReviewWallProps = {
  reviews: Review[];
  /** Tło sekcji, w której stoi ściana: "page" albo "dark" (jak w <Section>). Od tego zależy kolor przyciemnienia. */
  tone?: "page" | "dark";
};

export function ReviewWall({ reviews, tone = "page" }: ReviewWallProps) {
  // Czy ściana jest rozwinięta.
  const [expanded, setExpanded] = useState(false);
  // Czy opinie są wyższe niż zwinięta ściana (czyli czy jest co rozwijać).
  const [overflowing, setOverflowing] = useState(true);
  const boxRef = useRef<HTMLDivElement>(null);

  // Mierzymy, czy treść wystaje poza zwiniętą wysokość. ResizeObserver mierzy też po zmianie szerokości okna.
  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;
    const observer = new ResizeObserver(() => {
      const content = box.firstElementChild as HTMLElement | null;
      if (content) setOverflowing(content.offsetHeight > box.clientHeight + 8 || expanded);
    });
    observer.observe(box);
    if (box.firstElementChild) observer.observe(box.firstElementChild);
    return () => observer.disconnect();
  }, [expanded]);

  const collapsed = !expanded && overflowing;

  return (
    <div className="relative">
      <div
        ref={boxRef}
        className={cn(
          "overflow-hidden",
          // wysokość zwiniętej ściany: na telefonie pierwsza karta i połowa drugiej, na komputerze ok. jeden rząd i kawałek drugiego
          !expanded && "max-h-[580px] sm:max-h-[620px] lg:max-h-[560px]"
        )}
      >
        {/* columns-* układa karty w kolumny jak cegły; break-inside-avoid nie pozwala przeciąć karty */}
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {reviews.map((review) => (
            <div key={review.name} className="mb-4 break-inside-avoid">
              <ReviewCard review={review} />
            </div>
          ))}
        </div>
      </div>

      {/* Przyciemnienie dołu, gdy ściana jest zwinięta */}
      {collapsed && (
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t to-transparent sm:h-56",
            tone === "page" ? "from-page via-page/85" : "from-surface-dark via-surface-dark/85"
          )}
        />
      )}

      {overflowing && (
        <div className={cn("flex justify-center", collapsed ? "absolute inset-x-0 bottom-8" : "mt-6")}>
          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-surface px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:border-brand-light"
          >
            {expanded ? "Zwiń opinie" : "Zobacz więcej opinii"}
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
        </div>
      )}
    </div>
  );
}
