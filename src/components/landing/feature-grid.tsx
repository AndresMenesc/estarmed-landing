"use client";

import {
  Route,
  Map,
  Navigation,
  MessageSquare,
  Bell,
  BarChart3,
  ScrollText,
  Download,
  Users,
  type LucideIcon,
} from "lucide-react";
import { FEATURES, VISIT_STATUS } from "@/lib/sales-content";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const ICONS: LucideIcon[] = [
  Route,
  Map,
  Navigation,
  MessageSquare,
  Bell,
  BarChart3,
  ScrollText,
  Download,
  Users,
];

export function FeatureGrid() {
  return (
    <Section id="funciones" labelledBy="funciones-heading" className="bg-slate-50">
      <Reveal>
        <SectionHeading
          id="funciones-heading"
          eyebrow="Funciones clave"
          title="Más allá del día a día."
          subtitle="Mapa, chat, reportes y exportes — fuera del flujo de la ruta."
        />
      </Reveal>

      <ul className="mt-10 grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, idx) => {
          const Icon = ICONS[idx] ?? Route;
          return (
            <li key={f.title} className="h-full">
              <Reveal delay={(idx % 3) * 0.05} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-shadow hover:shadow-md hover:shadow-slate-200/70">
                  <div
                    className="border-b border-slate-100 bg-slate-50/80 px-3 py-3"
                    aria-hidden="true"
                  >
                    <FeatureCrop index={idx} />
                  </div>
                  <div className="flex flex-1 gap-3 p-4">
                    <span
                      className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#007DFF]/10 text-[#007DFF]"
                      aria-hidden="true"
                    >
                      <Icon className="size-4" strokeWidth={2.25} />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#0A1640]">
                        {f.title}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-slate-600">
                        {f.line}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

function FeatureCrop({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <div className="flex items-end justify-between gap-2">
          <div className="flex-1 space-y-1">
            {["A · 42 km", "B · 38 km", "C · 51 km"].map((r, i) => (
              <div
                key={r}
                className="flex items-center gap-2 rounded-lg bg-white px-2 py-1 ring-1 ring-slate-100"
              >
                <span
                  className={`size-1.5 rounded-full ${i === 1 ? "bg-[#10b981]" : "bg-slate-300"}`}
                />
                <span className="text-[9px] font-semibold text-slate-600">
                  {r}
                </span>
                {i === 1 ? (
                  <span className="ml-auto text-[8px] font-black uppercase text-[#10b981]">
                    Mejor
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <div className="relative size-14 shrink-0 rounded-xl bg-[#e8f2ff]">
            <span className="absolute left-2 top-3 size-2 rounded-full bg-[#007DFF]" />
            <span className="absolute right-3 top-5 size-1.5 rounded-full bg-[#10b981]" />
            <span className="absolute bottom-3 left-5 size-1.5 rounded-full bg-amber-400" />
            <svg className="absolute inset-2 opacity-60" viewBox="0 0 40 40">
              <path
                d="M6 28 Q14 10 22 18 T34 12"
                fill="none"
                stroke="#007DFF"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      );
    case 1:
      return (
        <div className="relative h-16 overflow-hidden rounded-xl bg-[#dbeafe]">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute left-4 top-3 h-px w-20 bg-slate-400/50" />
            <div className="absolute left-10 top-8 h-px w-16 bg-slate-400/50" />
            <div className="absolute bottom-4 left-6 h-px w-24 bg-slate-400/50" />
          </div>
          <div className="absolute left-1/3 top-1/2 flex -translate-y-1/2 items-center gap-1">
            <span className="size-2.5 rounded-full bg-[#007DFF] ring-2 ring-white shadow" />
            <span className="rounded bg-white px-1.5 py-0.5 text-[8px] font-bold text-[#0A1640] shadow-sm">
              ABC123
            </span>
          </div>
          <span className="absolute right-4 top-3 size-2 rounded-full bg-[#10b981] ring-2 ring-white" />
          <span className="absolute bottom-3 left-8 size-2 rounded-full bg-amber-400 ring-2 ring-white" />
        </div>
      );
    case 2:
      return (
        <div className="rounded-xl bg-white p-2 ring-1 ring-slate-100">
          <div className="mb-1 flex items-center justify-between">
            <span className="font-mono text-[9px] font-bold text-slate-700">
              XYZ789
            </span>
            <span className="text-[8px] font-semibold text-slate-400">
              08:12 → 14:40
            </span>
          </div>
          <svg viewBox="0 0 120 28" className="h-7 w-full">
            <path
              d="M2 22 C20 22 28 6 45 10 S70 24 90 8 S110 4 118 12"
              fill="none"
              stroke="#007DFF"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="2" cy="22" r="2" fill="#94a3b8" />
            <circle cx="118" cy="12" r="2" fill="#10b981" />
          </svg>
        </div>
      );
    case 3:
      return (
        <div className="space-y-1.5">
          <div className="ml-auto max-w-[75%] rounded-lg rounded-tr-sm bg-[#007DFF] px-2 py-1 text-[9px] font-semibold text-white">
            CIS Norte listo
          </div>
          <div className="max-w-[75%] rounded-lg rounded-tl-sm bg-white px-2 py-1 text-[9px] font-semibold text-slate-600 ring-1 ring-slate-100">
            Conductor 1 · en camino
          </div>
        </div>
      );
    case 4:
      return (
        <div className="flex items-center gap-2 rounded-xl bg-white p-2 ring-1 ring-slate-100">
          <span className="relative flex size-8 items-center justify-center rounded-full bg-[#007DFF]/15 text-[#007DFF]">
            <Bell className="size-3.5" />
            <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-[#ef4444] ring-2 ring-white" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[9px] font-bold text-[#0A1640]">
              Llegada · visita 4
            </p>
            <p className="text-[8px] text-slate-500">Push en vivo · hace 12 s</p>
          </div>
        </div>
      );
    case 5:
      return (
        <div className="flex items-end gap-1 rounded-xl bg-white p-2 ring-1 ring-slate-100">
          {[40, 55, 48, 72, 68, 85, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-[#007DFF]/25"
              style={{ height: `${h * 0.28}px` }}
            >
              <div
                className="w-full rounded-t bg-[#007DFF]"
                style={{ height: `${h * 0.18}px`, marginTop: "auto" }}
              />
            </div>
          ))}
          <span className="ml-1 self-center text-[8px] font-black uppercase tracking-wider text-[#007DFF]">
            6 p. m.
          </span>
        </div>
      );
    case 6:
      return (
        <div className="space-y-1 rounded-xl bg-white p-2 font-mono text-[8px] ring-1 ring-slate-100">
          <p className="text-slate-400">14:02 · ruta.edit</p>
          <p className="text-slate-600">14:05 · visita.completada</p>
          <p className="font-bold text-[#007DFF]">14:08 · chat.mensaje</p>
        </div>
      );
    case 7:
      return (
        <div className="flex gap-2">
          {["PDF", "CSV", "XLS"].map((fmt) => (
            <div
              key={fmt}
              className="flex flex-1 flex-col items-center gap-1 rounded-xl bg-white py-2 ring-1 ring-slate-100"
            >
              <Download className="size-3 text-[#007DFF]" />
              <span className="text-[8px] font-black uppercase tracking-wider text-slate-600">
                {fmt}
              </span>
            </div>
          ))}
        </div>
      );
    default:
      return (
        <div className="flex gap-1.5 overflow-hidden">
          {VISIT_STATUS.slice(0, 3).map((s) => (
            <div
              key={s.key}
              className="min-w-0 flex-1 rounded-lg bg-white px-1.5 py-1.5 ring-1 ring-slate-100"
            >
              <p className="truncate text-[8px] font-bold text-slate-700">
                Paciente
              </p>
              <span
                className="mt-0.5 inline-block rounded px-1 text-[7px] font-bold text-white"
                style={{ background: s.color }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      );
  }
}
