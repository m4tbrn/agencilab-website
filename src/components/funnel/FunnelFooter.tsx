import Image from "next/image";

export default function FunnelFooter() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center justify-between gap-4 px-6 text-[0.8125rem] text-white/30 md:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src="/images/logo-white.png"
            alt="Agencilab"
            width={100}
            height={26}
            className="h-5 w-auto opacity-50"
          />
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <a
            href="/politique-de-confidentialite"
            className="transition-colors hover:text-white/60"
          >
            Politique de confidentialité
          </a>
          <a
            href="/mentions-legales"
            className="transition-colors hover:text-white/60"
          >
            Mentions légales
          </a>
        </nav>
        <p className="text-white/20">&copy; {new Date().getFullYear()} Agencilab</p>
      </div>
    </footer>
  );
}
