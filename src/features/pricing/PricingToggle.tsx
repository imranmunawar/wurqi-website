"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  getDisplayPrice,
  getPriceUnit,
  pricingConfig,
  pricingTiers,
} from "@/config/pricing";
import type { PricingBillingInterval, PricingTier } from "@/types";

export function PricingToggle() {
  const [interval, setInterval] =
    useState<PricingBillingInterval>(pricingConfig.defaultInterval);

  return (
    <div>
      <div className="mb-[var(--section-header-gap)] flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <div
          role="group"
          aria-label="Billing interval"
          className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] p-1"
        >
          {(["monthly", "annual"] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setInterval(value)}
              className={cn(
                "rounded-full px-5 py-2 text-[var(--text-body-sm-size)] font-semibold capitalize transition-colors",
                interval === value
                  ? "bg-[#3366ff] text-white"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
              )}
            >
              {value === "annual" ? "Yearly" : "Monthly"}
            </button>
          ))}
        </div>
        {interval === "annual" ? (
          <p className="text-[var(--text-body-sm-size)] font-medium text-[var(--accent)]">
            {pricingConfig.annualDiscountLabel}
          </p>
        ) : null}
      </div>

      <div className="overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)]">
        <ul className="grid lg:grid-cols-4">
          {pricingTiers.map((tier, index) => (
            <PricingColumn
              key={tier.id}
              tier={tier}
              interval={interval}
              isLast={index === pricingTiers.length - 1}
            />
          ))}
        </ul>
      </div>

      <p className="mt-8 text-center text-[var(--text-body-sm-size)] text-[var(--text-muted)]">
        {pricingConfig.footnote}
      </p>
    </div>
  );
}

function PricingColumn({
  tier,
  interval,
  isLast,
}: {
  tier: PricingTier;
  interval: PricingBillingInterval;
  isLast: boolean;
}) {
  const price = getDisplayPrice(tier, interval);
  const unit = getPriceUnit(tier, interval);
  const featured = Boolean(tier.highlighted);
  const isFree = price === "Free";
  const isCustom = price === "Custom";

  return (
    <li
      className={cn(
        "flex h-full flex-col p-6 sm:p-7",
        !isLast && "border-b border-[var(--border)] lg:border-b-0 lg:border-r",
        featured &&
          "bg-[var(--color-navy-950)] text-[var(--text-inverse)] lg:rounded-[var(--radius-2xl)] lg:shadow-[var(--shadow-lg)]",
      )}
    >
      <div className="flex min-h-[11.5rem] flex-col">
        <div className="flex items-center gap-2">
          <h3
            className={cn(
              "font-display text-[1.35rem] font-semibold tracking-tight",
              featured ? "text-white" : "text-[var(--text-primary)]",
            )}
          >
            {tier.name}
          </h3>
          {featured ? (
            <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-white">
              Popular
            </span>
          ) : null}
        </div>

        <div className="mt-5">
          {isCustom ? (
            <p
              className={cn(
                "text-[1.35rem] font-semibold tracking-tight",
                featured ? "text-white" : "text-[var(--text-primary)]",
              )}
            >
              Get a custom demo
            </p>
          ) : (
            <>
              <p
                className={cn(
                  "text-[clamp(2.25rem,3vw,2.75rem)] font-semibold tracking-tight",
                  featured ? "text-white" : "text-[var(--text-primary)]",
                )}
              >
                {isFree ? "Free forever" : price}
              </p>
              {!isFree && unit ? (
                <p
                  className={cn(
                    "mt-1 text-[var(--text-body-sm-size)]",
                    featured ? "text-white/70" : "text-[var(--text-muted)]",
                  )}
                >
                  {unit}
                </p>
              ) : null}
            </>
          )}
        </div>

        <div className="mt-6">
          <Button
            href={tier.cta.href}
            variant="primary"
            className={cn("w-full", featured && "btn-invert !bg-white")}
          >
            {tier.cta.label}
          </Button>
        </div>
      </div>

      <div className="mt-8 border-t border-current/10 pt-6">
        <p
          className={cn(
            "text-caption font-semibold uppercase tracking-[0.12em]",
            featured ? "text-white/70" : "text-[var(--text-muted)]",
          )}
        >
          {tier.featuresHeading ?? "Key features"}
        </p>
        <ul className="mt-4 space-y-3">
          {tier.features.map((feature) => (
            <li
              key={feature}
              className={cn(
                "flex gap-2.5 text-[var(--text-body-sm-size)] leading-snug",
                featured ? "text-white/90" : "text-[var(--text-secondary)]",
              )}
            >
              <Check
                className={cn(
                  "mt-0.5 size-4 shrink-0",
                  featured ? "text-white" : "text-[var(--text-muted)]",
                )}
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
