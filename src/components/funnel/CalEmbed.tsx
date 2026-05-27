"use client";

import { useEffect } from "react";

/**
 * CalEmbed · embed Cal.com inline (namespaced).
 * Props :
 *   - calLink : ex "team/agencilab/onboarding"
 *   - namespace : ex "onboarding" ou "onboarding-mentorat"
 */

type CalApi = (...args: unknown[]) => void;

interface CalWindow {
  Cal?: CalApi & {
    ns?: Record<string, CalApi>;
    loaded?: boolean;
    q?: unknown[];
  };
}

export default function CalEmbed({
  calLink,
  namespace,
  height = "100vh",
}: {
  calLink: string;
  namespace: string;
  /** Hauteur CSS du calendrier · ex "100vh", "900px", "85vh" */
  height?: string;
}) {
  useEffect(() => {
    const w = window as unknown as CalWindow;
    if (!w.Cal) {
      const init = function (C: unknown, A: string, L: string) {
        const win = C as CalWindow & { document: Document };
        const p = function (a: { q: unknown[] }, ar: IArguments) {
          a.q.push(ar);
        };
        const d = win.document;
        const cal: CalApi & {
          ns?: Record<string, CalApi>;
          loaded?: boolean;
          q?: unknown[];
        } = (function () {
          const fn: CalApi & {
            ns?: Record<string, CalApi>;
            loaded?: boolean;
            q?: unknown[];
          } = function (...args: unknown[]) {
            const ar = args as unknown as IArguments;
            if (!fn.loaded) {
              fn.ns = {};
              fn.q = fn.q || [];
              const s = d.head.appendChild(
                d.createElement("script"),
              ) as HTMLScriptElement;
              s.src = A;
              fn.loaded = true;
            }
            if (ar[0] === L) {
              const api: CalApi & { q?: unknown[] } = function (
                ...inner: unknown[]
              ) {
                p(
                  api as unknown as { q: unknown[] },
                  inner as unknown as IArguments,
                );
              };
              api.q = api.q || [];
              const ns = ar[1];
              if (typeof ns === "string") {
                fn.ns = fn.ns || {};
                fn.ns[ns] = fn.ns[ns] || api;
                p(fn.ns[ns] as unknown as { q: unknown[] }, ar);
                p(fn as unknown as { q: unknown[] }, [
                  "initNamespace",
                  ns,
                ] as unknown as IArguments);
              } else {
                p(fn as unknown as { q: unknown[] }, ar);
              }
              return;
            }
            p(fn as unknown as { q: unknown[] }, ar);
          };
          return fn;
        })();
        win.Cal = cal;
      };
      init(window, "https://app.cal.com/embed/embed.js", "init");
    }

    const Cal = (window as unknown as CalWindow).Cal!;
    Cal("init", namespace, { origin: "https://app.cal.com" });
    Cal.ns![namespace]("inline", {
      elementOrSelector: `#cal-embed-${namespace}`,
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink,
    });
    Cal.ns![namespace]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, [calLink, namespace]);

  return (
    <div
      id={`cal-embed-${namespace}`}
      style={{ width: "100%", height, minHeight: 600, overflow: "auto" }}
    />
  );
}
