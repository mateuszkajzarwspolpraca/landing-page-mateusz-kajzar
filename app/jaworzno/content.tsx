/**
 * Teksty strony /jaworzno (treningi personalne na żywo).
 * Chcesz zmienić tekst na stronie? Najpierw szukaj tutaj. Układ sekcji jest w page.tsx.
 */
import Link from "next/link";
import type { FaqItem } from "@/components/site/Faq";
import { FAQ_BASE } from "@/lib/content";

/** Słowo, które klient wpisuje w wiadomości na Instagramie. Po nim wiesz, że przyszedł z tej strony. */
export const KEYWORD = "JAWORZNO";


/** Linki w górnym menu. `href` wskazuje `id` sekcji na stronie. */
export const navLinks = [
  { label: "Jak wygląda", href: "#jak" },
  { label: "Cena", href: "#oferta" },
  { label: "Gdzie", href: "#gdzie" },
  { label: "FAQ", href: "#faq" },
];

/** „Czego nie dostaniesz. I co dostaniesz zamiast.”: `no` = przekreślone, `yes` = co dostajesz. */
export const contrast = [
  { no: "Planu w PDF-ie i ciszy.", yes: "Cotygodniowy raport i odpowiedź na WhatsAppie w ciągu 24 godzin." },
  { no: "„Musisz się bardziej postarać”.", yes: "Neutralne podejście do gorszego tygodnia. Szukamy przyczyny, nie winnego." },
  { no: "Bycia cyferką w Excelu.", yes: "Trenera obok na treningu, a między treningami analizy Twoich nagrań." },
  { no: "Nachalnej sprzedaży.", yes: "Rozmowy bez ciśnienia. Nic Ci nie wcisnę." },
  { no: "Skomplikowanych diet i żargonu.", yes: "Prostego systemu, który rozumiesz." },
];

/** „Od wiadomości do pierwszego treningu”: 4 kroki. */
export const steps = [
  { title: `Piszesz „${KEYWORD}” na Instagramie`, text: "Możesz od razu zapytać o cokolwiek. Nie musisz jeszcze nic decydować." },
  { title: "Krótka rozmowa", text: "Twój cel, co wcześniej nie wyszło, ile realnie masz czasu w tygodniu." },
  { title: "Stały dzień i godzina", text: "Ustalamy termin treningów, który wpasuje się w Twój tydzień." },
  { title: "Pierwszy trening", text: "Technika na spokojnie. Ciężar dokładamy dopiero wtedy, kiedy ruch jest pewny." },
];

/** Cennik: co jest w pakietach 5-tygodniowych. */
export const packageIncluded = [
  "Treningi personalne na żywo",
  "Indywidualny plan na treningi między spotkaniami",
  "Kalorie i makro + przykładowe dni i biblioteka posiłków",
  "Analiza techniki z Twoich nagrań",
  "Cotygodniowe raporty",
  "Kontakt na WhatsAppie, odpowiedź w ciągu 24 godzin",
];

/** FAQ tej strony: własne pytania + wspólne z lib/content.ts (FAQ_BASE). */
export const faq: FaqItem[] = [
  FAQ_BASE.doswiadczenie,
  {
    q: "Czy mogę kupić jeden trening?",
    a: "Tak, pojedynczy trening kosztuje 200 zł. Pakiety 5-tygodniowe mają w cenie też prowadzenie online między treningami: plan, jedzenie, analizę techniki, raporty i kontakt na WhatsAppie.",
  },
  {
    q: "Boję się, że na sali wszyscy będą patrzeć. Co wtedy?",
    a: "To częsta obawa na start i jest zupełnie normalna. Zaczynamy od prostych wersji ćwiczeń, a ja jestem obok przez cały trening. Błędy są w porządku, od ich poprawiania jestem ja.",
  },
  FAQ_BASE.kontakt,
  FAQ_BASE.zdrowie,
  {
    q: "Nie jestem z Jaworzna. Mogę trenować z Tobą online?",
    a: (
      <>
        Tak. Prowadzenie online działa z każdego miejsca w Polsce. Szczegóły:{" "}
        <Link href="/online" className="font-bold text-red-500 underline underline-offset-4">
          Współpraca online →
        </Link>
      </>
    ),
  },
];
