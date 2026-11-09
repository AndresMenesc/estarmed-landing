"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import Image from "next/image";
import {
  Route,
  MapPin,
  Map,
  Navigation,
  MessageSquare,
  Camera,
  Receipt,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { FEATURES, VISIT_STATUS } from "@/lib/sales-content";
import { cn } from "@/lib/utils";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const ICONS: LucideIcon[] = [
  Route,
  MapPin,
  Map,
  Navigation,
  MessageSquare,
  Camera,
  Receipt,
  BarChart3,
];

export function FeatureGrid() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ x: number; active: number } | null>(null);

  const select = useCallback((idx: number) => {
    setActive((prev) => {
      const next = Math.max(0, Math.min(FEATURES.length - 1, idx));
      return next === prev ? prev : next;
    });
  }, []);

  useEffect(() => {
    const el = trackRef.current?.querySelector<HTMLElement>(
      `[data-feature-idx="${active}"]`
    );
    el?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  const onPointerDown = (e: ReactPointerEvent) => {
    if (e.pointerType === "mouse") return;
    drag.current = { x: e.clientX, active };
  };

  const onPointerUp = (e: ReactPointerEvent) => {
    if (!drag.current || e.pointerType === "mouse") return;
    const dx = e.clientX - drag.current.x;
    const start = drag.current.active;
    drag.current = null;
    if (Math.abs(dx) < 40) return;
    select(start + (dx < 0 ? 1 : -1));
  };

  return (
    <Section id="funciones" labelledBy="funciones-heading" className="bg-slate-50">
      <Reveal>
        <SectionHeading
          id="funciones-heading"
          align="center"
          eyebrow="Funciones clave"
          title="Más allá del día a día."
          subtitle="Mapa, chat, reportes y cierre — pantallas reales de la operación."
        />
      </Reveal>

      <div
        ref={trackRef}
        role="listbox"
        aria-label="Funciones clave"
        aria-activedescendant={`feature-card-${FEATURES[active].id}`}
        className="mt-10 flex h-[26rem] gap-2.5 overflow-x-auto overscroll-x-contain scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] touch-pan-y sm:h-[28rem] md:h-[30rem] lg:overflow-x-auto [&::-webkit-scrollbar]:hidden"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          drag.current = null;
        }}
      >
        {FEATURES.map((f, idx) => {
          const Icon = ICONS[idx] ?? Route;
          const open = active === idx;
          return (
            <button
              key={f.id}
              type="button"
              role="option"
              id={`feature-card-${f.id}`}
              data-feature-idx={idx}
              aria-selected={open}
              aria-label={f.title}
              onClick={() => select(idx)}
              onMouseEnter={() => {
                if (window.matchMedia("(hover: hover) and (min-width: 768px)").matches) {
                  select(idx);
                }
              }}
              className={cn(
                "group relative h-full shrink-0 overflow-hidden rounded-2xl text-left outline-none transition-[width,flex-grow,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:ring-2 focus-visible:ring-[#007DFF] focus-visible:ring-offset-2",
                open
                  ? "w-[min(22rem,78vw)] flex-none shadow-[0_20px_50px_-18px_rgba(10,22,64,0.55)] md:w-auto md:min-w-[18rem] md:max-w-[26rem] md:flex-[3.5]"
                  : "w-[4.5rem] flex-none shadow-[0_12px_40px_-16px_rgba(10,22,64,0.45)] md:w-20"
              )}
            >
              {/* Solid dark base — always present so collapsed never shows UI text */}
              <div
                className="absolute inset-0 bg-[#0A1640]"
                aria-hidden="true"
              />
              {/* Soft abstract glow (no text) on collapsed strips */}
              {!open ? (
                <div
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(0,125,255,0.35),transparent_55%),radial-gradient(ellipse_at_70%_80%,rgba(61,155,255,0.2),transparent_50%)]"
                  aria-hidden="true"
                />
              ) : null}

              {/* UI / screenshot only when open */}
              {open ? (
                <div className="absolute inset-0" aria-hidden="true">
                  <FeatureBackdrop kind={f.bg} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071124] via-[#0A1640]/70 to-[#0A1640]/25" />
                </div>
              ) : (
                /* Full opaque dark veil — belt-and-suspenders against any bleed */
                <div
                  className="absolute inset-0 bg-[#0A1640]/90"
                  aria-hidden="true"
                />
              )}

              {/* Icon: centered when collapsed, top-left when open */}
              <span
                className={cn(
                  "absolute z-10 flex items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm transition-all duration-500",
                  open
                    ? "left-5 top-5 size-11 md:left-6 md:top-6"
                    : "left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2"
                )}
                aria-hidden="true"
              >
                <Icon className="size-5" strokeWidth={2.25} />
              </span>

              {/* Copy only on open card */}
              <div
                className={cn(
                  "absolute inset-x-0 bottom-0 z-10 overflow-hidden p-5 transition-all duration-500 md:p-6",
                  open
                    ? "translate-y-0 opacity-100 delay-75"
                    : "pointer-events-none invisible translate-y-4 opacity-0"
                )}
              >
                <h3 className="truncate font-display text-xl font-bold tracking-tight text-white md:text-2xl">
                  {f.title}
                </h3>
                <p className="mt-2 line-clamp-3 max-w-sm text-pretty text-sm font-medium leading-relaxed text-white/85 [overflow-wrap:normal] [word-break:normal] md:text-[15px]">
                  {f.line}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div
        className="mt-5 flex justify-center gap-1.5 md:hidden"
        role="tablist"
        aria-label="Seleccionar función"
      >
        {FEATURES.map((f, idx) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={active === idx}
            aria-label={f.title}
            onClick={() => select(idx)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              active === idx ? "w-6 bg-[#007DFF]" : "w-1.5 bg-slate-300"
            )}
          />
        ))}
      </div>
    </Section>
  );
}

function FeatureBackdrop({
  kind,
}: {
  kind: (typeof FEATURES)[number]["bg"];
}) {
  if (kind === "ruta") {
    return (
      <Image
        src="/brand/platform-ruta-diaria-web.jpg"
        alt=""
        fill
        sizes="(max-width: 768px) 80vw, 26rem"
        className="object-cover object-left-top"
        aria-hidden
        priority={false}
      />
    );
  }
  if (kind === "mapa" || kind === "geo") {
    return (
      <Image
        src="/brand/platform-entregas-mapa-web.jpg"
        alt=""
        fill
        sizes="(max-width: 768px) 80vw, 26rem"
        className={cn(
          "object-cover",
          kind === "geo" ? "object-right" : "object-center"
        )}
        aria-hidden
      />
    );
  }

  return (
    <div className="absolute inset-0 bg-[#0c1830]" aria-hidden="true">
      <div className="absolute inset-0 origin-top-left scale-[1.05] p-4">
        <UiCrop kind={kind} />
      </div>
    </div>
  );
}

function UiCrop({ kind }: { kind: (typeof FEATURES)[number]["bg"] }) {
  switch (kind) {
    case "gps":
      return (
        <div className="h-full rounded-xl bg-[#dbeafe] p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[10px] font-bold text-slate-700">
              XYZ789
            </span>
            <span className="text-[9px] font-semibold text-slate-500">
              08:12 → 14:40
            </span>
          </div>
          <svg viewBox="0 0 200 120" className="h-[70%] w-full">
            <path
              d="M8 90 C40 90 50 30 80 40 S120 100 150 35 S180 20 192 45"
              fill="none"
              stroke="#007DFF"
              strokeWidth="3"
              strokeLinecap="round"
              className="route-line"
            />
            <circle cx="8" cy="90" r="4" fill="#94a3b8" />
            <circle cx="192" cy="45" r="4" fill="#10b981" />
          </svg>
        </div>
      );
    case "chat":
      return (
        <div className="flex h-full flex-col justify-end gap-2 rounded-xl bg-slate-100/90 p-3">
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-[#007DFF] px-3 py-2 text-[11px] font-semibold text-white">
            CIS Norte listo
          </div>
          <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[11px] font-semibold text-slate-600 shadow-sm">
            Conductor 1 · en camino
          </div>
          <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-[#007DFF] px-3 py-2 text-[11px] font-semibold text-white">
            Visita 4 confirmada
          </div>
        </div>
      );
    case "soportes":
      return (
        <div className="grid h-full grid-rows-[1fr_auto] gap-2 rounded-xl bg-white/95 p-3">
          <div className="flex items-center justify-center rounded-xl bg-slate-100">
            <Camera className="size-10 text-[#007DFF]/70" />
          </div>
          <div className="rounded-lg bg-emerald-50 px-3 py-2 text-[11px] font-bold text-emerald-700">
            Foto de cierre · CIS Norte ✓
          </div>
        </div>
      );
    case "liquidacion":
      return (
        <div className="space-y-2 rounded-xl bg-white/95 p-3">
          <p className="text-[10px] font-black uppercase tracking-wider text-[#007DFF]">
            Liquidación · Soportes
          </p>
          {[
            { route: "ABC123", h: "8 h" },
            { route: "XYZ789", h: "6 h" },
          ].map((r) => (
            <div
              key={r.route}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2.5"
            >
              <span className="text-xs font-bold text-slate-800">
                Ruta {r.route}
              </span>
              <span className="text-sm font-bold text-[#007DFF]">{r.h}</span>
            </div>
          ))}
          <div className="flex flex-wrap gap-1 pt-1">
            {VISIT_STATUS.slice(0, 3).map((s) => (
              <span
                key={s.key}
                className="rounded-full px-2 py-0.5 text-[8px] font-bold text-white"
                style={{ background: s.color }}
              >
                {s.label}
              </span>
            ))}
          </div>
        </div>
      );
    case "reportes":
      return (
        <div className="flex h-full items-end gap-1.5 rounded-xl bg-white/95 p-4">
          {[40, 55, 48, 72, 68, 85, 90].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-[#007DFF]/25"
              style={{ height: `${h}%` }}
            >
              <div
                className="w-full rounded-t-md bg-[#007DFF]"
                style={{ height: "70%" }}
              />
            </div>
          ))}
          <span className="mb-1 ml-1 text-[9px] font-black uppercase tracking-wider text-[#007DFF]">
            6 p. m.
          </span>
        </div>
      );
    default:
      return (
        <div className="h-full rounded-xl bg-gradient-to-br from-[#007DFF]/40 to-[#0A1640]" />
      );
  }
}
