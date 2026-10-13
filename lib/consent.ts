/**
 * Zgoda na cookies: zapis, odczyt i powiadamianie komponentów o zmianie.
 *
 * Decyzja użytkownika („Akceptuję” albo „Tylko niezbędne”) jest zapisana w localStorage przeglądarki.
 * Korzystają z tego:
 * - components/site/CookieConsent.tsx – baner z pytaniem o zgodę,
 * - components/site/GoogleAnalytics.tsx – ładuje statystyki dopiero po zgodzie,
 * - components/site/SiteFooter.tsx – link „Ustawienia cookies”, który otwiera baner ponownie.
 */

/** Możliwe decyzje użytkownika. */
export type ConsentValue = "granted" | "denied";

/** Pod tym kluczem decyzja leży w localStorage. */
const STORAGE_KEY = "dk-cookie-consent";

/** Własne zdarzenie przeglądarki wysyłane po zmianie zgody (żeby komponenty się odświeżyły). */
const CONSENT_CHANGED_EVENT = "dk-consent-changed";

/** Własne zdarzenie, które prosi baner o ponowne pokazanie się. */
export const OPEN_CONSENT_EVENT = "dk-open-consent";

/** Odczytuje zapisaną decyzję. `null` = użytkownik jeszcze nie wybrał. */
export function readConsent(): ConsentValue | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    // localStorage bywa zablokowany (np. tryb prywatny) – traktujemy to jak brak decyzji
    return null;
  }
}

/** Zapisuje decyzję i powiadamia wszystkie komponenty, które jej słuchają. */
export function writeConsent(value: ConsentValue) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // brak dostępu do localStorage – zgoda zadziała tylko do odświeżenia strony
  }
  window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT));
}

/** Otwiera baner cookies ponownie (link „Ustawienia cookies” w stopce). */
export function openConsentSettings() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}

/*
 * Trzy elementy poniżej są dla Reactowego hooka useSyncExternalStore:
 *   useSyncExternalStore(subscribeConsent, getConsentSnapshot, () => SERVER_CONSENT)
 * Dzięki temu komponent sam się odświeża, kiedy zgoda się zmieni.
 */

/** Zapisuje „słuchacza” zmian zgody. Zwraca funkcję, która go wypisuje. */
export function subscribeConsent(callback: () => void) {
  window.addEventListener(CONSENT_CHANGED_EVENT, callback);
  window.addEventListener("storage", callback); // zmiana w innej karcie przeglądarki
  return () => {
    window.removeEventListener(CONSENT_CHANGED_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/** Aktualna decyzja w przeglądarce. */
export function getConsentSnapshot(): ConsentValue | null {
  return readConsent();
}

/** Wartość używana na serwerze, gdzie zgody jeszcze nie znamy: nic nie pokazujemy i nic nie ładujemy. */
export const SERVER_CONSENT = "unknown" as const;
