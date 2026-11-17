import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type StrategyFlowStep = {
  title: string;
  description: string;
};

const defaultSteps: StrategyFlowStep[] = [
  { title: "Strategy", description: "Define direction and intended outcomes." },
  { title: "Goals", description: "Translate strategy into measurable targets." },
  { title: "OKRs", description: "Align teams to objectives and key results." },
  { title: "Programs", description: "Organize related initiatives at scale." },
  { title: "Projects", description: "Plan and deliver scoped bodies of work." },
  { title: "Work Plans", description: "Schedule activities, owners, and timelines." },
  { title: "Activities", description: "Coordinate the workstreams that move delivery." },
  { title: "Tasks", description: "Execute day-to-day actions with accountability." },
  { title: "Progress", description: "Track status as work happens." },
  { title: "Insights", description: "Turn visibility into better decisions." },
];

export type StrategyFlowProps = {
  steps?: StrategyFlowStep[];
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export function StrategyFlow({
  steps = defaultSteps,
  orientation = "vertical",
  className,
}: StrategyFlowProps) {
  const horizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] md:p-8",
        className,
      )}
      role="list"
      aria-label="Strategy to execution flow"
    >
      <p className="text-caption mb-5 font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
        Strategy → execution
      </p>
      <ol
        className={cn(
          "grid gap-3",
          horizontal
            ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-5"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
        )}
      >
        {steps.map((step, index) => (
          <li key={step.title} className="relative flex min-w-0 flex-col">
            <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface-muted)] p-4">
              <span className="text-caption font-semibold text-[var(--accent)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-[var(--text-body-size)] font-semibold text-[var(--text-primary)]">
                {step.title}
              </p>
              <p className="mt-1 text-[var(--text-body-sm-size)] text-[var(--text-secondary)]">
                {step.description}
              </p>
            </div>
            {index < steps.length - 1 ? (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 top-1/2 z-[1] hidden -translate-y-1/2 text-[var(--accent)] xl:block"
              >
                <ArrowRight className="size-4" />
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
