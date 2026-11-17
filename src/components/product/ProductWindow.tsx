import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ProductWindowProps = {
  title?: string;
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

/** Browser chrome frame for product visualizations. */
export function ProductWindow({
  title = "Wurqi",
  children,
  className,
  ...props
}: ProductWindowProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-lg)]",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-3 border-b border-[var(--border)] bg-[linear-gradient(180deg,#ffffff_0%,#f4f7fb_100%)] px-4 py-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-[#ff5f57] shadow-[inset_0_-0.5px_0_rgb(0_0_0_/0.15)]" />
          <span className="size-2.5 rounded-full bg-[#febc2e] shadow-[inset_0_-0.5px_0_rgb(0_0_0_/0.12)]" />
          <span className="size-2.5 rounded-full bg-[#28c840] shadow-[inset_0_-0.5px_0_rgb(0_0_0_/0.12)]" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-1.5 text-center text-[var(--text-caption-size)] font-medium text-[var(--text-muted)] shadow-[var(--shadow-xs)]">
            {title}
          </div>
        </div>
      </div>
      <div className="bg-[var(--surface)]">{children}</div>
    </div>
  );
}
