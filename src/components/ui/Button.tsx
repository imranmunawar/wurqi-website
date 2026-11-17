import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "!bg-[#3366ff] !text-white shadow-[0_1px_0_rgb(255_255_255_/0.22)_inset,0_8px_20px_-8px_rgb(51_102_255_/0.55)] hover:!bg-[#2a54eb] hover:!text-white hover:-translate-y-px hover:shadow-[0_1px_0_rgb(255_255_255_/0.22)_inset,0_12px_24px_-8px_rgb(51_102_255_/0.6)] [&_svg]:!text-white",
  secondary:
    "!bg-[var(--color-navy-900)] !text-white shadow-[0_1px_0_rgb(255_255_255_/0.08)_inset,var(--shadow-sm)] hover:!bg-[var(--color-navy-800)] hover:!text-white hover:-translate-y-px [&_svg]:!text-white",
  ghost:
    "bg-transparent text-[var(--text-primary)] hover:bg-[var(--accent-muted)]",
  outline:
    "border border-[var(--color-brand-200)] bg-[var(--surface)]/90 text-[var(--text-primary)] shadow-[var(--shadow-xs)] backdrop-blur-sm hover:border-[var(--accent)] hover:bg-[var(--accent-muted)] hover:-translate-y-px hover:shadow-[var(--shadow-sm)]",
} as const;

const sizes = {
  sm: "h-9 px-3.5 text-[var(--text-body-sm-size)] rounded-[var(--radius-md)]",
  md: "h-11 px-5 text-[var(--text-body-sm-size)] rounded-[var(--radius-md)]",
  lg: "h-12 px-7 text-[var(--text-body-size)] rounded-[var(--radius-lg)]",
} as const;

export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;

type SharedProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = SharedProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function buttonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(
    "inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-[background-color,border-color,color,box-shadow,transform] duration-[var(--duration-fast)] ease-[var(--ease-emphasized)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] disabled:pointer-events-none disabled:opacity-50 disabled:hover:translate-y-0",
    variant === "primary" && "btn-primary",
    variant === "secondary" && "btn-secondary",
    variants[variant],
    sizes[size],
    className,
  );
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = buttonClasses(variant, size, className);

  if ("href" in props && props.href) {
    const { href, external, ...linkRest } = rest as Omit<
      ButtonAsLink,
      "variant" | "size" | "className" | "children"
    >;

    if (external || href.startsWith("http")) {
      return (
        <a
          href={href}
          className={classes}
          rel="noopener noreferrer"
          target={external || href.startsWith("http") ? "_blank" : undefined}
          {...linkRest}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as Omit<
    ButtonAsButton,
    "variant" | "size" | "className" | "children"
  >;

  return (
    <button type="button" className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
