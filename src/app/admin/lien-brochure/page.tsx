"use client";

import { useEffect, useMemo, useState } from "react";

/**
 * Outil interne pour générer le lien WhatsApp de la brochure Growth Marketing
 * à envoyer au lead après son booking iClosed.
 *
 * Utilisation : Tino / Matis remplissent les 4 champs, copient le lien, le collent
 * dans WhatsApp. Le lien préremplit prénom + conseiller + date du rdv.
 *
 * Pas d'auth pour l'instant (URL non indexée + obscure). Ajouter une protection
 * si besoin (basic auth, env password).
 */
export default function LienBrochurePage() {
  const [prenom, setPrenom] = useState("");
  const [closer, setCloser] = useState<"Tino" | "Matis">("Tino");
  const [date, setDate] = useState(""); // YYYY-MM-DD
  const [heure, setHeure] = useState(""); // HH:mm

  const [origin, setOrigin] = useState("https://agencilab.com");
  useEffect(() => {
    if (typeof window !== "undefined") setOrigin(window.location.origin);
  }, []);

  // Date ISO pour le rdv : "2026-05-20T14:00"
  const rdvIso = useMemo(() => {
    if (!date || !heure) return "";
    return `${date}T${heure}`;
  }, [date, heure]);

  const url = useMemo(() => {
    const params: string[] = [];
    if (closer) params.push(`closer=${encodeURIComponent(closer)}`);
    if (rdvIso) params.push(`rdv=${encodeURIComponent(rdvIso)}`);
    if (prenom.trim())
      params.push(`prenom=${encodeURIComponent(prenom.trim())}`);
    const query = params.length ? `?${params.join("&")}` : "";
    return `${origin}/le-growth-marketing${query}`;
  }, [origin, closer, rdvIso, prenom]);

  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard API non dispo */
    }
  };

  // Aperçu humanisé du rdv pour validation visuelle
  const rdvPreview = useMemo(() => {
    if (!rdvIso) return null;
    const d = new Date(rdvIso);
    if (isNaN(d.getTime())) return null;
    const datePart = new Intl.DateTimeFormat("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Europe/Paris",
    }).format(d);
    const time = new Intl.DateTimeFormat("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/Paris",
    }).format(d);
    const [h, m] = time.split(":");
    const hourFr = m === "00" ? `${parseInt(h, 10)}h` : `${parseInt(h, 10)}h${m}`;
    return `le ${datePart} à ${hourFr}`;
  }, [rdvIso]);

  const isComplete = prenom.trim() && date && heure;

  return (
    <main className="relative min-h-screen bg-navy-950 px-6 py-12 text-white md:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-accent-400/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-gold-400/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[640px]">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-gold-400">
            Outil interne
          </p>
          <h1 className="mb-3 text-[clamp(1.75rem,4vw,2.5rem)] font-extrabold leading-[1.1] tracking-tight">
            Générer le lien brochure
          </h1>
          <p className="mx-auto max-w-[480px] text-[0.9375rem] text-white/65 md:text-[1rem]">
            Remplis les 4 champs, copie le lien, et envoie-le au lead sur
            WhatsApp après son booking iClosed.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-8">
          {/* Prénom */}
          <div>
            <label
              htmlFor="prenom"
              className="mb-2 block text-[0.8125rem] font-bold text-white"
            >
              Prénom du lead
            </label>
            <input
              id="prenom"
              type="text"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              placeholder="ex : Lucas"
              autoComplete="off"
              className="block w-full rounded-xl border border-white/15 bg-navy-950/40 px-4 py-3 text-[1rem] text-white placeholder-white/35 outline-none transition-colors focus:border-gold-400/60"
            />
          </div>

          {/* Closer */}
          <div>
            <label className="mb-2 block text-[0.8125rem] font-bold text-white">
              Conseiller assigné
            </label>
            <div className="grid grid-cols-2 gap-3">
              {(["Tino", "Matis"] as const).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCloser(c)}
                  className={`rounded-xl border-2 px-4 py-3 text-[0.9375rem] font-bold transition-all ${
                    closer === c
                      ? "border-gold-400 bg-gold-400/15 text-white"
                      : "border-white/10 bg-white/[0.02] text-white/55 hover:border-white/25 hover:text-white/85"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Date + heure */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="date"
                className="mb-2 block text-[0.8125rem] font-bold text-white"
              >
                Date du RDV
              </label>
              <input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="block w-full rounded-xl border border-white/15 bg-navy-950/40 px-4 py-3 text-[1rem] text-white outline-none transition-colors focus:border-gold-400/60"
              />
            </div>
            <div>
              <label
                htmlFor="heure"
                className="mb-2 block text-[0.8125rem] font-bold text-white"
              >
                Heure
              </label>
              <input
                id="heure"
                type="time"
                value={heure}
                onChange={(e) => setHeure(e.target.value)}
                className="block w-full rounded-xl border border-white/15 bg-navy-950/40 px-4 py-3 text-[1rem] text-white outline-none transition-colors focus:border-gold-400/60"
              />
            </div>
          </div>

          {/* Aperçu humanisé */}
          {rdvPreview && (
            <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[0.875rem] text-white/70">
              Aperçu sur la page : <strong className="text-white">{rdvPreview}</strong>
            </div>
          )}
        </div>

        {/* Lien généré */}
        <div className="mt-6 space-y-3">
          <label className="block text-[0.75rem] font-bold uppercase tracking-[0.18em] text-gold-400">
            Lien à envoyer en WhatsApp
          </label>
          <div className="flex items-stretch gap-2">
            <code className="flex-1 truncate rounded-xl border border-white/10 bg-navy-950/60 px-4 py-3 text-[0.875rem] text-white/85">
              {url}
            </code>
            <button
              type="button"
              onClick={handleCopy}
              disabled={!isComplete}
              className={`shrink-0 rounded-xl border-2 px-5 py-3 text-[0.875rem] font-bold transition-all ${
                copied
                  ? "border-[#a3e635] bg-[#a3e635]/15 text-[#a3e635]"
                  : isComplete
                    ? "border-gold-400 bg-gold-400 text-navy-950 hover:scale-[1.02]"
                    : "cursor-not-allowed border-white/10 bg-white/[0.04] text-white/30"
              }`}
              style={
                copied
                  ? undefined
                  : isComplete
                    ? { boxShadow: "0 0 20px rgba(255, 122, 0, 0.35)" }
                    : undefined
              }
            >
              {copied ? "Copié ✓" : "Copier"}
            </button>
          </div>

          {/* Test link */}
          {isComplete && (
            <div className="flex items-center justify-between gap-3 rounded-xl border border-accent-400/30 bg-accent-400/[0.05] px-4 py-3">
              <p className="text-[0.8125rem] text-white/75">
                Tester le lien dans un nouvel onglet
              </p>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-[0.8125rem] font-bold text-accent-400 underline-offset-4 hover:underline"
              >
                Ouvrir
                <span className="ml-1.5">↗</span>
              </a>
            </div>
          )}
        </div>

        {/* Mode d'emploi rapide */}
        <details className="mt-8 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 backdrop-blur-sm">
          <summary className="cursor-pointer text-[0.875rem] font-bold text-white/85">
            Comment utiliser ce lien
          </summary>
          <div className="mt-4 space-y-3 text-[0.875rem] leading-[1.55] text-white/65">
            <p>
              <strong className="text-white">1.</strong> Dès qu&apos;un lead
              réserve un appel sur iClosed, tu vois sa date de rdv +
              prénom dans Slack/notif.
            </p>
            <p>
              <strong className="text-white">2.</strong> Remplis le formulaire
              ci-dessus avec son prénom, ton nom (Tino ou Matis), et la date
              exacte du rdv.
            </p>
            <p>
              <strong className="text-white">3.</strong> Clique sur Copier et
              colle le lien dans WhatsApp avec un mot d&apos;intro perso ({" "}
              <em>
                « Salut Lucas, voici la brochure à lire avant notre appel
                mardi 14h, à plus »
              </em>{" "}
              ).
            </p>
            <p>
              <strong className="text-white">4.</strong> Le lead arrive sur la
              brochure avec son prénom partout, ton nom et la vraie date du
              rdv affichée à chaque étape.
            </p>
          </div>
        </details>
      </div>
    </main>
  );
}
