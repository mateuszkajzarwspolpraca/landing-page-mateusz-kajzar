/**
 * Teksty strony /online (prowadzenie online).
 *
 * Tu są wszystkie listy i dłuższe treści: historie, etapy, obawy, cennik, FAQ itd.
 * Chcesz zmienić tekst na stronie? Najpierw szukaj tutaj. Układ i kolejność sekcji są w page.tsx.
 *
 * Plik ma rozszerzenie .tsx, bo część tekstów zawiera JSX (np. pogrubienia albo link w odpowiedzi FAQ).
 */
import Link from "next/link";
import type { FaqItem } from "@/components/site/Faq";
import type { Fear, Milestone, Story } from "@/components/site/OnlineSections";
import { FAQ_BASE } from "@/lib/content";

/**
 * Film VSL w hero. `videoId` to część linku YouTube po /shorts/ (albo po ?v=).
 * `poster` = zdjęcie widoczne przed kliknięciem. Najlepiej pionowa klatka z filmu (9:16) w public/images/.
 */
export const VSL = {
  videoId: "djGXojuZ3FY",
  title: "Jak wygląda prowadzenie online z Mateuszem",
  poster: "/images/hero/hero-online.jpg",
  label: "Zobacz, jak pracuję",
};

/** Linki w górnym menu. `href` wskazuje `id` sekcji na stronie. */
export const navLinks = [
  { label: "Historie", href: "#historie" },
  { label: "Jak pracuję", href: "#metoda" },
  { label: "Cena", href: "#oferta" },
  { label: "Opinie", href: "#opinie" },
  { label: "FAQ", href: "#faq" },
];

/** Karuzela „Historie”. Kolejność tutaj = kolejność na stronie. */
export const stories: Story[] = [
  {
    name: "Maja",
    tag: "Pierwszy raz na siłowni",
    color: "emerald",
    startLabel: "Przyszła z",
    start: "Chciała wzmocnić ciało do codziennych czynności. Problemy bólowe.",
    obstacles: "Strach przed siłownią: nie wiedziała, jak ćwiczyć i czy się tam odnajdzie.",
    when: "po 3 miesiącach",
    headline: "Talia −6 cm",
    rows: [
      ["Martwy ciąg rumuński", "20 → 37,5 kg"],
      ["Hip thrust", "0 → 45 kg"],
      ["Waga", "−2 kg"],
      ["Plecy", "nie bolą"],
    ],
    quote: "Wcześniej chodziłam taka przykurczona, teraz chodzę wyprostowana.",
  },
  {
    name: "Jeremi",
    tag: "Start od zera",
    color: "sky",
    startLabel: "Przyszedł z",
    start: "Estetyczna sylwetka (rekompozycja), poprawna technika, zdrowe nawyki.",
    obstacles: "Łączenie studiów, pracy, treningu i życia prywatnego.",
    when: "po 6 miesiącach",
    headline: "Praca, doktorat, życie prywatne i trening. Pogodzone.",
    rows: [
      ["Podciąganie", "0 → 3"],
      ["Wyciskanie leżąc", "25 → 40 kg"],
      ["Martwy ciąg rumuński", "30 → 45 kg"],
      ["Obwód barków", "+6 cm"],
    ],
    quote: "I tak jestem zadowolony, że w ogóle kontynuuję trenowanie.",
  },
  {
    name: "Katalin",
    tag: "Siła i 1/8 Ironmana",
    color: "amber",
    startLabel: "Przyszła z",
    start: "Budowa zdrowej, sprawnej i silnej sylwetki.",
    obstacles: "Praca, rodzina, brak czasu i tendencja do zaniżania własnych osiągnięć.",
    when: "po pół roku",
    headline: "Martwy ciąg ×2",
    rows: [
      ["Martwy ciąg rumuński", "30 → 63 kg"],
      ["Hip thrust", "40 → 68 kg"],
      ["Przysiad", "12 → 37,5 kg"],
      ["1/8 Ironmana", "ukończona"],
    ],
    quote: "Bywają takie dni i tygodnie. Nie ma spiny, są drugie terminy.",
  },
  {
    name: "Szymon",
    tag: "Powrót po kontuzji barku",
    color: "violet",
    startLabel: "Przyszedł z",
    start: "Kontuzja barku, waga blisko setki.",
    obstacles: "Bark wyklucza część ćwiczeń, zajęte lato.",
    when: "po 2 miesiącach",
    headline: "−2,5 kg",
    rows: [
      ["Martwy ciąg rumuński", "30 → 70 kg"],
      ["Martwy ciąg (trap bar)", "40 → 70 kg"],
      ["Hip thrust", "30 → 60 kg"],
      ["Wyciskanie nad głowę", "bez bólu barku"],
    ],
    quote: "Myślałem, że poczuję bark, ale nie poczułem ani trochę.",
  },
];

/** „Jak pracuję”: 3 etapy. */
export const phases = [
  {
    title: "Wykonujesz",
    text: "Dostajesz gotowy plan, rozpiskę jedzenia i film do każdego ćwiczenia. Na start nie musisz niczego wiedzieć, od tego jestem ja.",
  },
  {
    title: "Rozumiesz",
    text: "Co tydzień dostajesz proste infografiki, z których uczysz się fitnessu i rozumiesz, dlaczego podejmujemy takie, a nie inne decyzje.",
  },
  {
    title: "Decydujesz",
    text: "Im dłużej pracujemy, tym większą masz świadomość podejmowanych decyzji. Celem końcowym współpracy jest doprowadzić Cię do miejsca, w którym nie potrzebujesz trenera.",
  },
];

/** „Jak pracuję”: roadmapa pierwszych 3 miesięcy. */
export const roadmap: Milestone[] = [
  {
    when: "Tydzień 1",
    title: "Wiesz, co robić od pierwszego treningu",
    text: "Plan, jedzenie i technika ustawione pod Ciebie. Bez zgadywania i bez szukania ćwiczeń w internecie.",
  },
  {
    when: "Miesiąc 1",
    title: "Trening wchodzi w Twój tydzień",
    text: "Regularność bez wywracania życia do góry nogami. Plan dopasowany do czasu, który realnie masz.",
  },
  {
    when: "Miesiąc 2",
    title: "Widzisz postęp i ćwiczysz pewnie",
    text: "Ciężary rosną, technika jest Twoja, a gorszy tydzień niczego nie przekreśla.",
  },
  {
    when: "Miesiąc 3",
    title: "Wiesz, co robić i dlaczego",
    text: "Podsumowanie efektów i kierunek na kolejne miesiące. Coraz więcej decyzji podejmujesz bez trenera.",
  },
];

/** Karuzela „Czego u mnie nie dostaniesz”: obawa → odpowiedź. Najważniejsze obawy dawaj na początek. */
export const fears: Fear[] = [
  {
    fear: "„Plan w PDF-ie i trener znika po miesiącu.”",
    answer: "Raport co tydzień i odpowiedź na WhatsAppie w ciągu 24 godzin. Nie ma raportu? W poniedziałek sam przypominam.",
  },
  {
    fear: "„Nikt nie sprawdzi, jak robię ćwiczenia.”",
    answer: "Do każdego ćwiczenia film. Ty nagrywasz serię, ja mówię, co poprawić. Niejasny film nagrywam od nowa, czasem pięć razy.",
  },
  {
    fear: "„Znowu usłyszę, że to moja wina.”",
    answer: "Gorszy tydzień to nie wina. Patrzymy na to neutralnie, szukamy przyczyny i dopasowujemy plan do Twojego życia, a nie odwrotnie.",
  },
  {
    fear: "„Treningi po dwie godziny.”",
    answer: "Plan pod czas, który realnie masz. 30–45 minut to nie trening dla ludzi, którym się nie chce. To trening dla ludzi, którzy mają pracę.",
  },
  {
    fear: "„Ten sam plan przez pół roku.”",
    answer: "Plan zmieniam, kiedy jest potrzeba: zastój, nowy cel, coś wyszło na nagraniu albo u fizjoterapeuty. Nie dla samej zmiany i nie po pół roku nudy.",
  },
  {
    fear: "„Sztywny jadłospis i jedzenie na siłę.”",
    answer: "Kalorie i makro, przykładowe dni i baza prostych posiłków. Z czasem budujemy Twoją listę ulubionych. Lepiej zjeść kebaba, niż mieć napad głodu i zepsuć cały tydzień 😅",
  },
  {
    fear: "„Docinki o wadze i wyglądzie.”",
    answer: "Rozmawiamy o tym, co potrafi Twoje ciało, a nie o tym, jak „powinno” wyglądać. Postęp oceniamy nie tylko po wadze: liczą się też zdjęcia, obwody, siła i samopoczucie.",
  },
  {
    fear: "„Rzucenie na głęboką wodę.”",
    answer: "Pierwszy tydzień na 60–70% możliwości. Zaczynamy od prostszych wersji ćwiczeń, a ciężar dokładamy, kiedy ruch jest pewny.",
  },
  {
    fear: "„Nachalna sprzedaż.”",
    answer: "Jeśli po rozmowie powiesz „muszę pomyśleć”, odezwę się najwyżej dwa razy. Potem temat jest zamknięty.",
  },
];

/** Cennik: co jest w obu wariantach. */
export const included = [
  "Indywidualny plan treningowy",
  "Kalorie i makro + przykładowe dni i biblioteka posiłków",
  "Analiza techniki z Twoich nagrań",
  "Cotygodniowe raporty",
  "Kontakt na WhatsAppie, odpowiedź w ciągu 24 godzin",
  "Aktualizacja planu, kiedy jest potrzebna",
];

/** „Kto po drugiej stronie”: lista „W co wierzę”. */
export const beliefs = [
  "Dobry plan to taki, który utrzymasz, a nie taki, który najlepiej wygląda na papierze.",
  "Gorszy tydzień to część procesu, a nie porażka. Plan dopasowujemy do Twojego życia, nie odwrotnie.",
  "Sam kocham przysiad, wyciskanie i martwy ciąg, ale nie wcisnę Ci ich tylko dlatego, że ja je lubię.",
  "Masz rozumieć, co robisz, a nie potrzebować trenera do końca życia.",
];

/** Zdanie pod przyciskiem DM w hero. */
export const DM_NOTE_HERO =
  "Napisz do mnie na Instagramie, aby umówić się na darmową konsultację. Porozmawiamy o Twoim celu i problemach, zobaczysz, jak wygląda prowadzenie, i sprawdzisz, czy to coś dla Ciebie.";

/** Zdanie pod przyciskiem DM przy cenie i na końcu strony. */
export const DM_NOTE_QUESTIONS = "Masz dodatkowe pytania? Odezwij się na Instagramie, postaram się pomóc.";

/** „Co się dzieje, gdy napiszesz”: 4 kroki. */
export const afterMessage = [
  { title: "Piszesz do mnie na Instagramie", text: "Możesz od razu zapytać o cokolwiek. Nie musisz jeszcze nic decydować." },
  { title: "Darmowa rozmowa, ok. 30 minut", text: "Bez opłat i bez zobowiązań. Głosowo albo z kamerką: Twój cel, co wcześniej nie wyszło, ile realnie masz czasu w tygodniu." },
  { title: "Plan startowy", text: "Zdjęcia i pomiary na punkt zero, jedzenie ustawione w aplikacji, plan na pierwsze treningi." },
  { title: "Pierwszy tydzień", text: "Technika na spokojnie, ok. 70% możliwości. Ciężar dokładamy potem." },
];

/** „Dla kogo to nie jest”. */
export const notFor = [
  { title: "Dla kogoś, kto szykuje się do zawodów i potrzebuje periodyzacji.", text: "To nie moja działka. Wolę uczciwie powiedzieć to teraz." },
  { title: "Dla kogoś, kto wie lepiej i mimo to zrobi po swojemu.", text: "Współpraca działa na zaufaniu do procesu. Bez tego szkoda czasu po obu stronach." },
  { title: "Dla kogoś po urazie, bez zaleceń specjalisty.", text: "Najpierw fizjoterapeuta albo lekarz. Z ich wytycznymi dopasuję plan." },
];

/** FAQ tej strony: własne pytania + wspólne z lib/content.ts (FAQ_BASE). Kolejność = kolejność na stronie. */
export const faq: FaqItem[] = [
  {
    q: "Czy pierwsza rozmowa jest płatna?",
    a: "Nie. Rozmowa jest darmowa i do niczego nie zobowiązuje. Poznajemy się, mówisz, co chcesz osiągnąć i co wcześniej nie wyszło, a ja pokazuję, jak mogłaby wyglądać nasza współpraca. Decyzję podejmujesz potem, na spokojnie.",
  },
  FAQ_BASE.doswiadczenie,
  FAQ_BASE.dieta,
  FAQ_BASE.filmy,
  FAQ_BASE.kontakt,
  FAQ_BASE.plan,
  {
    q: "Ile trwa współpraca?",
    a: "Proponuję 3 miesiące, bo mniej więcej tyle zajmuje ogarnięcie podstaw: technika, dobór ciężaru, jedzenie i radzenie sobie z gorszym tygodniem. Możesz też zacząć od jednego miesiąca, bez zobowiązania, i zdecydować, co dalej.",
  },
  {
    q: "Czy współpraca jest tylko online?",
    a: (
      <>
        Nie. Jeśli jesteś z Jaworzna albo okolic, możemy trenować też na żywo. Szczegóły:{" "}
        <Link href="/jaworzno" className="font-bold text-red-500 underline underline-offset-4">
          Współpraca Jaworzno →
        </Link>
      </>
    ),
  },
  FAQ_BASE.pytania,
  FAQ_BASE.zdrowie,
];
