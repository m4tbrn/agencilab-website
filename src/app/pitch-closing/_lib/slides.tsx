/**
 * Pitch de closing — support visuel de la Phase 10 du Script de Vente Ultime.
 *
 * Chaque slide est en PLEIN ÉCRAN, construite au niveau d'une section du site
 * (rectangle hero-border, split texte/image, profondeur). Contenu aligné sur
 * la VSL V7. Le prospect a déjà vu la VSL et passé la découverte du script.
 */
import Image from "next/image";
import {
  Accent,
  BulletList,
  Card,
  ColHeader,
  FullCenter,
  FullSplit,
  FullStage,
  Gold,
  NumberedList,
  PhotoCard,
  Pill,
  SlideImage,
  Stat,
  StatGrid,
  TwoCol,
} from "../../incubateur/_lib/components";
import type { Slide } from "../../incubateur/_lib/slides";

const S = {
  metier: "Le métier",
  pourquoi: "Pourquoi maintenant",
  offre: "Agencilab",
  decider: "Décider",
} as const;

/** Paragraphe standard dans une slide split (aligné à gauche). */
function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 max-w-md text-[0.97rem] leading-relaxed text-white/60 md:text-[1.08rem]">
      {children}
    </p>
  );
}

export const CLOSING_SLIDES: Slide[] = [
  /* ---------- COVER ---------- */
  {
    id: "cover",
    section: S.metier,
    kind: "full",
    render: () => (
      <FullCenter bg="/images/hero-group.jpg">
        <Pill tone="gold">Agencilab</Pill>
        <h1 className="mt-7 text-balance text-[2.8rem] font-black leading-[1.03] tracking-tight text-white md:text-[4.6rem]">
          Deviens <span className="gradient-text">Growth Marketer</span>
        </h1>
        <p className="mt-6 max-w-[600px] text-[1.1rem] leading-relaxed text-white/75 md:text-[1.3rem]">
          On va voir ensemble, concrètement, comment tu te lances.
        </p>
      </FullCenter>
    ),
  },

  /* ---------- QUI EST LOUIS ---------- */
  {
    id: "louis",
    section: S.metier,
    kind: "full",
    render: () => (
      <FullSplit
        eyebrow="Le fondateur"
        title={
          <>
            Louis <span className="gradient-text">Esquier</span>
          </>
        }
        media={
          <>
            <SlideImage src="/images/louis-conf.jpg" />
            <div className="absolute left-3 right-3 top-3 flex items-center gap-3 rounded-xl border border-white/10 bg-navy-950/55 px-4 py-3 backdrop-blur-xl">
              <Image
                src="/images/favicon.png"
                alt="Agencilab"
                width={32}
                height={32}
                className="h-7 w-7 shrink-0 rounded-lg"
              />
              <div className="flex flex-1 items-center justify-center divide-x divide-white/10">
                <div className="px-3 text-center">
                  <p className="text-sm font-bold text-accent-400">1 018+</p>
                  <p className="text-[9px] text-white/50">accompagnés</p>
                </div>
                <div className="px-3 text-center">
                  <p className="text-sm font-bold text-accent-400">4,7/5</p>
                  <p className="text-[9px] text-white/50">Trustpilot</p>
                </div>
                <div className="px-3 text-center">
                  <p className="text-sm font-bold text-accent-400">200k</p>
                  <p className="text-[9px] text-white/50">abonnés YT</p>
                </div>
              </div>
            </div>
          </>
        }
      >
        <P>
          De vendeur au Slip Français à{" "}
          <Gold>1 400€/mois</Gold>… à fondateur de Balistique, une agence qui
          génère aujourd'hui plus de 150 000€/mois.
        </P>
        <P>
          Il ne gagne pas sa vie en vendant une formation. Il gagne sa vie en
          faisant le métier qu'il enseigne.
        </P>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["14M€", "générés clients"],
            ["+1 000", "élèves"],
            ["6 ans", "de métier"],
            ["3", "clients = 150k€/mois"],
          ].map(([v, l]) => (
            <div key={l} className="glass-card rounded-xl px-3 py-3 text-center">
              <div className="text-[1.2rem] font-black tracking-tight text-accent-400 md:text-[1.45rem]">
                {v}
              </div>
              <div className="mt-0.5 text-[0.68rem] tracking-tight text-white/40">
                {l}
              </div>
            </div>
          ))}
        </div>
      </FullSplit>
    ),
  },

  /* ---------- LA QUESTION ---------- */
  {
    id: "la-question",
    section: S.metier,
    kind: "full",
    render: () => (
      <FullCenter>
        <Pill tone="gold">Avant d'aller plus loin</Pill>
        <h2 className="mt-7 text-balance text-[2rem] font-black leading-[1.12] tracking-tight text-white md:text-[3.2rem]">
          Le <span className="gradient-text">Growth Marketing</span>, tu
          l'expliquerais comment, avec tes mots ?
        </h2>
        <p className="mt-7 max-w-[540px] text-[0.95rem] italic text-white/40">
          (Le closer laisse le prospect répondre, puis enchaîne et clarifie.)
        </p>
      </FullCenter>
    ),
  },

  /* ---------- LE MÉTIER (schéma plein écran) ---------- */
  {
    id: "le-metier",
    section: S.metier,
    kind: "full",
    render: () => {
      const paiements = [
        ["il y a 2 min", "Le Comptoir de Léa", "Restaurant", "+1 500,00 €"],
        ["il y a 1 h", "Maxime Coaching", "Coach sportif", "+1 200,00 €"],
        ["hier", "Horizon Immobilier", "Agence immo", "+2 200,00 €"],
        ["hier", "Atelier Bois & Co", "Artisan", "+1 800,00 €"],
      ];
      return (
        <div className="hero-border flex h-full flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-7 md:px-12">
          <span className="mb-5 block text-center text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accent-400">
            Le Growth Marketing, concrètement
          </span>

          {/* Flux : entreprises → toi → système */}
          <div className="flex flex-col items-stretch justify-center gap-3 lg:flex-row lg:gap-0">
            {/* 1 — les entreprises */}
            <div className="glass-card flex-1 rounded-2xl p-5 lg:max-w-[300px]">
              <div className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/45">
                Les entreprises
              </div>
              <div className="mt-2.5 space-y-1.5">
                {["Restaurants", "Coachs", "Agents immobiliers", "Artisans"].map(
                  (e) => (
                    <div
                      key={e}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.86rem] font-semibold text-white"
                    >
                      {e}
                    </div>
                  ),
                )}
              </div>
              <p className="mt-3 text-[0.8rem] leading-snug text-white/50">
                Elles ont besoin de résultats marketing, mais n'ont ni le temps
                ni les compétences.
              </p>
            </div>

            {/* connecteur */}
            <div className="flex shrink-0 items-center justify-center px-2 lg:w-[64px]">
              <span className="text-[1.4rem] text-accent-400">→</span>
            </div>

            {/* 2 — toi */}
            <div className="glow-gold flex-1 rounded-2xl border-2 border-accent-400/55 bg-accent-400/12 p-5 text-center lg:max-w-[280px]">
              <div className="text-[1.7rem] font-black leading-none text-white">
                Toi
              </div>
              <div className="gradient-text mt-1 text-[1.05rem] font-black">
                Growth Marketer
              </div>
              <p className="mt-2 text-[0.82rem] leading-snug text-white/65">
                Le bras droit marketing des entreprises.
              </p>
            </div>

            {/* connecteur labellisé */}
            <div className="flex shrink-0 flex-col items-center justify-center px-2 lg:w-[120px]">
              <span className="mb-1 text-center text-[0.66rem] font-semibold leading-tight text-white/45">
                tu livres leurs résultats grâce au
              </span>
              <span className="text-[1.4rem] text-gold-400">→</span>
            </div>

            {/* 3 — le système */}
            <div className="flex-1 rounded-2xl border-2 border-gold-400/50 bg-gold-400/10 p-5 lg:max-w-[300px]">
              <div className="text-[1.05rem] font-black text-gold-400">
                Le Système Agencilab
              </div>
              <p className="mt-2 text-[0.82rem] leading-snug text-white/65">
                Des process, des modèles et des outils prêts à l'emploi : tu
                livres en quelques heures ce qui prendrait des semaines à faire
                seul.
              </p>
            </div>
          </div>

          {/* connecteur vers les paiements */}
          <div className="my-3 text-center">
            <span className="text-[0.82rem] text-white/55">
              et chaque entreprise te paie, mois après mois
            </span>
            <div className="mt-0.5 text-[0.9rem] text-[#a3e635]">▼</div>
          </div>

          {/* paiements reçus */}
          <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {paiements.map(([when, name, type, amount]) => (
              <div
                key={name}
                className="glass-card rounded-xl border-[#a3e635]/20 px-3.5 py-3"
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[0.68rem] font-bold uppercase tracking-wide text-[#a3e635]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#a3e635]" />
                    Paiement reçu
                  </span>
                  <span className="text-[0.66rem] text-white/35">{when}</span>
                </div>
                <div className="mt-1.5 text-[0.82rem] font-bold text-white">
                  {name}
                </div>
                <div className="text-[0.7rem] text-white/40">{type}</div>
                <div className="mt-1 text-[1.05rem] font-black text-[#a3e635]">
                  {amount}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-[0.92rem] font-bold text-white">
            Plusieurs milliers d'euros par mois,{" "}
            <span className="gradient-text">en récurrent</span>.
          </p>
        </div>
      );
    },
  },

  /* ---------- LES 2 SERVICES ---------- */
  {
    id: "deux-services",
    section: S.metier,
    kind: "full",
    render: () => (
      <FullStage eyebrow="Concrètement" title="Tu vends 2 choses">
        <TwoCol>
          <Card tone="accent">
            <ColHeader tone="accent">Le site internet</ColHeader>
            <div className="text-[1.8rem] font-black text-accent-400 md:text-[2.3rem]">
              1 000 – 3 000€
            </div>
            <p className="mt-1 text-[0.85rem] text-white/55">
              paiement one-shot
            </p>
          </Card>
          <Card tone="gold">
            <ColHeader tone="gold">La publicité Meta &amp; Google</ColHeader>
            <div className="text-[1.8rem] font-black text-gold-400 md:text-[2.3rem]">
              500 – 2 000€
            </div>
            <p className="mt-1 text-[0.85rem] text-white/55">
              par mois, récurrent
            </p>
          </Card>
        </TwoCol>
        <Card tone="gold" className="mt-4 w-full max-w-[640px] text-center">
          <p className="text-[1.1rem] font-bold text-white md:text-[1.3rem]">
            2 à 3 clients ={" "}
            <span className="gradient-text">2 500 à 3 500€/mois</span> en plus.
          </p>
        </Card>
      </FullStage>
    ),
  },

  /* ---------- LE TWIST IA ---------- */
  {
    id: "twist-ia",
    section: S.metier,
    kind: "full",
    render: () => (
      <FullStage
        eyebrow="Le moment unique"
        eyebrowTone="gold"
        title="L'IA fait le travail technique à ta place"
      >
        <TwoCol>
          <Card tone="red">
            <ColHeader tone="red">Avant</ColHeader>
            <p className="text-[0.95rem] text-white/75">
              Un site = 10 jours de travail + savoir coder.
            </p>
          </Card>
          <Card tone="accent">
            <ColHeader tone="accent">Aujourd'hui</ColHeader>
            <p className="text-[0.95rem] text-white/85">
              Le même site en quelques heures, sans coder.
            </p>
          </Card>
        </TwoCol>
        <p className="mt-5 max-w-[640px] text-[0.97rem] leading-relaxed text-white/65 md:text-[1.05rem]">
          Et l'entreprise paie <Gold>toujours le même prix</Gold>. Elle voit un
          résultat pro, pas le temps que tu y as passé.
        </p>
      </FullStage>
    ),
  },

  /* ---------- LE CERCLE VERTUEUX ---------- */
  {
    id: "cercle-vertueux",
    section: S.metier,
    kind: "full",
    render: () => (
      <FullStage
        eyebrow="Le twist"
        title={
          <>
            La compétence que tu vends{" "}
            <span className="gradient-text">développe ta propre activité</span>
          </>
        }
      >
        <p className="max-w-[680px] text-[1rem] leading-relaxed text-white/65 md:text-[1.12rem]">
          Tu vends du marketing aux entreprises. Et ton activité de Growth
          Marketer, c'est… une activité qui a besoin de marketing.
        </p>
        <Card tone="accent" className="mt-6 w-full max-w-[640px] text-center">
          <p className="text-[1.05rem] font-bold text-white md:text-[1.2rem]">
            Une croissance <Accent>exponentielle</Accent>, pas linéaire comme
            une fiche de paie à +200€/an.
          </p>
        </Card>
      </FullStage>
    ),
  },

  /* ---------- POURQUOI MAINTENANT ---------- */
  {
    id: "pourquoi-maintenant",
    section: S.pourquoi,
    kind: "full",
    render: () => (
      <FullStage
        eyebrow="Le marché n'est pas saturé"
        title="C'est tout l'inverse"
      >
        <StatGrid>
          <Stat value="1 M" label="entreprises créées / an" />
          <Stat value="~40%" label="ferment faute de clients" tone="gold" />
          <Stat value="30%" label="des PME sans site" />
          <Stat value="97%" label="cherchent en ligne" tone="white" />
        </StatGrid>
        <p className="mt-7 max-w-[640px] text-[0.97rem] leading-relaxed text-white/65 md:text-[1.05rem]">
          L'IA, c'est comme internet en 2000. Ceux qui se positionnent
          maintenant prennent une avance énorme. <Accent>La fenêtre est
          ouverte.</Accent>
        </p>
      </FullStage>
    ),
  },

  /* ---------- DIVIDER AGENCILAB ---------- */
  {
    id: "div-agencilab",
    section: S.offre,
    kind: "full",
    render: () => (
      <FullCenter bg="/images/seminaire/groupe.jpg">
        <Pill tone="gold">Ce que tu rejoins</Pill>
        <h2 className="mt-7 text-balance text-[2.8rem] font-black leading-[1.05] tracking-tight text-white md:text-[4.4rem]">
          Agencilab
        </h2>
        <p className="mt-5 max-w-[600px] text-[1.05rem] leading-relaxed text-white/75 md:text-[1.2rem]">
          Pas une formation de plus. Tout un environnement conçu pour que tu
          réussisses.
        </p>
      </FullCenter>
    ),
  },

  /* ---------- L'ACCOMPAGNEMENT ---------- */
  {
    id: "accompagnement",
    section: S.offre,
    kind: "full",
    render: () => (
      <FullSplit
        eyebrow="1 · L'accompagnement"
        title="Tu n'avances jamais seul"
        media={<SlideImage src="/images/seminaire/coaching.jpg" />}
      >
        <BulletList
          items={[
            <>
              Un <Accent>Mentor</Accent> qui fait le métier à temps plein et te
              guide pas à pas
            </>,
            <>
              Des <Accent>coachs</Accent> qui sont d'anciens élèves : ils ont
              vécu ta situation
            </>,
            <>
              Chaque livrable est <Accent>vérifié et corrigé</Accent> avant
              d'arriver chez ton client
            </>,
          ]}
        />
      </FullSplit>
    ),
  },

  /* ---------- LES COMPÉTENCES ---------- */
  {
    id: "competences",
    section: S.offre,
    kind: "full",
    render: () => (
      <FullSplit
        eyebrow="2 · Les compétences"
        title="Une vraie compétence, facturable"
        media={<SlideImage src="/images/seminaire/presentation.jpg" />}
        mediaSide="left"
      >
        <BulletList
          tone="gold"
          items={[
            "Créer des sites internet pros",
            "Lancer des publicités Meta et Google",
            "Le copywriting qui transforme les prospects en clients",
            "Maîtriser l'IA pour livrer en quelques heures",
          ]}
        />
      </FullSplit>
    ),
  },

  /* ---------- LE SYSTÈME DE MISSIONS ---------- */
  {
    id: "systeme-missions",
    section: S.offre,
    kind: "full",
    render: () => (
      <FullStage
        eyebrow="3 · Le système de missions"
        eyebrowTone="gold"
        title="On te met des clients sous la main"
      >
        <NumberedList
          items={[
            "Agencilab reçoit en permanence des demandes d'entreprises",
            "On ne peut pas toutes les prendre dans notre agence",
            <>
              On les <Gold>redistribue aux élèves de l'Incubateur</Gold>
            </>,
          ]}
        />
        <p className="mt-6 max-w-[600px] text-[0.93rem] font-semibold text-white/65">
          Tu apprends aussi à prospecter seul. Mais tu n'es jamais bloqué au
          départ.
        </p>
      </FullStage>
    ),
  },

  /* ---------- LA COMMUNAUTÉ ---------- */
  {
    id: "communaute",
    section: S.offre,
    kind: "full",
    render: () => (
      <FullSplit
        eyebrow="4 · La communauté"
        title="Des gens qui vivent la même chose"
        media={<SlideImage src="/images/seminaire/equipe.jpg" />}
      >
        <P>
          Quand t'as un coup de mou, tu vois quelqu'un qui était à ta place il y
          a 6 semaines et qui vient de signer son 3ᵉ client.
        </P>
        <Card tone="accent" className="mt-5 max-w-md">
          <p className="text-[0.98rem] font-bold text-white md:text-[1.08rem]">
            Tu rejoins un environnement où réussir devient la norme.
          </p>
        </Card>
      </FullSplit>
    ),
  },

  /* ---------- POUR TOI / PAS POUR TOI ---------- */
  {
    id: "pour-toi",
    section: S.offre,
    kind: "full",
    render: () => (
      <FullStage
        eyebrow="On ne prend pas tout le monde"
        title="Est-ce que c'est pour toi ?"
      >
        <TwoCol>
          <Card tone="accent">
            <ColHeader tone="accent">✅ C'est pour toi si…</ColHeader>
            <BulletList
              items={[
                "Tu veux construire à côté de ton job",
                "Tu es prêt à y consacrer ~2h par jour",
                "Tu veux un accompagnement humain",
              ]}
            />
          </Card>
          <Card tone="red">
            <ColHeader tone="red">❌ Ce n'est pas pour toi si…</ColHeader>
            <BulletList
              tone="red"
              items={[
                "Tu cherches du revenu sans effort",
                "Tu n'es pas prêt à t'impliquer",
              ]}
            />
          </Card>
        </TwoCol>
      </FullStage>
    ),
  },

  /* ---------- LA GARANTIE ---------- */
  {
    id: "garantie",
    section: S.offre,
    kind: "full",
    render: () => (
      <FullCenter bg="/images/seminaire/duo.jpg">
        <Pill tone="gold">La garantie</Pill>
        <h2 className="mt-7 text-balance text-[2.3rem] font-black leading-[1.08] tracking-tight text-white md:text-[3.6rem]">
          Premier client <span className="text-gold-400">garanti.</span>
        </h2>
        <p className="mt-6 max-w-[660px] text-[1.02rem] leading-relaxed text-white/80 md:text-[1.18rem]">
          Pas de client au bout de 3 mois ? On te donne{" "}
          <Gold>une mission rémunérée de notre réseau</Gold> et{" "}
          <Gold>+3 mois d'accompagnement offerts.</Gold>
        </p>
        <p className="mt-4 text-[0.9rem] text-white/45">
          On prend le risque à ta place. Parce qu'on sait que ça marche.
        </p>
      </FullCenter>
    ),
  },

  /* ---------- PREUVES ---------- */
  {
    id: "preuves",
    section: S.offre,
    kind: "full",
    render: () => (
      <FullStage
        eyebrow="Ce n'est pas de la théorie"
        title="Des élèves comme toi"
      >
        <div className="grid w-full max-w-[820px] grid-cols-1 gap-3 md:grid-cols-2">
          <PhotoCard
            src="/images/visages/yohann.jpg"
            name="Yohann"
            role="Gendarme"
            result="40 000€ en 6 mois"
          />
          <PhotoCard
            src="/images/visages/florent.jpg"
            name="Florent"
            role="Boulanger, 24 ans"
            result="3 500€ en 3 semaines"
          />
          <PhotoCard
            src="/images/visages/barthelemy.jpg"
            name="Barthélémy"
            role="Ex-bûcheron"
            result="20-30 000€/mois"
          />
          <PhotoCard
            src="/images/visages/anael.jpg"
            name="Anaël"
            role="28 ans"
            result="7 500€/mois"
          />
        </div>
        <p className="mt-5 max-w-[600px] text-[0.86rem] italic text-white/40">
          (Le closer ouvre le site agencilab.com : témoignages vidéo, 4,7/5
          Trustpilot.)
        </p>
      </FullStage>
    ),
  },

  /* ---------- LES 2 CHOIX ---------- */
  {
    id: "deux-choix",
    section: S.decider,
    kind: "full",
    render: () => (
      <FullStage eyebrow="La décision" title="Tu as deux options">
        <TwoCol>
          <Card tone="red">
            <ColHeader tone="red">Ne rien changer</ColHeader>
            <p className="text-[0.95rem] leading-relaxed text-white/75">
              Dans 6 mois, même réveil, même salaire. Et cette voix qui dit
              « j'aurais dû essayer ».
            </p>
          </Card>
          <Card tone="accent">
            <ColHeader tone="accent">Te lancer</ColHeader>
            <p className="text-[0.95rem] leading-relaxed text-white/85">
              Ton premier client en 52 jours en moyenne. Un deuxième salaire qui
              s'additionne, mois après mois.
            </p>
          </Card>
        </TwoCol>
      </FullStage>
    ),
  },

  /* ---------- L'INVESTISSEMENT ---------- */
  {
    id: "investissement",
    section: S.decider,
    kind: "full",
    render: () => (
      <FullStage
        eyebrow="L'investissement"
        eyebrowTone="gold"
        title="Deux façons de te lancer"
      >
        <TwoCol>
          <Card tone="accent">
            <ColHeader tone="accent">L'Incubateur</ColHeader>
            <div className="text-[2.1rem] font-black leading-none text-accent-400 md:text-[2.7rem]">
              3 600€
            </div>
            <p className="mt-3 text-[0.9rem] leading-relaxed text-white/80">
              Formation, Mentor, coachs, communauté, outils IA, système de
              missions et la garantie premier client.
            </p>
          </Card>
          <Card tone="gold">
            <ColHeader tone="gold">Le Mentorat</ColHeader>
            <div className="text-[2.1rem] font-black leading-none text-gold-400 md:text-[2.7rem]">
              6 000$
            </div>
            <p className="mt-3 text-[0.9rem] leading-relaxed text-white/85">
              Tout l'Incubateur + un accompagnement individuel rapproché pour
              aller plus vite.
            </p>
          </Card>
        </TwoCol>
        <p className="mt-5 max-w-[600px] text-[0.88rem] text-white/50">
          Paiement en plusieurs fois disponible · réservation possible avec un
          acompte.
        </p>
      </FullStage>
    ),
  },
];
