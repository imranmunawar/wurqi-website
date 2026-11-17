import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

export type ProductMetricCardProps = {
  label: string;
  value: string;
  delta?: string;
  tone?: "neutral" | "positive" | "warning" | "danger";
  icon?: ReactNode;
  className?: string;
};

const toneStyles = {
  neutral: "text-[var(--text-secondary)]",
  positive: "text-[var(--success)]",
  warning: "text-[var(--warning)]",
  danger: "text-[var(--danger)]",
} as const;

const toneGlow = {
  neutral: "",
  positive: "shadow-[inset_0_0_0_1px_rgb(5_150_105_/0.08)]",
  warning: "shadow-[inset_0_0_0_1px_rgb(217_119_6_/0.1)]",
  danger: "shadow-[inset_0_0_0_1px_rgb(220_38_38_/0.1)]",
} as const;

export function ProductMetricCard({
  label,
  value,
  delta,
  tone = "neutral",
  icon,
  className,
}: ProductMetricCardProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-4 shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)]",
        toneGlow[tone],
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-[var(--text-caption-size)] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)]">
          {label}
        </p>
        {icon ? (
          <span
            className="flex size-8 items-center justify-center rounded-[var(--radius-md)] bg-[var(--accent-muted)] text-[var(--accent)]"
            aria-hidden="true"
          >
            {icon}
          </span>
        ) : null}
      </div>
      <p className="mt-3 font-display text-[1.75rem] font-semibold tracking-tight text-[var(--text-primary)]">
        {value}
      </p>
      {delta ? (
        <p
          className={cn(
            "mt-1.5 text-[var(--text-body-sm-size)] font-medium",
            toneStyles[tone],
          )}
        >
          {delta}
        </p>
      ) : null}
    </div>
  );
}

export function ProductMetricBadge({
  children,
  variant = "accent",
}: {
  children: ReactNode;
  variant?: "accent" | "success" | "warning" | "danger" | "default";
}) {
  return <Badge variant={variant}>{children}</Badge>;
}
