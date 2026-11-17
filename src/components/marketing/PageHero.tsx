import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import type { BreadcrumbItem } from "@/types";

export type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: ReactNode;
  children?: ReactNode;
  className?: string;
  containerSize?: "default" | "wide" | "narrow";
  align?: "left" | "center";
};

/**
 * Shared page intro with equal section padding used across marketing pages.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  actions,
  children,
  className,
  containerSize = "default",
  align = "left",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "border-b border-[var(--border)] bg-[var(--surface)]",
        className,
      )}
    >
      <Container size={containerSize} className="section-y">
        {breadcrumbs?.length ? (
          <Breadcrumb items={breadcrumbs} className="mb-[var(--stack-gap)]" />
        ) : null}
        <div className={cn(align === "center" && "mx-auto max-w-3xl text-center")}>
          {eyebrow ? (
            <p className="text-caption font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={cn(
              "text-h1 max-w-3xl text-balance",
              eyebrow ? "mt-3" : null,
              align === "center" && "mx-auto",
            )}
          >
            {title}
          </h1>
          {description ? (
            <p
              className={cn(
                "text-body-lg mt-4 max-w-2xl text-pretty text-[var(--text-secondary)]",
                align === "center" && "mx-auto",
              )}
            >
              {description}
            </p>
          ) : null}
          {actions ? (
            <div
              className={cn(
                "mt-8 flex flex-wrap gap-3",
                align === "center" && "justify-center",
              )}
            >
              {actions}
            </div>
          ) : null}
          {children}
        </div>
      </Container>
    </section>
  );
}
