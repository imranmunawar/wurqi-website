import { cn } from "@/lib/utils";

export type ActivityItem = {
  id: string;
  actor: string;
  action: string;
  target: string;
  time: string;
};

export type ProductActivityProps = {
  items?: ActivityItem[];
  className?: string;
};

const defaultItems: ActivityItem[] = [
  {
    id: "1",
    actor: "A. Chen",
    action: "updated status on",
    target: "Q3 Portfolio Review",
    time: "2m ago",
  },
  {
    id: "2",
    actor: "M. Ortiz",
    action: "mitigated risk on",
    target: "Platform Migration",
    time: "18m ago",
  },
  {
    id: "3",
    actor: "J. Park",
    action: "completed milestone",
    target: "Customer Onboarding",
    time: "1h ago",
  },
  {
    id: "4",
    actor: "S. Patel",
    action: "linked objective to",
    target: "Expand Enterprise ARR",
    time: "3h ago",
  },
];

export function ProductActivity({
  items = defaultItems,
  className,
}: ProductActivityProps) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-4",
        className,
      )}
    >
      <p className="text-[var(--text-body-sm-size)] font-semibold text-[var(--text-primary)]">
        Recent activity
      </p>
      <ul className="mt-3 space-y-3">
        {items.map((item) => (
          <li key={item.id} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="mt-1 size-2 shrink-0 rounded-full bg-[var(--accent)]"
            />
            <div className="min-w-0 flex-1">
              <p className="text-[var(--text-body-sm-size)] text-[var(--text-secondary)]">
                <span className="font-semibold text-[var(--text-primary)]">
                  {item.actor}
                </span>{" "}
                {item.action}{" "}
                <span className="font-medium text-[var(--text-primary)]">
                  {item.target}
                </span>
              </p>
              <p className="text-caption mt-0.5">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
