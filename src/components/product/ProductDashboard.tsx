import { FolderKanban, Gauge, ShieldAlert, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductMetricCard } from "@/components/product/ProductMetricCard";
import { ProductActivity } from "@/components/product/ProductActivity";
import { ProductNotification } from "@/components/product/ProductNotification";
import { ProductWindow } from "@/components/product/ProductWindow";

export type ProductDashboardProps = {
  className?: string;
  compact?: boolean;
};

export function ProductDashboard({
  className,
  compact = false,
}: ProductDashboardProps) {
  return (
    <ProductWindow
      title="app.wurqi.com/dashboard"
      className={cn(className)}
    >
      <div
        className={cn(
          "bg-[linear-gradient(180deg,var(--surface-muted)_0%,var(--surface)_40%)] p-4 sm:p-5",
          compact && "p-3 sm:p-4",
        )}
      >
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-caption font-semibold uppercase tracking-[0.12em] text-[var(--accent)]">
              Portfolio health
            </p>
            <h3 className="text-h4 mt-1.5">Enterprise delivery overview</h3>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 shadow-[var(--shadow-xs)]">
            <span className="size-1.5 animate-pulse rounded-full bg-[var(--success)]" />
            <p className="text-caption font-medium text-[var(--text-muted)]">
              Live · Sample visualization
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <ProductMetricCard
            label="Projects"
            value="42"
            delta="Active across 6 portfolios"
            icon={<FolderKanban className="size-4" />}
          />
          <ProductMetricCard
            label="On track"
            value="31"
            delta="74% healthy"
            tone="positive"
            icon={<Target className="size-4" />}
          />
          <ProductMetricCard
            label="At risk"
            value="7"
            delta="Needs attention"
            tone="warning"
            icon={<ShieldAlert className="size-4" />}
          />
          <ProductMetricCard
            label="Goal progress"
            value="68%"
            delta="+4% this month"
            tone="positive"
            icon={<Gauge className="size-4" />}
          />
        </div>

        {!compact ? (
          <div className="mt-4 grid gap-3 lg:grid-cols-[1.2fr_0.8fr]">
            <ProductActivity />
            <div className="space-y-3">
              <ProductNotification
                tone="warning"
                title="Capacity pressure on Platform Migration"
                description="Two critical dependencies slipped. Review owners and replan milestone."
                time="12m"
              />
              <ProductNotification
                tone="success"
                title="Objective linked to delivery"
                description="Expand Enterprise ARR now tracks 3 active projects."
                time="1h"
              />
              <ProductNotification
                tone="info"
                title="Leadership digest ready"
                description="Weekly portfolio summary prepared for executive review."
                time="3h"
              />
            </div>
          </div>
        ) : null}
      </div>
    </ProductWindow>
  );
}
