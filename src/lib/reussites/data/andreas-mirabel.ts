import type { Reussite } from "../types";

/**
 * Synthèse des 2 bilans Agencilab d'Andréas Mirabel (transcrits par Whisper).
 *
 * Sources :
 * - Témoignages/Andréas Mirabel.md (21:42, "Bilan agence — 105k€/6 mois")
 * - Témoignages/Andréas Mirabel (BIS).md (24:57, "Bilan SARL énergie — 38k€/3 mois")
 *
 * À valider avant publication :
 * - [ ] Mettre draft: false uniquement après validation par Andréas
 * - [ ] Ajouter la vraie photo dans /public/images/reussites/andreas-mirabel.jpg
 * - [ ] Ajouter le videoUrl si une vidéo YouTube/Vimeo est dispo
 *   (les 2 bilans sont actuellement sur Google Drive, pas embeddables tel quel)
 */
const reussite: Reussite = {
  slug: "andreas-mirabel",
  name: "Andréas Mirabel",
  outcomeHeadline: "De salarié à 105 000€ en 6 mois en parallèle de son CDI",
  photo: "/images/reussites/andreas-mirabel.jpg",
  oldJob: "Directeur commercial (CDI dans une centrale hôtelière)",
  city: "Aix-en-Provence",
  age: 25,

  // PLACEHOLDERS — à remplacer par les vrais embeds YouTube/Vimeo une fois les bilans uploadés
  videos: [
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Bilan #1 — SARL énergie : 38 000€ en 3 mois",
    },
    {
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      label: "Bilan #2 — 105 000€ générés en 6 mois",
    },
  ],

  stats: [
    { label: "CA en 6 mois", value: "+105 000€" },
    { label: "Marge nette", value: "50%" },
    { label: "Pire mois (janvier)", value: "28 000€" },
    { label: "Équipe pilotée", value: "8 personnes" },
  ],

  parcoursAvant: [
    "Andréas a 25 ans, est né en 2000 et vit à Aix-en-Provence. Il a grandi dans une famille où monter ses propres projets était valorisé : son père s'est lancé dans le tourisme et c'est cet environnement qui lui a donné dès jeune le goût de construire quelque chose à lui. Il sort d'école de commerce en 2024 mais en sortant, il a une frustration claire : son cursus lui a donné un cadre théorique mais aucune compétence technique concrète en marketing digital, en prospection ou en automatisation.",
    "Côté pro, il est embauché en CDI dans l'entreprise familiale : directeur commercial pour une centrale de réservation hôtelière basée en Corée, qu'il développe sur le marché français. Son job : piloter les ventes et les équipes commerciales en France et plus largement en Europe, dans un modèle où la centrale est fournisseur d'hôtels pour des agents de voyages. Le salaire est correct mais pas suffisant pour le train de vie qu'il visait avec sa fiancée (achat d'une maison, projets de couple).",
    "À côté du CDI, il a déjà tenté plein de choses pour générer du revenu complémentaire : une boutique e-commerce, divers projets avec des potes... sans réel décollage. Il sent surtout qu'il a besoin de combler ses lacunes techniques en marketing digital avant d'aller plus loin.",
    "Au moment où il découvre Louis, il sort d'une période post-confinement compliquée : trop de sorties, beaucoup de bars, fume, productivité en chute, sentiment d'être rentré dans un cercle vicieux. La première chose qu'il décide pour en sortir, c'est de nettoyer son fil YouTube pour ne consommer que du contenu utile. C'est comme ça qu'il tombe sur la chaîne de Louis, accroche au ton et au discours, et rejoint Agencilab en septembre 2024 en finançant la totalité de l'accompagnement sur ses économies personnelles.",
  ],

  parcoursMaintenant: [
    "Un an et demi plus tard, Andréas dirige sa propre SARL spécialisée dans le courtage en énergie. Concrètement, il met en concurrence les contrats électricité et gaz d'entreprises avec l'ensemble du marché : il propose des économies à ses clients sans aucun frais direct pour eux, et c'est le fournisseur qui le rétribue à la signature. Le modèle est récurrent (les contrats énergie se renégocient tous les 36 mois) et la marge nette tourne autour de 50%, le reste étant rétribué à ses apporteurs d'affaires.",
    "Son entreprise compte aujourd'hui 8 personnes en full remote, principalement des apporteurs d'affaires, et est associée avec le plus gros cabinet de courtage français. Sur les 6 premiers mois après son pivot vers l'énergie, il a généré 105 000€ de CA cumulé. Janvier 2026 (un mois historiquement faible dans le courtage) s'est tout de même clôturé à 28 000€. Il pilote tout sur HubSpot depuis sa phase récente de structuration.",
    "Il garde volontairement son CDI familial dans la centrale hôtelière, pour deux raisons. La première : c'est l'entreprise familiale, il y reste un pied par cohérence. La seconde : avec sa fiancée ils préparent l'achat d'un appartement et avoir un CDI rassure les banques pour le crédit. Côté volume, il plie ses tâches opérationnelles du CDI en 3-4 heures par jour, ce qui lui libère le reste pour son activité de courtage (environ 40h par semaine dessus en plus du CDI 35h).",
    "Pour 2026, son objectif est de générer 500 000€ de CA et de signer son premier mois à 100 000€ en septembre. À côté il se forme à l'immobilier pour réinvestir sa trésorerie, discute structuration via holdings avec son expert-comptable, et réfléchit à ouvrir son capital à son bras droit (qu'il voit clairement comme futur CEO). Sa compétence signature développée chez Agencilab : le mass mailing à 10 000 emails par mois via une stack Lemlist + Phantom Buster + Sales Navigator + Drop Contact.",
  ],

  qa: [
    {
      question: "Tu peux te présenter et raconter ce que tu faisais avant Agencilab ?",
      answer: [
        "J'ai plusieurs casquettes aujourd'hui. Avant d'entrer chez Agencilab et toujours aujourd'hui, j'ai un poste de directeur commercial pour une centrale hôtelière basée en Corée qu'on développe sur le marché français. Mon job c'est de piloter les ventes et les équipes commerciales en France et plus largement en Europe. On est fournisseur d'hôtels pour des agents de voyages.",
        "À côté, j'ai toujours voulu construire quelque chose à moi. J'ai baigné là-dedans grâce à mon père qui s'est lancé dans le tourisme. Je voulais des revenus complémentaires à mon CDI parce que ce que je gagnais n'était pas suffisant comparé au train de vie qu'on visait avec ma fiancée : entretenir le quotidien, acheter une maison, etc. J'ai testé plein de trucs avant, une boutique e-commerce, d'autres projets avec des potes, mais je voulais me former plus sérieusement au marketing digital et à toute la technique que je n'avais pas apprise en école de commerce.",
      ],
    },
    {
      question: "Comment t'as découvert Agencilab ?",
      answer: [
        "J'étais dans une période compliquée en école. Période post-covid, beaucoup de sorties, pas hyper productif, je sentais que j'étais rentré dans un cercle vicieux. La première chose que j'ai essayée pour en sortir c'est de nettoyer mes algorithmes. Je suis un gros consommateur YouTube, donc petit à petit en gardant un peu de discipline perso, je suis tombé sur ta chaîne.",
        "J'ai vraiment apprécié le ton que tu utilisais, je nous voyais à peu près la même année, je t'ai trouvé hyper inspirant. De fil en aiguille je suis allé dans la description d'une de tes vidéos, j'ai trouvé le lien, je me suis dit : ça correspond. Ton discours me parlait à 100%. Et c'est pour moi ce qui a été un gage de confiance : pouvoir te suivre, en sachant que je m'engageais avec quelqu'un dont le discours me parlait vraiment.",
      ],
    },
    {
      question: "C'était quoi tes doutes et tes peurs au moment de te lancer ?",
      answer: [
        "Le prix d'abord. J'ai financé en perso, c'était une bonne partie de ce que j'avais de côté. Du coup je me suis dit : vu l'investissement, il faut absolument que ce soit rentable. J'avais cette pression de me donner à fond, de suivre l'accompagnement de manière assidue, de faire un maximum de modules pour être sûr d'avoir mon retour.",
        "Et puis cette peur classique aussi : est-ce que je vais pas me faire arnaquer ? Avec ce qu'on voit en ligne, on est tous un peu sur la défensive. La réponse a été assez vite : au fur et à mesure des modules, j'ai retrouvé exactement l'état d'esprit que je recherchais et que j'avais déjà commencé à mettre en place depuis quelques mois. Ça a clairement nourri ce mindset Growth Marketer. Aujourd'hui un an et demi après, je suis honnêtement quelqu'un de complètement différent.",
      ],
    },
    {
      question: "Tu vends quoi concrètement à tes clients ?",
      answer: [
        "Je suis dans le courtage en énergie. Mon job c'est de mettre en concurrence le contrat d'électricité ou de gaz d'une entreprise (ou d'un professionnel) avec l'ensemble du marché. La plupart du temps le marché est plus compétitif qu'un seul fournisseur, donc je propose des économies au client. Et le truc cool c'est qu'il n'y a aucun frais direct pour lui : c'est le fournisseur qui me rétribue une commission à la signature.",
        "Le marché est quasiment infini parce que tout le monde consomme de l'énergie à partir du moment où il a un SIRET. Et le modèle est récurrent : un contrat se signe pour 36 mois en moyenne et 14 mois avant l'échéance je peux le renégocier et le re-signer. Donc je construis un portefeuille qui se régénère tout seul. À peu près 50% de marge nette parce que je rétribue 50% à mes apporteurs d'affaires.",
      ],
    },
    {
      question: "Comment t'organises-tu entre ton CDI et ta boîte ?",
      answer: [
        "Mon CDI c'est essentiellement de l'opérationnel et j'arrive à plier mes tâches en 3-4 heures par jour. Ça me libère beaucoup de temps pour ma boîte. Au total je dois être à une quarantaine d'heures sur mon activité de courtage en plus du CDI 35h. C'est chargé mais c'est gérable parce que je suis très assidu sur la gestion de l'agenda. J'ai deux comptes Google bien distincts, je suis organisé pour switcher d'un projet à l'autre rapidement.",
        "Pourquoi je garde le CDI alors que ma boîte fait déjà mieux ? Deux raisons. La première c'est familiale : c'est la boîte familiale, je dois rester un pied dedans. La deuxième c'est pratique : avec ma fiancée on prépare l'achat d'un appartement et avoir un CDI c'est beaucoup plus rassurant pour une banque. Donc à l'horizon fin 2025, je reste un pied là-dedans, mais c'est un choix, pas une nécessité.",
      ],
    },
    {
      question: "Comment t'as développé ton équipe et tes apporteurs d'affaires ?",
      answer: [
        "Au début je cherchais des apporteurs un peu partout : LinkedIn, autour de moi. Puis je me suis dit : autant envoyer un message sur l'incubateur Agencilab. Logique : on a fait le même accompagnement, on est dans le même mood, le même mindset, donc ça va forcément coller plus vite. J'ai eu pas mal de retours, des gens hyper chauds. Aujourd'hui j'ai commencé à verser plusieurs commissions à des membres Agencilab.",
        "Pour les premiers recrutements en général, ce qui marche c'est d'avoir tes process bien définis avant d'embaucher, et surtout d'avoir trop de choix pour choisir la bonne personne. Quand tu n'as pas assez de choix, tu ne fais jamais les meilleurs choix : tu prends par défaut. Et un conseil important : commence en freelance ou en apport d'affaires, pas en CDI. Un freelance, s'il ne convient pas, tu peux gérer simplement. Un salarié, tu as des ruptures qui peuvent coûter cher, et tu dois être sûr que ton activité tient.",
      ],
    },
    {
      question: "C'est quoi la compétence que tu as vraiment développée grâce à Agencilab ?",
      answer: [
        "Le mass mailing. C'est en regardant les tutoriels d'opération que j'ai commencé à creuser. Je me suis rapproché de boîtes qui mettent en place ce genre de prospection, j'ai combiné plusieurs SaaS (Lemlist pour l'envoi, Phantom Buster + Sales Navigator pour le sourcing, Drop Contact pour récupérer les emails), et j'ai pu lancer mes premières campagnes en générant des bases hyper ciblées pour mon marché.",
        "Aujourd'hui j'envoie près de 10 000 emails par mois. Mes premiers clients, les plus durs à signer, je les ai eus comme ça. Et après c'est ce qui m'a servi d'exemple pour les suivants. J'ai appris à warm-up des noms de domaine, à faire de l'A/B testing, à analyser les taux d'ouverture. C'est devenu une machine à prospecter qui me remplit l'agenda toute seule.",
      ],
    },
    {
      question: "Qu'est-ce qui a changé autour de toi au-delà des chiffres ?",
      answer: [
        "Disons que sur le plan financier, ce qui change c'est surtout la sérénité. Je n'ai plus besoin de scruter mes dépenses, je suis beaucoup plus tranquille de ce côté. Mais le plus gros impact c'est sur ma personnalité : je suis devenu quelqu'un d'efficace, d'optimisé, de discipliné. Avant j'étais plus nébuleux, plus dans le superflu. Je pense que ça a un impact sur tous les gens autour de moi, ma famille, mes amis, ma fiancée.",
        "Et puis j'ai pris du poids dans le bon sens du terme, forcément ma fiancée apprécie. Je me suis remis au sport, à la marche, à la nutrition. Honnêtement je suis quelqu'un de totalement différent depuis cette année et demie.",
      ],
    },
    {
      question: "Si quelqu'un hésite encore à rejoindre Agencilab, tu lui dirais quoi ?",
      answer: [
        "Si l'hésitation que vous avez c'est celle que j'avais — « est-ce que ça va être rentable, est-ce que je me fais pas arnaquer » — franchement, allez-y les yeux fermés. Ça fait plus d'un an que je suis là et je continue à apprendre. Je viens de refaire un coaching avec Anaël sur du media buying pour mon activité.",
        "Au-delà des coachings hebdomadaires (qui sont compris, avec plusieurs coachs), il y a surtout l'accompagnement en lui-même, les modules, les tutoriels d'opérations. C'est une mine d'or, surtout pour les personnes curieuses, autodidactes, qui ont envie. À l'époque le coût me paraissait important pour mes finances. Aujourd'hui, ce n'est pas tellement que mes finances ont augmenté, c'est que ma vision de la valeur de l'accompagnement est bien supérieure au prix que j'avais payé.",
      ],
    },
    {
      question: "Quels sont tes objectifs pour 2026 ?",
      answer: [
        "L'objectif sur 2026 c'est 500 000€ de chiffre d'affaires. Si je projette mes 100k€ sur 6 mois en année pleine, ça fait 200k€, donc je veux au moins doubler. Et au mois de septembre 2026 j'aimerais bien faire mon premier mois à 100 000€. Avec les apporteurs d'affaires en place, ce n'est plus qu'envisageable, c'est probable si je tiens la prospection.",
        "Au-delà du chiffre, je suis dans une phase de structuration : on vient de passer sur HubSpot pour le CRM (j'étais avant en mode beaucoup trop fouillis), je me forme à l'immobilier pour réinvestir, je discute holdings avec mon expert-comptable, et je réfléchis à comment ouvrir mon capital à mon bras droit qui pousse fort. L'idée c'est de construire une boîte qui tourne sans moi pour que je puisse me lancer dans d'autres affaires à côté.",
      ],
    },
  ],

  publishedAt: "2026-05-12",
  featured: true,
  draft: false,
};

export default reussite;
