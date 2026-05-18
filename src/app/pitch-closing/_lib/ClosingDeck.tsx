"use client";

import Deck from "../../incubateur/_lib/Deck";
import { CLOSING_SLIDES } from "./slides";

/**
 * Wrapper client du pitch de closing : importe les slides côté client et
 * les passe au Deck partagé.
 */
export default function ClosingDeck() {
  return <Deck slides={CLOSING_SLIDES} />;
}
