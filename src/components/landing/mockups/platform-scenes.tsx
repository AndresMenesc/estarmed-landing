"use client";

import { cn } from "@/lib/utils";
import { VISIT_STATUS } from "@/lib/sales-content";

/** Anonymized high-fidelity UI crops for video + product loop. Placeholder names only. */

export function SceneCrearRutas({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl",
        className
      )}
    >
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <div>
          <p className="text-[10px] font-black uppercase tracking-wider text-[#007DFF]">
            Programación de Rutas
          </p>
          <p className="text-sm font-bold text-[#0A1640]">Crear rutas · CIS Norte</p>
        </div>
        <span className="rounded-full bg-[#007DFF] px-3 py-1.5 text-[10px] font-black uppercase text-white">
          Publicar
        </span>
      </div>
      <div className="grid gap-3 p-4 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-2">
          {["Profesional A · 9 visitas", "Profesional B · 7 visitas", "Profesional C · 8 visitas"].map(
            (row, i) => (
              <div
                key={row}
                className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5"
              >
                <div>
                  <p className="text-xs font-bold text-slate-800">{row}</p>
                  <p className="text-[10px] text-slate-500">
                    Conductor {i + 1} · Placa ABC{120 + i}
                  </p>
                </div>
                <span className="h-1.5 w-16 overflow-hidden rounded-full bg-slate-200">
                  <span
                    className="block h-full rounded-full bg-[#007DFF]"
                    style={{ width: `${70 - i * 12}%` }}
                  />
                </span>
              </div>
            )
          )}
        </div>
        <div className="rounded-xl border border-dashed border-[#007DFF]/40 bg-[#007DFF]/5 p-3">
          <p className="text-[10px] font-black uppercase tracking-wider text-[#007DFF]">
            Importar Excel del día
          </p>
          <p className="mt-2 text-xs font-semibold text-slate-600">
            agenda_cis_norte.xlsx · 24 filas
          </p>
          <div className="mt-3 rounded-lg bg-white px-3 py-2 font-mono text-[9px] text-slate-500 shadow-sm">
            Paciente ejemplo · Comuna 14 · Vacunación
          </div>
        </div>
      </div>
    </div>
  );
}

export function SceneMapaDia({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl",
        className
      )}
    >
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 px-4 py-3">
        <p className="text-sm font-bold text-[#0A1640]">Mapa del día</p>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
          12 rutas
        </span>
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
          En vivo
        </span>
      </div>
      <div className="relative h-56 bg-[#dbeafe] md:h-64">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {[
          { t: "18%", l: "22%", c: "#007DFF", label: "ABC123" },
          { t: "42%", l: "48%", c: "#10b981", label: "XYZ789" },
          { t: "58%", l: "33%", c: "#eab308", label: "LMN456" },
          { t: "30%", l: "68%", c: "#007DFF", label: "QWE321" },
        ].map((p) => (
          <div
            key={p.label}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1"
            style={{ top: p.t, left: p.l }}
          >
            <span
              className="size-3 rounded-full ring-2 ring-white shadow"
              style={{ background: p.c }}
            />
            <span className="rounded bg-white px-1.5 py-0.5 text-[9px] font-bold text-slate-700 shadow">
              {p.label}
            </span>
          </div>
        ))}
        <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 400 240">
          <path
            d="M40 180 C90 120 120 80 180 100 S260 160 320 70"
            fill="none"
            stroke="#007DFF"
            strokeWidth="3"
            strokeDasharray="6 8"
          />
          <path
            d="M60 60 C140 90 160 140 220 150 S300 170 360 120"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeDasharray="6 8"
          />
        </svg>
      </div>
    </div>
  );
}

export function SceneRutaDiaria({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200 bg-[#f4f7fb] shadow-xl",
        className
      )}
    >
      <div className="border-b border-slate-200 bg-white px-4 py-3">
        <p className="text-[10px] font-black uppercase tracking-wider text-[#007DFF]">
          Ruta Diaria
        </p>
        <p className="text-sm font-bold text-[#0A1640]">
          Profesional A · Conductor 1 · ABC123
        </p>
      </div>
      <div className="space-y-2 p-3">
        {[
          { n: 1, state: VISIT_STATUS[3], name: "Paciente ejemplo 1" },
          { n: 2, state: VISIT_STATUS[3], name: "Paciente ejemplo 2" },
          { n: 3, state: VISIT_STATUS[2], name: "Paciente ejemplo 3" },
          { n: 4, state: VISIT_STATUS[1], name: "Paciente ejemplo 4" },
          { n: 5, state: VISIT_STATUS[0], name: "Paciente ejemplo 5" },
        ].map((v) => (
          <div
            key={v.n}
            className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white px-3 py-2.5"
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-[11px] font-black text-slate-600">
              {v.n}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-bold text-slate-800">{v.name}</p>
              <p className="text-[10px] text-slate-500">Calle ejemplo · Comuna 10</p>
            </div>
            <span
              className="rounded-full px-2 py-0.5 text-[9px] font-bold text-white"
              style={{ background: v.state.color }}
            >
              {v.state.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SceneConductor({ className }: { className?: string }) {
  return (
    <div className={cn("flex justify-center", className)}>
      <div className="w-[220px] overflow-hidden rounded-[1.75rem] border-[6px] border-slate-900 bg-white shadow-2xl">
        <div className="bg-slate-900 px-3 pb-2 pt-3 text-white">
          <div className="mx-auto mb-2 h-1 w-16 rounded-full bg-slate-700" />
          <p className="text-[10px] text-slate-400">Vista Conductor</p>
          <p className="text-sm font-bold">Conductor 1</p>
        </div>
        <div className="space-y-2 p-3">
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-2.5">
            <p className="text-[9px] font-bold uppercase text-amber-700">En progreso</p>
            <p className="mt-1 text-xs font-bold text-slate-900">
              Visita 3 · Paciente ejemplo
            </p>
            <p className="text-[10px] text-slate-500">Calle ejemplo # 10-20</p>
            <div className="mt-2 rounded-full bg-[#10b981] py-2 text-center text-[11px] font-black uppercase text-white">
              Terminó
            </div>
          </div>
          <div className="rounded-xl bg-slate-50 p-2.5">
            <p className="text-[9px] font-bold uppercase text-slate-400">Siguiente</p>
            <p className="text-xs font-semibold text-slate-700">Visita 4 · 1,2 km</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SceneLiquidacion({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl",
        className
      )}
    >
      <div className="border-b border-slate-100 px-4 py-3">
        <p className="text-[10px] font-black uppercase tracking-wider text-[#007DFF]">
          Liquidación · Soportes
        </p>
        <p className="text-sm font-bold text-[#0A1640]">Cierre del día</p>
      </div>
      <div className="space-y-2 p-4">
        {[
          { route: "ABC123", h: "8 h", note: "Foto de cierre ✓ · CIS Norte" },
          { route: "XYZ789", h: "6 h", note: "Devolución equipo · San Ignacio" },
        ].map((r) => (
          <div
            key={r.route}
            className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5"
          >
            <div>
              <p className="text-xs font-bold text-slate-800">Ruta {r.route}</p>
              <p className="text-[10px] text-slate-500">{r.note}</p>
            </div>
            <span className="text-sm font-bold text-[#007DFF]">{r.h}</span>
          </div>
        ))}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {VISIT_STATUS.map((s) => (
            <span
              key={s.key}
              className="rounded-full px-2 py-0.5 text-[9px] font-bold text-white"
              style={{ background: s.color }}
            >
              {s.label}
            </span>
          ))}
        </div>
        <p className="text-[10px] font-semibold text-slate-500">
          Liquidación operativa · no es factura DIAN
        </p>
      </div>
    </div>
  );
}

/** Medication-delivery / mensajeros style board (platform capability; pharmacy pilot). */
export function SceneEntregasMapa({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl",
        className
      )}
    >
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-100 px-4 py-3">
        <p className="text-sm font-bold text-[#0A1640]">Entregas agendadas</p>
        <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-bold text-violet-700">
          Mapa del día
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
          Mensajeros
        </span>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="space-y-2 border-b border-slate-100 p-3 md:border-b-0 md:border-r">
          {["Entrega 01 · Zona norte", "Entrega 02 · Zona centro", "Entrega 03 · Zona sur"].map(
            (t, i) => (
              <div
                key={t}
                className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2"
              >
                <p className="text-xs font-bold text-slate-800">{t}</p>
                <p className="text-[10px] text-slate-500">
                  Mensajero {i + 1} · ventana 09:00–12:00
                </p>
              </div>
            )
          )}
        </div>
        <div className="relative h-40 bg-[#e8f2ff] md:h-auto">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg,#94a3b8 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <span className="absolute left-1/3 top-1/3 size-3 rounded-full bg-[#007DFF] ring-2 ring-white" />
          <span className="absolute right-1/4 top-1/2 size-3 rounded-full bg-[#10b981] ring-2 ring-white" />
          <p className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-1 text-[9px] font-bold text-slate-600">
            Rutas · placeholder
          </p>
        </div>
      </div>
    </div>
  );
}
