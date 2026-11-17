import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export type SiteLogoProps = {
  /** Light chrome uses logo-on-light; dark chrome uses logo.png */
  variant?: "light" | "dark";
  /** Pass `false` to render the image without a link */
  href?: string | false;
  className?: string;
  priority?: boolean;
};

export function SiteLogo({
  variant = "light",
  href = "/",
  className,
  priority = false,
}: SiteLogoProps) {
  const src =
    variant === "dark" ? siteConfig.logos.default : siteConfig.logos.onLight;

  const image = (
    <Image
      src={src}
      alt={siteConfig.name}
      width={855}
      height={299}
      priority={priority}
      className="h-8 w-auto md:h-9"
    />
  );

  if (href === false) {
    return (
      <span className={cn("inline-flex items-center", className)}>{image}</span>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      {image}
    </Link>
  );
}
