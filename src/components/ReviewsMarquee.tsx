"use client";

const reviews = [
  "L'équipe est vraiment à l'écoute et disponible — Eliott",
  "Un véritable accompagnement pour atteindre tes objectifs — Adrien",
  "Du concret pour aller chercher des clients — Julien",
  "C'est le meilleur endroit pour débuter. Fonce ! — Lucas",
  "On ne te vend pas un rêve, on te donne une méthode — Mathis",
  "Les principes restent applicables partout — Freddy",
  "Beaucoup de soutien, toujours un coach pour débloquer — Kenza",
  "La clarté des vidéos et le suivi hebdomadaire. Tout est là — J.K.",
  "Les coachs sont très présents — Johan",
  "Des pros aux petits oignons — Solen",
  "Les coaching hebdomadaires rendent opérationnel — Sylvain",
  "Premiers clients signés en moins d'un mois — Sce-Agency",
  "Le suivi est vraiment au top. Je recommande ! — Kenny",
  "Un accompagnement archi complet — Damien",
  "Les coachs sont des mines d'information — Nicolas",
  "Formation très complète, modules clairs et précis — Tony",
  "Aujourd'hui ce sont les clients qui viennent à moi — Jennifer",
  "Formation enrichissante et concrète — Pedro",
  "Pas de théorie superflue, tout est orienté action — William",
  "Les coachs sont toujours disponibles et à l'écoute — Dorian",
  "L'incubateur permet de devenir entrepreneur — Florent",
  "Les coachs sont présents et bienveillants — Patrice",
  "Une formation d'une rare qualité — Simon",
  "Sûrement un de mes meilleurs investissements — Thomas",
  "Ça a été une vraie révélation — Nathan",
  "J'ai signé mes premiers clients rapidement — Clément",
  "Meilleur investissement de ma vie ! — Yan",
  "Mon activité génère des revenus solides — Paul",
  "Investissement définitivement rentable ! — Jules",
  "Les mentors sont sincèrement investis — Tatiana",
];

export default function ReviewsMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 py-5">
      <div className="flex animate-[scroll_60s_linear_infinite] gap-8">
        {[...reviews, ...reviews].map((review, i) => (
          <div key={i} className="flex flex-shrink-0 items-center gap-2">
            <svg className="h-3.5 w-3.5 flex-shrink-0 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="whitespace-nowrap text-sm tracking-tight text-white/40">
              &ldquo;{review}&rdquo;
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
