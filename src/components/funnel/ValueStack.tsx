import { CheckCircle, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import OtoButton from "./OtoButton";

/**
 * Value stacking — récapitulatif de l'offre avant le checkout.
 * Liste chaque élément avec sa valeur, additionne, puis oppose la valeur
 * totale au prix réel.
 *
 * TODO : renseigner les vraies valeurs (`valeur`), VALEUR_TOTALE et PRIX.
 */

type StackItem = {
  titre: string;
  desc: string;
  /** Valeur affichée, ex: "497 €". Mettre "PLACEHOLDER" tant qu'inconnue. */
  valeur: string;
};

const STACK: StackItem[] = [
  {
    titre: "L'accompagnement Agencilab complet",
    desc: "Toute la méthode pour lancer ton activité à +2 997€ et la faire grandir, pas seulement le premier mois.",
    valeur: "1 797€",
  },
  {
    titre: "Les coachings de groupe",
    desc: "Tu poses tes questions à des Growth Marketer en direct lors des sessions collectives, chaque semaine.",
    valeur: "697€/mois",
  },
  {
    titre: "L'accès à la communauté de +900 membres",
    desc: "Des gens comme toi qui avancent ensemble et te tirent vers le haut.",
    valeur: "367€",
  },
  {
    titre: "Alic.ia, l'IA d'Agencilab",
    desc: "L'IA qui t'aide à livrer chaque service : sites, publicités, textes de vente. C'est le coût d'un humain à ce poste.",
    valeur: "2 000€/mois",
  },
  {
    titre: "Le tarif membre sur les séminaires en présentiel",
    desc: "Tu accèdes aux séminaires au prix préférentiel réservé aux membres, pas au tarif public.",
    valeur: "Offert",
  },
];

// Valeur totale = somme des valeurs ci-dessus (1 797 + 697 + 367 + 2 000 + 0).
const VALEUR_TOTALE = "4 861€";
// Abonnement mensuel, sans engagement.
const PRIX = "179 €/mois";

function val(v: string) {
  return v.includes("PLACEHOLDER") ? "[valeur]" : v;
}

export default function ValueStack() {
  return (
    <section className="mt-14 md:mt-20">
      <div className="mx-auto mb-8 max-w-[760px] text-center md:mb-10">
        <span className="mb-3 inline-block text-[0.75rem] font-bold uppercase tracking-[0.16em] text-accent-400 md:text-[0.8125rem]">
          Récapitulatif
        </span>
        <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-white">
          Tout ce que tu reçois{" "}
          <span className="gradient-text">en rejoignant aujourd&apos;hui</span>
        </h2>
      </div>

      <div className="mx-auto max-w-[680px]">
        {/* Liste des éléments */}
        <div className="space-y-2.5">
          {STACK.map((item) => (
            <div
              key={item.titre}
              className="flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm md:p-5"
            >
              <CheckCircle
                size={22}
                weight="fill"
                className="mt-0.5 shrink-0 text-[#a3e635]"
              />
              <div className="min-w-0 flex-1">
                <p className="text-[0.9375rem] font-bold leading-[1.3] tracking-tight text-white md:text-[1rem]">
                  {item.titre}
                </p>
                <p className="mt-0.5 text-[0.8125rem] leading-[1.5] text-white/55 md:text-[0.875rem]">
                  {item.desc}
                </p>
              </div>
              <span className="shrink-0 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[0.75rem] font-bold text-white/70">
                {val(item.valeur)}
              </span>
            </div>
          ))}
        </div>

        {/* Valeur totale */}
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
          <span className="text-[0.9375rem] font-semibold text-white/70 md:text-[1rem]">
            Valeur totale
          </span>
          <span className="text-[1.25rem] font-bold text-white/50 line-through decoration-[#ef4444]/70 decoration-2 md:text-[1.5rem]">
            {val(VALEUR_TOTALE)}
          </span>
        </div>

        {/* Prix réel */}
        <div
          className="mt-3 flex flex-col items-center gap-1 rounded-2xl border-2 border-gold-400/40 bg-gold-400/[0.07] px-5 py-6 text-center"
          style={{ boxShadow: "0 0 40px rgba(255, 122, 0, 0.14)" }}
        >
          <span className="text-[0.75rem] font-bold uppercase tracking-[0.14em] text-gold-400">
            Ton prix aujourd&apos;hui
          </span>
          <span className="text-[clamp(2rem,6vw,3rem)] font-extrabold leading-none tracking-tight text-white">
            {val(PRIX)}
          </span>
          <span className="text-[0.8125rem] text-white/55">
            Sans engagement, tu arrêtes quand tu veux
          </span>
          <span className="mt-1 text-[0.8125rem] text-white/55">
            Accès immédiat après ton inscription
          </span>
          <OtoButton className="cta-button glow-gold mt-5 inline-flex items-center gap-3 rounded-xl bg-gold-400 px-9 py-4 text-[1rem] font-bold tracking-tight text-navy-950 shadow-lg shadow-gold-400/30">
            Je rejoins Cash Cow Express
            <ArrowRight size={18} weight="bold" />
          </OtoButton>
        </div>
      </div>
    </section>
  );
}
