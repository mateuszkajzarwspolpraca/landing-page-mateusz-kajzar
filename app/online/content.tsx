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
import { ResultTable, type Fear, type Milestone, type Story } from "@/components/site/OnlineSections";
import { FAQ_BASE } from "@/lib/content";

/** Słowo, które klient wpisuje w wiadomości na Instagramie. Po nim wiesz, że przyszedł z tej strony. */
export const KEYWORD = "ONLINE";

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
    start: (
      <>
        Nigdy wcześniej nie była na siłowni.{" "}
        <span className="text-white">„Najbardziej bałam się ludzi wokół (…) porównywania się do ludzi, którzy trenują o wiele, wiele dłużej niż ja.”</span>
      </>
    ),
    journey: (
      <>
        Nie zaczęliśmy od sztangi:{" "}
        <span className="text-white">„zaczynaliśmy od zwykłych przysiadów, potem robiliśmy goblet, dopiero potem robiliśmy przysiad faktycznie ze sztangą.”</span>{" "}
        Kiedy siłownia była zamknięta, zrobiła trening w domu z hantlami 2 kg:{" "}
        <span className="text-white">„lepiej zrobić cokolwiek, niż nie zrobić nic.”</span>
      </>
    ),
    resultLabel: "Po 3 miesiącach",
    result: <p className="text-2xl font-black text-white">Talia −6 cm</p>,
    quote: "Wcześniej chodziłam taka przykurczona, teraz chodzę wyprostowana. Dzięki temu też plecy mnie nie bolą.",
  },
  {
    name: "Jeremi",
    tag: "Start od zera",
    color: "sky",
    start: (
      <>
        Zaczynał od pytania:{" "}
        <span className="text-white">„Jest jakaś metoda na oszacowanie tego? Żebym nie musiał na ślepo zgadywać, skąd powinienem zacząć?”</span>
      </>
    ),
    journey: (
      <>
        Przyszedł okres, w którym wszystko zwaliło mu się na głowę naraz. Napisałem mu:{" "}
        <span className="text-white">„Nie widzę sensu cię cisnąć i męczyć o robienie na siłę treningów, bo to tylko pogorszy aktualny młyn.”</span>{" "}
        Dopasowaliśmy plan do jego życia, a nie odwrotnie. Nie odpadł.
      </>
    ),
    resultLabel: "Po ok. 3,5 miesiąca",
    result: (
      <>
        <p className="text-white/75">Podciąganie z pomocą maszyny:</p>
        <ResultTable
          rows={[
            ["Start", "42,5 kg pomocy × 5"],
            ["Rekord", "14 kg pomocy × 8"],
          ]}
        />
      </>
    ),
    quote: "Wczoraj wyprzedzałem, cisnąłem mocniej, a tętno spadało mi do normy względnie szybko.",
    quoteLead: "Rok później znowu był w górach:",
  },
  {
    name: "Katalin",
    tag: "Siła i triathlon",
    color: "amber",
    start: "Chciała mieć więcej siły i nauczyć się podciągać. Na początku problemem było samo opuszczenie się na drążku.",
    journey: (
      <>
        Dużo na głowie i mało czasu. Kiedy tydzień był za ciężki, nic nie nadrabialiśmy. Napisałem jej:{" "}
        <span className="text-white">„Niczego nie trzeba nadrabiać (…) po powrocie po prostu wracamy do regularności.”</span>
      </>
    ),
    resultLabel: "Po pół roku",
    result: (
      <>
        <ResultTable
          rows={[
            ["Martwy ciąg rumuński", "30 → 63 kg"],
            ["Hip thrust", "40 → 68 kg"],
            ["Przysiad", "12 → 35 kg"],
          ]}
        />
        <p className="mt-3 text-white/75">Po drodze sama zapisała się na triathlon.</p>
      </>
    ),
    quote: "Byłam ostatnia, ale ukończyłam.",
    quoteLead: "Po zawodach napisała:",
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
    text: "Do każdej decyzji dostajesz „dlaczego”. Co tydzień jedna krótka infografika zamiast stu stron teorii.",
  },
  {
    title: "Decydujesz",
    text: "Ciężar dobierasz bez zgadywania, lżejszy tydzień ustawiasz bez poczucia winy i wiesz, co zmienić, a czego nie ruszać.",
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

/** Zdanie pod przyciskiem DM w hero i przy cenie. */
export const DM_NOTE = "Odpisuję w ciągu 24 godzin. Pierwsza rozmowa jest darmowa, nic Ci nie wcisnę.";

/** „Co się dzieje, gdy napiszesz”: 4 kroki. */
export const afterMessage = [
  { title: `Piszesz „${KEYWORD}” na Instagramie`, text: "Możesz od razu zapytać o cokolwiek. Nie musisz jeszcze nic decydować." },
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
