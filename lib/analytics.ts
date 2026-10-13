/**
 * Mierzenie kliknięć (Google Tag Manager).
 *
 * GTM czyta zdarzenia z globalnej tablicy `window.dataLayer`. My tylko dopisujemy do niej obiekt,
 * a co się z nim dalej dzieje (np. wysyłka do Google Analytics albo Meta), ustawia się w panelu GTM.
 */

/** Zdarzenie dla GTM: musi mieć nazwę `event`, reszta pól jest dowolna. */
type DataLayerEvent = Record<string, unknown> & { event: string };

// Informujemy TypeScript, że w przeglądarce może istnieć `window.dataLayer`.
declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Dopisuje zdarzenie do dataLayer.
 *
 * Zdarzenie trafia tam zawsze, ale GTM ładuje się dopiero po zgodzie na cookies
 * (zob. components/site/GoogleTagManager.tsx), więc bez zgody nikt go nie odczyta.
 *
 * Przykład: trackEvent({ event: "dm_click", dm_source: "online-hero" })
 */
export function trackEvent(payload: DataLayerEvent) {
  if (typeof window === "undefined") return; // na serwerze nie ma okna przeglądarki
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}
