/**
 * Strona /jaworzno: treningi personalne na żywo w Jaworznie.
 *
 * Ten plik układa sekcje w kolejności, w jakiej widać je na stronie.
 * Listy i dłuższe teksty są w ./content.tsx, dane siłowni (adres, mapa) w lib/site.ts.
 */
import type { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Card, CheckList, GoogleRatingBadge, PriceCard, ReviewCard, Steps } from "@/components/site/Cards";
import { DmBlock } from "@/components/site/DmButton";
import { Faq } from "@/components/site/Faq";
import { Prose, Section, SectionHeading } from "@/components/site/Section";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { REVIEWS } from "@/lib/content";
import { GYM, INSTAGRAM_PROFILE_URL, SITE_URL } from "@/lib/site";
import { KEYWORD, contrast, faq, navLinks, packageIncluded, steps } from "./content";

/** Tytuł, opis i słowa kluczowe strony dla Google. */
export const metadata: Metadata = {
  title: "Trener personalny Jaworzno",
  description:
    "Treningi personalne w Fitness Club Graviton w Jaworznie, a między nimi pełne prowadzenie online. Dla początkujących i dla osób, którym poprzednie podejścia nie wyszły.",
  alternates: { canonical: "/jaworzno" },
  keywords: ["trener personalny Jaworzno", "trening personalny Jaworzno", "Graviton Jaworzno trener"],
  openGraph: { url: "/jaworzno", title: "Trener personalny Jaworzno | Mateusz Kajzar" },
};

/**
 * Dane strukturalne (JSON-LD) dla Google: mówią wyszukiwarce, że to usługa w konkretnym miejscu.
 * Pomagają pojawiać się w wynikach typu „trener personalny Jaworzno”. Użytkownik ich nie widzi.
 */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Mateusz Kajzar — trener personalny Jaworzno",
  url: `${SITE_URL}/jaworzno`,
  image: `${SITE_URL}/images/hero/hero-online.jpg`,
  sameAs: [INSTAGRAM_PROFILE_URL],
  address: {
    "@type": "PostalAddress",
    streetAddress: GYM.street.replace(/^ul\.\s*/, ""),
    postalCode: GYM.postalCode,
    addressLocality: GYM.city,
    addressCountry: "PL",
  },
  containedInPlace: { "@type": "ExerciseGym", name: GYM.name },
  priceRange: "200–1300 zł",
};

export default function JaworznoPage() {
  return (
    <>
      {/* Dane dla Google (zob. localBusinessJsonLd wyżej). replace() zabezpiecza przed wstrzyknięciem HTML. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c") }}
      />
      <SiteHeader links={navLinks} />
      <main className="flex-1">
        {/* Hero */}
        <section className="px-4 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-14">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">Treningi personalne w Jaworznie</p>
              <h1 className="mt-4 text-[2.1rem] font-black leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
                Nie masz problemu z dyscypliną. Masz problem z planem, który zakładał, że{" "}
                <span className="text-red-500">nic Ci się nie wydarzy.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                Treningi na żywo w {GYM.name} w Jaworznie, a między nimi pełne prowadzenie online. Dla początkujących i
                dla osób, którym poprzednie podejścia nie wyszły.
              </p>
              <div className="mt-7">
                <DmBlock source="jaworzno-hero" keyword={KEYWORD} />
              </div>
              <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1">
                <GoogleRatingBadge />
                <span className="text-sm text-white/50">· {GYM.name}, {GYM.city}</span>
              </p>
            </div>
            <Image
              src="/images/hero/hero-online.jpg"
              alt="Mateusz Kajzar podczas treningu personalnego z podopieczną"
              width={1320}
              height={1650}
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="mx-auto aspect-[4/5] w-full max-w-md rounded-lg object-cover lg:max-w-none"
            />
          </div>
        </section>

        {/* Historia Mai */}
        <Section tone="dark">
          <SectionHeading eyebrow="Historia" title="Maja bała się sali pełnej ludzi." />
          <Prose className="mt-6">
            <p>
              „Najbardziej bałam się ludzi wokół […] porównywania się do ludzi, którzy trenują o wiele, wiele dłużej niż ja.”
            </p>
            <p>
              Nie zaczęliśmy od sztangi. „My sobie zaczynaliśmy od zwykłych przysiadów, potem robiliśmy goblet, dopiero
              potem robiliśmy przysiad faktycznie ze sztangą.”
            </p>
            <p className="border-l-2 border-red-600 pl-4 text-xl font-black leading-8 text-white sm:text-2xl sm:leading-9">
              „Wcześniej chodziłam taka przykurczona, teraz chodzę wyprostowana. Dzięki temu też plecy mnie nie bolą.”
            </p>
          </Prose>
        </Section>

        {/* Czego nie dostaniesz / co dostaniesz */}
        <Section>
          <SectionHeading title="Czego nie dostaniesz. I co dostaniesz zamiast." />
          <div className="mt-8 grid gap-3">
            {contrast.map((row) => (
              <div key={row.no} className="grid gap-2 rounded-lg border border-white/10 bg-surface/80 p-5 sm:grid-cols-2 sm:gap-6">
                <p className="text-white/50 line-through decoration-red-600/70">{row.no}</p>
                <p className="font-bold text-white">{row.yes}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Jak wygląda */}
        <Section id="jak" tone="dark">
          <SectionHeading
            eyebrow="Jak to wygląda"
            title="Od wiadomości do pierwszego treningu"
            intro={<p>Pierwszy tydzień to nauka techniki na ok. 70% możliwości. Zaczynamy spokojnie, żeby ciało zdążyło się przyzwyczaić.</p>}
          />
          <Steps steps={steps} />
        </Section>

        {/* Oferta */}
        <Section id="oferta">
          <SectionHeading eyebrow="Cena" title="Treningi w Jaworznie" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <PriceCard title="Pojedynczy trening" price="200 zł" priceNote="1 trening personalny" />
            <PriceCard title="5 tygodni, 1× w tygodniu" price="800 zł" priceNote="5 treningów + prowadzenie online">
              <p>Jeden trening na żywo w tygodniu, resztę robisz według planu z moim wsparciem online.</p>
            </PriceCard>
            <PriceCard title="5 tygodni, 2× w tygodniu" price="1300 zł" priceNote="10 treningów + prowadzenie online">
              <p>Dwa treningi na żywo w tygodniu i pełne prowadzenie między nimi.</p>
            </PriceCard>
          </div>
          <Card className="mt-6">
            <p className="text-lg font-black text-white">W pakietach 5-tygodniowych:</p>
            <div className="mt-4">
              <CheckList items={packageIncluded} />
            </div>
          </Card>
          <div className="mt-10">
            <DmBlock source="jaworzno-oferta" keyword={KEYWORD} />
          </div>
        </Section>

        {/* Gdzie */}
        <Section id="gdzie" tone="dark">
          <SectionHeading eyebrow="Gdzie" title={GYM.name} />
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <p className="flex items-start gap-3 text-lg text-white/85">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-red-500" />
              <span>
                {GYM.street}
                <br />
                {GYM.postalCode} {GYM.city}
              </span>
            </p>
            <a
              href={GYM.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-red-500"
            >
              Otwórz w Mapach Google
            </a>
          </div>
        </Section>

        {/* Opinie */}
        <Section>
          <SectionHeading
            eyebrow="Opinie"
            title="Co mówią podopieczni"
            intro={<GoogleRatingBadge />}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[REVIEWS.stacjonarny, REVIEWS.krzysztof, REVIEWS.bartek].map((review) => (
              <ReviewCard key={review.name + review.meta} review={review} />
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" tone="dark">
          <SectionHeading eyebrow="FAQ" title="Masz pytania?" />
          <Faq items={faq} />
        </Section>

        {/* Ostatnie wezwanie */}
        <Section>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black leading-[1.1] sm:text-4xl">Pogadajmy, zanim cokolwiek zdecydujesz.</h2>
            <Prose className="mx-auto mt-6">
              <p>Jedna wiadomość. Bez zobowiązań i bez ciśnienia.</p>
            </Prose>
            <div className="mt-8">
              <DmBlock source="jaworzno-final" keyword={KEYWORD} align="center" />
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
