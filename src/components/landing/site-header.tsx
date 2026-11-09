import Image from "next/image";
import { Container } from "./container";
import { DemoCtaButton } from "./demo-modal";

const NAV = [
  { href: "#como", label: "Cómo funciona" },
  { href: "#producto", label: "Producto" },
  { href: "#roles", label: "Roles" },
  { href: "#funciones", label: "Funciones" },
  { href: "#caso", label: "Caso" },
];

/** Server header — mobile nav uses native <details> (no client JS). */
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3">
      <Container>
        <div className="flex items-center justify-between gap-3 rounded-full border border-white/40 bg-white/80 px-3 py-2 shadow-lg backdrop-blur-xl sm:px-4">
          <a href="#inicio" className="flex shrink-0 items-center">
            <Image
              src="/brand/estarmed-logo.png"
              alt="EstarMed — inicio"
              width={140}
              height={32}
              className="h-7 w-auto sm:h-8"
            />
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-widest text-slate-700 transition-colors hover:bg-slate-100 hover:text-[#007DFF]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <DemoCtaButton className="hidden min-h-11 touch-manipulation items-center justify-center rounded-full bg-[#007DFF] px-5 py-2.5 text-sm font-bold text-white shadow-[0_12px_24px_-8px_rgb(0_125_255_/_0.45)] transition-all hover:bg-[#0066d6] active:scale-[0.98] sm:inline-flex">
              Agendar demo
            </DemoCtaButton>

            <details className="relative md:hidden">
              <summary
                className="inline-flex size-11 list-none touch-manipulation items-center justify-center rounded-full bg-slate-100 text-slate-900 [&::-webkit-details-marker]:hidden"
                aria-label="Abrir menú"
              >
                <span className="flex flex-col gap-1.5" aria-hidden="true">
                  <span className="block h-0.5 w-4 rounded bg-current" />
                  <span className="block h-0.5 w-4 rounded bg-current" />
                  <span className="block h-0.5 w-4 rounded bg-current" />
                </span>
              </summary>
              <div className="absolute right-0 z-50 mt-2 w-[min(100vw-2rem,20rem)] rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
                <ul className="flex flex-col gap-1">
                  {NAV.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block rounded-xl px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-900"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 p-1">
                  <DemoCtaButton className="flex min-h-12 w-full items-center justify-center rounded-full bg-[#007DFF] text-sm font-bold text-white">
                    Agendar demo
                  </DemoCtaButton>
                </div>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </header>
  );
}
