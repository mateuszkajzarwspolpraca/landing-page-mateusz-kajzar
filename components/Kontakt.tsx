import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Clock3,
  Dumbbell,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Reveal } from "./Reveal";

const benefits = [
  {
    icon: CalendarDays,
    title: "Darmowa konsultacja",
    text: "30 minut rozmowy o Twoim celu i możliwościach.",
  },
  {
    icon: MessageCircle,
    title: "Indywidualne podejście",
    text: "Dopasowujemy plan do Ciebie, nie odwrotnie.",
  },
  {
    icon: TrendingUp,
    title: "Prosty proces",
    text: "Krok po kroku - bez chaosu i zbędnych komplikacji.",
  },
  {
    icon: ShieldCheck,
    title: "Pełne wsparcie",
    text: "Jestem z Tobą na każdym etapie współpracy.",
  },
];

const infoItems = [
  {
    icon: Clock3,
    title: "30 min",
    text: "Darmowa konsultacja online lub telefonicznie",
  },
  {
    icon: MapPin,
    title: "Jaworzno / Trzebinia",
    text: "Treningi stacjonarne w Twojej okolicy",
  },
  {
    icon: Dumbbell,
    title: "Online",
    text: "Prowadzenie dostępne w całej Polsce",
  },
  {
    icon: MessageCircle,
    title: "Szybki kontakt",
    text: "Odpowiadam na wiadomości w ciągu 24h",
  },
];

export function Kontakt() {
  return (
    <section
      id="kontakt"
      data-section
      className="relative min-h-screen overflow-hidden bg-[#070707] text-white lg:h-screen"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(239,35,42,0.1),transparent_24%)]" />
      <div className="absolute -left-28 bottom-24 hidden h-96 w-96 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(255,255,255,0.08),rgba(0,0,0,0)_62%)] lg:block" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-5 pb-6 pt-28 sm:px-8 lg:h-screen lg:px-12 lg:pb-5 lg:pt-[78px]">
        <div className="grid flex-1 gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">
                Kontakt
              </p>
              <div className="mt-3 h-0.5 w-16 bg-red-600" />

              <h2 className="mt-5 max-w-xl text-4xl font-black leading-[0.95] sm:text-5xl lg:text-[44px]">
                Zacznijmy od
                <span className="block text-red-500">krótkiej rozmowy.</span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-neutral-400 sm:text-base">
                Zostaw kontakt i napisz krótko, czego potrzebujesz. Po wysłaniu
                formularza otrzymasz maila zwrotnego, gdzie dostaniesz wszystkie
                informacje na temat współpracy oraz umówisz konsultację w
                kalendarzu.
              </p>

              <div className="mt-6 h-0.5 w-16 bg-red-600" />

              <div className="mt-5 max-w-xl space-y-0">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex gap-4 border-b border-white/10 py-3.5 last:border-b-0"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-red-500 transition duration-300 hover:border-red-500/40 hover:bg-white/[0.07]">
                      <benefit.icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="text-base font-black">{benefit.title}</h3>
                      <p className="mt-1 text-sm leading-5 text-neutral-400">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:pt-4">
            <div className="rounded-lg border border-red-500/30 bg-[#111111]/80 p-5 shadow-[0_0_80px_rgba(239,35,42,0.08)] backdrop-blur transition duration-300 hover:border-red-500/45 sm:p-6 lg:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-500/20 bg-red-600/10 text-red-500">
                  <Send className="h-7 w-7" />
                </div>

                <div>
                  <h3 className="text-2xl font-black">Wypełnij formularz</h3>
                  <p className="mt-1 text-sm text-neutral-400">
                    To zajmie tylko 30 sekund.
                  </p>
                </div>
              </div>

              <form className="mt-5 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold">
                    <span>
                      Imię i nazwisko <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Wpisz swoje imię i nazwisko"
                      className="h-12 rounded-md border border-white/10 bg-white/[0.035] px-4 text-sm font-normal text-white outline-none transition placeholder:text-neutral-500 focus:border-red-500/60"
                    />
                  </label>

                  <label className="grid gap-2 text-sm font-bold">
                    <span>
                      E-mail <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Wpisz swój e-mail"
                      className="h-12 rounded-md border border-white/10 bg-white/[0.035] px-4 text-sm font-normal text-white outline-none transition placeholder:text-neutral-500 focus:border-red-500/60"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-bold">
                    <span>
                      Numer telefonu <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Wpisz numer telefonu"
                      className="h-12 rounded-md border border-white/10 bg-white/[0.035] px-4 text-sm font-normal text-white outline-none transition placeholder:text-neutral-500 focus:border-red-500/60"
                    />
                  </label>

                  <label className="relative grid gap-2 text-sm font-bold">
                    <span>
                      Forma współpracy <span className="text-red-500">*</span>
                    </span>
                    <select
                      name="cooperation"
                      defaultValue=""
                      className="h-12 appearance-none rounded-md border border-white/10 bg-white/[0.035] px-4 text-sm font-normal text-neutral-400 outline-none transition focus:border-red-500/60"
                    >
                      <option value="" disabled>
                        Wybierz formę współpracy
                      </option>
                      <option>Prowadzenie online</option>
                      <option>Treningi 1x w tygodniu</option>
                      <option>Treningi 2x w tygodniu</option>
                      <option>Nie wiem - chcę porozmawiać</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 text-red-500" />
                  </label>
                </div>

                <label className="relative grid gap-2 text-sm font-bold">
                  <span>
                    Twój główny cel <span className="text-red-500">*</span>
                  </span>
                  <select
                    name="goal"
                    defaultValue=""
                    className="h-12 appearance-none rounded-md border border-white/10 bg-white/[0.035] px-4 text-sm font-normal text-neutral-400 outline-none transition focus:border-red-500/60"
                  >
                    <option value="" disabled>
                      Wybierz swój główny cel
                    </option>
                    <option>Budowa siły</option>
                    <option>Poprawa sylwetki</option>
                    <option>Redukcja tkanki tłuszczowej</option>
                    <option>Nauka techniki</option>
                    <option>Powrót do regularności</option>
                  </select>
                  <ChevronDown className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 text-red-500" />
                </label>

                <div className="mt-1 flex gap-4 text-sm leading-5 text-neutral-400">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-red-500">
                    <Mail className="h-5 w-5" />
                  </div>
                  <p>
                    Po wypełnieniu formularza otrzymasz maila zwrotnego, gdzie
                    dostaniesz wszystkie informacje na temat współpracy oraz
                    umówisz konsultację w kalendarzu.
                  </p>
                </div>

                <button
                  type="submit"
                  className="group mt-1 inline-flex h-[52px] items-center justify-center gap-3 rounded-md bg-red-600 px-6 text-base font-black text-white transition duration-300 hover:-translate-y-0.5 hover:bg-red-500"
                >
                  Przejdź do wyboru terminu
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <p className="flex items-center justify-center gap-2 text-xs text-neutral-500">
                  <Lock className="h-4 w-4" />
                  Twoje dane są u nas bezpieczne. Nie udostępniamy ich osobom
                  trzecim.
                </p>
              </form>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.22}>
          <div className="mt-5 grid gap-3 rounded-lg border border-red-500/25 bg-[#111111]/75 p-4 backdrop-blur transition duration-300 hover:border-red-500/40 sm:grid-cols-2 lg:grid-cols-4 lg:p-4">
            {infoItems.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 border-white/10 lg:border-r lg:pr-4 lg:last:border-r-0"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-red-500/20 bg-red-600/10 text-red-500">
                  <item.icon className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-base font-black">{item.title}</h3>
                  <p className="mt-1 text-sm leading-5 text-neutral-400">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}