"use client";

/**
 * Górny pasek strony (przyklejony przy przewijaniu): logo, menu i link do Instagrama.
 *
 * Menu jest opcjonalne: podstrona przekazuje własną listę linków przez `links`.
 * Na komputerze linki są w pasku, na telefonie chowają się pod przyciskiem „hamburger”.
 * Bez `links` (np. strona główna, regulamin) widać tylko logo i Instagram.
 */

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { INSTAGRAM_HANDLE, INSTAGRAM_PROFILE_URL } from "@/lib/site";

/** Jeden link w menu, np. { label: "FAQ", href: "#faq" }. */
export type NavLink = { label: string; href: string };

type SiteHeaderProps = {
  links?: NavLink[];
};

export function SiteHeader({ links = [] }: SiteHeaderProps) {
  // Czy menu na telefonie jest rozwinięte.
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-8">
        {/* Logo + imię: link do strony głównej */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <Image
            src="/images/logo/logo.PNG"
            alt="Logo Mateusz Kajzar"
            width={56}
            height={56}
            priority
            className="h-10 w-10 object-contain sm:h-12 sm:w-12"
          />
          <span>
            <span className="block text-sm font-black uppercase leading-none tracking-wide text-white sm:text-lg">
              Mateusz Kajzar
            </span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-red-500 sm:text-xs">
              Trener personalny
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Menu na komputerze (od szerokości lg) */}
          {links.length > 0 && (
            <nav className="hidden items-center gap-8 text-sm font-medium text-white/85 lg:flex">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-red-500">
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* Przycisk @dekomplikator. Na telefonie, gdy jest menu, chowa się do menu, żeby się zmieścić. */}
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-4 h-11 items-center justify-center rounded-md border border-white/15 bg-white/5 px-3 text-sm font-bold text-white transition hover:border-red-500 hover:text-red-500 ${links.length > 0 ? "hidden sm:flex" : "flex"}`}
          >
            @{INSTAGRAM_HANDLE}
          </a>

          {/* Przycisk „hamburger” otwierający menu na telefonie */}
          {links.length > 0 && (
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white lg:hidden"
              aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          )}
        </div>
      </div>

      {/* Rozwinięte menu na telefonie */}
      {isOpen && links.length > 0 && (
        <nav className="border-t border-white/10 bg-black/95 px-4 pb-5 pt-2 lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-3 text-base font-semibold text-white/85 transition hover:bg-white/5 hover:text-red-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-md px-3 py-3 text-base font-semibold text-white/85 transition hover:bg-white/5 hover:text-red-500"
          >
            Instagram @{INSTAGRAM_HANDLE}
          </a>
        </nav>
      )}
    </header>
  );
}
