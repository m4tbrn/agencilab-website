"use client";

import Deck from "./Deck";
import { SLIDES } from "./slides";

/**
 * Wrapper client : importe les slides dans le graphe client et les passe au
 * Deck. Évite de faire transiter des fonctions `render` à travers la
 * frontière serveur → client (la page serveur ne peut pas le faire).
 */
export default function IncubateurDeck() {
  return <Deck slides={SLIDES} />;
}
