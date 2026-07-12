import {
  ArrowRight,
  Check,
  Dumbbell,
  Goal,
  Monitor,
  MessageCircle,
  Star,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  {
    initials: "DO",
    name: "Dominik",
    title: "Plan zawsze był dopasowany do mnie i jasno rozpisany.",
    text: "Plan treningowy zawsze dopasowany do mnie i jasno rozpisany, więc od początku wiedziałem co robić. Duży plus za analizę techniki i konkretne wskazówki, dzięki którym było widać progres.",
    meta: "Prowadzenie online",
    icon: Monitor,
  },
  {
    initials: "KH",
    name: "Katalin",
    title:
      "+30 kg w przysiadzie, martwym ciągu i hip thrust przy rekompozycji sylwetki.",
    text: "Bardzo odpowiada mi współpraca treningowa z Mateuszem. Plany treningowe podładowane pod cel. Ćwiczenia nie przekombinowane, a Mateusz na bieżąco reaguje na moje uwagi. Widzę progres. Jestem silniejsza!",
    meta: "Prowadzenie online",
    icon: Dumbbell,
    highlight: "+30 kg w przysiadzie, martwym i hip thrust",
  },
  {
    initials: "KK",
    name: "Krzysztof",
    title: "Nauczył mnie trenować samodzielnie.",
    text: "Z Matim trenuję od ponad roku i od samego początku pokazał mi, jak poprawnie wykonywać ćwiczenia. Najbardziej cenię to, że nie tylko prowadzi mnie na bieżąco, ale też nauczył mnie samodzielności.",
    meta: "Ponad rok współpracy",
    icon: Goal,
  },
  {
    initials: "BL",
    name: "Bartek",
    title: "Schudłem i poprawiłem sylwetkę.",
    text: "Współpraca z Mateuszem to była jedna z lepszych decyzji, jakie podjąłem. Dzięki jego wsparciu udało mi się schudnąć i wyraźnie poprawić sylwetkę. Kontakt był szybki, prosty i konkretny.",
    meta: "Redukcja masy ciała",
    icon: TrendingDown,
  },
];

const commonFeedback = [
  "Dopasowane plany",
  "Analiza techniki",
  "Świetny kontakt",
  "Indywidualne podejście",
];

export function Opinie() {
  return (
    <section
      id="opinie"
      data-section
      className="relative min-h-screen overflow-hidden bg-[#070707] text-white lg:h-screen"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(239,35,42,0.1),transparent_22%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_75%,rgba(255,255,255,0.04),transparent_20%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-6 pt-28 sm:px-8 lg:h-screen lg:px-12 lg:pt-[80px]">
        <Reveal>
          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">
                Opinie
              </p>
              <div className="mt-3 h-0.5 w-16 bg-red-600" />

              <h2 className="mt-4 max-w-xl text-4xl font-black leading-[0.95] sm:text-5xl lg:text-[46px]">
                Co mówią
                <span className="block text-red-500">podopieczni?</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-neutral-400 sm:text-base">
                Efekty to jedno, ale zaufanie i dobre relacje są dla mnie
                równie ważne.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-white/12 bg-[#111111]/75 p-4 backdrop-blur transition duration-300 hover:border-red-500/35 hover:bg-white/[0.055]">
                <div className="flex gap-1 text-red-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-6 w-6 fill-red-500" />
                  ))}
                </div>

                <div className="mt-3 flex items-end gap-3">
                  <p className="text-4xl font-black leading-none">5,0</p>
                  <p className="pb-0.5 text-base font-semibold leading-5">
                    6 opinii
                    <span className="block text-neutral-400">w Google</span>
                  </p>
                </div>

                <div className="my-3 h-px bg-white/10" />

                <p className="text-sm text-neutral-400">
                  100% ocen <span className="text-red-500">★★★★★</span>
                </p>
              </div>

              <div className="rounded-lg border border-white/12 bg-[#111111]/75 p-4 backdrop-blur transition duration-300 hover:border-red-500/35 hover:bg-white/[0.055]">
                <p className="text-base font-black">
                  Najczęściej pojawiające się opinie
                </p>

                <div className="mt-3 space-y-2.5">
                  {commonFeedback.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-red-500 text-red-500">
                        <Check className="h-3 w-3" />
                      </span>
                      <p className="text-sm text-white/82">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-5 grid flex-1 gap-4 lg:grid-cols-4 lg:items-stretch">
          {reviews.map((review, index) => (
            <Reveal key={review.name} delay={0.08 * index} className="h-full">
              <article className="group flex h-full rounded-lg border border-white/10 bg-[#111111]/72 p-4 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_60px_rgba(239,35,42,0.18)]">
                <div className="flex w-full flex-col">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/30 text-sm font-black transition group-hover:border-red-500">
                      {review.initials}
                    </div>

                    <div className="flex gap-1 text-red-500">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="h-4 w-4 fill-red-500" />
                      ))}
                    </div>
                  </div>

                  <h3 className="mt-4 text-lg font-black leading-tight">
                    <span className="text-red-500">“</span>
                    {review.title}
                    <span className="text-red-500">”</span>
                  </h3>

                  <p className="mt-3 text-[13px] leading-5 text-neutral-400">
                    {review.text}
                  </p>

                  {review.highlight && (
                    <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3 text-[13px] text-white/80">
                      <TrendingUp className="h-4 w-4 text-red-500" />
                      {review.highlight}
                    </div>
                  )}

                  <div className="mt-auto pt-4">
                    <p className="font-black">{review.name}</p>
                    <div className="mt-1 flex items-center gap-2 text-xs text-neutral-400">
                      <review.icon className="h-4 w-4 text-red-500" />
                      {review.meta}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24}>
          <div className="mt-4 grid gap-3 rounded-lg border border-white/10 bg-[#111111]/75 p-4 backdrop-blur transition duration-300 hover:border-red-500/35 hover:bg-white/[0.055] lg:grid-cols-[1fr_1fr_auto] lg:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
                <span className="text-2xl font-black text-black">G</span>
              </div>

              <div>
                <p className="text-base font-black">
                  Zobacz wszystkie opinie w Google
                </p>
                <p className="mt-1 text-sm text-neutral-400">
                  6 opinii - Średnia ocena 5,0{" "}
                  <span className="text-red-500">★★★★★</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-white/10 lg:border-l lg:pl-8">
              <MessageCircle className="h-8 w-8 shrink-0 text-red-500" />
              <div>
                <p className="text-base font-black">
                  Twoje cele mogą być następne.
                </p>
                <p className="mt-1 text-sm text-neutral-400">
                  Zrób pierwszy krok - resztą zajmiemy się wspólnie.
                </p>
              </div>
            </div>

            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-3 rounded-md bg-red-600 px-6 py-2.5 text-sm font-black text-white transition duration-300 hover:bg-red-500"
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