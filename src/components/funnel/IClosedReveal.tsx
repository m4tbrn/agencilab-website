"use client";

import { useEffect, useState } from "react";

const DEFAULT_DELAY_MS = 18 * 60 * 1000;

function formatTime(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function IClosedReveal({
  url,
  title,
  delayMs = DEFAULT_DELAY_MS,
}: {
  url: string;
  title: string;
  delayMs?: number;
}) {
  const [remainingMs, setRemainingMs] = useState(delayMs);
  const [revealed, setRevealed] = useState(false);
  const [reservations, setReservations] = useState<number | null>(null);

  useEffect(() => {
    const endTime = Date.now() + delayMs;
    const tick = () => {
      const remaining = endTime - Date.now();
      if (remaining <= 0) {
        setRevealed(true);
        return;
      }
      setRemainingMs(remaining);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [delayMs]);

  useEffect(() => {
    if (!revealed) return;
    setReservations(11 + Math.floor(Math.random() * 10));
    const scheduleBump = () => {
      const delay = 180000 + Math.random() * 240000;
      return setTimeout(() => {
        setReservations((c) => (c === null ? c : c + 1));
        timeout = scheduleBump();
      }, delay);
    };
    let timeout = scheduleBump();
    return () => clearTimeout(timeout);
  }, [revealed]);

  if (revealed) {
    return (
      <div id="rdv" className="mt-10 scroll-mt-20 -mx-6 md:mx-0">
        <div className="bg-[#131316] rounded-none md:rounded-3xl px-5 md:px-10 py-10 md:py-14 text-center text-white">
          <div className="mb-6 text-center">
            <p className="text-white font-semibold text-[0.9375rem] md:text-[1rem]">
              🔥{" "}
              <strong className="text-[#FF7A00] font-extrabold">
                {reservations ?? "—"} personnes
              </strong>{" "}
              ont réservé leur appel aujourd&apos;hui
            </p>
            <p className="mt-1.5 text-[0.8125rem] italic text-white/50">
              (Regarde s&apos;il reste des disponibilités)
            </p>
          </div>
          <h2
            className="text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-[1.15] mb-5"
            style={{ color: "#ffffff" }}
          >
            Tu as encore des questions ?
          </h2>
          <p className="text-[1rem] md:text-[1.0625rem] text-white/90 leading-[1.5] max-w-[720px] md:max-w-none mx-auto mb-4 md:whitespace-nowrap">
            Je mets à ta disposition pendant 45 minutes un de mes conseillers pour répondre à toutes tes questions.
          </p>
          <div className="font-600 text-white mb-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[0.9375rem] md:text-[1rem]">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[#a3e635] font-700">✓</span> 100% gratuit
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[#a3e635] font-700">✓</span> Sans engagement
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-[#a3e635] font-700">✓</span> Réponse personnalisée
            </span>
          </div>
          <div className="max-w-[720px] mx-auto mb-6 p-5 md:p-6 rounded-2xl border border-[#ef4444]/40 bg-[#ef4444]/5 text-left">
            <p className="text-[0.9375rem] md:text-[1rem] text-white font-500 leading-[1.55]">
              <span className="mr-1">⚠️</span>
              Certes, l&apos;accès à l&apos;accompagnement est bien{" "}
              <strong>moins cher que les 50 000€ d&apos;une école de commerce</strong>{" "}
              mais représente tout de même un investissement de{" "}
              <strong className="text-[#ef4444]">plusieurs milliers d&apos;euros</strong>.
            </p>
          </div>

          <p className="text-[1rem] md:text-[1.0625rem] text-white/90 mb-4">
            👇🏼 Il te suffit de choisir un créneau juste ici 👇🏼
          </p>

          <iframe
            src={url}
            title={title}
            scrolling="no"
            loading="eager"
            className="w-full h-[1100px] md:h-[680px] border-0 block"
            allow="camera; microphone"
          />
        </div>
      </div>
    );
  }

  return (
    <p className="text-center text-[1.125rem] md:text-[1.25rem] text-white mt-10 leading-[1.4] font-medium">
      Reste bien jusqu&apos;à la fin, une surprise apparaitra ici dans{" "}
      <span
        className="text-[#015FFF] tabular-nums text-[1.375rem] md:text-[1.5rem]"
        style={{ fontWeight: 800 }}
      >
        {formatTime(remainingMs)}
      </span>
    </p>
  );
}
