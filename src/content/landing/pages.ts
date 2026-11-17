import type { LandingPage } from "@/types";

/**
 * SEO landing page configs — routes live at the marketing root (e.g. /okr-management).
 */
export const landingPages: LandingPage[] = [
  {
    slug: "work-management-software",
    title: "Work Management Software",
    headline: "Work management software that connects strategy to delivery",
    subheadline:
      "Wurqi unifies goals, projects, tasks, workflows, and visibility so teams execute against what leadership actually prioritizes.",
    description:
      "SEO landing page for work management software intent.",
    metaTitle: "Work Management Software | Wurqi",
    metaDescription:
      "Connect goals, projects, and day-to-day work in one work management platform. Improve alignment, visibility, and execution with Wurqi.",
    keywords: [
      "work management software",
      "work management platform",
      "enterprise work management",
    ],
    primaryCta: { label: "Book a Demo", href: "/book-demo" },
    secondaryCta: { label: "Explore Platform", href: "/platform" },
    relatedFeatures: [
      "work-management",
      "project-management",
      "goals",
      "collaboration",
    ],
    relatedSolutions: ["enterprise", "operations", "project-teams"],
    faq: [
      {
        question: "What is work management software?",
        answer:
          "It helps organizations plan, execute, and track work across teams — ideally connecting strategic goals to the projects and tasks that deliver them.",
      },
      {
        question: "How is Wurqi different from a task list?",
        answer:
          "Wurqi connects goals, portfolios, projects, workflows, collaboration, and dashboards so work stays aligned to outcomes — not just individual tasks.",
      },
    ],
  },
  {
    slug: "enterprise-work-management",
    title: "Enterprise Work Management",
    headline: "Connect strategy to execution across the enterprise",
    subheadline:
      "Wurqi brings goals, portfolios, projects, and teams together so leaders can see work as it happens.",
    description:
      "Enterprise work management landing page for organizations evaluating connected goal, portfolio, and project execution.",
    metaTitle: "Enterprise Work Management Software | Wurqi",
    metaDescription:
      "Connect goals, projects, and teams in one enterprise work management platform. Improve visibility, alignment, and delivery.",
    keywords: [
      "enterprise work management",
      "work management software",
      "enterprise collaboration",
    ],
    primaryCta: { label: "Book a Demo", href: "/book-demo" },
    secondaryCta: { label: "Explore Platform", href: "/platform" },
    relatedFeatures: [
      "work-management",
      "portfolio-management",
      "goals",
      "dashboards",
    ],
    relatedSolutions: ["enterprise", "leadership", "pmo"],
    faq: [
      {
        question: "What is enterprise work management?",
        answer:
          "It is the practice of connecting strategy, planning, execution, collaboration, and visibility so organizations can deliver outcomes — not just track tasks.",
      },
      {
        question: "How is this different from project management software?",
        answer:
          "Project tools focus on delivery mechanics. Wurqi connects those mechanics to goals, portfolios, workflows, and leadership visibility.",
      },
    ],
  },
  {
    slug: "project-management-software",
    title: "Project Management Software",
    headline: "Project delivery with enterprise-grade visibility",
    subheadline:
      "Plan and execute projects while keeping goals, dependencies, and leadership reporting connected.",
    description:
      "SEO landing page for project management software intent.",
    metaTitle: "Enterprise Project Management Software | Wurqi",
    metaDescription:
      "Deliver projects with schedules, collaboration, and dashboards — connected to goals and portfolios in Wurqi.",
    keywords: [
      "project management software",
      "enterprise project management",
      "project collaboration",
    ],
    primaryCta: {
      label: "Book a Demo",
      href: "/book-demo?plan=free-trial",
    },
    secondaryCta: {
      label: "Explore Platform",
      href: "/platform/project-management",
    },
    relatedFeatures: [
      "project-management",
      "collaboration",
      "workflows",
      "dashboards",
    ],
    relatedSolutions: ["project-teams", "pmo", "operations"],
    faq: [
      {
        question: "Can Wurqi replace our project tracker?",
        answer:
          "Many teams use Wurqi as the system of record for project planning and delivery while connecting progress to goals and portfolios.",
      },
    ],
  },
  {
    slug: "enterprise-project-management",
    title: "Enterprise Project Management",
    headline: "Enterprise project management without the status scramble",
    subheadline:
      "Standardize delivery across teams while giving PMOs and executives live portfolio and risk visibility.",
    description:
      "SEO landing page for enterprise project management intent.",
    metaTitle: "Enterprise Project Management | Wurqi",
    metaDescription:
      "Scale project delivery across the enterprise with connected plans, collaboration, risk visibility, and leadership dashboards.",
    keywords: [
      "enterprise project management",
      "PMO software",
      "project portfolio management",
    ],
    primaryCta: { label: "Book a Demo", href: "/book-demo" },
    secondaryCta: {
      label: "Explore Platform",
      href: "/platform/project-management",
    },
    relatedFeatures: [
      "project-management",
      "portfolio-management",
      "risk-management",
      "dashboards",
    ],
    relatedSolutions: ["pmo", "enterprise", "project-teams"],
    faq: [
      {
        question: "How do enterprises roll out Wurqi?",
        answer:
          "Most start with a focused delivery or PMO use case, then expand to goals, portfolios, and leadership visibility.",
      },
    ],
  },
  {
    slug: "portfolio-management",
    title: "Portfolio Management",
    headline: "Prioritize the portfolio with live delivery signal",
    subheadline:
      "Give PMOs and executives a clear view of initiative health, risk, and strategic alignment.",
    description:
      "SEO landing page for portfolio and program management intent.",
    metaTitle: "Portfolio Management Software | Wurqi",
    metaDescription:
      "Manage portfolios and programs with live rollups from delivery work. Improve prioritization, governance, and executive visibility.",
    keywords: [
      "portfolio management",
      "portfolio management software",
      "program management",
      "PMO software",
    ],
    primaryCta: { label: "Talk to Sales", href: "/contact" },
    secondaryCta: {
      label: "Explore Platform",
      href: "/platform/portfolio-management",
    },
    relatedFeatures: [
      "portfolio-management",
      "project-management",
      "risk-management",
      "dashboards",
    ],
    relatedSolutions: ["pmo", "enterprise", "leadership"],
    faq: [
      {
        question: "Does portfolio health update from project work?",
        answer:
          "Yes. Wurqi is designed so delivery progress and risk can roll up into portfolio and leadership views.",
      },
    ],
  },
  {
    slug: "okr-management",
    title: "OKR Management",
    headline: "Make OKRs actionable — not another slide deck",
    subheadline:
      "Link objectives to the projects and tasks that move them, with live progress for teams and leaders.",
    description: "SEO landing page for OKR and goals management intent.",
    metaTitle: "OKR Management Software | Wurqi",
    metaDescription:
      "Align teams with OKRs connected to real work. Track progress, reduce misalignment, and keep strategy visible.",
    keywords: [
      "OKR management",
      "OKR software",
      "goals and OKRs",
      "objective tracking",
    ],
    primaryCta: { label: "Book a Demo", href: "/book-demo" },
    secondaryCta: { label: "Explore Platform", href: "/platform/goals" },
    relatedFeatures: ["goals", "work-management", "dashboards"],
    relatedSolutions: ["leadership", "enterprise"],
    faq: [
      {
        question: "Can OKRs link to projects?",
        answer:
          "Yes. Wurqi is built to connect objectives with the work required to achieve them.",
      },
    ],
  },
  {
    slug: "workflow-management",
    title: "Workflow Management",
    headline: "Workflow management that keeps handoffs accountable",
    subheadline:
      "Standardize cross-team processes, reduce dropped requests, and keep ownership visible from intake to completion.",
    description: "SEO landing page for workflow management intent.",
    metaTitle: "Workflow Management Software | Wurqi",
    metaDescription:
      "Standardize processes and automate handoffs with Wurqi workflow management — connected to projects, collaboration, and visibility.",
    keywords: [
      "workflow management",
      "workflow software",
      "process automation",
      "cross-team workflows",
    ],
    primaryCta: { label: "Book a Demo", href: "/book-demo" },
    secondaryCta: {
      label: "Explore Platform",
      href: "/platform/workflows",
    },
    relatedFeatures: [
      "workflows",
      "work-management",
      "collaboration",
      "project-management",
    ],
    relatedSolutions: ["operations", "pmo", "enterprise"],
    faq: [
      {
        question: "Who uses Wurqi for workflows?",
        answer:
          "Operations, PMOs, and cross-functional teams that need consistent handoffs without losing strategic context.",
      },
    ],
  },
];

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return landingPages.find((page) => page.slug === slug);
}

export function getAllLandingPageSlugs(): string[] {
  return landingPages.map((page) => page.slug);
}
