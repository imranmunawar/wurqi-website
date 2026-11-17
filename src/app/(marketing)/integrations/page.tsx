import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { PageHero } from "@/components/marketing/PageHero";
import { integrations } from "@/content/integrations/integrations";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  pageType: "integrations",
  path: "/integrations",
});

const statusLabel = {
  available: "Available",
  beta: "Beta",
  planned: "Planned",
} as const;

export default function IntegrationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Integrations"
        title="Fits the tools your teams already use"
        description="Connect collaboration and productivity workflows — including Microsoft Teams, Microsoft 365, Outlook, and Zoom — while keeping work context centralized in Wurqi."
        actions={
          <Button href="/book-demo" size="lg">
            Book a Demo
          </Button>
        }
      />

      <Section
        eyebrow="Catalog"
        title="Integration overview"
        description="Status reflects publicly discussed capabilities. Detailed integration pages can expand over time."
      >
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item) => (
            <li
              key={item.slug}
              className="rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-h4">{item.name}</h2>
                <Badge>{statusLabel[item.status]}</Badge>
              </div>
              <p className="mt-3 text-[var(--text-body-sm-size)] leading-relaxed text-[var(--text-secondary)]">
                {item.description}
              </p>
              <p className="text-caption mt-4 capitalize text-[var(--text-muted)]">
                {item.category}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner
        title="Need a specific integration?"
        description="Talk with sales about your stack, identity requirements, and API needs."
        primaryCta={{ label: "Talk to Sales", href: "/contact" }}
        secondaryCta={{ label: "Book a Demo", href: "/book-demo" }}
      />
    </>
  );
}
