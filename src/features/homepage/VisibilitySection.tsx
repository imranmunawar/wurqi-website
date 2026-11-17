import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductDashboard } from "@/components/product/ProductDashboard";

export function VisibilitySection() {
  return (
    <Section
      id="visibility"
      eyebrow="Executive visibility"
      title="See portfolio health without the status chase"
      description="Dashboards roll up delivery signal so leaders can act on progress, risk, and capacity — not last week’s slides."
      className="relative overflow-hidden bg-[var(--surface)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgb(51_102_255_/0.1),transparent_65%)]"
      />
      <Reveal className="product-stage relative">
        <ProductDashboard className="relative z-[1] mx-auto max-w-5xl shadow-[var(--shadow-xl)]" />
      </Reveal>
    </Section>
  );
}
