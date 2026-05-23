"use client";

import { useActionState } from "react";
import { unlock, type UnlockState } from "./actions";

const initialState: UnlockState = { error: "" };

/** Écran de déverrouillage du pitch de vente. */
export default function PasswordGate() {
  const [state, formAction, pending] = useActionState(unlock, initialState);

  return (
    <div className="relative flex min-h-[100dvh] w-full items-center justify-center bg-navy-950 px-6 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(1,95,255,0.32), transparent 70%)",
        }}
      />
      <div className="relative w-full max-w-[380px]">
        <span className="mb-3 inline-block text-[0.72rem] font-bold uppercase tracking-[0.22em] text-accent-300">
          Accès closer
        </span>
        <h1 className="text-[1.6rem] font-black leading-tight tracking-tight text-white md:text-[1.9rem]">
          Pitch de vente — Agencilab
        </h1>
        <p className="mt-2.5 text-[0.92rem] leading-relaxed text-white/55">
          Support à présenter pendant l'appel. Saisis le mot de passe.
        </p>

        <form action={formAction} className="mt-7 flex flex-col gap-3">
          <input
            type="password"
            name="password"
            autoFocus
            required
            placeholder="Mot de passe"
            aria-label="Mot de passe"
            className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-[0.95rem] text-white placeholder:text-white/35 outline-none transition focus:border-accent-400/60"
          />
          {state.error && (
            <p className="text-[0.85rem] font-medium text-red-400">
              {state.error}
            </p>
          )}
          <button
            type="submit"
            disabled={pending}
            className="cta-button w-full rounded-xl bg-gold-400 px-4 py-3 text-[0.95rem] font-bold text-navy-950 disabled:opacity-50"
          >
            {pending ? "Vérification..." : "Ouvrir le pitch"}
          </button>
        </form>
      </div>
    </div>
  );
}
