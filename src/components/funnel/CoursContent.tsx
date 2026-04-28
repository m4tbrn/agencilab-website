import Image from "next/image";
import { ArrowRight, CheckCircle, X } from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "./FunnelFooter";
import TallyPopup from "./TallyPopup";
import ExitIntentPopup from "./ExitIntentPopup";
import FunnelSocialNotif from "./FunnelSocialNotif";

export default function CoursContent({
  tallySrc,
  tallyTitle,
}: {
  tallySrc: string;
  tallyTitle: string;
}) {
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

        <section className="relative z-10 py-10 md:py-16">
          <div className="mx-auto max-w-[920px] px-6 text-center">
            {/* Logo Agencilab */}
            <div className="mb-6 flex justify-center">
              <Image
                src="/images/logo-white.png"
                alt="Agencilab"
                width={140}
                height={36}
                className="h-7 w-auto opacity-80"
                priority
              />
            </div>

            {/* Badge accessible débutants */}
            <div
              className="mx-auto mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-accent-400/30 bg-accent-400/10 px-5 py-2 text-[0.8125rem] font-bold uppercase tracking-[0.08em] text-accent-400"
              style={{
                boxShadow: "0 0 30px rgba(1, 95, 255, 0.15)",
              }}
            >
              <CheckCircle size={14} weight="fill" />
              Accessible même aux débutants
            </div>

            {/* Pre-headline */}
            <p className="mb-3 text-[0.875rem] font-semibold tracking-tight text-white/60 md:text-[0.9375rem]">
              Documentaire exclusif de Louis Esquier{" "}
              <span className="font-bold text-white">+270 000 abonnés</span>{" "}
              sur YouTube
            </p>

            {/* Headline */}
            <h1 className="mb-4 text-[clamp(2rem,5vw,2.75rem)] font-bold leading-[1.15] tracking-tight text-white">
              Comment gagner{" "}
              <span className="gradient-text">+3 500 €/mois</span>{" "}
              à côté de ton travail grâce à une{" "}
              <span className="gradient-text">activité (très) rentable méconnue et l&apos;IA</span>.
            </h1>

            {/* Anti-bullets */}
            <ul className="mb-6 flex flex-col items-center gap-x-4 gap-y-2 text-[0.9375rem] font-medium text-white/70 sm:flex-row sm:flex-wrap sm:justify-center">
              {[
                "Sans école à 50 000 €",
                "Sans quitter ton emploi",
                "Sans diplôme",
              ].map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <X size={16} weight="bold" className="shrink-0 text-[#ef4444]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Photo cliquable */}
            <a
              href="#capture"
              aria-label="Accéder au documentaire"
              className="relative mx-auto mb-5 mt-3 block aspect-[16/9] max-w-[760px] cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60 transition-transform hover:scale-[1.01]"
            >
              <Image
                src="/images/img-vsl-louis.webp"
                alt="Louis Esquier — Documentaire Agencilab"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy-950/30 to-navy-950/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-400/95 shadow-2xl transition-transform hover:scale-110">
                  <svg className="ml-1 h-8 w-8 text-navy-950" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>

            {/* CTA */}
            <div className="flex justify-center">
              <a
                href="#capture"
                className="cta-button glow-gold inline-flex items-center gap-3 rounded-xl bg-gold-400 px-10 py-4 text-base font-bold tracking-tight text-navy-950 shadow-lg shadow-gold-400/30"
              >
                Accéder au Documentaire (OFFERT)
                <ArrowRight size={18} weight="bold" />
              </a>
            </div>

            <p className="mt-3 text-[0.8125rem] text-white/50">
              <strong className="text-white">+900&nbsp;salariés</strong> l&apos;ont déjà suivi&nbsp;🇫🇷
            </p>

            {/* Bullets — ce que tu vas apprendre */}
            <div className="glass-card mx-auto mt-12 max-w-[560px] rounded-2xl p-6 text-left md:p-8">
              <p className="mb-5 text-center text-[1.0625rem] font-bold leading-[1.25] text-white">
                Ce que tu vas apprendre dans cette vidéo :
              </p>
              <ul className="flex flex-col items-start gap-3">
                {[
                  "Quelle est cette activité méconnue qui se vend +3 000€/mois aux entreprises",
                  "Pourquoi tu n'as pas besoin d'école de commerce ni de diplôme pour la pratiquer",
                  "Comment des salariés sans aucune expérience génèrent un deuxième salaire en quelques mois",
                  "Comment te lancer en parallèle de ton emploi avec seulement 45 min/jour",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[0.9375rem] leading-[1.45] text-white/80"
                  >
                    <CheckCircle
                      size={20}
                      weight="fill"
                      className="mt-0.5 shrink-0 text-gold-400"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <FunnelFooter />
      <TallyPopup tallySrc={tallySrc} title={tallyTitle} />
      <ExitIntentPopup />
      <FunnelSocialNotif />
    </>
  );
}
