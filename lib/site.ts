/**
 * Stałe dane strony: adresy, kontakt, siłownia.
 *
 * Wszystko, co powtarza się w kilku miejscach (np. link do Instagrama), trzymamy tutaj.
 * Zmieniasz wartość raz, a zmienia się na całej stronie.
 */

/** Główny adres strony. Używany w SEO (sitemap, robots, linki kanoniczne, podgląd w social media). */
export const SITE_URL = "https://dekomplikator.com";

/** Nazwa konta na Instagramie, bez „@”. */
export const INSTAGRAM_HANDLE = "dekomplikator";

/** Link do profilu na Instagramie. */
export const INSTAGRAM_PROFILE_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;

/**
 * Link, który od razu otwiera rozmowę (DM) na Instagramie: w aplikacji na telefonie
 * albo w przeglądarce na komputerze. Z niego korzystają wszystkie przyciski „Napisz do mnie”.
 */
export const INSTAGRAM_DM_URL = `https://ig.me/m/${INSTAGRAM_HANDLE}`;

/** E-mail widoczny w stopce i w dokumentach prawnych. */
export const CONTACT_EMAIL = "mateuszkajzar.wspolpraca@gmail.com";

/**
 * [DO UZUPEŁNIENIA] Link do wizytówki Google z opiniami
 * (Google Maps → Twoja wizytówka → Udostępnij → Kopiuj link).
 * Dopóki jest pusty, ocena „5,0 · 6 opinii” wyświetla się jako zwykły tekst, a nie link.
 */
export const GOOGLE_REVIEWS_URL = "";

/** Ocena z Google. Aktualizuj ręcznie, kiedy przybędą opinie. */
export const GOOGLE_RATING = { value: "5,0", count: 6 };

/** Siłownia, w której odbywają się treningi stacjonarne (strona /jaworzno). */
export const GYM = {
  name: "Fitness Club Graviton",
  street: "ul. Insurekcji Kościuszkowskiej 58",
  postalCode: "43-600",
  city: "Jaworzno",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Fitness+Club+Graviton+Insurekcji+Ko%C5%9Bciuszkowskiej+58+43-600+Jaworzno",
};
