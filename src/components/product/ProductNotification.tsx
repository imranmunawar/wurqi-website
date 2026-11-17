import { AlertTriangle, Bell, CheckCircle2, Info } from "lucide-react";
import { cn } from "@/lib/utils";

export type NotificationTone = "info" | "success" | "warning" | "danger";

export type ProductNotificationProps = {
  title: string;
  description?: string;
  tone?: NotificationTone;
  time?: string;
  className?: string;
};

const toneConfig: Record<
  NotificationTone,
  { icon: typeof Info; className: string; iconClass: string }
> = {
  info: {
    icon: Bell,
    className: "bg-[var(--info-muted)] border-[color-mix(in_srgb,var(--info)_20%,transparent)]",
    iconClass: "text-[var(--info)]",
  },
  success: {
    icon: CheckCircle2,
    className: "bg-[var(--success-muted)] border-[color-mix(in_srgb,var(--success)_20%,transparent)]",
    iconClass: "text-[var(--success)]",
  },
  warning: {
    icon: AlertTriangle,
    className: "bg-[var(--warning-muted)] border-[color-mix(in_srgb,var(--warning)_20%,transparent)]",
    iconClass: "text-[var(--warning)]",
  },
  danger: {
    icon: AlertTriangle,
    className: "bg-[var(--danger-muted)] border-[color-mix(in_srgb,var(--danger)_20%,transparent)]",
    iconClass: "text-[var(--danger)]",
  },
};

export function ProductNotification({
  title,
  description,
  tone = "info",
  time,
  className,
}: ProductNotificationProps) {
  const config = toneConfig[tone];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "flex gap-3 rounded-[var(--radius-lg)] border p-3.5",
        config.className,
        className,
      )}
      role="status"
    >
      <Icon aria-hidden="true" className={cn("mt-0.5 size-4 shrink-0", config.iconClass)} />
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <p className="text-[var(--text-body-sm-size)] font-semibold text-[var(--text-primary)]">
            {title}
          </p>
          {time ? <span className="text-caption shrink-0">{time}</span> : null}
        </div>
        {description ? (
          <p className="mt-1 text-[var(--text-caption-size)] leading-relaxed text-[var(--text-secondary)]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
