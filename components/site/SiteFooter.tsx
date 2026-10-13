"use client";

/**
 * Stopka na dole każdej podstrony: kontakt, linki do podstron i dokumentów,
 * przycisk „Ustawienia cookies” (otwiera ponownie baner zgody) i rok.
 * "use client" jest potrzebne, bo przycisk cookies reaguje na kliknięcie.
 */

import Link from "next/link";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_PROFILE_URL } from "@/lib/site";
import { openConsentSettings } from "@/lib/consent";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-4 py-10 text-sm text-white/60 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-black uppercase tracking-wide text-white">Mateusz Kajzar</p>
          <p className="mt-1">Trener personalny · online i w Jaworznie</p>
          <p className="mt-3 flex flex-col gap-1 sm:flex-row sm:gap-3">
            <a href={INSTAGRAM_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              Instagram @{INSTAGRAM_HANDLE}
            </a>
            {/* break-all: długi adres e-mail łamie się na wąskim telefonie zamiast rozpychać stronę */}
            <a href={`mailto:${CONTACT_EMAIL}`} className="break-all hover:text-red-500">
              {CONTACT_EMAIL}
            </a>
          </p>
        </div>

        <nav className="flex flex-col gap-2 sm:items-end">
          <Link href="/online" className="hover:text-red-500">Współpraca online</Link>
          <Link href="/jaworzno" className="hover:text-red-500">Współpraca Jaworzno</Link>
          <Link href="/regulamin" className="hover:text-red-500">Regulamin</Link>
          <Link href="/polityka-prywatnosci" className="hover:text-red-500">Polityka prywatności</Link>
          <button type="button" onClick={openConsentSettings} className="text-left hover:text-red-500 sm:text-right">
            Ustawienia cookies
          </button>
        </nav>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-xs text-white/40">
        © {new Date().getFullYear()} Mateusz Kajzar
      </p>
    </footer>
  );
}
