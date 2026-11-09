import { HERO } from "@/lib/sales-content";
import { Container } from "./container";
import { DemoCtaButton } from "./demo-modal";
import { HeroPoster } from "./hero-poster";
import { HeroVideoChrome } from "./hero-video";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-b from-[#e8f2ff] via-[#f4f7fb] to-white pt-20 pb-10 md:pt-28 md:pb-16"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_top,_rgba(0,125,255,0.18),_transparent_60%)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#007DFF]">
            {HERO.eyebrow}
          </p>
          <h1
            id="hero-heading"
            className="font-display mt-3 text-[2rem] font-bold leading-[1.08] tracking-[-0.04em] text-[#0A1640] sm:text-4xl md:text-5xl xl:text-6xl"
          >
            {HERO.headline}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-slate-700 md:text-lg">
            {HERO.subhead}
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <DemoCtaButton className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#007DFF] px-7 text-sm font-bold text-white shadow-[0_16px_32px_-12px_rgb(0_125_255_/_0.5)] transition hover:bg-[#0066d6] active:scale-[0.98]">
              {HERO.primaryCta}
              <ArrowIcon />
            </DemoCtaButton>
            <a
              href="#como"
              className="inline-flex min-h-12 items-center gap-1.5 rounded-full px-4 text-sm font-bold text-[#0A1640] hover:text-[#007DFF]"
            >
              {HERO.secondaryCta}
              <ArrowIcon />
            </a>
          </div>
          <ul className="mt-6 flex list-none flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500">
            <li>Comfama Salud y Bienestar</li>
            <li aria-hidden="true" className="hidden sm:inline">
              ·
            </li>
            <li>Estárter Core</li>
            <li aria-hidden="true" className="hidden sm:inline">
              ·
            </li>
            <li>57 sedes CIS</li>
          </ul>
        </div>

        <div className="relative mx-auto mt-6 w-full max-w-5xl md:mt-10">
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[#0A1640] shadow-[0_24px_80px_rgba(15,23,42,0.18)]">
            <div className="relative aspect-video w-full bg-[#0A1640]">
              <HeroPoster />
              <HeroVideoChrome />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
