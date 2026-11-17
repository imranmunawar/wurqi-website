import { describe, expect, it } from "vitest";
import { createPageMetadata } from "./metadata";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  organizationJsonLd,
  softwareApplicationJsonLd,
  stringifyJsonLd,
  websiteJsonLd,
} from "./structured-data";

describe("createPageMetadata", () => {
  it("builds title, description, and canonical for a path", () => {
    const metadata = createPageMetadata({
      pageType: "demo",
      path: "/book-demo",
      title: "Request a Demo — Wurqi",
      description: "Book a personalized walkthrough.",
    });

    expect(metadata.title).toBe("Request a Demo — Wurqi");
    expect(metadata.description).toBe("Book a personalized walkthrough.");
    expect(metadata.alternates?.canonical).toBe("https://wurqi.com/book-demo");
    expect(metadata.openGraph?.url).toBe("https://wurqi.com/book-demo");
  });

  it("marks pages as noindex when requested", () => {
    const metadata = createPageMetadata({
      path: "/private",
      noIndex: true,
    });

    expect(metadata.robots).toEqual({ index: false, follow: false });
  });
});

describe("structured data", () => {
  it("builds organization JSON-LD", () => {
    const data = organizationJsonLd();
    expect(data["@type"]).toBe("Organization");
    expect(data.name).toBe("Wurqi");
    expect(data.url).toBe("https://wurqi.com");
  });

  it("builds website JSON-LD with search action", () => {
    const data = websiteJsonLd();
    expect(data["@type"]).toBe("WebSite");
    expect(data.potentialAction).toMatchObject({
      "@type": "SearchAction",
    });
  });

  it("builds software application JSON-LD", () => {
    const data = softwareApplicationJsonLd({
      name: "Wurqi Platform",
      applicationCategory: "BusinessApplication",
    });
    expect(data["@type"]).toBe("SoftwareApplication");
    expect(data.name).toBe("Wurqi Platform");
  });

  it("builds breadcrumb and FAQ JSON-LD", () => {
    const crumbs = breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Platform", href: "/platform" },
    ]);
    expect(crumbs["@type"]).toBe("BreadcrumbList");
    expect(crumbs.itemListElement).toHaveLength(2);

    const faqs = faqPageJsonLd([
      { question: "What is Wurqi?", answer: "An enterprise work management platform." },
    ]);
    expect(faqs["@type"]).toBe("FAQPage");
    expect(faqs.mainEntity).toHaveLength(1);
  });

  it("serializes JSON-LD", () => {
    const raw = stringifyJsonLd({ "@type": "Organization", name: "Wurqi" });
    expect(JSON.parse(raw)).toEqual({ "@type": "Organization", name: "Wurqi" });
  });
});
