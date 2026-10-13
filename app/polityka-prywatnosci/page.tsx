/**
 * Strona /polityka-prywatnosci (RODO i cookies). Treść dokumentu; wygląd daje wspólny komponent LegalPage.
 * Po zmianie treści zaktualizuj datę w `updated`. Sekcja z id="cookies" jest linkowana z banera cookies.
 */
import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Polityka prywatności strony dekomplikator.com: jakie dane są przetwarzane, cookies i Twoje prawa.",
  alternates: { canonical: "/polityka-prywatnosci" },
};

export default function PolitykaPrywatnosciPage() {
  return (
    <LegalPage
      eyebrow="Polityka prywatności"
      title={
        <>
          Polityka prywatności
          <span className="block text-red-500">i ochrona danych</span>
        </>
      }
      updated="13 października 2026 r."
    >
      <section>
        <h2>1. Administrator danych</h2>
        <p>Administratorem danych osobowych jest Mateusz Kajzar, prowadzący działalność nierejestrowaną.</p>
        <p>
          Kontakt w sprawach związanych z ochroną danych osobowych: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </section>

      <section>
        <h2>2. Jakie dane przetwarzam?</h2>
        <p>
          Strona nie ma formularza kontaktowego. Kontakt odbywa się przez wiadomość na Instagramie albo e-mail. Przetwarzam
          wtedy dane, które przekażesz mi w wiadomości, np. imię, nazwę profilu, adres e-mail i treść wiadomości.
        </p>
        <p className="mt-3">
          Jeśli zgodzisz się na pliki cookies, narzędzia analityczne mogą zbierać dane o korzystaniu ze strony (np. odwiedzone
          podstrony, kliknięcia w przyciski kontaktu, przybliżoną lokalizację, typ urządzenia i przeglądarki).
        </p>
      </section>

      <section>
        <h2>3. W jakim celu i na jakiej podstawie?</h2>
        <ul>
          <li>
            Odpowiedź na wiadomość i przedstawienie informacji o współpracy — działania na Twoje żądanie przed zawarciem umowy
            (art. 6 ust. 1 lit. b RODO) oraz mój prawnie uzasadniony interes w prowadzeniu komunikacji (art. 6 ust. 1 lit. f RODO).
          </li>
          <li>Mierzenie ruchu na stronie i skuteczności reklam — Twoja zgoda (art. 6 ust. 1 lit. a RODO), którą możesz w każdej chwili wycofać.</li>
        </ul>
      </section>

      <section>
        <h2>4. Jak długo przechowuję dane?</h2>
        <p>
          Dane z korespondencji przechowuję przez czas potrzebny do odpowiedzi i dalszej komunikacji. Jeśli nie dojdzie do
          współpracy, mogą zostać usunięte po zakończeniu rozmowy, chyba że dalsze przechowywanie będzie potrzebne do
          zabezpieczenia ewentualnych roszczeń. Dane analityczne są przechowywane zgodnie z ustawieniami narzędzi, z których
          korzystam.
        </p>
      </section>

      <section>
        <h2>5. Kto może mieć dostęp do danych?</h2>
        <p>Dane mogą być przetwarzane przez dostawców narzędzi, z których korzystam:</p>
        <ul>
          <li>Netlify — hosting strony,</li>
          <li>Meta Platforms (Instagram) — jeśli piszesz do mnie na Instagramie,</li>
          <li>Google (YouTube) — jeśli klikniesz, żeby odtworzyć film na stronie. Odtwarzacz wczytuje się dopiero po kliknięciu, w trybie ograniczonych plików cookies (youtube-nocookie.com),</li>
          <li>Google — poczta e-mail oraz, po wyrażeniu zgody, Google Analytics (statystyki odwiedzin),</li>
        </ul>
        <p className="mt-3">Część z tych firm może przetwarzać dane poza Europejskim Obszarem Gospodarczym, na zasadach opisanych w ich politykach prywatności.</p>
      </section>

      <section id="cookies">
        <h2>6. Pliki cookies</h2>
        <p>
          Przy pierwszej wizycie pytam o zgodę. Do czasu kliknięcia „Akceptuję” nie ładuję Google Analytics ani żadnych
          narzędzi analitycznych i reklamowych. Twój wybór zapisuję w pamięci przeglądarki (localStorage), żeby nie pytać przy
          każdej wizycie.
        </p>
        <p className="mt-3">
          Zgodę możesz zmienić w każdej chwili, klikając „Ustawienia cookies” w stopce strony. Link „Otwórz w Mapach Google” na
          stronie Jaworzno prowadzi do serwisu Google, który stosuje własne zasady prywatności.
        </p>
        <p className="mt-3">
          Film na stronie z prowadzeniem online pochodzi z YouTube. Dopóki go nie klikniesz, widzisz tylko zdjęcie zapisane na
          mojej stronie i nic nie łączy się z YouTube. Po kliknięciu odtwarzacz wczytuje się z domeny youtube-nocookie.com, a Google
          przetwarza dane zgodnie z własną polityką prywatności.
        </p>
      </section>

      <section>
        <h2>7. Twoje prawa</h2>
        <p>
          Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przeniesienia danych,
          wniesienia sprzeciwu oraz wycofania zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania przed jej
          wycofaniem). Masz też prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
        </p>
      </section>

      <section>
        <h2>8. Dobrowolność podania danych</h2>
        <p>Podanie danych jest dobrowolne. Bez nich nie będę w stanie odpowiedzieć na Twoją wiadomość.</p>
      </section>

      <section>
        <h2>9. Zmiany polityki</h2>
        <p>Polityka prywatności może być aktualizowana, szczególnie przy dodaniu nowych narzędzi lub zmianie sposobu kontaktu.</p>
      </section>
    </LegalPage>
  );
}
