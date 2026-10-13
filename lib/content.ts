/**
 * Teksty wspólne dla kilku podstron: opinie z Google i podstawowe pytania FAQ.
 *
 * Teksty używane tylko na jednej podstronie leżą obok niej, w pliku content.tsx
 * (np. app/online/content.tsx).
 */
import type { Review } from "@/components/site/Cards";

/**
 * Opinie podopiecznych, przepisane dosłownie z Google (łącznie z literówkami i emotkami).
 * Nie przeredagowywać: to cytaty. Kolejność i wybór opinii ustala każda podstrona.
 */
export const REVIEWS = {
  krzysztof: {
    name: "Krzysztof",
    meta: "Ponad rok współpracy",
    text: "Z Matim trenuję od ponad roku i od samego początku pokazał mi, jak poprawnie wykonywać ćwiczenia. Udostępnił mi plan treningowy oraz dodatkowe materiały, dzięki którym nauczyłem się podstaw treningu i odżywiania. Najbardziej cenię to, że nie tylko prowadził mnie na bieżąco, ale też nauczył mnie samodzielności dzięki temu wiem jak dalej trenować i dbać o swoją formę na własną rękę",
  },
  bartek: {
    name: "Bartek",
    meta: "Redukcja",
    text: "Współpraca z Mateuszem to była jedna z lepszych decyzji, jakie podjąłem 💪 Dzięki jego wsparciu udało mi się schudnąć i wyraźnie poprawić sylwetkę. Kontakt przez cały czas był świetny. Mateusz zawsze odpowiadał szybko, wszystko tłumaczył w prosty i zrozumiały sposób, bez zbędnego komplikowania. Widać, że naprawdę zależy mu na podopiecznych i ich efektach.",
  },
  katalin: {
    name: "Katalin",
    meta: "Prowadzenie online",
    text: "Bardzo odpowiada mi współpraca treningowa z Mateuszem. Ciśnie, ale nie za bardzo, chwali, gdy jest dobrze. Plany treningowe podładowane pod cel. Ćwiczenia nie przekombinowane, na bieżąco reaguje na moje uwagi gdy coś mi nie pasuje. Widzę progres. Jestem silniejsza ;)",
  },
  dominik: {
    name: "Dominik",
    meta: "Prowadzenie online",
    text: "Bardzo polecam współpracę! Plan treningowy zawsze dopasowany pode mnie i jasno rozpisany, więc wiadomo co i jak robić. Duży plus za analizę techniki, dostaję konkretne wskazówki i faktycznie widać progres. Wszystko tłumaczone na luzie i zrozumiale, bez zbędnego komplikowania. Do tego świetny kontakt i zaangażowanie.",
  },
  stacjonarny: {
    name: "Podopieczny",
    meta: "Trening stacjonarny",
    text: "Bardzo polecam współpracę!!! Z całego serca polecam współpracę z Mateuszem! 💪 Dzięki jego wiedzy, zaangażowaniu i profesjonalnemu podejściu wróciłem na siłownię po bardzo trudnym okresie. Mateusz jest sumiennym, rzetelnym i cierpliwym trenerem, który potrafi świetnie zmotywować i indywidualnie podchodzi do każdej osoby.",
  },
} satisfies Record<string, Review>;

/**
 * Pytania FAQ wspólne dla /online i /jaworzno.
 * Każda podstrona składa z nich własną listę i dokłada pytania tylko dla siebie.
 * `q` = pytanie, `a` = odpowiedź.
 */
export const FAQ_BASE = {
  doswiadczenie: {
    q: "Czy muszę mieć doświadczenie?",
    a: "Nie. Większość moich podopiecznych zaczyna od podstaw. Na początku skupiamy się na nauce techniki, dobraniu odpowiednich ciężarów i zbudowaniu regularności. Nie musisz wiedzieć, od czego zacząć - od tego jestem ja.",
  },
  dieta: {
    q: "Czy dostanę gotową dietę?",
    a: "Nie rozpisuję sztywnych jadłospisów. Otrzymujesz indywidualną rozpiskę kalorii i makroskładników, przykładowe dni jedzenia oraz bibliotekę prostych posiłków. Dzięki temu jesz to, co lubisz, jednocześnie realizując swój cel.",
  },
  filmy: {
    q: "Czy mogę wysyłać filmy z treningu do oceny?",
    a: "Tak, bardzo to polecam. Regularnie analizuję technikę na podstawie Twoich nagrań. Dzięki temu mogę wychwycić błędy, zanim utrwalą się złe nawyki i dobrać odpowiednią progresję.",
  },
  kontakt: {
    q: "Jak wygląda kontakt podczas współpracy?",
    a: "Na bieżące pytania odpowiadam przez WhatsApp. Raz w tygodniu analizujemy raport i w razie potrzeby wprowadzamy zmiany. Z planem treningowym nie zostajesz bez wsparcia.",
  },
  plan: {
    q: "Jak często zmieniany jest plan?",
    a: "Nie zmieniam planu tylko dlatego, że minął miesiąc. Aktualizujemy go wtedy, kiedy jest to potrzebne - gdy pojawi się zastój, zmieni się Twój cel lub wykorzystamy potencjał obecnego planu.",
  },
  pytania: {
    q: "Co jeśli mam pytanie między raportami?",
    a: "Pisz śmiało. Nie ma głupich pytań. Wolę odpowiedzieć na jedno krótkie pytanie od razu niż później przez tydzień poprawiać źle wykonywane ćwiczenie.",
  },
  zdrowie: {
    q: "Mam kontuzję albo problem zdrowotny. Czy mogę zacząć?",
    a: "Przy lekkim bólu tak, ale jeśli potrzebna jest diagnostyka, najpierw fizjoterapeuta albo lekarz. Z ich zaleceniami dopasuję plan i każdą zmianę wytłumaczę.",
  },
};
