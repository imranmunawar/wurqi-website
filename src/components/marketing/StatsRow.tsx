import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/Section";

export type StatItem = {
  value: string;
  label: string;
  hint?: string;
};

export type StatsRowProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  stats: StatItem[];
  className?: string;
};

export function StatsRow({
  eyebrow,
  title,
  description,
  stats,
  className,
}: StatsRowProps) {
  return (
    <Section
      eyebrow={eyebrow}
      title={title}
      description={description}
      align={title ? "center" : "left"}
      className={className}
      headerClassName={title ? undefined : "mb-0"}
      spaced={Boolean(title || eyebrow || description)}
    >
      <dl
        className={cn(
          "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
          !title && !eyebrow && !description && "section-y",
        )}
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <p className="text-[clamp(2rem,3vw,2.75rem)] font-semibold tracking-tight text-[var(--color-navy-950)]">
                {stat.value}
              </p>
              <p className="mt-1 text-[var(--text-body-sm-size)] font-semibold text-[var(--text-primary)]">
                {stat.label}
              </p>
              {stat.hint ? (
                <p className="text-caption mt-1">{stat.hint}</p>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
