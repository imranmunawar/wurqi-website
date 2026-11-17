"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";
import { ProductDashboard } from "@/components/product/ProductDashboard";
import { platformFeatures } from "@/content/platform/features";

export function FeatureShowcase() {
  const defaultValue = platformFeatures[0]?.slug ?? "work-management";

  return (
    <Section
      id="platform-features"
      eyebrow="Platform"
      title="Eight capabilities. One connected system."
      description="Explore the platform features that keep strategy, planning, execution, and visibility in sync."
      className="relative overflow-hidden bg-[var(--surface)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,rgb(51_102_255_/0.1),transparent_70%)]"
      />
      <Reveal className="relative">
        <Tabs defaultValue={defaultValue} orientation="horizontal">
          <TabsList
            label="Platform features"
            className="mb-[var(--section-header-gap)] gap-1 rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface-muted)]/80 p-1.5 shadow-[var(--shadow-xs)] backdrop-blur-sm"
          >
            {platformFeatures.map((feature) => (
              <TabsTrigger
                key={feature.slug}
                value={feature.slug}
                className="rounded-[var(--radius-md)] px-3.5 py-2.5 after:hidden data-[selected]:bg-[var(--surface)] data-[selected]:text-[var(--text-primary)] data-[selected]:shadow-[var(--shadow-sm)] aria-selected:bg-[var(--surface)] aria-selected:text-[var(--text-primary)] aria-selected:shadow-[var(--shadow-sm)] aria-selected:after:hidden"
              >
                {feature.shortTitle ?? feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {platformFeatures.map((feature) => (
            <TabsContent key={feature.slug} value={feature.slug} className="pt-2">
              <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div>
                  <h3 className="text-h3">{feature.title}</h3>
                  <p className="text-body-lg mt-4 text-[var(--text-secondary)]">
                    {feature.description}
                  </p>
                  <ul className="mt-7 space-y-3.5">
                    {feature.capabilities.slice(0, 5).map((capability) => (
                      <li
                        key={capability}
                        className="flex gap-3 text-[var(--text-body-size)] text-[var(--text-secondary)]"
                      >
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent-muted)] text-[var(--accent)]">
                          <Check
                            className="size-3"
                            strokeWidth={3}
                            aria-hidden="true"
                          />
                        </span>
                        <span className="font-medium text-[var(--text-primary)]">
                          {capability}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-9">
                    <Button href={`/platform/${feature.slug}`} variant="primary">
                      Explore {feature.title}
                    </Button>
                  </div>
                  <p className="mt-4 text-[var(--text-body-sm-size)] text-[var(--text-muted)]">
                    Prefer the full overview?{" "}
                    <Link
                      href="/platform"
                      className="link-quiet text-[var(--text-link)]"
                    >
                      See all platform capabilities
                      <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </div>
                <div className="product-stage">
                  <div className="relative z-[1]">
                    <ProductDashboard
                      compact
                      className="shadow-[var(--shadow-lg)] ring-1 ring-[var(--border)]"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </Reveal>
    </Section>
  );
}
