"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const CookieBannerUI = dynamic(
  () => import("./cookie-banner-ui").then((m) => m.CookieBannerUI),
  { ssr: false },
);

/** Defer cookie UI until after LCP. */
export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setShow(true), 4000);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return <CookieBannerUI />;
}
