import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/content/case-studies/studies";
import { getRelatedFeatures } from "@/content/platform/features";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};

  return createPageMetadata({
    pageType: "caseStudy",
    path: `/resources/case-studies/${study.slug}`,
    title: `${study.metaTitle ?? study.title} | ${siteConfig.name}`,
    description: study.metaDescription ?? study.summary,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const relatedFeatures = getRelatedFeatures(study.relatedFeatures);
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Case Studies", href: "/resources/case-studies" },
    { name: study.title, href: `/resources/case-studies/${study.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <header className="border-b border-[var(--border)] bg-[var(--surface)]">
        <Container className="section-y">
          <Breadcrumb items={crumbs} className="mb-8" />
          {study.isIllustrative ? (
            <p className="text-caption mb-3 font-semibold uppercase tracking-[0.12em] text-[var(--warning)]">
              Illustrative scenario — not a real customer story
            </p>
          ) : null}
          <p className="text-caption font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
            {study.customerLabel}
          </p>
          <h1 className="text-h1 mt-3 max-w-3xl text-balance">{study.title}</h1>
          <p className="text-body-lg mt-4 max-w-2xl text-pretty text-[var(--text-secondary)]">
            {study.summary}
          </p>
        </Container>
      </header>

      <Section eyebrow="Challenge" title="The starting point">
        <p className="max-w-3xl text-[var(--text-body-size)] leading-relaxed text-[var(--text-secondary)]">
          {study.challenge}
        </p>
      </Section>

      <Section
        eyebrow="Solution"
        title="How Wurqi could help"
        className="bg-[var(--color-navy-50)]"
      >
        <p className="max-w-3xl text-[var(--text-body-size)] leading-relaxed text-[var(--text-secondary)]">
          {study.solution}
        </p>
      </Section>

      <Section eyebrow="Results" title="Illustrative outcomes">
        <ul className="grid gap-3 sm:grid-cols-2">
          {study.results.map((result) => (
            <li
              key={result}
              className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] px-5 py-4 text-[var(--text-body-size)] text-[var(--text-secondary)]"
            >
              {result}
            </li>
          ))}
        </ul>
      </Section>

      {study.quote ? (
        <Section className="bg-[var(--surface-muted)]">
          <blockquote className="max-w-3xl border-l-2 border-[var(--accent)] pl-6">
            <p className="text-[var(--text-body-lg-size)] leading-relaxed text-[var(--text-primary)]">
              “{study.quote.text}”
            </p>
            <footer className="mt-4 text-[var(--text-body-sm-size)] text-[var(--text-muted)]">
              {study.quote.attribution}
            </footer>
          </blockquote>
        </Section>
      ) : null}

      {relatedFeatures.length > 0 ? (
        <Section eyebrow="Related capabilities" title="Platform features in this scenario">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedFeatures.map((feature) => (
              <li key={feature.slug}>
                <Link
                  href={`/platform/${feature.slug}`}
                  className="block h-full rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--color-navy-300)]"
                >
                  <h2 className="text-h4">{feature.title}</h2>
                  <p className="mt-2 text-[var(--text-body-sm-size)] text-[var(--text-secondary)]">
                    {feature.description}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <CtaBanner
        title="See Wurqi with your work in mind"
        description="Book a demo to explore a connected workspace for goals, delivery, and visibility."
        primaryCta={{ label: "Book a Demo", href: "/book-demo" }}
        secondaryCta={{ label: "Explore Platform", href: "/platform" }}
      />
    </>
  );
}
