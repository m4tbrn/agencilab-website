import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo-white.png"
              alt="Agencilab"
              width={120}
              height={30}
              className="h-6 w-auto opacity-50"
            />
          </div>
          <div className="flex items-center gap-6 text-sm text-white/30">
            <a
              href="#"
              className="hover:text-white/60 transition-colors tracking-tight"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="hover:text-white/60 transition-colors tracking-tight"
            >
              Politique de confidentialité
            </a>
          </div>
          <p className="text-xs text-white/20 tracking-tight">
            &copy; {new Date().getFullYear()} Agencilab. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
