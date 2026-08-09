import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bienvenue dans Agencilab",
  robots: { index: false, follow: false },
};

export default function MerciPage() {
  return (
    <>
      <main className="flex min-h-[70vh] items-center justify-center px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-5 inline-block rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm font-semibold text-gold-300">
            Paiement confirmé
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Bienvenue dans <span className="gradient-text">Agencilab</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            Tu viens de faire le pas que la plupart des gens repoussent toute
            leur vie. Tes accès arrivent dans ta boîte mail d&apos;ici quelques
            minutes. Si tu ne vois rien, regarde dans tes spams, et sinon
            réponds simplement à l&apos;email de confirmation.
          </p>
          <p className="mt-6 text-white/40">
            [PROCHAINE ÉTAPE : onboarding, communauté, premier module]
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
