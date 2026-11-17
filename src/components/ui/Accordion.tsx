"use client";

import {
  useId,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type AccordionItem = {
  id?: string;
  title: string;
  content: ReactNode;
};

export type AccordionProps = {
  items: AccordionItem[];
  type?: "single" | "multiple";
  defaultOpenIds?: string[];
  className?: string;
};

export function Accordion({
  items,
  type = "single",
  defaultOpenIds = [],
  className,
}: AccordionProps) {
  const reactId = useId();
  const reduceMotion = useReducedMotion();
  const normalized = items.map((item, index) => ({
    ...item,
    id: item.id ?? `${reactId}-item-${index}`,
  }));

  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  function toggle(id: string) {
    setOpenIds((prev) => {
      const isOpen = prev.includes(id);
      if (type === "single") {
        return isOpen ? [] : [id];
      }
      return isOpen ? prev.filter((value) => value !== id) : [...prev, id];
    });
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const triggers = normalized.map((_, i) => `${reactId}-trigger-${i}`);
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const next =
        event.key === "ArrowDown"
          ? (index + 1) % triggers.length
          : (index - 1 + triggers.length) % triggers.length;
      document.getElementById(triggers[next])?.focus();
    }
    if (event.key === "Home") {
      event.preventDefault();
      document.getElementById(triggers[0])?.focus();
    }
    if (event.key === "End") {
      event.preventDefault();
      document.getElementById(triggers[triggers.length - 1])?.focus();
    }
  }

  return (
    <div className={cn("divide-y divide-[var(--border)]", className)}>
      {normalized.map((item, index) => {
        const isOpen = openIds.includes(item.id);
        const triggerId = `${reactId}-trigger-${index}`;
        const panelId = `${reactId}-panel-${index}`;

        return (
          <div key={item.id} className="py-1">
            <h3 className="text-h4 m-0">
              <button
                id={triggerId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-[var(--text-primary)] transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
                onClick={() => toggle(item.id)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                <span>{item.title}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={cn(
                    "size-5 shrink-0 text-[var(--text-muted)] transition-transform duration-[var(--duration-normal)]",
                    isOpen && "rotate-180 text-[var(--accent)]",
                  )}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  initial={
                    reduceMotion ? false : { height: 0, opacity: 0 }
                  }
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.25,
                    ease: [0.2, 0.8, 0.2, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="text-body pb-5 pr-8 text-pretty">
                    {item.content}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
