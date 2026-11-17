import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ProductWindow } from "@/components/product/ProductWindow";

export type ProductScreenshotProps = {
  title?: string;
  caption?: string;
  children: ReactNode;
  className?: string;
  framed?: boolean;
};

/** Wrapper for CSS/HTML product visualizations (no real screenshots required). */
export function ProductScreenshot({
  title = "app.wurqi.com",
  caption,
  children,
  className,
  framed = true,
}: ProductScreenshotProps) {
  const content = framed ? (
    <ProductWindow title={title}>{children}</ProductWindow>
  ) : (
    children
  );

  return (
    <figure className={cn("w-full", className)}>
      {content}
      {caption ? (
        <figcaption className="text-caption mt-3 text-center">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
