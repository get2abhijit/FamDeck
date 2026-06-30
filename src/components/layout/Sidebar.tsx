import { ChevronLeft, ChevronRight, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import navigation from '@/config/navigation.json';
import settings from '@/config/settings.json';
import { Card } from '@/components/ui/Card';
import { getNavigationIcon } from '@/utils/navigation';
import { cn } from '@/utils/cn';

interface SidebarProps {
  collapsed: boolean;
  mobileOpen: boolean;
  onClose: () => void;
  onToggleCollapse: () => void;
}

function NavItemIcon({ name }: { name: string }) {
  const Icon = getNavigationIcon(name);

  return <Icon className="h-4 w-4 shrink-0" />;
}

export function Sidebar({ collapsed, mobileOpen, onClose, onToggleCollapse }: SidebarProps) {
  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-40 w-[18rem] border-r border-border/60 bg-surface/95 px-4 py-5 backdrop-blur-xl transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0',
        collapsed ? 'lg:w-[5.5rem]' : 'lg:w-[18rem]',
        mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0',
      )}
    >
      <div className="flex h-full flex-col gap-5">
        <div className="flex items-center justify-between gap-3">
          <div className={cn('flex items-center gap-3', collapsed && 'lg:justify-center')}>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/15 text-accent shadow-inner">
              <span className="font-display text-lg font-bold">F</span>
            </div>
            <div className={cn('min-w-0', collapsed && 'lg:hidden')}>
              <p className="font-display text-lg font-semibold text-text">{navigation.brand}</p>
              <p className="text-xs text-muted">{settings.brandTagline}</p>
            </div>
          </div>
          <button
            aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="hidden rounded-2xl border border-border bg-panel p-2 text-text transition hover:bg-surface lg:inline-flex"
            onClick={onToggleCollapse}
            type="button"
          >
            {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
          </button>
          <button
            aria-label="Close sidebar"
            className="rounded-2xl border border-border bg-panel p-2 text-text transition hover:bg-surface lg:hidden"
            onClick={onClose}
            type="button"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto pr-1">
          {navigation.items.map((item) => {
            const isRoot = item.path === '/';

            return (
              <NavLink
                key={item.id}
                className={({ isActive }) =>
                  cn(
                    'group flex items-center gap-3 rounded-2xl border border-transparent px-3 py-3 text-sm font-medium text-muted transition hover:border-border hover:bg-panel hover:text-text',
                    isActive && 'border-accent/20 bg-accent/10 text-text shadow-sm',
                    collapsed && 'lg:justify-center lg:px-2',
                  )
                }
                end={isRoot}
                onClick={onClose}
                to={item.path}
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-surface text-accent transition group-hover:bg-accent/10">
                  <NavItemIcon name={item.icon} />
                </span>
                <span className={cn('min-w-0 flex-1', collapsed && 'lg:hidden')}>
                  <span className="block truncate">{item.label}</span>
                  <span className="block truncate text-xs font-normal text-muted">{item.description}</span>
                </span>
                <ChevronRight className={cn('h-4 w-4 text-muted transition group-hover:text-text', collapsed && 'lg:hidden')} />
              </NavLink>
            );
          })}
        </nav>

        <Card className={cn('space-y-2 p-4', collapsed && 'lg:hidden')}>
          <p className="text-sm font-medium text-text">Foundation only</p>
          <p className="text-sm text-muted">
            The app shell is ready for widgets, providers, and external services later.
          </p>
        </Card>
      </div>
    </aside>
  );
}
