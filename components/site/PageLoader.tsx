"use client";

/**
 * Ekran ładowania z logo, który zakrywa stronę przy pierwszym wejściu.
 *
 * Znika, kiedy strona się załaduje, ale nigdy szybciej niż po MIN_VISIBLE_MS
 * (żeby nie „mignął”) i najpóźniej po MAX_VISIBLE_MS (bezpiecznik, gdyby jakiś
 * zewnętrzny plik wisiał w nieskończoność). Dodawany raz, w app/layout.tsx.
 */

import Image from "next/image";
import { useEffect, useState } from "react";

/** Minimalny czas widoczności, liczony od wejścia na stronę (ms). */
const MIN_VISIBLE_MS = 800;
/** Maksymalny czas widoczności (ms). */
const MAX_VISIBLE_MS = 8000;

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let hideTimeout: number | undefined;

    // Chowa loader, ale dopiero gdy minie minimalny czas.
    const hide = () => {
      // performance.now() = ile ms minęło od wejścia na stronę
      const remaining = Math.max(MIN_VISIBLE_MS - performance.now(), 0);
      window.clearTimeout(hideTimeout);
      hideTimeout = window.setTimeout(() => setIsVisible(false), remaining);
    };

    // Strona mogła się już załadować, zanim ten kod ruszył.
    if (document.readyState === "complete") {
      hide();
    } else {
      window.addEventListener("load", hide, { once: true });
    }

    const safetyTimeout = window.setTimeout(() => setIsVisible(false), MAX_VISIBLE_MS);

    // Sprzątanie, gdy komponent znika (React wywołuje tę funkcję sam).
    return () => {
      window.removeEventListener("load", hide);
      window.clearTimeout(hideTimeout);
      window.clearTimeout(safetyTimeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-6">
        <Image
          src="/images/logo/logo.PNG"
          alt="Mateusz Kajzar"
          width={96}
          height={96}
          priority
          className="h-24 w-24 animate-pulse object-contain"
        />

        {/* Pasek, który przesuwa się w kółko (animacja „loader” w app/globals.css). */}
        <div className="h-1 w-40 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-[loader_1s_ease-in-out_infinite] rounded-full bg-red-600" />
        </div>

        <p className="text-xs font-black uppercase tracking-[0.28em] text-white/70">Proste zasady. Widoczne efekty.</p>
      </div>
    </div>
  );
}
