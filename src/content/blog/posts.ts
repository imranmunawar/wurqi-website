import type { BlogPost } from "@/types";

/**
 * Sample blog content inspired by published Wurqi article titles.
 * Marked `isSample: true` — not a verbatim republication of original posts.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "digital-transformation-culture-and-technology",
    title:
      "Digital Transformation — It’s Just as Much About Culture as It Is Technology",
    excerpt:
      "Technology enables change, but culture determines whether transformation sticks. Here’s how leaders align vision, inclusion, and adoption.",
    content: `
## Sample content

This article is **sample marketing content** inspired by Wurqi’s published thinking on digital transformation. It is not a full reprint of the original post.

Digital transformation often starts as a technology initiative. New platforms are selected, workflows are redesigned, and dashboards are promised. Yet the organizations that succeed treat culture as a first-class workstream — equal to the tools themselves.

### Vision that people can follow

Leaders need to make the destination clear. When teams understand the vision, the plans behind it, and how day-to-day work connects to outcomes, change stops feeling abstract.

### Inclusion beats mandate

Adoption rises when people are included early and can see how new ways of working help them succeed. Silos and self-focused team cultures slow transformation more than missing features ever will.

### Visibility as a cultural practice

Transformation changes what leaders can see — and what teams expect to share. Connecting goals, work, and communication in one workspace reinforces a culture of clarity rather than status theater.

> Sample insight: technology creates possibility; culture determines whether the organization can use it.
    `.trim(),
    author: "Wurqi",
    publishedAt: "2020-01-15",
    tags: ["digital-transformation", "culture", "leadership"],
    metaTitle:
      "Digital Transformation: Culture Matters as Much as Technology",
    metaDescription:
      "Sample Wurqi perspective on why digital transformation succeeds only when culture, vision, and adoption move with the technology.",
    isSample: true,
  },
  {
    slug: "working-in-the-new-normal-visibility",
    title:
      "Working in the ‘New Normal’: How to Ensure Visibility in an Uncertain World",
    excerpt:
      "When teams are distributed, leaders still need visibility, predictability, and control across work, people, and communications.",
    content: `
## Sample content

This article is **sample marketing content** inspired by Wurqi’s published perspective on visibility in distributed work. It is not a full reprint of the original post.

Uncertainty rewards organizations that can decide quickly — and change direction when the facts change. That is hard when everyone is distributed and status lives in inboxes, chats, and disconnected trackers.

### Three interconnected areas

Leaders need a clear line of sight across:

1. **Work** — what is being delivered and why it matters
2. **People** — who owns outcomes and where capacity sits
3. **Communications** — how progress, blockers, and decisions are shared

Treating these as separate systems creates blind spots. Connecting them creates control without micromanagement.

### From static plans to live execution

Plans only help when leaders can see whether they are being executed. A single, consistent, real-time view of activities across the business turns remote and hybrid work into something manageable — not opaque.

> Sample insight: visibility is not surveillance; it is shared situational awareness for better decisions.
    `.trim(),
    author: "Wurqi",
    publishedAt: "2020-06-18",
    tags: ["visibility", "hybrid-work", "leadership"],
    metaTitle: "Ensure Visibility in the New Normal of Work",
    metaDescription:
      "Sample Wurqi perspective on keeping work, people, and communications visible when teams operate in uncertain, distributed environments.",
    isSample: true,
  },
  {
    slug: "finding-the-path-of-success",
    title:
      "When the World Feels Uncharted — How Do You Find the Path of Success?",
    excerpt:
      "In unfamiliar conditions, organizations need empowered people, fewer silos, and a culture of learning from small wins and failures.",
    content: `
## Sample content

This article is **sample marketing content** inspired by Wurqi’s published perspective on navigating uncertainty. It is not a full reprint of the original post.

When old playbooks stop working, success depends less on predicting the future perfectly and more on building an organization that can learn and adapt.

### Empower people with clarity

Teams move faster when vision is explicit and communication is open. Connection and collaboration are not soft extras — they are operating requirements.

### Remove silos that hide progress

Agility improves when initiatives and their progress are visible quickly. Flattening unnecessary hierarchy around information helps leaders decide and teams course-correct.

### Learn in public, improve together

Small successes and failures should create shared learning. Capturing decisions and actions creates a living roadmap of what worked — and what to try next.

> Sample insight: the path of success is built by making progress visible, learnable, and connected across the organization.
    `.trim(),
    author: "Wurqi",
    publishedAt: "2020-04-10",
    tags: ["strategy", "culture", "execution"],
    metaTitle: "Finding the Path of Success in Uncertain Times",
    metaDescription:
      "Sample Wurqi perspective on empowering people, reducing silos, and building a learning culture when there is no existing blueprint.",
    isSample: true,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter((post) => post.tags.includes(tag));
}
