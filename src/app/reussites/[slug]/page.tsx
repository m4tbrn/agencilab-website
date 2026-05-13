import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IClosedPopup from "@/components/IClosedPopup";
import {
  getAllReussites,
  getReussiteBySlug,
} from "@/lib/reussites/data";
import type { Reussite } from "@/lib/reussites/types";

export async function generateStaticParams() {
  return getAllReussites()
    .filter((r) => !r.draft)
    .map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = getReussiteBySlug(slug);
  if (!r) return { title: "Réussite introuvable" };

  const contextLine = [r.oldJob, r.city, r.age ? `${r.age} ans` : null]
    .filter(Boolean)
    .join(", ");

  return {
    title: `${r.name} : ${r.outcomeHeadline} — Agencilab`,
    description: `${contextLine ? contextLine + ". " : ""}${r.outcomeHeadline}. Interview complète : son parcours et les questions qu'il a répondues.`,
    alternates: {
      canonical: `https://agencilab.com/reussites/${r.slug}`,
    },
    openGraph: {
      title: `${r.name} : ${r.outcomeHeadline}`,
      description: `${contextLine ? contextLine + ". " : ""}Interview Agencilab.`,
      url: `https://agencilab.com/reussites/${r.slug}`,
      type: "article",
      images: [{ url: r.photo, width: 800, height: 800, alt: r.name }],
    },
  };
}

export default async function ReussiteDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const r = getReussiteBySlug(slug);
  if (!r || r.draft) notFound();

  const contextLine = [r.oldJob, r.city, r.age ? `${r.age} ans` : null]
    .filter(Boolean)
    .join(" · ");

  return (
    <>
      <Navbar />

      <main className="relative flex-1 overflow-hidden bg-navy-950">
        {/* Background gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-navy-700/20 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-navy-600/15 blur-[100px]" />
        </div>

        {/* Lien retour */}
        <div className="relative z-10 mx-auto max-w-[860px] px-6 pt-24 md:pt-32">
          <Link
            href="/reussites"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-tight text-white/60 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} weight="bold" />
            Toutes les réussites
          </Link>
        </div>

        {/* HERO */}
        <section className="relative z-10 pt-6 pb-10">
          <div className="mx-auto max-w-[860px] px-6">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-10">
              <div className="relative shrink-0">
                <div className="relative h-40 w-40 overflow-hidden rounded-2xl border-4 border-accent-400/30 shadow-[0_0_50px_rgba(1,95,255,0.3)] sm:h-52 sm:w-52">
                  <Image
                    src={r.photo}
                    alt={r.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                {contextLine && (
                  <p className="mb-2 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400">
                    {contextLine}
                  </p>
                )}
                <p className="mb-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {r.name}
                </p>
                <h1 className="text-2xl font-bold leading-[1.15] tracking-tight text-white sm:text-3xl md:text-4xl">
                  <span className="gradient-text">{r.outcomeHeadline}</span>
                </h1>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR — optionnel, labels libres */}
        {r.stats && r.stats.length > 0 && (
          <section className="relative z-10 pb-12">
            <div className="mx-auto max-w-[860px] px-6">
              <div
                className={`grid gap-3 ${
                  r.stats.length === 2
                    ? "grid-cols-2"
                    : r.stats.length === 3
                      ? "grid-cols-3"
                      : "grid-cols-2 sm:grid-cols-4"
                }`}
              >
                {r.stats.map((s) => (
                  <div
                    key={s.label}
                    className="glass-card rounded-2xl px-4 py-4 text-center md:py-5"
                  >
                    <p className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-white/60 md:text-xs">
                      {s.label}
                    </p>
                    <p className="mt-1 text-lg font-extrabold tracking-tight text-white sm:text-xl md:text-2xl">
                      <span className="gradient-text">{s.value}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* VIDÉO(S) — placée(s) tôt pour engagement immédiat */}
        {r.videos && r.videos.length > 0 && (
          <section className="relative z-10 pb-12">
            <div className="mx-auto max-w-[860px] px-6">
              <p className="mb-5 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400">
                {r.videos.length > 1 ? "Témoignages vidéos" : "Témoignage vidéo"}
              </p>
              <div className="flex flex-col gap-6">
                {r.videos.map((v, i) => (
                  <div key={i}>
                    {v.label && (
                      <h3 className="mb-3 text-base font-bold tracking-tight text-white sm:text-lg">
                        {v.label}
                      </h3>
                    )}
                    <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.4)]">
                      <iframe
                        src={v.url}
                        title={v.label || `Témoignage vidéo de ${r.name}`}
                        className="h-full w-full"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PARCOURS — Avant Agencilab */}
        <section className="relative z-10 py-12">
          <div className="mx-auto max-w-[860px] px-6">
            <p className="mb-3 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400">
              Son parcours
            </p>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              <span className="gradient-text">{r.outcomeHeadline}</span>
            </h2>

            <h3 className="mb-4 text-lg font-bold tracking-tight text-white sm:text-xl md:text-2xl">
              Avant Agencilab
            </h3>
            <div className="mb-10 flex flex-col gap-4">
              {r.parcoursAvant.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-[1.7] tracking-tight text-white/80 md:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>

            <h3 className="mb-4 text-lg font-bold tracking-tight text-white sm:text-xl md:text-2xl">
              Aujourd&apos;hui
            </h3>
            <div className="flex flex-col gap-4">
              {r.parcoursMaintenant.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-[1.7] tracking-tight text-white/80 md:text-lg"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Q&A */}
        <section className="relative z-10 py-12">
          <div className="mx-auto max-w-[860px] px-6">
            <p className="mb-3 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-gold-400">
              L&apos;interview
            </p>
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Questions et réponses
            </h2>
            <div className="flex flex-col gap-10">
              {r.qa.map((item, i) => (
                <div key={i}>
                  <h3 className="mb-4 text-lg font-bold leading-[1.35] tracking-tight text-white sm:text-xl md:text-2xl">
                    <span className="text-gold-400">Q. </span>
                    {item.question}
                  </h3>
                  <div className="flex flex-col gap-4 border-l-2 border-accent-400/30 pl-5">
                    {item.answer.map((p, j) => (
                      <p
                        key={j}
                        className="text-base leading-[1.7] tracking-tight text-white/80 md:text-lg"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative z-10 py-16 md:py-20">
          <div className="mx-auto max-w-[680px] px-6 text-center">
            <p className="mb-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              <span className="gradient-text">Toi aussi tu peux y arriver.</span>
            </p>
            <p className="mb-7 text-base leading-[1.6] tracking-tight text-white/75 md:text-lg">
              Découvre si Agencilab est fait pour toi lors d&apos;un appel
              gratuit de 45 minutes avec un de nos conseillers.
            </p>
            <a
              href="#rejoindre"
              className="cta-button glow-gold inline-flex items-center gap-3 rounded-xl bg-gold-400 px-10 py-4 text-base font-bold tracking-tight text-navy-950 shadow-lg shadow-gold-400/30"
            >
              Réserver un appel gratuit
              <ArrowRight size={18} weight="bold" />
            </a>
          </div>
        </section>

        {/* JSON-LD : Article + QAPage pour rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(buildJsonLd(r)),
          }}
        />
      </main>

      <Footer />
      <IClosedPopup />
    </>
  );
}

function buildJsonLd(r: Reussite) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${r.name} : ${r.outcomeHeadline}`,
      datePublished: r.publishedAt,
      image: [`https://agencilab.com${r.photo}`],
      author: { "@type": "Organization", name: "Agencilab" },
      publisher: {
        "@type": "Organization",
        name: "Agencilab",
        logo: {
          "@type": "ImageObject",
          url: "https://agencilab.com/images/logo-white.png",
        },
      },
      about: {
        "@type": "Person",
        name: r.name,
        ...(r.oldJob && { jobTitle: r.oldJob }),
        ...(r.city && {
          address: { "@type": "PostalAddress", addressLocality: r.city },
        }),
      },
      mainEntityOfPage: `https://agencilab.com/reussites/${r.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "QAPage",
      mainEntity: r.qa.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer.join("\n\n"),
        },
      })),
    },
  ];
}
