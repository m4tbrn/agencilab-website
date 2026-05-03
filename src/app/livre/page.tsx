"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;
const CTA_LINK = "/livre/paiement";

/* ——— Bouton double-bezel premium ——— */
const PremiumButton = ({ label, dark = false }: { label: string; dark?: boolean }) => (
  <div className={`inline-block rounded-[1.25rem] p-1.5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.02] active:scale-[0.98] ${
    dark
      ? "bg-[#FF6B00]/20 shadow-[0_8px_40px_rgba(255,107,0,0.3)]"
      : "bg-[#FF6B00]/15 shadow-[0_8px_30px_rgba(255,107,0,0.15)]"
  } hover:shadow-[0_12px_50px_rgba(255,107,0,0.4)]`}>
    <a
      href={CTA_LINK}
      className="group relative flex items-center gap-4 overflow-hidden rounded-[calc(1.25rem-0.375rem)] bg-gradient-to-b from-[#FF6B00] to-[#FF4500] px-10 py-5 text-base font-bold tracking-tight text-white sm:px-12 sm:text-lg"
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <span className="pointer-events-none absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <span className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" />
      <span className="relative z-10">{label}</span>
      <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1.5 group-hover:-translate-y-[1px] group-hover:scale-110 group-hover:bg-white/25">
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </a>
  </div>
);

const CTASimple = ({ dark = false }: { dark?: boolean }) => (
  <div className="my-10 text-center">
    <PremiumButton label="JE VEUX MON EXEMPLAIRE" dark={dark} />
  </div>
);

const CTA = ({ dark = false }: { dark?: boolean }) => (
  <div className="my-10 text-center">
    <PremiumButton label="JE VEUX MON EXEMPLAIRE — 14,90€" dark={dark} />
    <div className="mt-4 flex items-center justify-center gap-3">
      <span className={`text-2xl font-bold tracking-tight ${dark ? "text-white" : ""}`}>14,90€</span>
      <span className={`text-lg tracking-tight line-through ${dark ? "text-white/30" : "text-black/30"}`}>29€</span>
      <span className="rounded-full bg-gold-400/20 px-3 py-0.5 text-xs font-bold text-gold-500">PROMO LANCEMENT</span>
    </div>
    <p className={`mt-2 text-xs tracking-tight ${dark ? "text-white/40" : "text-black/40"}`}>
      Paiement sécurisé — Livraison offerte
    </p>
    <div className="mx-auto mt-4 max-w-xs">
      <p className={`mb-2 text-xs font-bold ${dark ? "text-red-400" : "text-red-500"}`}>
        Stock limité pour {new Date().toLocaleString("fr-FR", { month: "long" })}
      </p>
      <div className="flex items-center gap-1.5">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`h-3 flex-1 rounded-sm ${i < 7 ? "bg-red-500" : i < 9 ? "animate-pulse bg-red-500/60" : dark ? "bg-white/10" : "bg-black/5"}`} />
        ))}
      </div>
    </div>
  </div>
);

const ImagePlaceholder = ({ desc, className = "" }: { desc: string; className?: string }) => (
  <div className={`flex items-center justify-center rounded-2xl border-2 border-dashed border-black/10 bg-[#f5f3ee] p-8 ${className}`}>
    <p className="text-center text-sm italic text-black/30">{desc}</p>
  </div>
);

const ProofCard = ({ name, before, after, quote }: { name: string; before: string; after: string; quote: string }) => (
  <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
    <div className="mb-3 flex items-center gap-0.5">
      {[...Array(5)].map((_, j) => (
        <svg key={j} className="h-4 w-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
    <p className="mb-4 text-base leading-relaxed text-black/60 italic">&ldquo;{quote}&rdquo;</p>
    <div className="flex items-center justify-between border-t border-black/5 pt-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-book-green text-sm font-bold text-white">{name.charAt(0)}</div>
        <span className="text-sm font-bold tracking-tight">{name}</span>
      </div>
      <span className="rounded-full bg-book-green/8 px-3 py-1 text-xs font-bold text-book-green">{before} → {after}</span>
    </div>
  </div>
);

/* ================================================================ */
export default function LivrePage() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* ============ 1. HERO ============ */}
      <section className="relative min-h-[100dvh] overflow-hidden bg-book-green-dark px-4 pt-10 pb-10 sm:px-6 lg:pt-16 lg:pb-16">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[
            { left: "3%", emoji: "💰", size: 32, duration: 14, delay: 0, rotate: 15, opacity: 0.25 },
            { left: "10%", emoji: "💵", size: 24, duration: 18, delay: 3, rotate: -20, opacity: 0.15 },
            { left: "17%", emoji: "💸", size: 36, duration: 12, delay: 1, rotate: 30, opacity: 0.3 },
            { left: "24%", emoji: "💰", size: 20, duration: 16, delay: 5, rotate: -10, opacity: 0.15 },
            { left: "31%", emoji: "💵", size: 28, duration: 13, delay: 2, rotate: 25, opacity: 0.2 },
            { left: "38%", emoji: "💰", size: 22, duration: 20, delay: 7, rotate: -35, opacity: 0.12 },
            { left: "45%", emoji: "💸", size: 38, duration: 11, delay: 0.5, rotate: 20, opacity: 0.25 },
            { left: "52%", emoji: "💵", size: 26, duration: 15, delay: 4, rotate: -15, opacity: 0.15 },
            { left: "59%", emoji: "💰", size: 30, duration: 13.5, delay: 6, rotate: 30, opacity: 0.2 },
            { left: "66%", emoji: "💸", size: 20, duration: 17, delay: 1.5, rotate: -25, opacity: 0.15 },
            { left: "73%", emoji: "💵", size: 34, duration: 12.5, delay: 3.5, rotate: 15, opacity: 0.25 },
            { left: "80%", emoji: "💰", size: 24, duration: 19, delay: 8, rotate: -20, opacity: 0.12 },
            { left: "87%", emoji: "💸", size: 28, duration: 14.5, delay: 2.5, rotate: 35, opacity: 0.2 },
            { left: "94%", emoji: "💵", size: 22, duration: 16.5, delay: 9, rotate: -30, opacity: 0.15 },
            { left: "7%", emoji: "💸", size: 26, duration: 18.5, delay: 6.5, rotate: 10, opacity: 0.15 },
            { left: "50%", emoji: "💰", size: 30, duration: 13, delay: 4.5, rotate: -18, opacity: 0.2 },
            { left: "35%", emoji: "💵", size: 18, duration: 15.5, delay: 10, rotate: 22, opacity: 0.12 },
            { left: "62%", emoji: "💸", size: 32, duration: 11.5, delay: 1.5, rotate: -12, opacity: 0.25 },
          ].map((item, i) => (
            <span key={i} className="falling-emoji" style={{
              left: item.left,
              ["--emoji-size" as string]: `${item.size}px`,
              ["--fall-duration" as string]: `${item.duration}s`,
              ["--fall-delay" as string]: `${item.delay}s`,
              ["--rotate-end" as string]: `${item.rotate}deg`,
              ["--fall-opacity" as string]: `${item.opacity}`,
            }}>{item.emoji}</span>
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 backdrop-blur-sm">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-white/15" />
                <svg className="absolute -bottom-0.5 -right-0.5 h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#1DA1F2" />
                  <path d="M9.5 12.5l2 2 4-4.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-left">
                <span className="text-sm font-bold tracking-tight text-white">Le nouveau livre de Louis Esquier</span>
                <p className="text-xs tracking-tight text-white/70">+10 millions générés en ligne — 300k sur YouTube</p>
              </div>
            </div>

            <h1 className="mb-6 font-extrabold leading-[1.08] tracking-tight text-white">
              <span className="block whitespace-nowrap text-2xl sm:text-4xl lg:text-[3.5rem]">
                <span className="pen-underline">312 pages</span> pour lancer ton business
              </span>
              <span className="block whitespace-nowrap text-2xl sm:text-4xl lg:text-[3.5rem]">
                en ligne et atteindre <span className="highlight-yellow">1M€</span>.
              </span>
              <span className="mt-2 block text-lg font-semibold text-white sm:text-2xl lg:text-[1.75rem]">
                même si tu pars de zéro, même sans diplôme, même sans réseau.
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white">
              Par <strong className="text-white">Louis Esquier</strong>, fondateur d&apos;Agencilab
              (+1 018 salariés accompagnés à créer leur business) et Balistique (agence à +1M€/an).
              Tout ce que j&apos;aurais voulu savoir à mes débuts dans le business en ligne pour faire 1M€, condensé en 30 chapitres.
            </p>

            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.3, ease }} className="relative mx-auto mb-4 max-w-2xl">
              <div className="pointer-events-none absolute -left-28 top-1/2 z-0 hidden -translate-y-1/2 -rotate-6 lg:block">
                <Image src="/images/livre/cover.jpg" alt="Le livre" width={220} height={308} className="rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-90" />
              </div>
              <div className="pointer-events-none absolute -right-28 top-1/2 z-0 hidden -translate-y-1/2 rotate-6 lg:block">
                <Image src="/images/livre/cover.jpg" alt="Le livre" width={220} height={308} className="rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-90" />
              </div>
              <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-black shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <div className="flex min-h-[300px] sm:min-h-[360px] items-center justify-center" style={{ aspectRatio: "16/9" }}>
                  <span className="text-sm text-white/30">VSL de Louis — Placeholder</span>
                </div>
              </div>
            </motion.div>

            <CTASimple dark />
          </motion.div>
        </div>
      </section>

      {/* ============ 2. MARQUEE INFLUENCEURS ============ */}
      <section className="overflow-hidden py-10 lg:py-14">
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />
          <div className="flex animate-[marquee_40s_linear_infinite] gap-6">
            {[...Array(2)].map((_, loop) => (
              <div key={loop} className="flex shrink-0 gap-6">
                {[
                  { handle: "@influenceur1", followers: "500k", quote: "Un des meilleurs livres business que j'ai lu en français." },
                  { handle: "@influenceur2", followers: "200k", quote: "J'aurais aimé avoir ce livre quand j'ai commencé." },
                  { handle: "@influenceur3", followers: "150k", quote: "Louis a condensé des années d'expérience. Impressionnant." },
                  { handle: "@influenceur4", followers: "300k", quote: "Concret, actionnable, sans bullshit. Rare en France." },
                  { handle: "@influenceur5", followers: "180k", quote: "Le livre que j'aurais voulu écrire. Bravo Louis." },
                  { handle: "@influenceur6", followers: "250k", quote: "Si tu veux te lancer en ligne, commence par ce livre." },
                  { handle: "@influenceur7", followers: "120k", quote: "30 chapitres de pur concret. Rien à jeter." },
                  { handle: "@influenceur8", followers: "400k", quote: "Le plan d'action le plus clair que j'ai lu cette année." },
                  { handle: "@influenceur9", followers: "90k", quote: "J'ai surligné la moitié des pages. Du lourd." },
                  { handle: "@influenceur10", followers: "350k", quote: "Enfin un livre business français au niveau international." },
                ].map((inf) => (
                  <div key={`${loop}-${inf.handle}`} className="flex w-[300px] shrink-0 flex-col rounded-2xl border border-black/5 bg-[#fafaf8] p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-black/5" />
                        <svg className="absolute -bottom-0.5 -right-0.5 h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="12" fill="#1DA1F2" />
                          <path d="M9.5 12.5l2 2 4-4.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold tracking-tight">{inf.handle}</p>
                        <p className="text-xs text-black/40">{inf.followers} abonnés</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-black/60 italic">&ldquo;{inf.quote}&rdquo;</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-6">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />
          <div className="flex animate-[marqueeReverse_45s_linear_infinite] gap-6">
            {[...Array(2)].map((_, loop) => (
              <div key={loop} className="flex shrink-0 gap-6">
                {[
                  { handle: "@influenceur11", followers: "220k", quote: "Le genre de livre qui te fait regretter de pas l'avoir lu plus tôt." },
                  { handle: "@influenceur12", followers: "170k", quote: "Louis pose les choses simplement. Pas de blabla, que du concret." },
                  { handle: "@influenceur13", followers: "310k", quote: "Je l'ai lu en 2 jours. Impossible de le poser une fois commencé." },
                  { handle: "@influenceur14", followers: "140k", quote: "La meilleure ressource francophone pour se lancer en ligne. Point." },
                  { handle: "@influenceur15", followers: "450k", quote: "J'ai offert 5 exemplaires à mon entourage. C'est dire." },
                  { handle: "@influenceur16", followers: "95k", quote: "Chaque chapitre vaut 10x le prix du livre." },
                  { handle: "@influenceur17", followers: "280k", quote: "Le livre que j'aurais voulu avoir avant de lancer ma boîte." },
                  { handle: "@influenceur18", followers: "160k", quote: "Louis ne te vend pas du rêve. Il te donne un plan. C'est rare." },
                  { handle: "@influenceur19", followers: "380k", quote: "Si tu hésites encore à te lancer, lis ce livre. Tu n'hésiteras plus." },
                  { handle: "@influenceur20", followers: "130k", quote: "312 pages et pas une seule de perdue. Chapeau." },
                ].map((inf) => (
                  <div key={`${loop}-${inf.handle}`} className="flex w-[300px] shrink-0 flex-col rounded-2xl border border-black/5 bg-[#fafaf8] p-5">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-black/5" />
                        <svg className="absolute -bottom-0.5 -right-0.5 h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="12" fill="#1DA1F2" />
                          <path d="M9.5 12.5l2 2 4-4.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold tracking-tight">{inf.handle}</p>
                        <p className="text-xs text-black/40">{inf.followers} abonnés</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-black/60 italic">&ldquo;{inf.quote}&rdquo;</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 3. LA LETTRE ============ */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease }}>
            <p className="mb-8 text-sm font-bold uppercase tracking-widest text-book-green">
              De Louis Esquier — Lyon, France
            </p>

            <div className="space-y-5 text-[17px] leading-[1.85] text-black/80">
              <p className="text-xl font-bold text-black">Cher futur millionnaire,</p>

              <p>Si tu veux lancer un business en ligne qui te rapporte <strong className="text-black">3 000, 5 000, voire 10 000€ par mois</strong>...</p>

              <p>Et te construire une vie où c&apos;est toi qui décides... où tu vis, combien tu gagnes, ce que tu fais de tes journées...</p>

              <p>Alors lis bien ce qui suit. Parce que ce livre va probablement être <span className="highlight-yellow font-bold text-black">le plus important que tu liras cette année.</span></p>

              <p>Laisse-moi t&apos;expliquer pourquoi.</p>

              <p>Là, tout de suite, pendant que t&apos;écris ces lignes, il est 16h33. Je suis posé dans le lounge de l&apos;aéroport de Lyon.</p>

              <p>Mon vol pour Bali décolle dans moins de deux heures. Je pars un mois là-bas avec mes associés. On va bosser en bord de mer.</p>

              <p>Trois mois avant ça, j&apos;étais au Japon. Et avant ça, j&apos;ai traversé une dizaine de pays en moins de 2 ans.</p>

              {/* Collage photos voyage */}
              <div className="my-8 grid grid-cols-3 gap-2 sm:gap-3">
                <div className="row-span-2 overflow-hidden rounded-xl">
                  <ImagePlaceholder desc="Photo Bali — Louis travaillant en bord de mer, laptop, cocotiers" className="!min-h-full !rounded-xl" />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <ImagePlaceholder desc="Photo Japon — rue, temple ou moment authentique" className="!min-h-[120px] sm:!min-h-[140px] !rounded-xl" />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <ImagePlaceholder desc="Photo voyage — aéroport, lounge, ou avion" className="!min-h-[120px] sm:!min-h-[140px] !rounded-xl" />
                </div>
                <div className="col-span-2 overflow-hidden rounded-xl">
                  <ImagePlaceholder desc="Photo groupe — Louis avec ses associés en voyage, ambiance décontractée" className="!min-h-[120px] sm:!min-h-[140px] !rounded-xl" />
                </div>
              </div>

              <p>Ma vie n&apos;a &ldquo;aucun sens&rdquo; pour 99% des gens autour de moi.</p>

              <p>Genre... à quel moment c&apos;est possible, à 25 ans, de voyager partout, de vivre des trucs incroyables, sans flipper pour le budget... et de gagner de l&apos;argent en même temps ?</p>

              <p>Bon. Si je te raconte tout ça, c&apos;est vraiment pas pour frimer.</p>

              <p>Sinon je t&apos;aurais montré des photos de Lamborghini et de Rolex.</p>

              <p>Non.</p>

              <p>La vérité c&apos;est que <strong className="text-black">je suis personne.</strong></p>

              <p>Un gars tout ce qu&apos;il y a de plus banal. Gros au collège. A failli rater sa scolarité à cause de Minecraft et League of Legends.</p>

              {/* Collage Louis jeune */}
              <div className="my-8 grid grid-cols-2 gap-2 sm:gap-3">
                <div className="overflow-hidden rounded-xl">
                  <ImagePlaceholder desc="Photo Louis ado — collège ou lycée, look banal, pas stylé" className="!min-h-[160px] sm:!min-h-[200px] !rounded-xl" />
                </div>
                <div className="row-span-2 overflow-hidden rounded-xl">
                  <ImagePlaceholder desc="Screenshot Minecraft ou League of Legends — ou photo de Louis devant son PC à l'époque" className="!min-h-full !rounded-xl" />
                </div>
                <div className="overflow-hidden rounded-xl">
                  <ImagePlaceholder desc="Photo Louis lycée — avec des potes, ambiance normale, monsieur tout le monde" className="!min-h-[160px] sm:!min-h-[200px] !rounded-xl" />
                </div>
              </div>

              <p>Mes rêves ? Simples. Une maison en campagne, un potager, une belle femme, des enfants.</p>

              <p>Sauf qu&apos;il y a 8 ans, il s&apos;est passé un truc.</p>

              <p>Un truc qui a absolument tout changé.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 4. L'AMPHI ============ */}
      <section className="bg-[#fafaf8] py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease }}>
            <div className="space-y-5 text-[17px] leading-[1.85] text-black/80">
              <p>On est en Novembre 2018.</p>

              <p>Je suis assis dans un amphi à moitié endormi de l&apos;IUT.</p>

              <p>Un ancien de la promo monte sur scène. Costume gris. Mine fatiguée. Il nous parle de ses promotions, de ses soirées réseau, de ses contacts qu&apos;il accumule comme des trophées.</p>

              <ImagePlaceholder
                desc="IA à générer — Homme français ~30 ans, costume gris, mine fatiguée, debout derrière un pupitre dans un amphithéâtre universitaire. Eclairage néon froid. Il essaie de sourire mais on voit l'épuisement. Arrière-plan : rangées de sièges, étudiants flous. Style photo réaliste, tons froids/gris."
                className="my-6 !min-h-[200px] sm:!min-h-[260px]"
              />

              <p>Et moi je suis au fond de l&apos;amphi.</p>

              <p>Le regard dans le vide.</p>

              <p>J&apos;essaie de ressentir un truc. De me dire &ldquo;ok, c&apos;est ça que je veux faire&rdquo;.</p>

              <p>Mais <strong className="text-black">rien.</strong> Ça vient pas.</p>

              <p>Ce mec était censé nous inspirer. Sauf que moi, ce que je ressentais...</p>

              <p>C&apos;était <strong className="text-black">une alerte.</strong></p>

              <p>Une alerte que si je ne faisais rien, dans 15 ans, ce serait moi sur cette estrade. Costume gris. Mine fatiguée. A raconter ma carrière à des gamins qui s&apos;en foutent. En me demandant secrètement où sont passés mes rêves.</p>

              <p>Et le pire, c&apos;est que tout était déjà en place pour que ça arrive.</p>

              <p>Mon père avait tout tracé pour moi. Bac S. Allemand deuxième langue. Ecole de commerce. CDI.</p>

              <p>C&apos;est même lui qui avait choisi l&apos;allemand pour moi. Parce que soi-disant &ldquo;ça ouvre des portes dans le commerce international&rdquo;.</p>

              <p>Sauf qu&apos;après deux ans d&apos;allemand, la seule phrase que je savais dire c&apos;était : <em>&ldquo;Guten Tag, ich heisse Louis und ich bin siebzehn Jahre alt.&rdquo;</em></p>

              <p>Voilà. C&apos;était ça, le chemin qu&apos;on avait choisi pour moi.</p>

              <p>C&apos;était tout propre, tout linéaire et rassurant.</p>

              <p>Comme une autoroute bien balisée avec des panneaux tous les cent mètres pour te dire que tu vas dans la bonne direction.</p>

              <p>Mais cette autoroute ne m&apos;a jamais mené à rien.</p>

              <p>Enfin si. Elle m&apos;a mené exactement là où elle avait été construite pour me mener : un CDI, un salaire &ldquo;correct&rdquo;, et l&apos;impression vague que tu fais ce qu&apos;il faut alors qu&apos;au fond de toi tu rêves d&apos;autre chose.</p>

              <p>Tu veux savoir le pire ? J&apos;ai vu ce que ça donne quand tu suis ce chemin jusqu&apos;au bout.</p>

              <p>Ma mère. Elle rêvait de devenir décoratrice d&apos;intérieur. Elle avait l&apos;oeil pour ça, le goût, la créativité, tout.</p>

              <p>Mais bon. Faut un salaire fixe. Faut être &ldquo;raisonnable&rdquo;.</p>

              <p>Donc elle a pris un poste. Huit heures par jour devant un écran. Pendant des années. Jusqu&apos;au burnout. Le dos bousillé. Des douleurs chroniques. Des médocs tous les matins pour faire passer les migraines.</p>

              <p>Mon père, c&apos;était pareil.</p>

              <p>Debout à six heures, rentré à vingt heures. Cinq heures de route pour aller à Paris. Je crois que je l&apos;ai jamais vu sans les traits de fatigue sur le visage.</p>

              <ImagePlaceholder
                desc="Photo de famille — visages de tous les membres floutés sauf celui de Louis. Ambiance chaleureuse, quotidien, maison familiale. Montrer la famille normale, pas le bling-bling."
                className="my-6 !min-h-[200px] sm:!min-h-[260px]"
              />

              <p>Ils ont fait tout ça pour nous. Et honnêtement, je leur en serai reconnaissant toute ma vie.</p>

              <p>Mais en réalité, sûrement comme toi aussi, je me dis que :</p>

              <p className="text-xl font-bold text-black">
                Même avec tout l&apos;argent du monde, ils ne peuvent pas récupérer leur santé.
              </p>

              <p>C&apos;est comme un arbre qui pousse dans une serre.</p>

              <p>Car un arbre qui pousse dans une serre, il a tout le &ldquo;confort&rdquo;. Il a la bonne température, l&apos;arrosage automatique, il a zéro vent. Donc il pousse vite. Plus vite qu&apos;un arbre hors serre.</p>

              <p>Le problème c&apos;est que le jour où tu le sors dehors et qu&apos;il prend son premier vrai orage... <strong className="text-black">il casse.</strong> Parce qu&apos;il a vécu dans le confort, il a jamais eu besoin de développer des racines.</p>

              <ImagePlaceholder
                desc="IA à générer — Illustration split : à gauche un arbre fragile dans une serre en verre (propre, artificiel), à droite un arbre robuste dehors sous la pluie avec des racines profondes visibles. Style minimaliste, tons verts. Métaphore visuelle serre vs nature."
                className="my-6 !min-h-[200px] sm:!min-h-[260px]"
              />

              <p>Eh bien le salariat, c&apos;est exactement cette serre.</p>

              <p>Ton salaire tombe tous les mois. On te dit quoi faire, quand le faire, comment le faire. T&apos;as même pas besoin de réfléchir.</p>

              <p>Et ça marche ! Pendant un temps.</p>

              <p>Jusqu&apos;au jour où la boîte restructure, où ton poste saute, ou juste... où tu te réveilles un matin à 45 ans en te demandant ce que t&apos;as foutu de ta vie.</p>

              <p>Et ça je l&apos;ai compris avec cette notification :</p>

              {/* Placeholder notif Stripe */}
              <div className="my-6 mx-auto max-w-sm rounded-2xl border border-black/10 bg-white p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#635BFF]">
                    <span className="text-sm font-bold text-white">S</span>
                  </div>
                  <div>
                    <p className="text-xs text-black/40">Stripe</p>
                    <p className="text-sm font-bold text-black">Paiement reçu : 100,00 €</p>
                    <p className="text-xs text-black/40">Pierre Dupont — il y a 2 min</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 6. LE CANAPÉ DÉFONCÉ ============ */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease }}>
            <div className="space-y-5 text-[17px] leading-[1.85] text-black/80">
              <p>On est en juillet 2017. Je débarque chez mon frère Valentin, à Rennes.</p>

              <ImagePlaceholder
                desc="Photo de Valentin — portrait, ambiance décontractée, devant son ordi ou dans son appart à Rennes. Visage visible, sourire naturel."
                className="my-6 mx-auto !max-w-[200px] !min-h-[200px] !rounded-full"
              />

              <p>Le mec venait de lâcher son école de commerce. Il n&apos;avait aucun diplôme. Aucun plan B pour s&apos;en sortir.</p>

              <p>Son appart était un rez-de-chaussée pourri avec une cuisine minuscule et un canapé défoncé, le grand luxe quoi.</p>

              <p>Pourtant il était tranquille, posé, pas stressé par son avenir.</p>

              <p>La seule chose qui avait un minimum de valeur dans son appartement c&apos;était son MacBook et son wifi.</p>

              <p>Et c&apos;est justement grâce à ces deux choses, que ma perception de l&apos;argent a drastiquement changé.</p>

              <p>Parce que pendant une semaine, j&apos;ai vu un truc qui m&apos;a <span className="highlight-yellow font-bold text-black">complètement retourné.</span></p>

              <p>Le mec bossait 4-5 heures par jour. Depuis son canapé défoncé. En jogging.</p>

              <p>Et il gagnait de l&apos;argent. <strong className="text-black">En ligne.</strong> Pendant que moi j&apos;étais en train de réviser mes cours d&apos;allemand.</p>

              <p>Son téléphone vibrait. Puis encore. Et encore.</p>

              {/* Notifications empilées */}
              <div className="my-6 mx-auto max-w-sm space-y-2">
                {[
                  { name: "Pierre D.", amount: "100,00 €", time: "à l'instant" },
                  { name: "Marie L.", amount: "100,00 €", time: "il y a 3 min" },
                  { name: "Thomas R.", amount: "200,00 €", time: "il y a 7 min" },
                  { name: "Julie M.", amount: "100,00 €", time: "il y a 12 min" },
                  { name: "Nicolas B.", amount: "150,00 €", time: "il y a 18 min" },
                  { name: "Camille S.", amount: "100,00 €", time: "il y a 24 min" },
                ].map((notif, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl border border-black/5 bg-white p-3 shadow-sm" style={{ opacity: 1 - i * 0.1 }}>
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#635BFF]">
                      <span className="text-xs font-bold text-white">S</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-black">Paiement reçu : {notif.amount}</p>
                      <p className="text-[11px] text-black/40">{notif.name} — {notif.time}</p>
                    </div>
                    <span className="text-xs text-green-500 font-bold">✓</span>
                  </div>
                ))}
              </div>

              <p>Et cet argent, il arrivait direct sur son compte en banque. Sous mes yeux. En temps réel.</p>

              <p>Ce moment-là sera gravé en moi jusqu&apos;à la fin de mes jours. C&apos;est la première fois de ma vie que je voyais qu&apos;il existait autre chose que le chemin qu&apos;on m&apos;avait tracé.</p>

              <p>En rentrant chez moi, j&apos;avais qu&apos;une idée en tête : faire pareil.</p>

              <p>Du coup j&apos;ai foncé.</p>

              <p>Et pendant un moment j&apos;ai fait tout et n&apos;importe quoi.</p>

              <p>Dropshipping. Affiliation. T-shirts. Des chaînes YouTube à la con.</p>

              <p>J&apos;avais un carnet avec 40 idées dedans.</p>

              <p>Tu veux savoir combien m&apos;ont rapporté ?</p>

              <p><strong className="text-black">Zéro.</strong> Pas un centime.</p>

              <p>6 mois de perdus. Des formations à 500€ qui m&apos;ont rien appris. Et mon entourage qui me regardait avec ce petit sourire genre &ldquo;on te l&apos;avait dit&rdquo;.</p>

              <p>Et puis un jour, j&apos;ai pété un câble.</p>

              <p>J&apos;ai arrêté les &ldquo;hacks&rdquo;. Arrêté de copier des trucs sur YouTube.</p>

              <p>Et j&apos;ai fait un truc tout bête : j&apos;ai construit un <strong className="text-black">système basé sur des compétences.</strong></p>

              <p>Offre. Acquisition. Vente. Livraison. De A à Z.</p>

              <p><span className="highlight-yellow font-bold text-black">Et là, tout a changé.</span></p>

              <p>Au lieu de supplier des inconnus de me répondre...</p>

              <p><strong className="text-black">J&apos;avais plus de clients que je pouvais en gérer.</strong></p>

              <p>19 ans → <strong className="text-black">800€/mois.</strong></p>
              <p>20 ans → <strong className="text-black">10 000€/mois.</strong> Je quitte les études.</p>
              <p>23 ans → <strong className="text-black">700k€/an.</strong></p>
              <p>25 ans → <strong className="text-black">+1,2M€/an.</strong> 12 personnes dans l&apos;équipe.</p>

              <p>Et le truc, c&apos;est que c&apos;est pas que moi.</p>

              <p><strong className="text-black">Ce système, je l&apos;ai filé à 1 014 personnes au moment où j&apos;écris ces lignes.</strong></p>

              <Image
                src="/images/livre/proof-members.png"
                alt="Preuve du nombre de membres accompagnés"
                width={600}
                height={300}
                className="my-6 w-full rounded-xl border border-black/10 shadow-sm"
              />

              <div className="space-y-3 my-6">
                {[
                  "Barthélémy, ancien ouvrier → 3 500€/mois",
                  "Yohann, ancien gendarme → 3 200€/mois",
                  "Andreas, partait de zéro → 4 200€/mois en 47 jours",
                  "Clément, salarié en reconversion → 2 800€ facturés en 3 semaines",
                  "Jennifer, mère au foyer → 3 400€/mois depuis son salon",
                  "Charles, avait tout essayé sans résultat → 8 700€/mois à 6 mois",
                  "Thomas, freelance à 1 200€/mois → 5 600€/mois en 2 mois",
                  "Jules, 22 ans, aucune expérience → 1 900€ facturés en 23 jours",
                ].map((item) => (
                  <p key={item} className="text-base text-black/70">{item}</p>
                ))}
              </div>

              <p>Et pour rendre ce système accessible au plus de personnes possible...</p>

              <p><strong className="text-black">J&apos;ai écrit ce livre de 312 pages, sur 30 chapitres.</strong></p>

              <p>Où j&apos;y détaille tout le système, de A à Z, avec le plan d&apos;action pour le mettre en place.</p>

              <ImagePlaceholder
                desc="Photo de Louis tenant le livre — face caméra, sourire confiant, on voit bien la couverture du livre. Fond neutre ou bureau. Ambiance pro mais décontractée."
                className="my-8 mx-auto max-w-sm !min-h-[300px]"
              />

              <CTASimple />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 8. MEMENTO MORI ============ */}
      <section className="bg-book-green-dark py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease }}>
            <div className="space-y-5 text-[17px] leading-[1.85] text-white/80">
              <p className="text-center text-sm font-bold uppercase tracking-widest text-book-gold">
                ⏳ Memento Mori
              </p>

              <p className="text-center text-2xl font-bold text-white sm:text-3xl">
                Souviens-toi que tu vas mourir.
              </p>

              <p className="text-center text-white/60">
                C&apos;est pas une phrase pour te foutre le cafard. C&apos;est la phrase la plus libératrice de ce livre.
              </p>

              {/* Grille de vie en semaines */}
              <div className="mx-auto my-10 max-w-md">
                <div className="grid grid-cols-[repeat(52,1fr)] gap-[2px]">
                  {[...Array(80 * 52)].map((_, i) => {
                    const yearsLived = 25;
                    const weeksLived = yearsLived * 52;
                    return (
                      <div
                        key={i}
                        className={`aspect-square rounded-[1px] ${
                          i < weeksLived
                            ? "bg-white/30"
                            : "bg-white/5"
                        }`}
                      />
                    );
                  })}
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-white/40">
                  <span>🟩 Semaines vécues (25 ans)</span>
                  <span>⬜ Semaines restantes</span>
                </div>
                <p className="mt-2 text-center text-xs text-white/30">
                  Chaque point = 1 semaine. 80 ans de vie. Regarde combien il en reste.
                </p>
              </div>

              <p>Les empereurs romains payaient un esclave pour leur murmurer cette phrase à l&apos;oreille pendant les parades.</p>

              <p>Au moment exact où la foule les acclamait comme des dieux.</p>

              <p><em className="text-white/60">&ldquo;Souviens-toi que tu es un homme. Souviens-toi que tu mourras.&rdquo;</em></p>

              <p>Un homme qui oublie qu&apos;il va mourir est un homme qui repousse tout.</p>

              <p>Qui se dit &ldquo;demain&rdquo;.</p>

              <p>Qui se convainc qu&apos;il a le temps.</p>

              <p>Et un jour il se réveille à 50 ans. Et la seule chose qu&apos;il a construite, c&apos;est une collection de <strong className="text-white">&ldquo;j&apos;aurais dû&rdquo;</strong>.</p>

              <p>Si tu ne fais rien aujourd&apos;hui...</p>

              <p>Dans <strong className="text-white">2 jours</strong>, tu auras oublié cette page.</p>
              <p>Dans <strong className="text-white">2 semaines</strong>, tu seras retombé dans ta routine.</p>
              <p>Dans <strong className="text-white">2 mois</strong>, tu verras encore quelqu&apos;un annoncer qu&apos;il a quitté son job.</p>
              <p>Dans <strong className="text-white">2 ans</strong>, tu seras au même endroit.</p>

              <p className="text-center text-xl font-bold text-white pt-4">
                Le bon moment n&apos;existe pas.<br />Le seul moment, c&apos;est maintenant.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 9. PROOF #2 ============ */}
      <section className="bg-[#fafaf8] py-12">
        <div className="mx-auto max-w-2xl px-6">
          <ProofCard name="Charles M." before="Avait tout essayé" after="Vit de son business" quote="J'ai appliqué à la lettre les préconisations et maintenant, je vis pleinement de mon activité. Si c'était à refaire, je le referais sans hésiter." />
        </div>
      </section>

      {/* ============ 10. LES MATHS ============ */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease }}>
            <div className="space-y-5 text-[17px] leading-[1.85] text-black/80">
              <p>Dis à quelqu&apos;un que tu veux devenir millionnaire.</p>

              <p>Regarde sa réaction.</p>

              <p>Tu verras un micro-sourire. Un silence gêné. Un &ldquo;ah ouais, carrément&rdquo; qui veut dire <em>&ldquo;ce mec est complètement à côté de la plaque&rdquo;</em>.</p>

              <p>En France, on a un rapport malade à l&apos;argent.</p>

              <p>On t&apos;apprend que vouloir de l&apos;argent c&apos;est vulgaire. Que les riches sont forcément malhonnêtes.</p>

              <p><strong className="text-black">Alors cassons ça avec des maths.</strong></p>

              <div className="my-8 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "1M€/an", sub: "Ça sonne énorme" },
                  { value: "83k€/mois", sub: "Déjà plus concret" },
                  { value: "~1 client/jour", sub: "à 2 800€/mois" },
                ].map((s) => (
                  <div key={s.value} className="rounded-xl border border-black/5 bg-[#fafaf8] p-5 text-center">
                    <p className="text-2xl font-bold tracking-tight text-book-green">{s.value}</p>
                    <p className="mt-1 text-sm text-black/40">{s.sub}</p>
                  </div>
                ))}
              </div>

              <p><strong className="text-black">Un million, c&apos;est un problème de maths. Pas un miracle.</strong></p>

              <p>Un salarié qui épargne 1 000€/mois met <strong className="text-black">83 ans</strong> à atteindre le million.</p>

              <p>Un entrepreneur qui fait 10 000€/mois de profit y arrive en <strong className="text-black">moins de 10 ans.</strong></p>

              <p>Même parcours. Mêmes 24 heures par jour.</p>

              <p>Deux chemins complètement différents.</p>

              <p>Et tu n&apos;as même pas besoin de viser le million pour que ta vie change.</p>

              <p><strong className="text-black">5 000€/mois à côté de ton salaire</strong> → tu respires.</p>
              <p><strong className="text-black">10 000€/mois</strong> → le CDI devient un choix, plus une obligation.</p>

              <p>Le problème, c&apos;est pas les maths.</p>

              <p className="text-xl font-bold text-black">
                C&apos;est que personne ne t&apos;a montré le chemin.
              </p>

              <p>Ce livre <strong className="text-black">est</strong> ce chemin.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 11. CTA ============ */}
      <CTASimple />

      {/* ============ 12. CE QUE CE LIVRE VA CHANGER ============ */}
      <section className="bg-[#fafaf8] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease }}>
            <h2 className="mb-4 text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
              Ce livre ne va pas t&apos;apprendre des théories.
              <br />
              <span className="pen-underline">Il va changer ta façon de voir le monde.</span>
            </h2>
            <p className="mb-12 text-center text-base text-black/40">
              Voici ce que tu seras capable de faire après l&apos;avoir lu.
            </p>

            <div className="space-y-4">
              {[
                "Tu ne verras plus jamais l'argent de la même façon. Le concept du chapitre 2 a changé chaque décision que j'ai prise depuis.",
                "Tu comprendras pourquoi certains font en 3 ans ce que d'autres mettent 30 ans à faire. Et non, c'est pas une question d'intelligence.",
                "Tu sauras exactement quel type de business lancer, sans attendre \"l'idée du siècle\" que tout le monde attend et que personne ne trouve.",
                "Tu auras un système complet pour trouver des clients, les convaincre, et les garder. Pas des conseils vagues. Un système.",
                "Tu comprendras pourquoi 99% des gens qui se lancent échouent, et comment faire partie du 1% qui réussit.",
                "Tu auras un plan d'action précis pour tes 30 prochains jours. Pas \"un jour\". Les 30 prochains jours.",
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05, ease }}
                  className="rounded-xl border border-black/5 bg-white p-5"
                >
                  <p className="text-base leading-relaxed tracking-tight text-black/70">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 13. PROOF #3 ============ */}
      <section className="py-12">
        <div className="mx-auto max-w-2xl px-6">
          <ProofCard name="Clément M." before="0 client" after="Clients en 3 sem." quote="J'ai signé mes premiers clients et posé les bases solides. Les outils m'ont permis de passer à l'action rapidement." />
        </div>
      </section>

      {/* ============ 14. BULLET POINTS CURIOSITÉ ============ */}
      <section className="bg-[#fafaf8] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease }}>
            <h2 className="mb-4 text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
              Un <span className="pen-underline">aperçu</span> de ce qui t&apos;attend à l&apos;intérieur
            </h2>
            <p className="mb-12 text-center text-base text-black/40">312 pages. 30 chapitres. Voici une fraction de ce que tu vas découvrir.</p>

            <div className="space-y-3">
              {[
                { p: "p. 12", text: "Le concept philosophique qui a mis Louis en mouvement à 17 ans (et qui va te hanter chaque matin)" },
                { p: "p. 34", text: "L'analogie qui explique pourquoi le salariat te rend fragile sans que tu t'en rendes compte" },
                { p: "p. 41", text: "La déconstruction mathématique du million : pourquoi c'est un calcul, pas un fantasme" },
                { p: "p. 58", text: "Les deux chemins vers la richesse (99% des gens ne connaissent que celui qui ne marche pas)" },
                { p: "p. 72", text: "Le mot que tu n'as jamais entendu à l'école mais qui est la clé de tout" },
                { p: "p. 85", text: "Pourquoi les \"9 sources de revenus passifs\" te condamnent à l'échec" },
                { p: "p. 93", text: "Le carnet de 40 idées qui a rapporté 0€ (et la leçon qui vaut des milliers)" },
                { p: "p. 98", text: "Les 4 critères pour savoir si ton idée peut faire 1M€ avant de lancer quoi que ce soit" },
                { p: "p. 112", text: "La scène d'un film culte qui résume pourquoi 90% des entrepreneurs échouent" },
                { p: "p. 127", text: "L'exercice d'une heure qui te donne un avantage sur 95% de tes concurrents" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.03, ease }}
                  className="flex items-start gap-4 rounded-xl border border-black/5 bg-white p-4 sm:p-5"
                >
                  <span className="flex-shrink-0 rounded-lg bg-book-green px-2.5 py-1 text-xs font-bold text-white">{item.p}</span>
                  <p className="text-[15px] leading-relaxed tracking-tight text-black/70">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm font-bold text-black/40">Et on n&apos;est même pas à la moitié...</p>

            <div className="mt-8 space-y-3">
              {[
                { p: "p. 139", text: "La stratégie du restaurant étoilé : pourquoi ceux qui donnent gratuitement finissent par gagner plus" },
                { p: "p. 156", text: "Les 7 éléments d'une page qui convertit 8x mieux que la moyenne" },
                { p: "p. 171", text: "La technique du Parrain : comment rendre ton offre impossible à refuser" },
                { p: "p. 189", text: "Pourquoi vendre pas cher détruit ton business (et le mécanisme inverse)" },
                { p: "p. 204", text: "Les 3 premières minutes après un achat : le moment que tout le monde rate" },
                { p: "p. 218", text: "La mécanique des intérêts composés appliquée à ton CA (le concept le plus puissant du livre)" },
                { p: "p. 231", text: "Les 4 paliers vers le million : à quel palier tu es, et ce qui te manque" },
                { p: "p. 248", text: "La structure en 9 blocs d'une vidéo qui vend pendant que tu dors" },
                { p: "p. 267", text: "Le moment où tu ouvres ton dashboard le 1er du mois et l'argent est déjà là" },
                { p: "p. 289", text: "Le plan d'action de tes 7 prochains jours dès que tu poses ce livre" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.03, ease }}
                  className="flex items-start gap-4 rounded-xl border border-black/5 bg-white p-4 sm:p-5"
                >
                  <span className="flex-shrink-0 rounded-lg bg-book-green px-2.5 py-1 text-xs font-bold text-white">{item.p}</span>
                  <p className="text-[15px] leading-relaxed tracking-tight text-black/70">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 15. QUALIFICATION — VS layout ============ */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease }}>
            <div className="grid items-start gap-6 sm:grid-cols-[1fr_auto_1fr]">
              {/* Pour toi */}
              <div className="rounded-2xl border-2 border-book-green/20 bg-book-green/5 p-6">
                <p className="mb-4 text-center text-lg font-extrabold tracking-tight text-book-green">
                  ✅ Ce livre est pour toi si...
                </p>
                <div className="space-y-3">
                  {[
                    "Tu veux lancer un business en ligne",
                    "Tu as déjà essayé mais rien n'a décollé",
                    "Tu regardes des vidéos sans passer à l'action",
                    "Tu veux un plan, pas de la motivation",
                    "Tu es prêt à bosser 1-2h par jour",
                    "Tu en as marre d'attendre",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-book-green">✓</span>
                      <p className="text-sm text-black/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* VS */}
              <div className="flex items-center justify-center self-center">
                <span className="text-3xl font-black tracking-tighter text-black/20 sm:text-5xl">VS</span>
              </div>

              {/* Pas pour toi */}
              <div className="rounded-2xl border-2 border-red-500/20 bg-red-500/5 p-6">
                <p className="mb-4 text-center text-lg font-extrabold tracking-tight text-red-500">
                  ❌ PAS pour toi si...
                </p>
                <div className="space-y-3">
                  {[
                    "Tu cherches un hack pour devenir riche sans bosser",
                    "Tu veux du dev perso sans plan d'action",
                    "Tu n'es pas prêt à remettre en question tes croyances",
                    "Tu veux des résultats en appuyant sur un bouton",
                    "Tu penses que l'argent c'est sale",
                    "Tu préfères regarder plutôt que faire",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-red-500">✗</span>
                      <p className="text-sm text-black/70">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 16. CTA ============ */}
      <CTASimple />

      {/* ============ 17. RÉVÉLATION DU PRIX ============ */}
      <section className="bg-[#fafaf8] py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease }}>
            <Image src="/images/livre/cover.jpg" alt="Le livre" width={280} height={392} className="mx-auto mb-8 rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.2)]" />

            <h2 className="mb-4 text-2xl font-extrabold tracking-tight sm:text-3xl">
              312 pages. 30 chapitres. Imprimé. Livré chez toi.
            </h2>

            <p className="mx-auto mb-6 max-w-xl text-base leading-relaxed text-black/60">
              8 ans d&apos;expérience. +10M€ générés. 1 018 personnes accompagnées.
              Tout condensé dans un seul livre.
            </p>

            <p className="mb-2 text-sm text-black/40">Valeur réelle : inestimable. Prix aujourd&apos;hui :</p>

            <CTA />
          </motion.div>
        </div>
      </section>

      {/* ============ 18. RÉPUTATION EN JEU ============ */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-2xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease }}>
            <h2 className="mb-8 text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
              Je mets ma réputation en jeu.
            </h2>
            <div className="space-y-5 text-[17px] leading-[1.85] text-black/80">
              <p>300 000 personnes me suivent sur YouTube.</p>
              <p>1 018 personnes sont passées par notre accompagnement.</p>
              <p>Mon entreprise emploie 12 personnes aujourd&apos;hui.</p>
              <p>Ma note Trustpilot est de 4.7/5.</p>
              <p><strong className="text-black">Si ce livre ne valait rien, j&apos;aurais tout à perdre.</strong></p>
              <p>Ma crédibilité. Mon business. Ma communauté. Tout ce que j&apos;ai construit en 8 ans.</p>
              <p>C&apos;est pour ça que j&apos;ai passé des mois à écrire ces 312 pages.</p>
              <p>Pas pour faire un bouquin de plus.</p>
              <p>Pour faire <span className="highlight-yellow font-bold text-black">le seul dont tu auras besoin.</span></p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 19. PREUVES SOCIALES MASSIVES ============ */}
      <section className="bg-[#fafaf8] py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease }}>
            <h2 className="mb-4 text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
              Ce ne sont pas mes mots. <span className="pen-underline">Ce sont les leurs.</span>
            </h2>
            <p className="mb-14 text-center text-base text-black/40">4.7/5 sur Trustpilot — 1 018 entrepreneurs accompagnés</p>
            <div className="grid gap-5 sm:grid-cols-2">
              <ProofCard name="Jennifer" before="Doute total" after="Activité lancée" quote="Une transformation passant du doute à la création d'entreprise. L'accompagnement m'a permis d'acquérir une vraie confiance professionnelle." />
              <ProofCard name="Jules C." before="0 résultat" after="Résultats en 30j" quote="Les premiers à m'avoir vraiment permis d'avoir des résultats concrets. Investissement définitivement rentable." />
              <ProofCard name="Thomas" before="Hésitait depuis 2 ans" after="Activité lancée" quote="Sûrement un de mes meilleurs investissements. Ce programme m'a aidé à lancer une activité. On se sent réellement accompagné." />
              <ProofCard name="Solen" before="Sceptique" after="Impressionnée" quote="J'avais peur que ce soit une arnaque. Finalement je suis totalement impressionnée par la richesse du contenu." />
              <ProofCard name="Nathan J." before="Ne savait pas quoi faire" after="Révélation" quote="De la semaine 1 à la semaine 6, on est plongé dans un environnement incroyable. Ça a été une vraie révélation." />
              <ProofCard name="Amandine" before="Budget restreint" after="Contenu top" quote="J'ai vraiment hésité longtemps, mon budget était hyper restreint. Le contenu est très utile et toujours en évolution." />
              <ProofCard name="Paul Brice" before="Cherchait la bonne méthode" after="Revenus solides" quote="L'équipe s'est montrée extrêmement compétente. Aujourd'hui, mon activité génère des revenus solides !" />
              <ProofCard name="Damien" before="Sceptique" after="Gratitude" quote="C'est un accompagnement archi complet qui t'apporte des compétences incroyables. Énorme gratitude." />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 20. FAQ ============ */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease }}>
            <h2 className="mb-12 text-center text-2xl font-extrabold tracking-tight sm:text-3xl">Tu te demandes peut-être...</h2>
            <div className="space-y-4">
              {[
                { q: "C'est un livre physique ?", a: "Oui. Un vrai livre imprimé de 312 pages que tu reçois chez toi. Pas un PDF. Livraison offerte en France métropolitaine, 3 à 5 jours ouvrés." },
                { q: "J'ai aucune idée de business", a: "C'est justement le point de départ. Le livre te montre comment trouver le bon business à lancer, étape par étape." },
                { q: "J'ai déjà essayé et ça n'a pas marché", a: "Ce livre t'explique pourquoi. Et surtout, ce qu'il faut faire différemment." },
                { q: "C'est un bouquin de motivation ?", a: "Non. C'est un plan d'action. 312 pages construites pour que tu passes à l'action, pas pour que tu te sentes bien 5 minutes." },
                { q: "Pourquoi seulement 14,90€ ?", a: "Le livre est un premier pas. L'objectif n'est pas de faire du profit dessus. C'est que tu lises, que tu appliques, et que tu voies des résultats." },
                { q: "C'est quoi la différence avec YouTube ?", a: "YouTube te donne des morceaux. Le livre te donne le puzzle complet, dans le bon ordre, avec le plan d'action." },
              ].map((faq) => (
                <div key={faq.q} className="rounded-2xl border border-black/5 bg-[#fafaf8] p-6">
                  <h3 className="mb-2 text-base font-bold tracking-tight">{faq.q}</h3>
                  <p className="text-sm leading-relaxed text-black/60">{faq.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============ 21. THE BRIDGE — Pilule rouge / bleue ============ */}
      <section className="bg-book-green-dark py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8, ease }}>
            <h2 className="mb-10 text-center text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Tu as deux choix.
            </h2>

            <div className="grid gap-6 sm:grid-cols-2">
              {/* Pilule bleue */}
              <div className="rounded-2xl border-2 border-blue-400/20 bg-blue-400/5 p-6 sm:p-8">
                <div className="mb-4 text-center text-4xl">🔵</div>
                <h3 className="mb-3 text-center text-lg font-extrabold tracking-tight text-blue-300">
                  La pilule bleue
                </h3>
                <div className="space-y-3 text-sm leading-relaxed text-white/60">
                  <p>Tu fermes cette page.</p>
                  <p>Tu retournes scroller.</p>
                  <p>Demain matin, tu te lèves, tu vas au boulot, tu rentres le soir.</p>
                  <p>Et dans un an, tu es <strong className="text-white/80">exactement au même endroit.</strong></p>
                  <p>Même situation. Même frustration.</p>
                  <p>Même &ldquo;un jour, je ferai&rdquo;.</p>
                </div>
              </div>

              {/* Pilule rouge */}
              <div className="rounded-2xl border-2 border-red-400/30 bg-red-400/5 p-6 sm:p-8 shadow-[0_0_40px_rgba(239,68,68,0.1)]">
                <div className="mb-4 text-center text-4xl">🔴</div>
                <h3 className="mb-3 text-center text-lg font-extrabold tracking-tight text-red-300">
                  La pilule rouge
                </h3>
                <div className="space-y-3 text-sm leading-relaxed text-white/60">
                  <p>Tu investis 14,90€.</p>
                  <p>Le prix de 3 cafés.</p>
                  <p>Tu reçois chez toi <strong className="text-white/80">312 pages</strong> qui contiennent 8 ans d&apos;expérience.</p>
                  <p>Le même plan que <strong className="text-white/80">1 018 personnes</strong> ont suivi avant toi.</p>
                  <p>Et dans 30 jours, tu as un plan d&apos;action clair.</p>
                  <p><strong className="text-white">Et tes premiers résultats.</strong></p>
                </div>
              </div>
            </div>

            <p className="mt-10 text-center text-lg text-white/60">
              Si tu lis encore ces lignes, c&apos;est que{" "}
              <span className="highlight-yellow font-bold text-black">tu sais quelle pilule prendre.</span>
            </p>

            <p className="mt-4 text-center text-sm text-white/30">— Louis</p>

            <CTA dark />
          </motion.div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-black/5 py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <Image src="/images/logo-black.png" alt="Agencilab" width={120} height={30} className="h-5 w-auto opacity-30" />
            <div className="flex items-center gap-6 text-xs text-black/30">
              <a href="/mentions-legales" className="hover:text-black/60 transition-colors">Mentions légales</a>
              <a href="/politique-de-confidentialite" className="hover:text-black/60 transition-colors">Politique de confidentialité</a>
            </div>
            <p className="text-xs text-black/20">&copy; {new Date().getFullYear()} Agencilab</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
