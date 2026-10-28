"use client";

import { useCallback, useId, useState, type KeyboardEvent } from "react";

/** Accessible tabs: tablist / tab / tabpanel ids + arrow-key navigation. */
export function useTabs(count: number, initial = 0) {
  const baseId = useId();
  const [active, setActive] = useState(initial);

  const tabId = (i: number) => `${baseId}-tab-${i}`;
  const panelId = (i: number) => `${baseId}-panel-${i}`;

  const onTabKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>, index: number) => {
      let next: number | null = null;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        next = (index + 1) % count;
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        next = (index - 1 + count) % count;
      } else if (event.key === "Home") {
        next = 0;
      } else if (event.key === "End") {
        next = count - 1;
      }
      if (next === null) return;
      event.preventDefault();
      setActive(next);
      const target = `${baseId}-tab-${next}`;
      requestAnimationFrame(() => {
        document.getElementById(target)?.focus();
      });
    },
    [count, baseId]
  );

  return { active, setActive, tabId, panelId, onTabKeyDown, baseId };
}
