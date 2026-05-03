"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type Faq = { question: string; answer: string };

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: Faq;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="text-base font-medium tracking-tight text-white/90 group-hover:text-white transition-colors pr-8 sm:text-lg">
          {faq.question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-accent-400/10 border-accent-400/30 rotate-45" : ""
          }`}
        >
          <svg
            className={`w-4 h-4 transition-colors ${
              isOpen ? "text-accent-400" : "text-white/40"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/70 leading-relaxed tracking-tight max-w-3xl whitespace-pre-line">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqBnAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-2 backdrop-blur-sm md:px-10">
      {faqs.map((faq, i) => (
        <FaqItem
          key={i}
          faq={faq}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
