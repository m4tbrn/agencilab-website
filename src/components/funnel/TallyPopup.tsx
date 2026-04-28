"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const TALLY_SRC = "https://tally.so/widgets/embed.js";

export default function TallyPopup({
  trigger = "#capture",
  tallySrc,
  title,
}: {
  trigger?: string;
  tallySrc: string;
  title: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const el = target.closest(`a[href="${trigger}"]`);
      if (el) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [trigger]);

  useEffect(() => {
    const load = () => {
      if (typeof window !== "undefined" && window.Tally) {
        window.Tally.loadEmbeds();
      }
    };
    const existing = document.querySelector(`script[src="${TALLY_SRC}"]`);
    if (existing) {
      load();
      return;
    }
    const s = document.createElement("script");
    s.src = TALLY_SRC;
    s.async = true;
    s.onload = load;
    s.onerror = load;
    document.body.appendChild(s);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-200 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className="absolute inset-0 bg-[#1a1a1a]"
        onClick={() => setIsOpen(false)}
      />

      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute top-5 left-5 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
        aria-label="Fermer"
      >
        <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
          <path
            d="M1 1L13 13M13 1L1 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div className="relative z-10 w-full max-w-[720px] mx-auto px-4 md:px-6">
        <iframe
          data-tally-src={tallySrc}
          loading="eager"
          width="100%"
          height={600}
          title={title}
          className="block w-full bg-transparent"
        />
      </div>
    </div>
  );
}
