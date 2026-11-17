import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { StrategyFlow } from "@/components/product/StrategyFlow";
import { homepageSections } from "@/content/homepage";

const strategy = homepageSections.find((section) => section.id === "strategy");

export function StrategyExecutionSection() {
  return (
    <Section
      id="strategy"
      eyebrow={strategy?.eyebrow}
      title={strategy?.title}
      description={strategy?.description}
      className="bg-[var(--surface)]"
    >
      <Reveal>
        <StrategyFlow />
      </Reveal>
    </Section>
  );
}
