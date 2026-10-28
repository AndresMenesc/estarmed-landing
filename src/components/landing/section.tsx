import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

type SectionProps = {
  id: string;
  labelledBy: string;
  children: ReactNode;
  className?: string;
  /** Vertical padding preset */
  density?: "default" | "compact";
};

/** Page section landmark with shared Container and aria-labelledby. */
export function Section({
  id,
  labelledBy,
  children,
  className,
  density = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "scroll-mt-24",
        density === "default" ? "py-14 md:py-20" : "py-10 md:py-12",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
