import { siteConfig } from "@/config/site";
import type { BreadcrumbItem, FAQ } from "@/types";

type JsonLd = Record<string, unknown>;

function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized === "/" ? "" : normalized}`;
}

export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.contact.email,
    sameAs: [siteConfig.links.linkedin, siteConfig.links.twitter].filter(
      Boolean,
    ),
    logo: absoluteUrl(siteConfig.logos.onLight),
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${absoluteUrl("/resources/blog")}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function softwareApplicationJsonLd(options?: {
  name?: string;
  description?: string;
  applicationCategory?: string;
  operatingSystem?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: options?.name ?? siteConfig.name,
    applicationCategory:
      options?.applicationCategory ?? "BusinessApplication",
    operatingSystem: options?.operatingSystem ?? "Web",
    description: options?.description ?? siteConfig.description,
    url: siteConfig.url,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free trial available. Enterprise pricing on request.",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function articleJsonLd(options: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt?: string;
  author?: string;
  image?: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: options.title,
    description: options.description,
    url: absoluteUrl(options.path),
    datePublished: options.publishedAt,
    dateModified: options.updatedAt ?? options.publishedAt,
    author: {
      "@type": "Person",
      name: options.author ?? siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl(siteConfig.logos.onLight),
      },
    },
    ...(options.image
      ? {
          image: options.image.startsWith("http")
            ? options.image
            : absoluteUrl(options.image),
        }
      : {}),
    mainEntityOfPage: absoluteUrl(options.path),
  };
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function faqPageJsonLd(faqs: FAQ[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/** Serialize JSON-LD for embedding in a script tag. */
export function stringifyJsonLd(data: JsonLd | JsonLd[]): string {
  return JSON.stringify(data);
}
