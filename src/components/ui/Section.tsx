import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

export type SectionProps = {
  as?: ElementType;
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
  containerSize?: "default" | "wide" | "narrow";
  spaced?: boolean;
  headerClassName?: string;
  children?: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

export function Section({
  as: Comp = "section",
  id,
  eyebrow,
  title,
  description,
  align = "left",
  containerSize = "default",
  spaced = true,
  headerClassName,
  children,
  className,
  ...props
}: SectionProps) {
  const hasHeader = Boolean(eyebrow || title || description);

  return (
    <Comp
      id={id}
      className={cn(spaced && "section-y", className)}
      {...props}
    >
      <Container size={containerSize}>
        {hasHeader ? (
          <header
            className={cn(
              "section-header max-w-3xl",
              align === "center" && "mx-auto text-center",
              headerClassName,
            )}
          >
            {eyebrow ? (
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-200)] bg-[var(--accent-muted)]/70 px-3 py-1 text-caption font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                <span
                  aria-hidden="true"
                  className="size-1.5 rounded-full bg-[var(--accent)]"
                />
                {eyebrow}
              </p>
            ) : null}
            {title ? <h2 className="text-h2 text-balance">{title}</h2> : null}
            {description ? (
              <p
                className={cn(
                  "text-body-lg mt-5 text-pretty",
                  align === "center" && "mx-auto max-w-2xl",
                )}
              >
                {description}
              </p>
            ) : null}
          </header>
        ) : null}
        {children}
      </Container>
    </Comp>
  );
}
