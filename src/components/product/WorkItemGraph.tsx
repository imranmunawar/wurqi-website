import { cn } from "@/lib/utils";

export type WorkItemKind =
  | "Objective"
  | "Project"
  | "Activity"
  | "Task"
  | "Risk"
  | "Issue"
  | "Milestone"
  | "Request"
  | "Meeting";

const kindStyles: Record<WorkItemKind, string> = {
  Objective: "border-[var(--color-brand-300)] bg-[var(--accent-muted)] text-[var(--color-brand-800)]",
  Project: "border-[var(--color-navy-300)] bg-[var(--color-navy-50)] text-[var(--color-navy-800)]",
  Activity: "border-[var(--color-slate-300)] bg-[var(--surface)] text-[var(--text-primary)]",
  Task: "border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)]",
  Risk: "border-[color-mix(in_srgb,var(--warning)_35%,transparent)] bg-[var(--warning-muted)] text-[var(--warning)]",
  Issue: "border-[color-mix(in_srgb,var(--danger)_35%,transparent)] bg-[var(--danger-muted)] text-[var(--danger)]",
  Milestone: "border-[var(--color-brand-200)] bg-[var(--surface)] text-[var(--color-brand-700)]",
  Request: "border-[var(--color-navy-200)] bg-[var(--surface-muted)] text-[var(--color-navy-700)]",
  Meeting: "border-[var(--border)] bg-[var(--surface-muted)] text-[var(--text-secondary)]",
};

const defaultItems: { kind: WorkItemKind; label: string }[] = [
  { kind: "Objective", label: "Expand enterprise ARR" },
  { kind: "Project", label: "Platform rollout" },
  { kind: "Activity", label: "Change enablement" },
  { kind: "Task", label: "Finalize RACI" },
  { kind: "Milestone", label: "Pilot go-live" },
  { kind: "Risk", label: "Vendor delay" },
  { kind: "Issue", label: "Access blocker" },
  { kind: "Request", label: "Extra capacity" },
  { kind: "Meeting", label: "Steerco sync" },
];

export type WorkItemGraphProps = {
  className?: string;
  items?: { kind: WorkItemKind; label: string }[];
};

/** Connected work-item visualization (CSS/HTML product viz). */
export function WorkItemGraph({
  className,
  items = defaultItems,
}: WorkItemGraphProps) {
  const objective = items.find((item) => item.kind === "Objective");
  const rest = items.filter((item) => item.kind !== "Objective");

  return (
    <div
      className={cn(
        "rounded-[var(--radius-xl)] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)]",
        className,
      )}
      role="img"
      aria-label="Connected work items from objective through delivery artifacts"
    >
      <p className="text-caption mb-4 font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
        Connected work
      </p>

      {objective ? (
        <div className="mb-4 flex justify-center">
          <WorkNode kind={objective.kind} label={objective.label} featured />
        </div>
      ) : null}

      <div className="relative mx-auto mb-4 h-6 w-px bg-[var(--border-strong)]" aria-hidden="true" />

      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((item) => (
          <li key={`${item.kind}-${item.label}`} className="relative">
            <div
              aria-hidden="true"
              className="absolute -top-3 left-1/2 hidden h-3 w-px -translate-x-1/2 bg-[var(--border)] sm:block"
            />
            <WorkNode kind={item.kind} label={item.label} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function WorkNode({
  kind,
  label,
  featured,
}: {
  kind: WorkItemKind;
  label: string;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border px-3 py-3 text-center",
        kindStyles[kind],
        featured && "min-w-[14rem] px-5 py-4 shadow-[var(--shadow-sm)]",
      )}
    >
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] opacity-80">
        {kind}
      </p>
      <p className="mt-1 text-[var(--text-body-sm-size)] font-semibold">{label}</p>
    </div>
  );
}
