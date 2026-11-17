import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { EcosystemDiagram } from "@/components/product/EcosystemDiagram";
import { homepageSections } from "@/content/homepage";

const solution = homepageSections.find((section) => section.id === "solution");

export function SolutionSection() {
  return (
    <Section
      id="solution"
      eyebrow={solution?.eyebrow}
      title={solution?.title}
      description={solution?.description}
      align="center"
      className="relative overflow-hidden bg-[linear-gradient(180deg,var(--color-navy-50)_0%,var(--accent-muted)_48%,var(--background)_100%)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 surface-grid opacity-50"
      />
      <Reveal className="relative">
        <EcosystemDiagram className="mx-auto max-w-3xl shadow-[var(--shadow-md)]" />
      </Reveal>
    </Section>
  );
}
