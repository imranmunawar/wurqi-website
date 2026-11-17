import type { Metadata } from "next";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { FaqSection } from "@/components/marketing/FaqSection";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  HeroSection,
  SocialProofSection,
  ProblemSection,
  SolutionSection,
  StrategyExecutionSection,
  FeatureShowcase,
  WorkItemsSection,
  VisibilitySection,
  CollaborationSection,
  SolutionsPreview,
} from "@/features/homepage";
import { homepage, homepageFaqs } from "@/content/homepage";
import { createPageMetadata } from "@/lib/seo/metadata";
import { softwareApplicationJsonLd } from "@/lib/seo/structured-data";

export const metadata: Metadata = createPageMetadata({
  pageType: "home",
  path: "/",
});

export default function HomePage() {
  const cta = homepage.sections.find((section) => section.id === "cta");

  return (
    <>
      <StructuredData data={softwareApplicationJsonLd()} />
      <HeroSection />
      <SocialProofSection />
      <ProblemSection />
      <SolutionSection />
      <StrategyExecutionSection />
      <FeatureShowcase />
      <WorkItemsSection />
      <VisibilitySection />
      <CollaborationSection />
      <SolutionsPreview />
      <FaqSection faqs={homepageFaqs} />
      <CtaBanner
        eyebrow={cta?.eyebrow}
        title={cta?.title ?? "See Wurqi with your work in mind"}
        description={cta?.description}
        primaryCta={
          cta?.cta ?? { label: "Book a Demo", href: "/book-demo" }
        }
        secondaryCta={{ label: "Explore Platform", href: "/platform" }}
      />
    </>
  );
}
