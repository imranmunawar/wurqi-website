import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { FaqSection } from "@/components/marketing/FaqSection";
import { PageHero } from "@/components/marketing/PageHero";
import { ProductDashboard } from "@/components/product/ProductDashboard";
import { StrategyFlow } from "@/components/product/StrategyFlow";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { getRelatedFeatures } from "@/content/platform/features";
import { getRelatedSolutions } from "@/content/solutions/solutions";
import type { Solution } from "@/types";

export type SolutionPageProps = {
  solution: Solution;
};

export function SolutionPage({ solution }: SolutionPageProps) {
  const features = getRelatedFeatures(solution.features);
  const related = getRelatedSolutions(solution.related);

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: solution.title, href: `/solutions/${solution.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <PageHero
        eyebrow={`Solutions · ${solution.audience}`}
        title={solution.title}
        description={solution.description}
        breadcrumbs={crumbs}
        actions={
          <>
            <Button href="/book-demo" size="lg">
              Book a Demo
            </Button>
            <Button href="/platform" variant="outline" size="lg">
              Explore Platform
            </Button>
          </>
        }
      />

      <Section
        eyebrow="Challenges"
        title="What gets in the way"
        description={`Common friction for ${solution.audience.toLowerCase()}.`}
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {solution.challenges.map((challenge) => (
            <li
              key={challenge}
              className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-muted)] px-5 py-4 text-[var(--text-body-size)] text-[var(--text-secondary)]"
            >
              {challenge}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Solution"
        title="How Wurqi helps"
        description="Connect strategy, delivery, collaboration, and visibility in one workspace designed for this audience."
        className="bg-[var(--color-navy-50)]"
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {solution.outcomes.map((outcome) => (
            <li
              key={outcome}
              className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-5 py-4 font-medium text-[var(--text-primary)]"
            >
              {outcome}
            </li>
          ))}
        </ul>
      </Section>

      {features.length > 0 ? (
        <Section
          eyebrow="Features"
          title="Platform capabilities that matter here"
          description="These capabilities support the outcomes above."
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <li key={feature.slug}>
                <Link
                  href={`/platform/${feature.slug}`}
                  className="block h-full rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--color-navy-300)]"
                >
                  <h3 className="text-h4">{feature.title}</h3>
                  <p className="mt-2 text-[var(--text-body-sm-size)] text-[var(--text-secondary)]">
                    {feature.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section
        eyebrow="Workflow"
        title="Strategy → Planning → Execution → Visibility"
        description="A continuous operating rhythm for this audience."
        className="bg-[var(--surface)]"
      >
        <StrategyFlow />
      </Section>

      <Section
        eyebrow="In the product"
        title="Leadership-ready visibility"
        description="Sample dashboard visualization for how progress and risk can appear in Wurqi."
        className="bg-[var(--color-navy-50)]"
      >
        <ProductDashboard className="mx-auto max-w-5xl" />
      </Section>

      <Section
        eyebrow="Benefits"
        title="Outcomes you can expect"
        description="Illustrative outcomes based on how organizations use connected work management."
      >
        <ol className="space-y-4">
          {solution.outcomes.map((outcome, index) => (
            <li key={outcome} className="flex gap-4">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[var(--accent-muted)] text-[var(--text-body-sm-size)] font-semibold text-[var(--accent)]">
                {index + 1}
              </span>
              <p className="pt-1 text-[var(--text-body-size)] text-[var(--text-secondary)]">
                {outcome}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section
        eyebrow="Customer story"
        title="Illustrative scenario"
        description="Placeholder for a future customer story. This is not a real testimonial."
        className="bg-[var(--surface-muted)]"
      >
        <blockquote className="max-w-3xl border-l-2 border-[var(--accent)] pl-6">
          <p className="text-[var(--text-body-lg-size)] leading-relaxed text-[var(--text-primary)]">
            “We needed one place where strategy and delivery finally met —
            without another layer of status meetings.”
          </p>
          <footer className="mt-4 text-[var(--text-body-sm-size)] text-[var(--text-muted)]">
            Illustrative leadership quote (not a real customer)
          </footer>
        </blockquote>
        <div className="mt-[var(--stack-gap-lg)]">
          <Button href="/resources/case-studies" variant="outline">
            Browse illustrative case studies
          </Button>
        </div>
      </Section>

      {related.length > 0 ? (
        <Section eyebrow="Related solutions" title="Explore adjacent audiences">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/solutions/${item.slug}`}
                  className="block h-full rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--color-navy-300)]"
                >
                  <h3 className="text-h4">{item.title}</h3>
                  <p className="mt-2 text-[var(--text-body-sm-size)] text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {solution.faq.length > 0 ? (
        <FaqSection faqs={solution.faq} title={`${solution.title} FAQ`} />
      ) : null}

      <CtaBanner
        title={`See Wurqi for ${solution.shortTitle ?? solution.title}`}
        description="Book a demo tailored to your team’s operating model and priorities."
        primaryCta={{ label: "Book a Demo", href: "/book-demo" }}
        secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
      />
    </>
  );
}
