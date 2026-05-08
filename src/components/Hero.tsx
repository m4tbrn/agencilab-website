"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CTA_LINK = "#rejoindre";

const faces = [
  { src: "/images/visages/barthelemy.jpg", name: "Barthélémy" },
  { src: "/images/visages/marina.jpg", name: "Marina" },
  { src: "/images/visages/yohann.jpg", name: "Yohann" },
  { src: "/images/visages/lucas.jpg", name: "Lucas" },
  { src: "/images/visages/stephanie.jpg", name: "Stéphanie" },
  { src: "/images/visages/damien.jpg", name: "Damien" },
  { src: "/images/visages/clement.jpg", name: "Clément" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-24 pb-16 sm:px-6 lg:pt-36 lg:pb-20">
      {/* Grid lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
        <div className="absolute left-[40%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute left-[60%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute left-[80%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
        <div className="absolute left-0 top-[25%] h-px w-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
        <div className="absolute left-0 top-[50%] h-px w-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
        <div className="absolute left-0 top-[75%] h-px w-full bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />
      </div>

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-navy-600/15 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-0">
        {/* Grand rectangle — texte gauche + photo droite */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hero-border rounded-2xl border border-white/10 bg-white/[0.03] sm:rounded-3xl"
        >
          <div className="grid lg:grid-cols-[1.2fr_1fr]">
            {/* Gauche — texte */}
            <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
              {/* Badge */}
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent-400" />
                <span className="text-sm tracking-tight text-white/70">
                  +1 018 salariés accompagnés
                </span>
              </div>

              <h1 className="mb-5 text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem]">
                Apprends le <strong className="text-accent-400">Growth Marketing</strong>, une activité (très) rentable et <span className="gradient-text">génère +2 987€/mois</span> depuis chez toi.
              </h1>

              <p className="mb-8 max-w-md text-base leading-relaxed tracking-tight text-white/50">
                Sans diplôme.
                <br />
                En 45 minutes par jour.
                <br />
                En parallèle de ton emploi.
              </p>

              {/* CTA */}
              <a
                href={CTA_LINK}
                className="cta-button glow-gold mb-3 inline-flex w-fit items-center gap-3 rounded-xl bg-gold-400 px-8 py-4 text-base font-bold tracking-tight text-navy-950"
              >
                Réserver mon appel gratuit
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <span className="text-sm tracking-tight text-white/30">
                Appel de 45 min, 100% gratuit, sans engagement
              </span>

              {/* Faces */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {faces.map((face, i) => (
                    <div
                      key={i}
                      className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-navy-950"
                    >
                      <Image src={face.src} alt={face.name} fill className="object-cover" sizes="36px" />
                    </div>
                  ))}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-navy-950 bg-accent-400/10 text-[9px] font-bold text-accent-400">
                    +893
                  </div>
                </div>
                <p className="text-xs tracking-tight text-white/30">
                  Ils ont changé de vie grâce à Agencilab
                </p>
              </div>
            </div>

            {/* Droite — photo */}
            <div className="relative min-h-[300px] overflow-hidden rounded-br-3xl rounded-tr-3xl lg:min-h-0">
              <Image
                src="/images/hero-group.jpg"
                alt="La communauté Agencilab lors d'un séminaire"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1200px"
                quality={100}
                priority
                unoptimized
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/30 to-transparent lg:from-navy-950/20" />

              {/* Stats en haut avec backdrop blur + favicon */}
              <div className="absolute left-3 right-3 top-3 flex items-center gap-3 rounded-xl border border-white/10 bg-navy-950/50 px-4 py-3 backdrop-blur-xl sm:left-4 sm:right-4 sm:top-4">
                <Image
                  src="/images/favicon.png"
                  alt="Agencilab"
                  width={32}
                  height={32}
                  className="h-7 w-7 flex-shrink-0 rounded-lg sm:h-8 sm:w-8"
                />
                <div className="flex flex-1 items-center justify-center divide-x divide-white/10">
                  <div className="px-4 text-center">
                    <p className="text-sm font-bold tracking-tight text-accent-400 sm:text-base">1 018+</p>
                    <p className="text-[9px] text-white/50 sm:text-[10px]">accompagnés</p>
                  </div>
                  <div className="px-4 text-center">
                    <p className="text-sm font-bold tracking-tight text-accent-400 sm:text-base">4.7/5</p>
                    <p className="text-[9px] text-white/50 sm:text-[10px]">Trustpilot</p>
                  </div>
                  <div className="px-4 text-center">
                    <p className="text-sm font-bold tracking-tight text-accent-400 sm:text-base">2 987€</p>
                    <p className="text-[9px] text-white/50 sm:text-[10px]">revenu moyen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* VSL — dépasse du rectangle vers le bas */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 mx-auto mt-6 max-w-4xl sm:mb-[-80px]"
        >
          <p className="mb-4 text-center text-xl text-white/60 sm:text-2xl" style={{ fontFamily: "var(--font-caveat)" }}>
            Regarde ce documentaire, il t&apos;explique tout 👇
          </p>
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <div
              id="vidalytics_embed_Q5cMENYOeQ7H8laF"
              style={{ width: "100%", position: "relative", paddingTop: "56.25%" }}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
(function (v, i, d, a, l, y, t, c, s) {
    y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
    if (!vsl){vsl=function(u,cb){
        if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
        if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}
        i.getElementsByTagName("head")[0].appendChild(s);
    };}
    vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
})(window, document, 'Vidalytics', 'vidalytics_embed_Q5cMENYOeQ7H8laF', 'https://fast.vidalytics.com/embeds/19a1Efop/Q5cMENYOeQ7H8laF/');
                `,
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
