"use client";

import {
  Bell,
  GitBranch,
  CalendarClock,
  Bot,
  MailCheck,
  Truck,
  MapPinned,
  FileSpreadsheet,
  Webhook,
  BarChart3,
  MessageSquare,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { INTEGRATION } from "@/lib/sales-content";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const AUTO_ICONS: LucideIcon[] = [
  Bell,
  GitBranch,
  MailCheck,
  CalendarClock,
  Bot,
];

const HUB_ICONS: LucideIcon[] = [
  Truck,
  MapPinned,
  FileSpreadsheet,
  Webhook,
  BarChart3,
  MessageSquare,
  ShieldCheck,
];

export function Integration() {
  return (
    <Section id="integracion" labelledBy="integracion-heading" className="bg-white">
      <Reveal>
        <SectionHeading
          id="integracion-heading"
          eyebrow={INTEGRATION.eyebrow}
          title={INTEGRATION.title}
          subtitle={INTEGRATION.lead}
        />
      </Reveal>

      <div className="mt-10">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#007DFF]">
          Automatizaciones
        </h3>
        <ul className="mt-4 grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {INTEGRATION.automations.map((item, idx) => {
            const Icon = AUTO_ICONS[idx] ?? Bell;
            return (
              <li key={item.title} className="h-full">
                <article className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
                  <span
                    className="inline-flex size-9 items-center justify-center rounded-xl bg-[#007DFF]/10 text-[#007DFF]"
                    aria-hidden="true"
                  >
                    <Icon className="size-4" strokeWidth={2.25} />
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold text-[#0A1640]">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm font-medium leading-snug text-slate-600">
                      {item.line}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#007DFF]">
          Integraciones
        </h3>
        <div className="relative mt-6 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-gradient-to-b from-[#eef5ff] via-white to-white px-4 py-8 sm:px-8 sm:py-10">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex size-24 flex-col items-center justify-center rounded-full bg-[#0A1640] text-center shadow-xl shadow-[#0A1640]/25 sm:size-28">
              <span className="font-display text-sm font-bold tracking-wide text-white sm:text-base">
                EstarMed
              </span>
            </div>
          </div>
          <ul className="mx-auto grid max-w-5xl list-none gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {INTEGRATION.integrations.map((item, idx) => {
              const Icon = HUB_ICONS[idx] ?? Webhook;
              return (
                <li key={item.title} className={idx === 6 ? "lg:col-span-1 xl:col-span-1 sm:col-span-2 lg:col-start-2 xl:col-start-auto" : undefined}>
                  <article className="flex h-full gap-3 rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm shadow-slate-200/40">
                    <span
                      className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#007DFF]/10 text-[#007DFF]"
                      aria-hidden="true"
                    >
                      <Icon className="size-4" strokeWidth={2.25} />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#0A1640]">
                        {item.title}
                      </h4>
                      <p className="mt-0.5 text-xs font-medium leading-snug text-slate-600">
                        {item.line}
                      </p>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
