import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { PageHero } from "@/components/marketing/PageHero";
import { aboutContent } from "@/content/about/about";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  pageType: "contact",
  path: "/about",
  title: "About — Wurqi",
  description: aboutContent.hero.description,
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutContent.hero.eyebrow}
        title={aboutContent.hero.title}
        description={aboutContent.hero.description}
      />

      <Section
        eyebrow={aboutContent.mission.eyebrow}
        title={aboutContent.mission.title}
        description={aboutContent.mission.description}
      />

      <Section
        eyebrow="Principles"
        title="What guides the product"
        className="bg-[var(--color-navy-50)]"
      >
        <ul className="grid gap-4 sm:grid-cols-3">
          {aboutContent.values.map((value) => (
            <li
              key={value.title}
              className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <h2 className="text-h4">{value.title}</h2>
              <p className="mt-2 text-[var(--text-body-sm-size)] text-[var(--text-secondary)]">
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner
        title={aboutContent.cta.title}
        description={aboutContent.cta.description}
        primaryCta={aboutContent.cta.primaryCta}
        secondaryCta={aboutContent.cta.secondaryCta}
      />
    </>
  );
}
