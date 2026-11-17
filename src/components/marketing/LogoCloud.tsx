import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

export type LogoCloudProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  /** Number of placeholder logo slots */
  count?: number;
  className?: string;
};

/**
 * Development placeholders only — do not invent real customer logos.
 */
export function LogoCloud({
  eyebrow = "Trusted by teams",
  title = "Built for enterprise work",
  description = "Placeholder logos for layout development. Replace with approved customer marks before launch.",
  count = 6,
  className,
}: LogoCloudProps) {
  const logos = Array.from({ length: count }, (_, index) => ({
    id: `placeholder-logo-${index + 1}`,
    label: `Enterprise ${index + 1}`,
  }));

  return (
    <Section
      eyebrow={eyebrow}
      title={title}
      description={description}
      align="center"
      className={className}
    >
      <Reveal>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <li
              key={logo.id}
              className={cn(
                "group flex h-[4.5rem] items-center justify-center rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)]/80 px-3 shadow-[var(--shadow-xs)] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-[var(--duration-normal)] hover:-translate-y-0.5 hover:border-[var(--color-brand-200)] hover:shadow-[var(--shadow-md)]",
              )}
            >
              <span className="text-center font-display text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)] transition-colors group-hover:text-[var(--text-secondary)]">
                {logo.label}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
