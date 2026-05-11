import Image from "next/image";
import { ArrowRight, CurrencyEur, Fire, Globe, GraduationCap } from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "@/components/funnel/FunnelFooter";
import TallyEmbed from "@/components/funnel/TallyEmbed";

export const metadata = {
  title: "Closer chez Agencilab — Rejoins l'équipe",
  description:
    "On cherche un closer expérimenté pour rejoindre l'équipe Agencilab. Leads chauds, commission élevée, 100% remote.",
  robots: { index: false, follow: false },
};

const BENEFITS = [
  {
    icon: CurrencyEur,
    title: "Commission élevée",
    text: "Tu es payé 100% à la performance, sans plafond, sur des offres high-ticket avec des commissions plus avantageuses que ce que le marché te propose en temps normal.",
  },
  {
    icon: Fire,
    title: "Leads qualifiés",
    text: "Tu as zéro prospection à faire. Tu reçois uniquement des appels qualifiés par notre VSL de 35 minutes ou par nos setters.",
  },
  {
    icon: Globe,
    title: "100% remote",
    text: "Tu travailles d'où tu veux, quand tu veux. La seule règle : être là pour tes appels.",
  },
  {
    icon: GraduationCap,
    title: "Onboarding complet",
    text: "On te transmet notre script, notre méthode, notre offre. Tu démarres avec toutes les clés en main.",
  },
] as const;

export default function RejoindreCloserPage() {
  return (
    <>
      <main className="relative flex-1 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-navy-600/15 blur-[100px]" />
        </div>

        {/* Grid lines */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
          <div className="absolute left-[50%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
          <div className="absolute left-[80%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
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

            {/* Badge */}
            <div className="mb-5 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
                </span>
                Recrutement ouvert
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-center text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl">
              Deviens{" "}
              <span className="gradient-text">closer chez Agencilab</span>
            </h1>

            {/* Sub-headline */}
            <p className="mx-auto mt-5 max-w-[600px] text-center text-base leading-[1.6] tracking-tight text-white/70 sm:text-lg">
              On a aidé{" "}
              <strong className="text-white">+1 018 Français</strong> à se créer
              une activité très rentable. On cherche un closer pour aller
              encore plus loin et changer la vie de{" "}
              <strong className="text-white">3 000 personnes</strong>.
            </p>

            {/* Louis card */}
            <div className="mx-auto mt-7 flex max-w-[420px] items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 backdrop-blur-sm">
              <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border-2 border-accent-400/30">
                <Image
                  src="/images/team/louis-esquier.jpg"
                  alt="Louis Esquier"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold tracking-tight text-white">
                  Louis Esquier
                </p>
                <p className="text-[0.75rem] leading-[1.4] tracking-tight text-white/60">
                  Fondateur Agencilab, +270k abonnés YouTube
                </p>
              </div>
            </div>

            {/* Benefits grid */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {BENEFITS.map((b) => (
                <div
                  key={b.title}
                  className="glass-card rounded-2xl p-5 md:p-6"
                >
                  <div
                    className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/10 text-gold-400"
                    style={{ boxShadow: "0 0 20px rgba(255, 122, 0, 0.15)" }}
                  >
                    <b.icon size={22} weight="bold" />
                  </div>
                  <p className="mb-1.5 text-base font-bold tracking-tight text-white">
                    {b.title}
                  </p>
                  <p className="text-sm leading-[1.5] tracking-tight text-white/65">
                    {b.text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 text-center">
              <p className="mb-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
                <span className="gradient-text">Postule en 2 minutes</span>
              </p>
              <p className="mb-6 text-base leading-[1.5] tracking-tight text-white/70">
                Si ton profil colle, on te recontacte sous 48h pour un premier
                échange.
              </p>

              <a
                href="#formulaire"
                className="cta-button glow-gold inline-flex items-center gap-3 rounded-xl bg-gold-400 px-10 py-4 text-base font-bold tracking-tight text-navy-950 shadow-lg shadow-gold-400/30"
              >
                Remplir le formulaire
                <ArrowRight size={18} weight="bold" />
              </a>
            </div>

            {/* Formulaire embed placeholder */}
            <div
              id="formulaire"
              className="mt-12 scroll-mt-8 glass-card rounded-2xl p-6 md:p-8"
            >
              <p className="mb-3 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400">
                Étape unique — Candidature
              </p>
              <p className="mb-6 text-base leading-[1.6] tracking-tight text-white/70">
                Remplis le formulaire ci-dessous. Toutes les questions sont
                obligatoires pour qu&apos;on puisse étudier sérieusement ta
                candidature.
              </p>

              <TallyEmbed
                tallySrc="https://tally.so/embed/81ApDO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                title="Formulaire de recrutement - Closer"
                initialHeight={400}
              />
            </div>
          </div>
        </section>
      </main>

      <FunnelFooter />
    </>
  );
}
