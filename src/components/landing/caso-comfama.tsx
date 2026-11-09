"use client";

import Image from "next/image";
import { RESULTS, SCALE, SERVICES } from "@/lib/sales-content";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function CasoComfama() {
  return (
    <Section
      id="caso"
      labelledBy="caso-heading"
      className="bg-[#0A1640] text-white"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            id="caso-heading"
            eyebrow="Caso Comfama"
            title="Operación real en Medellín y Antioquia."
            subtitle="Cliente principal en operación: Comfama Salud y Bienestar. Flota con Estárter Core."
            light
          />
          <ul className="mt-5 flex list-none flex-wrap gap-2">
            {SERVICES.map((s) => (
              <li key={s}>
                <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  {s}
                </span>
              </li>
            ))}
          </ul>
          <dl className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6">
            {SCALE.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  {s.label}
                </dt>
                <dd className="font-display text-xl font-bold text-[#007DFF] md:text-2xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="sr-only">Resultados del caso</h3>
            <dl className="flex flex-wrap gap-6">
              {RESULTS.slice(0, 3).map((r) => (
                <div key={r.label} className="flex flex-col-reverse">
                  <dt className="mt-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {r.label}
                  </dt>
                  <dd className="font-display text-xl font-bold text-white">
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-[11px] text-slate-500">
              Nov 2025 – jul 2026 · ver nota en resultados
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="overflow-hidden rounded-[1.6rem] border border-white/10 shadow-2xl">
            <Image
              src="/brand/cis-sede-medellin.jpg"
              alt="Sede CIS Comfama en Medellín"
              width={800}
              height={600}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover object-center sm:aspect-[4/5]"
            />
            <figcaption className="bg-white/5 px-4 py-2 text-[11px] font-semibold text-slate-400">
              CIS · Medellín
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  );
}
