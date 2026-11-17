import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { sitemapPaths } from "@/config/navigation";
import { getAllFeatureSlugs } from "@/content/platform/features";
import { getAllSolutionSlugs } from "@/content/solutions/solutions";
import { getAllPostSlugs } from "@/content/blog/posts";
import { getAllCaseStudySlugs } from "@/content/case-studies/studies";

function absolute(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  return path === "/" ? `${base}/` : `${base}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = sitemapPaths.map((path) => ({
    url: absolute(path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  const featureEntries: MetadataRoute.Sitemap = getAllFeatureSlugs().map(
    (slug) => ({
      url: absolute(`/platform/${slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const solutionEntries: MetadataRoute.Sitemap = getAllSolutionSlugs().map(
    (slug) => ({
      url: absolute(`/solutions/${slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    }),
  );

  const blogEntries: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: absolute(`/resources/blog/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = getAllCaseStudySlugs().map(
    (slug) => ({
      url: absolute(`/resources/case-studies/${slug}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  return [
    ...staticEntries,
    ...featureEntries,
    ...solutionEntries,
    ...blogEntries,
    ...caseStudyEntries,
  ];
}
