"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { loadAnalyticsScripts } from "@/lib/analytics";

type Consent = "accepted" | "rejected" | null;

export function CookieBannerUI() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem("estarmed_cookie_consent");
      if (v === "accepted" || v === "rejected") {
        setConsent(v);
        if (v === "accepted") loadAnalyticsScripts();
      }
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  function choose(v: "accepted" | "rejected") {
    try {
      localStorage.setItem("estarmed_cookie_consent", v);
    } catch {
      /* ignore */
    }
    setConsent(v);
    if (v === "accepted") loadAnalyticsScripts();
  }

  if (!ready || consent) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[70] p-3 sm:p-4"
      role="dialog"
      aria-label="Aviso de cookies"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5">
        <p className="text-sm font-medium text-slate-600">
          Usamos cookies necesarias y, con su permiso, analíticas para mejorar
          el sitio.{" "}
          <Link
            href="/privacidad"
            className="text-[#007DFF] underline-offset-2 hover:underline"
          >
            Más información
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="inline-flex min-h-11 items-center justify-center rounded-full px-4 text-sm font-bold text-slate-600 ring-1 ring-slate-200"
          >
            Solo necesarias
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#007DFF] px-4 text-sm font-bold text-white"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
