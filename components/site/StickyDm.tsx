"use client";

/**
 * Przycisk „Napisz do mnie” przyklejony do dołu ekranu. Tylko na telefonie (na komputerze ukryty).
 *
 * Kiedy się pokazuje:
 * - dopiero po przewinięciu pierwszego ekranu (hero ma własny przycisk),
 * - nie wtedy, gdy na ekranie widać inny blok z przyciskiem DM (element z atrybutem data-dm-block),
 *   żeby nie było dwóch przycisków naraz.
 */

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { DmButton } from "./DmButton";

export function StickyDm({ source }: { source: string }) {
  const [pastHero, setPastHero] = useState(false);
  const [blockVisible, setBlockVisible] = useState(false);

  useEffect(() => {
    // 1. Czy przewinięto dalej niż 80% wysokości ekranu?
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // 2. Czy widać któryś blok z przyciskiem DM? IntersectionObserver powiadamia,
    //    kiedy obserwowany element wchodzi na ekran albo z niego schodzi.
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => (entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target)));
        setBlockVisible(visible.size > 0);
      },
      { threshold: 0.2 } // „widoczny” = co najmniej 20% elementu na ekranie
    );
    document.querySelectorAll("[data-dm-block]").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const show = pastHero && !blockVisible;

  return (
    <div
      aria-hidden={!show}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/85 px-4 py-3 backdrop-blur-xl transition-transform duration-300 sm:hidden",
        show ? "translate-y-0" : "pointer-events-none translate-y-full" // schowany = wysunięty pod dolną krawędź
      )}
    >
      <DmButton source={source} label="Napisz do mnie" className="py-3.5" />
    </div>
  );
}
