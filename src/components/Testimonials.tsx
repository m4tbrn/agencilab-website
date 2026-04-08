"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Eliott Waeytens",
    stars: 5,
    title: "Mon expérience dans Agencilab est...",
    quote:
      "L'équipe est vraiment à l'écoute, disponible et toujours prête à aider. La communauté permet de progresser plus vite dans un environnement dynamique et bienveillant.",
  },
  {
    name: "Adrien Bony",
    stars: 5,
    title: "Un vrai accompagnement",
    quote:
      "Il y a tout ce dont on a besoin pour démarrer son business. C'est un véritable accompagnement qui te permet de créer ton business et d'atteindre tes objectifs.",
  },
  {
    name: "Julien D.",
    stars: 5,
    title: "Changement de vie",
    quote:
      "Du concret pour aller chercher des clients, une communauté qui t'aide. Tu n'es jamais seul si tu ne le veux pas.",
  },
  {
    name: "Leo",
    stars: 5,
    title: "Je suis dans Agencilab depuis septembre...",
    quote:
      "La formation continue d'évoluer, ce qui permet d'apprendre de nouvelles choses. Je recommande fortement.",
  },
  {
    name: "Lucas Lacrt",
    stars: 5,
    title: "C'est LA meilleure formation",
    quote:
      "C'est le meilleur endroit pour débuter. Lance-toi, prends ton appel et fonce.",
  },
  {
    name: "Mathis Baron",
    stars: 5,
    title: "Enfin un programme sérieux",
    quote:
      "On ne te vend pas un rêve, on te donne une méthode. Les concepts sont expliqués simplement avec exigence.",
  },
  {
    name: "Freddy Maxence",
    stars: 5,
    title: "Une formation ultra claire pour lancer une vraie agence",
    quote:
      "Les modules sur l'avatar et l'offre irrésistible m'ont énormément aidé. Les principes restent applicables partout.",
  },
  {
    name: "Maxime Nogueira",
    stars: 5,
    title: "Une marche à suivre claire",
    quote:
      "Une avancée rapide et efficace, de bons outils et une communauté qui pousse à aller de l'avant.",
  },
  {
    name: "Kenza Donze",
    stars: 5,
    title: "Beaucoup de soutien",
    quote:
      "Beaucoup de soutien, si on est coincé il y a toujours un coach pour débloquer. Je recommande.",
  },
  {
    name: "J. K.",
    stars: 5,
    title: "Agencilab, un accompagnement de qualité",
    quote:
      "La clarté des vidéos, le suivi hebdomadaire et la prise de nouvelles quotidienne par mentor. Tout est là.",
  },
  {
    name: "Johan Jutteau-Mollé",
    stars: 5,
    title: "Super formation !",
    quote:
      "Elle aide parfaitement dans le détail la création et le développement d'entreprise. Les coachs sont très présents.",
  },
  {
    name: "Solen de Kervas",
    stars: 5,
    title: "Un accompagnement qui dépasse toute attente !",
    quote:
      "La qualité des vidéos et des sessions de coaching ont dépassé mes attentes. Des pros aux petits oignons.",
  },
  {
    name: "Sylvain",
    stars: 5,
    title: "Un système complet axé sur la réussite",
    quote:
      "Agencilab nous donne de vraies bases. Les coaching hebdomadaires permettent de devenir opérationnel sur le terrain.",
  },
  {
    name: "Sce-Agency",
    stars: 5,
    title: "Contenu + Communauté = Compétence",
    quote:
      "Cette formation m'a permis de signer mes premiers clients en moins d'un mois. La communauté est vraiment un plus.",
  },
  {
    name: "Kenny Bangard",
    stars: 5,
    title: "Mon expérience avec Agencilab",
    quote:
      "Des coachs à l'écoute et toujours de bons conseils. Le suivi est vraiment au top. Je recommande !",
  },
  {
    name: "Damien",
    stars: 5,
    title: "Agencilab c'est réellement une pépite",
    quote:
      "C'est un accompagnement archi complet qui t'apporte des compétences incroyables. Énorme gratitude.",
  },
  {
    name: "Nicolas Gaumont",
    stars: 5,
    title: "Un programme solide et concret",
    quote:
      "Un programme construit pour avancer pas à pas avec des exemples concrets. Les coachs sont des mines d'information.",
  },
  {
    name: "François Arnetoli",
    stars: 5,
    title: "La discipline et la motivation sont les deux mamelles",
    quote:
      "Grâce à la formation, j'ai fait de nombreuses découvertes enrichissantes. Les animateurs sont très compétents.",
  },
  {
    name: "Tony Patino",
    stars: 5,
    title: "Formation complète et solide",
    quote:
      "Formation très complète avec des modules clairs et précis pour chaque branche du marketing digital, abordables à tous, peu importe le niveau de compétence, des appels de groupe chaque semaine et des coachs présents et réactifs.",
  },
  {
    name: "Jennifer",
    stars: 5,
    title: "Aujourd'hui ce sont les clients qui viennent à moi",
    quote:
      "Une transformation personnelle passant du doute à la création d'entreprise. L'accompagnement humain structuré m'a permis d'acquérir une vraie confiance professionnelle.",
  },
  {
    name: "Pedro Grazina",
    stars: 5,
    title: "C'est une formation professionnelle",
    quote:
      "C'est une formation professionnelle enrichissante et concrète. L'accompagnement est simplement génial car toutes les semaines vous avez des moments de discussion.",
  },
  {
    name: "William Delaunay",
    stars: 5,
    title: "Une formation structurante",
    quote:
      "Elle m'a enfin permis d'y voir clair. Pas de théorie superflue, tout est orienté vers l'action concrète.",
  },
  {
    name: "Dorian",
    stars: 5,
    title: "Une très bonne formation",
    quote:
      "On acquiert toutes les clés nécessaires pour se lancer sereinement dans l'entrepreneuriat. Les coachs sont toujours disponibles et à l'écoute.",
  },
  {
    name: "Florent Vidal",
    stars: 5,
    title: "Superbe formation, je recommande !!",
    quote:
      "L'équipe est vraiment au top, l'incubateur permet de rentrer complètement dans la peau d'un entrepreneur avec le mindset, les démarches et les bases du marketing en ligne.",
  },
  {
    name: "Patrice",
    stars: 5,
    title: "Un accompagnement de haute qualité !",
    quote:
      "J'ai découvert toutes les clés pour me lancer dans l'entreprenariat. Les coachs sont présents, bienveillants, leurs expériences et leurs conseils sont très précieux.",
  },
  {
    name: "Simon Christiany",
    stars: 5,
    title: "L'avenir de l'enseignement supérieur ?",
    quote:
      "Une formation d'une rare qualité, qui touche à la fois l'humain, le marché, les techniques actuelles et l'administration. Une équipe à l'écoute et curieuse de toujours s'améliorer.",
  },
  {
    name: "Thomas",
    stars: 5,
    title: "Je me remercie d'avoir sauté le pas !",
    quote:
      "Sûrement un de mes meilleurs investissements ! Des vidéos de qualité, des mises à jour, ce programme m'a aidé à lancer une activité. On se sent réellement accompagné.",
  },
  {
    name: "Nathan Joncheraye",
    stars: 5,
    title: "J'ai adoré cet accompagnement",
    quote:
      "De la semaine 1 à la semaine 6 on est plongé dans un environnement incroyable. Au-delà de la formation, ça a été une vraie révélation.",
  },
  {
    name: "Clément Morel",
    stars: 5,
    title: "Une expérience transformative",
    quote:
      "J'ai signé mes premiers clients et posé les bases solides pour développer mon activité. Les outils et stratégies m'ont permis de passer à l'action rapidement.",
  },
  {
    name: "Yan Spaggiari",
    stars: 5,
    title: "Premiers clients signés !",
    quote:
      "Au début je ne savais pas où je mettais les pieds. Meilleur investissement de ma vie ! J'ai réussi à signer mes 3 premiers clients grâce à Agencilab !",
  },
  {
    name: "Paul Brice",
    stars: 5,
    title: "Un grand merci à Louis et toute son équipe",
    quote:
      "L'équipe s'est montrée extrêmement compétente, réactive et professionnelle. Aujourd'hui, grâce à la formation, mon activité génère des revenus solides !",
  },
  {
    name: "Jules Charreyre",
    stars: 5,
    title: "MERCI",
    quote:
      "Louis et ses équipes sont les premiers à m'avoir vraiment permis d'avoir des résultats concrets. Enfin un accompagnement personnalisé. Investissement définitivement rentable !",
  },
  {
    name: "Tatiana",
    stars: 5,
    title: "On peut passer à l'action dès le début",
    quote:
      "Les vidéos sont claires, sans blabla inutile, et les mentors sont sincèrement investis dans notre réussite. C'est un super investissement si vous voulez mettre en place un projet réaliste.",
  },
  {
    name: "Solen",
    stars: 5,
    title: "Totalement impressionnée",
    quote:
      "J'avais un peu peur que ce soit une arnaque, et finalement je suis totalement impressionnée par la richesse du contenu. C'est plus qu'une formation au marketing, c'est aussi du développement personnel !",
  },
  {
    name: "Charles M",
    stars: 5,
    title: "Je vis pleinement de mon activité",
    quote:
      "J'ai appliqué à la lettre les préconisations de Louis et des coachs et maintenant, je vis pleinement de mon activité. Si c'était à refaire, je le referais !",
  },
  {
    name: "Amandine",
    stars: 5,
    title: "Heureuse d'avoir sauté le pas",
    quote:
      "J'ai vraiment hésité longtemps, j'avais peur, mon budget était hyper restreint. Le contenu est très utile et toujours en évolution. Les appels de groupe avec les coachs sont très précieux.",
  },
  {
    name: "Nicolas Steinmetz",
    stars: 5,
    title: "Plus que satisfait",
    quote:
      "La formation est très bien construite et répond à la plupart de mes interrogations. Les 3 calls par semaine avec les différents coachs me permettent de répondre à toutes mes problématiques.",
  },
  {
    name: "Andreas Mirabel",
    stars: 5,
    title: "Pas qu'une formation",
    quote:
      "Agencilab n'est pas qu'une formation. C'est tout un accompagnement, des coachings réguliers, des groupes de travail hyper stimulant. Je recommande.",
  },
  {
    name: "Sullivan Laurent",
    stars: 4,
    title: "Contenu intéressant et de qualité",
    quote:
      "Contenu intéressant et de qualité. Attention à ce que ça ne devienne pas trop complexe pour des débutants.",
  },
  {
    name: "William Berdat",
    stars: 4,
    title: "Métamorphose",
    quote:
      "La métamorphose s'opère progressivement, doucement mais sûrement, étape par étape. En transformant la motivation en discipline, la rigueur finit par s'installer.",
  },
  {
    name: "Maillard Benjamin",
    stars: 4,
    title: "Une formation complète et claire",
    quote:
      "Une formation complète et claire. Satisfait de ce qui est proposé dans cette formation.",
  },
  {
    name: "Vincent",
    stars: 5,
    title: "Tout simplement complet !",
    quote:
      "Un bon équilibre entre théorie et pratique. J'ai signé trois clients en un mois. Je recommande.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="marble-bg py-16 lg:py-24" id="temoignages">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-navy-600">
            Avis vérifiés
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
            Noté 4.7/5 sur Trustpilot
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg tracking-tight text-navy-950/50">
            Avis vérifiés de membres Agencilab sur Trustpilot.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.02, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between rounded-2xl border border-navy-950/5 bg-white p-7 transition-all duration-300 hover:shadow-lg hover:shadow-navy-950/5"
            >
              <div>
                <Stars count={t.stars} />
                <h3 className="mt-4 text-base font-bold tracking-tight text-navy-950">
                  {t.title}
                </h3>
                <p className="mt-2 leading-relaxed tracking-tight text-navy-950/60">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-5 flex items-center gap-3 border-t border-navy-950/5 pt-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-950/5 text-sm font-bold text-navy-950/60">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-tight text-navy-950">
                    {t.name}
                  </p>
                  <p className="text-xs tracking-tight text-navy-950/40">
                    Avis vérifié Trustpilot
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trustpilot footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-navy-950/10 bg-white px-5 py-3 text-sm text-navy-950/50">
            <Stars count={5} />
            <span className="font-medium text-navy-950">4.7/5</span>
            <span>— Vérifié sur Trustpilot</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
