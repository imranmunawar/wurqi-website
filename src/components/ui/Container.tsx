import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerSize = "default" | "wide" | "narrow";

const sizeClass: Record<ContainerSize, string> = {
  default: "container-site",
  wide: "container-wide",
  narrow: "container-narrow",
};

export type ContainerProps = {
  as?: ElementType;
  size?: ContainerSize;
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>;

export function Container({
  as: Comp = "div",
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Comp className={cn(sizeClass[size], className)} {...props}>
      {children}
    </Comp>
  );
}
