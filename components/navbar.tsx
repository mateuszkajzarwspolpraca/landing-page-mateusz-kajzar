"use client";

import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "O mnie", href: "#o-mnie" },
  { label: "Oferta", href: "#oferta" },
  { label: "Opinie", href: "#opinie" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function slowScrollContainerTo(container: HTMLElement, targetTop: number) {
  const startTop = container.scrollTop;
  const distance = targetTop - startTop;
  const duration = 1400;
  const startTime = performance.now();

  container.classList.remove("snap-mandatory");

  function animate(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    container.scrollTop = startTop + distance * eased;

    if (progress < 1) {
      requestAnimationFrame(animate);
      return;
    }

    container.classList.add("snap-mandatory");
  }

  requestAnimationFrame(animate);
}

export function SiteNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setIsOpen(false);

    const container = document.querySelector<HTMLElement>("#page-scroll");
    const target = document.querySelector<HTMLElement>(href);

    if (!container || !target) return;

    slowScrollContainerTo(container, target.offsetTop);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#hero"
          className="flex items-center gap-3"
          onClick={(event) => handleNavClick(event, "#hero")}
        >
          <Image
            src="/images/logo/logo.PNG"
            alt="Logo Mateusz Kajzar"
            width={56}
            height={56}
            priority
            className="h-11 w-11 object-contain sm:h-12 sm:w-12"
          />

          <div>
            <p className="text-sm font-black uppercase leading-none tracking-wide sm:text-lg">
              Mateusz Kajzar
            </p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-red-500 sm:text-xs">
              Trener personalny
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-10 text-sm font-medium text-white/86 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-red-500"
              onClick={(event) => handleNavClick(event, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="hidden items-center gap-2 rounded-md bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-[0_18px_60px_rgba(236,31,39,0.28)] transition hover:bg-red-500 lg:flex"
          onClick={(event) => handleNavClick(event, "#kontakt")}
        >
          Umów konsultację
          <ArrowRight className="h-4 w-4" />
        </a>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-white/15 bg-white/5 text-white lg:hidden"
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 px-5 pb-6 pt-3 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-semibold text-white/86 transition hover:bg-white/5 hover:text-red-500"
                onClick={(event) => handleNavClick(event, link.href)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#kontakt"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-4 text-base font-bold text-white transition hover:bg-red-500"
              onClick={(event) => handleNavClick(event, "#kontakt")}
            >
              Umów darmową konsultację
              <ArrowRight className="h-5 w-5" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}