import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Dumbbell,
  Globe2,
  MapPin,
  MessageCircle,
  Star,
  Video,
} from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: Dumbbell,
    title: "Plan treningowy",
  },
  {
    icon: Video,
    title: "Analiza techniki",
  },
  {
    icon: MessageCircle,
    title: "Stały kontakt",
  },
  {
    icon: BarChart3,
    title: "Cotygodniowe raporty",
  },
];

export function Hero() {
  return (
    <section
      id="hero"
      data-section
      className="relative h-screen overflow-hidden bg-black"
    >
      <div className="absolute inset-y-0 right-0 w-full lg:w-[46vw]">
        <Image
          src="/images/hero/hero2.png"
          alt="Mateusz Kajzar podczas treningu siłowego"
          fill
          priority
          className="object-cover object-[42%_8%]"
        />

        <div className="absolute inset-y-0 left-0 w-[36%] bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/85 to-transparent" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0.94)_31%,rgba(0,0,0,0.38)_58%,rgba(0,0,0,0.55)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-end px-5 pb-8 pt-32 sm:px-8 lg:items-center lg:px-12 lg:pb-8 lg:pt-32">
        <div className="max-w-[620px]">
          <Reveal>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-red-500 sm:text-base">
              Trener personalny
            </p>

            <h1 className="max-w-[760px] text-4xl font-black uppercase leading-[0.95] tracking-normal sm:text-5xl lg:text-[64px]">
              Indywidualne
              <span className="block">prowadzenie</span>
              <span className="block">treningowe</span>
            </h1>

            <div className="my-5 h-0.5 w-20 bg-red-600" />

            <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl lg:text-[38px]">
              Proste zasady.
              <span className="block text-red-500">Widoczne efekty.</span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-white/78">
              Pomagam początkującym i średniozaawansowanym budować siłę, lepszą
              sylwetkę i trwałe nawyki bez zbędnego komplikowania.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="border-r border-red-500/25 pr-3 transition duration-300 hover:-translate-y-1 last:border-r-0"
                >
                  <feature.icon className="mb-2 h-7 w-7 text-red-500" />
                  <p className="text-xs font-black uppercase leading-tight sm:text-[13px]">
                    {feature.title}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href="#kontakt"
              className="group mt-7 inline-flex w-full items-center justify-center gap-4 rounded-lg bg-red-600 px-7 py-4 text-base font-black text-white shadow-[0_18px_60px_rgba(236,31,39,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-red-500 sm:w-auto sm:min-w-[340px]"
            >
              Umów darmową konsultację
              <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <p className="mt-4 flex items-center justify-center gap-3 text-sm text-white/72 sm:justify-start">
              <CheckCircle2 className="h-5 w-5 text-white" />
              30 minut rozmowy • Bez zobowiązań
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/[0.06] px-3 py-2.5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.08]">
                <MapPin className="h-7 w-7 text-red-500" />
                <span className="text-sm font-medium">Jaworzno i okolice</span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/[0.06] px-3 py-2.5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.08]">
                <Globe2 className="h-7 w-7 text-red-500" />
                <span className="text-sm font-medium">Prowadzenie online</span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-white/12 bg-white/[0.06] px-3 py-2.5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.08]">
                <Star className="h-7 w-7 text-red-500" />
                <span className="text-sm font-medium">6 opinii w Google</span>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <span className="text-4xl font-black text-white">G</span>
              <span className="text-xl text-yellow-400">★★★★★</span>
              <span className="text-sm text-white/76">
                5,0 • 6 opinii Google
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}