"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getNavIcon } from "@/components/layout/nav-icons";
import type { NavItem } from "@/types";

export type MegaMenuProps = {
  id: string;
  title: string;
  href?: string;
  items: NavItem[];
  open: boolean;
  onClose: () => void;
  className?: string;
};

export function MegaMenu({
  id,
  title,
  href,
  items,
  open,
  onClose,
  className,
}: MegaMenuProps) {
  const reduceMotion = useReducedMotion();
  const columns = items.length > 5 ? 2 : 1;

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id={id}
          role="region"
          aria-label={`${title} menu`}
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: 6 }}
          transition={{
            duration: reduceMotion ? 0 : 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={cn(
            "absolute left-1/2 top-full z-[var(--z-dropdown)] mt-3 w-[min(40rem,calc(100vw-2rem))] -translate-x-1/2 rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-lg)]",
            className,
          )}
        >
          <div className="mb-4 flex items-end justify-between gap-4 border-b border-[var(--border)] pb-3">
            <div>
              <p className="text-caption font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                Explore
              </p>
              <p className="text-h4 mt-1">{title}</p>
            </div>
            {href ? (
              <Link
                href={href}
                onClick={onClose}
                className="text-[var(--text-body-sm-size)] font-semibold text-[var(--text-link)] hover:text-[var(--text-link-hover)]"
              >
                View all
              </Link>
            ) : null}
          </div>
          <ul
            className={cn(
              "grid gap-1",
              columns === 2 ? "sm:grid-cols-2" : "grid-cols-1",
            )}
          >
            {items.map((item) => {
              const Icon = getNavIcon(item.icon);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="group flex gap-3 rounded-[var(--radius-lg)] p-3 transition-colors hover:bg-[var(--surface-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
                  >
                    {Icon ? (
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--accent-muted)] text-[var(--accent)]">
                        <Icon aria-hidden="true" className="size-4" />
                      </span>
                    ) : null}
                    <span className="min-w-0">
                      <span className="block text-[var(--text-body-sm-size)] font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)]">
                        {item.title}
                      </span>
                      {item.description ? (
                        <span className="mt-0.5 block text-[var(--text-caption-size)] leading-snug text-[var(--text-muted)]">
                          {item.description}
                        </span>
                      ) : null}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
