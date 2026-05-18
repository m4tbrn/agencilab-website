import { Star } from "@phosphor-icons/react/dist/ssr";
import { testimonials } from "@/components/testimonialsData";

/**
 * Section avis Trustpilot pour la page offre — thème sombre.
 * Réutilise les 42 avis vérifiés de la page d'accueil (source unique).
 */
export default function OffreTrustpilot() {
  return (
    <section className="mt-14 md:mt-20">
      <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-12">
        <span className="mb-3 inline-block text-[0.75rem] font-bold uppercase tracking-[0.16em] text-accent-400 md:text-[0.8125rem]">
          Avis vérifiés
        </span>
        <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.18] tracking-tight text-white">
          Noté <span className="gradient-text">4,7/5 sur Trustpilot</span>
        </h2>
        <div className="mt-3 flex items-center justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={18} weight="fill" className="text-gold-400" />
          ))}
          <span className="ml-2 text-[0.875rem] text-white/55">
            {testimonials.length} avis vérifiés
          </span>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1100px] gap-3.5 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: t.stars }).map((_, i) => (
                <Star key={i} size={13} weight="fill" className="text-gold-400" />
              ))}
            </div>
            <h3 className="mt-3 text-[0.9375rem] font-bold tracking-tight text-white">
              {t.title}
            </h3>
            <p className="mt-1.5 flex-1 text-[0.875rem] leading-[1.55] text-white/65">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-3 border-t border-white/5 pt-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-[0.875rem] font-bold text-white/60">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="text-[0.8125rem] font-semibold tracking-tight text-white">
                  {t.name}
                </p>
                <p className="text-[0.6875rem] text-white/40">
                  Avis vérifié Trustpilot
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
