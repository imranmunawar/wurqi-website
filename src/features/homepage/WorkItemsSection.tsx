import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { WorkItemGraph } from "@/components/product/WorkItemGraph";

export function WorkItemsSection() {
  return (
    <Section
      id="work-items"
      eyebrow="Work structure"
      title="Every work item type in one connected graph"
      description="Objectives, projects, tasks, risks, milestones, and more — linked so teams and leaders share the same picture of progress."
      className="relative overflow-hidden bg-[linear-gradient(180deg,var(--color-navy-50)_0%,var(--background)_100%)]"
    >
      <Reveal>
        <WorkItemGraph />
      </Reveal>
    </Section>
  );
}
