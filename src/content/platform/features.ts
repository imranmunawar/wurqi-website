import type { Feature } from "@/types";

export const platformFeatures: Feature[] = [
  {
    slug: "work-management",
    title: "Work Management",
    shortTitle: "Work",
    description:
      "Bring goals, projects, tasks, people, and communication into one connected workspace so strategy and execution stay aligned.",
    metaTitle: "Work Management Platform",
    metaDescription:
      "Wurqi work management connects strategic goals with the projects and tasks required to deliver them — in one enterprise workspace.",
    icon: "layers",
    benefits: [
      "Eliminate siloed tools that separate strategy from day-to-day work",
      "Give every team a shared source of truth for priorities and progress",
      "Improve accountability with clear ownership across work items",
      "Accelerate decision making with real-time organizational visibility",
    ],
    capabilities: [
      "Unified work items across goals, projects, and tasks",
      "Work plans and scheduling",
      "Cross-team visibility and status tracking",
      "Document and context attached to work",
      "Notifications tied to delivery milestones",
    ],
    faq: [
      {
        question: "How is Wurqi different from a task tool?",
        answer:
          "Wurqi connects strategic goals with the work required to achieve them — projects, portfolios, workflows, collaboration, and dashboards — rather than managing tasks in isolation.",
      },
      {
        question: "Who is work management for?",
        answer:
          "Leaders, PMOs, operations, and delivery teams that need one connected view from strategy through execution.",
      },
    ],
    related: [
      "project-management",
      "goals",
      "dashboards",
      "collaboration",
    ],
  },
  {
    slug: "project-management",
    title: "Project Management",
    shortTitle: "Projects",
    description:
      "Plan, schedule, and deliver projects with clarity — from work breakdowns and Gantt views to budgets, ownership, and progress.",
    metaTitle: "Enterprise Project Management",
    metaDescription:
      "Plan and deliver projects with Wurqi: tasks, schedules, Gantt charts, budgets, and team collaboration in one platform.",
    icon: "kanban",
    benefits: [
      "Keep project plans, owners, and timelines in sync",
      "Reduce status-meeting overhead with live progress",
      "Surface dependencies and blockers earlier",
      "Standardize delivery practices across teams",
    ],
    capabilities: [
      "Project and task management",
      "Scheduling and Gantt charts",
      "Budgets and resource-aware planning",
      "Multiple work item types",
      "Status, milestones, and delivery tracking",
    ],
    faq: [
      {
        question: "Can teams manage both agile and structured projects?",
        answer:
          "Yes. Wurqi supports flexible work structures so teams can plan and track delivery in ways that match their operating model while leadership retains portfolio visibility.",
      },
      {
        question: "Does project management connect to goals?",
        answer:
          "Projects can be linked to goals and OKRs so delivery progress rolls up to strategic outcomes.",
      },
    ],
    related: [
      "work-management",
      "portfolio-management",
      "workflows",
      "risk-management",
    ],
  },
  {
    slug: "portfolio-management",
    title: "Portfolio Management",
    shortTitle: "Portfolios",
    description:
      "Prioritize programs and portfolios against strategy. Balance capacity, track outcomes, and keep leadership aligned on what matters most.",
    metaTitle: "Portfolio & Program Management",
    metaDescription:
      "Manage portfolios and programs in Wurqi — prioritize initiatives, track outcomes, and align investment with strategy.",
    icon: "briefcase",
    benefits: [
      "See initiative health across the full portfolio",
      "Prioritize work against strategic outcomes",
      "Improve governance without slowing delivery teams",
      "Give executives a clear view of investment vs. progress",
    ],
    capabilities: [
      "Portfolios and programs",
      "Initiative prioritization",
      "Cross-project rollups",
      "Capacity and progress visibility",
      "Leadership-ready portfolio views",
    ],
    faq: [
      {
        question: "Is portfolio management only for PMOs?",
        answer:
          "PMOs benefit most, but operations and leadership teams also use portfolio views to prioritize initiatives and understand delivery risk.",
      },
      {
        question: "How does this relate to project management?",
        answer:
          "Projects feed portfolio rollups, so portfolio decisions stay grounded in live delivery data.",
      },
    ],
    related: [
      "project-management",
      "goals",
      "dashboards",
      "risk-management",
    ],
  },
  {
    slug: "goals",
    title: "Goals & OKRs",
    shortTitle: "Goals",
    description:
      "Set measurable objectives, cascade priorities, and connect everyday work to outcomes leadership cares about.",
    metaTitle: "Goals & OKRs",
    metaDescription:
      "Align teams with Goals & OKRs in Wurqi — connect strategic objectives to the projects and tasks that drive them.",
    icon: "target",
    benefits: [
      "Translate strategy into measurable objectives",
      "Connect OKRs to the work that moves them",
      "Create transparency on progress across teams",
      "Reduce misalignment between leadership and delivery",
    ],
    capabilities: [
      "Objectives and key results",
      "Goal hierarchy and cascading",
      "Progress tracking tied to work",
      "Outcome-oriented reporting",
      "Team and leadership goal views",
    ],
    faq: [
      {
        question: "Can goals link to projects and tasks?",
        answer:
          "Yes. Wurqi is designed to connect objectives with the projects and tasks required to achieve them.",
      },
      {
        question: "Do we have to use a formal OKR process?",
        answer:
          "No. Teams can start with clear goals and expand into fuller OKR practices as maturity grows.",
      },
    ],
    related: [
      "work-management",
      "portfolio-management",
      "dashboards",
      "collaboration",
    ],
  },
  {
    slug: "workflows",
    title: "Workflows",
    shortTitle: "Workflows",
    description:
      "Standardize how work moves across teams. Reduce handoff friction and make process consistency part of everyday delivery.",
    metaTitle: "Workflow Management",
    metaDescription:
      "Standardize and automate work processes with Wurqi workflows — clearer handoffs, fewer delays, more predictable delivery.",
    icon: "workflow",
    benefits: [
      "Reduce rework caused by inconsistent process",
      "Make handoffs explicit and trackable",
      "Scale best practices across teams",
      "Improve predictability for recurring work",
    ],
    capabilities: [
      "Process standardization",
      "Handoffs and stage-based progress",
      "Reusable work patterns",
      "Cross-team coordination",
      "Operational consistency at scale",
    ],
    faq: [
      {
        question: "Are workflows only for operations teams?",
        answer:
          "No. PMOs, project teams, and enterprise programs all benefit from clearer process and handoffs.",
      },
      {
        question: "Can workflows coexist with flexible project plans?",
        answer:
          "Yes. Teams can use structured workflows where consistency matters and flexible planning where delivery needs adapt.",
      },
    ],
    related: [
      "project-management",
      "collaboration",
      "dashboards",
      "risk-management",
    ],
  },
  {
    slug: "collaboration",
    title: "Collaboration",
    shortTitle: "Collaborate",
    description:
      "Keep conversations, updates, and decisions attached to the work — so context never gets lost in disconnected chat threads.",
    metaTitle: "Team Collaboration",
    metaDescription:
      "Collaborate in context with Wurqi — communication, documents, and decisions stay connected to projects and goals.",
    icon: "users",
    benefits: [
      "Reduce context switching across chat and project tools",
      "Keep decisions and updates with the related work",
      "Improve cross-team clarity and inclusion",
      "Support hybrid and distributed teams with shared visibility",
    ],
    capabilities: [
      "Work-linked communication",
      "Document management",
      "Real-time notifications",
      "Stakeholder updates",
      "Team and cross-functional collaboration",
    ],
    faq: [
      {
        question: "Does Wurqi replace chat tools?",
        answer:
          "Wurqi complements tools like Microsoft Teams and Zoom by keeping critical work context centralized while integrating with the channels teams already use.",
      },
      {
        question: "How does collaboration support leadership?",
        answer:
          "Leaders get clearer signals on progress and blockers because communication is tied to execution, not scattered across inboxes.",
      },
    ],
    related: [
      "work-management",
      "project-management",
      "dashboards",
      "workflows",
    ],
  },
  {
    slug: "dashboards",
    title: "Dashboards",
    shortTitle: "Dashboards",
    description:
      "Give every level of the organization a live view of progress, capacity, and risk — from team boards to executive dashboards.",
    metaTitle: "Dashboards & Reporting",
    metaDescription:
      "Real-time dashboards in Wurqi give teams and leaders visibility into progress, risk, and organizational performance.",
    icon: "layout-dashboard",
    benefits: [
      "Replace static status decks with live views",
      "Improve decision quality with current data",
      "Expose risk and delay earlier",
      "Align teams and leadership on the same numbers",
    ],
    capabilities: [
      "Team and leadership dashboards",
      "Progress and status visualization",
      "Portfolio and program rollups",
      "Operational visibility",
      "Reporting for decision makers",
    ],
    faq: [
      {
        question: "Can different roles see different dashboards?",
        answer:
          "Yes. Dashboards can reflect the altitude each audience needs — delivery detail for teams, rollups for leadership.",
      },
      {
        question: "Do dashboards update from live work data?",
        answer:
          "Dashboards are designed to reflect the connected workspace so status is grounded in actual execution.",
      },
    ],
    related: [
      "portfolio-management",
      "goals",
      "risk-management",
      "work-management",
    ],
  },
  {
    slug: "risk-management",
    title: "Risk Management",
    shortTitle: "Risk",
    description:
      "Identify blockers, dependencies, and delivery risk early — then act before small issues become portfolio-level problems.",
    metaTitle: "Delivery Risk Management",
    metaDescription:
      "Surface delivery risk earlier with Wurqi — dependencies, blockers, and portfolio health in one connected view.",
    icon: "shield-alert",
    benefits: [
      "Spot delivery risk before it compounds",
      "Make dependencies visible across teams",
      "Improve predictability for leadership",
      "Strengthen governance without heavy process theater",
    ],
    capabilities: [
      "Blocker and dependency visibility",
      "Delivery health signals",
      "Portfolio risk awareness",
      "Escalation-ready status views",
      "Controls that support accountable execution",
    ],
    faq: [
      {
        question: "Is this formal enterprise risk management?",
        answer:
          "Wurqi focuses on delivery and execution risk — blockers, dependencies, and initiative health — so leaders can intervene earlier.",
      },
      {
        question: "Who benefits most from risk visibility?",
        answer:
          "PMOs, program leads, operations leaders, and executives who need predictability across complex work.",
      },
    ],
    related: [
      "portfolio-management",
      "project-management",
      "dashboards",
      "workflows",
    ],
  },
];

export function getFeatureBySlug(slug: string): Feature | undefined {
  return platformFeatures.find((feature) => feature.slug === slug);
}

export function getAllFeatureSlugs(): string[] {
  return platformFeatures.map((feature) => feature.slug);
}

export function getRelatedFeatures(slugs: string[]): Feature[] {
  return slugs
    .map((slug) => getFeatureBySlug(slug))
    .filter((feature): feature is Feature => Boolean(feature));
}
