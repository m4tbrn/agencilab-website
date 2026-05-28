"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

/**
 * CloserWhatsAppCTA · bandeau "Étape obligatoire" sur la page de
 * confirmation iClosed. Si un closer est identifié dans `assigned_to`,
 * affiche la photo + un bouton WhatsApp avec message pré-rempli.
 *
 * SÉCURITÉ · si le closer n'est pas connu, fallback sur le message
 * générique historique (zéro régression).
 *
 * Params iClosed exploités (auto si "Forwarding of event parameters" ON) :
 *   - assigned_to · ex "Tino Rocher"
 *   - invitee_full_name · ex "Lucas Dupont"
 *   - event_start_time · ISO ex "2026-05-28T14:00:00"
 */

type Closer = {
  /** Numéro WhatsApp · format international SANS le + ni espaces */
  phone: string;
  /** Prénom utilisé dans message + bouton */
  prenom: string;
  /** Chemin vers la photo du closer (placée dans /public/images/closers/) */
  photo?: string;
};

/**
 * Mapping closer → infos. La clé doit correspondre à la valeur EXACTE
 * envoyée par iClosed dans `assigned_to` (en minuscules · matching
 * insensible à la casse côté code).
 *
 * TODO · remplacer les phones placeholder par les vrais numéros et
 * déposer les photos dans /public/images/closers/.
 */
const CLOSERS: Record<string, Closer> = {
  "dorian": {
    phone: "33761112535",
    prenom: "Dorian",
    photo: "/images/closers/dorian.png",
  },
  "tino rocher": {
    phone: "33673369330",
    prenom: "Tino",
    photo: "/images/closers/tino.png",
  },
  "martin": {
    phone: "33651077659",
    prenom: "Martin",
    photo: "/images/closers/martin.png",
  },
  "dominika": {
    phone: "33620927231",
    prenom: "Dominika",
    photo: "/images/closers/dominika.png",
  },
};

const FORMAT_DATE = new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
});

function buildMessage({
  closerPrenom,
  prospectFullName,
  dateText,
}: {
  closerPrenom: string;
  /** Prénom + Nom du prospect tel qu'envoyé par iClosed (déjà nettoyé) */
  prospectFullName: string;
  dateText: string | null;
}): string {
  const start = `Salut ${closerPrenom}, c'est ${prospectFullName}.`;
  const ctx = dateText
    ? ` Je viens de réserver notre appel pour ${dateText}.`
    : ` Je viens de réserver notre appel via iClosed.`;
  return `${start}${ctx} Hâte d'échanger avec toi !`;
}

export default function CloserWhatsAppCTA() {
  const [closer, setCloser] = useState<Closer | null>(null);
  const [waUrl, setWaUrl] = useState<string | null>(null);
  const [dateText, setDateText] = useState<string | null>(null);
  const [prenom, setPrenom] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const params = new URLSearchParams(window.location.search);
      const assigned = (params.get("assigned_to") || "").trim();
      const fullName = (params.get("invitee_full_name") || "").trim();
      const startIso = (params.get("event_start_time") || "").trim();

      const key = assigned.toLowerCase();
      const c = CLOSERS[key];
      if (!c) return;

      const firstName = fullName ? fullName.split(/\s+/)[0] : "";
      const safeFullName = fullName || "moi";

      let safeDate: string | null = null;
      if (startIso) {
        const d = new Date(startIso);
        if (!isNaN(d.getTime())) safeDate = FORMAT_DATE.format(d);
      }

      const msg = buildMessage({
        closerPrenom: c.prenom,
        prospectFullName: safeFullName,
        dateText: safeDate,
      });
      const url = `https://wa.me/${c.phone}?text=${encodeURIComponent(msg)}`;

      setCloser(c);
      // Le titre du bandeau utilise toujours le prénom seul · plus naturel
      setPrenom(firstName || null);
      setDateText(safeDate);
      setWaUrl(url);
    } catch {
      /* fallback silencieux */
    }
  }, []);

  // ============================================================
  // Cas 1 · closer matché → bandeau XL obligatoire avec photo
  // ============================================================
  if (closer && waUrl) {
    return (
      <div
        className="relative overflow-hidden rounded-3xl border-2 border-[#25D366]/60 bg-gradient-to-br from-[#25D366]/[0.12] via-[#25D366]/[0.06] to-[#25D366]/[0.12] p-6 backdrop-blur-sm md:p-9"
        style={{ boxShadow: "0 0 80px rgba(37, 211, 102, 0.3)" }}
      >
        {/* Ribbon "OBLIGATOIRE" · pill or sobre, centré */}
        <div className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/[0.12] px-4 py-1.5 text-[0.7rem] font-extrabold uppercase tracking-[0.2em] text-gold-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
            </span>
            Étape obligatoire
          </span>
        </div>

        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8">
          {/* COLONNE PHOTO · avatar + caption "Ton conseiller dédié · Prénom" */}
          <div className="flex flex-col items-center gap-3 md:shrink-0">
            <CloserAvatar closer={closer} />
            <div className="text-center">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/55">
                Ton conseiller dédié
              </p>
              <p className="mt-0.5 text-[1.25rem] font-extrabold leading-none text-white md:text-[1.375rem]">
                {closer.prenom}
              </p>
            </div>
          </div>

          {/* CONTENU */}
          <div className="min-w-0 flex-1 text-center md:text-left">
            <h3 className="text-[1.15rem] font-extrabold leading-[1.25] text-white md:text-[1.35rem]">
              {prenom ? `${prenom}, contacte ` : "Contacte "}
              {closer.prenom} sur WhatsApp{" "}
              <br className="hidden md:block" />
              pour valider ton rendez-vous
              {dateText ? (
                <> du <span className="text-[#25D366]">{dateText}</span></>
              ) : null}
              .
            </h3>

            <p className="mt-3 text-[0.9375rem] leading-[1.5] text-white/75">
              Sans message de ta part, on ne peut pas garantir ton créneau.
              Clique sur le bouton, le message est déjà rédigé pour toi.
            </p>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-7 py-4 text-[1rem] font-extrabold text-[#050A14] transition hover:scale-[1.02] hover:bg-[#1ebe5d]"
              style={{ boxShadow: "0 12px 32px rgba(37, 211, 102, 0.5)" }}
            >
              <WhatsappLogo size={24} weight="fill" />
              Écrire à {closer.prenom} maintenant
            </a>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================
  // Cas 2 · fallback générique (texte historique)
  // ============================================================
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-4 md:justify-center md:px-6 md:py-4">
      <WhatsappLogo
        size={28}
        weight="fill"
        className="shrink-0 text-[#25D366]"
      />
      <p className="text-[0.875rem] leading-[1.5] text-white/80 md:whitespace-nowrap md:text-[0.9375rem]">
        Pour valider ton rendez-vous, un conseiller va te contacter
        d&apos;ici peu via{" "}
        <strong className="text-white">WhatsApp ou SMS</strong>.
      </p>
    </div>
  );
}

/**
 * Avatar du closer · photo si dispo, sinon initiale stylée.
 * Fallback automatique sur l'erreur de chargement de l'image.
 */
function CloserAvatar({ closer }: { closer: Closer }) {
  const [imgError, setImgError] = useState(false);
  const showPhoto = closer.photo && !imgError;

  return (
    <div
      className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-[#25D366]/60 md:h-40 md:w-40"
      style={{ boxShadow: "0 0 30px rgba(37, 211, 102, 0.4)" }}
    >
      {showPhoto ? (
        <Image
          src={closer.photo!}
          alt={closer.prenom}
          fill
          sizes="160px"
          className="object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#25D366]/25 to-[#1ebe5d]/15 text-[3rem] font-extrabold text-white/90 md:text-[3.5rem]">
          {closer.prenom[0]}
        </div>
      )}
    </div>
  );
}
