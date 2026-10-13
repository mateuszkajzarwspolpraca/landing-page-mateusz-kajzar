/**
 * Strona główna (/). Krótkie przedstawienie i wybór: współpraca online albo w Jaworznie.
 */
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2, MapPin } from "lucide-react";
import { GoogleRatingBadge } from "@/components/site/Cards";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

/** Adres kanoniczny: mówi Google, że to główna wersja tej strony. */
export const metadata = {
  alternates: { canonical: "/" },
};

/** Dwa duże przyciski wyboru: online albo Jaworzno. */
const choices = [
  {
    href: "/online",
    title: "Współpraca online",
    subtitle: "Z każdego miejsca w Polsce",
    icon: Globe2,
  },
  {
    href: "/jaworzno",
    title: "Współpraca Jaworzno",
    subtitle: "Treningi na żywo w Jaworznie",
    icon: MapPin,
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        {/* Zdjęcie w tle, przyciemnione gradientem, żeby tekst był czytelny */}
        <section className="relative flex flex-1 items-center overflow-hidden px-4 py-14 sm:px-8 sm:py-20">
          <Image
            src="/images/omnie/omnie.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />

          <div className="relative mx-auto w-full max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">Mateusz Kajzar · trener personalny</p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[1] sm:text-6xl">
              Proste zasady.
              <span className="block text-red-500">Widoczne efekty.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Pomagam wrócić do regularności albo zacząć od podstaw. Prosty system treningowy, bez skrajnych diet,
              żargonu i kombinowania nad detalami.
            </p>

            <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
              {choices.map((choice) => (
                <Link
                  key={choice.href}
                  href={choice.href}
                  className="group flex items-center gap-4 rounded-lg border border-white/15 bg-surface/85 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-[0_0_60px_rgba(239,35,42,0.18)] sm:flex-col sm:items-start sm:p-7"
                >
                  <choice.icon className="h-8 w-8 shrink-0 text-red-500" />
                  <span className="flex-1">
                    <span className="block text-xl font-black text-white sm:text-2xl">{choice.title}</span>
                    <span className="mt-1 block text-sm text-white/65">{choice.subtitle}</span>
                  </span>
                  <ArrowRight className="h-6 w-6 shrink-0 text-white transition-transform group-hover:translate-x-1 sm:self-end" />
                </Link>
              ))}
            </div>

            <p className="mt-8">
              <GoogleRatingBadge />
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
