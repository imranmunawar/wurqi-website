import type { Solution } from "@/types";

export const solutions: Solution[] = [
  {
    slug: "enterprise",
    title: "Enterprise",
    shortTitle: "Enterprise",
    description:
      "Scale connected work management across complex organizations — with visibility, governance, and alignment from strategy to execution.",
    metaTitle: "Enterprise Work Management",
    metaDescription:
      "Wurqi for enterprise organizations: connect goals, portfolios, projects, and teams with the visibility leadership needs.",
    audience: "Large and complex organizations",
    icon: "building-2",
    challenges: [
      "Strategy and delivery live in disconnected systems",
      "Leaders lack a reliable real-time view of execution",
      "Cross-business unit collaboration is slow and fragmented",
      "Governance is either too light or too bureaucratic",
    ],
    outcomes: [
      "One connected workspace for goals, projects, and people",
      "Executive visibility without chasing status updates",
      "Clearer accountability across business units",
      "Faster, better-informed decisions",
    ],
    features: [
      "work-management",
      "portfolio-management",
      "goals",
      "dashboards",
      "risk-management",
    ],
    faq: [
      {
        question: "Can Wurqi support multiple business units?",
        answer:
          "Yes. Enterprise deployments are designed for multi-team and multi-unit visibility while preserving local delivery practices.",
      },
      {
        question: "How do we start an enterprise rollout?",
        answer:
          "Most organizations begin with a focused use case — PMO, operations, or leadership visibility — then expand.",
      },
    ],
    related: ["pmo", "leadership", "operations"],
  },
  {
    slug: "pmo",
    title: "PMO",
    shortTitle: "PMO",
    description:
      "Give the PMO standardized delivery practices, portfolio control, and live reporting without slowing project teams down.",
    metaTitle: "PMO Solutions",
    metaDescription:
      "Wurqi for PMOs: portfolio governance, project standards, risk visibility, and leadership-ready reporting.",
    audience: "Project Management Offices and program leads",
    icon: "clipboard-list",
    challenges: [
      "Inconsistent project practices across teams",
      "Portfolio reporting assembled manually",
      "Limited early warning on delivery risk",
      "Difficulty connecting projects to strategic goals",
    ],
    outcomes: [
      "Consistent delivery frameworks",
      "Live portfolio and program visibility",
      "Earlier escalation of blockers and risk",
      "Stronger alignment between initiatives and strategy",
    ],
    features: [
      "portfolio-management",
      "project-management",
      "workflows",
      "risk-management",
      "dashboards",
    ],
    faq: [
      {
        question: "Does Wurqi replace existing PMO templates?",
        answer:
          "Wurqi helps operationalize standards — plans, workflows, and reporting — so templates become living practice rather than static documents.",
      },
      {
        question: "Can project teams keep flexibility?",
        answer:
          "Yes. PMOs get governance and rollups while delivery teams retain the flexibility they need to execute.",
      },
    ],
    related: ["enterprise", "project-teams", "leadership"],
  },
  {
    slug: "operations",
    title: "Operations",
    shortTitle: "Operations",
    description:
      "Run cross-functional operations with shared priorities, clearer handoffs, and visibility into the work that keeps the business moving.",
    metaTitle: "Operations Work Management",
    metaDescription:
      "Wurqi for operations teams: standardize workflows, improve handoffs, and keep cross-functional work visible.",
    audience: "Operations and cross-functional business teams",
    icon: "cog",
    challenges: [
      "Work spans teams but context does not",
      "Handoffs create delay and rework",
      "Priorities shift without a shared system of record",
      "Leaders cannot see operational load clearly",
    ],
    outcomes: [
      "Shared operational priorities",
      "Fewer dropped handoffs",
      "Better capacity and workload visibility",
      "Faster coordination across functions",
    ],
    features: [
      "workflows",
      "work-management",
      "collaboration",
      "dashboards",
      "project-management",
    ],
    faq: [
      {
        question: "Is Wurqi only for project-based work?",
        answer:
          "No. Operations teams use Wurqi for recurring processes, cross-functional initiatives, and ongoing delivery work.",
      },
      {
        question: "How does Wurqi help with handoffs?",
        answer:
          "Workflows and work-linked collaboration make ownership, status, and next steps explicit across teams.",
      },
    ],
    related: ["enterprise", "project-teams", "pmo"],
  },
  {
    slug: "project-teams",
    title: "Project Teams",
    shortTitle: "Project Teams",
    description:
      "Give delivery teams one place to plan, collaborate, and ship — with enough structure for clarity and enough flexibility to move fast.",
    metaTitle: "Project Team Collaboration",
    metaDescription:
      "Wurqi for project teams: plan work, collaborate in context, track progress, and stay aligned with goals.",
    audience: "Delivery and project teams",
    icon: "users-round",
    challenges: [
      "Plans, chat, and documents live in separate tools",
      "Status is unclear until someone asks",
      "Dependencies surprise the team late",
      "Team progress does not roll up cleanly to leadership",
    ],
    outcomes: [
      "Clear ownership and next actions",
      "Less time spent reconstructing status",
      "Better collaboration around the work itself",
      "Natural rollups for managers and sponsors",
    ],
    features: [
      "project-management",
      "collaboration",
      "workflows",
      "goals",
      "dashboards",
    ],
    faq: [
      {
        question: "Will this feel heavy for delivery teams?",
        answer:
          "Wurqi is designed to keep day-to-day planning and collaboration lightweight while still feeding leadership visibility.",
      },
      {
        question: "Can teams integrate existing tools?",
        answer:
          "Yes. Integrations with collaboration tools help teams stay in flow while work context remains centralized.",
      },
    ],
    related: ["pmo", "operations", "enterprise"],
  },
  {
    slug: "leadership",
    title: "Leadership",
    shortTitle: "Leadership",
    description:
      "Connect strategy to execution for executives and senior leaders — with live visibility into goals, portfolios, and delivery risk.",
    metaTitle: "Leadership Visibility",
    metaDescription:
      "Wurqi for leadership: see how strategy translates into execution with goals, portfolio views, and real-time dashboards.",
    audience: "Executives, founders, and senior leaders",
    icon: "compass",
    challenges: [
      "Strategic intent does not clearly reach delivery teams",
      "Status reporting is delayed and incomplete",
      "Risk surfaces too late for effective intervention",
      "Leaders cannot see whether plans are being executed",
    ],
    outcomes: [
      "A real-time view of strategy in motion",
      "Faster course-correction when priorities shift",
      "Higher confidence in delivery commitments",
      "Stronger alignment between leadership and teams",
    ],
    features: [
      "goals",
      "portfolio-management",
      "dashboards",
      "risk-management",
      "work-management",
    ],
    faq: [
      {
        question: "What does leadership typically see first?",
        answer:
          "Goals progress, portfolio health, and delivery risk — without needing to dig through every project detail.",
      },
      {
        question: "How does Wurqi support decision making?",
        answer:
          "By connecting work, people, and communication into one view, leaders get the visibility, predictability, and control needed to decide and adapt.",
      },
    ],
    related: ["enterprise", "pmo", "operations"],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((solution) => solution.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutions.map((solution) => solution.slug);
}

export function getRelatedSolutions(slugs: string[]): Solution[] {
  return slugs
    .map((slug) => getSolutionBySlug(slug))
    .filter((solution): solution is Solution => Boolean(solution));
}
