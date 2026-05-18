import type { Metadata } from "next";
import BackLink from "@/components/BackLink";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente · Agencilab",
  description:
    "Conditions Générales de Vente des services Agencilab édités par ESQ. AGENCY.",
};

type Article = { titre: string; paragraphes: string[]; liste?: string[] };

const ARTICLES: Article[] = [
  {
    titre: "Préambule",
    paragraphes: [
      "Les présentes Conditions Générales de Vente (ci-après les « CGV ») constituent le socle de la relation commerciale entre la société ESQ. AGENCY, exploitant la marque « Agencilab », et toute personne procédant à l'achat d'un service par l'intermédiaire du site internet agencilab.com.",
      "Elles ont vocation à définir, de manière complète et transparente, les droits et obligations respectifs des parties dans le cadre de la vente des services proposés. Le Client est invité à les lire attentivement avant toute commande et à les conserver.",
      "Le fait pour le Vendeur de ne pas se prévaloir, à un moment donné, de l'une quelconque des stipulations des présentes CGV ne saurait être interprété comme une renonciation à s'en prévaloir ultérieurement.",
    ],
  },
  {
    titre: "Objet",
    paragraphes: [
      "Les présentes CGV ont pour objet de définir les conditions dans lesquelles le Vendeur commercialise ses services d'accompagnement et de formation en ligne, et notamment le programme « Cash Cow Express », au profit de tout Client.",
      "Elles précisent notamment les conditions de commande, de prix, de paiement, d'accès, de durée, de résiliation et de responsabilité applicables auxdits services.",
    ],
  },
  {
    titre: "Champ d'application",
    paragraphes: [
      "Les présentes CGV s'appliquent à l'ensemble des ventes de services conclues via le Site, sans restriction ni réserve, à l'exclusion de tout autre document.",
      "Elles s'appliquent aussi bien aux Clients consommateurs qu'aux Clients professionnels, étant précisé que certaines stipulations protectrices ne bénéficient qu'aux seuls consommateurs au sens du Code de la consommation.",
      "Toute condition contraire posée par le Client serait, à défaut d'acceptation expresse et écrite du Vendeur, inopposable à ce dernier, quel que soit le moment où elle aurait pu être portée à sa connaissance.",
    ],
  },
  {
    titre: "Identification du Vendeur",
    paragraphes: [
      "Le Vendeur est la société ESQ. AGENCY (Agencilab), Société par Actions Simplifiée (SAS) au capital de 1 200,00 €, dont le siège social est situé au 45 Quai Docteur Gailleton, 69002 Lyon, France.",
      "SIRET : 921 853 297 00023. Adresse électronique de contact : contact@agencilab.com.",
    ],
  },
  {
    titre: "Définitions",
    paragraphes: [
      "Pour l'application des présentes CGV, les termes ci-après ont la signification suivante :",
    ],
    liste: [
      "« Client » : toute personne physique ou morale procédant à l'achat d'un Service sur le Site.",
      "« Consommateur » : tout Client personne physique agissant à des fins n'entrant pas dans le cadre de son activité commerciale, industrielle, artisanale ou libérale.",
      "« Vendeur » : la société ESQ. AGENCY.",
      "« Service(s) » : l'ensemble des prestations d'accompagnement, de formation en ligne, de coaching et de mise à disposition de contenus numériques proposées par le Vendeur.",
      "« Abonnement » : la souscription à un Service donnant lieu à un paiement récurrent, mensuel ou annuel.",
      "« Site » : le site internet accessible à l'adresse agencilab.com.",
      "« Espace membre » : la plateforme privée donnant accès aux contenus et fonctionnalités du Service.",
      "« Contenu numérique » : tout contenu fourni sous forme dématérialisée (vidéos, documents, modèles, outils, sessions en ligne).",
      "« Partie(s) » : le Vendeur et/ou le Client.",
    ],
  },
  {
    titre: "Documents contractuels",
    paragraphes: [
      "Le contrat conclu entre les Parties est constitué, par ordre de priorité décroissante, des documents suivants : les présentes CGV, le récapitulatif de commande validé par le Client, et toute condition particulière éventuellement convenue par écrit entre les Parties.",
      "En cas de contradiction entre ces documents, le document de rang supérieur prévaut pour la stipulation concernée.",
    ],
  },
  {
    titre: "Acceptation des CGV",
    paragraphes: [
      "La validation d'une commande par le Client emporte acceptation pleine, entière et sans réserve des présentes CGV. Le Client reconnaît en avoir pris connaissance préalablement à sa commande.",
      "Cette acceptation est matérialisée, lors du parcours de commande, par une action positive du Client (notamment la validation du paiement et, le cas échéant, le cochage d'une case dédiée).",
      "Le Client ne peut valablement contracter s'il n'accepte pas les présentes CGV.",
    ],
  },
  {
    titre: "Capacité juridique du Client",
    paragraphes: [
      "Le Client déclare être âgé d'au moins dix-huit (18) ans et disposer de la pleine capacité juridique pour conclure le présent contrat.",
      "Lorsque la commande est passée pour le compte d'une personne morale, la personne physique qui procède à la commande déclare disposer du pouvoir et de l'autorisation nécessaires pour engager ladite personne morale.",
    ],
  },
  {
    titre: "Description des Services",
    paragraphes: [
      "Le Vendeur propose un programme d'accompagnement en ligne destiné à l'apprentissage du Growth Marketing et au lancement d'une activité dans ce domaine.",
      "Le Service « Cash Cow Express » comprend notamment, selon la formule souscrite :",
      "Les Services constituent un accompagnement à caractère pédagogique. Ils ne constituent ni un emploi, ni une promesse de revenus, ni un conseil en investissement, ni un conseil juridique, comptable ou fiscal personnalisé.",
    ],
    liste: [
      "l'accès à une méthode pédagogique structurée ;",
      "des sessions de coaching de groupe organisées en ligne ;",
      "l'accès à une communauté de membres ;",
      "l'accès à des outils, modèles et ressources numériques ;",
      "le cas échéant, des avantages réservés aux membres et, pour la formule annuelle, un appel personnalisé avec le fondateur.",
    ],
  },
  {
    titre: "Évolution des Services",
    paragraphes: [
      "Le Vendeur s'efforce d'améliorer et d'enrichir continuellement ses Services. À ce titre, il se réserve le droit d'en faire évoluer le contenu, le format, l'organisation et les fonctionnalités à tout moment.",
      "De telles évolutions, dès lors qu'elles ne dénaturent pas substantiellement le Service souscrit, n'ouvrent droit à aucune indemnisation ni à aucun remboursement au profit du Client.",
    ],
  },
  {
    titre: "Prérequis techniques",
    paragraphes: [
      "L'accès aux Services nécessite que le Client dispose d'un équipement informatique adapté, d'un navigateur internet à jour et d'une connexion internet suffisante.",
      "Le coût de l'accès à internet et de l'équipement nécessaire demeure à la charge exclusive du Client. Le Vendeur ne saurait être tenu responsable d'une impossibilité d'accès liée à un équipement ou une connexion inadaptés.",
    ],
  },
  {
    titre: "Prix",
    paragraphes: [
      "Les prix des Services sont indiqués en euros et affichés sur le Site au moment de la commande. La formule « Cash Cow Express » est proposée, au choix du Client, en formule mensuelle au prix de 179 € par mois ou en formule annuelle au prix de 997 € par an.",
      "Le prix applicable à une commande est celui en vigueur au jour de la validation de celle-ci. Le régime de Taxe sur la Valeur Ajoutée applicable est précisé, le cas échéant, sur la facture remise au Client.",
    ],
  },
  {
    titre: "Modification des prix",
    paragraphes: [
      "Le Vendeur se réserve le droit de modifier ses prix à tout moment. Les nouveaux prix ne s'appliquent qu'aux commandes passées postérieurement à leur entrée en vigueur.",
      "Les Abonnements en cours se poursuivent au tarif souscrit jusqu'à leur résiliation. En cas de modification du tarif applicable à un Abonnement reconduit, le Client en est informé préalablement et conserve la faculté de résilier dans les conditions prévues aux présentes CGV.",
    ],
  },
  {
    titre: "Codes promotionnels et offres",
    paragraphes: [
      "Le Vendeur peut ponctuellement proposer des codes promotionnels ou des offres commerciales soumis à des conditions particulières (durée de validité, cumul, services éligibles).",
      "Tout code promotionnel est strictement personnel, non cessible, non cumulable sauf mention contraire, et ne peut donner lieu à aucune contrepartie en espèces.",
    ],
  },
  {
    titre: "Processus de commande",
    paragraphes: [
      "La commande est passée directement sur le Site. Le Client sélectionne la formule souhaitée, renseigne les informations nécessaires à la commande et à la facturation, prend connaissance des présentes CGV, puis valide son paiement.",
      "Le Client est seul responsable de l'exactitude et de la complétude des informations qu'il communique. Le Vendeur ne saurait être tenu responsable des conséquences d'une information erronée, incomplète ou obsolète, notamment d'une adresse électronique inexacte empêchant la délivrance des accès.",
      "Avant la validation finale, le Client a la possibilité de vérifier le détail de sa commande et d'en corriger les éventuelles erreurs.",
    ],
  },
  {
    titre: "Formation du contrat",
    paragraphes: [
      "Le contrat est valablement formé à compter de la confirmation du paiement de la commande par le prestataire de paiement.",
      "Le Vendeur adresse alors au Client, par voie électronique, une confirmation de commande récapitulant l'objet, le prix et les modalités du Service souscrit.",
    ],
  },
  {
    titre: "Modalités de paiement",
    paragraphes: [
      "Le paiement s'effectue en ligne par carte bancaire, par l'intermédiaire du prestataire de paiement sécurisé Stripe.",
      "La souscription à un Abonnement vaut mandat donné au Vendeur, par l'intermédiaire de son prestataire de paiement, de procéder au prélèvement automatique et récurrent du montant correspondant à chaque échéance, jusqu'à la résiliation de l'Abonnement.",
      "Le Client garantit qu'il est pleinement autorisé à utiliser le moyen de paiement employé et que celui-ci donne accès à des fonds suffisants.",
    ],
  },
  {
    titre: "Sécurité des paiements",
    paragraphes: [
      "Les opérations de paiement sont traitées par le prestataire Stripe, qui assure la sécurisation et le chiffrement des données bancaires. Le Vendeur n'a accès à aucune donnée bancaire complète du Client et n'en assure aucune conservation.",
      "Le Client est invité à signaler sans délai au Vendeur et à sa banque toute utilisation frauduleuse de son moyen de paiement.",
    ],
  },
  {
    titre: "Défaut de paiement",
    paragraphes: [
      "En cas de rejet, d'échec ou d'incident de paiement, le Vendeur se réserve le droit de suspendre immédiatement et de plein droit l'accès du Client aux Services, sans préavis.",
      "Le Vendeur pourra procéder à de nouvelles tentatives de prélèvement. À défaut de régularisation, l'Abonnement pourra être résilié de plein droit par le Vendeur.",
    ],
  },
  {
    titre: "Facturation",
    paragraphes: [
      "Une facture est mise à la disposition du Client pour chaque paiement effectué. Elle est transmise par voie électronique ou rendue accessible depuis l'Espace membre.",
      "Le Client est invité à conserver ses factures, qui font foi entre les Parties.",
    ],
  },
  {
    titre: "Durée de l'Abonnement",
    paragraphes: [
      "L'Abonnement est souscrit sans durée d'engagement minimale. Il est conclu pour une période initiale d'un (1) mois en formule mensuelle, ou d'un (1) an en formule annuelle, à compter de la confirmation du paiement.",
    ],
  },
  {
    titre: "Reconduction tacite",
    paragraphes: [
      "À l'issue de chaque période, l'Abonnement est reconduit tacitement pour une nouvelle période de durée identique, par prélèvement automatique, tant qu'il n'a pas été résilié dans les conditions des présentes CGV.",
      "Conformément aux dispositions applicables, le Client peut mettre fin à cette reconduction à tout moment, dans les conditions prévues à l'article relatif à la résiliation par le Client.",
    ],
  },
  {
    titre: "Résiliation par le Client",
    paragraphes: [
      "Le Client peut résilier son Abonnement à tout moment, sans frais ni pénalité et sans avoir à justifier d'un motif, en effectuant sa demande depuis son Espace membre ou en contactant le Vendeur à l'adresse contact@agencilab.com.",
      "La résiliation met fin à la reconduction automatique : aucun nouveau prélèvement n'intervient à compter de la prise en compte de la demande. Le Client conserve l'accès aux Services jusqu'au terme de la période en cours déjà réglée.",
      "Les sommes déjà versées au titre de la période en cours ou des périodes antérieures ne font l'objet d'aucun remboursement, conformément aux articles relatifs au droit de rétractation et à l'absence de remboursement. Cette faculté de résiliation à tout moment constitue la garantie « sans engagement » offerte au Client.",
    ],
  },
  {
    titre: "Résiliation par le Vendeur",
    paragraphes: [
      "Le Vendeur pourra résilier de plein droit l'Abonnement, sans indemnité ni remboursement, en cas de manquement du Client à l'une quelconque de ses obligations contractuelles, notamment en cas de défaut de paiement, de partage non autorisé des accès, de comportement contraire à la charte de bonne conduite, ou d'usage frauduleux ou illicite des Services.",
      "Sauf urgence ou gravité particulière, la résiliation est précédée d'une mise en demeure adressée par voie électronique et restée infructueuse pendant un délai raisonnable.",
    ],
  },
  {
    titre: "Suspension de l'accès",
    paragraphes: [
      "Le Vendeur se réserve le droit de suspendre, à titre conservatoire et sans préavis, l'accès du Client aux Services en cas de suspicion de manquement grave, d'incident de paiement, ou de comportement portant atteinte à la sécurité, à l'intégrité ou à la réputation des Services ou de la communauté.",
      "La suspension n'ouvre droit à aucun remboursement ni à aucune indemnité.",
    ],
  },
  {
    titre: "Droit de rétractation et renonciation expresse",
    paragraphes: [
      "Les Services consistent en la fourniture d'un contenu numérique non fourni sur un support matériel, dont l'exécution commence immédiatement après la confirmation de la commande, par l'ouverture des accès à l'Espace membre.",
      "Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture d'un contenu numérique non fourni sur un support matériel dont l'exécution a commencé après accord préalable exprès du consommateur et renoncement exprès à son droit de rétractation.",
      "En conséquence, en validant sa commande, le Client demande expressément l'exécution immédiate des Services avant l'expiration du délai légal de rétractation de quatorze (14) jours, reconnaît expressément renoncer à son droit de rétractation dès l'ouverture de ses accès, et reconnaît être informé qu'il perd, de ce fait, son droit de rétractation une fois l'exécution du contrat commencée.",
    ],
  },
  {
    titre: "Absence de remboursement",
    paragraphes: [
      "Compte tenu de la nature numérique des Services, de leur accès immédiat et de la renonciation expresse du Client à son droit de rétractation, les sommes versées par le Client au titre de sa commande ne donnent lieu à aucun remboursement, total ou partiel, une fois les accès ouverts.",
      "La protection du Client est assurée par sa faculté de résilier son Abonnement à tout moment, laquelle empêche tout prélèvement futur. Le Client reconnaît que cette garantie « sans engagement » se substitue à toute possibilité de remboursement des sommes déjà acquittées.",
      "La présente stipulation ne fait pas obstacle aux droits que le Client consommateur tiendrait de dispositions légales impératives, notamment en matière de garantie légale de conformité.",
    ],
  },
  {
    titre: "Garantie légale de conformité",
    paragraphes: [
      "Le Client consommateur bénéficie de la garantie légale de conformité dans les conditions prévues par le Code de la consommation, notamment pour la fourniture de contenus et de services numériques.",
      "Pour mettre en œuvre cette garantie, le Client adresse sa demande au Vendeur à l'adresse contact@agencilab.com, en décrivant le défaut de conformité allégué.",
    ],
  },
  {
    titre: "Accès aux Services",
    paragraphes: [
      "Après confirmation du paiement, le Vendeur transmet au Client, par voie électronique, les informations nécessaires à l'accès à l'Espace membre. L'accès est en principe ouvert de manière immédiate ou dans un délai raisonnable suivant la commande.",
      "Le Client veille à fournir une adresse électronique valide et à consulter, le cas échéant, ses courriers indésirables. En cas de non-réception, le Client contacte le Vendeur à l'adresse contact@agencilab.com.",
    ],
  },
  {
    titre: "Disponibilité et maintenance",
    paragraphes: [
      "Le Vendeur s'efforce d'assurer la disponibilité des Services vingt-quatre heures sur vingt-quatre. Cette obligation constitue une obligation de moyens.",
      "La responsabilité du Vendeur ne saurait être engagée en cas d'interruption temporaire des Services pour des raisons de maintenance, de mise à jour, de sécurité, ou pour toute cause indépendante de sa volonté, notamment le fait d'un prestataire tiers ou un cas de force majeure.",
    ],
  },
  {
    titre: "Compte personnel et identifiants",
    paragraphes: [
      "L'accès aux Services est strictement personnel. Le Client s'engage à conserver la confidentialité de ses identifiants de connexion et à ne pas les communiquer à des tiers.",
      "Toute connexion ou action effectuée au moyen des identifiants du Client est réputée effectuée par celui-ci. Le Client informe sans délai le Vendeur de toute utilisation non autorisée de son compte.",
      "Tout partage, revente, diffusion, mutualisation ou utilisation collective des accès est strictement interdit et pourra entraîner la suspension ou la résiliation immédiate de l'Abonnement, sans remboursement.",
    ],
  },
  {
    titre: "Obligations et engagements du Client",
    paragraphes: ["Le Client s'engage à :"],
    liste: [
      "utiliser les Services conformément à leur destination, aux présentes CGV et à la réglementation applicable ;",
      "fournir des informations exactes, complètes et à jour ;",
      "ne pas reproduire, diffuser, revendre ou exploiter commercialement les contenus mis à disposition ;",
      "adopter un comportement loyal et respectueux à l'égard du Vendeur, de son équipe et des autres membres ;",
      "ne pas porter atteinte à la sécurité, à l'intégrité ou au bon fonctionnement des Services.",
    ],
  },
  {
    titre: "Charte de bonne conduite",
    paragraphes: [
      "Le Client s'engage, lors de sa participation aux sessions de coaching et aux espaces communautaires, à s'abstenir de tout propos ou comportement injurieux, diffamatoire, discriminatoire, harcelant, ou contraire à l'ordre public et aux bonnes mœurs.",
      "Toute démarche commerciale, publicitaire ou de sollicitation à l'égard des autres membres est interdite, sauf autorisation expresse du Vendeur.",
      "Le non-respect de la présente charte peut entraîner la suspension ou l'exclusion du Client, sans remboursement.",
    ],
  },
  {
    titre: "Propriété intellectuelle",
    paragraphes: [
      "L'ensemble des éléments composant les Services et le Site (contenus pédagogiques, vidéos, documents, méthodes, modèles, outils, textes, images, marques, logos, charte graphique) demeure la propriété exclusive du Vendeur ou de ses ayants droit, et est protégé au titre du droit de la propriété intellectuelle.",
      "Aucune stipulation des présentes CGV ne saurait être interprétée comme emportant cession d'un quelconque droit de propriété intellectuelle au profit du Client.",
    ],
  },
  {
    titre: "Licence d'utilisation",
    paragraphes: [
      "La souscription confère au Client un droit d'accès et d'utilisation personnel, non exclusif, non cessible et non transférable, pour son seul usage privé et pour la durée de son Abonnement.",
      "Toute reproduction, représentation, adaptation, diffusion, mise à disposition ou exploitation, totale ou partielle, des contenus, sans autorisation écrite préalable du Vendeur, est strictement interdite et constitutive de contrefaçon, susceptible d'engager la responsabilité civile et pénale du Client.",
    ],
  },
  {
    titre: "Témoignages et absence de garantie de résultat",
    paragraphes: [
      "Les Services constituent un accompagnement pédagogique. Le Vendeur est tenu à une obligation de moyens et non de résultat.",
      "Les résultats obtenus dépendent de nombreux facteurs propres au Client, notamment de son implication, de son travail, de son expérience, de ses moyens et du contexte de marché. En conséquence, le Vendeur ne garantit aucun revenu, aucun gain, aucun résultat commercial ni aucune réussite particulière.",
      "Les exemples, témoignages, chiffres et cas clients communiqués par le Vendeur sont fournis à titre purement illustratif et informatif. Ils ne constituent ni une promesse, ni une garantie contractuelle, et ne préjugent en rien des résultats susceptibles d'être obtenus par le Client.",
    ],
  },
  {
    titre: "Responsabilité du Vendeur",
    paragraphes: [
      "La responsabilité du Vendeur ne saurait être engagée pour les dommages indirects subis par le Client, tels que la perte de chiffre d'affaires, de bénéfice, de clientèle ou d'image, résultant de l'utilisation ou de l'impossibilité d'utiliser les Services.",
      "En tout état de cause, et dans la limite autorisée par la loi, la responsabilité du Vendeur, si elle venait à être retenue, serait limitée au montant total des sommes effectivement versées par le Client au cours des douze (12) mois précédant le fait générateur.",
      "Le Vendeur ne saurait être tenu responsable de l'usage que le Client fait des contenus, méthodes et conseils diffusés, ni des décisions prises par le Client dans le cadre de son activité.",
    ],
  },
  {
    titre: "Responsabilité du Client",
    paragraphes: [
      "Le Client est seul responsable de l'usage qu'il fait des Services et des contenus mis à sa disposition, ainsi que des conséquences de ses décisions, notamment commerciales, juridiques et fiscales.",
      "Le Client garantit le Vendeur contre tout recours, réclamation ou action de tiers résultant d'un manquement de sa part aux présentes CGV ou à la réglementation applicable.",
    ],
  },
  {
    titre: "Données personnelles",
    paragraphes: [
      "Les données personnelles du Client sont traitées conformément à la réglementation applicable, et notamment au Règlement Général sur la Protection des Données, ainsi qu'à la Politique de confidentialité accessible sur le Site.",
      "Le Client est invité à se reporter à ladite Politique de confidentialité pour connaître la nature des données traitées, les finalités, les durées de conservation et les modalités d'exercice de ses droits.",
    ],
  },
  {
    titre: "Cookies",
    paragraphes: [
      "Le Site est susceptible d'utiliser des cookies et traceurs, dans les conditions précisées au sein de la Politique de confidentialité et, le cas échéant, du bandeau d'information dédié.",
    ],
  },
  {
    titre: "Confidentialité",
    paragraphes: [
      "Chacune des Parties s'engage à conserver confidentielles les informations non publiques dont elle pourrait avoir connaissance à l'occasion de l'exécution du contrat.",
      "Le Client s'engage en particulier à ne pas divulguer à des tiers les contenus, méthodes et informations échangés au sein de l'Espace membre et de la communauté.",
    ],
  },
  {
    titre: "Force majeure",
    paragraphes: [
      "La responsabilité d'une Partie ne pourra être engagée en cas d'inexécution ou de retard d'exécution de l'une de ses obligations résultant d'un cas de force majeure, tel que défini par l'article 1218 du Code civil et la jurisprudence des juridictions françaises.",
      "La Partie affectée informe l'autre Partie dans les meilleurs délais. Si l'empêchement est définitif ou se prolonge, le contrat pourra être résilié de plein droit, sans indemnité de part et d'autre.",
    ],
  },
  {
    titre: "Cession du contrat",
    paragraphes: [
      "Le Client ne peut céder ou transférer le contrat, ni les droits et obligations en résultant, sans l'accord écrit préalable du Vendeur.",
      "Le Vendeur pourra librement céder ou transférer le contrat, notamment dans le cadre d'une opération de restructuration, de fusion ou de cession d'activité, sans que cela ne porte atteinte aux droits du Client.",
    ],
  },
  {
    titre: "Sous-traitance",
    paragraphes: [
      "Le Vendeur se réserve la faculté de recourir à des prestataires et sous-traitants de son choix pour l'exécution de tout ou partie des Services, notamment pour l'hébergement, le paiement et la diffusion des contenus.",
      "Le Vendeur demeure responsable, à l'égard du Client, de la bonne exécution des Services.",
    ],
  },
  {
    titre: "Convention de preuve",
    paragraphes: [
      "Les Parties conviennent que les données enregistrées par le Vendeur et ses prestataires, notamment les courriers électroniques, les journaux de connexion et les enregistrements de paiement, font foi entre elles et constituent des moyens de preuve recevables.",
    ],
  },
  {
    titre: "Non-renonciation",
    paragraphes: [
      "Le fait, pour l'une des Parties, de ne pas se prévaloir d'un manquement de l'autre Partie à l'une quelconque des obligations des présentes CGV ne saurait être interprété comme une renonciation à se prévaloir ultérieurement d'un tel manquement.",
    ],
  },
  {
    titre: "Nullité partielle",
    paragraphes: [
      "Si l'une quelconque des stipulations des présentes CGV était déclarée nulle, illicite ou inapplicable, en tout ou partie, les autres stipulations conserveraient leur pleine force et leur plein effet.",
      "La stipulation concernée serait remplacée par une stipulation valable de portée économique équivalente, dans la mesure du possible.",
    ],
  },
  {
    titre: "Modification des CGV",
    paragraphes: [
      "Le Vendeur se réserve le droit de modifier les présentes CGV à tout moment. Les CGV applicables à une commande sont celles acceptées par le Client au moment de cette commande.",
      "Les modifications n'ont pas d'effet rétroactif sur les commandes déjà passées. En cas de modification substantielle applicable à un Abonnement reconduit, le Client en est informé et conserve la faculté de résilier.",
    ],
  },
  {
    titre: "Service client et réclamations",
    paragraphes: [
      "Pour toute question ou réclamation relative aux Services, le Client peut contacter le service client du Vendeur à l'adresse contact@agencilab.com. Le Vendeur s'efforce d'apporter une réponse dans les meilleurs délais.",
    ],
  },
  {
    titre: "Médiation de la consommation",
    paragraphes: [
      "Conformément aux articles L.612-1 et suivants du Code de la consommation, le Client consommateur a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige l'opposant au Vendeur, après avoir adressé à ce dernier une réclamation écrite préalable.",
      "Les coordonnées du médiateur de la consommation compétent sont communiquées au Client sur simple demande. Le Client consommateur peut également recourir à la plateforme européenne de règlement en ligne des litiges.",
    ],
  },
  {
    titre: "Langue du contrat",
    paragraphes: [
      "Les présentes CGV sont rédigées en langue française. En cas de traduction dans une ou plusieurs langues étrangères, seule la version française fera foi en cas de litige.",
    ],
  },
  {
    titre: "Droit applicable",
    paragraphes: [
      "Les présentes CGV et le contrat qu'elles régissent sont soumis au droit français.",
    ],
  },
  {
    titre: "Juridiction compétente",
    paragraphes: [
      "En cas de litige et à défaut de résolution amiable, les tribunaux français seront seuls compétents.",
      "Lorsque le Client a la qualité de consommateur, les règles de compétence territoriale applicables sont celles prévues par les dispositions légales impératives le concernant.",
    ],
  },
];

export default function CGV() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 text-white/70">
      <div className="mb-8">
        <BackLink />
      </div>
      <h1 className="mb-3 text-3xl font-bold text-white">
        Conditions Générales de Vente
      </h1>
      <p className="mb-10 text-sm text-white/40">
        Dernière mise à jour : 17 mai 2026
      </p>

      <div className="space-y-8 text-sm leading-relaxed">
        {ARTICLES.map((article, i) => (
          <section key={article.titre}>
            <h2 className="mb-3 text-lg font-semibold text-white">
              {i === 0
                ? article.titre
                : `Article ${i}. ${article.titre}`}
            </h2>
            {article.paragraphes.map((p, j) => (
              <p key={j} className={j > 0 ? "mt-2" : undefined}>
                {p}
              </p>
            ))}
            {article.liste && (
              <ul className="mt-3 list-disc space-y-1 pl-5">
                {article.liste.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
