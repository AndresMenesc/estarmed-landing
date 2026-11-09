"use client";

import Image from "next/image";
import {
  LayoutDashboard,
  MessageSquare,
  Bot,
  Route,
  CalendarDays,
  Car,
  Users,
  Receipt,
  FileText,
  Activity,
  Workflow,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SIDEBAR = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Chats", icon: MessageSquare, badge: "2" },
  { label: "Asistente IA", icon: Bot },
  { label: "Programación de Rutas", icon: CalendarDays },
  { label: "Ruta Diaria", icon: Route, active: true },
  { label: "Vista Conductor", icon: Car },
  { label: "Gestión de Personas", icon: Users },
  { label: "Facturación", icon: Receipt },
  { label: "Reportes", icon: FileText },
  { label: "Analítica", icon: Activity },
  { label: "Día interactivo", icon: CalendarDays },
  { label: "Automatizaciones", icon: Workflow },
  { label: "Georreferenciación", icon: MapPin },
];

const ROUTES = [
  {
    pro: "Profesional A",
    driver: "Conductor 1",
    plate: "ABC123",
    madrina: "Madrina Norte",
    time: "6:00 a. m.",
    km: "~8.8 km",
    cis: "CIS Norte → CIS Norte",
    progress: "5/9",
    pct: 56,
    stop: "Paciente ejemplo 1",
    addr: "Calle ejemplo # 10-20",
  },
  {
    pro: "Profesional B",
    driver: "Conductor 2",
    plate: "XYZ789",
    madrina: "Madrina Sur",
    time: "7:00 a. m.",
    km: "~12.1 km",
    cis: "CIS Sur → CIS Sur",
    progress: "2/7",
    pct: 29,
    stop: "Paciente ejemplo 2",
    addr: "Cra ejemplo # 45-10",
  },
];

const PILLS = [
  { name: "Profesional A", top: "22%", left: "48%" },
  { name: "Profesional B", top: "38%", left: "36%" },
  { name: "Profesional C", top: "55%", left: "58%" },
  { name: "Profesional D", top: "48%", left: "28%" },
];

export function RutaShell({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200 bg-[#f4f7fb] shadow-[0_24px_80px_rgba(15,23,42,0.16)]",
        className
      )}
    >
      <div className="flex h-[min(420px,55vh)] min-h-[320px] md:h-[460px]">
        {/* Sidebar */}
        <div className="hidden w-[200px] shrink-0 flex-col border-r border-slate-200 bg-white p-3 lg:flex">
          <div className="mb-4 flex items-center gap-2 px-1">
            <Image
              src="/brand/estarmed-logo.png"
              alt=""
              width={120}
              height={28}
              className="h-6 w-auto"
            />
          </div>
          <p className="mb-2 px-2 text-[9px] font-bold uppercase tracking-wider text-slate-400">
            Operaciones
          </p>
          <div className="space-y-0.5 overflow-hidden">
            {SIDEBAR.map((item) => (
              <div
                key={item.label}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] font-medium",
                  item.active
                    ? "border-l-2 border-[#007DFF] bg-[#007DFF]/10 text-[#007DFF]"
                    : "text-slate-600"
                )}
              >
                <item.icon className="size-3.5 shrink-0" />
                <span className="truncate">{item.label}</span>
                {item.badge ? (
                  <span className="ml-auto rounded-full bg-red-500 px-1.5 text-[9px] font-bold text-white">
                    {item.badge}
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* Route list */}
        <div className="flex w-full max-w-[280px] flex-col border-r border-slate-200 bg-white sm:max-w-[320px]">
          <div className="border-b border-slate-100 px-3 py-2.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Ruta Diaria
            </p>
            <p className="text-xs font-semibold text-slate-800">
              lun 26 de octubre 2026
            </p>
          </div>
          <div className="space-y-2 overflow-hidden p-2">
            {ROUTES.map((r) => (
              <article
                key={r.pro}
                className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-bold text-[#007DFF]">{r.pro}</p>
                  <span className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-slate-600">
                    {r.plate}
                  </span>
                </div>
                <p className="mt-0.5 text-[11px] text-slate-500">
                  {r.driver} · {r.madrina}
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  {r.time} · {r.km} · {r.cis}
                </p>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-[#10b981]"
                    style={{ width: `${r.pct}%` }}
                  />
                </div>
                <p className="mt-1 text-[10px] font-semibold text-[#10b981]">
                  {r.progress} visitas
                </p>
                <div className="mt-2 flex gap-2 rounded-lg bg-emerald-50 p-2">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#10b981] text-[10px] font-bold text-white">
                    {r.progress.split("/")[0]}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-wider text-emerald-700">
                      Parada actual
                    </p>
                    <p className="truncate text-[11px] font-semibold text-slate-800">
                      {r.stop}
                    </p>
                    <p className="truncate text-[10px] text-slate-500">{r.addr}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="relative hidden flex-1 bg-[#e8eef5] sm:block">
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <svg className="absolute inset-0 h-full w-full" aria-hidden>
            <path
              d="M40 280 C 120 200, 200 320, 280 180 S 420 120, 500 220"
              fill="none"
              stroke="#007DFF"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
          {PILLS.map((p) => (
            <div
              key={p.name}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border border-white bg-white px-2.5 py-1 shadow-md"
              style={{ top: p.top, left: p.left }}
            >
              <span className="flex size-5 items-center justify-center rounded-full bg-[#007DFF] text-[9px] text-white">
                ✦
              </span>
              <span className="text-[11px] font-semibold text-slate-800 whitespace-nowrap">
                {p.name}
              </span>
            </div>
          ))}
          <div className="absolute bottom-3 left-3 rounded-lg bg-white/90 px-2.5 py-1.5 text-[10px] font-semibold text-slate-600 shadow">
            Mapa en vivo · Estárter GPS
          </div>
        </div>
      </div>
    </div>
  );
}
