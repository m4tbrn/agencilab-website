import Image from "next/image";
import { ArrowRight, CheckCircle, X } from "@phosphor-icons/react/dist/ssr";
import FunnelFooter from "./FunnelFooter";
import TallyPopup from "./TallyPopup";
import ExitIntentPopup from "./ExitIntentPopup";
import FunnelSocialNotif from "./FunnelSocialNotif";
import LiveViewers from "./LiveViewers";
import MetaCaptureLayout from "./MetaCaptureLayout";
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
   * - "ig"   : preuve sociale produit ("Gratuit si tu viens d'Instagram")
   * - "meta" : autorité Louis ("Documentaire exclusif de Louis Esquier, +270k abonnés sur YouTube")
   */
  source?: "yt" | "ig" | "meta";
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
          {source === "meta" ? (
            <MetaCaptureLayout tallySrc={tallySrc} tallyTitle={tallyTitle} />
          ) : (
          <div className="mx-auto max-w-[920px] px-6 text-center">
            {/* Logo Agencilab */}
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

            {/* Pre-headline — Documentaire privé + price anchoring (YT) */}
            <div className="mb-5 flex flex-col items-center gap-2">
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
                <span className="font-bold text-white">
                  {source === "ig"
                    ? "Gratuit si tu viens d'Instagram"
                    : "Gratuit si tu viens de YouTube"}
                </span>
              </p>
            </div>

            {/* Headline */}
            <h1
              className={`mb-4 font-bold leading-[1.15] tracking-tight text-white ${
                source === "ig"
                  ? "text-[clamp(1.375rem,3.6vw,2rem)]"
                  : "text-[clamp(2rem,5vw,2.75rem)]"
              }`}
            >
              {source === "ig" ? (
                <>
                  Quelle est cette{" "}
                  <span className="gradient-text">activité méconnue</span>{" "}
                  qui me permet de voyager où je veux, quand je veux, et qui
                  rapporte déjà{" "}
                  <span className="gradient-text">+2 987€/mois</span> à{" "}
                  <span className="gradient-text">+1 018 Français</span> 😎
                </>
              ) : (
                <>
                  Comment gagner{" "}
                  <span className="gradient-text">+3 500 €/mois</span>{" "}
                  à côté de ton travail grâce à une{" "}
                  <span className="gradient-text">
                    activité (très) rentable méconnue et l&apos;IA
                  </span>
                  .
                </>
              )}
            </h1>

            {source === "ig" && (
              <>
                {/* Petit guide au-dessus du form */}
                <p className="mx-auto mb-3 max-w-[520px] text-center text-[0.875rem] font-semibold text-white/85 md:text-[0.9375rem]">
                  D&apos;abord, remplis ce court formulaire{" "}
                  <span className="font-normal text-white/55">(15 sec)</span>
                </p>

                {/* Form Tally inline + footer reassurance */}
                <div
                  id="form-capture"
                  className="mx-auto mb-8 max-w-[520px] scroll-mt-8 overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm"
                >
                  <div className="bg-white/[0.04] p-4 md:p-6">
                    <iframe
                      src={tallySrc}
                      loading="eager"
                      width="100%"
                      height={360}
                      title={tallyTitle}
                      className="block w-full bg-transparent"
                    />
                  </div>
                  <div
                    className="border-t border-white/10 bg-accent-400/[0.07] px-4 py-3.5 md:px-6"
                    style={{ boxShadow: "inset 0 1px 0 rgba(1, 95, 255, 0.08)" }}
                  >
                    <p className="text-center text-[0.8125rem] leading-[1.5] text-white/85 md:text-[0.875rem]">
                      <span className="font-bold text-white">+1 018 salariés</span> ont
                      changé de vie grâce à cette activité
                      <span className="mt-0.5 block text-[0.6875rem] font-normal text-white/55 md:text-[0.75rem]">
                        (boulangers, gendarmes, infirmières, mamans, papas...)
                      </span>
                    </p>
                  </div>
                </div>

                {/* Teaser texte + flèches descendantes */}
                <div className="mb-4 flex items-center justify-center gap-3 md:gap-4">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 animate-bounce text-gold-400"
                    aria-hidden
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                  <p className="text-[0.9375rem] text-white/75 md:text-[1rem]">
                    Le{" "}
                    <strong className="text-white">documentaire privé</strong>{" "}
                    que je vais t&apos;envoyer
                  </p>
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 animate-bounce text-gold-400"
                    aria-hidden
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>

                {/* Photo teaser — cliquable, scroll vers le form */}
                <a
                  href="#form-capture"
                  aria-label="Remplir le formulaire pour recevoir le documentaire"
                  className="group relative mx-auto block aspect-[16/9] max-w-[560px] overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60 transition-transform hover:scale-[1.01]"
                >
                  <Image
                    src="/images/img-optin-3.webp"
                    alt="Documentaire Agencilab"
                    fill
                    className="object-cover"
                    sizes="560px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-950/30 to-navy-950/60" />
                  <div className="absolute left-1/2 top-3 z-10 -translate-x-1/2">
                    <LiveViewers variant="overlay" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-2xl transition-transform group-hover:scale-110">
                      <svg
                        className="ml-0.5 h-6 w-6 text-navy-950"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </>
            )}

            {source !== "ig" && (
              <>
            {/* Anti-bullets */}
            <ul className="mb-6 flex flex-col items-center gap-x-4 gap-y-2 text-[0.9375rem] font-medium text-white/70 sm:flex-row sm:flex-wrap sm:justify-center">
              {[
                "Sans expérience préalable",
                "Sans quitter ton emploi",
                "Sans diplôme",
              ].map((item) => (
                <li key={item} className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <X size={16} weight="bold" className="shrink-0 text-[#ef4444]" />
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
              </>
            )}
          </div>
          )}
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
