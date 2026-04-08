import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ReviewsMarquee from "@/components/ReviewsMarquee";
import Problem from "@/components/Problem";
import IncomeComparison from "@/components/IncomeComparison";
import Solution from "@/components/Solution";
import MarketDemand from "@/components/MarketDemand";
import BricksMethod from "@/components/BricksMethod";
import Method from "@/components/Method";
import Comparison from "@/components/Comparison";
import Presentiel from "@/components/Presentiel";
import FinalCTA from "@/components/FinalCTA";
import VideoWall from "@/components/VideoWall";
import Testimonials from "@/components/Testimonials";
import Founder from "@/components/Founder";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import SocialNotif from "@/components/SocialNotif";
import CookieBanner from "@/components/CookieBanner";
import IClosedPopup from "@/components/IClosedPopup";
import ExitPopup from "@/components/ExitPopup";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ReviewsMarquee />
        <Problem />
        <IncomeComparison />
        <Solution />
        <MarketDemand />
        <BricksMethod />
        <Founder />
        <Method />
        <Comparison />
        <Presentiel />
        <FinalCTA />
        {/* <VideoWall /> */}
        <Testimonials />
        <FAQ />
        {/* CTA final en bas */}
        <section className="relative py-20 lg:py-28 overflow-hidden" id="cta-final">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-400/5 blur-[120px]" />
          </div>
          <div className="relative z-10 mx-auto w-full px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-5xl">
              Découvre si Agencilab est fait pour toi
              <br />
              <span className="gradient-text">lors d&apos;un appel gratuit.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed tracking-tight text-white/50">
              Appel de 45 min, 100% gratuit, sans engagement.
            </p>
            <a
              href="#rejoindre"
              className="cta-button glow-gold mt-10 inline-flex items-center gap-3 rounded-xl bg-gold-400 px-10 py-5 text-lg font-bold tracking-tight text-navy-950 sm:px-14 sm:py-6 sm:text-xl"
            >
              Réserver mon appel gratuit
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 text-sm text-white/30 sm:flex-row sm:gap-6">
              <span>100% gratuit</span>
              <span className="hidden sm:inline">·</span>
              <span>45 minutes avec un conseiller</span>
              <span className="hidden sm:inline">·</span>
              <span>Sans engagement</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
      <SocialNotif />
      <CookieBanner />
      <IClosedPopup />
      <ExitPopup />
    </>
  );
}
