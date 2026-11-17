import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage } from "@/features/landing/LandingPage";
import { getLandingPageBySlug } from "@/content/landing/pages";
import { createPageMetadata } from "@/lib/seo/metadata";

export function createLandingRoute(slug: string) {
  async function generateMetadata(): Promise<Metadata> {
    const page = getLandingPageBySlug(slug);
    if (!page) return {};
    return createPageMetadata({
      pageType: "landing",
      path: `/${page.slug}`,
      title: page.metaTitle,
      description: page.metaDescription,
      keywords: page.keywords,
    });
  }

  async function Page() {
    const page = getLandingPageBySlug(slug);
    if (!page) notFound();
    return <LandingPage page={page} />;
  }

  return { generateMetadata, Page };
}
