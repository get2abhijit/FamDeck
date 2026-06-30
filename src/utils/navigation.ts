import {
  BookOpenText,
  CalendarDays,
  FolderKanban,
  HeartPulse,
  type LucideIcon,
  Image,
  Landmark,
  LayoutDashboard,
  PlaneTakeoff,
  Settings,
  ShieldAlert,
  SquareCheckBig,
  Users,
} from 'lucide-react';

const navigationIcons = {
  LayoutDashboard,
  Users,
  CalendarDays,
  FolderKanban,
  Landmark,
  HeartPulse,
  PlaneTakeoff,
  Image,
  BookOpenText,
  SquareCheckBig,
  ShieldAlert,
  Settings,
} as const;

export type NavigationIconName = keyof typeof navigationIcons;

export function getNavigationIcon(name: string): LucideIcon {
  return navigationIcons[name as NavigationIconName] ?? LayoutDashboard;
}
