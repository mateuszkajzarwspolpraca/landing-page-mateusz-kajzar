/**
 * Wysyłanie własnych zdarzeń do Google Analytics 4 (np. kliknięcie „Napisz do mnie”).
 *
 * Funkcja `gtag` istnieje w przeglądarce dopiero po zgodzie na cookies,
 * kiedy wczyta się GA (components/site/GoogleAnalytics.tsx). Bez zgody zdarzenie jest pomijane.
 */

// Informujemy TypeScript, że w przeglądarce może istnieć funkcja `window.gtag` od Google.
declare global {
  interface Window {
    gtag?: (command: "event", name: string, params?: Record<string, unknown>) => void;
  }
}

/**
 * Wysyła zdarzenie do GA4.
 *
 * Przykład: trackEvent("dm_click", { dm_source: "online-hero" })
 * W GA4 zobaczysz je w Raporty → Zaangażowanie → Zdarzenia.
 */
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return; // na serwerze nie ma okna przeglądarki
  window.gtag?.("event", name, params);
}
