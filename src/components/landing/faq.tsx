"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/lib/sales-content";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <Section id="faq" labelledBy="faq-heading" className="bg-white">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-4">
          <SectionHeading
            id="faq-heading"
            eyebrow="FAQ"
            title="Preguntas frecuentes"
            subtitle="Detalle operativo y límites — expandir para leer."
          />
        </Reveal>

        <div className="lg:col-span-8">
          <div className="w-full divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
            {FAQ.map((item, idx) => {
              const isOpen = open === idx;
              const btnId = `${baseId}-q-${idx}`;
              const panelId = `${baseId}-a-${idx}`;
              return (
                <div key={item.q}>
                  <h3>
                    <button
                      type="button"
                      id={btnId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : idx)}
                      className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                    >
                      <span className="text-sm font-bold text-[#0A1640]">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={cn(
                          "size-4 shrink-0 text-slate-400 transition-transform",
                          isOpen && "rotate-180"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    hidden={!isOpen}
                  >
                    {isOpen ? (
                      <p className="px-5 pb-4 text-sm font-medium leading-relaxed text-slate-600">
                        {item.a}
                      </p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
