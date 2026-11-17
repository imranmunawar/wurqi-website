import type { Metadata } from "next";
import { PageHero } from "@/components/marketing/PageHero";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { PricingToggle } from "@/features/pricing/PricingToggle";
import { Section } from "@/components/ui/Section";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  pageType: "pricing",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Choose the plan that fits how you work"
        description="Freemium with module and user limits, per-user pricing, per-team packaging, or a custom enterprise plan."
      />

      <Section spaced containerSize="wide">
        <PricingToggle />
      </Section>

      <CtaBanner
        title="Need help choosing a plan?"
        description="Book a demo or talk to sales about Freemium limits, seat pricing, team packages, or a custom enterprise agreement."
        primaryCta={{ label: "Talk to Sales", href: "/contact" }}
        secondaryCta={{ label: "Book a Demo", href: "/book-demo" }}
      />
    </>
  );
}
