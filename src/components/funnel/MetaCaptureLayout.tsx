import Image from "next/image";
import LiveViewers from "./LiveViewers";

/**
 * Layout simplifié pour la page de capture Meta uniquement.
 * Le form Tally est embed inline (pas de popup au clic CTA), photo de la
 * vidéo en teaser bas-de-page (pas de play button cliquable).
 *
 * Structure :
 *   1. Logo
 *   2. H1 (négation pattern + montant)
 *   3. Sub avec mention famille
 *   4. Form Tally inline
 *   5. Reassurance "+1 018 salariés ont changé de vie" + diversité métiers
 *   6. Teaser + flèche
 *   7. Photo teaser de la vidéo
 */
export default function MetaCaptureLayout({
  tallySrc,
  tallyTitle,
}: {
  tallySrc: string;
  tallyTitle: string;
}) {
  return (
    <div className="mx-auto max-w-[760px] px-6 text-center">
      {/* Card Louis — autorité concrète pour cold Meta (mieux qu'un logo
          abstrait : photo + check certifié + chiffre YouTube tangible) */}
      <div className="mb-6 flex justify-center">
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
              Par Louis Esquier
            </span>
            <span className="text-[0.75rem] tracking-tight text-white/60 md:text-[0.8125rem]">
              +270&nbsp;000 abonnés sur YouTube
            </span>
          </div>
        </div>
      </div>

      {/* H1 */}
      <h1 className="mb-5 text-[clamp(1.625rem,4.5vw,2.375rem)] font-bold leading-[1.15] tracking-tight text-white">
        <span className="mb-3 block text-[0.45em] font-semibold uppercase tracking-[0.16em] text-white/70">
          Documentaire privé :
        </span>
        <span className="block">
          Comment cette{" "}
          <span className="gradient-text">activité méconnue</span>{" "}
          peut ajouter{" "}
          <span className="gradient-text">+2 987€/mois</span>{" "}
          à ton salaire (tous les mois 😎)&nbsp;?
        </span>
      </h1>

      {/* Sub-headline */}
      <p className="mx-auto mb-7 max-w-[680px] text-[0.875rem] leading-[1.55] text-white/80 md:text-[0.9375rem]">
        Ce n&apos;est pas du{" "}
        <strong className="text-white">Dropshipping</strong>, ni du{" "}
        <strong className="text-white">SMMA</strong>, ni du{" "}
        <strong className="text-white">Trading</strong>, ni du{" "}
        <strong className="text-white">MLM</strong>. Tu vas voir,{" "}
        <strong className="text-white">c&apos;est bien plus simple</strong>.
        Tu peux le faire le soir, après le boulot, comme un épisode de série,
        et{" "}
        <strong className="text-white">
          profiter pleinement de ta famille et de tes enfants
        </strong>
        .
      </p>

      {/* Petit guide au-dessus du form */}
      <p className="mx-auto mb-3 max-w-[520px] text-center text-[0.875rem] font-semibold text-white/85 md:text-[0.9375rem]">
        D&apos;abord, remplis ce court formulaire{" "}
        <span className="font-normal text-white/55">(15 sec)</span>
      </p>

      {/* Form Tally inline + footer reassurance intégré */}
      <div
        id="form-capture"
        className="mx-auto mb-8 max-w-[520px] scroll-mt-8 overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm"
      >
        {/* Zone form */}
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

        {/* Footer reassurance — fond accent bleu pour démarquer */}
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

      {/* Teaser texte avec flèches latérales pointant vers la photo en dessous */}
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

      {/* Photo teaser de la vidéo — cliquable, scroll vers le form */}
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
        {/* Live badge overlay (style YouTube/Twitch) — centré en haut */}
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
    </div>
  );
}
