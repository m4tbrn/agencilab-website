/**
 * Contenu du pitch deck de L'Incubateur (par Agencilab).
 *
 * Consolidation des deux drafts de travail en un deck unique et cohérent.
 * Les slides sont regroupées en sections ; chaque section ouvre sur une
 * slide "divider". Le shell visuel (cadre, navigation, progression) est
 * géré par Deck.tsx — ici on ne décrit que le contenu.
 *
 * Chiffres et formulations repris fidèlement du draft fourni par Mathis.
 * Les éléments encore en attente (graphiques, screenshots) sont marqués
 * via <Todo>.
 */
import type { ReactNode } from "react";
import {
  Accent,
  BulletList,
  Card,
  ColHeader,
  Eyebrow,
  Gold,
  Lead,
  NumberedList,
  Pill,
  Quote,
  Stat,
  StatGrid,
  Title,
  TwoCol,
} from "./components";

export type SlideKind = "cover" | "divider" | "content" | "full";

export type Slide = {
  /** Identifiant stable (utilisé pour les ancres / clés React) */
  id: string;
  /** Section logique — affichée dans la barre de progression */
  section: string;
  kind: SlideKind;
  render: () => ReactNode;
  /** Image de fond plein écran optionnelle (chemin depuis /public). */
  bg?: string;
};

/* Placeholder visuel pour le contenu pas encore finalisé (visuels à venir). */
function Todo({ children }: { children: ReactNode }) {
  return (
    <div className="mt-7 flex w-full max-w-[620px] items-center gap-3 rounded-xl border border-dashed border-gold-400/40 bg-gold-400/[0.05] px-5 py-4 text-[0.85rem] text-gold-400/90">
      <span aria-hidden>🎬</span>
      <span>{children}</span>
    </div>
  );
}

const S = {
  presentation: "Présentation",
  marche: "Le marché",
  modele: "Le modèle économique",
  piliers: "L'Incubateur",
  preuves: "Témoignages",
  closing: "Closing",
} as const;

export const SLIDES: Slide[] = [
  /* ==========================================================
     SECTION 1 — PRÉSENTATION
     ========================================================== */
  {
    id: "cover",
    section: S.presentation,
    kind: "cover",
    render: () => (
      <>
        <Pill tone="gold">Pitch deck</Pill>
        <h1 className="mt-7 text-balance text-[2.4rem] font-black leading-[1.05] tracking-tight text-white md:text-[4rem]">
          L'Incubateur,
          <br />
          <span className="text-accent-300">par Agencilab</span>
        </h1>
        <p className="mt-6 max-w-[620px] text-pretty text-[1.05rem] leading-relaxed text-white/70 md:text-[1.25rem]">
          Le système pour lancer ton{" "}
          <Gold>Agence à Revenus Composés</Gold>, depuis zéro.
        </p>
        <p className="mt-4 max-w-[600px] text-[0.95rem] leading-relaxed text-white/50 md:text-[1.05rem]">
          Un accompagnement structuré, basé sur des process réels, utilisés
          par une agence déjà établie et des dizaines de nouveaux
          entrepreneurs qui se lancent chaque semaine.
        </p>
      </>
    ),
  },
  {
    id: "louis",
    section: S.presentation,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Qui est derrière ?</Eyebrow>
        <Title>
          Louis Esquier, fondateur d'Agencilab et co-fondateur de Balistique
        </Title>
        <Quote author="Louis Esquier">
          Je documente publiquement ce que je fais depuis des années. Tout est
          visible et vérifiable.
        </Quote>
        <BulletList
          items={[
            "25 ans, originaire du Puy-en-Velay",
            <>
              Auteur de <Accent>« Deviens le premier millionnaire de ta famille »</Accent>
            </>,
            "+270 000 abonnés sur YouTube",
            "+20 000 abonnés sur Instagram",
          ]}
        />
      </>
    ),
  },
  {
    id: "balistique",
    section: S.presentation,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>L'agence</Eyebrow>
        <Title>
          Balistique : l'agence créée en 2019, toujours active aujourd'hui
        </Title>
        <StatGrid>
          <Stat value="+13M€" label="générés pour nos clients" />
          <Stat value="1,1M€" label="de CA annuel" tone="gold" />
          <Stat value="+56" label="clients accompagnés" />
          <Stat value="2019" label="année de création" tone="white" />
        </StatGrid>
        <p className="mt-7 text-[0.95rem] font-semibold text-white/70">
          On est la stratégie marketing derrière :
        </p>
        <BulletList
          items={[
            "Nassim Sahili — 1,1M d'abonnés YouTube",
            "Les Moustachus en Vadrouille — 200 000 abonnés Instagram",
            "Pierre Jousserand — 209 000 abonnés YouTube",
            "Valek — 400 000 abonnés YouTube",
            "Alain Ngalani — 1,2M d'abonnés Instagram",
          ]}
        />
        <p className="mt-5 max-w-[600px] text-[0.85rem] italic text-white/45">
          Et des dizaines de petites entreprises locales et PME qui n'ont pas
          de grande présence sur les réseaux sociaux.
        </p>
      </>
    ),
  },
  {
    id: "agencilab",
    section: S.presentation,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>L'école</Eyebrow>
        <Title>Une école conçue par des entrepreneurs, pour devenir entrepreneur</Title>
        <Lead>
          Agencilab a été créée en janvier 2023, 4 ans après les débuts de
          l'agence Balistique.
        </Lead>
        <StatGrid>
          <Stat value="+1 050" label="élèves accompagnés" />
          <Stat value="+1,5M€" label="générés par nos élèves" tone="gold" />
          <Stat value="+1 600€" label="par mois en moyenne" />
          <Stat value="52 jours" label="pour rentabiliser en moyenne" tone="white" />
        </StatGrid>
      </>
    ),
  },
  {
    id: "credibilite",
    section: S.presentation,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Pourquoi nous croire</Eyebrow>
        <Title>« Internet, c'est plein d'arnaques » — on est d'accord</Title>
        <Lead>
          C'est exactement pour ça qu'on a fait le choix inverse : tout est
          public, nommé et vérifiable.
        </Lead>
        <BulletList
          items={[
            <>
              <Accent>Une vraie agence</Accent>, Balistique, créée en 2019 et
              active aujourd'hui, avec des clients que tu peux retrouver en ligne
            </>,
            <>
              <Accent>Un fondateur 100% public</Accent> : Louis documente tout
              sur YouTube depuis des années, rien n'est caché
            </>,
            <>
              <Accent>Des élèves qui parlent en leur nom</Accent>, avec prénom,
              ville et résultats datés
            </>,
            <>
              <Accent>Une société déclarée</Accent> : ESQ. AGENCY, SAS basée à
              Lyon
            </>,
          ]}
        />
      </>
    ),
  },

  /* ==========================================================
     SECTION 2 — LE MARCHÉ
     ========================================================== */
  {
    id: "div-marche",
    section: S.marche,
    kind: "divider",
    render: () => (
      <>
        <Eyebrow tone="gold">Partie 1</Eyebrow>
        <h2 className="text-balance text-[2.2rem] font-black leading-[1.1] tracking-tight text-white md:text-[3.4rem]">
          Pourquoi L'Incubateur ?
        </h2>
        <Lead>Le marché a radicalement changé. Voici ce que personne ne voit.</Lead>
      </>
    ),
  },
  {
    id: "pain-perso",
    section: S.marche,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Tu te reconnais ?</Eyebrow>
        <Title>Le vrai déclencheur, ce n'est pas l'argent. C'est le ras-le-bol.</Title>
        <Lead>
          Voici, mot pour mot, ce que disent les gens qui décident enfin de
          changer :
        </Lead>
        <div className="mt-6 flex w-full max-w-[680px] flex-col gap-2.5">
          {[
            "« J'en ai marre de me lever, travailler, revenir à la maison. »",
            "« Je suis pieds et mains liés avec un contrat, 5 semaines de congé par an. »",
            "« J'en ai marre de procrastiner sur mon sort, ça fait deux ans que ça dure. »",
            "« Je veux être mon propre patron, ne plus dépendre de quelqu'un. »",
          ].map((q) => (
            <div
              key={q}
              className="rounded-xl border-l-2 border-accent-400/60 bg-white/[0.03] px-4 py-3 text-[0.95rem] italic leading-relaxed text-white/80 md:text-[1.05rem]"
            >
              {q}
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "marche-covid",
    section: S.marche,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Le contexte</Eyebrow>
        <Title>Le marché a radicalement changé depuis le COVID</Title>
        <BulletList
          items={[
            "Les entreprises ont compris qu'elles devaient être visibles en ligne",
            "L'IA a accéléré la production marketing",
            "Les coûts publicitaires ont explosé",
            "La concurrence s'est digitalisée",
          ]}
        />
        <Card tone="accent" className="mt-7 max-w-[640px]">
          <p className="text-[0.97rem] leading-relaxed text-white/85 md:text-[1.05rem]">
            Toutes les entreprises ont besoin de marketing, mais pas toutes
            savent le faire, et encore moins savent utiliser l'IA
            correctement. <Accent>Il y a une explosion de la demande.</Accent>
          </p>
        </Card>
      </>
    ),
  },
  {
    id: "marche-tension",
    section: S.marche,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Le déséquilibre</Eyebrow>
        <Title>Trop de clients, pas assez de bonnes agences</Title>
        <TwoCol>
          <Card tone="accent">
            <ColHeader tone="accent">Chaque mois, les entreprises cherchent</ColHeader>
            <BulletList
              items={[
                "Des experts SEO",
                "Des gestionnaires Facebook Ads et Google Ads",
                "Des copywriters",
                "Des experts en tunnels de vente",
                "Des intégrateurs IA",
              ]}
            />
          </Card>
          <Card tone="red">
            <ColHeader tone="red">Mais la majorité des agences</ColHeader>
            <BulletList
              tone="red"
              items={[
                "Refusent des clients",
                "Sont débordées",
                "Sous-traitent mal",
                "Recrutent dans l'urgence",
              ]}
            />
          </Card>
        </TwoCol>
        <p className="mt-6 text-[1.1rem] font-bold text-white">
          Le marché est en tension.
        </p>
      </>
    ),
  },
  {
    id: "marche-penurie",
    section: S.marche,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>La pénurie cachée</Eyebrow>
        <Title>« Le marché est saturé » — vraiment ?</Title>
        <Lead>
          Le marché est saturé... de prestataires médiocres. Les entreprises
          ne cherchent pas <Accent>moins d'agences</Accent>. Elles cherchent
          de <Gold>meilleures agences</Gold>.
        </Lead>
        <BulletList
          tone="gold"
          items={[
            "Des agences fiables",
            "Structurées",
            "Rapides",
            "Capables d'utiliser l'IA",
            "Capables de livrer proprement",
          ]}
        />
        <Card tone="gold" className="mt-7 max-w-[600px]">
          <p className="text-[1rem] font-bold text-white md:text-[1.12rem]">
            La pénurie n'est pas sur la demande. Elle est sur la compétence.
          </p>
        </Card>
      </>
    ),
  },
  {
    id: "marche-trou",
    section: S.marche,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>L'opportunité</Eyebrow>
        <Title>Le trou immense dans le marché</Title>
        <Lead>Deux mondes ne se rencontrent pas :</Lead>
        <NumberedList
          items={[
            "Des entreprises qui cherchent à déléguer leur marketing",
            "Des individus qui veulent devenir libres financièrement",
          ]}
        />
        <p className="mt-6 max-w-[600px] text-[0.97rem] leading-relaxed text-white/65 md:text-[1.05rem]">
          Entre les deux ? Un manque de structure, de méthode et de cadre.
        </p>
        <Card tone="accent" className="mt-6 max-w-[620px]">
          <p className="text-[1rem] font-bold text-white md:text-[1.12rem]">
            L'Incubateur existe pour connecter ces deux mondes.
          </p>
        </Card>
      </>
    ),
  },
  {
    id: "marche-balistique-satur",
    section: S.marche,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>L'origine de l'idée</Eyebrow>
        <Title>Pourquoi on a créé L'Incubateur</Title>
        <Lead>
          L'agence Balistique est saturée. Entre la chaîne YouTube, le
          développement de l'Incubateur et la gestion quotidienne de
          l'agence, on reçoit plus de demandes que notre infrastructure ne
          peut en absorber.
        </Lead>
        <BulletList
          items={[
            "Des entreprises cherchent des prestataires marketing compétents",
            "Des agences cherchent des profils formés pour les aider",
            "Le marché est en pénurie",
          ]}
        />
        <p className="mt-6 max-w-[620px] text-[0.97rem] leading-relaxed text-white/70 md:text-[1.05rem]">
          Plutôt que de refuser ces opportunités, on a décidé de créer un
          écosystème d'agences formées à nos méthodes :{" "}
          <Accent>
            notre méthodologie, nos process et notre manière de faire
          </Accent>
          , pour un vrai gage de qualité.
        </p>
      </>
    ),
  },
  {
    id: "marche-pourquoi-maintenant",
    section: S.marche,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Le timing</Eyebrow>
        <Title>Pourquoi maintenant ?</Title>
        <Lead>L'IA redistribue les cartes.</Lead>
        <TwoCol>
          <Card>
            <ColHeader>Aujourd'hui</ColHeader>
            <p className="text-[0.95rem] leading-relaxed text-white/75">
              Un débutant structuré + l'IA peut livrer ce qui demandait 5 ans
              d'expérience avant.
            </p>
          </Card>
          <Card tone="gold">
            <ColHeader tone="gold">Dans 3 ans</ColHeader>
            <p className="text-[0.95rem] leading-relaxed text-white/85">
              Ce sera la norme. Ceux qui s'installent maintenant profitent
              d'un effet de levier énorme. Ceux qui attendent entreront dans
              un marché bien plus compétitif.
            </p>
          </Card>
        </TwoCol>
      </>
    ),
  },

  /* ==========================================================
     SECTION 3 — LE MODÈLE ÉCONOMIQUE
     ========================================================== */
  {
    id: "div-modele",
    section: S.modele,
    kind: "divider",
    render: () => (
      <>
        <Eyebrow tone="gold">Partie 2</Eyebrow>
        <h2 className="text-balance text-[2.2rem] font-black leading-[1.1] tracking-tight text-white md:text-[3.4rem]">
          Le modèle économique
        </h2>
        <Lead>Du revenu plafonné au revenu composé.</Lead>
      </>
    ),
  },
  {
    id: "trois-competences",
    section: S.modele,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Les fondations</Eyebrow>
        <Title>Les trois compétences qui te rendent libre</Title>
        <div className="mt-7 flex w-full max-w-[720px] flex-col gap-3.5">
          <Card tone="accent">
            <ColHeader tone="accent">1. Le marketing en ligne</ColHeader>
            <p className="text-[0.93rem] italic leading-relaxed text-white/80">
              « Si tu sais vendre n'importe quoi, tu n'auras plus aucun
              problème d'argent. »
            </p>
          </Card>
          <Card tone="accent">
            <ColHeader tone="accent">2. L'intelligence artificielle</ColHeader>
            <p className="text-[0.93rem] italic leading-relaxed text-white/80">
              « Si tu sais maîtriser l'IA, tu n'as plus besoin d'être expert
              dans un domaine ni d'avoir une grosse équipe pour gérer un
              business. »
            </p>
          </Card>
          <Card tone="accent">
            <ColHeader tone="accent">3. L'organisation</ColHeader>
            <p className="text-[0.93rem] italic leading-relaxed text-white/80">
              « Si tu sais structurer ton travail, 1h par jour suffit pour
              lancer ton business à côté de ton job ou de tes études. »
            </p>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: "trois-courbes",
    section: S.modele,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>La grande image</Eyebrow>
        <Title>Salariat, business, revenus composés</Title>
        <div className="mt-8 w-full max-w-[760px]">
          <svg
            viewBox="0 0 760 280"
            className="w-full"
            role="img"
            aria-label="Trois courbes de revenus : salariat plat, business en dents de scie, revenus composés exponentiels"
          >
            <line x1="40" y1="240" x2="740" y2="240" stroke="rgba(255,255,255,0.18)" />
            <line x1="40" y1="20" x2="40" y2="240" stroke="rgba(255,255,255,0.18)" />
            {/* Salariat : quasi plat */}
            <path
              d="M40 215 L740 195"
              fill="none"
              stroke="#9ca3af"
              strokeWidth="3"
            />
            {/* Business : dents de scie, négatif au début puis exponentiel */}
            <path
              d="M40 230 L130 250 L210 235 L300 245 L390 200 L480 215 L570 140 L660 90 L740 40"
              fill="none"
              stroke="#FF7A00"
              strokeWidth="3"
            />
            {/* Revenus composés : exponentielle qui se ramifie */}
            <path
              d="M40 235 C260 230 380 160 520 90 C600 50 660 36 740 24"
              fill="none"
              stroke="#015FFF"
              strokeWidth="3.5"
            />
            <path
              d="M520 90 C590 78 640 70 740 70"
              fill="none"
              stroke="#3D85FF"
              strokeWidth="2.5"
              strokeDasharray="5 4"
            />
            <path
              d="M420 138 C500 130 590 120 740 110"
              fill="none"
              stroke="#3D85FF"
              strokeWidth="2.5"
              strokeDasharray="5 4"
            />
          </svg>
          <div className="mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-3">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[0.82rem] text-white/65">
              <span className="font-bold text-[#9ca3af]">Salariat</span> — plat,
              quelques augmentations, baisse à la retraite.
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[0.82rem] text-white/65">
              <span className="font-bold text-gold-400">Business</span> — en
              dents de scie, négatif au début, puis exponentiel.
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-[0.82rem] text-white/65">
              <span className="font-bold text-accent-300">Revenus composés</span>{" "}
              — plusieurs courbes qui découlent d'un même client.
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "salariat",
    section: S.modele,
    kind: "content",
    render: () => (
      <>
        <Eyebrow tone="gold">Courbe 1</Eyebrow>
        <Title>Le problème du salariat : un plafond invisible</Title>
        <BulletList
          tone="red"
          items={[
            "Augmentation lente",
            "Dépend d'un employeur",
            "Tu échanges du temps contre de l'argent",
            "Retraite incertaine",
          ]}
        />
        <Card tone="red" className="mt-7 max-w-[600px]">
          <p className="text-[1rem] font-bold text-white md:text-[1.12rem]">
            Tu échanges ton temps contre un revenu plafonné. Même si tu
            progresses, ton système ne scale pas.
          </p>
        </Card>
        <Quote>
          On finit pieds et mains liés avec un contrat, 5 semaines de congé par
          an, et l'impression de procrastiner sur son propre sort.
        </Quote>
      </>
    ),
  },
  {
    id: "business-classique",
    section: S.modele,
    kind: "content",
    render: () => (
      <>
        <Eyebrow tone="gold">Courbe 2</Eyebrow>
        <Title>Le business classique : l'illusion de liberté</Title>
        <BulletList
          tone="red"
          items={[
            "Revenus instables",
            "Investissement initial élevé",
            "Stock, publicité, logistique",
            "Pression financière constante",
          ]}
        />
        <p className="mt-6 max-w-[620px] text-[0.97rem] leading-relaxed text-white/65 md:text-[1.05rem]">
          Beaucoup veulent entreprendre, mais choisissent des modèles lourds :
          e-commerce, restaurant, start-up tech.{" "}
          <span className="font-bold text-red-400">
            Complexité maximale, risque maximal.
          </span>
        </p>
      </>
    ),
  },
  {
    id: "modele-agence",
    section: S.modele,
    kind: "content",
    render: () => (
      <>
        <Eyebrow tone="gold">Courbe 3</Eyebrow>
        <Title>Le modèle agence : un cashflow intelligent</Title>
        <Lead>Pourquoi c'est le meilleur modèle pour commencer ?</Lead>
        <StatGrid>
          <Stat value="0" label="stock à gérer" />
          <Stat value="Faible" label="capital de départ" />
          <Stat value="Élevées" label="marges" tone="gold" />
          <Stat value="Rapide" label="paiement" />
        </StatGrid>
        <p className="mt-7 max-w-[620px] text-[0.97rem] leading-relaxed text-white/70 md:text-[1.05rem]">
          Tu vends une compétence à forte valeur perçue. Tu n'achètes pas de
          produits, tu ne prends pas de risques logistiques.{" "}
          <Accent>Tu factures ton expertise.</Accent>
        </p>
      </>
    ),
  },
  {
    id: "revenus-composes",
    section: S.modele,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Le passage clé</Eyebrow>
        <Title>Du revenu d'agence au revenu composé</Title>
        <TwoCol>
          <Card tone="red">
            <ColHeader tone="red">Ce que font 90% des agences</ColHeader>
            <p className="text-[0.95rem] font-medium leading-relaxed text-white/80">
              Signer → Livrer → Encaisser → Recommencer
            </p>
          </Card>
          <Card tone="accent">
            <ColHeader tone="accent">Ce qu'on met en place</ColHeader>
            <p className="text-[0.95rem] font-medium leading-relaxed text-white/85">
              Signer → Livrer → Fidéliser → Ajouter → Sous-traiter → Cumuler
            </p>
          </Card>
        </TwoCol>
        <p className="mt-6 text-[0.95rem] font-semibold text-white/70">
          Un client peut devenir : récurrence mensuelle, upsell, cross-sell,
          affiliation, commission interne, partenariat long terme.
        </p>
        <Card tone="gold" className="mt-5 max-w-[560px]">
          <p className="text-[1.05rem] font-bold text-white md:text-[1.18rem]">
            Chaque client devient un actif.
          </p>
        </Card>
      </>
    ),
  },
  {
    id: "exemple-concret",
    section: S.modele,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Exemple concret</Eyebrow>
        <Title>Comment un client à 1 500€ en vaut 10 000€</Title>
        <Lead>
          Tu signes un client à 1 500€. Tu lui livres un service SEO ou Google
          Ads grâce aux process inclus dans l'Incubateur. Puis :
        </Lead>
        <BulletList
          tone="gold"
          items={[
            "Tu ajoutes un tunnel de vente à 2 000€",
            "Tu proposes de l'email marketing en récurrence",
            "Tu ajoutes une automatisation IA",
            "Tu prends une commission sur un outil",
          ]}
        />
        <Card tone="gold" className="mt-7 max-w-[620px]">
          <p className="text-[1rem] font-bold text-white md:text-[1.14rem]">
            En 12 mois, ce client peut valoir +10 000€. Multiplie ça par 5
            clients.
          </p>
        </Card>
      </>
    ),
  },
  {
    id: "effet-reseau",
    section: S.modele,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>L'effet réseau</Eyebrow>
        <Title>Dans le monde des agences, on se partage les clients</Title>
        <Lead>
          Quand une agence est saturée, elle recommande. Quand un élève
          maîtrise un service, il sous-traite pour les autres.
        </Lead>
        <Card tone="accent" className="mt-7 max-w-[560px]">
          <div className="text-[2.4rem] font-black leading-none text-accent-300 md:text-[3.2rem]">
            +100 000€
          </div>
          <p className="mt-2 text-[0.95rem] text-white/75">
            ont circulé entre les membres l'année dernière.
          </p>
        </Card>
        <p className="mt-6 text-[1rem] font-bold text-white">
          Ce n'est pas une promesse. C'est un écosystème vivant.
        </p>
      </>
    ),
  },
  {
    id: "avant-apres",
    section: S.modele,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Avant / maintenant</Eyebrow>
        <Title>Avant c'était compliqué, maintenant c'est simple</Title>
        <Lead>
          Beaucoup de salariés et d'étudiants rêvent d'avoir leur business,
          mais ils ont peur d'échouer, de manquer de compétences, de se lancer
          seuls.
        </Lead>
        <TwoCol>
          <Card tone="red">
            <ColHeader tone="red">Avant</ColHeader>
            <p className="text-[0.93rem] leading-relaxed text-white/80">
              Trouver toute l'information sur internet, faire ses process
              soi-même, apprendre à maîtriser l'IA, tout seul.
            </p>
          </Card>
          <Card tone="accent">
            <ColHeader tone="accent">Maintenant</ColHeader>
            <p className="text-[0.93rem] leading-relaxed text-white/85">
              Accès aux droits d'exploitation des process d'une agence à 1M€/an,
              au réseau d'agences partenaires et au portefeuille d'entreprises
              qui cherchent du marketing. Accompagné par une équipe dédiée à ta
              réussite.
            </p>
          </Card>
        </TwoCol>
      </>
    ),
  },

  /* ==========================================================
     SECTION 4 — L'INCUBATEUR (3 PILIERS)
     ========================================================== */
  {
    id: "div-piliers",
    section: S.piliers,
    kind: "divider",
    render: () => (
      <>
        <Eyebrow tone="gold">Partie 3</Eyebrow>
        <h2 className="text-balance text-[2.2rem] font-black leading-[1.1] tracking-tight text-white md:text-[3.4rem]">
          L'Incubateur en 3 piliers
        </h2>
        <Lead>
          L'Incubateur n'est pas une formation. C'est un écosystème structuré.
        </Lead>
      </>
    ),
  },
  {
    id: "ecosysteme",
    section: S.piliers,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>La structure</Eyebrow>
        <Title>Un écosystème structuré autour de 3 piliers</Title>
        <div className="mt-8 flex w-full max-w-[720px] flex-col gap-3.5">
          <Card tone="accent">
            <ColHeader tone="accent">Pilier 1 — Le contenu</ColHeader>
            <p className="text-[0.92rem] text-white/75">
              Les process réels d'agence, à copier-coller.
            </p>
          </Card>
          <Card tone="accent">
            <ColHeader tone="accent">Pilier 2 — L'accompagnement</ColHeader>
            <p className="text-[0.92rem] text-white/75">
              Un réseau actif d'agences et d'entreprises.
            </p>
          </Card>
          <Card tone="accent">
            <ColHeader tone="accent">Pilier 3 — La culture de la réussite</ColHeader>
            <p className="text-[0.92rem] text-white/75">
              La distribution d'opportunités aux plus engagés.
            </p>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: "pilier-1",
    section: S.piliers,
    kind: "divider",
    render: () => (
      <>
        <Pill tone="accent">Pilier 1</Pill>
        <h2 className="mt-6 text-[2rem] font-black tracking-tight text-white md:text-[3rem]">
          Le contenu
        </h2>
        <Lead>Les process réels d'une agence qui fait 1M€ par an.</Lead>
      </>
    ),
  },
  {
    id: "agencios",
    section: S.piliers,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>agenciOS</Eyebrow>
        <Title>Un programme sur 3 mois pour créer ton Agence à Revenus Composés</Title>
        <div className="mt-8 flex w-full max-w-[720px] flex-col gap-3.5">
          <Card>
            <ColHeader>Mois 1</ColHeader>
            <p className="text-[0.93rem] text-white/75">Signer ton premier client.</p>
          </Card>
          <Card>
            <ColHeader>Mois 2</ColHeader>
            <p className="text-[0.93rem] text-white/75">Signer 5 nouveaux clients.</p>
          </Card>
          <Card tone="gold">
            <ColHeader tone="gold">Mois 3</ColHeader>
            <p className="text-[0.93rem] text-white/85">
              Faire +3 500€/mois grâce aux revenus composés.
            </p>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: "ressources",
    section: S.piliers,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Ressources</Eyebrow>
        <Title>Ressources, modèles et tutoriels</Title>
        <Lead>
          Obtiens une licence d'utilisation pour accéder à toutes les
          ressources, modèles et tutoriels qu'on utilise dans l'agence
          Balistique et dans les agences partenaires, et qui permettent de
          générer <Gold>+1M€ de CA annuel cumulé</Gold>.
        </Lead>
        <Todo>Screenshot de la plateforme à intégrer</Todo>
      </>
    ),
  },
  {
    id: "brics",
    section: S.piliers,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Les BRICs</Eyebrow>
        <Title>Blocs de Revenus Immédiats et Composables</Title>
        <Lead>
          La plupart des nouveaux entrepreneurs bloquent en se disant : « Oui
          mais je ne suis pas compétent. » Les BRICs répondent exactement à ça.
        </Lead>
        <BulletList
          tone="gold"
          items={[
            "Une formation pour apprendre à livrer le service de A à Z",
            "Les tutoriels et process à copier-coller pour bien le délivrer en moins de 24h",
            "Le script pour le vendre entre 1 000 et 3 000€",
          ]}
        />
        <p className="mt-6 max-w-[600px] text-[0.97rem] font-semibold text-white/75">
          Tu ne crées pas tout. Tu exécutes un modèle déjà validé.
        </p>
      </>
    ),
  },
  {
    id: "archetype",
    section: S.piliers,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Ton archétype</Eyebrow>
        <Title>Des services marketing adaptés à ton profil</Title>
        <Lead>
          Choisis, parmi 12 services marketing, celui qui correspond le mieux à
          ton archétype (analytique, créatif, ...).
        </Lead>
        <BulletList
          items={[
            "Copywriting",
            "Email marketing",
            "Tunnels de vente",
            "Facebook Ads",
            "Google Ads",
            "Gestion des réseaux sociaux",
          ]}
        />
        <Todo>Slide à retravailler : finaliser les 12 services et les archétypes</Todo>
      </>
    ),
  },
  {
    id: "alicia",
    section: S.piliers,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Alic.ia</Eyebrow>
        <Title>L'IA intégrée à chaque étape</Title>
        <Lead>
          Alic.ia te forme et t'outille sur tout ce qui décuple ta vitesse
          d'exécution :
        </Lead>
        <BulletList
          tone="gold"
          items={[
            "Prompt engineering (Claude, ChatGPT, Gemini)",
            "Automatisations",
            "Agents IA",
            "Vibe coding",
          ]}
        />
      </>
    ),
  },
  {
    id: "pilier-2",
    section: S.piliers,
    kind: "divider",
    render: () => (
      <>
        <Pill tone="accent">Pilier 2</Pill>
        <h2 className="mt-6 text-[2rem] font-black tracking-tight text-white md:text-[3rem]">
          L'accompagnement
        </h2>
        <Lead>Tu n'avances jamais seul.</Lead>
      </>
    ),
  },
  {
    id: "communaute",
    section: S.piliers,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Communauté</Eyebrow>
        <Title>Une communauté active au quotidien</Title>
        <Lead>
          Des canaux de discussion pour échanger, poser tes questions et
          avancer avec les autres membres.
        </Lead>
        <Card tone="accent" className="mt-7 max-w-[540px]">
          <div className="text-[2.2rem] font-black leading-none text-accent-300 md:text-[3rem]">
            +1 200
          </div>
          <p className="mt-2 text-[0.95rem] text-white/75">
            messages échangés chaque semaine dans la communauté.
          </p>
        </Card>
      </>
    ),
  },
  {
    id: "infanteries",
    section: S.piliers,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Infanteries</Eyebrow>
        <Title>Des groupes de travail, une fois par mois</Title>
        <Lead>
          Tu intègres une « infanterie » : un petit groupe de travail qui se
          réunit chaque mois pour avancer ensemble et se tenir responsable.
        </Lead>
      </>
    ),
  },
  {
    id: "coachings-groupe",
    section: S.piliers,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Coachings de groupe</Eyebrow>
        <Title>3 à 5 appels par semaine</Title>
        <Lead>
          Des coachings dispensés par des chefs d'entreprise qui ont leur
          propre agence de marketing en ligne. Du concret, par des gens qui le
          font.
        </Lead>
        <StatGrid>
          <Stat value="3-5" label="appels par semaine" />
          <Stat value="100%" label="par des opérationnels" tone="gold" />
        </StatGrid>
      </>
    ),
  },
  {
    id: "presentiel",
    section: S.piliers,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Présentiel</Eyebrow>
        <Title>Des cours en présentiel, une fois par mois</Title>
        <Lead>Dans plusieurs villes de France :</Lead>
        <BulletList
          items={["Lyon", "Paris", "Bordeaux", "Rennes", "Strasbourg", "Nice"]}
        />
        <Todo>Carte de France avec les villes à intégrer</Todo>
      </>
    ),
  },
  {
    id: "coaching-prive",
    section: S.piliers,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Coaching privé</Eyebrow>
        <Title>Un suivi individuel, tous les mois</Title>
        <Lead>
          On s'appelle tous les mois en individuel, pour t'aider
          personnellement à avancer, débloquer tes situations et ajuster ta
          stratégie.
        </Lead>
      </>
    ),
  },
  {
    id: "pilier-3",
    section: S.piliers,
    kind: "divider",
    render: () => (
      <>
        <Pill tone="accent">Pilier 3</Pill>
        <h2 className="mt-6 text-[2rem] font-black tracking-tight text-white md:text-[3rem]">
          La culture de la réussite
        </h2>
        <Lead>L'environnement qui transforme l'effort en résultats.</Lead>
      </>
    ),
  },
  {
    id: "sessions-virtuelles",
    section: S.piliers,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Sessions de travail</Eyebrow>
        <Title>On travaille ensemble, en virtuel</Title>
        <Lead>Des sessions de travail collectives pour ne jamais rester bloqué :</Lead>
        <BulletList
          items={["Prospection ensemble", "Livraison ensemble"]}
        />
      </>
    ),
  },
  {
    id: "defis",
    section: S.piliers,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Défis et récompenses</Eyebrow>
        <Title>Ton avancement est récompensé</Title>
        <Lead>
          Gagne du matériel et des voyages au fil de tes défis :
        </Lead>
        <BulletList
          tone="gold"
          items={[
            "MacBook",
            "Bureau assis-debout",
            "Chaise ergonomique",
            "Voyages",
          ]}
        />
        <Card tone="gold" className="mt-6 max-w-[520px]">
          <p className="text-[0.97rem] font-bold text-white md:text-[1.08rem]">
            🏆 Un trophée quand tu franchis les +10 000€ générés.
          </p>
        </Card>
      </>
    ),
  },
  {
    id: "reseau-secret",
    section: S.piliers,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Le réseau secret</Eyebrow>
        <Title>On apporte des clients aux élèves les plus engagés</Title>
        <Lead>
          Tu peux obtenir une certification qui valide tes compétences au sein
          de l'Incubateur. Une fois certifié,{" "}
          <Gold>on t'amène des prospects</Gold> qui cherchent des prestataires
          marketing.
        </Lead>
        <NumberedList
          items={[
            "Tu te formes et tu livres tes premiers clients",
            "Tu passes la certification interne",
            "On te redirige des appels d'offres qualifiés",
          ]}
        />
      </>
    ),
  },
  {
    id: "collaborations",
    section: S.piliers,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Le marché interne</Eyebrow>
        <Title>L'Incubateur n'est pas qu'un programme, c'est un réseau</Title>
        <Lead>
          +100 000€ échangés entre élèves l'an dernier. Concrètement, le réseau
          te permet de :
        </Lead>
        <BulletList
          tone="gold"
          items={[
            "Sous-traiter la livraison de tes clients",
            "Être sous-traité par d'autres agences",
            "Collaborer sur des projets communs",
            "Recruter des talents formés à nos méthodes",
            "Être recruté par une agence d'élève (comme Andréas, qui a déjà recruté plusieurs élèves)",
          ]}
        />
      </>
    ),
  },

  /* ==========================================================
     SECTION 5 — TÉMOIGNAGES
     ========================================================== */
  {
    id: "div-preuves",
    section: S.preuves,
    kind: "divider",
    render: () => (
      <>
        <Eyebrow tone="gold">Partie 4</Eyebrow>
        <h2 className="text-balance text-[2.2rem] font-black leading-[1.1] tracking-tight text-white md:text-[3.4rem]">
          Témoignages et études de cas
        </h2>
        <Lead>Des résultats réels, vérifiables.</Lead>
      </>
    ),
  },
  {
    id: "preuve-sociale",
    section: S.preuves,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Preuve sociale</Eyebrow>
        <Title>Un écosystème qui tourne</Title>
        <StatGrid>
          <Stat value="+1 200" label="messages échangés / semaine" />
          <Stat value="+10 000€" label="par mois pour nos top élèves" tone="gold" />
          <Stat value="95%" label="recommanderaient l'Incubateur" />
          <Stat value="4,6/5" label="d'avis vérifiés sur Trustpilot" tone="white" />
        </StatGrid>
      </>
    ),
  },
  {
    id: "cas-clients",
    section: S.preuves,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Études de cas</Eyebrow>
        <Title>Des parcours réels, nommés et vérifiables</Title>
        <div className="mt-7 grid w-full max-w-[860px] grid-cols-1 gap-2.5 md:grid-cols-2">
          {[
            ["Yohann Becker", "40 000€ en 6 mois, ex-gendarme (Pau)"],
            ["Andréas Mirabel", "15 000€/mois au bout d'1 an (Aix)"],
            ["Barthélémy", "24 000€/mois en 1 an, expatrié en Andorre"],
            ["Matthieu Gavois", "300 000€/mois ces derniers mois (Paris)"],
            ["Jiovanny Louissaint", "50 000€/mois (Paris)"],
            ["Anaël Camerini", "8 000€/mois, devenu coach de l'Incubateur (Lyon)"],
            ["Mathis Baron", "6 000€/mois, agence rachetée par Balistique (Bordeaux)"],
            ["Clément Morel", "Salaire passé à +6 000€/mois sans changer de boîte"],
            ["Charles Michelesi", "5 000€/mois après plusieurs échecs (Lille)"],
            ["Rodolphe Leroy", "2 500€ en 1 client, 2 semaines après l'entrée"],
            ["Marina", "Premiers clients signés en étant mère de famille"],
            ["Solène", "1 500€/mois en parallèle de la fac de médecine"],
          ].map(([name, result]) => (
            <div
              key={name}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
            >
              <div className="text-[0.92rem] font-bold text-white">{name}</div>
              <div className="mt-0.5 text-[0.82rem] leading-snug text-white/60">
                {result}
              </div>
            </div>
          ))}
        </div>
        <Todo>Dossier Notion « Études de cas » à relier ici</Todo>
      </>
    ),
  },

  /* ==========================================================
     SECTION 6 — RÉSUMÉ & CLOSING
     ========================================================== */
  {
    id: "div-closing",
    section: S.closing,
    kind: "divider",
    render: () => (
      <>
        <Eyebrow tone="gold">Partie 5</Eyebrow>
        <h2 className="text-balance text-[2.2rem] font-black leading-[1.1] tracking-tight text-white md:text-[3.4rem]">
          Ce que tu obtiens
        </h2>
      </>
    ),
  },
  {
    id: "dlc",
    section: S.closing,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Extensions</Eyebrow>
        <Title>Les extensions incluses</Title>
        <BulletList
          tone="gold"
          items={[
            "Pack de +51 niches rentables — un document de 10 pages par niche (besoins, offres, positionnement)",
            "Réductions sur les outils, logiciels et matériel",
            "Statut juridique : création, déclaration de revenus, cas particuliers",
            "Accès à un cabinet comptable expert en agences et à des avocats partenaires",
          ]}
        />
      </>
    ),
  },
  {
    id: "resume",
    section: S.closing,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Si on résume</Eyebrow>
        <Title>Tout ce que L'Incubateur t'apporte</Title>
        <TwoCol>
          <Card tone="accent">
            <ColHeader tone="accent">Le contenu</ColHeader>
            <BulletList
              items={[
                "agenciOS — programme 3 mois",
                "Les BRICs et leurs process",
                "Ressources et tutoriels d'agence",
                "Alic.ia — l'IA intégrée",
              ]}
            />
          </Card>
          <Card tone="accent">
            <ColHeader tone="accent">L'accompagnement et le réseau</ColHeader>
            <BulletList
              items={[
                "3 à 5 coachings de groupe / semaine",
                "Présentiel mensuel + suivi individuel",
                "Le réseau secret et ses opportunités",
                "Les extensions (niches, juridique, réductions)",
              ]}
            />
          </Card>
        </TwoCol>
      </>
    ),
  },
  {
    id: "prix",
    section: S.closing,
    kind: "content",
    render: () => (
      <>
        <Eyebrow tone="gold">L'investissement</Eyebrow>
        <Title>Deux façons de te lancer</Title>
        <TwoCol>
          <Card tone="accent">
            <ColHeader tone="accent">L'Incubateur</ColHeader>
            <div className="text-[2rem] font-black leading-none text-accent-300 md:text-[2.6rem]">
              3 600€
            </div>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-white/80">
              Le programme complet : agenciOS, les BRICs, le réseau, les
              coachings de groupe et le présentiel.
            </p>
          </Card>
          <Card tone="gold">
            <ColHeader tone="gold">Le Mentorat</ColHeader>
            <div className="text-[2rem] font-black leading-none text-gold-400 md:text-[2.6rem]">
              6 000$
            </div>
            <p className="mt-3 text-[0.92rem] leading-relaxed text-white/85">
              Tout l'Incubateur + un accompagnement individuel rapproché pour
              aller plus vite et plus loin.
            </p>
          </Card>
        </TwoCol>
        <p className="mt-6 max-w-[600px] text-[0.9rem] text-white/55">
          Paiement en plusieurs fois disponible sur les deux formules.
        </p>
      </>
    ),
  },
  {
    id: "paiement",
    section: S.closing,
    kind: "content",
    render: () => (
      <>
        <Eyebrow>Accessible</Eyebrow>
        <Title>Tu peux étaler ton investissement</Title>
        <Lead>
          Pas besoin de tout sortir d'un coup. On met en place un paiement en
          plusieurs fois pour que tu puisses{" "}
          <Accent>démarrer maintenant</Accent> sans déséquilibrer ton budget.
        </Lead>
        <BulletList
          tone="gold"
          items={[
            "Échéancier sur plusieurs mois, adapté à ta situation",
            "Tu peux réserver ta place avec un premier acompte",
            "Tu démarres le programme dès le premier versement",
          ]}
        />
        <p className="mt-6 max-w-[600px] text-[0.95rem] font-semibold text-white/70">
          L'objectif : que ton premier client rembourse une partie de ton
          investissement avant même la fin de l'échéancier.
        </p>
      </>
    ),
  },
  {
    id: "garantie-client",
    section: S.closing,
    kind: "divider",
    render: () => (
      <>
        <Pill tone="gold">La garantie</Pill>
        <h2 className="mt-7 text-balance text-[2.1rem] font-black leading-[1.1] tracking-tight text-white md:text-[3.2rem]">
          Ton premier client en 3 mois.
          <br />
          <span className="text-gold-400">Sinon, on t'en donne un.</span>
        </h2>
        <p className="mt-6 max-w-[620px] text-pretty text-[1.02rem] leading-relaxed text-white/70 md:text-[1.18rem]">
          Tant que tu appliques la méthode, on s'engage sur ton résultat. Si tu
          n'as pas signé ton premier client sous 3 mois, Agencilab t'en apporte
          un directement. C'est notre engagement, pas une promesse en l'air.
        </p>
      </>
    ),
  },
  {
    id: "garanties",
    section: S.closing,
    kind: "content",
    render: () => (
      <>
        <Eyebrow tone="gold">Garanties</Eyebrow>
        <Title>Tu es protégé</Title>
        <div className="mt-7 flex w-full max-w-[640px] flex-col gap-3.5">
          <Card tone="gold">
            <ColHeader tone="gold">1. Accompagnement jusqu'aux résultats</ColHeader>
            <p className="text-[0.93rem] text-white/85">
              On t'accompagne aussi longtemps qu'il le faut pour que tu aies
              des résultats.
            </p>
          </Card>
          <Card tone="gold">
            <ColHeader tone="gold">2. Garantie 14 jours</ColHeader>
            <p className="text-[0.93rem] text-white/85">
              14 jours pour découvrir l'Incubateur en toute sérénité.
            </p>
          </Card>
        </div>
      </>
    ),
  },
  {
    id: "fin",
    section: S.closing,
    kind: "cover",
    render: () => (
      <>
        <Pill tone="gold">Merci</Pill>
        <h1 className="mt-7 text-balance text-[2.4rem] font-black leading-[1.05] tracking-tight text-white md:text-[3.6rem]">
          Prêt à lancer ton
          <br />
          <span className="text-accent-300">Agence à Revenus Composés</span> ?
        </h1>
        <p className="mt-6 max-w-[560px] text-[1.05rem] leading-relaxed text-white/65 md:text-[1.2rem]">
          L'Incubateur, par Agencilab.
        </p>
      </>
    ),
  },
];
