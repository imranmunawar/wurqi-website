import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, invalid, rows = 4, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        rows={rows}
        aria-invalid={invalid || undefined}
        className={cn(
          "min-h-28 w-full resize-y rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-3.5 py-3 text-[var(--text-body-size)] text-[var(--text-primary)] shadow-[var(--shadow-xs)] transition-[border-color,box-shadow] duration-[var(--duration-fast)] placeholder:text-[var(--text-muted)] focus-visible:border-[var(--accent)] focus-visible:outline-none focus-visible:shadow-[var(--shadow-focus)] disabled:cursor-not-allowed disabled:bg-[var(--surface-muted)] disabled:opacity-60",
          invalid &&
            "border-[var(--danger)] focus-visible:border-[var(--danger)] focus-visible:shadow-[0_0_0_3px_rgb(185_28_28_/0.2)]",
          className,
        )}
        {...props}
      />
    );
  },
);
