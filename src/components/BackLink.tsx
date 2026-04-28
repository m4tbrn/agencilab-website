"use client";

export default function BackLink({
  className = "",
  showLabel = true,
}: {
  className?: string;
  showLabel?: boolean;
}) {
  const handleBack = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      // Prefer browser history if there's a previous page from the same origin
      const ref = document.referrer;
      const sameOrigin = ref && (() => {
        try {
          return new URL(ref).origin === window.location.origin;
        } catch {
          return false;
        }
      })();

      if (window.history.length > 1 && sameOrigin) {
        window.history.back();
      } else {
        window.location.href = "/";
      }
    }
  };

  return (
    <a
      href="/"
      onClick={handleBack}
      className={
        className ||
        "inline-flex items-center gap-2 text-sm text-accent-400 hover:underline"
      }
    >
      ← {showLabel ? "Retour" : "Retour"}
    </a>
  );
}
