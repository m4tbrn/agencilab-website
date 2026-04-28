"use client";

import { useEffect, useState } from "react";

export default function LiveViewers() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    setCount(23 + Math.floor(Math.random() * 25));

    const tick = () => {
      setCount((c) => {
        if (c === null) return c;
        const delta = Math.floor(Math.random() * 5) - 2;
        const next = c + delta;
        return Math.max(18, Math.min(72, next));
      });
    };

    const schedule = () => {
      const delay = 20000 + Math.random() * 20000;
      return setTimeout(() => {
        tick();
        timer = schedule();
      }, delay);
    };

    let timer = schedule();
    return () => clearTimeout(timer);
  }, []);

  if (count === null) return null;

  return (
    <div className="mb-8 flex justify-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ef4444] opacity-75" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
        </span>
        <span className="text-[0.875rem] text-white/80 md:text-[0.9375rem]">
          <strong className="font-bold text-white">{count} personnes</strong> regardent la vidéo en ce moment
        </span>
      </div>
    </div>
  );
}
