import type { Integration } from "@/types";

/**
 * Integration status reflects publicly discussed / shipping capabilities:
 * Outlook add-in and Teams/Zoom collaboration integrations are treated as available;
 * broader Microsoft 365, identity, and API platform work as available or planned.
 */
export const integrations: Integration[] = [
  {
    slug: "microsoft-teams",
    name: "Microsoft Teams",
    description:
      "Keep work updates and collaboration connected with Microsoft Teams so conversations stay close to delivery.",
    category: "communication",
    status: "available",
    href: "/integrations/microsoft-teams",
    icon: "users",
  },
  {
    slug: "microsoft-365",
    name: "Microsoft 365",
    description:
      "Work alongside Microsoft 365 productivity apps to reduce context switching for enterprise teams.",
    category: "productivity",
    status: "available",
    href: "/integrations/microsoft-365",
    icon: "app-window",
  },
  {
    slug: "outlook",
    name: "Outlook",
    description:
      "Use the Outlook add-in experience to stay connected to Wurqi work from your email workflow.",
    category: "productivity",
    status: "available",
    href: "/integrations/outlook",
    icon: "mail",
  },
  {
    slug: "zoom",
    name: "Zoom",
    description:
      "Connect meeting-centric collaboration with Wurqi so discussions can translate into tracked work.",
    category: "communication",
    status: "available",
    href: "/integrations/zoom",
    icon: "video",
  },
  {
    slug: "identity-providers",
    name: "Identity Providers",
    description:
      "Enterprise-ready identity and access patterns for secure sign-in across your organization.",
    category: "identity",
    status: "planned",
    href: "/integrations/identity-providers",
    icon: "key-round",
  },
  {
    slug: "api",
    name: "API",
    description:
      "Extend Wurqi with APIs to connect internal systems and automate enterprise workflows.",
    category: "platform",
    status: "planned",
    href: "/integrations/api",
    icon: "code-2",
  },
];

export function getIntegrationBySlug(slug: string): Integration | undefined {
  return integrations.find((item) => item.slug === slug);
}

export function getIntegrationsByStatus(
  status: Integration["status"],
): Integration[] {
  return integrations.filter((item) => item.status === status);
}

export function getIntegrationsByCategory(
  category: Integration["category"],
): Integration[] {
  return integrations.filter((item) => item.category === category);
}
