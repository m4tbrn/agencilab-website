import Image from "next/image";
import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "./FunnelFooter";
import { PROGRAMMES, INTEGRATIONS, type ProgrammeKey } from "./programmes";

/**
 * Page post-acompte : la place est réservée, le client doit reprendre contact
 * avec son conseiller pour solder la première échéance.
 */
export default function AcompteContent({
  programme,
}: {
  programme: ProgrammeKey;
}) {
  const p = PROGRAMMES[programme];
  const { whatsappConseiller } = INTEGRATIONS[programme];

  const debloque = [
    {
      titre: "Ton accès à l'espace privé",
      desc: "Tous tes contenus et ressources, regroupés au même endroit.",
    },
    {
      titre: "Ton intégration dans l'écosystème",
      desc: "Tu rejoins la communauté et les personnes accompagnées avec toi.",
    },
    {
      titre: "Le démarrage de ton suivi personnalisé",
      desc: "Ton conseiller cale les premières étapes de ton accompagnement.",
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
            {/* Badge place réservée */}
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#a3e635]/40 bg-[#a3e635]/10 px-4 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#a3e635] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#a3e635]" />
              </span>
              <span className="text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#a3e635] md:text-[0.8125rem]">
                Acompte reçu
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(1.85rem,4.5vw,2.85rem)] font-bold leading-[1.12] tracking-tight text-white">
              Ta place est réservée{" "}
              <span className="gradient-text">{p.dans} !</span>
            </h1>

            <p className="mx-auto mt-5 max-w-[620px] text-[1rem] leading-[1.6] text-white/70 md:text-[1.0625rem]">
              Ton accompagnement démarrera dès que ta première échéance sera
              soldée.
            </p>
          </div>
        </section>

        {/* CE QUI SE DÉBLOQUE */}
        <section className="relative z-10 pt-10 md:pt-12">
          <div className="mx-auto max-w-[820px] px-5 sm:px-6">
            <p className="mb-4 text-center text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400">
              Ce qui se débloque après ton paiement
            </p>
            <div className="space-y-3.5">
              {debloque.map((item, i) => (
                <div
                  key={item.titre}
                  className="glass-card flex items-start gap-4 rounded-2xl p-5 md:p-6"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent-400/30 bg-accent-400/10 text-[0.9375rem] font-bold text-accent-400">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[1.0625rem] font-bold leading-[1.3] tracking-tight text-white md:text-[1.125rem]">
                      {item.titre}
                    </p>
                    <p className="mt-1 text-[0.9375rem] leading-[1.55] text-white/60">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA WHATSAPP CONSEILLER */}
        <section className="relative z-10 py-12 md:py-16">
          <div className="mx-auto max-w-[820px] px-5 sm:px-6">
            <div
              className="relative overflow-hidden rounded-3xl border-2 border-gold-400/35 bg-gradient-to-b from-[#181820] to-[#0d0d11] px-6 py-10 text-center md:px-10 md:py-12"
              style={{
                boxShadow:
                  "0 0 80px rgba(255, 122, 0, 0.18), 0 25px 70px rgba(0, 0, 0, 0.5)",
              }}
            >
              <div
                className="absolute left-1/2 top-0 h-[2px] w-[85%] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
                style={{ boxShadow: "0 0 14px rgba(255, 122, 0, 0.65)" }}
                aria-hidden
              />
              <h2 className="text-[clamp(1.4rem,3.5vw,2rem)] font-bold leading-[1.2] tracking-tight text-white">
                Dernière étape : solder ta première échéance
              </h2>
              <p className="mx-auto mt-4 max-w-[560px] text-[0.9375rem] leading-[1.6] text-white/70 md:text-[1rem]">
                Reprends contact avec ton conseiller sur WhatsApp pour verser la
                suite et{" "}
                <strong className="text-white">
                  démarrer officiellement ton accompagnement {p.dans}
                </strong>
                .
              </p>

              <a
                href={whatsappConseiller}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button glow-gold mt-8 inline-flex items-center gap-3 rounded-xl bg-gold-400 px-9 py-4 text-[1rem] font-bold tracking-tight text-navy-950 shadow-lg shadow-gold-400/30"
              >
                <WhatsappLogo size={20} weight="fill" />
                Reprendre contact avec mon conseiller
                <ArrowRight size={18} weight="bold" />
              </a>

              <p className="mt-5 text-[0.8125rem] text-white/45">
                Ton conseiller te répond directement, du lundi au vendredi.
              </p>
            </div>

            <p className="mt-8 text-center text-[0.9375rem] text-white/55">
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
