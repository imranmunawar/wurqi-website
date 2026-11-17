import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type NavLinkProps = ComponentProps<typeof Link> & {
  active?: boolean;
  external?: boolean;
};

export function NavLink({
  href,
  active,
  external,
  className,
  children,
  ...props
}: NavLinkProps) {
  const classes = cn(
    "text-[var(--text-body-sm-size)] font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]",
    active && "text-[var(--accent)]",
    className,
  );

  if (external || String(href).startsWith("http")) {
    return (
      <a
        href={String(href)}
        className={classes}
        rel="noopener noreferrer"
        target="_blank"
        {...(props as ComponentProps<"a">)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
