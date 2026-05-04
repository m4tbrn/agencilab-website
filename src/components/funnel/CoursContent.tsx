import Image from "next/image";
import { ArrowRight, CheckCircle, X } from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "./FunnelFooter";
import TallyPopup from "./TallyPopup";
import ExitIntentPopup from "./ExitIntentPopup";
import FunnelSocialNotif from "./FunnelSocialNotif";
import LiveViewers from "./LiveViewers";
import MetaPixelEvent from "@/components/analytics/MetaPixelEvent";

export default function CoursContent({
  tallySrc,
  tallyTitle,
  source = "yt",
}: {
  tallySrc: string;
  tallyTitle: string;
  /**
   * Source de trafic — pilote la pre-headline :
   * - "yt"   : preuve sociale produit ("Gratuit si tu viens de YouTube")
   * - "meta" : autorité Louis ("Documentaire exclusif de Louis Esquier, +270k abonnés sur YouTube")
   */
  source?: "yt" | "meta";
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

        <section className="relative z-10 pt-4 pb-10 md:pt-6 md:pb-16">
          <div className="mx-auto max-w-[920px] px-6 text-center">
            {/* Logo Agencilab — masqué sur Meta pour gagner de l'espace vertical (CTA above-the-fold) */}
            {source !== "meta" && (
              <div className="mb-4 flex justify-center">
                <Image
                  src="/images/logo-white.png"
                  alt="Agencilab"
                  width={140}
                  height={36}
                  className="h-7 w-auto opacity-80"
                  priority
                />
              </div>
            )}

            {/* Pre-headline — varie selon la source de trafic */}
            <div className="mb-5 flex flex-col items-center gap-2">
              {source === "meta" ? (
                <div
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm"
                  style={{ boxShadow: "0 0 30px rgba(1, 95, 255, 0.12)" }}
                >
                  <div className="relative shrink-0">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/10">
                      <Image
                        src="/images/team/louis-esquier.jpg"
                        alt="Louis Esquier"
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <span
                      className="absolute -bottom-0.5 -right-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#015FFF] ring-2 ring-navy-950"
                      aria-label="Compte certifié"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-2.5 w-2.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <span className="text-[0.8125rem] font-bold tracking-tight text-white md:text-[0.875rem]">
                      Documentaire privé de Louis Esquier
                    </span>
                    <span className="text-[0.75rem] tracking-tight text-white/60 md:text-[0.8125rem]">
                      +270&nbsp;000 abonnés sur YouTube
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <div
                    className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400 backdrop-blur-sm md:text-[0.8125rem]"
                    style={{ boxShadow: "0 0 30px rgba(255, 122, 0, 0.15)" }}
                  >
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                    Documentaire privé
                  </div>
                  <p className="text-[0.8125rem] tracking-tight text-white/50 md:text-[0.875rem]">
                    <span className="line-through decoration-white/40 decoration-2">Valeur 47€</span>{" "}
                    <span className="text-white/40">→</span>{" "}
                    <span className="font-bold text-white">Gratuit si tu viens de YouTube</span>
                  </p>
                </>
              )}
            </div>

            {/* Headline */}
            <h1
              className={`mb-4 font-bold leading-[1.15] tracking-tight text-white ${
                source === "meta"
                  ? "text-[clamp(1.5rem,4vw,2.25rem)]"
                  : "text-[clamp(2rem,5vw,2.75rem)]"
              }`}
            >
              {source === "meta" ? (
                <>
                  Comment des Français comme toi se créent{" "}
                  <span className="gradient-text">2&apos;987€ en moyenne</span>{" "}
                  de revenus complémentaires grâce à cette{" "}
                  <span className="gradient-text">activité méconnue et l&apos;IA</span>{" "}?
                </>
              ) : (
                <>
                  Comment gagner{" "}
                  <span className="gradient-text">+3 500 €/mois</span>{" "}
                  à côté de ton travail grâce à une{" "}
                  <span className="gradient-text">activité (très) rentable méconnue et l&apos;IA</span>.
                </>
              )}
            </h1>

            {/* Anti-bullets — sur une ligne sur Meta (gain place above-the-fold) */}
            <ul
              className={`mb-6 flex items-center justify-center text-white/70 ${
                source === "meta"
                  ? "flex-row flex-wrap gap-x-2.5 gap-y-1 text-[0.75rem] md:gap-x-4 md:text-[0.875rem]"
                  : "flex-col gap-x-4 gap-y-2 text-[0.9375rem] font-medium sm:flex-row sm:flex-wrap"
              }`}
            >
              {[
                "Sans expérience préalable",
                "Sans quitter ton emploi",
                "Sans diplôme",
              ].map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <X
                    size={source === "meta" ? 13 : 16}
                    weight="bold"
                    className="shrink-0 text-[#ef4444]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Photo cliquable avec halo lumineux rotatif */}
            <a
              href="#capture"
              aria-label="Accéder au documentaire"
              className="mx-auto mb-5 mt-3 block aspect-[16/9] max-w-[760px] cursor-pointer rounded-2xl transition-transform hover:scale-[1.01]"
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60">
                <Image
                  src="/images/img-optin-3.webp"
                  alt="Louis Esquier — Documentaire Agencilab"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy-950/20 to-navy-950/40" />
                {/* Live badge overlay (style YouTube/Twitch) */}
                <div className="absolute left-3 top-3 z-10">
                  <LiveViewers variant="overlay" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-2xl transition-transform hover:scale-110">
                    <svg className="ml-0.5 h-7 w-7 text-navy-950" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>

            {/* CTA */}
            <div className="flex justify-center">
              <a
                href="#capture"
                className="cta-button glow-gold inline-flex items-center gap-3 rounded-xl bg-gold-400 px-10 py-4 text-base font-bold tracking-tight text-navy-950 shadow-lg shadow-gold-400/30 sm:py-5 sm:text-lg"
              >
                Accéder au Documentaire (GRATUIT)
                <ArrowRight size={20} weight="bold" />
              </a>
            </div>

            {/* Faces row — preuve sociale visuelle */}
            <div className="mt-5 flex flex-col items-center gap-2">
              <div className="flex -space-x-2.5">
                {[
                  { src: "/images/visages/marina.jpg", name: "Marina" },
                  { src: "/images/visages/yohann.jpg", name: "Yohann" },
                  { src: "/images/visages/barthelemy.jpg", name: "Barthélémy" },
                  { src: "/images/visages/stephanie.jpg", name: "Stéphanie" },
                  { src: "/images/visages/julien.jpg", name: "Julien" },
                  { src: "/images/visages/damien.jpg", name: "Damien" },
                  { src: "/images/visages/clement.jpg", name: "Clément" },
                ].map((face, i) => (
                  <div
                    key={i}
                    className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-navy-950"
                  >
                    <Image src={face.src} alt={face.name} fill className="object-cover" sizes="36px" />
                  </div>
                ))}
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-navy-950 bg-accent-400/10 text-[9px] font-bold text-accent-400">
                  +1k
                </div>
              </div>
              <p className="text-[0.875rem] tracking-tight text-white/60">
                <span className="font-bold text-white">+ de 1&nbsp;000&nbsp;salariés</span>{" "}vivent déjà de cette activité&nbsp;🇫🇷
              </p>
            </div>

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
      {source === "meta" && <MetaPixelEvent event="PageView" />}
    </>
  );
}
