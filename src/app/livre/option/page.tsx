import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dernière chance — Agencilab",
  robots: { index: false, follow: false },
};

const checklist = [
  "4 modules vidéo (8h de contenu)",
  "Plan d'action jour par jour pendant 30 jours",
  "12 templates prêts à l'emploi",
  "Accès groupe Telegram privé 30 jours",
  "Garantie satisfait ou remboursé",
];

export default function OptionPage() {
  return (
    <div className="min-h-screen bg-book-cream text-book-green-dark">
      <div className="mx-auto max-w-2xl px-5 py-10 sm:px-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-book-green/50">
            Attends — j'ai une dernière chose pour toi
          </p>

          <h1 className="mb-6 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
            Je comprends. 297€ d'un coup, c'est un engagement.
          </h1>

          <p className="text-base leading-relaxed tracking-tight text-book-green-dark/70">
            Alors voici ce que je te propose : le même programme, les mêmes vidéos, les mêmes
            templates, le même groupe, la même garantie. Mais tu commences aujourd'hui pour{" "}
            <strong className="text-book-green-dark">seulement 99€</strong>. Puis 99€ dans 30 jours.
            Et 99€ dans 60 jours. Même prix total. Zéro surcoût.
          </p>
        </div>

        {/* Checklist */}
        <div className="mb-8 rounded-2xl border border-book-green/10 bg-white p-6">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-book-green/50">
            Tout est inclus
          </p>
          <div className="space-y-3">
            {checklist.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <svg className="h-5 w-5 flex-shrink-0 text-book-green" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm tracking-tight text-book-green-dark/70">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-xs tracking-tight text-book-green-dark/40">
            Identique à l'offre à 297€ — seul le mode de paiement change
          </p>
        </div>

        {/* Prix */}
        <div className="mb-8 text-center">
          <p className="text-sm tracking-tight text-book-green-dark/50">
            Commence aujourd'hui pour
          </p>
          <p className="mt-1 text-4xl font-bold tracking-tight text-book-green">
            99€
          </p>
          <p className="mt-1 text-sm tracking-tight text-book-green-dark/40">
            puis 99€ dans 30 jours et 99€ dans 60 jours
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="/livre/confirmation"
            className="cta-button group mb-4 inline-flex items-center gap-3 rounded-xl bg-accent-400 px-10 py-5 text-lg font-bold tracking-tight text-white transition-all duration-300 hover:bg-accent-500 hover:shadow-[0_8px_30px_rgba(1,95,255,0.3)]"
          >
            OUI, JE COMMENCE POUR 99€ AUJOURD'HUI
            <svg className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          <p className="mt-4">
            <a
              href="/livre/confirmation"
              className="text-sm tracking-tight text-book-green-dark/40 underline transition-colors hover:text-book-green-dark/60"
            >
              Non merci, le livre me suffit
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
