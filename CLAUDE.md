@AGENTS.md

# Projet Agencilab — Site Web

## Contexte
Site web one-page pour **Agencilab**, une école/accompagnement pour salariés qui veulent apprendre le Growth Marketing et se créer un complément de revenus de 1 500 à 3 000€/mois sans quitter leur emploi.

- **Fondateur** : Louis Esquier (270k+ abonnés YouTube, marketeur depuis 6 ans)
- **+900 personnes accompagnées**, 4.7/5 Trustpilot
- **Domaine** : agencilab.com
- **Objectif unique du site** : rediriger vers un appel gratuit sur iClosed (popup iframe)

## ICP (Client Idéal) — "Lucas"
- Homme 25-35 ans, salarié, 1 800-3 000€ net/mois
- Frustré par le plafond salarial, veut liberté financière/géographique
- Méfiant envers les formations en ligne (expériences passées)
- Cherche un accompagnement humain, pas une formation passive
- Document ICP complet : Google Drive → AGENCILAB → 3. Marketing → Avatar → ICP

## Stack technique
- **Framework** : Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion
- **Font** : Inter Tight (via next/font/google)
- **Déploiement** : Vercel (compte créé)
- **Dev** : `export PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH" && npm run dev`
- **iClosed** : popup iframe + widget Lift (script dans head)

## Design / Branding
- **Bleu principal** : `#072E78` (navy-700)
- **Background** : `#050A14` (navy-950, presque noir)
- **Orange CTAs** : `#FF7A00` (gold-400) — UNIQUEMENT pour les boutons CTA
- **Bleu texte/accents** : `#015FFF` (accent-400) — pour textes, labels, graphiques, icônes
- **Sections claires** : fond marbre blanc `#f8f7f4` avec veines (classe `.marble-bg`)
- **Font** : Inter Tight
- **Style** : haut de gamme, glass morphism, animations au scroll
- **Navbar** : arrondie (rounded-full desktop, rounded-xl mobile), badge "1" notification, shake animation
- **Hero** : split layout (texte gauche + photo droite) dans un rectangle avec border light sweep animation
- **Border light sweep** : `.hero-border` — animation lumière blanche qui parcourt le contour (désactivée sur mobile)

## Vocabulaire — Règles strictes
- **NE PAS dire** : CMO, Chief Marketing Officer, agence, business en ligne, revenus passifs, liberté financière, formation, opportunité, side hustle, funnel, métier (utiliser "activité")
- **DIRE** : Growth Marketer, activité très rentable, deuxième salaire, accompagnement, activité en parallèle
- **Traduire les anglicismes** en français quand possible
- **Pas de tirets longs** (—) dans le texte

## Structure des sections (dans l'ordre)
1. **Hero** — split layout : texte gauche (headline + CTA + visages empilés) + photo Table Ronde droite avec stats overlay + VSL Vidalytics en dessous qui déborde
2. **SocialProof** — 4 glass cards avec icônes (900+, 4.7/5, 1 600€, 6 ans)
3. **ReviewsMarquee** — 30 avis Trustpilot qui défilent horizontalement (texte simple + étoile)
4. **Problem** — "Tu le sens toi aussi ?" + 4 chiffres sourcés (INSEE/IFOP) + calculateur inflation interactif
5. **IncomeComparison** — "Internet a ouvert la porte à un 3ème chemin" + graphique SVG 3 revenus sur 6 mois (salarié/entrepreneur/Growth Marketer) + 3 cards explicatives
6. **Solution** — sur marbre — "Le Growth Marketing" en bloc saint graal avec lauriers + explication simple + prérequis dans rectangle blanc (45min/jour, aucun diplôme, garder emploi, ordi+wifi) + CTA
7. **MarketDemand** — "Est-ce que le marché est saturé ?" + 3 stats + graphique demande vs offre + camembert (90% ferment / 10% survivent)
8. **BricksMethod** — sur marbre — logo Agencilab + 5 compétences empilables avec fil connecteur + calcul ROI (1 client = 3 000€/mois) + CTA
9. **Founder** — sur marbre — photo Louis (conf.jpg) + bio + credentials
10. **Method** — logo Agencilab + "L'accompagnement n°1 pour faire +3 500€ par mois" + 4 étapes + bloc Alic.ia (bonus IA) + garantie contractuelle en surbrillance + CTA
11. **Comparison** — "4x plus de compétences qu'une école de commerce pour une fraction du prix" + tableau desktop / cards mobile + prix "Révélé en appel"
12. **Presentiel** — "Tu n'avances jamais seul" + 4 photos séminaires + 4 preuves (séminaires, communauté, coach dédié, garantie)
13. **FinalCTA** — sur marbre — "Comment nous rejoindre ?" + CTA + 3 stats + 4 étapes appel + reassurance
14. **VideoWall** — carrousel horizontal témoignages vidéo avec visages en fond
15. **Testimonials** — sur marbre — 42 vrais avis Trustpilot vérifiés en grille 3 colonnes
16. **FAQ** — 8 questions, accordéon animé
17. **CTA final** — "Découvre si Agencilab est fait pour toi lors d'un appel gratuit"
18. **Footer** — logo + mentions légales + padding bottom pour CTA mobile

## Composants globaux
- **Navbar** — liens centrés (L'activité, Agencilab, Témoignages, FAQ, Mon livre [Bientôt disponible]) + Se connecter + CTA avec badge notification
- **MobileCTA** — bouton sticky en bas sur mobile (apparaît après 600px scroll)
- **SocialNotif** — popup "X de Ville (XX) vient de prendre rendez-vous" toutes les 45-90s
- **CookieBanner** — Accepter/Refuser avec localStorage
- **IClosedPopup** — popup iframe iClosed quand on clique sur un CTA (#rejoindre)
- **ExitPopup** — popup avec chat triste quand la souris quitte la page (1 seule fois)

## Assets
- **Logos** : `/public/images/logo-white.png`, `logo-black.png`, `favicon.png`
- **Visages membres** : `/public/images/visages/*.jpg` (compressés 200px JPEG)
- **Photos séminaires** : `/public/images/seminaire/` (compressés 800px)
- **Photo Louis** : `/public/images/louis-conf.jpg`
- **Photo Hero** : `/public/images/hero-group.jpg` (Table Ronde, 2400px, unoptimized)
- **Alic.ia** : `/public/images/alicia.jpg`
- **Chat triste** : `/public/images/chat-triste.png`
- **Source visages** : Google Drive → AGENCILAB → 3. Marketing → Site Web Agencilab → Visages

## Ce qui reste à faire
- [ ] Fixer le scroll horizontal sur mobile (élément qui déborde encore)
- [ ] Miniatures vidéos témoignages (thumbnails YouTube — tâche Mathis)
- [ ] Améliorer le copywriting
- [ ] Screenshots d'articles de presse (dossier Drive créé)
- [ ] Mentions légales / CGV (liens en footer)
- [ ] Analytics (GTM + Meta Pixel)
- [ ] OG Image pour partage réseaux sociaux
- [ ] Déploiement sur Vercel + connexion domaine agencilab.com (compte Vercel créé)
- [ ] Section études de cas (à faire plus tard)
