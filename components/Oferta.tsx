import {
  ArrowRight,
  Check,
  Dumbbell,
  Laptop,
  MapPin,
  MessageCircle,
  Star,
  Video,
} from "lucide-react";
import { Reveal } from "./Reveal";

const offers = [
  {
    icon: Laptop,
    title: "Prowadzenie online",
    description:
      "Dla osób z całej Polski, które chcą trenować samodzielnie z moim wsparciem.",
    price: "350 zł",
    period: "/ miesiąc",
    tags: [
      { icon: MapPin, label: "Cała Polska" },
      { icon: Video, label: "Analiza wideo" },
      { icon: MessageCircle, label: "WhatsApp" },
    ],
    features: [
      "Indywidualny plan treningowy",
      "Rozpiska kalorii i makro",
      "Analiza techniki (wideo)",
      "Cotygodniowe raporty",
      "Stały kontakt na WhatsApp",
      "Aktualizacja planu",
    ],
  },
  {
    icon: Dumbbell,
    title: "Treningi 1x w tygodniu",
    description:
      "Trening personalny 1x w tygodniu w Jaworznie/Trzebini + pełen system prowadzenia online.",
    price: "800 zł",
    period: "/ miesiąc",
    popular: true,
    tags: [
      { icon: MapPin, label: "Jaworzno/Trzebinia" },
      { icon: Video, label: "Analiza wideo" },
      { icon: MessageCircle, label: "WhatsApp" },
    ],
    features: [
      "1 trening personalny w tygodniu",
      "Indywidualny plan treningowy",
      "Rozpiska kalorii i makro",
      "Analiza techniki (wideo)",
      "Cotygodniowe raporty",
      "Stały kontakt na WhatsApp",
      "Aktualizacja planu",
    ],
  },
  {
    icon: Dumbbell,
    title: "Treningi 2x w tygodniu",
    description:
      "Dwa treningi personalne w tygodniu w Jaworznie/Trzebini + pełen system prowadzenia online.",
    price: "1300 zł",
    period: "/ miesiąc",
    tags: [
      { icon: MapPin, label: "Jaworzno/Trzebinia" },
      { icon: Video, label: "Analiza wideo" },
      { icon: MessageCircle, label: "WhatsApp" },
    ],
    features: [
      "2 treningi personalne w tygodniu",
      "Indywidualny plan treningowy",
      "Rozpiska kalorii i makro",
      "Analiza techniki (wideo)",
      "Cotygodniowe raporty",
      "Stały kontakt na WhatsApp",
      "Aktualizacja planu",
    ],
  },
];

export function Oferta() {
  return (
    <section
      id="oferta"
      data-section
      className="relative min-h-screen overflow-hidden bg-black text-white lg:h-screen"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(239,35,42,0.1),transparent_24%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_75%,rgba(255,255,255,0.04),transparent_22%)]" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-8 pt-28 sm:px-8 lg:h-screen lg:px-12 lg:pb-5 lg:pt-[88px]">
        <Reveal>
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">
              Oferta
            </p>
            <div className="mx-auto mt-3 h-0.5 w-16 bg-red-600" />

            <h2 className="mt-3 text-4xl font-black leading-none sm:text-5xl lg:text-[54px]">
              Wybierz formę{" "}
              <span className="block text-red-500 sm:inline">współpracy</span>
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-5 text-white/68">
              Niezależnie od wybranej opcji otrzymujesz ten sam system
              prowadzenia. Różnica polega jedynie na miejscu i częstotliwości
              naszych spotkań.
            </p>
          </div>
        </Reveal>

        <div className="mt-5 grid flex-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          {offers.map((offer, index) => (
            <Reveal key={offer.title} delay={0.08 * index} className="h-full">
              <article
                className={`group relative flex h-full rounded-lg border bg-white/[0.035] p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/[0.055] hover:shadow-[0_18px_60px_rgba(239,35,42,0.12)] ${
                  offer.popular
                    ? "border-red-600 shadow-[0_0_60px_rgba(239,35,42,0.12)]"
                    : "border-white/12"
                }`}
              >
                {offer.popular && (
                  <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-md bg-red-600 px-4 py-2 text-xs font-black uppercase text-white">
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-white" />
                      Najczęściej wybierane
                    </span>
                  </div>
                )}

                <div className="flex w-full flex-col pt-6">
                  <offer.icon className="h-8 w-8 text-red-500 transition-transform duration-300 group-hover:scale-110" />

                  <h3 className="mt-4 text-xl font-black leading-tight">
                    {offer.title}
                  </h3>

                  <div className="mt-3 h-0.5 w-8 bg-red-600" />

                  <p className="mt-3 min-h-[58px] text-sm leading-5 text-white/70">
                    {offer.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {offer.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-[13px] text-white/78"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-red-500 text-red-500">
                          <Check className="h-3 w-3" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4">
                    <div className="flex items-end gap-3">
                      <p className="text-3xl font-black leading-none">
                        {offer.price}
                      </p>
                      <p className="pb-1 text-sm text-white/60">
                        {offer.period}
                      </p>
                    </div>

                    <div className="mt-4 h-px w-full bg-white/12" />

                    <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                      {offer.tags.map((tag) => (
                        <div
                          key={tag.label}
                          className="flex items-center gap-1.5 text-xs text-white/64"
                        >
                          <tag.icon className="h-4 w-4 text-red-500" />
                          {tag.label}
                        </div>
                      ))}
                    </div>

                    <a
                      href="#kontakt"
                      className="group/btn mt-4 inline-flex w-full items-center justify-center gap-3 rounded-md border border-red-600 bg-black/20 px-5 py-2.5 text-sm font-black text-white transition duration-300 hover:bg-red-600"
                    >
                      Umów darmową konsultację
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>        
      </div>
    </section>
  );
}