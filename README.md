# dekomplikator.com

Strona trenera personalnego Mateusza Kajzara: prowadzenie online i treningi w Jaworznie.
Kontakt z klientem odbywa się przez wiadomość (DM) na Instagramie, więc strona nie ma formularza ani bazy danych.

## Technologie

- **Next.js 16** (App Router): framework do budowy stron w React. Każdy folder w `app/` to osobny adres strony.
- **React 19**: komponenty, czyli kawałki interfejsu (przycisk, karta, sekcja).
- **TypeScript**: JavaScript z typami. Edytor podpowiada, jakie pola ma obiekt, i wyłapuje literówki.
- **Tailwind CSS 4**: style pisane klasami prosto w kodzie, np. `className="text-white bg-black p-4"`.
- **shadcn/ui + Radix UI**: gotowy, dostępny komponent rozwijanej listy (tylko FAQ).
- **lucide-react**: ikony.
- **Netlify**: hosting.

## Uruchomienie na komputerze

Potrzebny jest Node.js (wersja 20 albo nowsza).

```bash
npm install      # instaluje biblioteki (raz, i po każdej zmianie package.json)
npm run dev      # podgląd na żywo: http://localhost:3000
```

Przed publikacją warto sprawdzić, czy wszystko się buduje:

```bash
npm run lint     # szuka błędów w kodzie
npm run build    # buduje stronę tak, jak zrobi to Netlify
```

## Struktura projektu

```
app/                          Podstrony. Folder = adres, plik page.tsx = treść strony.
  layout.tsx                  Szkielet wspólny dla wszystkich stron (SEO, loader, cookies, statystyki).
  globals.css                 Globalne style: kolory marki, czcionka, animacje.
  page.tsx                    Strona główna (/) z wyborem: online albo Jaworzno.
  online/
    page.tsx                  Układ strony /online (kolejność sekcji).
    content.tsx               Teksty strony /online (historie, obawy, cennik, FAQ…).
  jaworzno/
    page.tsx                  Układ strony /jaworzno.
    content.tsx               Teksty strony /jaworzno.
  regulamin/page.tsx          Regulamin.
  polityka-prywatnosci/page.tsx  Polityka prywatności (RODO, cookies).
  error.tsx, not-found.tsx    Strona błędu i strona 404.
  robots.ts, sitemap.ts       Pliki dla wyszukiwarek (/robots.txt, /sitemap.xml).

components/
  site/                       Komponenty tej strony.
    Section.tsx               Sekcja, nagłówek sekcji, blok tekstu.
    Cards.tsx                 Karty: opinia, cennik, kroki, lista z ptaszkami, ocena Google.
    OnlineSections.tsx        Karty tylko dla /online: historie, obawy, etapy, roadmapa.
    SwipeCarousel.tsx         Zapętlona karuzela do przesuwania palcem.
    VideoEmbed.tsx            Film z YouTube wczytywany dopiero po kliknięciu (VSL na /online).
    DmButton.tsx              Przyciski „Napisz do mnie na Instagramie”.
    StickyDm.tsx              Przycisk DM przyklejony do dołu ekranu (telefon).
    SiteHeader.tsx            Górny pasek z menu.
    SiteFooter.tsx            Stopka.
    Faq.tsx                   Rozwijane pytania i odpowiedzi.
    LegalPage.tsx             Układ regulaminu i polityki prywatności.
    PageLoader.tsx            Ekran ładowania z logo.
    CookieConsent.tsx         Baner zgody na cookies.
    GoogleAnalytics.tsx       Statystyki Google Analytics (ładują się dopiero po zgodzie).
  ui/
    accordion.tsx             Gotowy komponent z shadcn/ui (zwykle się go nie edytuje).

lib/                          Logika i dane, bez wyglądu.
  site.ts                     Stałe: adres strony, Instagram, e-mail, ocena Google, siłownia.
  content.ts                  Teksty wspólne: opinie z Google i podstawowe FAQ.
  consent.ts                  Zapis i odczyt zgody na cookies.
  analytics.ts                Wysyłanie własnych zdarzeń do Google Analytics.
  utils.ts                    Funkcja cn() do sklejania klas Tailwinda.

public/images/                Zdjęcia i logo (adres w kodzie zaczyna się od /images/…).
```

## Najczęstsze zmiany

| Chcę zmienić… | Gdzie |
|---|---|
| Tekst na stronie /online albo /jaworzno | `app/online/content.tsx`, `app/jaworzno/content.tsx`; nagłówki i krótkie akapity sekcji są w `page.tsx` obok |
| Kolejność sekcji | `page.tsx` danej strony (sekcje są ponumerowane w komentarzach) |
| Ceny | sekcja „Oferta” w `page.tsx` danej strony |
| Opinie z Google | `lib/content.ts` (`REVIEWS`), wybór i kolejność w `page.tsx` danej strony |
| Pytania FAQ | wspólne w `lib/content.ts` (`FAQ_BASE`), lista dla strony w jej `content.tsx` |
| Instagram, e-mail, ocena Google, adres siłowni | `lib/site.ts` |
| Kolory tła kart i sekcji | `app/globals.css` (`--color-surface`, `--color-surface-dark`) |
| Film VSL (link, zdjęcie przed kliknięciem) | `VSL` w `app/online/content.tsx` |
| Tytuł i opis w Google | `metadata` w `page.tsx` danej strony, domyślne w `app/layout.tsx` |

## Nowa podstrona

1. Utwórz folder w `app/`, np. `app/nowa/`, a w nim `page.tsx`. Strona będzie pod adresem `/nowa`.
2. Złóż ją z gotowych klocków: `SiteHeader`, `Section`, `SectionHeading`, `Prose`, `DmBlock`, `SiteFooter`.
3. Dopisz adres do `app/sitemap.ts`.

## Statystyki i cookies

- Google Analytics 4 ładuje się dopiero po kliknięciu „Akceptuję” w banerze cookies.
  Identyfikator `G-…` wpisuje się w `lib/site.ts` (`GA_MEASUREMENT_ID`).
- Każde kliknięcie przycisku DM wysyła do GA4 zdarzenie `dm_click` z parametrem `dm_source` (np. `online-hero`).
  Żeby widzieć rozbicie na przyciski, w GA4 utwórz wymiar niestandardowy: Administracja → Niestandardowe definicje → parametr `dm_source`.
- Włączenie filmu VSL wysyła zdarzenie `video_play` (pole `video_id`).

## Do uzupełnienia

- `GOOGLE_REVIEWS_URL` w `lib/site.ts`: link do opinii Google (wtedy ocena na stronie stanie się klikalna).
