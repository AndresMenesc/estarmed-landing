import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/landing/container";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { DemoModalProvider } from "@/components/landing/demo-modal";

export const metadata: Metadata = {
  title: "Términos (borrador) — EstarMed",
  description: "Borrador de términos de uso del sitio EstarMed / Estárter S.A.S.",
  robots: { index: false, follow: false },
};

export default function TerminosPage() {
  return (
    <DemoModalProvider>
      <SiteHeader />
      <main className="flex-1 bg-slate-50 pb-16 pt-28">
        <Container className="max-w-3xl">
          <p className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-amber-800">
            Borrador · no es versión firmada
          </p>
          <h1 className="font-display mt-4 text-3xl font-bold text-[#0A1640] md:text-4xl">
            Términos de uso del sitio
          </h1>
          <p className="mt-3 text-sm font-medium text-slate-600">
            Sitio informativo de EstarMed, producto de Estárter S.A.S.
          </p>

          <div className="mt-8 space-y-4 text-sm font-medium leading-relaxed text-slate-700">
            <p>
              <strong>Estado:</strong> borrador para publicación en la landing.
              Debe validarse con asesoría jurídica antes de considerarse
              vinculante.
            </p>
            <h2 className="font-display text-xl font-bold text-[#0A1640]">
              1. Objeto
            </h2>
            <p>
              Este sitio describe el producto EstarMed y permite solicitar una
              demo. El uso de la plataforma operativa requiere contrato y cuentas
              creadas por un administrador; no hay registro público.
            </p>
            <h2 className="font-display text-xl font-bold text-[#0A1640]">
              2. Información
            </h2>
            <p>
              Los contenidos son informativos. Las métricas citadas corresponden
              a un periodo y cliente específicos y no constituyen garantía de
              resultados. EstarMed no es historia clínica ni emite factura
              electrónica DIAN.
            </p>
            <h2 className="font-display text-xl font-bold text-[#0A1640]">
              3. Contacto
            </h2>
            <p>
              Estárter S.A.S. NIT{" "}
              <span className="rounded bg-amber-50 px-1">[PENDIENTE]</span>.
              Correo: contacto@estarter.co. Privacidad:
              privacidad@estarter.co.
            </p>
            <h2 className="font-display text-xl font-bold text-[#0A1640]">
              4. Ley aplicable
            </h2>
            <p>
              República de Colombia. Foros:{" "}
              <span className="rounded bg-amber-50 px-1">
                [PENDIENTE — ciudad / cláusula]
              </span>
              .
            </p>
          </div>

          <p className="mt-10">
            <Link href="/" className="text-sm font-bold text-[#007DFF] hover:underline">
              ← Volver al inicio
            </Link>
          </p>
        </Container>
      </main>
      <SiteFooter />
    </DemoModalProvider>
  );
}
