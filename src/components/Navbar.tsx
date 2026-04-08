"use client";

import { useState } from "react";
import Image from "next/image";

const CTA_LINK = "#rejoindre";

const navLinks: { label: string; href: string; badge?: string }[] = [
  { label: "L'activité", href: "#solution" },
  { label: "Agencilab", href: "#competences" },
  { label: "Témoignages", href: "#ils-temoignent" },
  { label: "FAQ", href: "#faq" },
  { label: "Mon livre", href: "#", badge: "Bientôt disponible" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    >
      <div className="mx-auto w-full max-w-7xl px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6">
        <div className="relative flex items-center justify-between rounded-xl border border-white/10 bg-navy-950/60 px-4 py-2.5 backdrop-blur-xl sm:rounded-full sm:px-6 sm:py-3">
          <a href="#" className="flex-shrink-0">
            <Image
              src="/images/logo-white.png"
              alt="Agencilab"
              width={140}
              height={36}
              className="h-5 w-auto sm:h-7"
              priority
            />
          </a>

          {/* Desktop nav links */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.badge ? undefined : link.href}
                className={`text-sm tracking-tight transition-colors ${link.badge ? "cursor-default text-white/30" : "text-white/50 hover:text-white"}`}
              >
                {link.label}
                {link.badge && (
                  <span className="ml-1.5 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-bold text-navy-950">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://login.circle.so/sign_in?request_host=app.agencilab.com#email"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm tracking-tight text-white/50 transition-colors hover:text-white sm:block"
            >
              Se connecter
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-white/60 transition-colors hover:text-white md:hidden"
              aria-label="Menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <div className="shake-btn relative hidden sm:block">
              <a
                href={CTA_LINK}
                className="cta-button relative block border border-white/30 bg-gold-400 text-navy-950 px-6 py-2.5 rounded-lg text-sm font-semibold tracking-tight"
              >
                Réserver mon appel
              </a>
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                1
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mx-3 mt-2 rounded-2xl border border-white/10 bg-navy-950/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.badge ? undefined : link.href}
                onClick={() => !link.badge && setMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm tracking-tight transition-colors hover:bg-white/5 ${link.badge ? "cursor-default text-white/30" : "text-white/60 hover:text-white"}`}
              >
                {link.label}
                {link.badge && (
                  <span className="ml-1.5 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-bold text-navy-950">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
            <a
              href="https://login.circle.so/sign_in?request_host=app.agencilab.com#email"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-4 py-3 text-sm tracking-tight text-white/60 transition-colors hover:bg-white/5 hover:text-white"
            >
              Se connecter
            </a>
            <a
              href="#rejoindre"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-gold-400 px-4 py-3 text-center text-sm font-semibold tracking-tight text-navy-950"
            >
              Réserver mon appel
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
