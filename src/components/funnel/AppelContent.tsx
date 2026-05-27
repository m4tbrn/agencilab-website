import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "./FunnelFooter";
import CalEmbed from "./CalEmbed";
import { PROGRAMMES, INTEGRATIONS, type ProgrammeKey } from "./programmes";

/**
 * Page post-onboarding : le formulaire est rempli, le client réserve son
 * appel d'intégration avec l'équipe. Calendrier Cal.com inline (namespacé
 * par programme).
 */
export default function AppelContent({
  programme,
}: {
  programme: ProgrammeKey;
}) {
  const p = PROGRAMMES[programme];
  const { appelCalLink, appelCalNamespace } = INTEGRATIONS[programme];

  const notes = [
    {
      label: "PS",
      texte:
        "Tes accès arrivent par email. Pense à vérifier tes spams, et écris-nous si tu ne les vois pas.",
    },
  ];

  return (
    <>
      <main className="relative flex-1 overflow-hidden">
        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-navy-600/15 blur-[100px]" />
        </div>

        {/* HEADER LOGO */}
        <header className="relative z-10 flex justify-center pt-8 md:pt-10">
          <Image
            src="/images/logo-white.png"
            alt="Agencilab"
            width={140}
            height={36}
            className="h-7 w-auto opacity-80"
            priority
          />
        </header>

        {/* HERO */}
        <section className="relative z-10 pt-8 md:pt-10">
          <div className="mx-auto max-w-[820px] px-5 text-center sm:px-6">
            {/* Check icon */}
            <div className="mb-6 flex justify-center">
              <div
                className="flex h-16 w-16 items-center justify-center rounded-full border border-gold-400/40 bg-gold-400/15 text-gold-400 sm:h-20 sm:w-20"
                style={{ boxShadow: "0 0 40px rgba(255, 122, 0, 0.3)" }}
              >
                <CheckCircle size={40} weight="fill" />
              </div>
            </div>

            <h1 className="text-[clamp(1.85rem,4.5vw,2.85rem)] font-bold leading-[1.12] tracking-tight text-white">
              Merci pour toutes ces{" "}
              <span className="gradient-text">informations !</span>
            </h1>

            <p className="mx-auto mt-5 max-w-[620px] text-[1rem] leading-[1.6] text-white/70 md:text-[1.0625rem]">
              Elles vont nous permettre de t&apos;accompagner au mieux dans ton
              parcours {p.dans}.
            </p>
          </div>
        </section>

        {/* RÉSERVATION APPEL D'INTÉGRATION */}
        <section className="relative z-10 pt-10 md:pt-12">
          <div className="mx-auto max-w-[820px] px-5 text-center sm:px-6">
            <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400">
              Dernière étape
            </p>
            <h2 className="mb-2 text-[1.5rem] font-bold leading-[1.2] text-white md:text-[1.875rem]">
              Réserve ton appel d&apos;intégration
            </h2>
            <p className="mb-8 text-[0.9375rem] leading-[1.6] text-white/60 md:text-[1rem]">
              Cet appel avec ton équipe sert à faire connaissance, valider tes
              accès et te lancer dans les meilleures conditions. Choisis le
              créneau qui te convient.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[1280px] px-3 sm:px-6">
            <div className="glass-card overflow-hidden rounded-2xl p-2 md:p-3">
              <CalEmbed
                calLink={appelCalLink}
                namespace={appelCalNamespace}
                height="calc(100vh - 80px)"
              />
              <span className="sr-only">
                Appel d&apos;intégration {p.nom} Agencilab
              </span>
            </div>
          </div>
        </section>

        {/* NOTES PS / PPS */}
        <section className="relative z-10 py-12 md:py-16">
          <div className="mx-auto max-w-[820px] space-y-3.5 px-5 sm:px-6">
            {notes.map((note) => (
              <div
                key={note.label}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
              >
                <span className="shrink-0 text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-accent-400">
                  {note.label}
                </span>
                <p className="text-[0.9375rem] leading-[1.6] text-white/70 md:text-[1rem]">
                  {note.texte}
                </p>
              </div>
            ))}

            <p className="pt-4 text-center text-[0.9375rem] text-white/55">
              Une question ?{" "}
              <a
                href="mailto:contact@agencilab.com"
                className="font-semibold text-white underline underline-offset-2 transition-colors hover:text-gold-400"
              >
                contact@agencilab.com
              </a>
            </p>
          </div>
        </section>
      </main>

      <FunnelFooter />
    </>
  );
}
