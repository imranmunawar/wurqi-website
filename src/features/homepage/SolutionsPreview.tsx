import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { solutions } from "@/content/solutions/solutions";
import { homepageSections } from "@/content/homepage";

const solutionsSection = homepageSections.find(
  (section) => section.id === "solutions",
);

export function SolutionsPreview() {
  return (
    <Section
      id="solutions"
      eyebrow={solutionsSection?.eyebrow}
      title={solutionsSection?.title}
      description={solutionsSection?.description}
      className="relative overflow-hidden bg-[linear-gradient(180deg,var(--background)_0%,var(--color-navy-50)_50%,var(--surface)_100%)]"
    >
      <Reveal>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <li key={solution.slug}>
              <Link
                href={`/solutions/${solution.slug}`}
                className="card-lift group block h-full rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface)]/95 p-6 shadow-[var(--shadow-xs)] backdrop-blur-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-caption font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
                    {solution.audience}
                  </p>
                  <ArrowUpRight
                    className="size-4 text-[var(--text-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-h4 mt-3 transition-colors group-hover:text-[var(--accent)]">
                  {solution.title}
                </h3>
                <p className="mt-3 text-[var(--text-body-sm-size)] leading-relaxed text-[var(--text-secondary)]">
                  {solution.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>
      <div className="mt-[var(--stack-gap-lg)]">
        <Button href="/solutions" variant="outline">
          {solutionsSection?.cta?.label ?? "Explore solutions"}
        </Button>
      </div>
    </Section>
  );
}
