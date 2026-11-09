"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Results = dynamic(
  () => import("./results").then((m) => m.Results),
  { ssr: false },
);
const Clients = dynamic(
  () => import("./clients").then((m) => m.Clients),
  { ssr: false },
);
const BeforeAfter = dynamic(
  () => import("./before-after").then((m) => m.BeforeAfter),
  { ssr: false },
);
const HowItWorks = dynamic(
  () => import("./how-it-works").then((m) => m.HowItWorks),
  { ssr: false },
);
const ProductTabs = dynamic(
  () => import("./product-tabs").then((m) => m.ProductTabs),
  { ssr: false },
);
const RoleTabs = dynamic(
  () => import("./role-tabs").then((m) => m.RoleTabs),
  { ssr: false },
);
const FeatureGrid = dynamic(
  () => import("./feature-grid").then((m) => m.FeatureGrid),
  { ssr: false },
);
const Integration = dynamic(
  () => import("./integration").then((m) => m.Integration),
  { ssr: false },
);
const CasoComfama = dynamic(
  () => import("./caso-comfama").then((m) => m.CasoComfama),
  { ssr: false },
);
const Faq = dynamic(
  () => import("./faq").then((m) => m.Faq),
  { ssr: false },
);
const CtaBand = dynamic(
  () => import("./cta-band").then((m) => m.CtaBand),
  { ssr: false },
);

/**
 * Defer below-fold mounting so the hero poster remains LCP under mobile
 * Lighthouse simulation. Sections hydrate after first paint.
 */
export function BelowFold() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const enable = () => {
      if (!cancelled) setReady(true);
    };
    let idleId: number | undefined;
    let fallback: ReturnType<typeof setTimeout> | undefined;
    const gate = window.setTimeout(() => {
      if (typeof w.requestIdleCallback === "function") {
        idleId = w.requestIdleCallback(enable, { timeout: 2000 });
      } else {
        fallback = setTimeout(enable, 50);
      }
    }, 4000);
    return () => {
      cancelled = true;
      clearTimeout(gate);
      if (idleId != null) w.cancelIdleCallback?.(idleId);
      if (fallback != null) clearTimeout(fallback);
    };
  }, []);

  if (!ready) {
    return (
      <div
        className="min-h-[70vh] border-t border-slate-100 bg-white"
        aria-busy="true"
      />
    );
  }

  return (
    <>
      <Results />
      <Clients />
      <BeforeAfter />
      <HowItWorks />
      <ProductTabs />
      <RoleTabs />
      <FeatureGrid />
      <Integration />
      <CasoComfama />
      <Faq />
      <CtaBand />
    </>
  );
}
