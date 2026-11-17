import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { PageHero } from "@/components/marketing/PageHero";
import { solutions } from "@/content/solutions/solutions";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  pageType: "solution",
  path: "/solutions",
  title: "Solutions — Wurqi",
  description:
    "Wurqi solutions for enterprise, PMO, operations, project teams, and leadership.",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Built for the way enterprises actually operate"
        description="Whether you lead a PMO, run operations, deliver projects, or set strategy, Wurqi meets your altitude without losing the details."
        actions={
          <Button href="/book-demo" size="lg">
            Book a Demo
          </Button>
        }
      />

      <Section
        eyebrow="Audiences"
        title="Find the solution that matches your role"
        description="Each solution page maps challenges, outcomes, and the platform capabilities that matter most."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <li key={solution.slug}>
              <Link
                href={`/solutions/${solution.slug}`}
                className="block h-full rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-[border-color,box-shadow] hover:border-[var(--color-navy-300)] hover:shadow-[var(--shadow-md)]"
              >
                <p className="text-caption font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
                  {solution.audience}
                </p>
                <h2 className="text-h4 mt-2">{solution.title}</h2>
                <p className="mt-2 text-[var(--text-body-sm-size)] leading-relaxed text-[var(--text-secondary)]">
                  {solution.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner
        title="Not sure where to start?"
        description="Book a demo and we’ll map Wurqi to your operating model."
        primaryCta={{ label: "Book a Demo", href: "/book-demo" }}
        secondaryCta={{ label: "Explore Platform", href: "/platform" }}
      />
    </>
  );
}
