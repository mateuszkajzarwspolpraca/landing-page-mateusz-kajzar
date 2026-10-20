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
 * Link do wizytówki Google z opiniami
 * (Google Maps → Twoja wizytówka → Udostępnij → Kopiuj link).
 * Ocena „5,0 · 9 opinii w Google” na stronie jest linkiem do tej wizytówki. Pusty link = zwykły tekst.
 */
export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Mateusz+Kajzar+-+Trener+Personalny+Jaworzno/@50.194001,19.2899212,17z/data=!4m6!3m5!1s0x4716eff5b63fc677:0x748c9689dc13cc8c!8m2!3d50.194001!4d19.2899212!16s%2Fg%2F11nbbcxzcv";

/** Ocena z Google. Aktualizuj ręcznie, kiedy przybędą opinie. */
export const GOOGLE_RATING = { value: "5,0", count: 9 };

/**
 * Identyfikator Google Analytics 4.
 * Gdzie go znaleźć: analytics.google.com → Administracja → Strumienie danych → strumień strony → Identyfikator pomiaru.
 * Pusty = statystyki wyłączone.
 */
export const GA_MEASUREMENT_ID = "G-3E6P5NWJW9";

/** Siłownia, w której odbywają się treningi stacjonarne (strona /jaworzno). */
export const GYM = {
  name: "Fitness Club Graviton",
  street: "ul. Insurekcji Kościuszkowskiej 58",
  postalCode: "43-600",
  city: "Jaworzno",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Fitness+Club+Graviton+Insurekcji+Ko%C5%9Bciuszkowskiej+58+43-600+Jaworzno",
};
