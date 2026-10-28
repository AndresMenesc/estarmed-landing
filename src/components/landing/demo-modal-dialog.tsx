"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { DemoForm } from "./demo-form";

export function DemoModalDialog({
  titleId,
  onClose,
}: {
  titleId: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/50"
        aria-label="Cerrar"
        onClick={onClose}
      />
      <div className="relative z-10 max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl sm:rounded-3xl sm:p-7">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#007DFF]">
              Demo
            </p>
            <h2
              id={titleId}
              className="font-display mt-1 text-2xl font-bold text-[#0A1640]"
            >
              Agendar una demo
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-11 items-center justify-center rounded-full bg-slate-100 text-slate-700"
            aria-label="Cerrar"
          >
            <X className="size-5" />
          </button>
        </div>
        <DemoForm variant="panel" onSuccess={() => undefined} />
      </div>
    </div>
  );
}
