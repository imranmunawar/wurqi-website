import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { PageHero } from "@/components/marketing/PageHero";
import { caseStudies } from "@/content/case-studies/studies";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  pageType: "caseStudy",
  path: "/resources/case-studies",
  title: "Case Studies — Wurqi",
  description:
    "Illustrative examples of how organizations use Wurqi to improve visibility and delivery.",
});

export default function CaseStudiesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Case studies"
        description="Illustrative scenarios for layout and SEO structure. These are not real customer stories."
      />

      <Section>
        <ul className="grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <li key={study.slug}>
              <article className="h-full rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-caption font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
                  {study.industry}
                  {study.isIllustrative ? " · Illustrative" : null}
                </p>
                <h2 className="text-h4 mt-3">
                  <Link
                    href={`/resources/case-studies/${study.slug}`}
                    className="hover:text-[var(--accent)]"
                  >
                    {study.title}
                  </Link>
                </h2>
                <p className="mt-2 text-[var(--text-body-sm-size)] text-[var(--text-secondary)]">
                  {study.summary}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner
        title="Explore how Wurqi could fit your teams"
        description="Book a demo or talk with sales about your operating model."
        primaryCta={{ label: "Book a Demo", href: "/book-demo" }}
        secondaryCta={{ label: "Talk to Sales", href: "/contact" }}
      />
    </>
  );
}
