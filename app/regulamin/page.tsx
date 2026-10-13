/**
 * Strona /regulamin. Treść dokumentu; wygląd daje wspólny komponent LegalPage.
 * Po zmianie treści zaktualizuj datę w `updated`.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/site/LegalPage";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_PROFILE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Regulamin",
  description: "Regulamin serwisu dekomplikator.com.",
  alternates: { canonical: "/regulamin" },
};

export default function RegulaminPage() {
  return (
    <LegalPage eyebrow="Regulamin" title="Regulamin serwisu" updated="27 września 2026 r.">
      <section>
        <h2>1. Kto prowadzi serwis</h2>
        <p>
          Serwis dekomplikator.com prowadzi Mateusz Kajzar w ramach działalności nierejestrowanej. Kontakt:{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> albo Instagram{" "}
          <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noopener noreferrer">@{INSTAGRAM_HANDLE}</a>.
        </p>
      </section>

      <section>
        <h2>2. Charakter serwisu</h2>
        <p>
          Serwis ma charakter informacyjny. Przedstawia zakres i ceny usług trenerskich (prowadzenie online i treningi personalne
          w Jaworznie). Przez serwis nie zawiera się umów i nie dokonuje płatności.
        </p>
        <p className="mt-3">
          Warunki współpracy (zakres, termin rozpoczęcia, forma płatności) ustalane są indywidualnie w rozmowie, zanim
          współpraca się rozpocznie.
        </p>
      </section>

      <section>
        <h2>3. Ceny</h2>
        <p>Ceny podane w serwisie są cenami końcowymi w złotych polskich i obowiązują w dniu ich publikacji.</p>
      </section>

      <section>
        <h2>4. Zdrowie i bezpieczeństwo</h2>
        <p>
          Treści w serwisie nie są poradą medyczną. Jeśli masz chorobę, uraz lub inne przeciwwskazania do wysiłku, przed
          rozpoczęciem treningów skonsultuj się z lekarzem lub fizjoterapeutą.
        </p>
      </section>

      <section>
        <h2>5. Opinie i historie podopiecznych</h2>
        <p>
          Opinie i historie zamieszczone w serwisie pochodzą od podopiecznych i są publikowane za ich zgodą. Pokazują
          indywidualne efekty i nie stanowią gwarancji takich samych rezultatów.
        </p>
      </section>

      <section>
        <h2>6. Prywatność</h2>
        <p>
          Zasady przetwarzania danych i korzystania z plików cookies opisuje <Link href="/polityka-prywatnosci">Polityka prywatności</Link>.
        </p>
      </section>

      <section>
        <h2>7. Zmiany regulaminu</h2>
        <p>Regulamin może się zmieniać. Aktualna wersja jest zawsze dostępna na tej stronie.</p>
      </section>
    </LegalPage>
  );
}
