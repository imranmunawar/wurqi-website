import type { FAQ, HomepageSection } from "@/types";

export const homepageHero = {
  eyebrow: "Enterprise work management",
  title: "Connect Strategy to Execution",
  description:
    "Wurqi connects goals, projects, tasks, workflows, collaboration and organizational visibility in one enterprise work management platform.",
  primaryCta: { label: "Book a Demo", href: "/book-demo" },
  secondaryCta: { label: "Explore Platform", href: "/platform" },
} as const;

export const homepageSections: HomepageSection[] = [
  {
    id: "social-proof",
    eyebrow: "Trust",
    title: "Trusted by teams that need visibility, control and execution.",
    description:
      "Built for enterprises that need one connected view of work across strategy, delivery, and collaboration.",
    cta: { label: "Read case studies", href: "/resources/case-studies" },
  },
  {
    id: "problem",
    eyebrow: "The challenge",
    title: "Work is connected. Your tools shouldn't be disconnected.",
    description:
      "Goals, projects, tasks, communication, documents, reports, and decisions are part of one chain — yet most tools keep them apart.",
  },
  {
    id: "solution",
    eyebrow: "The Wurqi approach",
    title: "One connected view of work.",
    description:
      "Goals, projects, people, plans, tasks, and collaboration come together so visibility leads to better decisions.",
  },
  {
    id: "strategy",
    eyebrow: "Product story",
    title: "From strategy to execution.",
    description:
      "Follow the path from strategy and goals through programs, projects, work plans, tasks, progress, and insights.",
  },
  {
    id: "platform",
    eyebrow: "Platform",
    title: "One workspace for the work that matters",
    description:
      "Manage goals, portfolios, projects, workflows, collaboration, dashboards, and risk in a connected system — not a patchwork of tools.",
    cta: { label: "See Features", href: "/platform" },
  },
  {
    id: "solutions",
    eyebrow: "Solutions",
    title: "Built for the way enterprises actually operate",
    description:
      "Whether you lead a PMO, run operations, deliver projects, or set strategy, Wurqi meets your altitude without losing the details.",
    cta: { label: "Explore Solutions", href: "/solutions" },
  },
  {
    id: "integrations",
    eyebrow: "Integrations",
    title: "Fits the tools your teams already use",
    description:
      "Connect collaboration and productivity workflows — including Microsoft Teams, Microsoft 365, Outlook, and Zoom — while keeping work context centralized.",
    cta: { label: "View Integrations", href: "/integrations" },
  },
  {
    id: "cta",
    eyebrow: "Next step",
    title: "See Wurqi with your work in mind",
    description:
      "Book a personalized demo or talk with sales about the right plan for your teams.",
    cta: { label: "Book a Demo", href: "/book-demo" },
  },
];

export const homepageProblems = [
  "Information silos",
  "Duplicate work",
  "Poor visibility",
  "Missed dependencies",
  "Delayed decisions",
  "Lack of accountability",
] as const;

export const homepageWorkChain = [
  "Goals",
  "Projects",
  "Tasks",
  "Communication",
  "Documents",
  "Reports",
  "Decisions",
] as const;

export const homepageValuePillars = [
  {
    title: "Centralize work",
    description:
      "Bring goals, projects, tasks, and documents into one shared system of record.",
  },
  {
    title: "Align teams",
    description:
      "Connect everyday execution to strategic objectives so priorities stay clear.",
  },
  {
    title: "Improve visibility",
    description:
      "Give leaders and teams a live view of progress, ownership, and risk.",
  },
  {
    title: "Decide faster",
    description:
      "Replace delayed status packs with current signal for better decisions.",
  },
] as const;

export const homepageFaqs: FAQ[] = [
  {
    question: "What is Wurqi?",
    answer:
      "Wurqi is an enterprise work management platform that connects goals, projects, tasks, workflows, communication, and organizational visibility in one workspace.",
  },
  {
    question: "Who is Wurqi for?",
    answer:
      "Enterprises, PMOs, operations teams, project teams, and leaders who need strategy and execution to stay connected.",
  },
  {
    question: "How is Wurqi different from project management tools?",
    answer:
      "Project tools manage delivery mechanics. Wurqi connects those mechanics to goals, portfolios, collaboration, and leadership visibility.",
  },
  {
    question: "Can we try Wurqi before buying?",
    answer:
      "Yes. Start with a free trial or request a demo to evaluate Wurqi with your team’s use cases.",
  },
];

export const homepage = {
  hero: homepageHero,
  sections: homepageSections,
  valuePillars: homepageValuePillars,
  faqs: homepageFaqs,
} as const;
