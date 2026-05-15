import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CHAPTERS } from "../../_lib/chapters";
import { BrochureLayout } from "../../_lib/BrochureLayout";
import {
  normalizeCloser,
  formatRdvDate,
  normalizePrenom,
} from "../../_lib/searchparams";

function parseStep(value: string | string[] | undefined): number | null {
  const raw = Array.isArray(value) ? value[0] : value;
  if (!raw) return null;
  const n = parseInt(raw, 10);
  if (!Number.isFinite(n) || n < 1 || n > CHAPTERS.length) return null;
  return n;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ step: string }>;
}): Promise<Metadata> {
  const { step } = await params;
  const stepNum = parseStep(step);
  if (!stepNum) {
    return { title: "Brochure Growth Marketing", robots: { index: false } };
  }
  const chapter = CHAPTERS[stepNum - 1];
  return {
    title: `${chapter.num} · ${chapter.title} — Brochure Agencilab`,
    description: chapter.subtitle ?? "Brochure Growth Marketing Agencilab",
    robots: { index: false, follow: false },
  };
}

export function generateStaticParams() {
  return CHAPTERS.map((_, idx) => ({ step: String(idx + 1) }));
}

export default async function ChapterPage({
  params,
  searchParams,
}: {
  params: Promise<{ step: string }>;
  searchParams: Promise<{
    closer?: string | string[];
    rdv?: string | string[];
    prenom?: string | string[];
  }>;
}) {
  const [{ step }, sp] = await Promise.all([params, searchParams]);
  const stepNum = parseStep(step);
  if (!stepNum) notFound();

  const chapter = CHAPTERS[stepNum - 1];
  const closer = normalizeCloser(sp.closer);
  const closerLabel = closer ?? "ton conseiller";
  const rdvLabel = formatRdvDate(sp.rdv) ?? "le jour J";
  const prenom = normalizePrenom(sp.prenom);

  return (
    <BrochureLayout
      step={stepNum}
      chapter={chapter}
      closerSlug={closer}
      closerLabel={closerLabel}
      rdvParam={Array.isArray(sp.rdv) ? sp.rdv[0] : sp.rdv}
      prenom={prenom}
    >
      {chapter.content({
        closerLabel,
        closerSlug: closer,
        rdvLabel,
        prenom: prenom ?? null,
      })}
    </BrochureLayout>
  );
}
