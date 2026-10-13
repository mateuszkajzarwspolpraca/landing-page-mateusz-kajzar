"use client";

import { Children, useCallback, useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type SwipeCarouselProps = {
  children: ReactNode;
  /** Etykieta dla czytników ekranu, np. „Historie podopiecznych”. */
  label: string;
  /** Szerokość jednej karty (klasy Tailwind). */
  itemClassName?: string;
};

/** Po tylu ms bez ruchu uznajemy, że przewijanie się skończyło. */
const SCROLL_END_MS = 140;

/**
 * Zapętlona karuzela „z wyróżnionym środkiem”: aktywna karta jest na środku, sąsiednie są mniejsze
 * i przygaszone, jakby stały z tyłu. Nie ma początku ani końca: karty są wyrenderowane trzy razy,
 * a po zatrzymaniu przewijania na kopii skrajnej niewidocznie przeskakujemy do tej samej karty
 * w środkowym zestawie. Przesuwanie palcem (scroll-snap), kliknięcie w boczną kartę albo strzałki
 * na klawiaturze. Bez zewnętrznych bibliotek.
 */
export function SwipeCarousel({ children, label, itemClassName = "w-[76vw] max-w-[440px]" }: SwipeCarouselProps) {
  const items = Children.toArray(children); // karty przekazane do karuzeli
  const count = items.length;
  const loop = count > 1; // przy jednej karcie nie ma czego zapętlać
  // Karty wyrenderowane 3 razy: [kopia] [prawdziwe] [kopia]. Startujemy w środkowym zestawie.
  const offset = loop ? count : 0;
  const slides = loop ? [...items, ...items, ...items] : items;

  /** Przewijany pasek z kartami (element DOM). */
  const trackRef = useRef<HTMLDivElement>(null);
  /** Indeks karty na środku. Ref = aktualna wartość dostępna od razu w obsłudze zdarzeń. */
  const activeRef = useRef(offset);
  /** Licznik czasu wykrywający koniec przewijania. */
  const endTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** To samo co activeRef, ale jako stan: jego zmiana przerysowuje karty (powiększa aktywną). */
  const [active, setActive] = useState(offset);
  /** true = chwilowo bez animacji (przy starcie i przy niewidocznym przeskoku). */
  const [jumping, setJumping] = useState(true);

  /** Zwraca element DOM karty o danym indeksie. */
  const slideAt = (index: number) => trackRef.current?.children[index] as HTMLElement | undefined;

  /** Przewija tak, żeby karta o danym indeksie stanęła na środku. */
  const scrollToIndex = useCallback((index: number, behavior: ScrollBehavior) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    track.scrollTo({ left: slide.offsetLeft + slide.offsetWidth / 2 - track.clientWidth / 2, behavior });
  }, []);

  /** Ustawia aktywną kartę jednocześnie w refie i w stanie. */
  const setActiveIndex = (index: number) => {
    activeRef.current = index;
    setActive(index);
  };

  /** Która karta jest najbliżej środka. */
  const findClosest = () => {
    const track = trackRef.current;
    if (!track) return activeRef.current;
    const center = track.scrollLeft + track.clientWidth / 2;
    const all = Array.from(track.children) as HTMLElement[];
    let closest = 0;
    let best = Infinity;
    all.forEach((slide, index) => {
      const distance = Math.abs(slide.offsetLeft + slide.offsetWidth / 2 - center);
      if (distance < best) {
        best = distance;
        closest = index;
      }
    });
    return closest;
  };

  /** Niewidoczny przeskok z kopii skrajnej do środkowego zestawu. */
  const normalize = () => {
    const track = trackRef.current;
    if (!loop || !track) return;
    const current = activeRef.current;
    if (current >= count && current < count * 2) return;
    const first = slideAt(0);
    const middle = slideAt(count);
    if (!first || !middle) return;
    const setWidth = middle.offsetLeft - first.offsetLeft;
    const target = current < count ? current + count : current - count;
    setJumping(true);
    track.scrollLeft += current < count ? setWidth : -setWidth;
    setActiveIndex(target);
    requestAnimationFrame(() => requestAnimationFrame(() => setJumping(false)));
  };

  // Start: ustaw pierwszą prawdziwą kartę na środku, zanim przeglądarka cokolwiek narysuje.
  useLayoutEffect(() => {
    scrollToIndex(offset, "auto");
    const frame = requestAnimationFrame(() => setJumping(false));
    return () => cancelAnimationFrame(frame);
  }, [offset, scrollToIndex]);

  // Nasłuchiwanie przewijania (palcem, myszką, strzałkami) i zmiany rozmiaru okna.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // Przy każdym ruchu: która karta jest na środku? A po zatrzymaniu: ewentualny przeskok w pętli.
    const onScroll = () => {
      const closest = findClosest();
      if (closest !== activeRef.current) setActiveIndex(closest);
      if (endTimer.current) clearTimeout(endTimer.current);
      endTimer.current = setTimeout(normalize, SCROLL_END_MS);
    };
    // Po obróceniu telefonu albo zmianie okna wracamy aktywną kartą na środek.
    const onResize = () => scrollToIndex(activeRef.current, "auto");
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (endTimer.current) clearTimeout(endTimer.current);
    };
    // findClosest/normalize czytają tylko refy, więc nie muszą być zależnościami
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollToIndex, count, loop]);

  /** Strzałki w lewo/prawo na klawiaturze przesuwają o jedną kartę. */
  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const step = event.key === "ArrowRight" ? 1 : -1;
    const next = activeRef.current + step;
    scrollToIndex(loop ? next : Math.min(Math.max(next, 0), count - 1), "smooth");
  };

  /** Numer prawdziwej karty (0…count-1), niezależnie od tego, czy na środku jest kopia. */
  const logicalActive = loop ? active % count : active;

  return (
    <div role="region" aria-roledescription="karuzela" aria-label={label} className="-mx-4 sm:-mx-8 lg:mx-0">
      <div
        ref={trackRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        className="relative flex snap-x snap-mandatory items-center gap-2 overflow-x-auto py-4 outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-red-500/60 sm:gap-5 lg:[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((child, index) => {
          const isActive = index === active;
          const logical = loop ? index % count : index;
          const isClone = loop && (index < count || index >= count * 2);
          return (
            <div
              key={index}
              role="group"
              aria-roledescription="slajd"
              aria-label={`${logical + 1} z ${count}`}
              aria-current={(!isClone && logical === logicalActive) || undefined}
              aria-hidden={isClone || undefined}
              onClick={() => !isActive && scrollToIndex(index, "smooth")}
              className={cn(
                "shrink-0 snap-center",
                !jumping && "transition-[transform,opacity,filter] duration-500 ease-out",
                itemClassName,
                isActive ? "scale-100 opacity-100" : "scale-[0.9] cursor-pointer opacity-40 saturate-50",
                // boczne karty „chowają się” za aktywną: kurczą się w stronę od środka
                index > active && "origin-left",
                index < active && "origin-right"
              )}
            >
              <div className={cn(!isActive && "pointer-events-none")} inert={isClone || undefined}>
                {child}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
