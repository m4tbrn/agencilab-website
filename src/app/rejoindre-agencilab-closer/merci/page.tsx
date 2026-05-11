import Image from "next/image";
import { ArrowRight, CheckCircle } from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "@/components/funnel/FunnelFooter";

export const metadata = {
  title: "Candidature envoyée — Agencilab",
  description: "Ta candidature de closer Agencilab a bien été reçue.",
  robots: { index: false, follow: false },
};

const RESOURCES = [
  {
    label: "Le site Agencilab",
    description:
      "Notre offre complète, notre méthode, nos résultats. Le meilleur point de départ.",
    href: "https://agencilab.com",
    tag: "Site principal",
  },
  {
    label: "Page de capture (Meta)",
    description:
      "La première page que voient nos prospects après avoir cliqué sur une pub Facebook.",
    href: "https://agencilab.com/decouvrir-m",
    tag: "Funnel Meta — étape 1",
  },
  {
    label: "Page VSL (Meta)",
    description:
      "La vidéo qui présente l'activité, suivie du bloc de réservation d'appel.",
    href: "https://agencilab.com/explication-m",
    tag: "Funnel Meta — étape 2",
  },
] as const;

export default function MerciCloserPage() {
  return (
    <>
      <main className="relative flex-1 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-navy-600/15 blur-[100px]" />
        </div>

        <section className="relative z-10 pt-8 pb-12 md:pt-12 md:pb-16">
          <div className="mx-auto max-w-[760px] px-5 sm:px-6">
            {/* Logo Agencilab */}
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/logo-white.png"
                alt="Agencilab"
                width={140}
                height={36}
                className="h-7 w-auto opacity-80"
                priority
              />
            </div>

            {/* Check icon */}
            <div className="mb-6 flex justify-center">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/15 text-gold-400 sm:h-20 sm:w-20"
                style={{ boxShadow: "0 0 40px rgba(255, 122, 0, 0.3)" }}
              >
                <CheckCircle size={40} weight="fill" />
              </div>
            </div>

            {/* Titre */}
            <h1 className="text-center text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
              C&apos;est dans la <span className="gradient-text">boîte.</span>
            </h1>

            {/* Photo Matis */}
            <div className="mt-8 flex flex-col items-center">
              <div className="relative">
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-accent-400/30 shadow-[0_0_40px_rgba(1,95,255,0.25)] sm:h-32 sm:w-32">
                  <Image
                    src="/images/team/mathis-baron.jpg"
                    alt="Matis — Head of Sales Agencilab"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Indicateur en ligne */}
                <div className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-navy-950 bg-[#10b981] sm:h-6 sm:w-6">
                  <span className="block h-1.5 w-1.5 rounded-full bg-white" />
                </div>
              </div>
              <p className="mt-3 text-center text-sm font-bold tracking-tight text-white sm:text-base">
                Matis <span className="text-white/60">-</span> HOS Agencilab
              </p>
            </div>

            {/* Sous-titre */}
            <p className="mx-auto mt-5 max-w-[580px] text-center text-base leading-[1.6] tracking-tight text-white/75 sm:text-lg">
              Si ton profil match,{" "}
              <strong className="text-white">Mathis</strong> notre Head of Sales
              reviendra vers toi{" "}
              <strong className="text-white">sous 72h via WhatsApp</strong>.
            </p>

            {/* Bloc en attendant */}
            <div className="mt-12">
              <p className="mb-2 text-center text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400">
                En attendant
              </p>
              <p className="mx-auto mb-8 max-w-[520px] text-center text-base leading-[1.6] tracking-tight text-white/70">
                Plonge dans notre univers. Ces 3 liens te permettent de
                comprendre exactement ce qu&apos;on fait, comment on le
                vend, et à qui.
              </p>

              <div className="space-y-4">
                {RESOURCES.map((r) => (
                  <a
                    key={r.href}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group glass-card flex items-center gap-4 rounded-2xl p-5 transition-transform duration-200 hover:-translate-y-0.5 md:p-6"
                  >
                    <div className="flex-1">
                      <p className="mb-1 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-accent-400 md:text-xs">
                        {r.tag}
                      </p>
                      <p className="mb-1 text-base font-bold tracking-tight text-white md:text-lg">
                        {r.label}
                      </p>
                      <p className="text-sm leading-[1.5] tracking-tight text-white/60">
                        {r.description}
                      </p>
                    </div>
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/60 transition-all duration-200 group-hover:border-gold-400/40 group-hover:bg-gold-400/10 group-hover:text-gold-400">
                      <ArrowRight size={18} weight="bold" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer note */}
            <p className="mt-10 text-center text-sm leading-[1.6] tracking-tight text-white/50">
              On lit chaque candidature personnellement. Tu n&apos;auras pas
              de réponse automatique.
            </p>
          </div>
        </section>
      </main>

      <FunnelFooter />
    </>
  );
}
