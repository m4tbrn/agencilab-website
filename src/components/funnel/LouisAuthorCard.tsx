import Image from "next/image";

/**
 * Card Louis Esquier — autorité concrète (photo + check certifié + chiffre
 * YouTube tangible). Utilisée comme signature/header sur les sources cold
 * où l'audience ne connaît pas encore Louis.
 */
export default function LouisAuthorCard() {
  return (
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
  );
}
