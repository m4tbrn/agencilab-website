import type { Metadata } from "next";
import Image from "next/image";
import VidalyticsEmbed from "@/components/funnel/VidalyticsEmbed";
import Testimonials from "@/components/Testimonials";
import ResultsProof from "@/components/ResultsProof";
import { PlayCircle } from "@phosphor-icons/react/dist/ssr";

/**
 * Page /valeur · reproduit blog.agencilab.com/valeur
 * - Bandeau "Important : regarde cette vidéo avant ton rendez-vous"
 * - Vidéo Vidalytics principale (Dorian / Incubateur)
 * - Grille des 18 témoignages courts
 */

export const metadata: Metadata = {
  title: "Important · regarde cette vidéo avant ton rendez-vous · Agencilab",
  description:
    "Comment Dorian, commercial en diététique, a généré 5 000€ à une marque de compléments 3 semaines après avoir rejoint l'Incubateur d'Agencilab.",
  robots: { index: false, follow: false },
};

const VSL_ID = "_jM72twW4n7tlNcX";

type Temoignage = {
  prenom: string;
  role: string;
  quote: string;
  /** nom du fichier dans /public/images/visages/ (optionnel) */
  photo?: string;
};

const TEMOIGNAGES: Temoignage[] = [
  {
    prenom: "Abelhakim",
    role: "salarié",
    quote: "La formation est simple, claire, et complète",
  },
  {
    prenom: "Alexandre",
    role: "—",
    quote:
      "J'ai intégré la formation fin juin, j'ai commencé à lancer mon entreprise en juillet",
  },
  {
    prenom: "Adrien",
    role: "ouvrier de production à la fabrique nationale de Belgique",
    quote: "C'est une des meilleures décisions de ma vie",
  },
  {
    prenom: "Charles",
    role: "ancien ingénieur",
    quote: "Tout est fait pour qu'on réussisse",
  },
  {
    prenom: "Dier",
    role: "ancien militaire dans la marine nationale",
    quote: "La meilleure formation à laquelle j'ai participé",
  },
  {
    prenom: "Edwin",
    role: "étudiant en histoire",
    quote: "J'ai l'impression de mieux comprendre le monde qui nous entoure",
  },
  {
    prenom: "Gino",
    role: "ancien mécanicien sur engins de chantier",
    quote: "La formation est très enrichissante",
  },
  {
    prenom: "Nathan",
    role: "ancien étudiant en STAPS et coach sportif",
    quote: "Louis a créé un module qu'il a utilisé dans toute sa chaîne Youtube",
  },
  {
    prenom: "Marc",
    role: "bachelor en finance",
    quote: "La formation est un concentré de savoirs et d'informations",
  },
  {
    prenom: "Théo",
    role: "travaille dans la maintenance aéronautique",
    quote: "C'est la meilleure formation que j'ai fait",
  },
  {
    prenom: "Solène",
    role: "étudiante en médecine",
    quote: "Si jamais tu as un problème, tu ne seras jamais tout seul",
    photo: "solene.jpg",
  },
  {
    prenom: "Yassine",
    role: "ancien étudiant en langues qui a enchaîné les petits boulots",
    quote: "Bonne étape pour se lancer, et avoir conscience qu'on peut réussir",
  },
  {
    prenom: "Louis",
    role: "étudiant en école d'ingénieur",
    quote: "Les coachs sont là pour te pousser à avancer",
  },
  {
    prenom: "Arthur",
    role: "ancien étudiant en économie",
    quote:
      "Grâce à Agencilab, j'ai rencontré quelqu'un, et j'ai fait travailler mon réseau",
    photo: "arthur.jpg",
  },
  {
    prenom: "Dimitri",
    role: "étudiant en BTS NDRC",
    quote: "J'ai lancé mon auto-entreprise de Media Buying",
    photo: "dimitri.jpg",
  },
  {
    prenom: "Florent",
    role: "ancien militaire et boulanger",
    quote:
      "J'ai tout de suite remarqué le côté humain, et qu'il y avait des personnes derrière",
    photo: "florent.jpg",
  },
  {
    prenom: "Julien",
    role: "ancien étudiant en CAP Cuisine",
    quote: "J'ai découvert le milieu entrepreneurial",
    photo: "julien.jpg",
  },
  {
    prenom: "Antoine",
    role: "étudiant en école d'ingénieur",
    quote:
      "Je trouve ça très plaisant d'avoir des réunions toutes les semaines, avec de l'encadrement",
  },
];

export default function ValeurPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050A14] text-white">
      {/* Glow ambiance */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-accent-400/15 blur-[160px]" />
      </div>

      {/* HEADER · logo seul */}
      <header className="relative z-10 flex justify-center pt-8 md:pt-10">
        <Image
          src="/images/logo-white.png"
          alt="Agencilab"
          width={150}
          height={40}
          className="h-8 w-auto opacity-80 md:h-9"
          unoptimized
          priority
        />
      </header>

      {/* HERO · titre + sous-titre rouge + vidéo */}
      <section className="relative z-10 px-5 pt-10 pb-16 sm:px-6 md:pt-14 md:pb-20">
        <div className="mx-auto max-w-[920px] text-center">
          {/* Badge important */}
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/[0.1] px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-red-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
            Important
          </span>

          <h1 className="mt-6 text-[clamp(1.85rem,4.5vw,2.85rem)] font-extrabold leading-[1.12] tracking-tight">
            Regarde cette vidéo avant ton{" "}
            <span className="gradient-text">rendez-vous</span>.
          </h1>

          <p className="mx-auto mt-5 max-w-[720px] text-[1rem] leading-[1.6] text-white/70 md:text-[1.0625rem]">
            Comment Dorian, commercial en diététique, a généré{" "}
            <strong className="text-white">5 000€</strong> à une marque de
            compléments <strong className="text-white">3 semaines</strong> après
            avoir rejoint l&apos;<strong className="text-white">Incubateur</strong>{" "}
            d&apos;Agencilab.
          </p>

          {/* Vidalytics */}
          <div className="mx-auto mt-10 max-w-[880px] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_30px_80px_-20px_rgba(1,95,255,0.4)]">
            <VidalyticsEmbed vslId={VSL_ID} />
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="relative z-10 px-5 py-12 sm:px-6 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 text-center md:mb-14">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-accent-400">
              Témoignages
            </p>
            <h2 className="mt-2 text-[clamp(1.625rem,4vw,2.25rem)] font-extrabold leading-[1.15] tracking-tight">
              Ce que pensent les membres{" "}
              <span className="gradient-text">d&apos;Agencilab</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEMOIGNAGES.map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* PREUVES DE RÉSULTATS */}
      <div className="relative z-10">
        <ResultsProof />
      </div>

      {/* AVIS TRUSTPILOT */}
      <div className="relative z-10">
        <Testimonials />
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 py-8 text-center text-[0.75rem] text-white/40">
        Copyrights 2026 · Agencilab™
      </footer>
    </div>
  );
}

function TestimonialCard({ t }: { t: Temoignage }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.05]">
      {/* Visuel · placeholder play button (vidéo à brancher plus tard) */}
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-navy-800/60 to-navy-950">
        {t.photo ? (
          <Image
            src={`/images/visages/${t.photo}`}
            alt={t.prenom}
            fill
            className="object-cover opacity-50 transition group-hover:opacity-70"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-[3rem] font-extrabold text-white/15">
            {t.prenom[0]}
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayCircle
            size={56}
            weight="fill"
            className="text-white/90 drop-shadow-[0_4px_20px_rgba(0,0,0,0.6)] transition group-hover:scale-110 group-hover:text-gold-400"
          />
        </div>
        <span className="absolute bottom-2 left-2 rounded-md bg-black/55 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm">
          🔊 Active le son
        </span>
      </div>

      {/* Texte */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-[0.95rem] font-bold leading-[1.35] text-white">
          {t.prenom}
          {t.role !== "—" && (
            <span className="ml-1 font-medium text-white/55">· {t.role}</span>
          )}
        </p>
        <p className="text-[0.875rem] italic leading-[1.55] text-white/75">
          « {t.quote} »
        </p>
      </div>
    </div>
  );
}
