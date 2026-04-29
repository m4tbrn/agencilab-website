import { headers } from "next/headers";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "@/components/funnel/FunnelFooter";

export const metadata = {
  title: "File d'attente — Agencilab",
  description:
    "Les places sont actuellement complètes. Tu es sur la file d'attente prioritaire Agencilab.",
  robots: { index: false, follow: false },
};

const WA_LINK = "https://wa.me/message/KNWJCZPNZ467D1";

function getQueuePosition(ip: string): number {
  let hash = 0;
  for (let i = 0; i < ip.length; i++) {
    hash = (hash * 31 + ip.charCodeAt(i)) | 0;
  }
  return 17 + (Math.abs(hash) % 22); // 17 à 38
}

export default async function FileAttentePage() {
  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    "unknown";
  const position = getQueuePosition(ip);

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

            {/* Statut */}
            <h1 className="text-center text-2xl font-bold leading-[1.15] tracking-tight text-white sm:text-3xl md:text-4xl">
              Toutes les places sont prises{" "}
              <span className="gradient-text">!</span>
            </h1>

            {/* Position dans la file */}
            <div className="mt-5 mb-3 flex justify-center">
              <div
                className="inline-flex items-center gap-2 rounded-2xl border border-accent-400/30 bg-accent-400/10 px-5 py-3 text-lg font-extrabold tracking-tight text-white sm:px-6 sm:py-3.5 sm:text-2xl backdrop-blur-sm"
                style={{ boxShadow: "0 0 30px rgba(1, 95, 255, 0.2)" }}
              >
                Tu es{" "}
                <span className="text-accent-400">
                  {position}
                  <sup className="text-sm font-bold sm:text-base">ème</sup>
                </span>{" "}
                dans la file d&apos;attente
              </div>
            </div>

            <p className="mb-8 text-center text-base font-semibold tracking-tight text-white/70 sm:text-lg">
              Mais tu peux encore décrocher ton rendez-vous, lis les prochaines
              étapes :
            </p>

            {/* Barre de chargement — places */}
            <div className="glass-card mb-10 rounded-2xl p-5 md:p-6">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-white/60 md:text-xs">
                  Rendez-vous en cours
                </span>
                <span className="font-mono text-sm font-bold tracking-tight text-gold-400">
                  30/30
                </span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-white/5">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-r from-gold-400 to-gold-300 animate-[barGlow_2s_ease-in-out_infinite]">
                  <span className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                </div>
              </div>
              <p className="mt-2 text-center text-xs font-semibold tracking-tight text-white/60">
                <span className="text-[#ef4444]">●</span>{" "}
                <span className="text-white">0 place disponible</span>
              </p>
            </div>

            {/* Étape 1 — Pré-sélection */}
            <div className="glass-card mb-6 rounded-2xl p-6 md:p-8">
              <p className="mb-3 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400 md:text-[0.8125rem]">
                Étape 1 — Pré-sélection
              </p>

              <p className="mb-6 text-base leading-[1.6] tracking-tight text-white/70">
                L&apos;accompagnement Agencilab accueille un nombre limité de
                membres pour garantir un suivi personnalisé. Nous sommes
                complets pour le moment. Dès qu&apos;une place se libère, tu
                vas être rappelé par un de nos conseillers pour trouver une
                disponibilité.
              </p>

              <div className="border-t border-white/10 pt-6 text-center">
                <p className="mb-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  <span className="gradient-text">Pas envie d&apos;attendre&nbsp;?</span>
                </p>
                <p className="mb-6 text-lg font-bold tracking-tight text-white sm:text-xl">
                  Passe devant tout le monde en 1 clic
                </p>

                {/* Card Pierre + bouton WA */}
                <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-sm sm:p-6">
                  <div className="relative">
                    <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-accent-400/30 shadow-[0_0_40px_rgba(1,95,255,0.25)] sm:h-32 sm:w-32">
                      <Image
                        src="/images/team/pierre-helias.png"
                        alt="Pierre — Conseiller Agencilab"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Indicateur en ligne */}
                    <div className="absolute bottom-1 right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-navy-950 bg-[#10b981] sm:h-6 sm:w-6">
                      <span className="block h-1.5 w-1.5 rounded-full bg-white" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-bold tracking-tight text-white sm:text-xl">
                      Enchanté, moi c&apos;est Pierre d&apos;Agencilab 👋
                    </p>
                    <p className="mt-2 text-sm leading-[1.5] tracking-tight text-white/60">
                      C&apos;est moi qui vais te rappeler dès qu&apos;une place
                      se libère.
                      <br />
                      Pour passer en priorité, clique sur le bouton et envoie-moi
                      un message sur WhatsApp.
                    </p>
                  </div>

                  {/* Bouton WA */}
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-[#25D366] px-8 py-4 text-base font-bold tracking-tight text-white transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98] sm:px-10 sm:text-lg"
                    style={{ boxShadow: "0 8px 30px rgba(37, 211, 102, 0.3)" }}
                  >
                    <span className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="relative z-10 flex-shrink-0"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span className="relative z-10">
                      Obtenir une réponse rapidement
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Étape 2 — Voir le site */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <p className="mb-3 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400 md:text-[0.8125rem]">
                Étape 2 — Découvre Agencilab
              </p>

              <p className="mb-6 text-base leading-[1.6] tracking-tight text-white/70">
                En attendant d&apos;être recontacté, découvre tout ce
                qu&apos;Agencilab peut t&apos;apporter sur notre site.
              </p>

              <div className="text-center">
                <a
                  href="https://agencilab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button glow-gold inline-flex items-center gap-3 rounded-xl bg-gold-400 px-10 py-4 text-base font-bold tracking-tight text-navy-950 shadow-lg shadow-gold-400/30"
                >
                  Voir le site Agencilab
                  <ArrowRight size={18} weight="bold" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FunnelFooter />
    </>
  );
}
