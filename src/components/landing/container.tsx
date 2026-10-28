import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/utils";

/** Shared page column: max-w 1280 + horizontal padding. Full-bleed stays on the section. */
export const CONTAINER_CLASS =
  "mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

export function Container<T extends ElementType = "div">({
  as,
  className,
  ...props
}: ContainerProps<T>) {
  const Comp = as ?? "div";
  return <Comp className={cn(CONTAINER_CLASS, className)} {...props} />;
}
