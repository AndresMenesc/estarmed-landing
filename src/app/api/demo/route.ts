import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";

type DemoPayload = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  message: string;
  habeasData: boolean;
  website?: string; // honeypot
  utm?: Record<string, string>;
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

export async function POST(req: Request) {
  let body: DemoPayload;
  try {
    body = (await req.json()) as DemoPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  // Honeypot
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name || "").trim();
  const company = (body.company || "").trim();
  const role = (body.role || "").trim();
  const email = (body.email || "").trim().toLowerCase();
  const phone = (body.phone || "").trim();
  const message = (body.message || "").trim();

  if (!name || !company || !role || !email || !phone) {
    return NextResponse.json(
      { ok: false, error: "Complete los campos obligatorios." },
      { status: 400 }
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Correo inválido." }, { status: 400 });
  }
  if (!body.habeasData) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Debe autorizar el tratamiento de datos personales (Ley 1581 de 2012).",
      },
      { status: 400 }
    );
  }

  const lead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
    name,
    company,
    role,
    email,
    phone,
    message,
    habeasData: true,
    utm: body.utm || {},
    userAgent: req.headers.get("user-agent") || "",
  };

  // Local store (dev / fallback)
  try {
    const dir = path.join(process.cwd(), "data", "leads");
    await mkdir(dir, { recursive: true });
    await appendFile(
      path.join(dir, "leads.jsonl"),
      `${JSON.stringify(lead)}\n`,
      "utf8"
    );
    console.info("[demo-lead]", lead.id, lead.email, lead.company);
  } catch (err) {
    console.error("[demo-lead] local store failed", err);
  }

  // Optional CRM / webhook (placeholder)
  const webhook = process.env.DEMO_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.DEMO_WEBHOOK_TOKEN
            ? { Authorization: `Bearer ${process.env.DEMO_WEBHOOK_TOKEN}` }
            : {}),
        },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      console.error("[demo-lead] webhook failed", err);
    }
  }

  return NextResponse.json({ ok: true, id: lead.id });
}
