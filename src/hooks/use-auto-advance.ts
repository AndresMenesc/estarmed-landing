"use client";

import { useEffect, useState } from "react";

/** Auto-advance index while section is in view; pauses on reduced motion or hover. */
export function useAutoAdvance(
  count: number,
  active: number,
  setActive: (n: number | ((v: number) => number)) => void,
  opts: { ms?: number; paused?: boolean; rootId?: string } = {}
) {
  const { ms = 6000, paused = false, rootId } = opts;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (paused) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let visible = !rootId;
    let raf = 0;
    let start = performance.now();

    const root = rootId ? document.getElementById(rootId) : null;
    const io =
      root &&
      new IntersectionObserver(
        ([e]) => {
          visible = e.isIntersecting;
          if (visible) start = performance.now();
        },
        { threshold: 0.35 }
      );
    if (root && io) io.observe(root);

    const tick = (t: number) => {
      if (!visible) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const p = Math.min(1, (t - start) / ms);
      setProgress(p);
      if (p >= 1) {
        setActive((v) => (typeof v === "number" ? (v + 1) % count : 0));
        start = t;
        setProgress(0);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io?.disconnect();
    };
  }, [count, ms, paused, rootId, setActive, active]);

  return progress;
}
