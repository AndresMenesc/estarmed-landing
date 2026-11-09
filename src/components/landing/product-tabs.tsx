"use client";

import { useState } from "react";
import { PRODUCT_TABS } from "@/lib/sales-content";
import { useTabs } from "@/hooks/use-tabs";
import { useAutoAdvance } from "@/hooks/use-auto-advance";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import {
  SceneCrearRutas,
  SceneConductor,
  SceneLiquidacion,
  SceneRutaDiaria,
} from "./mockups/platform-scenes";
import { cn } from "@/lib/utils";

export function ProductTabs() {
  const { active, setActive, tabId, panelId, onTabKeyDown } = useTabs(
    PRODUCT_TABS.length
  );
  const [showMore, setShowMore] = useState(false);
  const [paused, setPaused] = useState(false);
  const progress = useAutoAdvance(PRODUCT_TABS.length, active, setActive, {
    ms: 7000,
    paused,
    rootId: "producto",
  });
  const tab = PRODUCT_TABS[active];

  return (
    <Section id="producto" labelledBy="producto-heading" className="bg-slate-50">
      <Reveal>
        <SectionHeading
          id="producto-heading"
          eyebrow="Producto"
          title="Las pantallas que usa la operación."
          subtitle="Módulos reales de la plataforma — recreaciones con datos placeholder."
        />
      </Reveal>

      <Reveal delay={0.05} className="mt-8">
        <div
          role="tablist"
          aria-label="Módulos del producto"
          className="flex flex-wrap gap-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
        >
          {PRODUCT_TABS.map((t, idx) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={tabId(idx)}
              aria-selected={active === idx}
              aria-controls={panelId(idx)}
              tabIndex={active === idx ? 0 : -1}
              onClick={() => {
                setActive(idx);
                setShowMore(false);
              }}
              onKeyDown={(e) => onTabKeyDown(e, idx)}
              className={cn(
                "rounded-full px-4 py-2.5 text-xs font-bold uppercase tracking-[0.08em] transition-all active:scale-[0.98]",
                active === idx
                  ? "bg-[#007DFF] text-white shadow-md shadow-[#007DFF]/25"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:text-[#007DFF]"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="mt-3 h-1 overflow-hidden rounded-full bg-slate-200" aria-hidden="true">
          <div
            className="h-full bg-[#007DFF] transition-[width] duration-100"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </Reveal>

      <Reveal delay={0.08} className="mt-8">
        <div
          role="tabpanel"
          id={panelId(active)}
          aria-labelledby={tabId(active)}
          className="grid items-start gap-8 rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.06)] lg:grid-cols-2 lg:p-8"
        >
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#007DFF]">
              {tab.caption}
            </p>
            <h3 className="font-display mt-2 text-2xl font-bold text-[#0A1640]">
              {tab.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {tab.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-2 text-sm font-medium text-slate-700"
                >
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-[#007DFF]"
                    aria-hidden="true"
                  />
                  {b}
                </li>
              ))}
            </ul>
            <button
              type="button"
              aria-expanded={showMore}
              onClick={() => setShowMore((v) => !v)}
              className="mt-5 text-xs font-bold uppercase tracking-wider text-[#007DFF] hover:underline"
            >
              {showMore ? "Ver menos" : "Ver más"}
            </button>
            {showMore ? (
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
                {tab.more}
              </p>
            ) : null}
          </div>

          <div
            className="relative min-h-[260px] overflow-hidden rounded-2xl bg-[#e8f2ff] p-3"
            aria-hidden="true"
          >
            {tab.id === "conductor" ? (
              <SceneConductor />
            ) : tab.id === "ruta" ? (
              <SceneRutaDiaria />
            ) : tab.id === "geo" ? (
              <GeoMock />
            ) : tab.id === "facturacion" ? (
              <SceneLiquidacion />
            ) : (
              <SceneCrearRutas />
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function GeoMock() {
  return (
    <div className="space-y-2 p-5">
      <p className="text-[10px] font-black uppercase tracking-wider text-[#007DFF]">
        Cola · Pendientes
      </p>
      {["Mañana · Alta", "Hoy · Media", "Temporal"].map((label, i) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5"
        >
          <div>
            <p className="text-xs font-bold text-slate-800">Dirección {i + 1}</p>
            <p className="text-[10px] text-slate-500">{label} · Comuna</p>
          </div>
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">
            Geo ref
          </span>
        </div>
      ))}
      <div className="w-full rounded-full bg-[#007DFF] py-2 text-center text-[10px] font-black uppercase text-white">
        Confirmar ubicación
      </div>
    </div>
  );
}

function BillingMock() {
  return (
    <div className="space-y-2 p-5">
      <p className="text-[10px] font-black uppercase tracking-wider text-[#007DFF]">
        Liquidación · Mes
      </p>
      <div className="rounded-xl border border-slate-200 bg-white p-3">
        <div className="flex justify-between text-xs font-bold">
          <span className="text-slate-800">Ruta PUO588</span>
          <span className="text-[#007DFF]">8 h</span>
        </div>
        <p className="mt-1 text-[10px] text-slate-500">
          Inicio programado → devolución equipo
        </p>
        <p className="mt-2 text-[10px] font-semibold text-slate-600">
          Zona Área Metropolitana · paquete 8 h
        </p>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-3">
        <div className="flex justify-between text-xs font-bold">
          <span className="text-slate-800">Ruta LKM332</span>
          <span className="text-[#007DFF]">6 h</span>
        </div>
        <p className="mt-1 text-[10px] text-slate-500">No es factura DIAN</p>
      </div>
    </div>
  );
}
