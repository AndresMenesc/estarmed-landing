"use client";

import { cn } from "@/lib/utils";

export function ConductorPhone({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "w-[200px] overflow-hidden rounded-[1.75rem] border-[6px] border-slate-900 bg-white shadow-2xl",
        className
      )}
    >
      <div className="bg-slate-900 px-3 pb-2 pt-3 text-white">
        <div className="mx-auto mb-2 h-1 w-16 rounded-full bg-slate-700" />
        <p className="text-[10px] font-medium text-slate-400">Vista Conductor</p>
        <p className="text-sm font-bold">Conductor 1</p>
        <p className="text-[10px] text-slate-400">Inicio: 6:00 a. m.</p>
      </div>
      <div className="space-y-2 p-3">
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-2.5">
          <p className="text-[9px] font-bold uppercase tracking-wider text-emerald-700">
            En progreso
          </p>
          <p className="mt-1 text-xs font-bold text-slate-900">
            Visita 5 · Paciente ejemplo
          </p>
          <p className="text-[10px] text-slate-500">Calle ejemplo # 10-20</p>
          <div className="mt-2 w-full rounded-full bg-[#10b981] py-2 text-center text-[11px] font-black uppercase tracking-wide text-white">
            Terminó
          </div>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 opacity-80">
          <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
            Siguiente entrega
          </p>
          <p className="mt-1 text-xs font-semibold text-slate-700">
            Visita 6 · 1,2 km
          </p>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          <span className="rounded-lg bg-[#007DFF]/10 py-1.5 text-center text-[10px] font-bold text-[#007DFF]">
            Maps
          </span>
          <span className="rounded-lg bg-[#007DFF]/10 py-1.5 text-center text-[10px] font-bold text-[#007DFF]">
            Waze
          </span>
        </div>
      </div>
    </div>
  );
}
