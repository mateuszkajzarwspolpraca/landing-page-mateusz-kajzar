export const metadata = {
  title: "Polityka prywatności | Mateusz Kajzar",
  description:
    "Polityka prywatności strony Mateusza Kajzara dotycząca formularza kontaktowego i przetwarzania danych osobowych.",
};

export default function PolitykaPrywatnosciPage() {
  return (
    <main className="min-h-screen bg-[#070707] px-5 py-24 text-white sm:px-8 lg:px-12">
      <article className="mx-auto max-w-4xl">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-red-500">
          Polityka prywatności
        </p>
        <div className="mt-3 h-0.5 w-16 bg-red-600" />

        <h1 className="mt-8 text-4xl font-black leading-tight sm:text-5xl">
          Polityka prywatności
          <span className="block text-red-500">i ochrona danych</span>
        </h1>

        <div className="mt-10 space-y-8 text-sm leading-7 text-neutral-300 sm:text-base">
          <section>
            <h2 className="text-2xl font-black text-white">1. Administrator danych</h2>
            <p className="mt-3">
              Administratorem danych osobowych jest Mateusz Kajzar, prowadzący
              działalność nierejestrowaną.
            </p>
            <p>
              Kontakt w sprawach związanych z ochroną danych osobowych:
              <a
                href="mailto:mateuszkajzar.wspolpraca@gmail.com"
                className="ml-1 text-red-500 underline underline-offset-4"
              >
                mateuszkajzar.wspolpraca@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">2. Jakie dane przetwarzam?</h2>
            <p className="mt-3">
              Jeśli korzystasz z formularza kontaktowego, mogę przetwarzać dane,
              które podasz dobrowolnie, w szczególności: imię i nazwisko, adres
              e-mail, numer telefonu, wybraną formę współpracy oraz cel
              treningowy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">3. W jakim celu przetwarzam dane?</h2>
            <p className="mt-3">
              Dane z formularza kontaktowego przetwarzam w celu odpowiedzi na
              Twoje zgłoszenie, przedstawienia informacji o współpracy oraz
              umówienia konsultacji.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">4. Podstawa prawna przetwarzania</h2>
            <p className="mt-3">
              Podstawą przetwarzania danych jest art. 6 ust. 1 lit. b RODO,
              czyli działania podejmowane na Twoje żądanie przed zawarciem
              ewentualnej współpracy, oraz art. 6 ust. 1 lit. f RODO, czyli mój
              prawnie uzasadniony interes polegający na prowadzeniu komunikacji
              i obsłudze zapytań.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">5. Jak długo przechowuję dane?</h2>
            <p className="mt-3">
              Dane z formularza przechowuję przez czas potrzebny do obsługi
              zgłoszenia i dalszej komunikacji. Jeśli nie dojdzie do współpracy,
              dane mogą zostać usunięte po zakończeniu korespondencji, chyba że
              dalsze przechowywanie będzie potrzebne do zabezpieczenia ewentualnych
              roszczeń.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">6. Kto może mieć dostęp do danych?</h2>
            <p className="mt-3">
              Dane mogą być przetwarzane przez dostawców narzędzi, z których
              korzystam przy obsłudze strony i komunikacji, w szczególności:
              dostawcę hostingu strony, dostawcę poczty e-mail oraz usługę Resend
              wykorzystywaną do przesyłania wiadomości z formularza kontaktowego.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">7. Twoje prawa</h2>
            <p className="mt-3">
              Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia,
              ograniczenia przetwarzania, przeniesienia danych oraz wniesienia
              sprzeciwu wobec przetwarzania danych.
            </p>
            <p>
              Masz również prawo wniesienia skargi do Prezesa Urzędu Ochrony
              Danych Osobowych.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">8. Dobrowolność podania danych</h2>
            <p className="mt-3">
              Podanie danych w formularzu jest dobrowolne, ale niezbędne do
              wysłania zgłoszenia i otrzymania odpowiedzi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">9. Cookies i analityka</h2>
            <p className="mt-3">
              Obecnie strona nie wykorzystuje cookies analitycznych ani
              marketingowych, takich jak Google Analytics, Google Ads czy Meta
              Pixel. Jeśli takie narzędzia zostaną wdrożone w przyszłości,
              polityka prywatności zostanie zaktualizowana, a na stronie pojawi
              się odpowiedni mechanizm zarządzania zgodami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-white">10. Zmiany polityki</h2>
            <p className="mt-3">
              Polityka prywatności może być aktualizowana, szczególnie w przypadku
              dodania nowych narzędzi, formularzy, analityki lub rozwiązań
              marketingowych.
            </p>
            <p className="mt-4 text-neutral-500">
              Data ostatniej aktualizacji: 21 sierpnia 2026 r.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}