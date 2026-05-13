import type { Reussite } from "../types";
import anaelCamerini from "./anael-camerini";
import andreasMirabel from "./andreas-mirabel";
import antoineCorbeaux from "./antoine-corbeaux";
import arthurGuillemant from "./arthur-guillemant";
import barthelemyPinelli from "./barthelemy-pinelli";
import benjaminMaillard from "./benjamin-maillard";
import christianeBilat from "./christiane-bilat";
import clementMorel from "./clement-morel";
import damien from "./damien";
import damienBotella from "./damien-botella";
import dimitriAlvarez from "./dimitri-alvarez";
import florentVidal from "./florent-vidal";
import jeanChristopheGalvani from "./jean-christophe-galvani";
import jenniferBessad from "./jennifer-bessad";
import jiovannyLouissaint from "./jiovanny-louissaint";
import johanFoschia from "./johan-foschia";
import julienGennevois from "./julien-gennevois";
import kylianSurget from "./kylian-surget";
import leoKraewinkels from "./leo-kraewinkels";
import louisanneHeddadi from "./louisanne-heddadi";
import lucasBricout from "./lucas-bricout";
import ludovic from "./ludovic";
import lukasRebic from "./lukas-rebic";
import lynelvy from "./lynelvy";
import manonDuval from "./manon-duval";
import marinaHug from "./marina-hug";
import mathiasSouriau from "./mathias-souriau";
import natacha from "./natacha";
import nathanDupouy from "./nathan-dupouy";
import sivaneMellou from "./sivane-mellou";
import solene from "./solene";
import stephanieCorveleyn from "./stephanie-corveleyn";
import swann from "./swann";
import ulysseHuchet from "./ulysse-huchet";
import williamBerdat from "./william-berdat";
import exempleThomas from "./exemple-thomas";

/**
 * Registry de toutes les réussites. Pour en ajouter une nouvelle :
 * 1. Créer un fichier .ts dans src/lib/reussites/data/
 * 2. L'importer + le pousser dans ALL_REUSSITES ci-dessous
 */
const ALL_REUSSITES: Reussite[] = [
  // Interviews produites (priorité VSL)
  anaelCamerini,
  arthurGuillemant,
  barthelemyPinelli,
  clementMorel,
  dimitriAlvarez,
  julienGennevois,
  lucasBricout,
  // Témoignages individuels
  andreasMirabel,
  christianeBilat,
  damienBotella,
  damien,
  benjaminMaillard,
  florentVidal,
  jiovannyLouissaint,
  jeanChristopheGalvani,
  johanFoschia,
  kylianSurget,
  leoKraewinkels,
  louisanneHeddadi,
  ludovic,
  marinaHug,
  manonDuval,
  mathiasSouriau,
  natacha,
  sivaneMellou,
  solene,
  stephanieCorveleyn,
  swann,
  ulysseHuchet,
  nathanDupouy,
  williamBerdat,
  antoineCorbeaux,
  jenniferBessad,
  lukasRebic,
  lynelvy,
  // Exemple
  exempleThomas,
];

/** Réussites publiées (draft: false), triées par featured puis date desc */
export function getPublishedReussites(): Reussite[] {
  return ALL_REUSSITES.filter((r) => !r.draft).sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.publishedAt.localeCompare(a.publishedAt);
  });
}

/** Toutes les réussites, y compris drafts — utilisé pour preview interne uniquement */
export function getAllReussites(): Reussite[] {
  return [...ALL_REUSSITES];
}

export function getReussiteBySlug(slug: string): Reussite | undefined {
  return ALL_REUSSITES.find((r) => r.slug === slug);
}
