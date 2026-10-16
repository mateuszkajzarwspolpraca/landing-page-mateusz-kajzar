/**
 * Strona /online: prowadzenie treningowe online.
 *
 * Ten plik układa sekcje w kolejności, w jakiej widać je na stronie (numery w komentarzach).
 * Listy i dłuższe teksty są w ./content.tsx, a wygląd kart w components/site/.
 */
import type { Metadata } from "next";
import Image from "next/image";
import { Card, CheckList, GoogleRatingBadge, PriceCard, ReviewCard, Steps } from "@/components/site/Cards";
import { DmBlock } from "@/components/site/DmButton";
import { Faq } from "@/components/site/Faq";
import { FearCard, Highlight, PhaseCards, Roadmap, StoryCard } from "@/components/site/OnlineSections";
import { Prose, Section, SectionHeading } from "@/components/site/Section";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StickyDm } from "@/components/site/StickyDm";
import { SwipeCarousel } from "@/components/site/SwipeCarousel";
import { VideoEmbed } from "@/components/site/VideoEmbed";
import { REVIEWS } from "@/lib/content";
import {
  DM_NOTE_HERO,
  DM_NOTE_QUESTIONS,
  afterMessage,
  beliefs,
  faq,
  fears,
  included,
  navLinks,
  notFor,
  phases,
  roadmap,
  stories,
  VSL,
} from "./content";

/** Tytuł i opis strony dla Google i podglądu linku w social media. */
export const metadata: Metadata = {
  title: "Prowadzenie treningowe online",
  description:
    "Dla początkujących i dla osób, którym poprzednie podejścia nie wyszły. Prosty plan, analiza techniki z nagrań, cotygodniowe raporty i kontakt na WhatsAppie. Bez skrajnych diet i bez obwiniania.",
  alternates: { canonical: "/online" },
  openGraph: { url: "/online", title: "Regularny trening bez skrajnych diet i bez słuchania, że to Twoja wina." },
};

/** Opinie w karuzeli, w tej kolejności. */
const reviews = [REVIEWS.krzysztof, REVIEWS.bartek, REVIEWS.katalin, REVIEWS.dominik, REVIEWS.stacjonarny];

export default function OnlinePage() {
  return (
    <>
      <SiteHeader links={navLinks} />
      <main className="flex-1">
        {/* 1. Hero */}
        <section className="px-4 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-14">
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">Prowadzenie online</p>
              <h1 className="mt-4 text-[2.1rem] font-black leading-[1.12] sm:text-5xl sm:leading-[1.08] lg:text-[3.6rem]">
                Regularny trening bez skrajnych diet i bez słuchania, że to <span className="text-red-500">Twoja wina.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                Pierwszy raz czy kolejne podejście, zaczynamy od podstaw. Zobacz, jak to robimy, nawet jeśli poprzednie
                próby Ci nie wyszły.
              </p>
              <div className="mt-7">
                <DmBlock source="online-hero" note={DM_NOTE_HERO} />
              </div>
              <p className="mt-6 text-sm text-white/55">Prowadzenie z każdego miejsca w Polsce</p>
            </div>
            {/* Film VSL (pionowy, z YouTube). Wczytuje się dopiero po kliknięciu. */}
            <VideoEmbed
              videoId={VSL.videoId}
              title={VSL.title}
              poster={VSL.poster}
              label={VSL.label}
              className="mx-auto w-full max-w-[340px] lg:max-w-[380px]"
            />
          </div>
        </section>

        {/* 2. Historie */}
        <Section id="historie" tone="dark">
          <SectionHeading
            eyebrow="Historie"
            title="Zaczynali dokładnie tam, gdzie Ty teraz."
            intro={<p>Z czym przyszli, co stało na drodze i co udało się wypracować. Liczby z ich planów i pomiarów.</p>}
          />
          <div className="mt-8">
            <SwipeCarousel label="Historie podopiecznych">
              {stories.map((story) => (
                <StoryCard key={story.name} story={story} />
              ))}
            </SwipeCarousel>
          </div>
          <p className="mt-6 text-sm text-white/50">Cztery historie, nie obietnica. Każdy zaczyna z innego miejsca i idzie swoim tempem.</p>
        </Section>

        {/* 3. Znasz to? */}
        <Section>
          <SectionHeading title="Znasz to?" />
          <Prose className="mt-6">
            <p>
              Osiem godzin przy biurku, plecy i szyja dają znać, a codzienne czynności sprawiają ból lub dyskomfort.
            </p>
            <p>
              Próbowałeś/aś już sam/a, korzystałeś/aś z darmowych planów albo wykupiłeś/aś prowadzenie u innego trenera online,
              ale cały czas coś nie wychodziło?
            </p>
            <p>
              Rozpiska działała idealnie, dopóki faktycznie byłeś/aś w stanie się jej trzymać. Gdy tylko pojawiał się trudniejszy
              okres w życiu, cele treningowe schodziły na dalszy plan. Aż w końcu sam/a przypiąłeś/przypięłaś sobie łatkę: „Ja to
              się chyba do tego nie nadaję”.
            </p>
          </Prose>
          <Highlight className="mt-8 max-w-2xl">
            Nie masz problemu z dyscypliną. Masz problem z planem, który zakładał, że nic Ci się nie wydarzy.
          </Highlight>
          <Prose className="mt-8">
            <p>
              A jeśli dopiero zaczynasz, to też dobre miejsce. Większość moich podopiecznych zaczynała od podstaw. Ja też miałem
              okresy, w których nic nie szło zgodnie z planem, dlatego układam go tak, żeby przetrwał gorszy tydzień, a nie tylko
              ten idealny.
            </p>
          </Prose>
        </Section>

        {/* 4. Jak pracuję */}
        <Section id="metoda" tone="dark">
          <SectionHeading
            eyebrow="Jak pracuję"
            title="Trening bez komplikowania"
            intro={
              <p>
                Nie dostajesz planu i ciszy. W pierwszych 3 miesiącach przechodzisz drogę od „robię, co mam w planie” do
                „wiem, co robić i dlaczego”.
              </p>
            }
          />
          <PhaseCards phases={phases} />

          <div className="mt-14 sm:mt-20">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">Roadmapa</p>
            <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">Twoje pierwsze 3 miesiące</h3>
            <Roadmap milestones={roadmap} />
          </div>

          <Highlight className="mt-12 max-w-2xl">
            Celem nie jest uzależnić Cię od trenera, tylko nauczyć samodzielności.
          </Highlight>
        </Section>

        {/* 5. Czego nie dostaniesz */}
        <Section>
          <SectionHeading
            title="Czego u mnie nie dostaniesz"
            intro={
              <p>
                Największe obawy przed prowadzeniem online. Słyszę je od osób, które do mnie piszą, często po doświadczeniach
                z innym prowadzeniem.
              </p>
            }
          />
          <div className="mt-8">
            <SwipeCarousel label="Obawy przed prowadzeniem online">
              {fears.map((fear, index) => (
                <FearCard key={fear.fear} fear={fear} index={index} />
              ))}
            </SwipeCarousel>
          </div>
        </Section>

        {/* 6. Wizja */}
        <Section tone="dark">
          <SectionHeading title="Wyobraź sobie zwykły wtorek za trzy miesiące." />
          <Prose className="mt-6">
            <p>Kończysz pracę i wiesz, co dziś robisz na siłowni. Ciężar dobierasz bez zgadywania i bez szukania ćwiczeń w internecie.</p>
            <p>
              Tydzień się sypie? Nie rzucasz wszystkiego, bo plan dopasowuje się do Ciebie, a nie Ty do planu. Coś „nieplanowanego” na talerzu? Bez biczowania
              się, wracasz do normalnego jedzenia.
            </p>
          </Prose>
          <Highlight className="mt-8 max-w-2xl">I nie potrzebujesz trenera do każdej podstawowej decyzji.</Highlight>
        </Section>

        {/* 7. Oferta */}
        <Section id="oferta">
          <SectionHeading
            eyebrow="Cena"
            title="Jedna współpraca, dwa sposoby płatności"
            intro={<p>Zakres jest identyczny. Różni się tylko to, czy decydujesz raz, czy co miesiąc.</p>}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr_1fr]">
            <PriceCard badge="Polecam" title="Pełny proces: 3 miesiące" price="1200 zł" priceNote="za całość (ok. 367 zł miesięcznie)" highlighted>
              <p>
                Tyle realnie zajmuje ogarnięcie podstaw. Płacisz raz i przez trzy miesiące nie zastanawiasz się, czy
                kontynuować. Z mojego doświadczenia ludzie najczęściej odpadają właśnie na starcie albo po pierwszym miesiącu.
              </p>
              <p className="text-white/50">100 zł mniej niż 3 × 450 zł.</p>
            </PriceCard>
            <PriceCard title="Miesiąc po miesiącu" price="450 zł" priceNote="/ miesiąc, bez zobowiązania">
              <p>Chcesz najpierw sprawdzić, czy to działa? Zacznij od jednego miesiąca i zdecyduj, co dalej.</p>
            </PriceCard>
            <Card>
              <p className="text-lg font-black text-white">W obu wariantach:</p>
              <div className="mt-4">
                <CheckList items={included} />
              </div>
            </Card>
          </div>
          <div className="mt-10">
            <DmBlock source="online-oferta" note={DM_NOTE_QUESTIONS} />
          </div>
        </Section>

        {/* 8. Co się dzieje, gdy napiszesz */}
        <Section tone="dark">
          <SectionHeading title="Co się dzieje, gdy napiszesz" />
          <Steps steps={afterMessage} />
        </Section>

        {/* 9. Opinie */}
        <Section id="opinie">
          <SectionHeading
            eyebrow="Opinie"
            title="Co mówią podopieczni"
            intro={<GoogleRatingBadge />}
          />
          <div className="mt-6">
            <SwipeCarousel label="Opinie podopiecznych">
              {reviews.map((review) => (
                <ReviewCard key={review.name + review.meta} review={review} />
              ))}
            </SwipeCarousel>
          </div>
        </Section>

        {/* 10. Dla kogo to nie jest */}
        <Section tone="dark">
          <SectionHeading title="Dla kogo to nie jest" />
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {notFor.map((item) => (
              <Card key={item.title}>
                <p className="text-lg font-black leading-7 text-white">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-white/70 sm:text-base">{item.text}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* 11. Kto po drugiej stronie */}
        <Section>
          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <Image
              src="/images/omnie/omnie.jpeg"
              alt="Mateusz Kajzar, trener personalny"
              width={804}
              height={1005}
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="mx-auto aspect-[4/5] w-full max-w-sm rounded-lg object-cover"
            />
            <div>
              <SectionHeading title="Kto po drugiej stronie" />
              <Prose className="mt-6">
                <p>
                  Mam na imię Mateusz. Jestem trenerem personalnym i startuję w trójboju siłowym. Prywatnie jestem zwykłym człowiekiem,
                  jak wszyscy.
                </p>
                <p>
                  Pomagałem na budowie, pracowałem na zmiany i w wielkiej korporacji. Wiem, jak wygląda trening po ośmiu godzinach przy
                  biurku, po nocnej zmianie albo po dniu, w którym nic nie poszło zgodnie z planem. Dlatego nie układam planów pod idealne
                  życie, tylko pod Twoje, i korzystam ze sposobów, które w takim życiu naprawdę działają.
                </p>
              </Prose>
              <p className="mt-8 text-xs font-black uppercase tracking-[0.18em] text-red-500">W co wierzę</p>
              <ul className="mt-4 space-y-3">
                {beliefs.map((belief) => (
                  <li key={belief} className="rounded-md bg-white/[0.04] p-4 text-base font-bold leading-7 text-white">
                    {belief}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* 12. FAQ */}
        <Section id="faq" tone="dark">
          <SectionHeading eyebrow="FAQ" title="Masz pytania?" />
          <Faq items={faq} />
        </Section>

        {/* 13. Ostatnie wezwanie */}
        <Section>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black leading-[1.1] sm:text-4xl">Obserwujesz od dawna i dalej się wahasz?</h2>
            <Prose className="mx-auto mt-6">
              <p>Rozumiem. Już raz coś nie wyszło i nie chcesz się znowu sparzyć.</p>
              <p className="font-bold text-white">Napisz. Nic Ci nie wcisnę.</p>
            </Prose>
            <div className="mt-8">
              <DmBlock
                source="online-final"
                note={DM_NOTE_QUESTIONS}
                align="center"
              />
            </div>
          </div>
        </Section>
      </main>
      {/* Przyklejony przycisk DM na telefonie */}
      <StickyDm source="online-sticky" />
      <SiteFooter />
    </>
  );
}
