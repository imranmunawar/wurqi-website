import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/navigation/Breadcrumb";
import { CtaBanner } from "@/components/marketing/CtaBanner";
import {
  BreadcrumbJsonLd,
  StructuredData,
} from "@/components/seo/StructuredData";
import { getAllPostSlugs, getPostBySlug } from "@/content/blog/posts";
import { createPageMetadata } from "@/lib/seo/metadata";
import { articleJsonLd } from "@/lib/seo/structured-data";
import { siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

function renderInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <span key={index}>{part}</span>;
  });
}

function renderContent(content: string): ReactNode[] {
  return content.split("\n\n").map((block, blockIndex) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={blockIndex}
          className="text-h3 pt-4 text-[var(--text-primary)]"
        >
          {trimmed.replace(/^##\s+/, "")}
        </h2>
      );
    }

    if (trimmed.startsWith("### ")) {
      return (
        <h3
          key={blockIndex}
          className="text-h4 pt-2 text-[var(--text-primary)]"
        >
          {trimmed.replace(/^###\s+/, "")}
        </h3>
      );
    }

    if (trimmed.startsWith("> ")) {
      return (
        <blockquote
          key={blockIndex}
          className="border-l-2 border-[var(--accent)] pl-4 text-[var(--text-primary)]"
        >
          {renderInline(trimmed.replace(/^>\s+/, ""))}
        </blockquote>
      );
    }

    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split("\n").filter(Boolean);
      return (
        <ol key={blockIndex} className="list-decimal space-y-2 pl-5">
          {items.map((item, itemIndex) => (
            <li key={itemIndex}>
              {renderInline(item.replace(/^\d+\.\s+/, ""))}
            </li>
          ))}
        </ol>
      );
    }

    return (
      <p key={blockIndex}>
        {trimmed.split("\n").map((line, lineIndex, lines) => (
          <span key={lineIndex}>
            {renderInline(line)}
            {lineIndex < lines.length - 1 ? <br /> : null}
          </span>
        ))}
      </p>
    );
  });
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return createPageMetadata({
    pageType: "blogPost",
    path: `/resources/blog/${post.slug}`,
    title: `${post.metaTitle ?? post.title} | ${siteConfig.name}`,
    description: post.metaDescription ?? post.excerpt,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    authors: [post.author],
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/resources/blog" },
    { name: post.title, href: `/resources/blog/${post.slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={crumbs} />
      <StructuredData
        data={articleJsonLd({
          title: post.title,
          description: post.metaDescription ?? post.excerpt,
          path: `/resources/blog/${post.slug}`,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          author: post.author,
          image: post.coverImage,
        })}
      />
      <article>
        <header className="border-b border-[var(--border)] bg-[var(--surface)]">
          <Container className="section-y" size="narrow">
            <Breadcrumb items={crumbs} className="mb-8" />
            {post.isSample ? (
              <p className="text-caption mb-3 font-semibold uppercase tracking-[0.12em] text-[var(--warning)]">
                Sample marketing content
              </p>
            ) : null}
            <h1 className="text-h1 text-balance">{post.title}</h1>
            <p className="mt-4 text-[var(--text-body-sm-size)] text-[var(--text-muted)]">
              By {post.author} ·{" "}
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-body-lg mt-6 text-[var(--text-secondary)]">
              {post.excerpt}
            </p>
          </Container>
        </header>
        <Container size="narrow" className="section-y">
          <div className="space-y-4 text-[var(--text-body-size)] leading-relaxed text-[var(--text-secondary)]">
            {renderContent(post.content)}
          </div>
        </Container>
      </article>
      <CtaBanner
        title="Connect strategy to execution"
        description="See how Wurqi brings goals, projects, and visibility together."
        primaryCta={{ label: "Book a Demo", href: "/book-demo" }}
        secondaryCta={{ label: "Explore Platform", href: "/platform" }}
      />
    </>
  );
}
