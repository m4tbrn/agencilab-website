"use client";

import { useState } from "react";
import Image from "next/image";
import {
  User,
  Globe,
  Funnel,
  LinkSimple,
  ChatTeardropText,
  Presentation,
  YoutubeLogo,
  InstagramLogo,
  ArrowSquareOut,
  Quotes,
  Warning,
  Sparkle,
  CheckCircle,
  XCircle,
} from "@phosphor-icons/react/dist/ssr";

type SectionId = "icp" | "site" | "funnel-meta" | "reseaux" | "script-closing" | "pitch-deck";

type Section = {
  id: SectionId;
  label: string;
  Icon: React.ComponentType<{ size?: number; weight?: "regular" | "bold" | "fill" | "duotone" }>;
};

const SECTIONS: Section[] = [
  { id: "icp", label: "L'ICP", Icon: User },
  { id: "site", label: "Le site", Icon: Globe },
  { id: "funnel-meta", label: "Funnel Meta", Icon: Funnel },
  { id: "reseaux", label: "Les réseaux de Louis", Icon: LinkSimple },
  { id: "script-closing", label: "Script de closing", Icon: ChatTeardropText },
  { id: "pitch-deck", label: "Pitch deck", Icon: Presentation },
];

export default function SalesBibleView() {
  const [activeId, setActiveId] = useState<SectionId>("icp");
  const active = SECTIONS.find((s) => s.id === activeId)!;

  return (
    <div className="min-h-[100dvh] bg-navy-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image src="/images/logo-white.png" alt="Agencilab" width={150} height={40} className="h-8 w-auto md:h-9" unoptimized />
            <span className="hidden text-[0.75rem] font-bold uppercase tracking-[0.18em] text-accent-400 md:inline">Sales Bible</span>
          </div>
          <span className="text-[0.7rem] font-medium uppercase tracking-wider text-white/40">Interne · Closers</span>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1280px] gap-10 px-6 py-10 md:py-14">
        {/* Sidebar */}
        <aside className="hidden w-[240px] shrink-0 lg:block">
          <nav className="sticky top-24 flex flex-col gap-1">
            <p className="mb-3 px-3 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white/40">Sommaire</p>
            {SECTIONS.map((s) => {
              const isActive = s.id === activeId;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveId(s.id)}
                  className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[0.92rem] transition ${
                    isActive
                      ? "border border-accent-400/30 bg-accent-400/[0.08] text-white"
                      : "border border-transparent text-white/60 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <s.Icon size={18} weight={isActive ? "fill" : "regular"} />
                  <span className="font-medium">{s.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Mobile : select de navigation */}
        <div className="mb-6 lg:hidden">
          <label className="sr-only" htmlFor="section-select">Section</label>
          <select
            id="section-select"
            value={activeId}
            onChange={(e) => setActiveId(e.target.value as SectionId)}
            className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-[0.95rem] font-medium text-white outline-none focus:border-accent-400/60"
          >
            {SECTIONS.map((s) => (
              <option key={s.id} value={s.id} className="bg-navy-950">{s.label}</option>
            ))}
          </select>
        </div>

        {/* Main */}
        <main className="min-w-0 flex-1">
          <div className="mb-10 md:mb-14">
            <span className="inline-block text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accent-400">Agencilab · Sales Bible</span>
            <h1 className="mt-2 text-[clamp(2rem,5vw,2.8rem)] font-extrabold leading-[1.05] tracking-tight">{active.label}</h1>
          </div>

          {activeId === "icp" && <ICP />}
          {activeId === "site" && <Site />}
          {activeId === "funnel-meta" && <FunnelMeta />}
          {activeId === "reseaux" && <Reseaux />}
          {activeId === "script-closing" && <ScriptClosing />}
          {activeId === "pitch-deck" && <PitchDeck />}
        </main>
      </div>
    </div>
  );
}

/* ============================================================
 * ICP — Lucas (basé sur le Drive "ICP - Lucas - 22/02.docx")
 * 18 transcripts + 786 appels iClosed
 * ============================================================ */
function ICP() {
  return (
    <div className="space-y-10">
      {/* SECTION 1 — Démographique */}
      <Block num="1" title="Données démographiques">
        <SubBlock title="Profil de base">
          <KV k="Prénom représentatif" v="Lucas" />
          <KV k="Tranche d'âge" v="25 – 35 ans (24-29 ans = meilleur taux conv 10,1%, 30-39 ans = plus gros volume)" />
          <KV k="Âge médian" v="28-29 ans" />
          <KV k="Ratio H/F" v="~80% hommes / 20% femmes (les femmes achètent aussi — Amandine a pris 5 999€)" />
        </SubBlock>

        <SubBlock title="Revenus & situation financière">
          <KV k="Fourchette" v="1 800€ – 3 000€ net/mois" />
          <p className="mt-2 text-[0.92rem] leading-relaxed text-white/70">
            Suffisant pour vivre, insuffisant pour construire. Certains profils plus avancés ont déjà une 2ᵉ source de revenus (PEA Matys, immo Cédric V., LMNP Antoine B., private equity Eddy).
          </p>
          <div className="mt-3 rounded-xl border border-gold-400/35 bg-gold-400/[0.06] p-4">
            <p className="text-[0.8rem] font-bold uppercase tracking-wide text-gold-400">⚠️ Paradoxe budget iClosed</p>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-white/80">
              58% des leads déclarent un budget &lt;1 000€ au booking, alors que le panier moyen réel des ventes est <span className="font-bold text-white">3 674€</span>. Pas un manque d'argent réel — une sous-estimation défensive ou rationalisation pré-call.
            </p>
          </div>
        </SubBlock>

        <SubBlock title="Secteurs d'activité représentés">
          <p className="text-[0.92rem] leading-relaxed text-white/70">Le profil n'est PAS uniforme sur le secteur — il l'est sur la douleur.</p>
          <ul className="mt-3 space-y-2 text-[0.92rem] leading-snug text-white/75">
            <Li><b className="text-white">BTP / industrie / technique</b> — corps exposé, plafond visible</Li>
            <Li><b className="text-white">Hôtellerie / gardiennage / sécurité</b> — travail décalé, temps libre non monétisé, ennui</Li>
            <Li><b className="text-white">Secteur public / parapublic</b> (ONF, SNCF) — sécurité mais progression nulle</Li>
            <Li><b className="text-white">Commercial / sales</b> — revenus variables, envie de récurrent</Li>
            <Li><b className="text-white">Profils en transition</b> (ex-DRH, intermittente, post-licenciement) — contrainte temporelle forte</Li>
            <Li><b className="text-white">Ingénieurs / cadres techniques</b> — salaire correct mais croissance linéaire</Li>
            <Li><b className="text-white">Créatifs / portfolios multiples</b> — financement de passions comme motivation secondaire</Li>
          </ul>
        </SubBlock>

        <SubBlock title="Mode de vie">
          <KV k="Lieu" v="Grandes villes françaises ou expatriés/mobiles. Liberté géographique = désir fort" />
          <KV k="Logement" v="Locataire — premier appartement solo ou coloc récente. Loyer = premier déclencheur de prise de conscience financière" />
          <KV k="Consommation contenu" v="Gros consommateurs YouTube/Instagram finance perso. Tous ont découvert Louis via algorithme" />
          <KV k="Entourage" v="Souvent seul à remettre en question le schéma salarial. Famille 100% salariée" />
          <KV k="Rapport au travail" v="Soit le job ne plaît pas, soit il plaît mais tourne en rond (le 2ᵉ cas est plus fréquent et plus motivé)" />
          <KV k="Sport" v="Souvent sportif ou ex-sportif. Le sport est un pilier identitaire" />
        </SubBlock>

        <SubBlock title="Attitudes générales">
          <KV k="Rapport au système" v="Désillusion sans révolte. Cherche une sortie individuelle, pas militante" />
          <KV k="Formations en ligne" v="Méfiance éduquée par l'expérience (Yomi Denzel, affiliation, dropshipping…)" />
          <KV k="Alignement valeurs" v="Veut gagner de l'argent en faisant quelque chose d'honnête (Cédric V. a quitté le drop pour ça)" />
          <KV k="Communauté" v="Déclencheur d'achat fort — l'isolement dans l'ambition est une vraie douleur" />
        </SubBlock>

        <SubBlock title="Espoirs & rêves">
          <ul className="space-y-2 text-[0.92rem] leading-snug text-white/75">
            <Li>Quitter son emploi — ou le garder par <b className="text-white">choix</b>, pas par contrainte</Li>
            <Li><b className="text-white">1 500 à 3 000€/mois</b> de complément (objectif intermédiaire cité dans quasi tous les calls)</Li>
            <Li>Revenu décorrélé du temps et du corps</Li>
            <Li>Travailler de n'importe où — pas seulement "depuis chez soi"</Li>
            <Li>Financer des projets perso sans toucher au salaire</Li>
            <Li>Construire un patrimoine familial — cité même à 25 ans</Li>
            <Li>Être patron de soi-même</Li>
            <Li>Approbation parentale (inavouée)</Li>
          </ul>
        </SubBlock>

        <SubBlock title="Croyances & valeurs">
          <p className="text-[0.85rem] uppercase tracking-wide text-white/45">Croyances fondamentales</p>
          <ul className="mt-2 space-y-1.5 text-[0.92rem] leading-snug text-white/75">
            <Li>Le travail paie — mais pas assez, pas vite assez</Li>
            <Li>Le digital est l'avenir, il faut en faire partie avant que ça se démocratise</Li>
            <Li>Se former auprès de quelqu'un qui a réussi est la voie la plus rapide — si la personne est légitime</Li>
            <Li>L'inaction coûte plus cher que l'action à long terme</Li>
            <Li>La communauté accélère la réussite et prévient l'abandon</Li>
            <Li>Il faut être aligné avec ses valeurs</Li>
          </ul>
          <p className="mt-5 text-[0.85rem] uppercase tracking-wide text-white/45">Valeurs fondamentales</p>
          <ul className="mt-2 space-y-1.5 text-[0.92rem] leading-snug text-white/75">
            <Li><b className="text-white">Liberté</b> — géographique, temporelle, financière (cité presque à chaque call)</Li>
            <Li><b className="text-white">Honnêteté / transparence</b> — facteur de confiance #1</Li>
            <Li><b className="text-white">Accomplissement</b> — créer de A à Z</Li>
            <Li><b className="text-white">Autonomie</b></Li>
            <Li><b className="text-white">Famille</b></Li>
            <Li><b className="text-white">Alignement</b> — ne pas vendre ce qu'on ne croit pas</Li>
          </ul>
        </SubBlock>

        <SubBlock title="Identité fondamentale">
          <p className="text-[0.92rem] leading-relaxed text-white/75">
            Il se voit comme <b className="text-white">intelligent, rigoureux, quelqu'un qui a bien joué le jeu</b>. Pas un perdant — quelqu'un que le système ne récompense pas à la hauteur. Il veut un plan concret, pas de l'improvisation. Pas nécessairement entrepreneur dans l'âme — mais il sent qu'il est capable de plus. Souvent plusieurs projets en tête en même temps, et manque d'un cadre pour les prioriser.
          </p>
        </SubBlock>
      </Block>

      {/* SECTION 2 — Problème, Peurs, Émotions */}
      <Block num="2" title="Problème principal, peurs, émotions">
        <SubBlock title="Le problème">
          <p className="text-[1.05rem] font-medium leading-relaxed text-white">
            Il gagne sa vie mais pas sa liberté. Il a bien joué le jeu — études, diplôme, CDI, parfois premiers investissements. Et il se retrouve avec un salaire qui couvre les charges mais pas la vie qu'il avait imaginée. Il voit le plafond ou le ressent dans son corps. Et il sait que si rien ne change, dans 10 ans il sera au même endroit — avec plus d'amertume.
          </p>
        </SubBlock>

        <SubBlock title="Les blocages (consolidés)">
          <ul className="space-y-2 text-[0.92rem] leading-snug text-white/75">
            <Li>Loyer + charges absorbent une part trop importante — le reste stagne</Li>
            <Li>Aucune évolution salariale rapide en vue, plafond visible</Li>
            <Li>Tourne en rond — le travail est correct mais l'ennui s'installe</Li>
            <Li>Du temps libre mais pas de structure pour le monétiser</Li>
            <Li>Des projets créatifs/patrimoniaux non finançables avec le salaire</Li>
            <Li>Peur de se faire arnaquer — cicatrices de formations passées</Li>
            <Li>Entourage sans entrepreneurs — isolement dans l'ambition</Li>
            <Li>Procrastination depuis des mois ou années</Li>
            <Li><i>Profils physiques :</i> usure du corps comme horizon angoissant</Li>
            <Li><i>Profils en transition :</i> contrainte temporelle forte (fin de mission, fin de chômage)</Li>
          </ul>
        </SubBlock>

        <SubBlock title="Les 5 émotions principales">
          <ul className="space-y-2 text-[0.92rem] leading-snug text-white/80">
            <Li><b className="text-white">Frustration</b> — il est rigoureux et ça ne se traduit pas en liberté</Li>
            <Li><b className="text-white">Urgence sourde</b> — le temps passe, projets en attente depuis trop longtemps</Li>
            <Li><b className="text-white">Ennui existentiel</b> — temps libre non utilisé = souffrance spécifique</Li>
            <Li><b className="text-white">Espoir fragile</b> — il y croit, mais peur de confirmer qu'il n'est pas capable</Li>
            <Li><b className="text-white">Colère contenue</b> — contre le système, l'inflation, les impôts, les patrons</Li>
          </ul>
        </SubBlock>

        <SubBlock title="Les 5 peurs cachées">
          <ul className="space-y-2 text-[0.92rem] leading-snug text-white/80">
            <Li>Rater sa vie financièrement, ne pas pouvoir offrir la vie voulue à sa famille</Li>
            <Li>Se retrouver à 40-50 ans dans la même situation, avec des regrets</Li>
            <Li>Se faire arnaquer par une formation (méfiance souvent fondée)</Li>
            <Li>Ne pas être capable — payer, commencer, et confirmer qu'il n'est pas fait pour ça</Li>
            <Li><b className="text-white">Rentrer dans la "spirale"</b> — reprendre une mission, être bien au bout de quelques mois, voir les années passer</Li>
          </ul>
          <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/[0.06] p-4">
            <p className="text-[0.8rem] font-bold uppercase tracking-wide text-red-400">Le pattern "spirale" (Paterne, 12 ans)</p>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-white/80">
              Reprendre une nouvelle mission en mars, être confortable au bout de 6 mois, et "les années passent, les années passent, t'as passé ton tour". Pas une peur abstraite — le scénario exact qu'il a déjà vécu sans le nommer.
            </p>
          </div>
        </SubBlock>

        <SubBlock title="Phrases blessantes que l'entourage pourrait lui dire">
          <div className="space-y-2">
            <Quote>"T'as un bon boulot, t'as pas à te plaindre."</Quote>
            <Quote>"Ces formations en ligne c'est tous des arnaques."</Quote>
            <Quote>"Tu rêves, c'est pas si facile de gagner de l'argent sans travailler."</Quote>
            <Quote>"On a tous eu des rêves à ton âge. À un moment faut être réaliste."</Quote>
            <Quote>"Arrête de regarder des vidéos YouTube et fais quelque chose de concret."</Quote>
          </div>
        </SubBlock>
      </Block>

      {/* SECTION 3 — Verbatims */}
      <Block num="3" title="Verbatims du marché">
        <SubBlock title="Motivations profondes — citations brutes">
          <div className="space-y-3">
            <Verbatim author="Antoine B., 26 ans, technicien maintenance — VENTE 4 999€">
              J'ai pas envie qu'à 40 ans je sois fini, que j'aie mal au dos tout le temps et que je puisse pas profiter de mes enfants pleinement plus tard.
            </Verbatim>
            <Verbatim author="Éliott, event manager CDI — Acompte">
              Quand tu es jeune, soit tu profites de la vie et tu ne peux pas avoir de projet, soit tu peux avoir des projets et tu ne profites pas de la vie. C'est ça que je trouve naze.
            </Verbatim>
            <Verbatim author="Bryan, 23 ans, étudiant">
              J'aimerais décorréler ce ratio argent sur temps qui va être un frein plus tard.
            </Verbatim>
            <Verbatim author="Cédric B., technicien forestier CDI — VENTE 82 min">
              Mon objectif c'est de réussir à développer une certaine autonomie financière, donc ne plus dépendre de qui que ce soit, ne plus dépendre d'un patron.
            </Verbatim>
            <Verbatim author="Arnaud, 28 ans, secteur bancaire — VENTE 4×849€">
              J'ai besoin d'une indépendance financière. Ça fait la fin de la vingtaine qui arrive et qui met la pression.
            </Verbatim>
            <Verbatim author="Simon, conducteur de travaux">
              J'aimerais être indépendant et travailler pour moi. Pas pour une entreprise. Faire grossir quelque chose juste avec mes capacités à moi.
            </Verbatim>
            <Verbatim author="Christ, hôtellerie nuit — Acompte">
              Je suis dans une forme de routine. Mon travail me plaît, mais je tourne un petit peu en rond. Et j'ai différents projets que j'ai envie de financer.
            </Verbatim>
            <Verbatim author="Eddy, gardiennage sécurité — VENTE 6×600€">
              Comme tout le monde, être libre fiscalement. Ne plus devoir travailler pour un patron et être patron de soi-même.
            </Verbatim>
            <Verbatim author="Paterne, gestionnaire de projet freelance — R2">
              C'est rentrer dans une forme de spirale et qu'au final, le temps passe. Peut-être qu'à 50 ans, tu vas nourrir certains regrets. Pourquoi j'ai pas fait ça ? J'en ai encore la force et la capacité.
            </Verbatim>
            <Verbatim author="Clément, ingénieur bientôt CDI — R2">
              Notre génération va être plus encline à faire ce genre de choses. Avoir un job c'est bien un peu à l'ancienne.
            </Verbatim>
            <Verbatim author="Cédric B.">
              Pour un même salaire, on ne vit pas à la même hauteur que nos parents.
            </Verbatim>
            <Verbatim author="Ghennadi, 36 ans, bâtiment — R2">
              J'en ai marre, ça fait des années que j'espère que les choses changent, les choses ne changent pas.
            </Verbatim>
            <Verbatim author="Antoine B.">
              Dans mon travail actuel, si je monte en compétences, ça peut prendre facilement 10 ans pour avoir de bonnes évolutions de salaire. Moi, je n'ai pas envie d'attendre.
            </Verbatim>
          </div>
        </SubBlock>

        <SubBlock title="Peurs avant d'acheter — citations brutes">
          <div className="space-y-3">
            <Verbatim author="Bryan">Je suis sceptique quant à ces formations en ligne. Je n'y vais pas forcément si c'est pas quelqu'un en qui j'ai confiance.</Verbatim>
            <Verbatim author="Christ">Des formations, j'en ai eu plein, je ne les ai pas forcément faites. Et ça ne me plaisait pas forcément.</Verbatim>
            <Verbatim author="Cédric V.">J'avais fait une formation un peu comme celle-ci sur du dropshipping. J'étais pas aligné avec certaines valeurs — vendre de la merde à des gens.</Verbatim>
            <Verbatim author="Cédric V.">J'ai toujours voulu me débrouiller. Les formateurs se sont tellement démocratisés — l'immobilier avant, aujourd'hui l'IA, le trading.</Verbatim>
            <Verbatim author="Gaëlle, ex-DRH">J'essaie de démêler le vrai du faux dans tout ce que vous racontez.</Verbatim>
            <Verbatim author="Eddy">J'avais déjà pris une formation sur l'affiliation. Ça marche, mais pas autant que j'aurais pensé.</Verbatim>
            <Verbatim author="Simon">Je préfère quand même regarder, poser tout à blanc sur une feuille, voir tous ses pours, ses contres.</Verbatim>
          </div>
        </SubBlock>

        <SubBlock title="Déclencheurs récents qui précèdent le call">
          <p className="text-[0.92rem] leading-relaxed text-white/70">
            Les leads avec un déclencheur récent concret (&lt;3 mois) convertissent mieux. Pattern constant sur 18 transcripts.
          </p>
          <ul className="mt-3 space-y-2 text-[0.92rem] leading-snug text-white/75">
            <Li>Fin de mission ou changement de contrat imminent (Paterne, Morgane)</Li>
            <Li>Approche d'un cap symbolique d'âge — 28-30 ans (Arnaud)</Li>
            <Li>Déménagement récent, nouvelle ville (Matys à Tours)</Li>
            <Li>Charges exceptionnelles qui cristallisent la frustration (Antoine B.)</Li>
            <Li>Séparation ou nouvelle situation familiale (Ghennadi)</Li>
            <Li>Ennui constaté — temps libre non exploité (Christ)</Li>
            <Li>Contrainte sectorielle externe (intempéries BTP, intermittence)</Li>
            <Li>Tomber sur la bonne vidéo au bon moment — état de réceptivité (Clément)</Li>
          </ul>
        </SubBlock>

        <SubBlock title="Solutions déjà essayées ou envisagées">
          <ul className="space-y-1.5 text-[0.92rem] leading-snug text-white/75">
            <Li>PEA / bourse (Cédric B., Matys)</Li>
            <Li>LMNP / immobilier locatif (Antoine B., Cédric V.)</Li>
            <Li>Private equity / Fundora (Eddy — 1 000€)</Li>
            <Li>Conseiller en gestion de patrimoine (Simon)</Li>
            <Li>Affiliation (Eddy — 50€/mois) ou dropshipping (Cédric V. — abandonné)</Li>
            <Li>Business physique parallèle (Antoine S. — achat-revente auto)</Li>
            <Li>Projets locaux avortés (Simon — immo)</Li>
            <Li>Formations alternatives très chères comparées (Gaëlle — Rivalis 27-40k€)</Li>
            <Li>Sites pour des proches sans monétiser (Christ)</Li>
            <Li><b className="text-white">Consommation massive de contenu YouTube / podcasts</b> — tous en consomment, aucun n'est passé à l'action seul</Li>
          </ul>
        </SubBlock>

        <SubBlock title="Extraits de dialogues internes">
          <div className="space-y-3">
            <Verbatim author="Bryan — verbalisation pendant le call">
              Ces 3 000 euros, si je dilue l'impact à l'échelle d'une vie, ça ne va jamais être grave. Par contre si ça réussit, ça peut changer ma vie en bien. Donc dans tous les cas, si je peux me permettre, je suis gagnant.
            </Verbatim>
            <Verbatim author="Christ">
              Je sais que si je m'étais lancé tout seul, j'aurais peut-être abandonné d'ici deux, trois mois — pas par manque de revenus mais parce que je n'aurais pas trouvé quelque chose de nouveau qui me motive.
            </Verbatim>
            <Verbatim author="Cédric V.">
              Inconsciemment, je pense à des idées de business presque tous les jours. Mais on ne l'a toujours pas fait.
            </Verbatim>
            <Verbatim author="Arnaud">
              J'ai toujours été là de loin mais de près comme aujourd'hui, je n'ai jamais été aussi près — ça fait deux ans que je regarde vraiment tout ce qui se fait.
            </Verbatim>
            <Verbatim author="Ghennadi, 36 ans">
              Je n'ai pas l'âge pour dire j'attends. Plus j'attends, plus on le passe, et le temps ne peut pas se rattraper.
            </Verbatim>
            <Verbatim author="Paterne, 12 ans dans le même secteur">
              Ça fait bientôt plus de 12 ans que je fais la même chose. Au final, finalement, tu retournes dedans, tu te dis peut-être que je suis un peu bien. Et les années passent.
            </Verbatim>
          </div>
        </SubBlock>

        <SubBlock title="Ce qu'ils NE VEULENT PAS faire">
          <ul className="space-y-2 text-[0.92rem] leading-snug text-white/75">
            <Li>Créer une vraie entreprise avec local, stock, employés, risque total</Li>
            <Li>Faire une reconversion longue de 3-5 ans qui suspend les revenus</Li>
            <Li>Trading / investissement très risqué</Li>
            <Li><b className="text-white">Vendre quelque chose en lequel ils ne croient pas</b> (Cédric V.)</Li>
            <Li>Se retrouver dans un nouveau "esclavage" avec deadlines et pression</Li>
            <Li>Être pris par la main à 100% — accompagnement oui, assistance non (Eddy)</Li>
            <Li>Prendre une décision à chaud sans réfléchir (Simon, Bryan)</Li>
          </ul>
        </SubBlock>

        <SubBlock title="Formulations conversationnelles réalistes">
          <div className="space-y-2">
            <Quote>"Je veux pas qu'à 40 ans j'aie mal au dos pour le même salaire qu'aujourd'hui."</Quote>
            <Quote>"J'ai du temps libre mais je fais rien avec. Ça me frustre."</Quote>
            <Quote>"Je veux pas que ça devienne un deuxième esclavage."</Quote>
            <Quote>"Je veux travailler pour moi, pas enrichir quelqu'un d'autre."</Quote>
            <Quote>"Je sais pas quoi croire tellement il y en a, mais lui il a l'air honnête."</Quote>
            <Quote>"J'avais fait une formation y'a deux ans, ça n'a rien donné. Cette fois je veux un vrai suivi."</Quote>
            <Quote>"Je pense à des idées de business presque tous les jours mais on ne l'a toujours pas fait."</Quote>
            <Quote>"Ça fait des années que j'espère que les choses changent. Les choses ne changent pas."</Quote>
          </div>
        </SubBlock>
      </Block>

      {/* SECTION 4 — Transformation magique */}
      <Block num="4" title="Transformation magique — Scénario de rêve">
        <SubBlock title="Les 5 résultats rêvés">
          <ul className="space-y-2 text-[0.92rem] leading-snug text-white/80">
            <Li><b className="text-white">1 500 à 3 000€/mois</b> de revenus complémentaires dans les 4-6 premiers mois</Li>
            <Li>Avoir le <b className="text-white">choix</b> de quitter son emploi (ou de le garder par décision délibérée)</Li>
            <Li>Source de revenus décorrélée de son temps et son corps</Li>
            <Li>Financer ses projets perso sans toucher au salaire</Li>
            <Li>Liberté géographique réelle, pas seulement télétravail</Li>
          </ul>
        </SubBlock>

        <SubBlock title="Ce qu'il se dirait intérieurement">
          <div className="space-y-2">
            <Quote>"J'aurais voulu commencer plus tôt, mais je suis content de l'avoir fait maintenant."</Quote>
            <Quote>"Pour la première fois, je me réveille le lundi sans cette boule dans le ventre."</Quote>
            <Quote>"J'ai enfin prouvé que j'avais raison — c'était possible."</Quote>
            <Quote>"Je ne dépends plus de personne pour financer ce que je veux faire."</Quote>
          </div>
        </SubBlock>

        <SubBlock title="Impact sur les relations proches">
          <KV k="Parents" v="Validation parentale (inavouée). Pouvoir leur dire 'ça marche' — Cédric B. veut inviter ses parents à voyager, Ghennadi veut laisser quelque chose à ses enfants" />
          <KV k="Partenaire" v="Le flou sur l'avenir commun se lève. Projets concrets (maison, enfants, voyage) deviennent possibles" />
          <KV k="Amis" v="Il ne justifie plus. Devient la référence — 'celui qui a sauté le pas'" />
          <KV k="Corps (profils physiques)" v="Quitter avant que le corps lâche est un moteur explicite (Antoine B., Simon, Ghennadi, Matys)" />
        </SubBlock>

        <SubBlock title="Ce qu'il NE VEUT PAS faire pour y arriver">
          <ul className="space-y-2 text-[0.92rem] leading-snug text-white/75">
            <Li>Sacrifier sa vie sociale et ses loisirs pendant des mois</Li>
            <Li>Prendre un risque financier total — il veut un filet, pas un saut dans le vide</Li>
            <Li>Vendre quelque chose en lequel il ne croit pas — l'éthique est un filtre</Li>
            <Li>Tout quitter du jour au lendemain sans avoir validé</Li>
            <Li>Être 100% assisté — il veut apprendre, pas juste exécuter</Li>
          </ul>
        </SubBlock>

        <SubBlock title="Émotions après réalisation du rêve">
          <ul className="space-y-1.5 text-[0.92rem] leading-snug text-white/75">
            <Li>Calme et clarté — plus d'anxiété du dimanche soir</Li>
            <Li>Fierté — avoir construit quelque chose à soi</Li>
            <Li>Liberté de mouvement — géographique et temporelle</Li>
            <Li>Légitimité entrepreneuriale sans risque insensé</Li>
            <Li>Ressources pour financer ses autres projets</Li>
          </ul>
        </SubBlock>

        <SubBlock title="Verbatims — désirs exprimés">
          <div className="space-y-3">
            <Verbatim author="Bryan">Quitter la France pour vivre en Suisse. Avoir une maison. Ne plus prendre les métros avec des gens stressés.</Verbatim>
            <Verbatim author="Cédric B.">Pouvoir inviter mes parents, mes cousins à voyager avec moi. Partager des choses avec ma famille.</Verbatim>
            <Verbatim author="Antoine B.">Créer un bon environnement de vie pour ma future famille.</Verbatim>
            <Verbatim author="Paterne">Liberté de mouvement — ne pas avoir les pieds mains liés au bureau. Pouvoir travailler d'un point A à un point B, de délocaliser.</Verbatim>
            <Verbatim author="Eddy">Si j'atteins cet objectif, je quitterai mon travail actuel et je vais partir dans l'investissement.</Verbatim>
            <Verbatim author="Christ">Je voudrais avoir un studio photo, me lancer dans la photo de mode. J'aimerais réinvestir dans d'autres projets.</Verbatim>
            <Verbatim author="Clément">En termes de voyage, tout est beaucoup plus facile. On accède à beaucoup plus de choses dans la vie.</Verbatim>
          </div>
        </SubBlock>
      </Block>

      {/* SECTION 5 — Particularités du marché */}
      <Block num="5" title="Particularités du marché">
        <SubBlock title="De quoi pensent-ils dépendre pour réussir">
          <ul className="space-y-2 text-[0.92rem] leading-snug text-white/75">
            <Li><b className="text-white">Trouver "la bonne formation"</b> avec la bonne personne — figure légitime et honnête</Li>
            <Li>Avoir assez de temps libre — principale excuse (mais les profils avec le plus de temps ne convertissent pas le mieux)</Li>
            <Li>Avoir assez d'argent — 2ᵉ excuse, en contradiction avec leur capacité réelle</Li>
            <Li>Trouver la bonne idée — sur-intellectualisation du point de départ</Li>
            <Li>Validation externe — "c'est possible pour MON profil spécifique"</Li>
            <Li>Accompagnement humain nommé — le suivi anonyme est rédhibitoire</Li>
            <Li><b className="text-white">Communauté de pairs</b> — pour ne pas abandonner seul (Christ)</Li>
          </ul>
        </SubBlock>

        <SubBlock title="Ce que le marché doit abandonner pour réussir">
          <ul className="space-y-2 text-[0.92rem] leading-snug text-white/75">
            <Li>Attendre le "bon moment" (Paterne : 12 ans, Arnaud : 2 ans, Christ : 5 ans)</Li>
            <Li>Tout comprendre avant de commencer — paralysie par l'analyse</Li>
            <Li>La comparaison avec des résultats extrêmes vus sur YouTube</Li>
            <Li>L'idée que diplôme/secteur/origine est un frein (aucun acheteur n'avait de compétences marketing préalables)</Li>
            <Li>La méfiance systématique — légitime mais à canaliser, pas éliminer</Li>
          </ul>
        </SubBlock>

        <SubBlock title="À qui / à quoi reprochent-ils leur situation">
          <ul className="space-y-1.5 text-[0.92rem] leading-snug text-white/75">
            <Li>L'État et la fiscalité</Li>
            <Li>Le système éducatif — "on m'a dit que les études c'était la clé"</Li>
            <Li>L'inflation, le coût de la vie</Li>
            <Li>Les employeurs — plafond de verre, faibles augmentations</Li>
            <Li>La tradition familiale salariale — "chaîne à briser"</Li>
            <Li>Eux-mêmes parfois — "j'aurais dû commencer plus tôt"</Li>
          </ul>
        </SubBlock>

        <SubBlock title="Les 5 objections à leur propre réussite">
          <ul className="space-y-2 text-[0.92rem] leading-snug text-white/80">
            <Li><b className="text-white">"J'ai pas le temps"</b> — mais les profils avec le plus de temps ne sont pas les meilleurs prospects</Li>
            <Li><b className="text-white">"J'ai pas l'argent"</b> — paradoxe iClosed documenté</Li>
            <Li><b className="text-white">"C'est peut-être une arnaque"</b> — méfiance construite sur de mauvaises expériences</Li>
            <Li><b className="text-white">"Je sais pas si je suis capable"</b> — syndrome de l'imposteur pré-démarrage</Li>
            <Li><b className="text-white">"C'est pas le bon moment"</b> — attente qui dure depuis des mois ou années</Li>
          </ul>
        </SubBlock>

        <SubBlock title="Facteurs qui déclenchent la confiance et l'achat">
          <p className="text-[0.85rem] uppercase tracking-wide text-white/45">Classés du plus fréquent au moins fréquent</p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-[0.92rem] leading-snug text-white/80">
            <li><b className="text-white">Témoignages de gens qui ressemblent au lead</b> — proximité &gt; performance du chiffre</li>
            <li>Références à des clients reconnus du lead (Nassim Saïdi pour Amandine)</li>
            <li>Accompagnement humain nommé — coach individuel identifié</li>
            <li>Communauté de taille humaine — "petit comité"</li>
            <li>Événements physiques — séminaire Paris cité avec enthousiasme</li>
            <li>Légitimité de la figure d'autorité (Louis, Balistique, clients connus)</li>
            <li>Transparence sur ce qui ne marche pas — renforce la confiance plus que d'esquiver</li>
          </ol>
        </SubBlock>

        <SubBlock title="Verbatims — ce qui attire">
          <div className="space-y-3">
            <Verbatim author="Antoine S., mécanicien 27 ans">C'est l'aspect humain, l'aspect marketing et découvrir un nouveau business en ligne. Et d'être formé pour faire ce business.</Verbatim>
            <Verbatim author="Matys">Il a su me convaincre et j'ai bien aimé l'approche qu'il a eue. Et aussi, c'est le petit comité des personnes.</Verbatim>
            <Verbatim author="Christ — Acompte">C'est surtout l'aspect communauté qui m'a fait plaisir. Là dans une communauté, je vois les autres évoluer, comment ils avancent.</Verbatim>
            <Verbatim author="Cédric B.">L'idée me plaisait beaucoup de pouvoir développer un petit business en ligne. L'outil est simple, il suffit d'avoir un PC.</Verbatim>
            <Verbatim author="Eddy">J'ai vu qu'il y avait un accompagnement très intéressant chez vous, et un remboursement si ça ne marche pas.</Verbatim>
            <Verbatim author="Paterne">Pour moi, c'est vraiment cet accompagnement de bout en bout qui est proposé et qui m'a vraiment sauté à l'œil.</Verbatim>
          </div>
        </SubBlock>

        <SubBlock title="Verbatims — ce qui freine">
          <div className="space-y-3">
            <Verbatim author="Bryan — acompte, pas vente directe">Je n'aime pas faire les choses à chaud.</Verbatim>
            <Verbatim author="Simon — non converti">C'est assez contraignant d'investir directement cet argent sans avoir une démo qu'on pourrait avoir gratuitement.</Verbatim>
            <Verbatim author="Clément — R2, objection prix">En revanche un peu surpris par les milliers d'euros.</Verbatim>
            <Verbatim author="Cédric V. — filtrage éthique">J'étais pas aligné avec certaines valeurs sur le dropshipping — vendre de la merde à des gens.</Verbatim>
            <Verbatim author="Cédric V. — doute sur sa constance">Peut-être un énième projet sur lequel je ne pourrai peut-être pas me focaliser à 100%.</Verbatim>
          </div>
        </SubBlock>
      </Block>

      {/* SECTION 6 — Awareness */}
      <Block num="6" title="Niveau d'Awareness de Lucas">
        <div className="rounded-2xl border border-accent-400/30 bg-accent-400/[0.06] p-6">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent-400">Niveau actuel</p>
          <p className="mt-2 text-[2rem] font-extrabold leading-none text-white">2,5 / 5</p>
          <p className="mt-2 text-[0.95rem] text-white/75">Entre <b className="text-white">Problem Aware</b> et <b className="text-white">Solution Aware</b> (échelle Eugene Schwartz).</p>
        </div>

        <SubBlock title="Ce que Lucas SAIT en arrivant">
          <ul className="space-y-1.5 text-[0.92rem] leading-snug text-white/75">
            <Li>Qu'il tourne en rond et que son salaire plafonne</Li>
            <Li>Que "d'autres gens font des choses sur internet et gagnent de l'argent"</Li>
            <Li>Que Louis Esquier existe sur YouTube — sans comprendre précisément ce qu'Agencilab propose</Li>
            <Li>Qu'il a déjà raté une ou plusieurs tentatives (dropshipping, affiliation, formations sans suivi)</Li>
          </ul>
        </SubBlock>

        <SubBlock title="Ce que Lucas NE SAIT PAS">
          <ul className="space-y-1.5 text-[0.92rem] leading-snug text-white/75">
            <Li>Ce qu'il va faire concrètement au quotidien dans ce métier</Li>
            <Li>Pourquoi une entreprise paierait quelqu'un comme lui pour du marketing digital</Li>
            <Li>Ce qui différencie Agencilab des dizaines de formations qu'il a déjà vues</Li>
            <Li>Que le modèle permet de facturer plusieurs services au même client — sans démarcher en permanence</Li>
          </ul>
        </SubBlock>
      </Block>

      {/* SECTION 7 — Mots à bannir */}
      <Block num="7" title="Mots Red Flag à bannir">
        <div className="rounded-xl border border-red-500/30 bg-red-500/[0.06] p-4">
          <p className="text-[0.92rem] leading-relaxed text-white/80">
            Chaque mot red flag active un imaginaire négatif AVANT que tu aies eu le temps de l'expliquer. Le prospect filtre, résiste ou décroche — pas parce qu'il n'est pas intéressé, mais parce que le vocabulaire a déclenché la mauvaise association.
          </p>
        </div>

        <RedFlagCat title="Catégorie 1 — Imaginaire 'arnaque'" words={[
          ["Revenus passifs", "Mythe argent sans travail, attire les mauvais profils"],
          ["Liberté financière", "Saturé, galvaudé, promesse creuse"],
          ["Richesse / Devenir riche", "Trop extrême pour Lucas qui veut un 2ᵉ salaire"],
          ["Méthode secrète", "Classique VSL arnaque"],
          ["Automatique / Automatisé", "Directement associé aux arnaques"],
          ["Gourou", "Connotation sectaire"],
        ]} />

        <RedFlagCat title="Catégorie 2 — Imaginaire 'risque entrepreneurial'" words={[
          ["Agence (en haut de funnel)", "Active local, charges, employés, risque capital"],
          ["Créer ton entreprise / Lancer ta boîte", "Trop lourd, trop risqué"],
          ["Entrepreneur / Entrepreneuriat", "Identité non encore adoptée → rejet si trop tôt"],
          ["Business en ligne", "Connoté dropshipping / MLM"],
          ["Quitte ton job", "Trop radical pour quelqu'un qui veut un 2ᵉ salaire EN PARALLÈLE"],
          ["Investissement (appliqué à la formation)", "Ambigu, peut sonner comme justification forcée du prix"],
        ]} />

        <RedFlagCat title="Catégorie 3 — Surpromesses" words={[
          ["Facile / Simple / En quelques clics", "Les bons profils savent que ça demande du travail"],
          ["Résultats garantis", "Juridiquement risqué + émotionnellement suspect"],
          ["10 000€/mois en accroche", "Trop loin de la réalité immédiate"],
          ["2h par jour comme argument principal", "Garder comme détail, pas comme promesse centrale"],
        ]} />

        <RedFlagCat title="Catégorie 4 — Mots trop vagues" words={[
          ["Formation", "Porte le poids des mauvaises expériences"],
          ["Marketing digital (seul)", "Trop abstrait"],
          ["Opportunité", "Galvaudé par le MLM"],
          ["Liberté (seul)", "Trop vague — géographique ? financière ?"],
          ["Succès / Réussir", "Trop générique"],
        ]} />

        <RedFlagCat title="Catégorie 5 — Peur de l'effort" words={[
          ["Prospecter / Prospection", "Image démarchage à froid, rejet, inconfort social"],
          ["Démarcher", "Même problème"],
          ["Sacrifier / Sacrifice", "Il ne veut pas sacrifier son équilibre"],
          ["Travailler dur (argument)", "Contre-productif pour quelqu'un qui construit en parallèle"],
        ]} />

        <RedFlagCat title="Catégorie 6 — Jargon niche saturé" words={[
          ["Laptop lifestyle", "Cliché épuisé"],
          ["Scalable / Scaler", "Anglicisme hors vocabulaire"],
          ["Personal branding", "Jargon déconnecté"],
          ["Side hustle", "Positionne l'activité comme un à-côté sans sérieux"],
          ["Funnel / Tunnel de vente en accroche", "Incompréhensible pour un niveau 2,5"],
          ["Mindset", "Galvaudé, perçu comme non actionnable"],
        ]} />

        <SubBlock title="Le vocabulaire qui remplace (issu des verbatims leads)">
          <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.05] p-4 mb-4">
            <p className="text-[0.92rem] leading-relaxed text-white/80">
              <b className="text-white">Règle d'or :</b> utiliser le vocabulaire que LES LEADS utilisent pour décrire LEUR problème — pas le vocabulaire qu'on utilise pour décrire LE PRODUIT. Le prospect qui entend ses propres mots se sent compris avant même d'avoir évalué l'offre.
            </p>
          </div>
          <ul className="grid gap-2 text-[0.9rem] leading-snug text-white/80 md:grid-cols-2">
            <Good>Métier digital</Good>
            <Good>Deuxième salaire</Good>
            <Good>Activité en parallèle / à côté de mon job</Good>
            <Good>Accompagnement / suivi personnalisé</Good>
            <Good>Ne plus dépendre de personne / d'un seul salaire</Good>
            <Good>Travailler avec des entreprises</Good>
            <Good>Sans quitter le premier (salaire)</Good>
            <Good>Plusieurs compétences complémentaires</Good>
            <Good>Facturer le même client plusieurs fois</Good>
            <Good>Coach nommé / accompagnateur individuel</Good>
          </ul>
        </SubBlock>
      </Block>

      {/* MONOLOGUE INTÉRIEUR */}
      <Block num="8" title="La Voix de Lucas — Monologue intérieur">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6 md:p-8">
          <Quotes size={32} weight="duotone" className="text-accent-400" />
          <div className="mt-4 space-y-4 text-[1rem] leading-[1.75] text-white/85 md:text-[1.05rem]">
            <p>J'ai 28 ans. J'ai fait ce qu'on m'a dit de faire. Bac, études, diplôme, CDI ou bon boulot stable. Et là, je me retrouve à payer mon loyer, mes charges, et à la fin du mois je compte encore.</p>
            <p>Le truc c'est que je suis pas en galère. C'est ça le pire. Je m'en sors. Mais 's'en sortir' c'était pas le plan. Le plan c'était avoir une vie — partir vivre où j'ai envie, voyager, financer mes projets, construire quelque chose qui m'appartient. Et là je vois que ça, ça va pas arriver en restant où je suis.</p>
            <p>Dans mon taf, si je monte en compétences pendant 8 ans, j'aurai peut-être 200€ de plus. Notre génération peut faire le constat : pour le même salaire, on vit pas à la même hauteur que nos parents. Et autour de moi, personne comprend vraiment. Ma famille est 100% salariée depuis toujours. Ma copine a les mêmes rêves mais elle attend que tout soit carré avant de se lancer. Et moi j'ai des idées de business presque tous les jours, mais on n'a toujours pas fait.</p>
            <p>J'ai regardé des formations, des systèmes, des gourous. J'ai même payé pour une ou deux. Ça n'a rien donné — pas de vrai suivi, trop de monde, des résultats décevants. Et maintenant je suis méfiant. Mais là il y a quelque chose qui me parle différemment. La transparence, l'aspect humain, une vraie communauté de gens comme moi. Ce n'est pas 'gagne de l'argent en dormant'. C'est une compétence réelle, pour de vraies entreprises, avec quelqu'un qui a fait la preuve que ça marche.</p>
            <p>Ce qui me bloque vraiment c'est pas l'argent. C'est la peur de confirmer que je ne suis pas capable. Que j'ai regardé ça de trop loin pendant deux ans et que dans la vraie vie, c'est moi qui ne suis pas fait pour ça. Et aussi la peur de la spirale : reprendre une mission, être bien au bout de quelques mois, et voir les années passer jusqu'à ce que j'aie 50 ans et que je me dise 'pourquoi j'ai pas fait ça'.</p>
            <p>Mais dans le fond je sais aussi que si je fais rien, dans 5 ans je serai exactement là où je suis — avec plus d'amertume, des projets qui ne se sont pas faits, et peut-être un corps un peu plus abîmé. Alors peut-être que là, c'est le bon moment. J'ai jamais été aussi près.</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-gold-400/35 bg-gold-400/[0.06] p-6">
          <p className="inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-wide text-gold-400">
            <Sparkle size={14} weight="fill" /> Note stratégique
          </p>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-white/85">
            La douleur n'est pas la misère — c'est <b className="text-white">le décalage entre les attentes légitimes d'un parcours bien joué et une réalité qui ne récompense pas à la hauteur</b>.
          </p>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-white/85">
            <b className="text-white">Le message qui convertit :</b> "Tu as bien joué le jeu et le jeu ne récompense pas — il existe une sortie."
          </p>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-white/85">
            <b className="text-white">Les deux peurs à traiter :</b>
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-[0.92rem] text-white/80">
            <li><b className="text-white">Peur de l'arnaque</b> → témoignages de gens hors marketing qui ressemblent au lead</li>
            <li><b className="text-white">Peur de l'échec personnel</b> → gens dans la même situation qui ont réussi</li>
          </ul>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-white/85">
            <b className="text-white">Levier supplémentaire (batch 2) :</b> la peur de la "spirale" — reprendre le schéma habituel, se retrouver bien au bout de quelques mois, et réaliser dans 10 ans qu'on a "passé son tour".
          </p>
        </div>
      </Block>
    </div>
  );
}

/* ============================================================
 * Autres sections
 * ============================================================ */
function Site() {
  return (
    <a
      href="https://agencilab.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl border border-accent-400/30 bg-accent-400/[0.08] px-4 py-2.5 text-[0.95rem] font-bold text-accent-400 transition hover:bg-accent-400/[0.15]"
    >
      agencilab.com <ArrowSquareOut size={16} weight="bold" />
    </a>
  );
}

function FunnelMeta() {
  return (
    <div className="space-y-4">
      <StepCard
        step="1"
        title="Publicité Meta"
        url="(Facebook / Instagram)"
        description="Vidéo ou visuel signé Louis qui promet de devenir Growth Marketer et de générer 1 500 à 3 000€/mois sans quitter son emploi."
        tag="Trafic froid"
        externalUrl="https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=ALL&is_targeted_country=false&media_type=all&search_type=page&sort_data%5Bdirection%5D=desc&sort_data%5Bmode%5D=total_impressions&view_all_page_id=902533029898552"
        externalLabel="Voir les pubs actives"
      />
      <StepCard
        step="2"
        title="Opt-in — /decouvrir-m"
        url="agencilab.com/decouvrir-m"
        description="Page de capture avec formulaire Tally (situation pro, revenus, ambition). Filtre les leads non qualifiés et redirige les bons vers la VSL."
        tag="Capture"
      />
      <StepCard
        step="3"
        title="VSL — /explication-m"
        url="agencilab.com/explication-m"
        description="Vidéo longue (21 min) où Louis explique le métier, les chiffres, la méthode, et les preuves. Au bout de 21 min, le bouton de réservation iClosed apparaît."
        tag="Pré-vente"
      />
      <StepCard
        step="4"
        title="Page de confirmation — /confirmation-m"
        url="agencilab.com/confirmation-m"
        description="Après la réservation iClosed, le prospect atterrit ici. Récap du rendez-vous + ce qu'il doit préparer avant l'appel."
        tag="Post-réservation"
      />
      <StepCard
        step="—"
        title="Page de disqualification"
        url="(branche Tally hors-critères)"
        description="Si le formulaire détecte un profil non qualifié (revenus trop bas, hors cible, etc.), le lead est redirigé vers une page de disqualification au lieu de la VSL. Pas d'appel programmé."
        tag="Hors funnel"
      />
    </div>
  );
}

function Reseaux() {
  return (
    <div>
      <div className="grid gap-3 md:grid-cols-2">
        <SocialCard Icon={YoutubeLogo} label="YouTube" handle="270k+ abonnés" description="Sa chaîne principale. La majorité du trust se construit là." href="https://www.youtube.com/@LouisEsquier" />
        <SocialCard Icon={InstagramLogo} label="Instagram" handle="@louisesquier" description="Stories quotidiennes, behind-the-scenes Agencilab." href="https://www.instagram.com/louisesquier" />
      </div>
      <p className="mt-4 text-[0.85rem] text-white/45">
        Si le prospect dit "je connais Louis depuis longtemps", il vient probablement de YouTube — trust déjà acquis, focus direct sur le plan d'action.
      </p>
    </div>
  );
}

function ScriptClosing() {
  return (
    <div className="space-y-8">
      {/* Intro / règle des niveaux */}
      <div className="rounded-2xl border border-accent-400/25 bg-accent-400/[0.05] p-5 md:p-6">
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-accent-400">Règle des niveaux d'information</p>
        <p className="mt-3 text-[0.92rem] leading-relaxed text-white/80">
          <b className="text-white">N1</b> : surface, on ne close pas dessus. <b className="text-white">N2</b> : à creuser, factuel/chiffré. <b className="text-white">N3</b> : douleur centrale, le levier sur lequel on close.
        </p>
        <p className="mt-2 text-[0.92rem] leading-relaxed text-white/80">
          On ne passe pas à la partie suivante tant qu'on n'a pas atteint le N3. Outils pour descendre : chiffrer/dater (N1→N2), « en quoi exactement ? » + relier à un autre domaine de vie (N2→N3).
        </p>
      </div>

      <ScriptStep num="1" title="Créer du lien">
        <Bullet>Salut [prénom], comment ça va ? Content de t'avoir.</Bullet>
        <Bullet>Ça me fait super plaisir de t'avoir en appel !</Bullet>
        <Bullet>Tu m'appelles d'où ? <i>(smalltalk, une blague)</i></Bullet>
      </ScriptStep>

      <ScriptStep num="2" title="Poser le cadre">
        <Bullet>Ça te va si je prends 1 minute pour t'expliquer comment va se passer l'appel ? <b className="text-white">Attendre le oui.</b></Bullet>
        <Bullet>Le but va être de faire un point clair sur ta situation et de valider 8 points précisément. Si ces 8 points sont validés et que ton profil correspond au programme d'Agencilab, je te ferai une offre. C'est ok pour toi ? <b className="text-white">Attendre le oui.</b></Bullet>
        <Bullet>Je te préviens : on n'accompagne pas tout le monde, c'est un appel de candidature. Donc je vais te poser des questions directes et parfois te bousculer un peu — c'est parce que je dois vraiment bien te comprendre pour savoir si on peut t'aider. Ça te va ? <b className="text-white">Attendre le oui.</b></Bullet>
        <Bullet>Et dernière chose : Agencilab est un accompagnement premium, donc oui c'est un investissement. On en reparle à la fin de l'appel. C'est ok pour toi ? <b className="text-white">Attendre le oui.</b></Bullet>
        <Bullet><i>Super, allez on commence !</i></Bullet>
      </ScriptStep>

      {/* Les 8 croyances */}
      <div className="rounded-2xl border border-gold-400/35 bg-gold-400/[0.06] p-5 md:p-6">
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-gold-400">Les 8 croyances à valider</p>
        <ul className="mt-3 grid gap-2 text-[0.92rem] leading-snug text-white/80 md:grid-cols-2">
          <Li><b className="text-white">Douleur</b> — le BIG THING qui le fait passer à l'action</Li>
          <Li><b className="text-white">Conséquences</b> de la douleur</Li>
          <Li><b className="text-white">Doute</b> de réussir seul</Li>
          <Li><b className="text-white">Logistique</b> — a-t-il du temps</Li>
          <Li><b className="text-white">Solution</b> — qu'a-t-il déjà essayé</Li>
          <Li><b className="text-white">Finance</b> — capacité + volonté d'investir</Li>
          <Li><b className="text-white">Vision</b> — ce qu'il veut atteindre</Li>
          <Li><b className="text-white">Confiance</b> — nous fait-il confiance</Li>
        </ul>
      </div>

      <ScriptStep num="3" title="Douleur">
        <p className="text-[0.85rem] font-bold uppercase tracking-wide text-accent-400">Pont d'entrée</p>
        <Bullet>Déjà j'aimerais savoir [prénom], qu'est-ce qui t'a poussé à réserver cet appel aujourd'hui ?</Bullet>
        <Bullet><i>(si besoin de creuser)</i> Ok je vais reformuler : qu'est-ce que tu vis dans ta vie qui ne te convient pas ?</Bullet>

        <p className="mt-4 text-[0.85rem] font-bold uppercase tracking-wide text-accent-400">Niveau 2 — chiffrer la situation</p>
        <Bullet>Et là, tu gagnes combien aujourd'hui en tant que [métier] ?</Bullet>
        <Bullet>Tes horaires, ta charge de travail, ça ressemble à quoi ?</Bullet>
        <Bullet>Ça fait combien de temps que t'es dans cette situation ? <i>(important à noter)</i></Bullet>
        <Bullet>En quoi ça te pose problème de [reformuler la situation] ?</Bullet>

        <p className="mt-4 text-[0.85rem] font-bold uppercase tracking-wide text-accent-400">Niveau 3 — l'émotion</p>
        <Bullet>Et tu le vis comment ?</Bullet>
        <Bullet>Ça te pèse à quel moment de la journée ou de la semaine ?</Bullet>
        <Bullet>C'est quoi ta pire crainte vis-à-vis de ta situation ?</Bullet>

        <p className="mt-4 text-[0.92rem] italic leading-snug text-white/75">
          <i>(reformuler)</i> Donc si je comprends bien, aujourd'hui [reformulation], c'est ça ? <b className="text-white not-italic">Attendre le oui.</b>
        </p>
      </ScriptStep>

      <ScriptStep num="4" title="Conséquences (de la douleur)">
        <p className="text-[0.85rem] font-bold uppercase tracking-wide text-accent-400">Niveau 2</p>
        <Bullet>Je peux te poser une question franche ? C'est pas pour être pessimiste. Mais si tu changes rien, il se passera quoi d'ici 1 an ?</Bullet>

        <p className="mt-4 text-[0.85rem] font-bold uppercase tracking-wide text-accent-400">Niveau 3</p>
        <Bullet>Et le fait d'être bloqué là-dessus depuis [X temps], ça déborde sur quoi d'autre ? (couple, moral, sommeil, image de toi) → <b className="text-white">en quoi exactement ?</b></Bullet>
        <Bullet>Ça fait [X temps] que ça te ronge, et t'as l'air de pouvoir tenir comme ça. C'est quoi le vrai déclic qui fait que t'es là, maintenant ?</Bullet>
        <Bullet>Rester comme ça encore 3 ans, ce serait possible pour toi ? <i>(challenger : "Pourquoi pas ?")</i></Bullet>
        <Bullet>Et la décision de changer ta situation, elle appartient à qui ? <i>(contre-objection si quelqu'un d'autre que lui)</i></Bullet>

        <p className="mt-4 text-[0.92rem] italic leading-snug text-white/75">
          <i>(reformuler)</i> Donc si tu fais rien, dans [X] il va se passer [ça] ? Et la seule personne capable de changer ça, c'est toi. T'es d'accord ?
        </p>
      </ScriptStep>

      <ScriptStep num="5" title="Doute (réussir seul)">
        <div className="rounded-xl border border-accent-400/25 bg-accent-400/[0.05] p-4">
          <p className="text-[0.75rem] font-bold uppercase tracking-wide text-accent-400">💡 Objectif</p>
          <p className="mt-2 text-[0.92rem] leading-relaxed text-white/80">
            Bousculer l'ego et faire descendre la note, mais ne pas trop insister pour ne pas briser le rapport. S'il ne descend pas, il n'est pas forcément utile de poursuivre — il se dira qu'il peut réussir seul.
          </p>
          <ul className="mt-3 space-y-1.5 text-[0.9rem] leading-snug text-white/75">
            <Li><b className="text-white">5/10</b> = il ne se mouille pas → "C'est une chance sur 2. Mais brutalement honnête, vu tes résultats récents, tu te mettrais quoi comme note ?"</Li>
            <Li><b className="text-white">0-4/10</b> = il sait que ça va être difficile → "Qu'est-ce qui te fait dire 3/10 ? Donne-moi 3 éléments."</Li>
          </ul>
          <p className="mt-3 text-[0.92rem] leading-relaxed text-white/80">
            Terminer par : « Qu'est-ce qui t'empêche de résoudre ça tout seul ? » → Reformuler : « Donc avec ce que tu me dis, seul tu n'y arriveras pas. » <b className="text-white">Attendre le oui.</b>
          </p>
        </div>

        <p className="text-[0.92rem] leading-relaxed text-white/75">
          Je vais te demander de te noter de 1 à 10 sur quelques points. Sois honnête — c'est juste pour qu'on voie où t'en es. Ça te va ?
        </p>

        <ScoringQuestion
          title="1. Indice de confiance (réussir seul)"
          q='Avec tes ressources actuelles, sur 10, ta confiance pour y arriver tout seul à [situation rêvée], sans accompagnement, tu te mets combien ?'
          branches={[
            ["6-10", "Aide-moi à comprendre : ça fait [X temps] que tu n'as pas de résultats, comment tu peux être aussi confiant ? (challenger jusqu'à ce qu'il baisse)"],
            ["5", "Ça fait une chance sur 2, mais ça fait [X temps] que t'as pas de résultats, comment tu peux te mettre aussi haut ?"],
            ["0-4", "Qu'est-ce qui te fait dire 3 ? (trouver ce qui l'empêche d'y arriver seul)"],
          ]}
        />
        <ScoringQuestion
          title="2. Compétence en Growth Marketing"
          q='Sur 10, ta capacité à livrer un service de Growth Marketing à un client dès demain (site, tunnel, pub) ?'
          branches={[
            ["6-10", "Comment tu peux te mettre aussi haut alors que t'as jamais livré ce genre de service à un client ?"],
            ["5", "Une chance sur 2, mais concrètement t'as déjà livré un site ou une campagne à un client ?"],
            ["0-4", "Qu'est-ce qui te manque pour être à 10 ?"],
          ]}
        />
        <ScoringQuestion
          title="3. Compétence en vente"
          q='Sur 10, ta capacité à aller chercher un client et à le signer (prospecter + closer) ?'
          branches={[
            ["6-10", "Comment tu peux te mettre aussi haut alors que t'as jamais signé de client en Growth Marketing ?"],
            ["5", "Une chance sur 2, mais t'as déjà prospecté et closé quelqu'un pour ce type de service ?"],
            ["0-4", "Qu'est-ce qui te manque pour être à 10 ?"],
          ]}
        />
        <ScoringQuestion
          title="4. Qualité de ton entourage / réseau (sur cette activité)"
          q='Sur 10, la qualité de ton entourage pour avancer dans le Growth Marketing : as-tu autour de toi des gens qui ont déjà réussi, qui peuvent te conseiller et te tirer vers le haut ?'
          branches={[
            ["6-10", "Tu connais concrètement combien de personnes qui vivent réellement de cette activité aujourd'hui ?"],
            ["5", "Quand tu bloqueras sur cette activité, tu pourras demander à qui exactement ?"],
            ["0-4", "Qu'est-ce qui te manque pour être à 10 ?"],
          ]}
        />

        <p className="text-[0.92rem] italic leading-snug text-white/75">
          <i>(faire la moyenne à voix haute)</i> Donc aujourd'hui on est à [X]/10 de moyenne. Qu'est-ce que t'en penses ? Cette note te convient ?
        </p>
        <p className="text-[0.85rem] italic text-white/55">
          <i>Le but : qu'il dise lui-même que non, qu'il veut changer. Le gap est chiffré et c'est LUI qui l'a posé.</i>
        </p>
      </ScriptStep>

      <ScriptStep num="6" title="Logistique (le temps)">
        <Bullet>Tu pourrais dégager combien de temps par semaine pour t'y mettre, le soir ou le week-end ?</Bullet>
        <Bullet>Aujourd'hui, t'as vraiment le temps de développer une activité à côté ?</Bullet>
      </ScriptStep>

      <ScriptStep num="7" title="Solution (ce qu'il a déjà essayé)">
        <div className="rounded-xl border border-accent-400/25 bg-accent-400/[0.05] p-4">
          <p className="text-[0.75rem] font-bold uppercase tracking-wide text-accent-400">💡 Objectif</p>
          <ul className="mt-2 space-y-1.5 text-[0.9rem] leading-snug text-white/75">
            <Li>Collecter des infos pour voir si ça a fonctionné ou non.</Li>
            <Li>Avoir des cartouches pour éviter qu'à la fin il dise : "Oui mais je vais essayer ça en fait."</Li>
          </ul>
        </div>
        <Bullet>Qu'est-ce que t'as déjà essayé pour t'en sortir ? Ça a donné quoi ? <i>(s'il n'a jamais rien essayé, comprendre pourquoi)</i></Bullet>
        <p className="text-[0.92rem] italic leading-snug text-white/75">
          <i>(reformulation)</i> OK donc t'as déjà essayé, t'es pas du genre à rester les bras croisés. Ce qui t'a manqué c'est pas l'envie, c'est le bon cadre.
        </p>
      </ScriptStep>

      <ScriptStep num="8" title="Finance">
        <Bullet>Je peux te poser une question un peu perso sur le côté financier ? C'est pour qu'on regarde ensemble ce qui est jouable. T'es ok pour qu'on en parle ouvertement ? <b className="text-white">Attendre le oui.</b></Bullet>
        <Bullet>T'as combien de côté en ce moment, à peu près ?</Bullet>
        <Bullet><i>(si rien)</i> T'as accès à du crédit ? Quelqu'un qui peut t'aider ? Ou un autre moyen de réunir la somme ?</Bullet>
        <Bullet><i>(si toujours rien)</i> Challenger sur ce qu'il avait mis dans le formulaire.</Bullet>
        <div className="mt-2 rounded-xl border border-red-500/25 bg-red-500/[0.05] p-4">
          <p className="text-[0.85rem] font-bold uppercase tracking-wide text-red-400">Si vraiment rien — cut l'appel</p>
          <p className="mt-2 text-[0.92rem] italic leading-snug text-white/80">
            "J'ai beaucoup apprécié l'échange. L'étape d'après c'était de te présenter l'accompagnement, mais ça sert à rien que je le fasse aujourd'hui. Je te propose qu'on reste en contact si jamais tu trouves une solution, parce que tu correspond totalement au genre de personnes qu'on accompagne."
          </p>
        </div>
      </ScriptStep>

      <ScriptStep num="9" title="Vision passionnante (ce qu'il veut atteindre)">
        <div className="rounded-xl border border-gold-400/35 bg-gold-400/[0.06] p-4">
          <p className="text-[0.75rem] font-bold uppercase tracking-wide text-gold-400">💎 Le Paradis</p>
          <p className="mt-2 text-[0.92rem] leading-relaxed text-white/80">
            Le faire monter dans la Ferrari, lui montrer toutes les options, lui faire démarrer, puis lui faire faire un tour.
          </p>
        </div>
        <Bullet>Écoute, merci de m'avoir partagé tout ça. Sur une note plus positive, imaginons que j'aie le génie d'Aladdin avec moi et que tu puisses lui demander ABSOLUMENT ce que tu veux — mesurable et quantifiable — comment voudrais-tu que les choses soient, là maintenant, dans ta vie personnelle et professionnelle ?</Bullet>
        <p className="text-[0.85rem] italic text-white/55">
          <i>(l'aider à clarifier sa vision pour qu'elle soit mesurable, quantifiable et réalisable — ne pas avancer tant que la vision n'est pas claire)</i>
        </p>
        <Bullet>Quel est le <b className="text-white">premier</b> changement que tu aimerais vivre ? Pourquoi ? En quoi les choses seraient différentes pour toi ?</Bullet>
        <Bullet>Quel est le <b className="text-white">deuxième</b> changement ?</Bullet>
        <Bullet>Quel est le <b className="text-white">troisième</b> changement ?</Bullet>
        <p className="text-[0.85rem] italic text-white/55">
          <i>(le prospect doit changer de voix, être dynamique et vraiment vivre le moment à fond)</i>
        </p>
        <p className="text-[0.92rem] italic leading-snug text-white/75">
          <i>(reformuler)</i> J'ai une vision super claire de ce que tu veux maintenant.
        </p>
      </ScriptStep>

      <ScriptStep num="10" title="Confiance & engagement (bascule vers le pitch)">
        <Bullet>Sur 1 à 10, à combien ça fait sens pour toi de bosser sérieusement là-dessus, maintenant ? Pourquoi ce chiffre ?</Bullet>
        <p className="text-[0.92rem] italic leading-snug text-white/75">
          <i>(fin du diagnostic)</i> Si je résume : aujourd'hui [situation], tu veux [objectif chiffré] d'ici [délai], ce qui bloque c'est [obstacle]. Et si ça n'a pas marché jusqu'ici, c'est parce que [raison].
        </p>
        <Bullet>À ton avis, qu'est-ce qu'il va se passer maintenant ? <i>(s'il dit "je sais pas" ou "demander le prix", recadrer : "Il faudrait peut-être que je te présente l'accompagnement avant non ?")</i></Bullet>
      </ScriptStep>

      <ScriptStep num="11" title="Pitch">
        <div className="rounded-xl border border-accent-400/25 bg-accent-400/[0.05] p-4">
          <p className="text-[0.75rem] font-bold uppercase tracking-wide text-accent-400">💡 Règles du pitch</p>
          <p className="mt-2 text-[0.92rem] leading-relaxed text-white/80">
            Tu parles <b className="text-white">résultats</b>, pas features. Tu personnalises avec SES mots de la découverte (sa douleur, son objectif chiffré, ses notes). Tu partages ton écran pour montrer (résultats élèves, communauté, calendrier). Tu fais valider à chaque étape. Le prospect t'a demandé de pitcher, donc tu mènes.
          </p>
        </div>

        <h4 className="mt-4 text-[1rem] font-bold tracking-tight text-white">Partie 0 — Vendre l'entreprise (légitimité + confiance)</h4>
        <Bullet><i>(intro)</i> "Avant de te montrer comment on va t'accompagner, laisse-moi 2 minutes pour te parler d'Agencilab, que tu saches à qui t'as affaire."</Bullet>
        <Bullet><b className="text-white">L'histoire / la légitimité :</b> Agencilab créé il y a 3 ans par Louis Esquier. Il fait du marketing depuis 10 ans, +270 000 abonnés sur YouTube, à 23 ans il avait une agence à +1M€/an, il a accompagné des dizaines de PME et créateurs (les Moustachus, Nassim Sahili, Valek, Norton, Charles Elias Farah), avec son associé Mathis Baron.</Bullet>
        <Bullet><b className="text-white">Les chiffres (preuve) :</b> +1 018 personnes accompagnées, 4,7/5 sur Trustpilot, revenu moyen +2 987€/mois généré par les élèves, premier client signé en 52 jours en moyenne (beaucoup en signent dès les 2-3 premières semaines).</Bullet>
        <Bullet><b className="text-white">La mission (scent match) :</b> Aider des salariés comme toi, partant de zéro sans expérience en Growth Marketing, à se créer +2 987€/mois en 3 mois — comme [Yohann, ex-gendarme / Florent, ex-boulanger] ou [Clément Morel] qui a doublé son salaire.</Bullet>

        <h4 className="mt-5 text-[1rem] font-bold tracking-tight text-white">Partie 1 — Roadmap (le chemin clair)</h4>
        <p className="text-[0.92rem] italic leading-snug text-white/75">
          <i>(cadre)</i> "Agencilab, ça se fait en 90 jours. Chaque mois est découpé en 3-4 phases, et à chaque fin de phase t'as un quick win. À la fin, le méga win : ton objectif, +2 987€/mois. C'est bon pour toi ?"
        </p>
        <RoadmapMonth title="Mois 1 — Fondations & première compétence" items={[
          ["Phase 1 (Semaine 1)", "Mindset, organisation, setup IA et environnement de travail.", "Plan d'action perso clair, tu sais quoi faire chaque jour."],
          ["Phase 2 (Semaine 2)", "Première compétence : créer des sites / tunnels de vente, accélérés par l'IA.", "Tu sais créer ton premier site pro, prêt à avoir un client."],
          ["Phase 3 (Semaines 3-4)", "Prospection & acquisition : techniques Agencilab pour chercher tes premiers prospects.", "Tes premiers rendez-vous décrochés."],
        ]} />
        <RoadmapMonth title="Mois 2 — Premier client & livraison" items={[
          ["Phase 1", "Closing de ton premier client (1 000-2 000€).", "Premier contrat signé, premier encaissement (screenshot virement)."],
          ["Phase 2", "Livraison du service avec l'IA.", "Ton client a un résultat."],
          ["Phase 3", "Bilan coach + nouvelle compétence (pub Meta/Google).", "Bilan clair + nouvelle corde à ton arc."],
        ]} />
        <RoadmapMonth title="Mois 3 — Récurrence & deuxième salaire" items={[
          ["Phase 1", "Fidélisation : passer ton client en récurrent (500-1 000€/mois).", "Premier revenu qui retombe chaque mois."],
          ["Phase 2", "Signer 2-3 nouveaux clients avec ton système.", "Tu construis ton second revenu à +2 987€/mois."],
          ["Phase 3", "Bilan stratégique avec un conseiller.", "MÉGA WIN — Officiellement ton deuxième salaire à +2 987€/mois."],
        ]} />
        <Bullet><i>(faire valider)</i> "Est-ce que ça correspond à ce que tu attendais ?"</Bullet>

        <h4 className="mt-5 text-[1rem] font-bold tracking-tight text-white">Partie 2 — Les piliers (pourquoi ça va marcher pour LUI)</h4>
        <Bullet><i>(transition)</i> "Si je peux te dire que tu vas y arriver, c'est parce qu'Agencilab repose sur 3 piliers. Je peux te les présenter ?" <b className="text-white">Attendre le oui.</b></Bullet>
        <ul className="space-y-2 text-[0.92rem] leading-snug text-white/80">
          <Li><b className="text-white">Pilier 1 — Le contenu :</b> tous les process accélérés par l'IA du business de Louis à 1M€/an, copier-coller. Sites en 4h, pubs en 2h/semaine → répond à ta note de [X]/10 en compétences.</Li>
          <Li><b className="text-white">Pilier 2 — L'accompagnement :</b> 3 coachings de groupe par semaine avec Nathan, Tino (vente), Mathis (IA), Louis (vision). Cours en présentiel tous les trimestres → répond à ta note de [X]/10 sur "réussir seul" et sur ton entourage.</Li>
          <Li><b className="text-white">Pilier 3 — La culture de la réussite :</b> le réseau, on redistribue des clients aux élèves les plus engagés → répond à ta note de [X]/10 en vente.</Li>
        </ul>
        <Bullet><i>(validation)</i> "T'as des questions ? Ça te parle ?"</Bullet>
        <Bullet><b className="text-white">(la surprise / garantie)</b> "Et on a une dernière chose pour toi, tu veux que je te le dise ?" <i>Attendre le oui. (pause)</i> "On est tellement sûrs de notre méthode qu'on a une garantie spéciale : si tu appliques tout ce qu'on t'enseigne et que tu ne trouves pas ton 1er client, on t'en donne un gratuitement."</Bullet>
      </ScriptStep>

      <ScriptStep num="12" title="Transition & question pré-close">
        <Bullet>Tu penses qu'avec ce programme tu pourras toi aussi [atteindre son objectif] ? <b className="text-white">Attendre le oui.</b></Bullet>
        <Bullet>Je vais te partager le prix : si on se rend compte que t'as les finances, ou qu'on trouve un arrangement juste pour toi, est-ce qu'il y aurait autre chose qui pourrait t'empêcher de démarrer aujourd'hui ?</Bullet>
      </ScriptStep>

      <ScriptStep num="13" title="Prix & close">
        <Bullet>Pour tout l'accompagnement — les 3 piliers, le réseau, le présentiel, la garantie 1er client : <b className="text-white">[L'offre]</b> est à <b className="text-white">[Prix]</b>.</Bullet>
        <div className="rounded-xl border border-gold-400/35 bg-gold-400/[0.06] p-4 text-[0.92rem] leading-snug text-white/80">
          <p className="font-bold text-gold-400">⏸ SILENCE 5-7 secondes. Tu ne parles pas le premier.</p>
        </div>
        <Bullet>S'il ne dit rien : "Qu'est-ce que t'en penses ? T'as envie de démarrer ?"</Bullet>
        <Bullet>S'il demande une facilité : "Ce serait plus confortable étalé ? Tu me permets de faire un point rapide sur ta situation financière pour trouver la meilleure formule ?" <i>(→ 6× ~600€/mois ou acompte 200€ pour réserver)</i></Bullet>
      </ScriptStep>

      <ScriptStep num="14" title="Traitement des objections">
        <div className="rounded-xl border border-accent-400/25 bg-accent-400/[0.05] p-4">
          <p className="text-[0.75rem] font-bold uppercase tracking-wide text-accent-400">Toujours dans cet ordre</p>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-[0.9rem] leading-snug text-white/80">
            <li><b className="text-white">Embrasser</b> — "Ok, on en parle, pas de souci." <i>(empathie sans approuver)</i></li>
            <li><b className="text-white">Isoler</b> — "Mets [l'objection] de côté 2 sec. Sur tout ce que je t'ai montré, tu sens que ça t'amène à 100% à [objectif] ? Sur 1 à 10 ?" <i>(si &lt; 10 : qu'est-ce qui t'empêche d'être à 10 ?)</i></li>
            <li><b className="text-white">Creuser</b> — "C'est quoi le vrai point sur lequel t'es pas à 100% ?"</li>
            <li><b className="text-white">Closer</b> — seulement une fois la vraie objection isolée.</li>
          </ol>
        </div>

        <Objection title="« Je dois réfléchir »">
          <Bullet>Réfléchir à quoi exactement ? Sur quel point t'es pas à 100% ? Au moins je t'éclaire.</Bullet>
          <Bullet>Là t'es chaud. En raccrochant, l'ancienne version de toi — celle qui doute — va reprendre le dessus. Décidons avec la future version : celle qui a déjà signé ses clients et se remercie d'avoir osé.</Bullet>
        </Objection>

        <Objection title="« C'est cher / pas les moyens maintenant »">
          <Bullet>Je pense pas que payer d'un coup et te mettre short soit la bonne idée. Rester 6 mois de plus au même point non plus. Donc : un premier versement, tu démarres tout de suite, on étale le reste en 6 fois. Si je fais ça pour toi, t'es prêt à démarrer ?</Bullet>
          <Bullet>Si tout ce que je t'ai dit est vrai et que ça t'amène [objectif], c'est raisonnable d'investir 3 599€ pour ça ? Oui ou non.</Bullet>
        </Objection>

        <Objection title="« J'en parle à ma femme / mes parents »">
          <Bullet>Y a 2 façons d'en parler : soit faible et incertain — "j'ai parlé à un gars sur internet, c'est 3 600€, t'en penses quoi ?" — soit posé — "j'ai décidé de lancer mon activité comme il faut, j'ai trouvé quelqu'un pour nous aider, j'ai besoin de ton soutien". Laquelle la convainc ? Si t'es pas certain, elle le sera pas. Lequel des deux mecs tu vas être ?</Bullet>
          <Bullet>On peut planifier un point rapide tous les trois si ça t'aide.</Bullet>
        </Objection>

        <Objection title="« Peur de l'arnaque / je me suis déjà fait avoir »">
          <Bullet>T'as raison de te méfier, tu t'es déjà fait avoir. Justement : tout est vérifiable chez nous, et t'as la garantie 1er client en 3 mois. Cette fois le risque, c'est nous qui le portons.</Bullet>
        </Objection>

        <Objection title="Logistique (facture, plafond CB, date)">
          <p className="text-[0.85rem] italic text-white/55">À régler DANS l'appel :</p>
          <Bullet>Je te fais la facture par mail tout de suite.</Bullet>
          <Bullet>Appelle ta banque, je patiente.</Bullet>
          <Bullet>On pose l'acompte de 200€ pour bloquer ta place et tu fais le virement ce soir.</Bullet>
        </Objection>
      </ScriptStep>

      <ScriptStep num="15" title="Finaliser">
        <Bullet>On valide le paiement ensemble là, je t'envoie le lien — tu me dis quand c'est passé. Ensuite je t'ajoute à la communauté et on cale ta 1ère session. On y va ?</Bullet>
        <Bullet><b className="text-white">Le contrat :</b> jamais par mail. On le montre à l'écran, ligne par ligne, puis : "dès qu'on valide le paiement, tu le reçois signé."</Bullet>
        <div className="rounded-xl border border-red-500/30 bg-red-500/[0.06] p-4">
          <p className="text-[0.85rem] font-bold uppercase tracking-wide text-red-400">Ne JAMAIS sortir de l'appel sans l'un des trois</p>
          <ul className="mt-2 space-y-1.5 text-[0.92rem] leading-snug text-white/85">
            <Li>Paiement validé dans l'appel</Li>
            <Li>Acompte encaissé (min. 200€) + date du solde</Li>
            <Li>R2 sous 48h max, invitation agenda envoyée en live</Li>
          </ul>
        </div>
      </ScriptStep>
    </div>
  );
}

function PitchDeck() {
  return (
    <div className="space-y-6">
      <a
        href="/pitch"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl border border-accent-400/30 bg-accent-400/[0.08] px-4 py-2.5 text-[0.95rem] font-bold text-accent-400 transition hover:bg-accent-400/[0.15]"
      >
        agencilab.com/pitch <ArrowSquareOut size={16} weight="bold" />
      </a>

      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
        <p className="text-[0.92rem] leading-relaxed text-white/75">
          Le pitch deck visuel à partager à l'écran pendant l'appel pour appuyer ta présentation. Page protégée par mot de passe — accès closer uniquement.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          <Bullet>Mot de passe : <code className="rounded-md bg-white/[0.06] px-2 py-0.5 font-mono text-[0.85rem] text-accent-400">agencilab2026</code></Bullet>
          <Bullet>Switch Incubateur (bleu) / Mentorat (or) en bas à droite</Bullet>
          <Bullet>Navigation : flèches ↑/↓ centrées à droite pour passer d'une slide à l'autre</Bullet>
          <Bullet>Snap-scroll plein écran, une section = un écran</Bullet>
        </div>

        <p className="mt-6 text-[0.85rem] uppercase tracking-wide text-white/45">Sections du pitch (dans l'ordre)</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-[0.92rem] leading-snug text-white/75">
          <li>Hero — qui on est, ce qu'on fait</li>
          <li>Louis — qui il est (bio + bullets)</li>
          <li>+10 000 000€ générés (proof founder)</li>
          <li>Chiffres globaux + mission</li>
          <li>Roadmap interactive 90 jours (9 étapes)</li>
          <li>Pilier 1 — Le contenu</li>
          <li>Pilier 2 — L'accompagnement</li>
          <li>Pilier 3 — La culture de la réussite (mur des wins)</li>
          <li>Pilier 4 bonus — Le carnet d'opportunités</li>
          <li>Recap de l'offre</li>
          <li>Comparaison "50 000€" (école de commerce)</li>
          <li>Prix</li>
          <li>Garantie 1er client</li>
        </ol>
      </div>
    </div>
  );
}

/* ============================================================
 * Composants UI réutilisables
 * ============================================================ */
function Block({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 md:p-8">
      <div className="mb-6 flex items-baseline gap-3">
        <span className="text-[3rem] font-black leading-none text-accent-400/30 md:text-[3.5rem]">{num}</span>
        <h2 className="text-[1.4rem] font-extrabold leading-tight tracking-tight text-white md:text-[1.7rem]">{title}</h2>
      </div>
      <div className="space-y-7">{children}</div>
    </section>
  );
}

function SubBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 text-[1.05rem] font-bold tracking-tight text-white md:text-[1.15rem]">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function KV({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 text-[0.92rem] leading-snug">
      <span className="font-semibold text-white">{k} :</span>
      <span className="text-white/75">{v}</span>
    </div>
  );
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
      <span>{children}</span>
    </li>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 text-[0.92rem] leading-snug text-white/70">
      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" />
      <span>{children}</span>
    </div>
  );
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border-l-2 border-accent-400/50 bg-white/[0.03] px-4 py-2.5 text-[0.92rem] italic leading-snug text-white/75">
      {children}
    </div>
  );
}

function Verbatim({ author, children }: { author: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border-l-2 border-accent-400/60 bg-white/[0.04] px-4 py-3.5">
      <p className="text-[0.95rem] italic leading-snug text-white/85">"{children}"</p>
      <p className="mt-2 text-[0.78rem] font-medium text-accent-400/80">— {author}</p>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-[1.4rem] font-extrabold leading-none tracking-tight text-white md:text-[1.6rem]">{value}</p>
      <p className="mt-1 text-[0.78rem] font-medium text-white/55">{label}</p>
    </div>
  );
}

function RedFlagCat({ title, words }: { title: string; words: [string, string][] }) {
  return (
    <div>
      <p className="mb-3 inline-flex items-center gap-2 text-[0.85rem] font-bold uppercase tracking-wide text-red-400">
        <Warning size={14} weight="fill" /> {title}
      </p>
      <ul className="space-y-2">
        {words.map(([word, reason]) => (
          <li key={word} className="flex items-start gap-3 rounded-xl border border-red-500/15 bg-red-500/[0.04] p-3">
            <XCircle size={18} weight="fill" className="mt-[2px] shrink-0 text-red-400" />
            <div className="min-w-0">
              <p className="text-[0.95rem] font-bold tracking-tight text-white">"{word}"</p>
              <p className="mt-0.5 text-[0.85rem] leading-snug text-white/60">{reason}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Good({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.05] px-3 py-2">
      <CheckCircle size={16} weight="fill" className="mt-[2px] shrink-0 text-emerald-400" />
      <span>"{children}"</span>
    </li>
  );
}

function StepCard({ step, title, url, description, tag, externalUrl, externalLabel }: { step: string; title: string; url: string; description: string; tag: string; externalUrl?: string; externalLabel?: string }) {
  const isAgencilabLink = url.startsWith("agencilab.com");
  const linkHref = externalUrl ?? (isAgencilabLink ? `https://${url}` : null);
  const linkLabel = externalLabel ?? (isAgencilabLink ? "Voir la page" : null);
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-400/40 bg-accent-400/10 text-[0.95rem] font-extrabold text-accent-400 md:h-11 md:w-11">
        {step}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-[1.1rem] font-bold tracking-tight text-white">{title}</h3>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-white/55">{tag}</span>
          {linkHref && linkLabel && (
            <a
              href={linkHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-accent-400/40 bg-accent-400/[0.10] px-2.5 py-0.5 text-[0.7rem] font-bold text-accent-400 transition hover:bg-accent-400/[0.18]"
            >
              {linkLabel} <ArrowSquareOut size={11} weight="bold" />
            </a>
          )}
        </div>
        <p className="mt-1 text-[0.82rem] font-mono text-accent-400/80">{url}</p>
        <p className="mt-3 text-[0.92rem] leading-relaxed text-white/70">{description}</p>
      </div>
    </div>
  );
}

function ScriptStep({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
      <div className="mb-3 flex items-baseline gap-3">
        <span className="text-[1.4rem] font-black leading-none text-accent-400/40 md:text-[1.6rem]">{num}.</span>
        <h3 className="text-[1.15rem] font-bold tracking-tight text-white md:text-[1.3rem]">{title}</h3>
      </div>
      <div className="space-y-2.5 text-[0.92rem] leading-snug text-white/75">{children}</div>
    </section>
  );
}

function ScoringQuestion({ title, q, branches }: { title: string; q: string; branches: [string, string][] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-[0.95rem] font-bold tracking-tight text-white">{title}</p>
      <p className="mt-2 text-[0.92rem] italic leading-snug text-white/80">"{q}"</p>
      <ul className="mt-3 space-y-2 text-[0.88rem] leading-snug text-white/70">
        {branches.map(([range, reply]) => (
          <li key={range} className="flex items-start gap-3">
            <span className="shrink-0 rounded-md border border-accent-400/40 bg-accent-400/[0.10] px-2 py-0.5 text-[0.75rem] font-bold text-accent-400">{range}</span>
            <span>→ {reply}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RoadmapMonth({ title, items }: { title: string; items: [string, string, string][] }) {
  return (
    <div className="rounded-xl border border-accent-400/25 bg-accent-400/[0.04] p-4">
      <p className="text-[0.95rem] font-bold tracking-tight text-white">{title}</p>
      <ul className="mt-3 space-y-3">
        {items.map(([phase, desc, win]) => (
          <li key={phase}>
            <p className="text-[0.78rem] font-bold uppercase tracking-wide text-accent-400">{phase}</p>
            <p className="mt-0.5 text-[0.9rem] leading-snug text-white/80">{desc}</p>
            <p className="mt-1 text-[0.85rem] leading-snug text-emerald-400/90"><b>Quick win :</b> {win}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Objection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-[0.95rem] font-bold tracking-tight text-white">{title}</p>
      <div className="mt-2 space-y-2 text-[0.9rem] leading-snug text-white/75">{children}</div>
    </div>
  );
}

function SocialCard({
  Icon,
  label,
  handle,
  description,
  href,
}: {
  Icon: React.ComponentType<{ size?: number; weight?: "regular" | "bold" | "fill" | "duotone" }>;
  label: string;
  handle: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-accent-400/30 hover:bg-white/[0.06]"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent-400/40 bg-accent-400/10 text-accent-400">
        <Icon size={22} weight="duotone" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className="text-[1rem] font-bold tracking-tight text-white">{label}</p>
          <ArrowSquareOut size={14} weight="bold" className="text-white/40 transition group-hover:text-accent-400" />
        </div>
        <p className="mt-0.5 text-[0.82rem] text-accent-400/80">{handle}</p>
        <p className="mt-1.5 text-[0.88rem] leading-snug text-white/65">{description}</p>
      </div>
    </a>
  );
}

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 md:p-8">
      <span className="inline-block rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-gold-400">
        À compléter
      </span>
      <div className="mt-4 text-[0.95rem] leading-relaxed text-white/70">{children}</div>
    </div>
  );
}
