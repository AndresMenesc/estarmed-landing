"use client";

import { useEffect, useRef, useState } from "react";
import { STAGES, VISIT_STATUS } from "@/lib/sales-content";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const idx = Number((visible.target as HTMLElement).dataset.idx);
        if (!Number.isNaN(idx)) setActive(idx);
      },
      { rootMargin: "-35% 0px -40% 0px", threshold: [0.2, 0.5, 0.8] }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <Section id="como" labelledBy="como-heading" className="bg-white">
      <Reveal>
        <SectionHeading
          id="como-heading"
          eyebrow="Cómo funciona"
          title="Cuatro etapas. Una operación."
          subtitle="De la agenda al cierre con datos reales de campo."
        />
      </Reveal>

      <ol className="mt-10 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STAGES.map((step, idx) => (
          <li
            key={step.id}
            className="h-full"
            data-idx={idx}
            ref={(el) => {
              refs.current[idx] = el;
            }}
          >
            <Reveal delay={idx * 0.06} className="h-full">
              <article
                className={cn(
                  "flex h-full flex-col rounded-3xl border p-5 transition-all duration-500",
                  active === idx
                    ? "border-[#007DFF]/40 bg-[#007DFF]/5 shadow-md shadow-[#007DFF]/10 ring-1 ring-[#007DFF]/20"
                    : "border-slate-200 bg-slate-50 opacity-80"
                )}
              >
                <div
                  className="mb-4 aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"
                  aria-hidden="true"
                >
                  <StepCrop id={step.id} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#007DFF]">
                  0{idx + 1}
                </p>
                <h3 className="font-display mt-1 text-xl font-bold text-[#0A1640]">
                  {step.verb}
                </h3>
                <p className="mt-1 text-sm font-medium text-slate-600">
                  {step.line}
                </p>
                <ul className="mt-4 space-y-2 border-t border-slate-200/80 pt-3">
                  {step.caps.map((c) => (
                    <li
                      key={c}
                      className="flex gap-2 text-xs font-medium leading-snug text-slate-700"
                    >
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#007DFF]"
                        aria-hidden="true"
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal delay={0.1} className="mt-8">
        <h3 className="sr-only">Estados de visita</h3>
        <ul className="flex list-none flex-wrap items-center gap-2">
          <li className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Estados de visita
          </li>
          {VISIT_STATUS.map((s) => (
            <li key={s.key}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-700">
                <span
                  className="size-2 rounded-full"
                  style={{ background: s.color }}
                  aria-hidden="true"
                />
                {s.label}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

function StepCrop({ id }: { id: string }) {
  if (id === "planear") {
    return (
      <div className="space-y-1.5">
        <div className="h-2 w-2/3 rounded bg-[#007DFF]/30" />
        {[9, 11, 8].map((n, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-lg bg-slate-50 px-2 py-1.5"
          >
            <span className="size-2 rounded-full bg-[#007DFF]" />
            <span className="h-1.5 flex-1 rounded bg-slate-200" />
            <span className="text-[9px] font-bold text-slate-500">{n}/12</span>
          </div>
        ))}
        <p className="pt-1 text-[9px] font-semibold text-slate-400">
          Planeación mensual · CIS
        </p>
      </div>
    );
  }
  if (id === "despachar") {
    return (
      <div className="space-y-2">
        <div className="rounded-lg border border-slate-100 bg-slate-50 p-2">
          <p className="text-[10px] font-bold text-[#007DFF]">Nueva ruta</p>
          <p className="mt-1 text-[9px] text-slate-500">Conductor · Placa · CIS</p>
          <p className="text-[9px] text-slate-500">San Ignacio → CIS inicio</p>
        </div>
        <div className="rounded-full bg-[#007DFF] py-1.5 text-center text-[9px] font-black uppercase text-white">
          Publicar a Estárter
        </div>
      </div>
    );
  }
  if (id === "seguir") {
    return (
      <div className="relative h-full min-h-[100px] rounded-lg bg-[#e8eef5]">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg,#cbd5e1 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 rounded-full bg-white px-2 py-1 text-[9px] font-bold shadow">
          En ruta
        </div>
        <div className="absolute bottom-2 left-2 right-2 rounded-lg bg-white p-1.5 shadow">
          <div className="flex gap-1">
            <span className="size-2 rounded-full bg-[#eab308]" />
            <span className="h-1.5 flex-1 rounded bg-slate-200" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="space-y-2">
      <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-2">
        <p className="text-[9px] font-bold text-emerald-700">Foto de cierre ✓</p>
        <p className="text-[9px] text-slate-500">Devolución · San Ignacio</p>
      </div>
      <div className="rounded-lg bg-slate-50 p-2">
        <p className="text-[9px] font-bold text-slate-700">Liquidación 8 h</p>
        <p className="text-[9px] text-slate-500">Zona · CIS facturación</p>
      </div>
    </div>
  );
}
