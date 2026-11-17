import type { NavItem, NavSection } from "@/types";

/** Primary header navigation — Platform uses a mega-menu pattern. */
export const mainNavigation: NavSection[] = [
  {
    title: "Platform",
    href: "/platform",
    items: [
      {
        title: "Work Management",
        href: "/platform/work-management",
        description:
          "Connect goals, projects, and day-to-day work in one workspace.",
        icon: "layers",
      },
      {
        title: "Project Management",
        href: "/platform/project-management",
        description:
          "Plan, schedule, and deliver projects with clarity and control.",
        icon: "kanban",
      },
      {
        title: "Portfolio Management",
        href: "/platform/portfolio-management",
        description:
          "Prioritize programs and portfolios against strategic outcomes.",
        icon: "briefcase",
      },
      {
        title: "Goals & OKRs",
        href: "/platform/goals",
        description:
          "Align teams to measurable objectives and track progress in real time.",
        icon: "target",
      },
      {
        title: "Workflows",
        href: "/platform/workflows",
        description:
          "Standardize processes and automate handoffs across teams.",
        icon: "workflow",
      },
      {
        title: "Collaboration",
        href: "/platform/collaboration",
        description:
          "Keep conversations, documents, and decisions tied to the work.",
        icon: "users",
      },
      {
        title: "Dashboards",
        href: "/platform/dashboards",
        description:
          "Give leaders a live view of execution, risk, and capacity.",
        icon: "layout-dashboard",
      },
      {
        title: "Risk Management",
        href: "/platform/risk-management",
        description:
          "Surface blockers early and keep delivery on a predictable path.",
        icon: "shield-alert",
      },
    ],
  },
  {
    title: "Solutions",
    href: "/solutions",
    items: [
      {
        title: "Enterprise",
        href: "/solutions/enterprise",
        description: "Scale work management across complex organizations.",
        icon: "building-2",
      },
      {
        title: "PMO",
        href: "/solutions/pmo",
        description: "Standardize delivery and portfolio governance.",
        icon: "clipboard-list",
      },
      {
        title: "Operations",
        href: "/solutions/operations",
        description: "Run cross-functional operations with shared visibility.",
        icon: "cog",
      },
      {
        title: "Project Teams",
        href: "/solutions/project-teams",
        description: "Give delivery teams one place to plan and execute.",
        icon: "users-round",
      },
      {
        title: "Leadership",
        href: "/solutions/leadership",
        description:
          "Connect strategy to execution for executive decision makers.",
        icon: "compass",
      },
    ],
  },
  {
    title: "Integrations",
    href: "/integrations",
    items: [
      {
        title: "All Integrations",
        href: "/integrations",
        description: "Connect Wurqi with the tools your teams already use.",
        icon: "puzzle",
      },
    ],
  },
  {
    title: "Resources",
    href: "/resources/blog",
    items: [
      {
        title: "Blog",
        href: "/resources/blog",
        description: "Insights on work management, visibility, and execution.",
        icon: "book-open",
      },
      {
        title: "Case Studies",
        href: "/resources/case-studies",
        description:
          "How organizations connect strategy to delivery with Wurqi.",
        icon: "file-text",
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
    items: [
      {
        title: "Plans & Pricing",
        href: "/pricing",
        description: "Find the right plan for your teams and organization.",
        icon: "tag",
      },
    ],
  },
];

export const ctaNavigation: NavItem[] = [
  {
    title: "Log in",
    href: "https://dev2.wurqi.com/",
    external: true,
  },
  {
    title: "Book a Demo",
    href: "/book-demo",
  },
];

export const footerNavigation: NavSection[] = [
  {
    title: "Platform",
    items: [
      { title: "Work Management", href: "/platform/work-management" },
      { title: "Project Management", href: "/platform/project-management" },
      { title: "Portfolio Management", href: "/platform/portfolio-management" },
      { title: "Goals & OKRs", href: "/platform/goals" },
      { title: "Workflows", href: "/platform/workflows" },
      { title: "Collaboration", href: "/platform/collaboration" },
      { title: "Dashboards", href: "/platform/dashboards" },
      { title: "Risk Management", href: "/platform/risk-management" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { title: "Enterprise", href: "/solutions/enterprise" },
      { title: "PMO", href: "/solutions/pmo" },
      { title: "Operations", href: "/solutions/operations" },
      { title: "Project Teams", href: "/solutions/project-teams" },
      { title: "Leadership", href: "/solutions/leadership" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Blog", href: "/resources/blog" },
      { title: "Case Studies", href: "/resources/case-studies" },
      { title: "Integrations", href: "/integrations" },
      { title: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    items: [
      { title: "About", href: "/about" },
      { title: "Contact", href: "/contact" },
      { title: "Book a Demo", href: "/book-demo" },
      { title: "Privacy Policy", href: "/legal/privacy" },
      { title: "Terms of Service", href: "/legal/terms" },
    ],
  },
];

/** Flat list of primary paths useful for sitemaps and breadcrumbs. */
export const primaryPaths = [
  "/",
  "/platform",
  "/solutions",
  "/integrations",
  "/pricing",
  "/resources/blog",
  "/resources/case-studies",
  "/about",
  "/contact",
  "/book-demo",
] as const;

/** SEO landing page paths at the marketing root. */
export const landingPaths = [
  "/work-management-software",
  "/enterprise-work-management",
  "/project-management-software",
  "/enterprise-project-management",
  "/portfolio-management",
  "/okr-management",
  "/workflow-management",
] as const;

export const sitemapPaths = [
  ...primaryPaths,
  ...landingPaths,
] as const;
