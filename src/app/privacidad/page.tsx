import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/landing/container";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { DemoModalProvider } from "@/components/landing/demo-modal";

export const metadata: Metadata = {
  title: "Privacidad (borrador) — EstarMed",
  description:
    "Borrador de Política de Tratamiento de Datos Personales de Estárter S.A.S. / EstarMed.",
  robots: { index: false, follow: false },
};

export default function PrivacidadPage() {
  return (
    <DemoModalProvider>
      <SiteHeader />
      <main className="flex-1 bg-slate-50 pb-16 pt-28">
        <Container className="max-w-3xl">
          <p className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-amber-800">
            Borrador · no es versión firmada
          </p>
          <h1 className="font-display mt-4 text-3xl font-bold text-[#0A1640] md:text-4xl">
            Política de Tratamiento de Datos Personales
          </h1>
          <p className="mt-3 text-sm font-medium text-slate-600">
            Estárter S.A.S. · EstarMed · Ley 1581 de 2012 y Decreto 1377 de 2013
            (compilado en Decreto 1074 de 2015).
          </p>

          <div className="prose prose-slate mt-8 max-w-none space-y-4 text-sm font-medium leading-relaxed text-slate-700">
            <p>
              <strong>Estado:</strong> este texto es un <em>borrador editorial</em>{" "}
              para la landing. Debe ser revisado y firmado por asesoría jurídica
              de Estárter antes de publicarse como política oficial.
            </p>
            <p>
              <strong>Responsable:</strong> Estárter S.A.S. NIT:{" "}
              <span className="rounded bg-amber-50 px-1">[PENDIENTE — NIT]</span>.
              Domicilio:{" "}
              <span className="rounded bg-amber-50 px-1">
                [PENDIENTE — dirección Colombia]
              </span>
              . Correo de habeas data:{" "}
              <a className="text-[#007DFF] underline" href="mailto:privacidad@estarter.co">
                privacidad@estarter.co
              </a>
              .
            </p>
            <h2 className="font-display text-xl font-bold text-[#0A1640]">
              Finalidades
            </h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Atender solicitudes de demo y contacto comercial.</li>
              <li>Operar y mejorar el sitio web (cookies técnicas y, con
                consentimiento, analíticas).</li>
              <li>
                En la plataforma EstarMed (cuentas creadas por administrador):
                logística de visitas domiciliarias según el contrato con cada
                cliente.
              </li>
            </ul>
            <h2 className="font-display text-xl font-bold text-[#0A1640]">
              Derechos
            </h2>
            <p>
              El titular puede conocer, actualizar, rectificar y suprimir sus
              datos, y revocar la autorización, mediante el canal de habeas data
              indicado. Las consultas y reclamos se tramitan en los términos de
              la Ley 1581.
            </p>
            <h2 className="font-display text-xl font-bold text-[#0A1640]">
              Transferencias
            </h2>
            <p>
              No vendemos datos personales. Podemos usar encargados de
              tratamiento (hosting, correo, CRM) bajo contratos de
              confidencialidad.{" "}
              <span className="rounded bg-amber-50 px-1">
                [PENDIENTE — listado de encargados]
              </span>
              .
            </p>
            <p className="text-xs text-slate-500">
              Borrador generado para la landing · base: política del producto
              (19-sep-2026). Requiere sign-off legal.
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
