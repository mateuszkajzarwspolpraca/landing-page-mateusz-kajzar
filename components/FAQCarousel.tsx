"use client";

import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  CircleHelp,
  Dumbbell,
  MapPin,
  MessageCircle,
  RefreshCw,
  Salad,
  Video,
} from "lucide-react";
import { TouchEvent, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const faqItems = [
  {
    category: "TRENING",
    icon: Dumbbell,
    question: "Czy muszę mieć doświadczenie?",
    shortQuestion: "Doświadczenie",
    answer:
      "Tak. Większość moich podopiecznych zaczyna od podstaw. Na początku skupiamy się na nauce techniki, dobraniu odpowiednich ciężarów i zbudowaniu regularności. Nie musisz wiedzieć, od czego zacząć - od tego jestem ja.",
  },
  {
    category: "ŻYWIENIE",
    icon: Salad,
    question: "Czy dostanę gotową dietę?",
    shortQuestion: "Dieta",
    answer:
      "Nie rozpisuję sztywnych jadłospisów. Otrzymujesz indywidualną rozpiskę kalorii i makroskładników, przykładowe dni jedzenia oraz bibliotekę prostych posiłków. Dzięki temu jesz to, co lubisz, jednocześnie realizując swój cel.",
  },
  {
    category: "TECHNIKA",
    icon: Video,
    question: "Czy mogę wysyłać filmy z treningu do oceny?",
    shortQuestion: "Analiza techniki",
    answer:
      "Tak, bardzo to polecam. Regularnie analizuję technikę na podstawie Twoich nagrań. Dzięki temu mogę wychwycić błędy, zanim utrwalą się złe nawyki i dobrać odpowiednią progresję.",
  },
  {
    category: "KONTAKT",
    icon: MessageCircle,
    question: "Jak wygląda kontakt podczas współpracy?",
    shortQuestion: "Kontakt",
    answer:
      "Na bieżące pytania odpowiadam przez WhatsApp. Raz w tygodniu analizujemy raport i w razie potrzeby wprowadzamy zmiany. Nie zostajesz sam z planem treningowym.",
  },
  {
    category: "PLAN",
    icon: RefreshCw,
    question: "Jak często zmieniany jest plan?",
    shortQuestion: "Zmiana planu",
    answer:
      "Nie zmieniam planu tylko dlatego, że minął miesiąc. Aktualizujemy go wtedy, kiedy jest to potrzebne - gdy pojawi się zastój, zmieni się Twój cel lub wykorzystamy potencjał obecnego planu.",
  },
  {
    category: "WSPÓŁPRACA",
    icon: CalendarCheck,
    question: "Ile trwa współpraca?",
    shortQuestion: "Czas współpracy",
    answer:
      "Nie narzucam minimalnego okresu współpracy. Najlepsze efekty osiągają osoby, które traktują trening jako długoterminowy proces, a nie miesięczne wyzwanie.",
  },
  {
    category: "LOKALIZACJA",
    icon: MapPin,
    question: "Czy współpraca jest tylko stacjonarna?",
    shortQuestion: "Lokalizacja",
    answer:
      "Nie. Treningi stacjonarne prowadzę w Jaworznie i Trzebini, natomiast prowadzenie online jest dostępne niezależnie od miejsca zamieszkania.",
  },
  {
    category: "PYTANIA",
    icon: CircleHelp,
    question: "Co jeśli mam pytanie między raportami?",
    shortQuestion: "Pytania",
    answer:
      "Pisz śmiało. Nie ma głupich pytań. Wolę odpowiedzieć na jedno krótkie pytanie od razu niż później przez tydzień poprawiać źle wykonywane ćwiczenie.",
  },
];

function formatNumber(value: number) {
  return String(value).padStart(2, "0");
}

export function FAQCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStart = useRef({ x: 0, y: 0 });
  const touchEnd = useRef({ x: 0, y: 0 });

  const activeItem = faqItems[activeIndex];
  const ActiveIcon = activeItem.icon;

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? faqItems.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) =>
      current === faqItems.length - 1 ? 0 : current + 1
    );
  };

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStart.current = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
    touchEnd.current = touchStart.current;
  };

  const handleTouchMove = (event: TouchEvent<HTMLElement>) => {
    touchEnd.current = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    };
  };

  const handleTouchEnd = () => {
    const distanceX = touchStart.current.x - touchEnd.current.x;
    const distanceY = touchStart.current.y - touchEnd.current.y;

    if (Math.abs(distanceX) < 55 || Math.abs(distanceX) < Math.abs(distanceY)) {
      return;
    }

    if (distanceX > 0) {
      goToNext();
    } else {
      goToPrevious();
    }
  };

  return (
    <section
      id="faq"
      data-section
      className="relative min-h-screen overflow-hidden bg-[#070707] text-white lg:h-screen"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(239,35,42,0.11),transparent_22%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_80%,rgba(255,255,255,0.05),transparent_18%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-8 pt-28 sm:px-8 lg:h-screen lg:px-12 lg:pb-6 lg:pt-[88px]">
        <Reveal>
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">
                FAQ
              </p>
              <div className="mt-3 h-0.5 w-16 bg-red-600" />

              <h2 className="mt-4 max-w-4xl text-4xl font-black leading-none sm:text-5xl lg:text-[56px]">
                Masz pytania?{" "}
                <span className="block text-red-500 sm:inline">
                  Mam odpowiedzi.
                </span>
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-400 sm:text-base">
                Poniżej znajdziesz odpowiedzi na najczęściej zadawane pytania.
                Jeśli czegoś tu nie ma - napisz do mnie.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <p className="min-w-20 text-sm font-black text-white">
                {formatNumber(activeIndex + 1)}{" "}
                <span className="text-neutral-500">
                  / {formatNumber(faqItems.length)}
                </span>
              </p>

              <div className="flex items-center gap-1.5">
                {faqItems.map((item, index) => (
                  <button
                    key={item.category}
                    type="button"
                    aria-label={`Przejdź do pytania ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      activeIndex === index
                        ? "w-8 bg-red-600"
                        : "w-3 bg-white/18 hover:bg-white/35"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              type="button"
              aria-label="Poprzednie pytanie"
              onClick={goToPrevious}
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-md border border-red-600 bg-black/20 px-4 text-sm font-black text-white transition duration-300 hover:bg-red-600 sm:px-5"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Poprzednie
            </button>

            <button
              type="button"
              aria-label="Następne pytanie"
              onClick={goToNext}
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-md border border-red-600 bg-black/20 px-4 text-sm font-black text-white transition duration-300 hover:bg-red-600 sm:px-5"
            >
              Następne
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          <article
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative mt-4 min-h-[260px] touch-pan-y overflow-hidden rounded-lg border border-white/10 bg-[#111111]/80 p-5 backdrop-blur transition duration-300 hover:border-red-500/40 sm:p-7 lg:min-h-[300px] lg:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(239,35,42,0.1),transparent_28%)]" />

            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-red-500/50 bg-red-600/10 text-red-500">
                  <ActiveIcon className="h-8 w-8" />
                </div>

                <div>
                  <p className="inline-flex rounded-md border border-red-500/35 bg-red-600/10 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-red-500">
                    {activeItem.category}
                  </p>
                  <p className="mt-2 text-sm text-neutral-500">
                    Pytanie {formatNumber(activeIndex + 1)}
                  </p>
                </div>
              </div>

              <h3 className="mt-7 max-w-5xl text-3xl font-black leading-tight sm:text-4xl lg:text-[42px]">
                {activeItem.question}
              </h3>

              <p className="mt-5 max-w-5xl text-base leading-8 text-neutral-400 lg:text-lg">
                {activeItem.answer}
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-5 overflow-x-auto pb-2">
            <div className="grid min-w-[980px] grid-cols-8 gap-3 lg:min-w-0">
              {faqItems.map((item, index) => {
                const ItemIcon = item.icon;
                const isActive = activeIndex === index;

                return (
                  <button
                    key={item.question}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`group rounded-lg border p-3 text-left transition duration-300 hover:-translate-y-1 hover:border-red-500/40 ${
                      isActive
                        ? "border-red-500/70 bg-red-600/10"
                        : "border-white/10 bg-[#111111]/65"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-xs font-black ${
                          isActive ? "text-red-500" : "text-neutral-500"
                        }`}
                      >
                        {formatNumber(index + 1)}
                      </span>
                      <ItemIcon
                        className={`h-4 w-4 transition-colors ${
                          isActive
                            ? "text-red-500"
                            : "text-neutral-500 group-hover:text-red-500"
                        }`}
                      />
                    </div>

                    <p
                      className={`mt-3 text-[11px] font-black uppercase tracking-[0.14em] ${
                        isActive ? "text-red-500" : "text-neutral-500"
                      }`}
                    >
                      {item.category}
                    </p>

                    <p className="mt-2 text-xs font-semibold leading-4 text-white/78">
                      {item.shortQuestion}
                    </p>

                    <div
                      className={`mt-3 h-0.5 w-full ${
                        isActive ? "bg-red-600" : "bg-white/10"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-4 grid gap-4 rounded-lg border border-white/10 bg-[#111111]/80 p-4 backdrop-blur transition duration-300 hover:border-red-500/35 hover:bg-white/[0.055] lg:grid-cols-[1fr_1.5fr_auto] lg:items-center">
            <div className="flex items-center gap-4">
              <CheckCircle2 className="h-8 w-8 text-red-500" />
              <p className="text-base font-black">Nadal masz pytania?</p>
            </div>

            <p className="text-sm leading-5 text-neutral-400">
              Umów darmową konsultację. Przez około 30 minut porozmawiamy o
              Twoim celu, odpowiem na pytania i wspólnie ustalimy najlepszy plan
              działania.
            </p>

            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-3 rounded-md border border-red-600 bg-black/20 px-6 py-2.5 text-sm font-black transition duration-300 hover:bg-red-600"
            >
              Umów darmową konsultację
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}