/**
 * Composants UI partagés pour la brochure Growth Marketing.
 * Tous les "use server" friendly (pas de hooks, pas de state).
 */

export function Callout({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="my-8 rounded-2xl border border-gold-400/40 bg-gold-400/[0.06] p-5 md:p-6"
      style={{ boxShadow: "0 0 30px rgba(255, 122, 0, 0.10)" }}
    >
      <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-gold-400">
        {label}
      </p>
      <p className="text-[0.9375rem] leading-[1.6] text-current md:text-[1rem]">
        {children}
      </p>
    </div>
  );
}

export function NotItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[0.9375rem] md:text-[1rem]">
      <CrossIcon />
      <span>{children}</span>
    </li>
  );
}

export function StatCard({
  number,
  label,
  sub,
}: {
  number: string;
  label: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-navy-950/10 bg-white/60 p-6 backdrop-blur-sm">
      <p className="mb-2 text-[clamp(2.25rem,5vw,3rem)] font-black leading-none tracking-tight text-accent-400">
        {number}
      </p>
      <p className="mb-1 text-[0.9375rem] font-bold text-navy-950">{label}</p>
      <p className="text-[0.8125rem] leading-[1.5] text-navy-950/65">{sub}</p>
    </div>
  );
}

export function DayBlock({
  time,
  title,
  desc,
}: {
  time: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm md:p-6">
      <div className="shrink-0 text-right">
        <p className="text-[0.875rem] font-bold tabular-nums text-gold-400 md:text-[0.9375rem]">
          {time}
        </p>
      </div>
      <div className="min-w-0 flex-1 border-l border-white/10 pl-5">
        <p className="mb-1 text-[1rem] font-bold text-white md:text-[1.0625rem]">
          {title}
        </p>
        <p className="text-[0.9375rem] leading-[1.55] text-white/70">{desc}</p>
      </div>
    </div>
  );
}

export function PillarCard({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-navy-950/10 bg-white/70 p-5 backdrop-blur-sm md:gap-6 md:p-6">
      <div className="shrink-0">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent-400/60 bg-accent-400/[0.08] text-[0.9375rem] font-bold text-accent-400">
          {num}
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-[1rem] font-bold text-navy-950 md:text-[1.0625rem]">
          {title}
        </p>
        <p className="text-[0.9375rem] leading-[1.55] text-navy-950/70">
          {desc}
        </p>
      </div>
    </div>
  );
}

export function RevenueCard({
  level,
  range,
  sub,
  detail,
  tier,
}: {
  level: string;
  range: string;
  sub: string;
  detail: string;
  tier: "entry" | "mid" | "top";
}) {
  const accent =
    tier === "entry"
      ? "border-white/15 bg-white/[0.04]"
      : tier === "mid"
        ? "border-accent-400/30 bg-accent-400/[0.05]"
        : "border-gold-400/35 bg-gold-400/[0.05]";

  return (
    <div className={`rounded-2xl border p-6 backdrop-blur-sm ${accent}`}>
      <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.18em] text-white/55">
        {level}
      </p>
      <p className="text-[clamp(1.5rem,3.5vw,1.875rem)] font-extrabold leading-none tracking-tight text-white">
        {range}
      </p>
      <p className="mb-4 text-[0.875rem] text-white/55">{sub}</p>
      <p className="text-[0.8125rem] leading-[1.5] text-white/70">{detail}</p>
    </div>
  );
}

export function ProfileCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-navy-950/10 bg-white/70 p-5 backdrop-blur-sm md:p-6">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-400/15">
          <CheckIconAccent />
        </div>
        <p className="text-[1rem] font-bold text-navy-950 md:text-[1.0625rem]">
          {title}
        </p>
      </div>
      <p className="text-[0.9375rem] leading-[1.55] text-navy-950/70">
        {children}
      </p>
    </div>
  );
}

export function StepCard({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm md:p-6">
      <div className="shrink-0">
        <p className="text-[1.25rem] font-black leading-none tracking-tight text-gold-400 md:text-[1.5rem]">
          {num}
        </p>
      </div>
      <div className="min-w-0 flex-1 border-l border-white/10 pl-5">
        <p className="mb-1 text-[1rem] font-bold text-white md:text-[1.0625rem]">
          {title}
        </p>
        <p className="text-[0.9375rem] leading-[1.55] text-white/70">{desc}</p>
      </div>
    </div>
  );
}

/* ============================================================
   Icons
   ============================================================ */

export function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export function BookIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

export function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function CheckIconAccent() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-accent-400"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function CrossIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 shrink-0 text-red-400"
      aria-hidden
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function ArrowRightIcon({
  className = "text-white/40 transition-transform group-hover:translate-x-1 group-hover:text-gold-400",
}: {
  className?: string;
}) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function ArrowLeftIcon({
  className = "text-white/60 transition-transform group-hover:-translate-x-1",
}: {
  className?: string;
}) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}
