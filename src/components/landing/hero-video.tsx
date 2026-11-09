"use client";

import { useEffect, useId, useState } from "react";
import { Play, X } from "lucide-react";
import { track } from "@/lib/analytics";

/** Client overlay: deferred loop + modal. Poster stays in the server tree. */
export function HeroVideoChrome() {
  const [modal, setModal] = useState(false);
  const [playLoop, setPlayLoop] = useState(false);
  const titleId = useId();

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    let cancelled = false;
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    const enableLoop = () => {
      if (cancelled) return;
      const narrow = window.matchMedia("(max-width: 767px)").matches;
      if (!narrow) setPlayLoop(true);
    };

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const gate = window.setTimeout(() => {
      if (typeof w.requestIdleCallback === "function") {
        idleId = w.requestIdleCallback(enableLoop, { timeout: 6000 });
      } else {
        timeoutId = setTimeout(enableLoop, 4500);
      }
    }, 3500);

    return () => {
      cancelled = true;
      clearTimeout(gate);
      if (idleId != null) w.cancelIdleCallback?.(idleId);
      if (timeoutId != null) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModal(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [modal]);

  return (
    <>
      {playLoop ? (
        <video
          className="absolute inset-0 z-[1] h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/video/poster-750.webp"
          onPlay={() => track("video_play", { source: "hero_loop" })}
        >
          <source src="/video/estarmed-hero-loop.mp4" type="video/mp4" />
        </video>
      ) : null}

      <button
        type="button"
        onClick={() => {
          setModal(true);
          track("video_play", { source: "hero_modal_open" });
        }}
        className="absolute bottom-3 right-3 z-10 inline-flex min-h-11 items-center gap-2 rounded-full bg-white px-4 text-sm font-bold text-[#0A1640] shadow-lg sm:bottom-4 sm:right-4"
      >
        <Play className="size-4 fill-current" aria-hidden="true" />
        Ver recorrido
      </button>

      {modal ? (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-900/70 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Cerrar video"
            onClick={() => setModal(false)}
          />
          <div className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl">
            <div className="flex items-center justify-between gap-3 bg-slate-900 px-4 py-3 text-white">
              <h2 id={titleId} className="text-sm font-bold">
                Recorrido EstarMed
              </h2>
              <button
                type="button"
                onClick={() => setModal(false)}
                className="inline-flex size-11 items-center justify-center rounded-full bg-white/10"
                aria-label="Cerrar"
              >
                <X className="size-5" />
              </button>
            </div>
            <video
              className="aspect-video w-full"
              controls
              autoPlay
              playsInline
              poster="/video/poster.webp"
            >
              <source
                src="/video/estarmed-platform-walkthrough.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      ) : null}
    </>
  );
}
