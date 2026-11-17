/**
 * Shared domain types for the Wurqi marketing site.
 * Content modules and UI consume these — keep them KISS and stable.
 */

export type FAQ = {
  question: string;
  answer: string;
};

export type NavItem = {
  title: string;
  href: string;
  description?: string;
  icon?: string;
  children?: NavItem[];
  external?: boolean;
};

export type NavSection = {
  title: string;
  href?: string;
  items: NavItem[];
};

export type Feature = {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  benefits: string[];
  capabilities: string[];
  faq: FAQ[];
  related: string[];
  icon?: string;
};

export type Solution = {
  slug: string;
  title: string;
  shortTitle?: string;
  description: string;
  metaTitle?: string;
  metaDescription?: string;
  audience: string;
  challenges: string[];
  outcomes: string[];
  features: string[];
  faq: FAQ[];
  related: string[];
  icon?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  metaTitle?: string;
  metaDescription?: string;
  /** Marks sample / illustrative marketing content */
  isSample: boolean;
  coverImage?: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  /** Placeholder customer label — never a claimed real customer */
  customerLabel: string;
  challenge: string;
  solution: string;
  results: string[];
  quote?: {
    text: string;
    attribution: string;
  };
  relatedFeatures: string[];
  /** Must be true for illustrative placeholders */
  isIllustrative: boolean;
  metaTitle?: string;
  metaDescription?: string;
};

export type IntegrationStatus = "available" | "planned" | "beta";

export type Integration = {
  slug: string;
  name: string;
  description: string;
  category: "communication" | "productivity" | "identity" | "platform";
  status: IntegrationStatus;
  href?: string;
  icon?: string;
};

export type PricingBillingInterval = "monthly" | "annual";

export type PricingBillingModel =
  | "freemium"
  | "per-user"
  | "per-team"
  | "custom";

export type PricingTier = {
  id: string;
  name: string;
  description: string;
  billingModel: PricingBillingModel;
  /** Display price label — amounts live in config and can be updated anytime */
  price: {
    monthly: string;
    annual: string;
  };
  /** Shown under the price, e.g. "per user / month" */
  priceUnit?: {
    monthly: string;
    annual: string;
  };
  /** Section label above the feature list */
  featuresHeading?: string;
  cta: {
    label: string;
    href: string;
  };
  highlighted?: boolean;
  features: string[];
  /** Hard package limits (modules, seats, etc.) */
  limits?: string[];
  modulesIncluded?: string[];
  modulesExcluded?: string[];
};

export type LandingPage = {
  slug: string;
  title: string;
  headline: string;
  subheadline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords?: string[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  relatedFeatures?: string[];
  relatedSolutions?: string[];
  faq?: FAQ[];
};

export type SeoPageType =
  | "home"
  | "platform"
  | "feature"
  | "solution"
  | "pricing"
  | "integrations"
  | "blog"
  | "blogPost"
  | "caseStudy"
  | "landing"
  | "contact"
  | "demo"
  | "legal";

export type PageSeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noIndex?: boolean;
  ogImage?: string;
  type?: "website" | "article";
};

export type HomepageSection = {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  cta?: { label: string; href: string };
};

export type AnalyticsEvent = {
  name: string;
  properties?: Record<string, string | number | boolean | null | undefined>;
};

export type LeadPayload = {
  type: "contact" | "demo" | "newsletter";
  email: string;
  name?: string;
  company?: string;
  phone?: string;
  message?: string;
  source?: string;
  metadata?: Record<string, string>;
};

export type LeadResult = {
  ok: boolean;
  id?: string;
  error?: string;
};

export type BreadcrumbItem = {
  name: string;
  href: string;
};
