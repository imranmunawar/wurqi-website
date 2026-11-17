import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FeaturePage } from "@/features/platform/FeaturePage";
import {
  getAllFeatureSlugs,
  getFeatureBySlug,
} from "@/content/platform/features";
import { createPageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllFeatureSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) return {};

  return createPageMetadata({
    pageType: "feature",
    path: `/platform/${feature.slug}`,
    title: `${feature.metaTitle ?? feature.title} | ${siteConfig.name}`,
    description: feature.metaDescription ?? feature.description,
  });
}

export default async function PlatformFeaturePage({ params }: Props) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);
  if (!feature) notFound();
  return <FeaturePage feature={feature} />;
}
