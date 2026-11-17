import type { Metadata } from "next";
import { buildMetadata, type BuildMetadataOptions } from "@/config/seo";

/**
 * Thin page-level helper for route `generateMetadata` / static `metadata` exports.
 * Prefer this over calling `buildMetadata` directly from pages for consistency.
 */
export function createPageMetadata(
  options: BuildMetadataOptions = {},
): Metadata {
  return buildMetadata(options);
}

export type { BuildMetadataOptions };
