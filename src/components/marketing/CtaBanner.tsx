import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export type CtaBannerProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  className?: string;
};

export function CtaBanner({
  eyebrow = "Next step",
  title,
  description,
  primaryCta,
  secondaryCta,
  className,
}: CtaBannerProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-[var(--color-navy-950)] section-y",
        className,
      )}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_480px_at_85%_0%,rgb(51_102_255_/0.38),transparent_55%),radial-gradient(700px_360px_at_5%_100%,rgb(92_133_255_/0.18),transparent_50%)]" />
        <div className="surface-grid absolute inset-0 opacity-30 invert" />
      </div>
      <Container className="relative max-w-3xl">
        {eyebrow ? (
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-caption font-semibold uppercase tracking-[0.16em] text-[var(--color-brand-300)] backdrop-blur-sm">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-[var(--color-brand-300)]"
            />
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-h2 text-balance text-[var(--text-inverse)]">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-[var(--text-body-lg-size)] leading-relaxed text-[var(--color-navy-300)]">
            {description}
          </p>
        ) : null}
        <div className="mt-9 flex flex-wrap gap-3">
          <Button href={primaryCta.href} variant="primary" size="lg">
            {primaryCta.label}
          </Button>
          {secondaryCta ? (
            <Button
              href={secondaryCta.href}
              variant="outline"
              size="lg"
              className="border-white/25 bg-transparent text-[var(--text-inverse)] hover:border-white/45 hover:bg-white/5"
            >
              {secondaryCta.label}
            </Button>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
