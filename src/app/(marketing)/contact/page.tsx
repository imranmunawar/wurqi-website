import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  pageType: "contact",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="section-y">
      <Container size="narrow">
        <p className="text-caption font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
          Contact
        </p>
        <h1 className="text-h1 mt-3 text-balance">Talk with the Wurqi team</h1>
        <p className="text-body-lg mt-4 text-pretty text-[var(--text-secondary)]">
          Questions about plans, security, integrations, or a tailored demo?
          Send a message and we’ll follow up. You can also email{" "}
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="font-semibold text-[var(--text-link)] hover:text-[var(--text-link-hover)]"
          >
            {siteConfig.contact.email}
          </a>
          .
        </p>
        <div className="mt-[var(--stack-gap-lg)]">
          <ContactForm source="contact-page" />
        </div>
      </Container>
    </section>
  );
}
