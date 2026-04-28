@AGENTS.md

# Projet Agencilab — Site Web

## Statut : EN LIGNE sur agencilab.com
Déployé sur Vercel, auto-deploy à chaque `git push` sur `main`.
Repo GitHub : https://github.com/m4tbrn/agencilab-website

## Contexte
Site web one-page pour **Agencilab**, une école/accompagnement pour salariés qui veulent apprendre le Growth Marketing et se créer un complément de revenus de 1 500 à 3 000€/mois sans quitter leur emploi.

- **Société** : ESQ. AGENCY (SAS), 45 Quai Docteur Gailleton, 69002 Lyon. SIRET 921 853 297 00023
- **Fondateur** : Louis Esquier (270k+ abonnés YouTube, marketeur depuis 6 ans)
- **+900 personnes accompagnées**, 4.7/5 Trustpilot (42 avis affichés sur le site)
- **Domaine** : agencilab.com (DNS via GoDaddy, hébergé Vercel)
- **Objectif unique** : rediriger vers un appel gratuit sur iClosed (popup iframe)

## ICP (Client Idéal) — "Lucas"
- Homme 25-35 ans, salarié, 1 800-3 000€ net/mois
- Frustré par le plafond salarial, veut liberté financière/géographique
- Méfiant envers les formations en ligne (expériences passées)
- Cherche un accompagnement humain, pas une formation passive
- Document ICP complet : Google Drive → AGENCILAB → 3. Marketing → Avatar → ICP

## Stack technique
- **Framework** : Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion
- **Fonts** : Inter Tight (principal) + Caveat (écriture manuscrite, utilisé au-dessus de la VSL)
- **Déploiement** : Vercel (plan Hobby gratuit, auto-deploy depuis GitHub)
- **Analytics** : `@vercel/analytics` + `@vercel/speed-insights` installés
- **Dev** : `export PATH="$HOME/.nvm/versions/node/v20.20.2/bin:$PATH" && npm run dev` (port 3001 si un autre projet tourne sur 3000)
- **Push** : `cd ~/agencilab-website && git add -A && git commit -m "message" && git push`
- **iClosed** : popup iframe (`IClosedPopup.tsx`) + widget Lift (script dans head)

## Design / Branding
- **Background** : `#050A14` (navy-950, presque noir)
- **Bleu principal** : `#072E78` (navy-700)
- **Orange CTAs** : `#FF7A00` (gold-400) — UNIQUEMENT pour les boutons CTA, badge Bonus, avatar notif, cookie banner
- **Bleu texte/accents** : `#015FFF` (accent-400) — pour textes importants, labels, graphiques, icônes, gradient-text
- **Rouge** : `red-500` — pour les éléments négatifs (90% ferment, entrepreneur, prix école)
- **Sections claires** : fond marbre blanc `#f8f7f4` avec veines CSS (classe `.marble-bg`)
- **Font principale** : Inter Tight
- **Font manuscrite** : Caveat (texte au-dessus de la VSL)
- **Style** : haut de gamme, glass morphism, animations Framer Motion au scroll

### Éléments de design spécifiques
- **Navbar** : arrondie flottante (rounded-full desktop, rounded-xl mobile), liens centrés en absolute, badge "1" notification rouge sur CTA, animation shake, "Mon livre" avec badge vert "Bientôt disponible"
- **Hero** : split layout (texte gauche + photo Table Ronde droite) dans un rectangle avec border light sweep animation (`.hero-border::after`, désactivée mobile). Texte manuscrit "Regarde cette vidéo..." au-dessus de la VSL. VSL déborde du rectangle (`sm:mb-[-80px]`)
- **CTA identique partout** : bouton orange + flèche SVG avec animation hover + "Appel de 45 min, 100% gratuit, sans engagement"
- **Growth Marketing** : présenté en bloc saint graal avec glow bleu + lauriers emoji dorés (cachés mobile)
- **Garantie contractuelle** : bloc en surbrillance (bordure bleue 2px + glow)

## Vocabulaire — Règles strictes
- **NE PAS dire** : CMO, Chief Marketing Officer, agence, business en ligne, revenus passifs, liberté financière, formation, opportunité, side hustle, funnel, métier (utiliser "activité")
- **DIRE** : Growth Marketer, activité très rentable, deuxième salaire, accompagnement, activité en parallèle
- **Traduire les anglicismes** en français quand possible
- **Pas de tirets longs** (—) dans le texte

## Structure des sections (dans l'ordre actuel dans page.tsx)
1. **Hero** — split layout + photo Table Ronde + stats overlay + texte manuscrit + VSL Vidalytics
2. **SocialProof** — 4 glass cards avec icônes (900+, 4.7/5, 1 600€, 6 ans)
3. **ReviewsMarquee** — 30 citations Trustpilot qui défilent horizontalement
4. **Problem** — "Tu le sens toi aussi ?" + 4 chiffres sourcés + calculateur inflation interactif
5. **IncomeComparison** — "Internet a ouvert la porte à un 3ème chemin" + graphique SVG 6 mois
6. **Solution** — sur marbre — "Le Growth Marketing" saint graal + explication kiné/restaurant + prérequis en rectangle blanc + CTA
7. **MarketDemand** — "Est-ce que le marché est saturé ?" + stats + graphique demande vs offre + camembert
8. **BricksMethod** — sur marbre — logo Agencilab + 5 compétences empilables + calcul ROI + CTA
9. **Founder** — sur marbre — photo Louis (conf.jpg) + bio + credentials
10. **Method** — "L'accompagnement n°1 pour faire +3 500€ par mois" + 4 étapes + bloc Alic.ia bonus + garantie en surbrillance + CTA
11. **Comparison** — "4x plus de compétences qu'une école de commerce" + tableau
12. **Presentiel** — "Tu n'avances jamais seul" + 4 photos séminaires + 4 preuves
13. **FinalCTA** — sur marbre — "Comment nous rejoindre ?" + CTA + stats + 4 étapes appel
14. **~~VideoWall~~** — MASQUÉ (commenté dans page.tsx, en attente des thumbnails)
15. **Testimonials** — sur marbre — 42 vrais avis Trustpilot en grille 3 colonnes
16. **FAQ** — 8 questions, accordéon animé
17. **CTA final** — "Découvre si Agencilab est fait pour toi lors d'un appel gratuit"
18. **Footer** — logo + mentions légales + politique confidentialité

## Composants globaux
- **Navbar** — liens centrés (L'activité, Agencilab, Témoignages, FAQ, Mon livre) + Se connecter (→Circle) + CTA shake + badge "1"
- **MobileCTA** — bouton sticky en bas sur mobile, badge "1", shake, sans fond
- **SocialNotif** — notifications fake toutes les 45-90s, en vert, au-dessus du CTA mobile
- **CookieBanner** — Accepter/Refuser avec localStorage
- **IClosedPopup** — popup iframe plein écran iClosed, bouton "← Retour"
- **ExitPopup** — chat triste + "Attends, tu pars déjà ?" (1 seule fois)

## Pages
- `/` — page principale (one-page)
- `/mentions-legales` — informations légales ESQ. AGENCY
- `/politique-de-confidentialite` — RGPD, cookies, droits

## SEO
- `robots.txt`, `sitemap.ts` (3 pages)
- Meta complets : title, description, keywords, OG, Twitter cards, canonical
- Vercel Analytics + Speed Insights

## Assets
- **Logos** : `/public/images/logo-white.png`, `logo-black.png`, `favicon.png`
- **Visages** : `/public/images/visages/*.jpg` (18 portraits, 200px JPEG)
- **Séminaires** : `/public/images/seminaire/` (6 photos, 800px)
- **Photo Louis** : `/public/images/louis-conf.jpg`
- **Photo Hero** : `/public/images/hero-group.jpg` (2400px, `unoptimized`)
- **Alic.ia** : `/public/images/alicia.jpg`
- **Chat triste** : `/public/images/chat-triste.png`
- **Fond vidéo** : `/public/images/background.mov` (6MB, non utilisé actuellement)
- **Source Drive** : AGENCILAB → 3. Marketing → Site Web Agencilab

## Ce qui reste à faire
- [ ] Fixer le scroll horizontal sur mobile
- [ ] Miniatures vidéos témoignages (tâche Mathis, puis décommenter VideoWall)
- [ ] Améliorer le copywriting
- [ ] Screenshots articles de presse
- [ ] Section études de cas (plus tard)
- [ ] GTM + Meta Pixel
