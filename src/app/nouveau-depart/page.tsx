import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { CalendarPlus, GoogleLogo } from "@phosphor-icons/react/dist/ssr";
import TeaseCountdown from "./_lib/TeaseCountdown";
import { LANCEMENT_OUVERTURE } from "@/app/nouveau-chapitre/_lib/config";

/** La page doit être évaluée à chaque visite pour comparer l'heure d'ouverture. */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "La promotion arrive | Agencilab",
  description:
    "La plus grosse promotion jamais faite sur Agencilab. Réservée aux abonnés email, une seule fois, 48 heures.",
  robots: { index: false, follow: false },
};

const VISAGES = [
  { src: "/images/visages/barthelemy.jpg", name: "Barthélémy" },
  { src: "/images/visages/marina.jpg", name: "Marina" },
  { src: "/images/visages/yohann.jpg", name: "Yohann" },
  { src: "/images/visages/lucas.jpg", name: "Lucas" },
  { src: "/images/visages/stephanie.jpg", name: "Stéphanie" },
  { src: "/images/visages/damien.jpg", name: "Damien" },
  { src: "/images/visages/clement.jpg", name: "Clément" },
];

/** Lien "Ajouter à Google Agenda" calculé depuis la date d'ouverture. */
function googleCalendarUrl() {
  const debut = new Date(LANCEMENT_OUVERTURE);
  const fin = new Date(debut.getTime() + 60 * 60 * 1000);
  const fmt = (d: Date) =>
    d
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}Z$/, "Z");
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Ouverture Agencilab à -72% (48h seulement)",
    dates: `${fmt(debut)}/${fmt(fin)}`,
    details:
      "Les portes ouvrent. Une seule fois, 48 heures. https://agencilab.com/nouveau-chapitre",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export default function BientotPage() {
  // Les emails de teasing pointent tous ici. Une fois les portes ouvertes, cette
  // page n'a plus de raison d'être : on envoie le visiteur sur la page de vente.
  if (Date.now() >= new Date(LANCEMENT_OUVERTURE).getTime()) {
    redirect("/nouveau-chapitre");
  }

  return (
    <main className="relative flex min-h-screen flex-col items-center overflow-hidden px-6 py-12 text-center md:py-16">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-gold-400/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-3xl">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/logo-white.png"
            alt="Agencilab"
            width={180}
            height={48}
            className="h-9 w-auto opacity-90"
          />
        </div>

        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" />
            <span className="text-[0.75rem] font-bold uppercase tracking-[0.16em] text-gold-400">
              Réservé aux abonnés email seulement
            </span>
          </div>
        </div>

        {/* Hero */}
        <h1 className="mx-auto mb-4 max-w-[720px] text-[clamp(1.75rem,5vw,3rem)] font-bold leading-[1.1] tracking-tight text-white">
          La plus grosse promotion jamais faite sur{" "}
          <span className="gradient-text">Agencilab</span> sera disponible
          dans...
        </h1>

        {/* Compte à rebours */}
        <div className="mb-6 mt-4">
          <TeaseCountdown />
        </div>

        <p className="mx-auto mb-10 max-w-xl text-[1rem] leading-[1.6] text-white/60 md:text-[1.0625rem]">
          Tu ne la verras ni sur Instagram, ni sur YouTube, ni sur Facebook.
          Elle n&apos;existera qu&apos;ici. 48 heures, pas une minute de plus.
        </p>

        {/* Add to calendar */}
        <p className="mb-4 text-[0.9375rem] text-white/50">
          Mets un rappel pour ne pas rater l&apos;ouverture :
        </p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={googleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button glow-gold inline-flex items-center gap-3 rounded-xl bg-gold-400 px-8 py-4 text-[1rem] font-bold tracking-tight text-navy-950"
          >
            <GoogleLogo size={20} weight="bold" />
            Ajouter à Google Agenda
          </a>
          <a
            href="/nouveau-depart/rappel.ics"
            className="glass-card inline-flex items-center gap-3 rounded-xl px-8 py-4 text-[1rem] font-bold tracking-tight text-white/90 transition hover:text-white"
          >
            <CalendarPlus size={20} weight="bold" />
            Apple / Outlook
          </a>
        </div>

        {/* Visages empilés + preuve sociale */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <div className="flex -space-x-3">
            {VISAGES.map((face) => (
              <div
                key={face.name}
                className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-navy-950 bg-navy-900"
              >
                <Image
                  src={face.src}
                  alt={face.name}
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
            ))}
          </div>
          <p className="max-w-md text-[0.875rem] leading-[1.5] text-white/55">
            <strong className="text-gold-400">+1 018 personnes</strong> ont déjà
            changé de vie avec Agencilab.
          </p>
        </div>

        <p className="mt-8 text-[0.8125rem] text-white/30">
          Agencilab · L&apos;offre sera annoncée uniquement par email
        </p>
      </div>
    </main>
  );
}
