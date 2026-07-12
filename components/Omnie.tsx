import Image from "next/image";
import { Check, Dumbbell, Star, UserRound, Video } from "lucide-react";
import { Reveal } from "./Reveal";

const beliefs = [
  "Regularność wygrywa z perfekcją.",
  "Plan dopasowujemy do życia.",
  "Trening ma budować pewność siebie.",
  "Nie ma głupich pytań.",
  "Liczy się proces, nie jeden trening.",
];

const stats = [
  { icon: Dumbbell, value: "8+", label: "lat treningu" },
  { icon: Star, value: "5", label: "opinii Google" },
  { icon: Video, value: "3-4", label: "treści tygodniowo" },
  { icon: UserRound, value: "100%", label: "indywidualne prowadzenie" },
];

export function Omnie() {
  return (
    <section
      id="o-mnie"
      data-section
      className="relative min-h-screen overflow-hidden bg-black text-white lg:h-screen"
    >
      <div className="absolute inset-x-0 top-0 h-[110vh] lg:inset-y-0 lg:left-0 lg:h-auto lg:w-[42vw]">
        <Image
          src="/images/omnie/omnie.jpeg"
          alt="Mateusz Kajzar - trener personalny"
          fill
          priority
          className="object-cover object-[48%_58%] lg:object-[46%_58%]"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black lg:hidden" />
        <div className="absolute inset-y-0 right-0 hidden w-[34%] bg-gradient-to-l from-black/88 via-black/45 to-transparent lg:block" />
        <div className="absolute inset-y-0 left-0 hidden w-[24%] bg-gradient-to-r from-black/80 to-transparent lg:block" />
        <div className="absolute inset-x-0 top-0 hidden h-36 bg-gradient-to-b from-black/75 to-transparent lg:block" />
        <div className="absolute inset-x-0 bottom-0 hidden h-52 bg-gradient-to-t from-black via-black/70 to-transparent lg:block" />
      </div>

      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.42)_34%,rgba(0,0,0,0.96)_54%,rgba(0,0,0,1)_100%)] lg:block" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(239,35,42,0.07),transparent_24%)]" />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl px-5 pb-8 pt-28 sm:px-8 lg:h-screen lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:pb-7 lg:pt-32">
        <div className="relative lg:block">
          <Reveal className="max-w-sm lg:absolute lg:left-[-14.5rem] lg:top-0">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-500 sm:text-sm">
              O mnie
            </p>
            <div className="mt-3 h-0.5 w-16 bg-red-600 lg:mt-4" />

            <h2 className="mt-5 text-4xl font-black leading-[0.95] sm:text-5xl lg:mt-7 lg:text-5xl">
              Kilka słów
              <span className="block text-red-500">o mnie</span>
            </h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 gap-3 lg:absolute lg:bottom-8 lg:right-[12.5rem] lg:mt-0 lg:w-[92%] lg:grid-cols-4 lg:pr-0">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.08 * index} className="h-full">
                <div className="h-full rounded-lg border border-white/12 bg-black/45 p-3 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.06] lg:bg-white/[0.055]">
                <stat.icon className="h-5 w-5 text-red-500 lg:h-6 lg:w-6" />
                  <p className="mt-4 text-3xl font-black leading-none text-white lg:mt-5">
                    {stat.value}
                  </p>
                <div className="mt-3 h-0.5 w-7 bg-red-600" />
                  <p className="mt-2 text-xs leading-5 text-white/72 lg:mt-3">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-8 flex min-w-0 flex-col justify-center lg:mt-0 lg:pl-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-red-500 sm:text-sm">
              Moja misja
            </p>

            <h3 className="mt-4 max-w-3xl text-3xl font-black leading-tight sm:text-4xl lg:text-[36px]">
              Pomagam osiągać realne efekty poprzez{" "}
              <span className="text-red-500">prostotę i systematyczność.</span>
            </h3>

            <div className="my-5 h-0.5 w-16 bg-red-600" />

            <div className="max-w-2xl space-y-3 text-sm leading-6 text-white/78 sm:text-base sm:leading-7">
              <p>
                Mam na imię Mateusz. Pomagam osobom, które chcą stać się
                silniejsze, poprawić sylwetkę i poczuć się pewniej na siłowni.
              </p>

              <p>
                Zależy mi, żeby trening był prosty, skuteczny i dopasowany do
                Twojego życia - nie odwrotnie.
              </p>

              <p>
                Dlatego zamiast gotowych schematów stawiam na indywidualne
                podejście, analizę techniki i regularny kontakt.
              </p>

              <p className="pt-1 font-semibold text-white">
                Moim zadaniem jest nie tylko ułożyć plan.
                <span className="block">
                  Moim zadaniem jest przeprowadzić Cię przez cały proces.
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-5 min-h-[210px] rounded-lg border border-white/12 bg-black/45 p-5 backdrop-blur transition duration-300 hover:border-red-500/35 hover:bg-white/[0.055] lg:bg-white/[0.045]">
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-red-500">
                W co wierzę?
              </p>

              <div>
                {beliefs.map((belief) => (
                  <div
                    key={belief}
                    className="flex items-center gap-3 border-b border-white/10 py-3 last:border-b-0"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-500 text-red-500">
                      <Check className="h-3 w-3" />
                    </span>
                    <p className="text-sm leading-5 text-white/78">{belief}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}