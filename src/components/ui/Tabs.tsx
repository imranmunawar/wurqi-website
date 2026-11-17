"use client";

import {
  createContext,
  useContext,
  useId,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
  baseId: string;
  orientation: "horizontal" | "vertical";
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const ctx = useContext(TabsContext);
  if (!ctx) {
    throw new Error("Tabs components must be used within <Tabs>");
  }
  return ctx;
}

export type TabsProps = {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
  children: ReactNode;
};

export function Tabs({
  defaultValue,
  value: controlledValue,
  onValueChange,
  orientation = "horizontal",
  className,
  children,
}: TabsProps) {
  const baseId = useId();
  const [uncontrolled, setUncontrolled] = useState(defaultValue);
  const value = controlledValue ?? uncontrolled;

  function setValue(next: string) {
    if (controlledValue === undefined) {
      setUncontrolled(next);
    }
    onValueChange?.(next);
  }

  return (
    <TabsContext.Provider value={{ value, setValue, baseId, orientation }}>
      <div
        className={cn(
          orientation === "vertical" && "flex gap-8",
          className,
        )}
        data-orientation={orientation}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export type TabsListProps = {
  label: string;
  className?: string;
  children: ReactNode;
};

export function TabsList({ label, className, children }: TabsListProps) {
  const { orientation } = useTabsContext();

  return (
    <div
      role="tablist"
      aria-label={label}
      aria-orientation={orientation}
      className={cn(
        "flex gap-1",
        orientation === "horizontal" &&
          "flex-wrap border-b border-[var(--border)]",
        orientation === "vertical" &&
          "min-w-48 shrink-0 flex-col border-r border-[var(--border)] pr-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

export type TabsTriggerProps = {
  value: string;
  children: ReactNode;
  className?: string;
};

export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
  const { value: active, setValue, baseId, orientation } = useTabsContext();
  const selected = active === value;
  const triggerId = `${baseId}-tab-${value}`;
  const panelId = `${baseId}-panel-${value}`;

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const list = event.currentTarget.closest('[role="tablist"]');
    if (!list) return;
    const tabs = Array.from(
      list.querySelectorAll<HTMLButtonElement>('[role="tab"]'),
    );
    const index = tabs.indexOf(event.currentTarget);
    if (index < 0) return;

    const vertical = orientation === "vertical";
    const nextKey = vertical ? "ArrowDown" : "ArrowRight";
    const prevKey = vertical ? "ArrowUp" : "ArrowLeft";

    let nextIndex = index;
    if (event.key === nextKey) {
      nextIndex = (index + 1) % tabs.length;
    } else if (event.key === prevKey) {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    tabs[nextIndex]?.focus();
    tabs[nextIndex]?.click();
  }

  return (
    <button
      id={triggerId}
      type="button"
      role="tab"
      aria-selected={selected}
      aria-controls={panelId}
      tabIndex={selected ? 0 : -1}
      className={cn(
        "relative px-4 py-3 text-[var(--text-body-sm-size)] font-semibold text-[var(--text-secondary)] transition-[color,background-color,box-shadow] hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]",
        selected && "text-[var(--text-primary)]",
        orientation === "horizontal" &&
          selected &&
          "after:absolute after:inset-x-2 after:bottom-0 after:h-0.5 after:rounded-full after:bg-[var(--accent)]",
        orientation === "vertical" &&
          selected &&
          "rounded-[var(--radius-md)] bg-[var(--accent-muted)] text-[var(--accent)]",
        className,
      )}
      onClick={() => setValue(value)}
      onKeyDown={onKeyDown}
    >
      {children}
    </button>
  );
}

export type TabsContentProps = {
  value: string;
  children: ReactNode;
  className?: string;
  forceMount?: boolean;
};

export function TabsContent({
  value,
  children,
  className,
  forceMount,
}: TabsContentProps) {
  const { value: active, baseId } = useTabsContext();
  const reduceMotion = useReducedMotion();
  const selected = active === value;
  const triggerId = `${baseId}-tab-${value}`;
  const panelId = `${baseId}-panel-${value}`;

  if (!selected && !forceMount) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {selected ? (
        <motion.div
          key={value}
          id={panelId}
          role="tabpanel"
          aria-labelledby={triggerId}
          tabIndex={0}
          initial={reduceMotion ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -4 }}
          transition={{
            duration: reduceMotion ? 0 : 0.22,
            ease: [0.2, 0.8, 0.2, 1],
          }}
          className={cn("outline-none", className)}
          hidden={!selected}
        >
          {children}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
