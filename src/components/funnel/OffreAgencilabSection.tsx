import Image from "next/image";
import {
  GraduationCap,
  Handshake,
  Package,
  ChartLineUp,
  PhoneCall,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import OffreInclus from "./OffreInclus";

/**
 * Section de vente d'Agencilab pour la page offre (post-VSL).
 * Vend l'accompagnement (méthode + ce qui est inclus) puis installe la
 * confiance avec le fondateur. Thème sombre, cohérent avec le reveal.
 */

const ETAPES = [
  {
    icon: GraduationCap,
    periode: "Semaines 1-2",
    titre: "Tu apprends ta première compétence",
    desc: "La création de tunnels de vente et de sites internet, accélérée par l'IA. En 2 semaines, tu es déjà capable de livrer un travail pro.",
  },
  {
    icon: Handshake,
    periode: "Semaines 3-4",
    titre: "Tu signes ton premier client à 1 000-2 000€",
    desc: "On te donne les méthodes les plus efficaces pour décrocher ton premier client dès ton premier mois, en parallèle de ton emploi.",
    green: true,
  },
  {
    icon: Package,
    periode: "Mois 2",
    titre: "Tu livres et tu fais ton bilan",
    desc: "Tu réalises ta première prestation, ton client voit des résultats, et tu fais le point avec un coach d'Agencilab pour passer au niveau supérieur.",
  },
  {
    icon: ChartLineUp,
    periode: "Mois 3",
    titre: "Tu construis ton revenu récurrent",
    desc: "Tu signes de nouveaux clients et tu fidélises les premiers. Ton activité devient un vrai deuxième salaire qui revient chaque mois.",
  },
  {
    icon: PhoneCall,
    periode: "Fin du mois 3",
    titre: "Ton appel avec un conseiller, offert",
    desc: "Tu fais le bilan complet de ton parcours avec un conseiller Agencilab. Vous définissez ensemble la meilleure stratégie pour passer à la vitesse supérieure.",
    offert: true,
  },
];

const CREDENTIALS = [
  "270 000+ abonnés YouTube",
  "6 ans d'expérience en marketing digital",
  "+1 018 salariés accompagnés",
  "Basé à Lyon, France",
];

export default function OffreAgencilabSection({
  programName = "Cash Cow Express",
}: {
  /** Nom du programme affiché dans le titre de section. */
  programName?: string;
} = {}) {
  return (
    <section className="mt-14 md:mt-20">
      {/* ===== Ce que tu obtiens ===== */}
      <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-14">
        <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-white">
          Ce que tu obtiens en rejoignant{" "}
          <span className="gradient-text">{programName}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-[620px] text-[0.9375rem] leading-[1.6] text-white/65 md:text-[1rem]">
          Un accompagnement complet, de tes premières compétences jusqu&apos;à
          tes premiers clients. Pas des vidéos à regarder seul dans ton coin.
        </p>
      </div>

      {/* Ton parcours, étape par étape — timeline verticale */}
      <div className="mx-auto mb-12 mt-10 max-w-[760px] md:mb-20 md:mt-14">
        {ETAPES.map((etape, i) => {
          const Icon = etape.icon;
          const isLast = i === ETAPES.length - 1;
          const green = "green" in etape && etape.green;
          const offert = "offert" in etape && etape.offert;
          return (
            <div key={etape.titre} className="relative flex gap-4 pb-5 last:pb-0 md:gap-6">
              {/* Colonne timeline : icône + ligne de liaison */}
              <div className="flex flex-col items-center">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 ${
                    green
                      ? "border-[#a3e635]/50 bg-[#a3e635]/10 text-[#a3e635]"
                      : "border-gold-400/40 bg-gold-400/10 text-gold-400"
                  }`}
                >
                  <Icon size={22} weight="duotone" />
                </span>
                {!isLast && (
                  <span className="mt-2 w-[2px] flex-1 rounded-full bg-gradient-to-b from-gold-400/40 to-white/5" />
                )}
              </div>
              {/* Contenu */}
              <div
                className={`flex-1 rounded-2xl border p-5 backdrop-blur-sm md:p-6 ${
                  green
                    ? "border-[#a3e635]/35 bg-[#a3e635]/[0.07]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <div className="mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-gold-400 md:text-[0.75rem]">
                    Étape {i + 1}
                  </span>
                  <span className="text-white/25">·</span>
                  <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-accent-400 md:text-[0.75rem]">
                    {etape.periode}
                  </span>
                  {offert && (
                    <span className="rounded-full bg-[#a3e635]/15 px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-[0.1em] text-[#a3e635]">
                      Offert
                    </span>
                  )}
                </div>
                <h3 className="mb-2 text-[1.125rem] font-bold leading-[1.25] tracking-tight text-white md:text-[1.25rem]">
                  {etape.titre}
                </h3>
                <p className="text-[0.875rem] leading-[1.6] text-white/65 md:text-[0.9375rem]">
                  {etape.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ce qui est inclus — lignes alternées premium */}
      <OffreInclus />

      {/* ===== Le fondateur — trust ===== */}
      <div className="mx-auto max-w-[1000px]">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
          <div className="grid items-stretch gap-0 md:grid-cols-[0.85fr_1.15fr]">
            {/* Photo Louis */}
            <div className="relative min-h-[280px] md:min-h-full">
              <Image
                src="/images/louis-conf.jpg"
                alt="Louis Esquier, fondateur d'Agencilab"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d11] via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Bio */}
            <div className="p-6 md:p-9">
              <span className="mb-3 inline-block text-[0.75rem] font-bold uppercase tracking-[0.16em] text-accent-400">
                Le fondateur
              </span>
              <h3 className="mb-4 text-[1.5rem] font-bold leading-[1.15] tracking-tight text-white md:text-[1.875rem]">
                Louis Esquier
              </h3>
              <div className="space-y-3 text-[0.875rem] leading-[1.6] text-white/65 md:text-[0.9375rem]">
                <p>
                  En 2018, Louis avait 19 ans. Vendeur au Slip Français à Lyon,
                  payé 1 400€ par mois, 8 heures debout par jour.
                </p>
                <p>
                  Aujourd&apos;hui, il est marketeur depuis plus de 6 ans,
                  cumule plus de 270 000 abonnés sur YouTube et a accompagné
                  plus de 1 018 personnes à créer leur deuxième salaire.
                </p>
                <p className="font-medium text-white">
                  Il a créé Agencilab pour une raison simple : permettre aux
                  Français d&apos;être mieux payés et plus libres.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {CREDENTIALS.map((cred) => (
                  <span
                    key={cred}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.75rem] font-medium tracking-tight text-white/70"
                  >
                    <CheckCircle
                      size={13}
                      weight="fill"
                      className="text-[#a3e635]"
                    />
                    {cred}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
