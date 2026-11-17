export const siteConfig = {
  name: "Wurqi",
  tagline: "Connect Strategy to Execution",
  description:
    "Wurqi is an enterprise work management platform that brings goals, projects, tasks, workflows, communication and organizational visibility together in one connected workspace.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://wurqi.com",
  links: {
    login: "https://dev2.wurqi.com/",
    twitter: "",
    linkedin: "https://www.linkedin.com/company/wurqi",
  },
  logos: {
    default: "/logo.png",
    onLight: "/logo-on-light.png",
  },
  contact: {
    email: "hello@wurqi.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
