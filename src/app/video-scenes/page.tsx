"use client";

import { useEffect, useState } from "react";
import {
  SceneConductor,
  SceneCrearRutas,
  SceneEntregasMapa,
  SceneLiquidacion,
  SceneMapaDia,
  SceneRutaDiaria,
} from "@/components/landing/mockups/platform-scenes";

const SCENES = [
  { id: "crear", title: "Programar y crear rutas", dur: 7000, node: <SceneCrearRutas /> },
  { id: "mapa", title: "Mapa del día en vivo", dur: 7000, node: <SceneMapaDia /> },
  { id: "entregas", title: "Entregas y mensajeros", dur: 6000, node: <SceneEntregasMapa /> },
  { id: "ruta", title: "Ruta Diaria", dur: 7000, node: <SceneRutaDiaria /> },
  { id: "conductor", title: "Vista Conductor", dur: 6000, node: <SceneConductor /> },
  { id: "cierre", title: "Estados, soportes y liquidación", dur: 7000, node: <SceneLiquidacion /> },
] as const;

/** Headless recording surface — not linked in nav. */
export default function VideoScenesPage() {
  const [i, setI] = useState(0);
  const [progress, setProgress] = useState(0);
  const scene = SCENES[i];

  useEffect(() => {
    setProgress(0);
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / scene.dur);
      setProgress(p);
      if (p < 1) raf = requestAnimationFrame(tick);
      else setI((v) => (v + 1) % SCENES.length);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [i, scene.dur]);

  return (
    <div
      id="video-stage"
      className="flex min-h-screen flex-col bg-[#0A1640] text-white"
      data-scene={scene.id}
      data-ready="1"
    >
      <div className="flex items-center justify-between px-8 py-5">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-[#7eb6ff]">
          EstarMed
        </p>
        <p className="text-sm font-semibold text-slate-300">
          {i + 1} / {SCENES.length}
        </p>
      </div>
      <div className="flex flex-1 flex-col justify-center px-8 pb-12">
        <h1 className="font-display mb-6 text-3xl font-bold tracking-tight md:text-4xl">
          {scene.title}
        </h1>
        <div className="mx-auto w-full max-w-4xl">{scene.node}</div>
      </div>
      <div className="h-1.5 w-full bg-white/10">
        <div
          className="h-full bg-[#007DFF] transition-[width] duration-100 ease-linear"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
}
