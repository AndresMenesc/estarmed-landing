"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";
import { track } from "@/lib/analytics";

type DemoModalCtx = {
  openDemo: () => void;
};

const Ctx = createContext<DemoModalCtx | null>(null);

export function useDemoModal() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useDemoModal requires DemoModalProvider");
  return ctx;
}

type DialogProps = { titleId: string; onClose: () => void };

/**
 * Light provider: the modal UI is code-split and only fetched on first open.
 */
export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [Dialog, setDialog] = useState<ComponentType<DialogProps> | null>(
    null,
  );

  const openDemo = useCallback(() => {
    track("cta_click", { source: "modal" });
    void import("./demo-modal-dialog").then((m) => {
      setDialog(() => m.DemoModalDialog);
      setOpen(true);
    });
  }, []);

  const closeDemo = useCallback(() => setOpen(false), []);

  return (
    <Ctx.Provider value={{ openDemo }}>
      {children}
      {open && Dialog ? (
        <Dialog titleId="demo-modal-title" onClose={closeDemo} />
      ) : null}
    </Ctx.Provider>
  );
}

export function DemoCtaButton({
  className,
  children = "Agendar demo",
}: {
  className?: string;
  children?: ReactNode;
}) {
  const { openDemo } = useDemoModal();
  return (
    <button type="button" onClick={openDemo} className={className}>
      {children}
    </button>
  );
}
