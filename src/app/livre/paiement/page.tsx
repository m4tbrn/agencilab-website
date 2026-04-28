import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Commander le livre — Agencilab",
  robots: { index: false, follow: false },
};

export default function PaiementPage() {
  return (
    <div className="min-h-screen bg-book-cream text-book-green-dark">
      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-6">
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

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Gauche — Formulaire (Thrivecart embed) */}
          <div>
            <h1 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">
              Finalise ta commande
            </h1>

            {/* Placeholder Thrivecart */}
            <div className="rounded-2xl border-2 border-book-green/10 bg-white p-8">
              <p className="mb-4 text-center text-sm text-book-green-dark/40">
                Le formulaire de paiement Thrivecart sera intégré ici.
              </p>
              <div className="h-[400px] rounded-xl border-2 border-dashed border-book-green/15 bg-book-cream/50 flex items-center justify-center">
                <span className="text-sm text-book-green-dark/30">Embed Thrivecart</span>
              </div>
            </div>

            {/* Bump */}
            <div className="mt-6 rounded-2xl border-2 border-dashed border-book-gold bg-book-gold/5 p-6">
              <label className="flex cursor-pointer items-start gap-4">
                <input
                  type="checkbox"
                  className="mt-1 h-5 w-5 flex-shrink-0 rounded border-book-gold accent-book-gold"
                />
                <div>
                  <p className="text-base font-bold tracking-tight text-book-green-dark">
                    OUI ! J'ajoute Les Coulisses du Million pour seulement 37€
                  </p>
                  <p className="mt-2 text-sm leading-relaxed tracking-tight text-book-green-dark/60">
                    Le livre te donne le plan. Mais tu veux voir comment ça s'est passé en vrai ?
                    Dans Les Coulisses du Million, je te montre mes vrais écrans, mes vrais chiffres,
                    mes vraies erreurs. 5 vidéos exclusives où tu me regardes par-dessus l'épaule :
                    mon premier client, ma montée à 10k/mois, le lancement à 400k€, mes pires
                    plantages, et ma routine quotidienne. Plus le tableur exact que j'utilise chaque
                    semaine pour piloter mes chiffres.
                  </p>
                  <p className="mt-2 text-xs font-semibold tracking-tight text-book-gold">
                    Offre réservée à cette page
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Droite — Récap */}
          <div>
            <div className="sticky top-8 rounded-2xl border border-book-green/10 bg-white p-6">
              <h2 className="mb-4 text-lg font-bold tracking-tight">Ta commande</h2>

              <div className="mb-4 flex items-center gap-4">
                <Image
                  src="/images/livre/cover.jpg"
                  alt="Deviens le premier millionnaire de ta famille"
                  width={80}
                  height={112}
                  className="rounded-lg"
                />
                <div>
                  <p className="text-sm font-bold tracking-tight">Deviens le premier millionnaire de ta famille</p>
                  <p className="text-xs text-book-green-dark/40">PDF + accès plateforme de lecture</p>
                </div>
              </div>

              <div className="border-t border-book-green/5 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-book-green-dark/60">Livre</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-book-green-dark/30 line-through">29€</span>
                    <span className="text-sm font-bold">14,90€</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 border-t border-book-green/5 pt-4">
                <div className="flex items-center justify-between">
                  <span className="font-bold">Total</span>
                  <span className="text-xl font-bold text-book-green">14,90€</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2 text-xs text-book-green-dark/40">
                {["Paiement 100% sécurisé", "Accès immédiat", "Satisfait ou remboursé 30 jours"].map((t) => (
                  <div key={t} className="flex items-center gap-2">
                    <svg className="h-3.5 w-3.5 text-book-green" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
