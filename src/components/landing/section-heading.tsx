import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

/** Shared section intro: eyebrow → h2 → optional subtitle. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-[10px] font-black uppercase tracking-[0.35em]",
            light ? "text-white/75" : "text-[#007DFF]"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "font-display text-3xl font-bold tracking-tight md:text-4xl",
          eyebrow ? "mt-2" : null,
          light ? "text-white" : "text-[#0A1640]",
          align === "left" && "max-w-3xl lg:max-w-none"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-3 max-w-2xl text-sm font-medium md:text-base",
            light ? "text-white/85" : "text-slate-600",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
