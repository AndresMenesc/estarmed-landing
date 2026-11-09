"use client";

import Image from "next/image";
import { CLIENTS, CLIENTS_SUBTITLE } from "@/lib/sales-content";
import { cn } from "@/lib/utils";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

const LOGO_H = 40;

export function Clients() {
  return (
    <Section
      id="clientes"
      labelledBy="clientes-heading"
      density="compact"
      className="border-b border-slate-200 bg-slate-50"
    >
      <Reveal>
        <SectionHeading
          id="clientes-heading"
          eyebrow="Clientes y alianzas"
          title={CLIENTS_SUBTITLE}
          className="[&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-tight md:[&_h2]:text-2xl"
        />
      </Reveal>

      {/* Desktop / reduced-motion: wrap */}
      <ul className="mt-8 hidden list-none flex-wrap items-center justify-center gap-x-10 gap-y-6 motion-reduce:flex md:flex">
        {CLIENTS.map((c) => (
          <li key={c.id}>
            <ClientLogo client={c} />
          </li>
        ))}
      </ul>

      {/* Mobile (and default when wrap is hidden): marquee */}
      <div
        className="clients-marquee mt-8 overflow-hidden motion-reduce:hidden md:hidden"
        aria-hidden={false}
      >
        <div className="clients-marquee-track flex w-max items-center gap-10">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex list-none items-center gap-10"
              aria-hidden={copy === 1}
            >
              {CLIENTS.map((c) => (
                <li key={`${copy}-${c.id}`} className="shrink-0">
                  <ClientLogo client={c} />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ClientLogo({
  client,
}: {
  client: (typeof CLIENTS)[number];
}) {
  return (
    <div
      className={cn(
        "group flex h-14 items-center justify-center px-3 transition-[filter] duration-300",
        client.darkChip
          ? "rounded-lg bg-[#0A1640] py-2"
          : "rounded-lg bg-transparent"
      )}
    >
      <Image
        src={client.src}
        alt={`Logo de ${client.name}`}
        width={160}
        height={LOGO_H}
        className={cn(
          "h-10 w-auto max-w-[140px] object-contain transition-[filter] duration-300",
          client.darkChip
            ? "brightness-100"
            : "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
        )}
      />
    </div>
  );
}
