import type { PricingBillingInterval, PricingTier } from "@/types";

/**
 * Subscription packaging for Wurqi.
 * Amounts are configurable — update here when commercial pricing is finalized.
 */
export const pricingConfig = {
  currency: "USD",
  currencySymbol: "$",
  defaultInterval: "annual" as PricingBillingInterval,
  annualDiscountLabel: "Billed yearly · save ~20%",
  footnote:
    "Freemium includes limited modules and seats. Paid plans scale by user or team. Custom packaging is available for enterprise requirements.",
} as const;

export const pricingTiers: PricingTier[] = [
  {
    id: "freemium",
    name: "Freemium",
    description: "Free forever with module and user limits.",
    billingModel: "freemium",
    price: {
      monthly: "Free",
      annual: "Free",
    },
    priceUnit: {
      monthly: "Forever",
      annual: "Forever",
    },
    featuresHeading: "Key features",
    cta: {
      label: "Get started",
      href: "/book-demo?plan=freemium",
    },
    features: [
      "Up to 5 users",
      "Up to 3 active projects",
      "1 workspace",
      "Work Management core",
      "Basic Project Management",
      "Basic Goals tracking",
      "Limited collaboration",
      "Personal dashboard",
      "Limited storage & history",
      "Community support",
    ],
    limits: ["Limited modules", "No SSO / advanced admin"],
  },
  {
    id: "per-user",
    name: "Per User",
    description: "Seat-based pricing for growing teams.",
    billingModel: "per-user",
    price: {
      monthly: "$15",
      annual: "$12",
    },
    priceUnit: {
      monthly: "Per user/month, billed monthly",
      annual: "Per user/month, billed yearly",
    },
    featuresHeading: "Everything in Freemium, plus",
    cta: {
      label: "Get started",
      href: "/book-demo?plan=per-user",
    },
    features: [
      "Minimum 3 users",
      "Unlimited projects",
      "Up to 5 workspaces",
      "Full Project Management",
      "Goals & OKRs",
      "Workflows",
      "Collaboration & notifications",
      "Dashboards & reporting",
      "Integrations starter pack",
      "Standard admin controls",
      "Email support",
    ],
  },
  {
    id: "per-team",
    name: "Per Team",
    description: "Predictable packaging for departments.",
    billingModel: "per-team",
    price: {
      monthly: "$199",
      annual: "$159",
    },
    priceUnit: {
      monthly: "Per team/month, billed monthly",
      annual: "Per team/month, billed yearly",
    },
    featuresHeading: "Everything in Per User, plus",
    highlighted: true,
    cta: {
      label: "Get started",
      href: "/contact?plan=per-team",
    },
    features: [
      "Up to 25 users per team",
      "Additional seats available",
      "Unlimited portfolios",
      "Up to 15 workspaces",
      "Portfolio Management",
      "Risk & issues",
      "Advanced dashboards",
      "Team capacity views",
      "Team-level admin & roles",
      "Priority support",
      "Onboarding workshop",
    ],
  },
  {
    id: "custom",
    name: "Custom",
    description: "Enterprise packaging built around your needs.",
    billingModel: "custom",
    price: {
      monthly: "Custom",
      annual: "Custom",
    },
    priceUnit: {
      monthly: "Get a custom demo",
      annual: "Get a custom demo",
    },
    featuresHeading: "Everything in Per Team, plus",
    cta: {
      label: "Contact sales",
      href: "/contact?plan=custom",
    },
    features: [
      "Unlimited users & teams",
      "Any module combination",
      "SSO / identity options",
      "Custom integrations & API",
      "Advanced governance",
      "Audit & compliance options",
      "Success manager & SLAs",
      "Live onboarding training",
      "Volume & multi-year discounts",
      "Security review",
      "Deployment options",
    ],
  },
];

export function getPricingTiers(): PricingTier[] {
  return pricingTiers;
}

export function getTierById(id: string): PricingTier | undefined {
  return pricingTiers.find((tier) => tier.id === id);
}

export function getDisplayPrice(
  tier: PricingTier,
  interval: PricingBillingInterval,
): string {
  return tier.price[interval];
}

export function getPriceUnit(
  tier: PricingTier,
  interval: PricingBillingInterval,
): string | undefined {
  return tier.priceUnit?.[interval];
}
