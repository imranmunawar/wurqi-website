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
import type { LandingPage as LandingPageContent } from "@/types";

export type LandingPageProps = {
  page: LandingPageContent;
};

export function LandingPage({ page }: LandingPageProps) {
  const features = getRelatedFeatures(page.relatedFeatures ?? []);
  const solutions = getRelatedSolutions(page.relatedSolutions ?? []);

  const crumbs = [
    { name: "Home", href: "/" },
    { name: page.title, href: `/${page.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <PageHero
        title={page.headline}
        description={page.subheadline}
        breadcrumbs={crumbs}
        className="relative overflow-hidden bg-[radial-gradient(800px_420px_at_20%_-20%,rgb(51_102_255_/0.14),transparent_55%),linear-gradient(180deg,var(--accent-muted)_0%,var(--surface)_65%)]"
        actions={
          <>
            <Button href={page.primaryCta.href} size="lg">
              {page.primaryCta.label}
            </Button>
            {page.secondaryCta ? (
              <Button href={page.secondaryCta.href} variant="outline" size="lg">
                {page.secondaryCta.label}
              </Button>
            ) : null}
          </>
        }
      />

      <Section
        eyebrow="Why it matters"
        title={page.title}
        description={page.description}
      >
        <ProductDashboard compact className="mx-auto max-w-4xl" />
      </Section>

      {features.length > 0 ? (
        <Section
          eyebrow="Related capabilities"
          title="Platform features for this intent"
          className="bg-[var(--color-navy-50)]"
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <li key={feature.slug}>
                <Link
                  href={`/platform/${feature.slug}`}
                  className="block h-full rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-5 hover:shadow-[var(--shadow-md)]"
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
        eyebrow="How it works"
        title="From strategy to execution"
        description="Wurqi connects the full path so teams and leaders share one operating picture."
      >
        <StrategyFlow />
      </Section>

      {solutions.length > 0 ? (
        <Section
          eyebrow="Solutions"
          title="Who this is for"
          className="bg-[var(--surface)]"
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <li key={solution.slug}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="block h-full rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-muted)] p-5"
                >
                  <h3 className="text-h4">{solution.title}</h3>
                  <p className="mt-2 text-[var(--text-body-sm-size)] text-[var(--text-secondary)]">
                    {solution.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {page.faq?.length ? <FaqSection faqs={page.faq} /> : null}

      <CtaBanner
        title="See Wurqi with your use case"
        description={page.subheadline}
        primaryCta={page.primaryCta}
        secondaryCta={page.secondaryCta}
      />
    </>
  );
}
