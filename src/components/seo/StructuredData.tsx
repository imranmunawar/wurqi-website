import {
  breadcrumbJsonLd,
  stringifyJsonLd,
} from "@/lib/seo/structured-data";
import type { BreadcrumbItem } from "@/types";

export type StructuredDataProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
};

/** Renders a JSON-LD script tag for SEO structured data. */
export function StructuredData({ data, id }: StructuredDataProps) {
  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: stringifyJsonLd(data) }}
    />
  );
}

export type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[];
};

/** BreadcrumbList JSON-LD via StructuredData. */
export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  return <StructuredData data={breadcrumbJsonLd(items)} />;
}
