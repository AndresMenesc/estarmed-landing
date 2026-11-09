"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type DemoFormProps = {
  variant?: "light" | "dark" | "panel";
  onSuccess?: () => void;
  className?: string;
};

const empty = {
  name: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  message: "",
  habeasData: false,
  website: "",
};

function utmFromSearch() {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  const out: Record<string, string> = {};
  for (const k of keys) {
    const v = p.get(k);
    if (v) out[k] = v;
  }
  return out;
}

export function DemoForm({ variant = "panel", onSuccess, className }: DemoFormProps) {
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");
  const dark = variant === "dark";

  const field = cn(
    "mt-1.5 w-full rounded-xl border px-3.5 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[#007DFF]/40",
    dark
      ? "border-white/20 bg-white/10 text-white placeholder:text-white/50"
      : "border-slate-200 bg-white text-slate-900 placeholder:text-slate-400"
  );
  const label = cn(
    "text-xs font-bold uppercase tracking-wider",
    dark ? "text-white/80" : "text-slate-600"
  );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    track("form_submit", { company: form.company });
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, utm: utmFromSearch() }),
      });
      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.error || "No se pudo enviar. Intente de nuevo.");
        return;
      }
      setStatus("ok");
      setForm(empty);
      track("demo_booked");
      onSuccess?.();
    } catch {
      setStatus("error");
      setError("Error de red. Intente de nuevo.");
    }
  }

  if (status === "ok") {
    return (
      <div
        className={cn(
          "rounded-2xl border p-6 text-center",
          dark ? "border-white/20 bg-white/10 text-white" : "border-emerald-200 bg-emerald-50 text-emerald-900",
          className
        )}
        role="status"
      >
        <p className="font-display text-xl font-bold">Solicitud recibida</p>
        <p className="mt-2 text-sm font-medium opacity-80">
          Le contactaremos para agendar la demo. Gracias.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      onFocus={() => track("form_start")}
      className={cn("space-y-3", className)}
      noValidate
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className={label}>Nombre *</span>
          <input
            required
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className={field}
          />
        </label>
        <label className="block">
          <span className={label}>Empresa / institución *</span>
          <input
            required
            name="company"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
            className={field}
          />
        </label>
        <label className="block">
          <span className={label}>Cargo *</span>
          <input
            required
            name="role"
            value={form.role}
            onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
            className={field}
          />
        </label>
        <label className="block">
          <span className={label}>Correo *</span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className={field}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>Teléfono *</span>
          <input
            required
            type="tel"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className={field}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>Mensaje</span>
          <textarea
            name="message"
            rows={3}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className={field}
            placeholder="Cuéntenos sobre su operación (opcional)"
          />
        </label>
      </div>

      {/* Honeypot */}
      <label className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        Sitio web
        <input
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
        />
      </label>

      <label
        className={cn(
          "flex items-start gap-3 rounded-xl border p-3 text-left text-xs font-medium leading-relaxed",
          dark ? "border-white/20 text-white/85" : "border-slate-200 text-slate-600"
        )}
      >
        <input
          type="checkbox"
          className="mt-0.5 size-4 shrink-0 accent-[#007DFF]"
          checked={form.habeasData}
          onChange={(e) =>
            setForm((f) => ({ ...f, habeasData: e.target.checked }))
          }
          required
        />
        <span>
          Autorizo a Estárter S.A.S. el tratamiento de mis datos personales para
          contactarme sobre una demo de EstarMed, conforme a la Ley 1581 de 2012.
          Puedo ejercer habeas data en privacidad@estarter.co.{" "}
          <Link href="/privacidad" className="underline underline-offset-2">
            Política de privacidad
          </Link>
          .
        </span>
      </label>

      {error ? (
        <p className="text-sm font-semibold text-red-500" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 text-sm font-bold tracking-wide transition active:scale-[0.98] disabled:opacity-60 sm:w-auto",
          dark
            ? "bg-white text-[#007DFF]"
            : "bg-[#007DFF] text-white shadow-[0_12px_24px_-8px_rgb(0_125_255_/_0.45)]"
        )}
      >
        {status === "loading" ? "Enviando…" : "Solicitar demo"}
      </button>
    </form>
  );
}
