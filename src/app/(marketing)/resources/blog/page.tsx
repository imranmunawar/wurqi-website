import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import { PageHero } from "@/components/marketing/PageHero";
import { blogPosts } from "@/content/blog/posts";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  pageType: "blog",
  path: "/resources/blog",
  title: "Blog — Wurqi",
  description:
    "Insights on work management, organizational visibility, and connecting strategy to execution.",
});

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Blog"
        description="Sample perspectives on visibility, culture, and connecting strategy to execution. Posts are marked as sample marketing content."
      />

      <Section>
        <ul className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <article className="h-full rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-6">
                <p className="text-caption text-[var(--text-muted)]">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-h4 mt-3">
                  <Link
                    href={`/resources/blog/${post.slug}`}
                    className="hover:text-[var(--accent)]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-[var(--text-body-sm-size)] text-[var(--text-secondary)]">
                  {post.excerpt}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBanner
        title="Want to see Wurqi in action?"
        description="Book a demo and explore how strategy connects to execution."
        primaryCta={{ label: "Book a Demo", href: "/book-demo" }}
        secondaryCta={{ label: "Explore Platform", href: "/platform" }}
      />
    </>
  );
}
