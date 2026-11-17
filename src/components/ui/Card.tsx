import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type CardProps = {
  as?: "div" | "article" | "section";
  children: ReactNode;
  className?: string;
  interactive?: boolean;
} & HTMLAttributes<HTMLElement>;

/**
 * Subtle surface for interactive containers only — not decorative hero cards.
 */
export function Card({
  as: Comp = "div",
  children,
  className,
  interactive = false,
  ...props
}: CardProps) {
  return (
    <Comp
      className={cn(
        "rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[var(--shadow-sm)]",
        interactive &&
          "transition-[border-color,box-shadow,transform] duration-[var(--duration-fast)] hover:border-[var(--color-navy-300)] hover:shadow-[var(--shadow-md)] focus-within:border-[var(--accent)]",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
