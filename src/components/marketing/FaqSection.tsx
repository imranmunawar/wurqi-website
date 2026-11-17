import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";
import { StructuredData } from "@/components/seo/StructuredData";
import { faqPageJsonLd } from "@/lib/seo/structured-data";
import type { FAQ } from "@/types";

export type FaqSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  faqs: FAQ[];
  includeJsonLd?: boolean;
  className?: string;
};

export function FaqSection({
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  description = "Quick answers about Wurqi and how teams use the platform.",
  faqs,
  includeJsonLd = true,
  className,
}: FaqSectionProps) {
  return (
    <Section
      eyebrow={eyebrow}
      title={title}
      description={description}
      className={className}
      containerSize="narrow"
    >
      {includeJsonLd && faqs.length > 0 ? (
        <StructuredData data={faqPageJsonLd(faqs)} />
      ) : null}
      <Accordion
        items={faqs.map((faq) => ({
          title: faq.question,
          content: faq.answer,
        }))}
      />
    </Section>
  );
}
