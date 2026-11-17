import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/Label";

export type FormFieldProps = {
  id: string;
  label: string;
  required?: boolean;
  description?: string;
  error?: string;
  className?: string;
  children: ReactNode;
};

export function FormField({
  id,
  label,
  required,
  description,
  error,
  className,
  children,
}: FormFieldProps) {
  const descriptionId = description ? `${id}-description` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className={cn("w-full", className)}>
      <Label htmlFor={id} required={required}>
        {label}
      </Label>
      {description ? (
        <p id={descriptionId} className="text-caption mb-2">
          {description}
        </p>
      ) : null}
      {children}
      {error ? (
        <p
          id={errorId}
          role="alert"
          className="mt-1.5 text-[var(--text-body-sm-size)] font-medium text-[var(--danger)]"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Helper to build aria-describedby from optional description/error ids. */
export function fieldDescribedBy(
  id: string,
  options: { description?: string; error?: string },
): string | undefined {
  const parts = [
    options.description ? `${id}-description` : null,
    options.error ? `${id}-error` : null,
  ].filter(Boolean);
  return parts.length ? parts.join(" ") : undefined;
}
