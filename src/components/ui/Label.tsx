import type { LabelHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type LabelProps = {
  children: ReactNode;
  required?: boolean;
  className?: string;
} & LabelHTMLAttributes<HTMLLabelElement>;

export function Label({
  children,
  required,
  className,
  ...props
}: LabelProps) {
  return (
    <label
      className={cn(
        "mb-1.5 block text-[var(--text-body-sm-size)] font-semibold text-[var(--text-primary)]",
        className,
      )}
      {...props}
    >
      {children}
      {required ? (
        <span className="ml-0.5 text-[var(--danger)]" aria-hidden="true">
          *
        </span>
      ) : null}
    </label>
  );
}
