"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChatsCircle,
  UsersThree,
  Calendar,
  Robot,
  GraduationCap,
  CheckCircle,
  Sparkle,
  PlayCircle,
  Heart,
} from "@phosphor-icons/react/dist/ssr";

/**
 * Section "ce qui est inclus" de la page offre — version lignes alternées
 * premium : chaque inclusion = une grande ligne avec un visuel mockup d'un
 * côté et le texte de l'autre, en alternance gauche/droite.
 */

/* ============================================================
   VISUELS MOCKUP
   ============================================================ */

function CoachingVisual() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <Image
        src="/images/coaching-groupe.png"
        alt="Coaching de groupe Agencilab en direct"
        width={1526}
        height={850}
        className="h-auto w-full"
        sizes="(max-width: 768px) 100vw, 460px"
      />
    </div>
  );
}

function CommunauteVisual() {
  const messages = [
    {
      src: "/images/visages/leo.jpg",
      name: "Léo",
      role: "Élève",
      texte: "Ça y est, premier site signé à 1 500€ 🔥 j'en reviens toujours pas",
      likes: 64,
    },
    {
      src: "/images/team/louis-esquier.jpg",
      name: "Louis",
      role: "Coach",
      texte: "Énorme Léo 👏 je savais que t'allais le faire, le prochain arrive vite, lâche rien 🔥",
      likes: 41,
    },
    {
      src: "/images/visages/marina.jpg",
      name: "Marina",
      role: "Élève",
      texte: "Bravo 🙌 ça motive à fond, j'envoie mes premiers messages de prospection ce soir, let's gooo 🚀",
      likes: 38,
    },
  ];
  return (
    <div className="space-y-2.5">
      {messages.map((m) => (
        <div
          key={m.name}
          className="flex gap-3 rounded-2xl border border-white/10 bg-[#0d0d11] p-3.5 shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
        >
          <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/10">
            <Image
              src={m.src}
              alt={m.name}
              fill
              className="object-cover"
              sizes="36px"
            />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="text-[0.8125rem] font-bold text-white">{m.name}</p>
              <span
                className={`rounded-full border px-1.5 py-0.5 text-[0.5625rem] font-bold uppercase tracking-wide ${
                  m.role === "Coach"
                    ? "border-gold-400/40 bg-gold-400/10 text-gold-400"
                    : "border-white/15 bg-white/[0.06] text-white/50"
                }`}
              >
                {m.role}
              </span>
            </div>
            <p className="text-[0.8125rem] leading-[1.45] text-white/70">
              {m.texte}
            </p>
            <span className="mt-1 inline-flex items-center gap-1 text-[0.6875rem] text-white/40">
              <Heart size={11} weight="fill" className="text-red-400" />
              {m.likes}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

function SeminaireVisual() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <Image
        src="/images/seminaire/salle.jpg"
        alt="Séminaire Agencilab en présentiel"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 460px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-navy-950/70 px-3 py-1 text-[0.6875rem] font-bold text-white backdrop-blur-sm">
        <Calendar size={12} weight="fill" className="text-gold-400" />
        Séminaire Agencilab
      </span>
      <p className="absolute bottom-3 left-3 right-3 text-[0.8125rem] font-semibold text-white">
        Des dizaines de membres réunis en présentiel
      </p>
    </div>
  );
}

function AliciaVisual() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d0d11] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Header */}
      <div className="mb-3 flex items-center gap-2.5 border-b border-white/5 pb-3">
        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-accent-400/40">
          <Image
            src="/images/alicia.jpg"
            alt="Alic.ia"
            fill
            className="object-cover"
            sizes="36px"
          />
        </div>
        <div className="flex-1">
          <p className="text-[0.8125rem] font-bold text-white">Alic.ia</p>
          <p className="text-[0.625rem] text-white/40">IA Agencilab</p>
        </div>
        <span className="flex items-center gap-1 text-[0.625rem] text-[#a3e635]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#a3e635]" />
          en ligne
        </span>
      </div>
      {/* Bulle user */}
      <div className="mb-2 flex justify-end">
        <p className="max-w-[80%] rounded-2xl rounded-br-md bg-accent-400/15 px-3 py-2 text-[0.8125rem] leading-[1.4] text-white">
          Crée le site de mon client, un restaurant à Lyon
        </p>
      </div>
      {/* Bulle Alic.ia */}
      <div className="flex justify-start">
        <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/[0.06] px-3 py-2 text-[0.8125rem] leading-[1.45] text-white/80">
          <Sparkle
            size={12}
            weight="fill"
            className="mr-1 inline text-gold-400"
          />
          C'est parti, voici la structure du site, les textes et les visuels,
          optimisés pour lui ramener des réservations...
        </p>
      </div>
    </div>
  );
}

function ContenuVisual() {
  const modules = [
    "Tunnels de vente & sites",
    "Prospection",
    "Closing",
    "IA & automatisation",
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-[#0d0d11] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-[0.8125rem] font-bold text-white">Ton espace membre</p>
        <span className="rounded-full bg-gold-400/15 px-2 py-0.5 text-[0.5625rem] font-bold uppercase tracking-wide text-gold-400">
          Accès illimité
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {modules.map((m) => (
          <div
            key={m}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-2.5"
          >
            <PlayCircle
              size={20}
              weight="fill"
              className="shrink-0 text-accent-400"
            />
            <span className="text-[0.6875rem] font-semibold leading-[1.25] text-white">
              {m}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   DONNÉES + RENDU
   ============================================================ */

const INCLUS = [
  {
    icon: ChatsCircle,
    tag: "Chaque semaine",
    titre: "Un coaching de groupe avec des Growth Marketer qui réussissent chaque semaine",
    desc: "Tu rejoins une session live avec des experts d'Agencilab. Tu exposes ton blocage, on te répond en direct, tu repars avec ton plan d'action. Aucune question ne reste sans réponse.",
    Visual: CoachingVisual,
  },
  {
    icon: UsersThree,
    tag: "+1 018 membres",
    titre: "+1 018 membres qui avancent avec toi",
    desc: "Tu n'es jamais seul. Chaque jour, des membres partagent leurs contrats signés et leurs scripts qui marchent. Voir les autres réussir, c'est ce qui te fait passer à l'action.",
    Visual: CommunauteVisual,
  },
  {
    icon: Calendar,
    tag: "Tarif membre",
    titre: "Les séminaires en présentiel, au tarif membre",
    desc: "Tu rencontres l'équipe et les autres membres en vrai, lors d'événements qui font basculer une trajectoire. Réservés aux membres, à un prix qu'on ne propose nulle part ailleurs.",
    Visual: SeminaireVisual,
  },
  {
    icon: Robot,
    tag: "Sur chaque service",
    titre: "Alic.ia, l'IA qui livre tes services avec toi",
    desc: "Une IA entraînée sur les méthodes d'Agencilab. Elle t'aide à créer les sites, lancer les publicités, écrire les textes de vente : tu livres tes clients en quelques heures, pas en quelques jours.",
    Visual: AliciaVisual,
  },
  {
    icon: GraduationCap,
    tag: "Accès illimité",
    titre: "Tout le contenu, en accès illimité",
    desc: "Les compétences, les modèles et les scripts prêts à l'emploi, enrichis en continu. Tant que tu es membre, tu y reviens autant de fois que tu veux, toujours avec la dernière version.",
    Visual: ContenuVisual,
  },
];

export default function OffreInclus() {
  return (
    <div id="inclus" className="mx-auto mb-14 max-w-[1000px] scroll-mt-20 md:mb-20">
      <div className="mx-auto mb-10 max-w-[640px] text-center md:mb-14">
        <span className="mb-3 inline-block text-[0.75rem] font-bold uppercase tracking-[0.16em] text-accent-400 md:text-[0.8125rem]">
          Et ce n&apos;est pas tout
        </span>
        <h3 className="text-[clamp(1.375rem,3.4vw,2rem)] font-bold leading-[1.18] tracking-tight text-white">
          Tout ça est <span className="gradient-text">inclus</span>, dès ton
          premier jour
        </h3>
      </div>

      <div className="space-y-10 md:space-y-16">
        {INCLUS.map((item, i) => {
          const Icon = item.icon;
          const Visual = item.Visual;
          const visualRight = i % 2 === 1;
          return (
            <motion.div
              key={item.titre}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="grid items-center gap-6 md:grid-cols-2 md:gap-12"
            >
              {/* Visuel */}
              <motion.div
                initial={{ opacity: 0, x: visualRight ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={visualRight ? "md:order-2" : "md:order-1"}
              >
                <Visual />
              </motion.div>
              {/* Texte */}
              <div className={visualRight ? "md:order-1" : "md:order-2"}>
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-gold-400/40 bg-gold-400/10 text-gold-400"
                    style={{ boxShadow: "0 0 24px rgba(255, 122, 0, 0.15)" }}
                  >
                    <Icon size={24} weight="duotone" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-gold-400/10 px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.1em] text-gold-400">
                    <CheckCircle size={11} weight="fill" />
                    {item.tag}
                  </span>
                </div>
                <h4 className="mb-2 text-[clamp(1.25rem,2.6vw,1.625rem)] font-bold leading-[1.2] tracking-tight text-white">
                  {item.titre}
                </h4>
                <p className="text-[0.9375rem] leading-[1.65] text-white/65 md:text-[1rem]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
