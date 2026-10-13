"use client";

/**
 * Google Analytics 4 (statystyki odwiedzin).
 *
 * Ładuje się dopiero wtedy, gdy użytkownik kliknie „Akceptuję” w banerze cookies.
 * Bez zgody ten komponent nic nie renderuje, więc żaden skrypt Google się nie wczytuje (RODO).
 * Jeśli GA_MEASUREMENT_ID w lib/site.ts jest pusty, statystyki są wyłączone.
 * Dodawany raz, w app/layout.tsx.
 *
 * Przejścia między podstronami GA4 liczy sam (opcja „Pomiar zaawansowany” w ustawieniach strumienia).
 */

import Script from "next/script";
import { useSyncExternalStore } from "react";
import { SERVER_CONSENT, getConsentSnapshot, subscribeConsent } from "@/lib/consent";
import { GA_MEASUREMENT_ID } from "@/lib/site";

export function GoogleAnalytics() {
  // Aktualna zgoda; komponent sam się odświeży, gdy użytkownik ją zmieni.
  const consent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, () => SERVER_CONSENT);

  if (consent !== "granted" || !GA_MEASUREMENT_ID) return null;

  return (
    <>
      {/* Biblioteka Google Analytics */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      {/* Oficjalny kod startowy GA4: tworzy funkcję gtag() i wysyła pierwsze odwiedziny */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}
