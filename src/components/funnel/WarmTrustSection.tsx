import Image from "next/image";
import { Star } from "@phosphor-icons/react/dist/ssr";

/**
 * Section preuves & confiance pour les pages warm.
 * Combine 4 trust cards (chiffres bruts) + 2-3 témoignages courts +
 * mention de la garantie contractuelle juste avant l'iClosed widget.
 */
export default function WarmTrustSection() {
  return (
    <section className="mt-14 md:mt-20">
      {/* Title */}
      <div className="mx-auto mb-10 max-w-[760px] text-center md:mb-14">
        <span className="mb-3 inline-block text-[0.75rem] font-bold uppercase tracking-[0.16em] text-accent-400 md:text-[0.8125rem]">
          Témoignages
        </span>
        <h2 className="text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-white">
          Ce qu&apos;en pensent les{" "}
          <span className="gradient-text">1 018 élèves</span>{" "}
          d&apos;Agencilab&nbsp;?
        </h2>
      </div>

      {/* 4 trust cards */}
      <div className="mx-auto mb-10 grid max-w-[1100px] grid-cols-2 gap-3 md:mb-14 md:gap-5 lg:grid-cols-4">
        {[
          { value: "1 018+", label: "salariés accompagnés" },
          { value: "4.7/5", label: "sur Trustpilot" },
          { value: "+2 987€", label: "revenu moyen généré/mois par nos élèves" },
          { value: "10 ans", label: "d'expertise marketing" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-sm md:p-6"
          >
            <p className="mb-1 text-[1.5rem] font-extrabold tracking-tight text-white md:text-[1.875rem]">
              <span className="gradient-text">{stat.value}</span>
            </p>
            <p className="text-[0.8125rem] leading-[1.4] text-white/60 md:text-[0.875rem]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Témoignages courts */}
      <div className="mx-auto mb-10 grid max-w-[1100px] gap-4 md:mb-14 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {[
          {
            name: "Marina",
            city: "Ex-e-commerce, maman de 2",
            avatar: "/images/visages/marina.jpg",
            stars: 5,
            quote:
              "Maman de 2 enfants, j'avais déjà tout essayé (e-commerce notamment) sans résultat. La communauté Agencilab te pousse à continuer même dans les moments durs et le module mindset a été décisif.",
          },
          {
            name: "Damien",
            city: "Ex-paysagiste, 27 ans",
            avatar: "/images/visages/damien.jpg",
            stars: 5,
            quote:
              "8 ans paysagiste à 40-50h/semaine pour 2 000€/mois. Reconversion en marketing avec Agencilab : 2 sites web vendus (500€ et 800€). Aujourd'hui je fais ce CA en 1 journée de travail. Le syndrome de l'imposteur, j'en suis sorti.",
          },
          {
            name: "Lucas",
            city: "Ex-cuisinier",
            avatar: "/images/visages/lucas.jpg",
            stars: 5,
            quote:
              "Cuisinier 60-70h/semaine, plus l'énergie de rien. Je me suis remis à prospecter 2h/jour le matin. Au 10e jour de cold call, 2 sites signés pour 3 000€. J'ai posé ma démission, aujourd'hui c'est mon agence.",
          },
          {
            name: "Anaël",
            city: "Ex-école de commerce",
            avatar: "/images/visages/anael.jpg",
            stars: 5,
            quote:
              "15 000€ d'école de commerce qui m'ont très peu servi. Ce qui m'a fait passer un cap chez Agencilab : la structure (onboarding, data, reporting). Aujourd'hui certains de mes clients me paient depuis 4 ans en récurrent.",
          },
          {
            name: "Kylian",
            city: "4 clients signés",
            avatar: "/images/visages/kylian.jpg",
            stars: 5,
            quote:
              "Démarré en février, à plein temps en avril. 300 cold calls plus tard, 4 clients signés (3 avocats + mon coach sportif). Le plus marquant : ne plus avoir de patron, beaucoup plus de liberté dans le travail.",
          },
          {
            name: "Barthélémy",
            city: "Caravane → 300m² en Andorre",
            avatar: "/images/visages/barthelemy.jpg",
            stars: 5,
            quote:
              "Avant : usine, maraîcher, boucherie, bûcheron. 5 ans à galérer. Agencilab, c'était la « boîte de Pandore » : tout s'est débloqué d'un coup. Aujourd'hui basé en Andorre, je suis passé de la caravane à un 300m².",
          },
          {
            name: "Yohann",
            city: "40 000€ en 6 mois",
            avatar: "/images/visages/yohann.jpg",
            stars: 5,
            quote:
              "66 cold calls, 5 sites web signés (de 750€ à 3 000€). 7 822€ générés dès le 1er mois, 40 000€ sur 6 mois en parallèle de mon job. Mon tout 1er appel j'ai closé.",
          },
          {
            name: "Florent",
            city: "Ex-boulanger, 24 ans",
            avatar: "/images/visages/florent.jpg",
            stars: 5,
            quote:
              "Boulanger depuis l'armée, 0 base en entrepreneuriat, je voulais arrêter de dépendre d'un patron. 1 site restaurant à 2 000€ + un autre contrat = 3 500€ en 3 semaines. Le côté humain et les coachs m'ont changé la vie.",
          },
          {
            name: "Clément",
            city: "Salaire doublé en 6 mois",
            avatar: "/images/visages/clement.jpg",
            stars: 5,
            quote:
              "Salarié à 3 000€/mois en Corée du Sud, j'ai appliqué les compétences Agencilab à mon poste (copywriting, IA, management). En 6 mois mon salaire a doublé. Agencilab a changé mon futur.",
          },
        ].map((t) => (
          <div
            key={t.name}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm md:p-6"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/10">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="44px"
                />
              </div>
              <div className="flex-1">
                <p className="text-[0.9375rem] font-semibold text-white">
                  {t.name}{" "}
                  <span className="font-medium text-white/50">· {t.city}</span>
                </p>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      weight="fill"
                      className="text-gold-400"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[0.875rem] leading-[1.55] text-white/75 md:text-[0.9375rem]">
              «&nbsp;{t.quote}&nbsp;»
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
