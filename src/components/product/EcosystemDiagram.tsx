import { Eye, Flag, FolderKanban, Users } from "lucide-react";
import { cn } from "@/lib/utils";

export type EcosystemDiagramProps = {
  className?: string;
};

const nodes = [
  {
    id: "goals",
    title: "Goals",
    description: "Objectives & outcomes",
    icon: Flag,
  },
  {
    id: "projects",
    title: "Projects",
    description: "Delivery & portfolios",
    icon: FolderKanban,
  },
  {
    id: "people",
    title: "People",
    description: "Teams & ownership",
    icon: Users,
  },
] as const;

/** Connected view of work: Goals / Projects / People → Visibility. */
export function EcosystemDiagram({ className }: EcosystemDiagramProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-xl)] border border-[var(--border)] bg-[linear-gradient(180deg,var(--surface)_0%,var(--surface-muted)_100%)] p-5 shadow-[var(--shadow-sm)] sm:p-6",
        className,
      )}
      role="img"
      aria-label="Ecosystem diagram connecting goals, projects, and people into visibility"
    >
      <p className="text-caption mb-6 text-center font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
        Connected workspace
      </p>

      <div className="grid gap-4 sm:grid-cols-3">
        {nodes.map((node) => {
          const Icon = node.icon;
          return (
            <div
              key={node.id}
              className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-4 text-center shadow-[var(--shadow-xs)]"
            >
              <span className="mx-auto flex size-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--accent-muted)] text-[var(--accent)]">
                <Icon aria-hidden="true" className="size-5" />
              </span>
              <p className="mt-3 text-[var(--text-body-size)] font-semibold text-[var(--text-primary)]">
                {node.title}
              </p>
              <p className="mt-1 text-[var(--text-caption-size)] text-[var(--text-muted)]">
                {node.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="my-5 flex items-center justify-center gap-2" aria-hidden="true">
        <span className="h-px w-10 bg-[var(--border-strong)] sm:w-16" />
        <span className="rounded-full border border-[var(--color-brand-200)] bg-[var(--accent-muted)] px-3 py-1 text-[var(--text-caption-size)] font-semibold text-[var(--color-brand-700)]">
          flows into
        </span>
        <span className="h-px w-10 bg-[var(--border-strong)] sm:w-16" />
      </div>

      <div className="mx-auto max-w-md rounded-[var(--radius-xl)] border border-[var(--color-navy-700)] bg-[var(--color-navy-900)] p-5 text-center text-[var(--text-inverse)] shadow-[var(--shadow-md)]">
        <span className="mx-auto flex size-10 items-center justify-center rounded-[var(--radius-md)] bg-[color-mix(in_srgb,var(--accent)_20%,transparent)] text-[var(--color-brand-300)]">
          <Eye aria-hidden="true" className="size-5" />
        </span>
        <p className="mt-3 text-[var(--text-body-size)] font-semibold">
          Visibility
        </p>
        <p className="mt-1 text-[var(--text-body-sm-size)] text-[var(--color-navy-300)]">
          Live progress, risk, and leadership signal across the organization.
        </p>
      </div>
    </div>
  );
}
