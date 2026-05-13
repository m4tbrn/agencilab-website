import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IClosedPopup from "@/components/IClosedPopup";
import { getPublishedReussites } from "@/lib/reussites/data";

export const metadata: Metadata = {
  title: "Réussites — Études de cas détaillées des membres Agencilab",
  description:
    "Découvre comment des salariés Français se sont créés un deuxième salaire grâce au Growth Marketing. Chiffres réels, parcours étape par étape, preuves à l'appui.",
  alternates: {
    canonical: "https://agencilab.com/reussites",
  },
  openGraph: {
    title: "Réussites Agencilab — Études de cas détaillées",
    description:
      "Études de cas chiffrées des membres Agencilab : leur parcours, leurs résultats, leurs conseils.",
    url: "https://agencilab.com/reussites",
    type: "website",
  },
};

export default function ReussitesIndex() {
  const reussites = getPublishedReussites();

  return (
    <>
      <Navbar />

      <main className="relative flex-1 overflow-hidden bg-navy-950">
        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-navy-600/15 blur-[100px]" />
        </div>

        <section className="relative z-10 pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="mx-auto max-w-[1100px] px-6">
            {/* Badge */}
            <div className="mb-5 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400">
                Études de cas vérifiées
              </span>
            </div>

            {/* H1 */}
            <h1 className="mx-auto max-w-[860px] text-center text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
              Les <span className="gradient-text">Réussites</span> Agencilab
            </h1>

            {/* Sub */}
            <p className="mx-auto mt-5 max-w-[680px] text-center text-base leading-[1.6] tracking-tight text-white/70 sm:text-lg">
              Pas de témoignage générique. Chaque réussite est{" "}
              <strong className="text-white">chiffrée, datée, vérifiée</strong>{" "}
              : revenu avant/après, timeline mois par mois, preuves à l&apos;appui.
            </p>

            {/* Grid */}
            {reussites.length === 0 ? (
              <div className="mt-16 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-12 text-center">
                <p className="text-white/50">
                  Les premières réussites sont en cours de production.
                  Reviens bientôt.
                </p>
              </div>
            ) : (
              <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {reussites.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/reussites/${r.slug}`}
                    className="group glass-card flex flex-col overflow-hidden rounded-2xl transition-transform duration-200 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-900">
                      <Image
                        src={r.photo}
                        alt={r.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <p className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-gold-400">
                          {r.oldJob} · {r.city} · {r.age} ans
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.1em] text-accent-400">
                        {r.name}
                      </p>
                      <p className="mt-2 flex-1 text-base font-bold leading-[1.3] tracking-tight text-white md:text-lg">
                        {r.outcomeHeadline}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold tracking-tight text-gold-400 transition-transform group-hover:translate-x-1">
                        Lire l&apos;étude de cas
                        <ArrowRight size={16} weight="bold" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* CTA bottom */}
            <div className="mt-20 text-center">
              <p className="mb-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                <span className="gradient-text">Tu veux y arriver toi aussi ?</span>
              </p>
              <p className="mb-6 text-base leading-[1.5] tracking-tight text-white/70">
                Découvre si Agencilab est fait pour toi lors d&apos;un appel
                gratuit de 45 minutes.
              </p>
              <a
                href="#rejoindre"
                className="cta-button glow-gold inline-flex items-center gap-3 rounded-xl bg-gold-400 px-10 py-4 text-base font-bold tracking-tight text-navy-950 shadow-lg shadow-gold-400/30"
              >
                Réserver un appel gratuit
                <ArrowRight size={18} weight="bold" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <IClosedPopup />
    </>
  );
}
