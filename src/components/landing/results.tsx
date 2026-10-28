"use client";

import { useEffect, useRef, useState } from "react";
import {
  RESULTS,
  RESULTS_FOOTNOTE,
  RESULTS_SUBTITLE,
} from "@/lib/sales-content";
import { Section } from "./section";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";

export function Results() {
  return (
    <Section
      id="resultados"
      labelledBy="resultados-heading"
      density="compact"
      className="border-y border-slate-200 bg-white"
    >
      <Reveal>
        <SectionHeading
          id="resultados-heading"
          eyebrow="Resultados"
          title="Impacto medido en campo."
          subtitle={RESULTS_SUBTITLE}
        />
        <ResultsCounters />
        <p className="mt-6 max-w-3xl text-[11px] font-medium leading-relaxed text-slate-400">
          {RESULTS_FOOTNOTE}
        </p>
      </Reveal>
    </Section>
  );
}

function ResultsCounters() {
  const ref = useRef<HTMLDListElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <dl ref={ref} className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
      {RESULTS.map((item) => (
        <div key={item.label} className="flex flex-col-reverse text-left">
          <dt className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500">
            {item.label}
          </dt>
          <dd className="font-display text-3xl font-bold tracking-tight text-[#007DFF] md:text-4xl">
            {item.numeric == null ? (
              item.value
            ) : (
              <CountUp
                to={item.numeric}
                prefix={item.prefix}
                suffix={item.suffix}
                active={on}
              />
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function CountUp({
  to,
  prefix,
  suffix,
  active,
}: {
  to: number;
  prefix: string;
  suffix: string;
  active: boolean;
}) {
  const [n, setN] = useState(0);
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!active) return;
    if (reduce) {
      setN(to);
      return;
    }
    const start = performance.now();
    const dur = 1100;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, to, reduce]);

  return (
    <>
      {prefix}
      {n}
      {suffix}
    </>
  );
}
