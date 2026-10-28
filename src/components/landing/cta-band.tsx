"use client";

import { Section } from "./section";
import { Reveal } from "./reveal";
import { DemoForm } from "./demo-form";

export function CtaBand() {
  return (
    <Section id="contacto" labelledBy="contacto-heading" className="bg-[#007DFF]">
      <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <header>
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/75">
              Siguiente paso
            </p>
            <h2
              id="contacto-heading"
              className="font-display mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl"
            >
              ¿Listos para verlo en acción?
            </h2>
            <p className="mt-3 max-w-md text-sm font-medium text-white/85 md:text-base">
              Cuéntenos sobre su operación y agendamos una demo.
            </p>
          </header>
          <ul className="mt-6 space-y-2.5 text-sm font-medium text-white/90">
            <li className="flex gap-2.5">
              <span
                className="mt-1 size-1.5 shrink-0 rounded-full bg-white"
                aria-hidden="true"
              />
              Respuesta en 1–2 días hábiles.
            </li>
            <li className="flex gap-2.5">
              <span
                className="mt-1 size-1.5 shrink-0 rounded-full bg-white"
                aria-hidden="true"
              />
              Datos tratados bajo Ley 1581 de 2012.
            </li>
            <li className="flex gap-2.5">
              <span
                className="mt-1 size-1.5 shrink-0 rounded-full bg-white"
                aria-hidden="true"
              />
              Sin registro público: demo bajo solicitud.
            </li>
          </ul>
        </Reveal>

        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm sm:p-7">
            <DemoForm variant="dark" />
          </div>
        </div>
      </div>
    </Section>
  );
}
