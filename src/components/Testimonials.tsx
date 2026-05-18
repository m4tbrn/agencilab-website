"use client";

import { motion } from "framer-motion";
import { testimonials } from "./testimonialsData";


function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="marble-bg py-16 lg:py-24" id="temoignages">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-navy-600">
            Avis vérifiés
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
            Noté 4.7/5 sur Trustpilot
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg tracking-tight text-navy-950/50">
            Avis vérifiés de membres Agencilab sur Trustpilot.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: i * 0.02, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col justify-between rounded-2xl border border-navy-950/5 bg-white p-7 transition-all duration-300 hover:shadow-lg hover:shadow-navy-950/5"
            >
              <div>
                <Stars count={t.stars} />
                <h3 className="mt-4 text-base font-bold tracking-tight text-navy-950">
                  {t.title}
                </h3>
                <p className="mt-2 leading-relaxed tracking-tight text-navy-950/60">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
              <div className="mt-5 flex items-center gap-3 border-t border-navy-950/5 pt-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-950/5 text-sm font-bold text-navy-950/60">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold tracking-tight text-navy-950">
                    {t.name}
                  </p>
                  <p className="text-xs tracking-tight text-navy-950/40">
                    Avis vérifié Trustpilot
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trustpilot footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-navy-950/10 bg-white px-5 py-3 text-sm text-navy-950/50">
            <Stars count={5} />
            <span className="font-medium text-navy-950">4.7/5</span>
            <span>— Vérifié sur Trustpilot</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
