import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/sales-content";
import { Container } from "./container";

export function SiteFooter() {
  return (
    <footer className="bg-slate-900 py-10 text-white" role="contentinfo">
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <Image
              src="/brand/estarmed-logo.png"
              alt="EstarMed"
              width={130}
              height={30}
              className="h-7 w-auto brightness-0 invert"
            />
            <p className="mt-2 text-xs font-medium text-slate-500">
              Producto de Estárter S.A.S. · NIT{" "}
              <span className="text-slate-400">[pendiente]</span>
            </p>
            <p className="mt-1 text-xs font-medium text-slate-500">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="underline-offset-2 hover:text-slate-300 hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
          <nav aria-label="Legal" className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-wider text-slate-400">
            <Link href="/privacidad" className="hover:text-white">
              Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-white">
              Términos
            </Link>
            <a href="#contacto" className="hover:text-white">
              Demo
            </a>
          </nav>
        </div>
        <p className="text-xs font-medium text-slate-500">
          © 2026 Estárter S.A.S. · Borradores legales sujetos a revisión.
        </p>
      </Container>
    </footer>
  );
}
