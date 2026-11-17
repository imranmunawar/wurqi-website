import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  default:
    "bg-[var(--surface-muted)] text-[var(--text-secondary)] ring-1 ring-[var(--border)]",
  accent:
    "bg-[var(--accent-muted)] text-[var(--color-brand-700)] ring-1 ring-[var(--color-brand-200)]",
  success:
    "bg-[var(--success-muted)] text-[var(--success)] ring-1 ring-[color-mix(in_srgb,var(--success)_20%,transparent)]",
  warning:
    "bg-[var(--warning-muted)] text-[var(--warning)] ring-1 ring-[color-mix(in_srgb,var(--warning)_20%,transparent)]",
  danger:
    "bg-[var(--danger-muted)] text-[var(--danger)] ring-1 ring-[color-mix(in_srgb,var(--danger)_20%,transparent)]",
  navy:
    "bg-[var(--color-navy-900)] text-[var(--text-inverse)]",
} as const;

export type BadgeVariant = keyof typeof variants;

export type BadgeProps = {
  variant?: BadgeVariant;
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>;

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] px-2.5 py-1 text-[var(--text-caption-size)] font-semibold tracking-wide",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
