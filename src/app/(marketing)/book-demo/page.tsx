import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { DemoRequestForm } from "@/components/forms/DemoRequestForm";
import { createPageMetadata } from "@/lib/seo/metadata";

type Props = {
  searchParams: Promise<{ plan?: string }>;
};

export const metadata: Metadata = createPageMetadata({
  pageType: "demo",
  path: "/book-demo",
  title: "Book a Demo — Wurqi",
  description:
    "See how Wurqi connects goals, projects, and teams in one workspace. Request a personalized demo.",
});

export default async function BookDemoPage({ searchParams }: Props) {
  const { plan } = await searchParams;

  return (
    <section className="section-y">
      <Container size="narrow">
        <p className="text-caption font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Book a Demo
        </p>
        <h1 className="text-h1 mt-3 text-balance">
          See Wurqi with your work in mind
        </h1>
        <p className="text-body-lg mt-4 text-pretty text-[var(--text-secondary)]">
          Request a personalized walkthrough of how Wurqi connects strategy,
          planning, execution, and visibility for your teams.
        </p>
        <div className="mt-[var(--stack-gap-lg)]">
          <DemoRequestForm source="book-demo-page" plan={plan} />
        </div>
      </Container>
    </section>
  );
}
