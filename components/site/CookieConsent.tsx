"use client";

/**
 * Baner z pytaniem o zgodę na cookies (dół ekranu).
 *
 * Pokazuje się, dopóki użytkownik nie wybierze „Akceptuję” albo „Tylko niezbędne”.
 * Można go otworzyć ponownie linkiem „Ustawienia cookies” w stopce.
 * Sama logika zapisu zgody jest w lib/consent.ts. Dodawany raz, w app/layout.tsx.
 */

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  OPEN_CONSENT_EVENT,
  SERVER_CONSENT,
  getConsentSnapshot,
  readConsent,
  subscribeConsent,
  writeConsent,
  type ConsentValue,
} from "@/lib/consent";

export function CookieConsent() {
  // Zapisana decyzja (null = jeszcze nie wybrano).
  const consent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, () => SERVER_CONSENT);
  // true, gdy ktoś kliknął „Ustawienia cookies” i chce zmienić decyzję.
  const [reopened, setReopened] = useState(false);
  const open = consent === null || reopened;

  // Nasłuchuje prośby o ponowne otwarcie banera (z linku w stopce).
  useEffect(() => {
    const onOpen = () => setReopened(true);
    window.addEventListener(OPEN_CONSENT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, onOpen);
  }, []);

  /** Zapisuje wybór i zamyka baner. */
  const choose = (value: ConsentValue) => {
    const previous = readConsent();
    writeConsent(value);
    setReopened(false);
    // Google Analytics, który już się wczytał, nie da się „wyładować”. Gdy ktoś cofa zgodę,
    // odświeżamy stronę i GA się nie załaduje.
    if (previous === "granted" && value === "denied") window.location.reload();
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Zgoda na pliki cookies"
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-md rounded-lg border border-white/12 bg-surface/95 p-5 text-white shadow-2xl backdrop-blur sm:inset-x-auto sm:right-5 sm:bottom-5"
    >
      <p className="text-base font-black">Ciasteczka 🍪</p>
      <p className="mt-2 text-sm leading-6 text-white/75">
        Poza niezbędnymi używam tylko narzędzi do mierzenia, czy strona i reklamy działają. Nie włączam ich, dopóki nie klikniesz
        „Akceptuję”.{" "}
        <Link href="/polityka-prywatnosci#cookies" className="text-red-500 underline underline-offset-4">
          Szczegóły
        </Link>
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="rounded-md border border-white/20 px-4 py-2.5 text-sm font-bold text-white transition hover:border-white/40"
        >
          Tylko niezbędne
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="rounded-md bg-red-600 px-4 py-2.5 text-sm font-black text-white transition hover:bg-red-500"
        >
          Akceptuję
        </button>
      </div>
    </div>
  );
}
