import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bienvenue — Agencilab",
  robots: { index: false, follow: false },
};

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-book-cream text-book-green-dark">
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-6">
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <Image
            src="/images/logo-black.png"
            alt="Agencilab"
            width={140}
            height={36}
            className="h-6 w-auto opacity-50"
          />
        </div>

        {/* Header */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-book-green/10">
            <svg className="h-8 w-8 text-book-green" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>

          <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
            C'est fait. Tu viens de prendre une décision que 99% des gens ne prendront jamais.
          </h1>

          <p className="text-base leading-relaxed tracking-tight text-book-green-dark/60">
            Vérifie ta boite mail. Tu vas recevoir ton accès dans les prochaines minutes.
            Si tu ne le vois pas, regarde tes spams.
          </p>
        </div>

        {/* Placeholder vidéo Louis */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-book-green/10 bg-white">
          <div className="flex h-[280px] items-center justify-center bg-book-green-dark/5">
            <span className="text-sm text-book-green-dark/30">Vidéo de bienvenue de Louis — Placeholder</span>
          </div>
        </div>

        {/* Segmentation */}
        <div className="mb-6 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-book-green/50">
            La suite de ton parcours
          </p>
          <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
            Selon où tu en es, on a deux chemins à te proposer :
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* Agencilab */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-book-green/15 bg-white p-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/images/logo-black.png"
                  alt="Agencilab"
                  width={100}
                  height={25}
                  className="h-5 w-auto"
                />
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-tight">
                Tu veux lancer ton business en ligne ?
              </h3>
              <p className="mb-6 text-sm leading-relaxed tracking-tight text-book-green-dark/60">
                L'Incubateur t'accompagne de A à Z. +1 018 entrepreneurs accompagnés.
                On t'aide à trouver tes premiers clients et à atteindre 3 000€/mois.
              </p>
            </div>
            <a
              href="https://agencilab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-book-green px-6 py-3.5 text-sm font-bold tracking-tight text-white transition-all duration-300 hover:bg-book-green-light"
            >
              Réserver un appel découverte gratuit
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Balistique */}
          <div className="flex flex-col justify-between rounded-2xl border-2 border-book-gold/20 bg-white p-6">
            <div>
              <div className="mb-4">
                <span className="text-lg font-bold tracking-tight text-book-green-dark">Balistique</span>
              </div>
              <h3 className="mb-2 text-lg font-bold tracking-tight">
                Tu as déjà un business et tu veux scaler ?
              </h3>
              <p className="mb-6 text-sm leading-relaxed tracking-tight text-book-green-dark/60">
                Balistique gère ton marketing pour toi. On parle résultats.
                Pubs, tunnels, contenu, scaling. On s'occupe de tout.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-book-gold px-6 py-3.5 text-sm font-bold tracking-tight text-book-green-dark transition-all duration-300 hover:bg-book-gold-light"
            >
              Prendre rendez-vous
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Communauté */}
        <div className="mt-10 rounded-2xl border border-book-green/8 bg-white p-6 text-center">
          <p className="mb-2 text-sm font-bold tracking-tight">En attendant, reste connecté :</p>
          <p className="text-sm tracking-tight text-book-green-dark/50">
            Rejoins la communauté gratuite, suis Louis sur YouTube et Instagram pour du contenu
            exclusif chaque semaine.
          </p>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-xs text-book-green-dark/20">
            &copy; {new Date().getFullYear()} Agencilab. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
