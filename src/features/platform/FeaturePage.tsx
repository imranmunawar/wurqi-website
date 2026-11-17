import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { FaqSection } from "@/components/marketing/FaqSection";
import { PageHero } from "@/components/marketing/PageHero";
import { ProductDashboard } from "@/components/product/ProductDashboard";
import { StrategyFlow } from "@/components/product/StrategyFlow";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import {
  getRelatedFeatures,
} from "@/content/platform/features";
import type { Feature } from "@/types";

export type FeaturePageProps = {
  feature: Feature;
};

export function FeaturePage({ feature }: FeaturePageProps) {
  const related = getRelatedFeatures(feature.related);

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Platform", href: "/platform" },
    { name: feature.title, href: `/platform/${feature.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <PageHero
        eyebrow="Platform"
        title={feature.title}
        description={feature.description}
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
        eyebrow="The challenge"
        title={`Why teams need ${feature.shortTitle ?? feature.title}`}
        description="Disconnected tools create blind spots between strategy, delivery, and leadership visibility. Wurqi keeps this capability connected to the rest of the work system."
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {feature.benefits.slice(0, 4).map((benefit) => (
            <li
              key={benefit}
              className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-muted)] px-5 py-4 text-[var(--text-body-size)] text-[var(--text-secondary)]"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="The Wurqi approach"
        title="Connected by design"
        description={feature.description}
        className="bg-[var(--color-navy-50)]"
      >
        <ProductDashboard compact className="mx-auto max-w-4xl" />
      </Section>

      <Section
        eyebrow="Capabilities"
        title="What you can do"
        description="Core capabilities included with this part of the platform."
      >
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {feature.capabilities.map((capability) => (
            <li
              key={capability}
              className="rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text-body-sm-size)] font-medium"
            >
              {capability}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="How it works"
        title="From strategy to execution"
        description="This capability sits inside Wurqi’s connected flow — not as a siloed tool."
        className="bg-[var(--surface)]"
      >
        <StrategyFlow />
      </Section>

      <Section
        eyebrow="Benefits"
        title="Outcomes teams care about"
        description="What changes when this capability is connected to goals, projects, and visibility."
      >
        <ol className="grid gap-4 sm:grid-cols-2">
          {feature.benefits.map((benefit, index) => (
            <li
              key={benefit}
              className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-muted)] p-5"
            >
              <span className="text-caption font-semibold text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="pt-1 text-[var(--text-body-size)] text-[var(--text-secondary)]">
                {benefit}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {related.length > 0 ? (
        <Section
          eyebrow="Related"
          title="Explore related capabilities"
          description="Keep going through the connected platform."
          className="bg-[var(--color-navy-50)]"
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/platform/${item.slug}`}
                  className="block h-full rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-5 transition-shadow hover:shadow-[var(--shadow-md)]"
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

      {feature.faq?.length ? <FaqSection faqs={feature.faq} /> : null}

      <CtaBanner
        title={`See ${feature.shortTitle ?? feature.title} in action`}
        description="Book a demo to explore this capability inside Wurqi’s connected workspace."
        primaryCta={{ label: "Book a Demo", href: "/book-demo" }}
        secondaryCta={{ label: "Explore Platform", href: "/platform" }}
      />
    </>
  );
}
