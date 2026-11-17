import Link from "next/link";
import { siteConfig } from "@/config/site";
import { footerNavigation } from "@/config/navigation";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { SiteLogo } from "@/components/layout/SiteLogo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--color-navy-950)] text-[var(--text-inverse)]">
      <Container size="wide" className="section-y">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)] lg:gap-16">
          <div>
            <SiteLogo variant="dark" />
            <p className="mt-4 max-w-sm text-[var(--text-body-sm-size)] leading-relaxed text-[var(--color-navy-300)]">
              {siteConfig.tagline}. {siteConfig.description}
            </p>
            <div className="mt-8 max-w-sm">
              <p className="mb-3 text-[var(--text-body-sm-size)] font-semibold text-[var(--text-inverse)]">
                Stay in the loop
              </p>
              <NewsletterForm source="footer" variant="dark" />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerNavigation.map((section) => (
              <div key={section.title}>
                <p className="text-[var(--text-body-sm-size)] font-semibold tracking-wide text-[var(--text-inverse)]">
                  {section.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-[var(--text-body-sm-size)] text-[var(--color-navy-300)] transition-colors hover:text-[var(--text-inverse)]"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--color-navy-800)] pt-8 text-[var(--text-caption-size)] text-[var(--color-navy-400)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="transition-colors hover:text-[var(--text-inverse)]"
            >
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
