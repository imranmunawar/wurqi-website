import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Briefcase,
  Building2,
  ClipboardList,
  Cog,
  Compass,
  FileText,
  Kanban,
  Layers,
  LayoutDashboard,
  Puzzle,
  ShieldAlert,
  Tag,
  Target,
  Users,
  UsersRound,
  Workflow,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  layers: Layers,
  kanban: Kanban,
  briefcase: Briefcase,
  target: Target,
  workflow: Workflow,
  users: Users,
  "layout-dashboard": LayoutDashboard,
  "shield-alert": ShieldAlert,
  "building-2": Building2,
  "clipboard-list": ClipboardList,
  cog: Cog,
  "users-round": UsersRound,
  compass: Compass,
  puzzle: Puzzle,
  "book-open": BookOpen,
  "file-text": FileText,
  tag: Tag,
};

export function getNavIcon(name?: string): LucideIcon | null {
  if (!name) return null;
  return iconMap[name] ?? null;
}
