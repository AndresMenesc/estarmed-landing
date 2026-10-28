"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { COMPARISONS, VISIT_STATUS } from "@/lib/sales-content";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function BeforeAfter() {
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState<"antes" | "con">("con");

  const go = (dir: -1 | 1) => {
    setStep((s) => (s + dir + COMPARISONS.length) % COMPARISONS.length);
  };

  return (
    <Section id="antes" labelledBy="antes-heading" className="bg-slate-50">
      <Reveal>
        <SectionHeading
          id="antes-heading"
          eyebrow="Comparación"
          title="Antes vs. con EstarMed"
          subtitle="Cada problema de la operación, emparejado con su módulo real."
        />
      </Reveal>

      {/* Desktop: all paired rows */}
      <ul className="mt-10 hidden list-none space-y-3 lg:block">
        {COMPARISONS.map((row, idx) => (
          <li key={row.id}>
            <Reveal delay={idx * 0.05}>
              <ComparisonRow
                before={row.before}
                after={row.after}
                id={row.id}
                index={idx}
              />
            </Reveal>
          </li>
        ))}
      </ul>

      {/* Mobile / tablet: stepper + Antes|Con toggle */}
      <div className="mt-8 lg:hidden">
        <div
          role="tablist"
          aria-label="Vista Antes o Con EstarMed"
          className="mb-4 flex justify-center gap-2"
        >
          {(["antes", "con"] as const).map((m) => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={mode === m}
              id={`antes-mode-${m}`}
              onClick={() => setMode(m)}
              className={cn(
                "rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-[0.08em] transition-all active:scale-[0.98]",
                mode === m
                  ? m === "con"
                    ? "bg-[#007DFF] text-white"
                    : "bg-slate-800 text-white"
                  : "bg-white text-slate-600 ring-1 ring-slate-200"
              )}
            >
              {m === "antes" ? "Antes" : "Con EstarMed"}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          aria-labelledby={`antes-mode-${mode}`}
          className="overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-4 shadow-sm"
        >
          <div className="mb-3 flex items-center justify-between">
            <button
              type="button"
              aria-label="Comparación anterior"
              onClick={() => go(-1)}
              className="inline-flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-700"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
              {step + 1} / {COMPARISONS.length}
            </p>
            <button
              type="button"
              aria-label="Comparación siguiente"
              onClick={() => go(1)}
              className="inline-flex size-10 items-center justify-center rounded-full bg-slate-100 text-slate-700"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>

          <div key={`${step}-${mode}`} className="reveal-fade reveal-fade-on">
            <h3
              className={cn(
                "mb-3 text-center text-sm font-bold",
                mode === "antes" ? "text-slate-500" : "text-[#007DFF]"
              )}
            >
              {mode === "antes"
                ? COMPARISONS[step].before
                : COMPARISONS[step].after}
            </h3>
            <div className="mx-auto flex max-w-xs justify-center" aria-hidden="true">
              {mode === "antes" ? (
                <BeforeCrop id={COMPARISONS[step].id} />
              ) : (
                <AfterCrop id={COMPARISONS[step].id} />
              )}
            </div>
            {mode === "antes" ? (
              <button
                type="button"
                onClick={() => setMode("con")}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#007DFF] py-3 text-xs font-black uppercase tracking-[0.08em] text-white"
              >
                Ver el fix
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            ) : null}
          </div>

          <div className="mt-4 flex justify-center gap-1.5" role="group" aria-label="Pasos">
            {COMPARISONS.map((c, i) => (
              <button
                key={c.id}
                type="button"
                aria-label={`${c.before} → ${c.after}`}
                aria-current={i === step ? "step" : undefined}
                onClick={() => {
                  setStep(i);
                  setMode("antes");
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === step ? "w-6 bg-[#007DFF]" : "w-1.5 bg-slate-200"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function ComparisonRow({
  before,
  after,
  id,
  index,
}: {
  before: string;
  after: string;
  id: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group grid grid-cols-[1fr_auto_1fr] items-stretch gap-3 rounded-[1.25rem] border border-slate-200 bg-white p-3 transition-shadow hover:shadow-lg hover:shadow-slate-200/80"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={cn(
          "flex flex-col gap-2 rounded-2xl border border-slate-100 bg-slate-50 p-3 transition-opacity",
          hovered && "opacity-60"
        )}
      >
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
          Antes · 0{index + 1}
        </p>
        <h3 className="text-sm font-bold text-slate-600">{before}</h3>
        <div aria-hidden="true">
          <BeforeCrop id={id} />
        </div>
      </div>

      <div className="flex items-center" aria-hidden="true">
        <span
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-full transition-colors",
            hovered ? "bg-[#007DFF] text-white" : "bg-slate-100 text-slate-400"
          )}
        >
          <ArrowRight className="size-4" />
        </span>
      </div>

      <div
        className={cn(
          "flex flex-col gap-2 rounded-2xl border p-3 transition-colors",
          hovered
            ? "border-[#007DFF]/30 bg-[#007DFF]/5"
            : "border-[#007DFF]/15 bg-[#007DFF]/[0.03]"
        )}
      >
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#007DFF]">
          Con EstarMed
        </p>
        <h3 className="text-sm font-bold text-[#0A1640]">{after}</h3>
        <div aria-hidden="true">
          <AfterCrop id={id} />
        </div>
      </div>
    </article>
  );
}

function BeforeCrop({ id }: { id: string }) {
  if (id === "excel") {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-2 font-mono text-[9px] leading-relaxed text-slate-500 shadow-sm">
        <div className="mb-1 grid grid-cols-4 gap-px bg-slate-200 text-center font-bold text-slate-600">
          {["A", "B", "C", "D"].map((c) => (
            <span key={c} className="bg-slate-100 py-0.5">
              {c}
            </span>
          ))}
        </div>
        <div className="space-y-0.5">
          <p>1 | Paciente? | CIS?? | —</p>
          <p className="text-red-400">2 | #REF! | WhatsApp | ???</p>
          <p>3 | copia_v7.xlsx | — | —</p>
        </div>
      </div>
    );
  }
  if (id === "whatsapp") {
    return (
      <div className="space-y-1.5 rounded-xl bg-[#e5ddd5] p-2">
        <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-[#dcf8c6] px-2 py-1.5 text-[10px] text-slate-700 shadow-sm">
          ¿Ya salió la ruta del CIS Norte?
        </div>
        <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-white px-2 py-1.5 text-[10px] text-slate-700 shadow-sm">
          Espere… reviso el Excel…
        </div>
        <div className="ml-auto max-w-[85%] rounded-lg rounded-tr-sm bg-[#dcf8c6] px-2 py-1.5 text-[10px] text-slate-500 shadow-sm">
          3 chats sin leer
        </div>
      </div>
    );
  }
  if (id === "geo") {
    return (
      <div className="flex items-center gap-2 rounded-xl border border-amber-200 bg-amber-50 p-2.5">
        <span className="flex size-9 items-center justify-center rounded-full bg-amber-200 text-lg font-bold text-amber-800">
          ?
        </span>
        <div>
          <p className="text-[10px] font-bold text-amber-900">
            Calle ejemplo # 00-00
          </p>
          <p className="text-[9px] text-amber-700">Sin punto · Comuna ???</p>
        </div>
      </div>
    );
  }
  if (id === "ruta") {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white p-3 text-center">
        <p className="text-2xl font-bold text-slate-300">?</p>
        <p className="text-[10px] font-semibold text-slate-500">
          ¿En progreso? ¿Dónde va?
        </p>
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-2 font-mono text-[9px] text-slate-500">
      <p className="font-bold text-slate-600">liquidacion_final_v3.xls</p>
      <p className="mt-1">hora real? · zona? · #REF!</p>
      <p className="text-red-400">reconstruir a mano…</p>
    </div>
  );
}

function AfterCrop({ id }: { id: string }) {
  if (id === "excel") {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <p className="text-[9px] font-black uppercase tracking-wider text-[#007DFF]">
          Planeación · CIS Norte
        </p>
        <div className="mt-1.5 space-y-1">
          {["Lun 9/12", "Mar 11/12", "Mié 8/12"].map((d) => (
            <div
              key={d}
              className="flex items-center justify-between rounded-lg bg-slate-50 px-2 py-1"
            >
              <span className="text-[10px] font-semibold text-slate-700">{d}</span>
              <span className="h-1.5 w-12 overflow-hidden rounded-full bg-slate-200">
                <span className="block h-full w-3/4 rounded-full bg-[#007DFF]" />
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (id === "whatsapp") {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <div className="mb-2 flex flex-wrap gap-1">
          {VISIT_STATUS.slice(0, 4).map((s) => (
            <span
              key={s.key}
              className="inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[8px] font-bold text-white"
              style={{ background: s.color }}
            >
              {s.label}
            </span>
          ))}
        </div>
        <div className="rounded-lg bg-[#007DFF]/10 px-2 py-1.5 text-[10px] font-semibold text-[#0A1640]">
          Chat · Madrina ↔ Conductor 1
        </div>
      </div>
    );
  }
  if (id === "geo") {
    return (
      <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
        <span className="flex size-9 items-center justify-center rounded-full bg-[#007DFF] text-white shadow">
          <MapPin className="size-4" strokeWidth={2.5} />
        </span>
        <div>
          <p className="text-[10px] font-bold text-[#0A1640]">
            Verificada · Comuna 14
          </p>
          <p className="text-[9px] text-emerald-700">Fuera de cola geo</p>
        </div>
      </div>
    );
  }
  if (id === "ruta") {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
        <div className="flex items-start justify-between gap-2">
          <p className="text-[10px] font-bold text-[#007DFF]">Profesional A</p>
          <span className="rounded bg-slate-100 px-1 font-mono text-[9px]">
            ABC123
          </span>
        </div>
        <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-3/5 rounded-full bg-[#10b981]" />
        </div>
        <p className="mt-1 text-[9px] font-semibold text-[#10b981]">
          5/9 visitas · mapa en vivo
        </p>
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
      <div className="flex items-center justify-between text-[10px] font-bold">
        <span className="text-slate-800">Ruta ABC123</span>
        <span className="text-[#007DFF]">8 h</span>
      </div>
      <p className="mt-1 text-[9px] text-slate-500">
        Inicio programado → devolución equipo
      </p>
      <p className="mt-1 text-[9px] font-semibold text-slate-600">
        Zona CIS · paquete 8 h · no DIAN
      </p>
    </div>
  );
}
