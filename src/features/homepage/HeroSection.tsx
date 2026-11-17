"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProductDashboard } from "@/components/product/ProductDashboard";
import { homepageHero } from "@/content/homepage";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-20%,rgb(51_102_255_/0.18),transparent_58%),radial-gradient(ellipse_45%_35%_at_0%_20%,rgb(147_178_255_/0.16),transparent_50%),radial-gradient(ellipse_40%_30%_at_100%_15%,rgb(51_102_255_/0.1),transparent_48%)]" />
        <div className="surface-grid absolute inset-0 opacity-70" />
      </div>

      <Container size="wide" className="relative section-y">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-brand-200)] bg-[var(--surface)]/80 px-3.5 py-1.5 shadow-[var(--shadow-xs)] backdrop-blur-md"
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.08, duration: 0.45 }}
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-[var(--accent-muted)]">
              <Sparkles
                className="size-3 text-[var(--accent)]"
                aria-hidden="true"
              />
            </span>
            <p className="text-[var(--text-body-sm-size)] font-medium text-[var(--text-primary)]">
              {homepageHero.eyebrow}
            </p>
          </motion.div>

          <h1 className="text-display mt-8 text-balance text-[var(--text-primary)]">
            Connect Strategy to{" "}
            <span className="relative inline-block text-[var(--accent)]">
              Execution
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-1 h-[0.16em] rounded-full bg-[linear-gradient(90deg,var(--accent),var(--color-brand-300))]"
              />
            </span>
          </h1>

          <p className="text-body-lg mx-auto mt-7 max-w-2xl text-pretty text-[var(--text-secondary)]">
            {homepageHero.description}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button href={homepageHero.primaryCta.href} size="lg">
              {homepageHero.primaryCta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button
              href={homepageHero.secondaryCta.href}
              variant="outline"
              size="lg"
            >
              {homepageHero.secondaryCta.label}
            </Button>
          </div>

          <p className="mt-7">
            <Link href="/resources/case-studies" className="link-quiet">
              View case studies
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        </motion.div>

        <div className="product-stage relative mx-auto mt-[var(--stack-gap-lg)] max-w-5xl">
          <motion.div
            className="relative z-[1]"
            initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              delay: reduceMotion ? 0 : 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <ProductDashboard className="shadow-[var(--shadow-xl)] ring-1 ring-[var(--border)]" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
