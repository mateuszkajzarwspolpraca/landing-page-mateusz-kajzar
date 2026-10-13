"use client";

/**
 * Google Tag Manager (GTM): narzędzie, przez które działają statystyki i piksele reklamowe.
 *
 * Ładuje się dopiero wtedy, gdy użytkownik kliknie „Akceptuję” w banerze cookies.
 * Bez zgody ten komponent nic nie renderuje, więc żaden skrypt Google się nie wczytuje (RODO).
 * Dodawany raz, w app/layout.tsx.
 */

import Script from "next/script";
import { useSyncExternalStore } from "react";
import { SERVER_CONSENT, getConsentSnapshot, subscribeConsent } from "@/lib/consent";

/** Identyfikator kontenera GTM (z panelu tagmanager.google.com). */
const GTM_ID = "GTM-N5ZHS5DS";

export function GoogleTagManager() {
  // Aktualna zgoda; komponent sam się odświeży, gdy użytkownik ją zmieni.
  const consent = useSyncExternalStore(subscribeConsent, getConsentSnapshot, () => SERVER_CONSENT);

  if (consent !== "granted") return null;

  // Oficjalny fragment kodu GTM, wstawiony po załadowaniu strony.
  return (
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
    </Script>
  );
}
