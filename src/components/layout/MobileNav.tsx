"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { getNavIcon } from "@/components/layout/nav-icons";
import { SiteLogo } from "@/components/layout/SiteLogo";
import type { NavItem, NavSection } from "@/types";

export type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  sections: NavSection[];
  ctaItems: NavItem[];
};

export function MobileNav({
  open,
  onClose,
  sections,
  ctaItems,
}: MobileNavProps) {
  const reduceMotion = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeRef.current?.focus();
    }, 0);

    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-[var(--z-overlay)] bg-[var(--color-navy-950)]/45"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.2 }}
            onClick={onClose}
          />
          <motion.div
            ref={panelRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-y-0 right-0 z-[var(--z-modal)] flex w-[min(22rem,100%)] flex-col bg-[var(--surface)] shadow-[var(--shadow-lg)]"
            initial={reduceMotion ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={reduceMotion ? undefined : { x: "100%" }}
            transition={{
              duration: reduceMotion ? 0 : 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="flex h-[var(--header-height)] items-center justify-between border-b border-[var(--border)] px-4">
              <SiteLogo variant="dark" href="/" />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="inline-flex size-10 items-center justify-center rounded-[var(--radius-md)] text-[var(--text-primary)] hover:bg-[var(--surface-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
                aria-label="Close navigation"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="space-y-1">
                {sections.map((section) => (
                  <MobileSection
                    key={section.title}
                    section={section}
                    onNavigate={onClose}
                    defaultExpanded={expandedSections[section.title]}
                    onExpandedChange={(expanded) => {
                      setExpandedSections((prev) => ({
                        ...prev,
                        [section.title]: expanded,
                      }));
                    }}
                  />
                ))}
              </ul>
            </div>

            <div className="space-y-2 border-t border-[var(--border)] p-4">
              {ctaItems.map((item, index) => (
                <Button
                  key={item.href}
                  href={item.href}
                  external={item.external}
                  variant={index === ctaItems.length - 1 ? "primary" : "outline"}
                  size="md"
                  className="w-full"
                  onClick={onClose}
                >
                  {item.title}
                </Button>
              ))}
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
}

function MobileSection({
  section,
  onNavigate,
  defaultExpanded = false,
  onExpandedChange,
}: {
  section: NavSection;
  onNavigate: () => void;
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
}) {
  const hasChildren = section.items.length > 1;
  const panelId = useId();
  const buttonId = useId();
  const isSimpleLink =
    !hasChildren ||
    (section.items.length === 1 && section.items[0].href === section.href);

  if (isSimpleLink && section.href) {
    return (
      <li>
        <Link
          href={section.href}
          onClick={onNavigate}
          className="block rounded-[var(--radius-md)] px-3 py-3 text-[var(--text-body-size)] font-semibold text-[var(--text-primary)] hover:bg-[var(--surface-muted)]"
        >
          {section.title}
        </Link>
      </li>
    );
  }

  return (
    <MobileDisclosure
      title={section.title}
      href={section.href}
      items={section.items}
      panelId={panelId}
      buttonId={buttonId}
      defaultExpanded={defaultExpanded}
      onExpandedChange={onExpandedChange}
      onNavigate={onNavigate}
    />
  );
}

function MobileDisclosure({
  title,
  href,
  items,
  panelId,
  buttonId,
  defaultExpanded,
  onExpandedChange,
  onNavigate,
}: {
  title: string;
  href?: string;
  items: NavItem[];
  panelId: string;
  buttonId: string;
  defaultExpanded: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(defaultExpanded);

  function onToggle() {
    setOpen((prev) => {
      const next = !prev;
      onExpandedChange?.(next);
      return next;
    });
  }

  function onSummaryKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === "Escape" && open) {
      setOpen(false);
      onExpandedChange?.(false);
    }
  }

  return (
    <li>
      <div className="rounded-[var(--radius-md)]">
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          onKeyDown={onSummaryKeyDown}
          className={cn(
            "flex w-full cursor-pointer items-center justify-between rounded-[var(--radius-md)] px-3 py-3 text-left text-[var(--text-body-size)] font-semibold text-[var(--text-primary)] hover:bg-[var(--surface-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]",
          )}
        >
          <span>{title}</span>
          <ChevronDown
            aria-hidden="true"
            className={cn(
              "size-4 text-[var(--text-muted)] transition-transform",
              open && "rotate-180",
            )}
          />
        </button>
        {open ? (
          <div id={panelId} className="space-y-1 pb-2 pl-2">
            {href ? (
              <Link
                href={href}
                onClick={onNavigate}
                className="block rounded-[var(--radius-md)] px-3 py-2 text-[var(--text-body-sm-size)] font-semibold text-[var(--accent)] hover:bg-[var(--accent-muted)]"
              >
                Overview
              </Link>
            ) : null}
            {items.map((item) => {
              const Icon = getNavIcon(item.icon);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className="flex items-start gap-2.5 rounded-[var(--radius-md)] px-3 py-2.5 hover:bg-[var(--surface-muted)]"
                >
                  {Icon ? (
                    <Icon
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-[var(--accent)]"
                    />
                  ) : null}
                  <span>
                    <span className="block text-[var(--text-body-sm-size)] font-semibold text-[var(--text-primary)]">
                      {item.title}
                    </span>
                    {item.description ? (
                      <span className="mt-0.5 block text-[var(--text-caption-size)] text-[var(--text-muted)]">
                        {item.description}
                      </span>
                    ) : null}
                  </span>
                </Link>
              );
            })}
          </div>
        ) : (
          <div id={panelId} hidden />
        )}
      </div>
    </li>
  );
}
