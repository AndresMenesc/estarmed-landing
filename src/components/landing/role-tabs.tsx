"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CalendarCog,
  Receipt,
  Bot,
  Building2,
  MapPinned,
  Ban,
  Smartphone,
  Camera,
  KeyRound,
  Eye,
  Lock,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { ROLES } from "@/lib/sales-content";
import { useTabs } from "@/hooks/use-tabs";
import { useAutoAdvance } from "@/hooks/use-auto-advance";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { ConductorPhone } from "./mockups/conductor-phone";
import {
  SceneCrearRutas,
  SceneRutaDiaria,
} from "./mockups/platform-scenes";
import { cn } from "@/lib/utils";

const ROLE_ICONS: Record<string, LucideIcon[]> = {
  admin: [CalendarCog, Receipt, Bot],
  madrina: [Building2, MapPinned, Ban],
  conductor: [Smartphone, Camera, KeyRound],
  lectura: [Eye, Lock, Sparkles],
};

export function RoleTabs() {
  const { active, setActive, tabId, panelId, onTabKeyDown } = useTabs(
    ROLES.length
  );
  const [paused, setPaused] = useState(false);
  const progress = useAutoAdvance(ROLES.length, active, setActive, {
    ms: 8000,
    paused,
    rootId: "roles",
  });
  const role = ROLES[active];
  const icons = ROLE_ICONS[role.id] ?? [Eye, Lock, Sparkles];

  return (
    <Section id="roles" labelledBy="roles-heading" className="bg-white">
      <Reveal>
        <SectionHeading
          id="roles-heading"
          eyebrow="Roles"
          title="Quién entra a la plataforma."
          subtitle="Cuatro roles reales. Sin registro público: las cuentas las crea un administrador."
        />
      </Reveal>

      <Reveal delay={0.05} className="mt-8">
        <div
          role="tablist"
          aria-label="Roles de la plataforma"
          className="flex flex-wrap gap-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
        >
          {ROLES.map((r, idx) => (
            <button
              key={r.id}
              type="button"
              role="tab"
              id={tabId(idx)}
              aria-selected={active === idx}
              aria-controls={panelId(idx)}
              tabIndex={active === idx ? 0 : -1}
              onClick={() => setActive(idx)}
              onKeyDown={(e) => onTabKeyDown(e, idx)}
              className={cn(
                "rounded-full px-4 py-2.5 text-xs font-black uppercase tracking-[0.08em] transition-all active:scale-[0.98]",
                active === idx
                  ? "bg-[#007DFF] text-white shadow-md shadow-[#007DFF]/25"
                  : "bg-slate-50 text-slate-600 ring-1 ring-slate-200 hover:text-[#007DFF]"
              )}
            >
              {r.label}
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
            className="grid items-center gap-8 rounded-[1.6rem] border border-slate-200 bg-slate-50 p-5 md:grid-cols-2 md:p-8"
          >
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#007DFF]">
              {role.caption}
            </p>
            <h3 className="font-display mt-2 text-2xl font-bold text-[#0A1640]">
              {role.label}
            </h3>
            <ul className="mt-5 space-y-2.5">
              {role.bullets.map((b, i) => {
                const Icon = icons[i] ?? Eye;
                return (
                  <li
                    key={b}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm"
                  >
                    <span
                      className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#007DFF]/10 text-[#007DFF]"
                      aria-hidden="true"
                    >
                      <Icon className="size-4" strokeWidth={2.25} />
                    </span>
                    <span className="pt-1.5 text-sm font-medium text-slate-700">
                      {b}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className="relative flex min-h-[240px] items-center justify-center overflow-hidden rounded-2xl bg-[#e8f2ff]"
            aria-hidden="true"
          >
            {role.id === "conductor" ? (
              <ConductorPhone />
            ) : role.id === "lectura" ? (
              <div className="p-6 text-center">
                <div className="mx-auto mb-4 inline-flex size-14 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
                  <Eye className="size-6 text-[#007DFF]" />
                </div>
                <Image
                  src="/brand/estarmed-logo.png"
                  alt=""
                  width={140}
                  height={32}
                  className="mx-auto h-8 w-auto opacity-80"
                />
                <p className="mt-4 text-sm font-semibold text-slate-600">
                  Solo lectura · sin escrituras
                </p>
                <div className="mt-3 flex justify-center gap-1.5">
                  <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[9px] font-bold text-slate-500 line-through">
                    Automatizaciones
                  </span>
                  <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[9px] font-bold text-slate-500 line-through">
                    Asistente IA
                  </span>
                </div>
              </div>
            ) : role.id === "madrina" ? (
              <div className="w-full max-w-xs space-y-2 p-4">
                <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                  <p className="text-[9px] font-black uppercase tracking-wider text-[#007DFF]">
                    CIS asignados
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {["CIS Norte", "CIS Sur"].map((c) => (
                      <span
                        key={c}
                        className="rounded-full bg-[#007DFF]/10 px-2.5 py-1 text-[10px] font-bold text-[#0A1640]"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-3 shadow-sm ring-1 ring-slate-100">
                  <div className="flex items-center gap-2">
                    <MapPinned className="size-4 text-[#10b981]" />
                    <span className="text-[10px] font-bold text-slate-700">
                      Mapa · estados · chat
                    </span>
                  </div>
                  <p className="mt-2 flex items-center gap-1.5 text-[9px] font-semibold text-rose-500">
                    <Ban className="size-3" /> Sin crear ni editar rutas
                  </p>
                </div>
              </div>
              ) : role.id === "admin" ? (
                <div className="w-full p-3">
                  <SceneCrearRutas />
                </div>
              ) : (
                <div className="w-full p-3">
                  <SceneRutaDiaria />
                </div>
              )}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
