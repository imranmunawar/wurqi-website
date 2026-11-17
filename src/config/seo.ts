import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { PageSeoConfig, SeoPageType } from "@/types";

const defaultOgImage = "/og/default.png";

/** Centralized default SEO copy per page type. Paths are templates where noted. */
export const seoDefaults: Record<SeoPageType, Omit<PageSeoConfig, "path">> = {
  home: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    keywords: [
      "work management",
      "enterprise project management",
      "OKRs",
      "portfolio management",
      "workflow management",
    ],
  },
  platform: {
    title: `Platform — ${siteConfig.name}`,
    description:
      "Explore Wurqi’s connected work management platform: goals, projects, portfolios, workflows, collaboration, dashboards, and risk.",
    keywords: ["work management platform", "enterprise software"],
  },
  feature: {
    title: `Features — ${siteConfig.name}`,
    description:
      "Deep-dive into Wurqi capabilities that connect strategy to everyday execution.",
  },
  solution: {
    title: `Solutions — ${siteConfig.name}`,
    description:
      "Wurqi solutions for enterprise, PMO, operations, project teams, and leadership.",
  },
  pricing: {
    title: `Pricing — ${siteConfig.name}`,
    description:
      "Wurqi pricing: Freemium with module and user limits, per-user plans, per-team packages, and custom enterprise pricing.",
  },
  integrations: {
    title: `Integrations — ${siteConfig.name}`,
    description:
      "Connect Wurqi with Microsoft Teams, Microsoft 365, Outlook, Zoom, identity providers, and APIs.",
  },
  blog: {
    title: `Blog — ${siteConfig.name}`,
    description:
      "Insights on work management, organizational visibility, and connecting strategy to execution.",
  },
  blogPost: {
    title: `Article — ${siteConfig.name}`,
    description: siteConfig.description,
    type: "article",
  },
  caseStudy: {
    title: `Case Studies — ${siteConfig.name}`,
    description:
      "Illustrative examples of how organizations use Wurqi to improve visibility and delivery.",
  },
  landing: {
    title: siteConfig.name,
    description: siteConfig.description,
  },
  contact: {
    title: `Contact — ${siteConfig.name}`,
    description: "Get in touch with the Wurqi team.",
  },
  demo: {
    title: `Request a Demo — ${siteConfig.name}`,
    description:
      "See how Wurqi connects goals, projects, and teams in one workspace. Request a personalized demo.",
  },
  legal: {
    title: `Legal — ${siteConfig.name}`,
    description: "Legal information for Wurqi.",
    noIndex: false,
  },
};

export type BuildMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
  ogImage?: string;
  type?: "website" | "article";
  pageType?: SeoPageType;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

function absoluteUrl(path = "/"): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized === "/" ? "" : normalized}`;
}

/**
 * Build a Next.js Metadata object from centralized SEO defaults + page overrides.
 */
export function buildMetadata(options: BuildMetadataOptions = {}): Metadata {
  const pageType = options.pageType ?? "home";
  const defaults = seoDefaults[pageType];

  const title = options.title ?? defaults.title;
  const description = options.description ?? defaults.description;
  const path = options.path ?? "/";
  const keywords = options.keywords ?? defaults.keywords;
  const noIndex = options.noIndex ?? defaults.noIndex ?? false;
  const ogImage = options.ogImage ?? defaults.ogImage ?? defaultOgImage;
  const type = options.type ?? defaults.type ?? "website";
  const canonical = absoluteUrl(path);
  const imageUrl = ogImage.startsWith("http")
    ? ogImage
    : absoluteUrl(ogImage);

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_US",
      type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === "article"
        ? {
            publishedTime: options.publishedTime,
            modifiedTime: options.modifiedTime,
            authors: options.authors,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export function buildTitleTemplate(pageTitle: string): string {
  if (pageTitle.includes(siteConfig.name)) return pageTitle;
  return `${pageTitle} | ${siteConfig.name}`;
}
