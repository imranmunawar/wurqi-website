import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionPage } from "@/features/solutions/SolutionPage";
import {
  getAllSolutionSlugs,
  getSolutionBySlug,
} from "@/content/solutions/solutions";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  return createPageMetadata({
    pageType: "solution",
    path: `/solutions/${solution.slug}`,
    title: `${solution.metaTitle ?? solution.title} | ${siteConfig.name}`,
    description: solution.metaDescription ?? solution.description,
  });
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();
  return <SolutionPage solution={solution} />;
}
