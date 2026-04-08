"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "C'est quoi exactement cette activité ?",
    answer:
      "Tu aides les entreprises (restaurants, coachs, agents immobiliers, artisans…) à trouver plus de clients grâce au marketing digital : réseaux sociaux, publicités, emails, sites internet. Elles te paient plusieurs milliers d'euros par mois pour ces résultats.",
  },
  {
    question: "Je n'ai aucune expérience en marketing, c'est possible ?",
    answer:
      "Absolument. La majorité de nos membres n'avaient aucune compétence en marketing avant de rejoindre Agencilab. Des gendarmes, boulangers, ouvriers, mères de famille… La méthode est conçue pour partir de zéro. Il faut à peine 20 heures pour acquérir les bases opérationnelles.",
  },
  {
    question: "Combien de temps ça prend par jour ?",
    answer:
      "45 minutes par jour suffisent pour avancer. C'est l'équivalent d'un épisode de série. Tu peux te former le soir, le week-end, ou pendant ta pause déjeuner. Pas besoin de quitter ton emploi.",
  },
  {
    question: "Est-ce que je dois quitter mon travail ?",
    answer:
      "Non, et c'est justement l'intérêt. Tu développes cette activité en parallèle de ton emploi actuel. Tu gardes ton salaire, ta sécurité, tout en construisant un deuxième revenu. Tu décideras toi-même si tu veux en faire ton activité principale un jour.",
  },
  {
    question: "Comment trouvez-vous les clients ?",
    answer:
      "On t'apprend des méthodes concrètes et éprouvées pour décrocher tes premiers clients. Pas de démarchage à froid ou de porte-à-porte. Le marché est tellement vaste (4 millions d'entreprises en France) que les opportunités sont partout autour de toi.",
  },
  {
    question: "Quelle est la différence avec une formation en ligne classique ?",
    answer:
      "Agencilab n'est pas une formation passive que tu regardes seul dans ton coin. C'est un accompagnement complet avec un coach dédié, des appels de groupe hebdomadaires, une communauté active de pairs et des séminaires en présentiel. On t'accompagne jusqu'aux résultats.",
  },
  {
    question: "Et si ça ne marche pas ?",
    answer:
      "On a une garantie contractuelle rédigée par un avocat : si tu suis la méthode et que tu n'atteins pas les résultats promis, on continue de t'accompagner jusqu'à ce que tu sois rentable. On est contractuellement engagés.",
  },
  {
    question: "Combien ça coûte ?",
    answer:
      "Le prix est discuté lors de l'appel avec un conseiller. Ce qu'on peut te dire : c'est bien loin du prix d'une école de commerce à 20 000€ l'année, et le retour sur investissement est rapide quand tu génères 1 500 à 3 000€/mois dès les premiers mois.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base font-medium tracking-tight text-white/90 group-hover:text-white transition-colors pr-8 sm:text-lg">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-accent-400/10 border-accent-400/30 rotate-45" : ""
          }`}
        >
          <svg
            className={`w-4 h-4 transition-colors ${
              isOpen ? "text-accent-400" : "text-white/40"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/50 leading-relaxed tracking-tight max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-16 lg:py-24" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-widest text-accent-400/80 font-semibold mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Questions fréquentes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="glass-card rounded-2xl px-5 sm:px-8"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
