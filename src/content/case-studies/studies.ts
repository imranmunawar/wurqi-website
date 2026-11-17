import type { CaseStudy } from "@/types";

/**
 * Illustrative case-study placeholders for layout and SEO structure.
 * These are NOT real customer stories — do not present as testimonials.
 */
export const caseStudies: CaseStudy[] = [
  {
    slug: "global-enterprise-portfolio-visibility",
    title: "Improving Portfolio Visibility Across a Global Enterprise",
    summary:
      "An illustrative example of how a multi-region organization could use Wurqi to connect strategic goals with portfolio and project execution.",
    industry: "Global enterprise (illustrative)",
    customerLabel: "Illustrative: Global Enterprise",
    challenge:
      "Leadership lacked a consistent real-time view of initiative health. Status was assembled manually from disconnected project tools, and strategic goals were not clearly linked to delivery work.",
    solution:
      "In this illustrative scenario, teams centralize goals, portfolios, and project delivery in Wurqi. Program leads standardize reporting, while executives use dashboards for live visibility into progress and risk.",
    results: [
      "Faster executive visibility into portfolio health (illustrative outcome)",
      "Clearer linkage between goals and delivery initiatives (illustrative outcome)",
      "Reduced time spent assembling status packs (illustrative outcome)",
    ],
    quote: {
      text: "We needed one place where strategy and delivery finally met — without another layer of status meetings.",
      attribution: "Illustrative leadership quote (not a real customer)",
    },
    relatedFeatures: [
      "portfolio-management",
      "goals",
      "dashboards",
      "risk-management",
    ],
    isIllustrative: true,
    metaTitle: "Illustrative Case Study: Portfolio Visibility",
    metaDescription:
      "Illustrative example of enterprise portfolio visibility with Wurqi. Not a real customer case study.",
  },
  {
    slug: "operations-team-workflow-clarity",
    title: "Bringing Clarity to Cross-Functional Operations Work",
    summary:
      "An illustrative example of how an operations organization could reduce handoff friction and keep priorities visible across functions.",
    industry: "Operations (illustrative)",
    customerLabel: "Illustrative: Mid-Market Operations Org",
    challenge:
      "Cross-functional work moved through email and chat. Ownership was unclear at handoffs, and leaders could not see operational load or blockers until delivery slipped.",
    solution:
      "In this illustrative scenario, operations teams use Wurqi workflows and work management to make ownership, status, and priorities explicit — with collaboration attached to the work itself.",
    results: [
      "Clearer handoffs between functions (illustrative outcome)",
      "Shared visibility into operational priorities (illustrative outcome)",
      "Fewer dropped requests and rework loops (illustrative outcome)",
    ],
    relatedFeatures: [
      "workflows",
      "work-management",
      "collaboration",
      "dashboards",
    ],
    isIllustrative: true,
    metaTitle: "Illustrative Case Study: Operations Clarity",
    metaDescription:
      "Illustrative example of operations workflow clarity with Wurqi. Not a real customer case study.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
