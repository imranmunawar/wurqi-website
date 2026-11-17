import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { PageHero } from "@/components/marketing/PageHero";
import { platformFeatures } from "@/content/platform/features";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  pageType: "platform",
  path: "/platform",
  title: "Platform — Wurqi",
  description:
    "Explore Wurqi’s connected work management platform: goals, projects, portfolios, workflows, collaboration, dashboards, and risk.",
});

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="One connected workspace for strategy and execution"
        description="Manage goals, portfolios, projects, workflows, collaboration, dashboards, and risk in a connected system — not a patchwork of tools."
        actions={
          <>
            <Button href="/book-demo" size="lg">
              Book a Demo
            </Button>
            <Button href="/solutions" variant="outline" size="lg">
              Explore solutions
            </Button>
          </>
        }
      />

      <Section
        eyebrow="Capabilities"
        title="Everything connected to the work that matters"
        description="Deep-dive into each capability, or book a demo to see them working together."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {platformFeatures.map((feature) => (
            <li key={feature.slug}>
              <Link
                href={`/platform/${feature.slug}`}
                className="block h-full rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-[border-color,box-shadow] hover:border-[var(--color-navy-300)] hover:shadow-[var(--shadow-md)]"
              >
                <h2 className="text-h4">{feature.title}</h2>
                <p className="mt-2 text-[var(--text-body-sm-size)] leading-relaxed text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner
        title="See the full platform in action"
        description="Book a personalized demo to explore how Wurqi connects goals, delivery, and visibility."
        primaryCta={{ label: "Book a Demo", href: "/book-demo" }}
        secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
      />
    </>
  );
}
