import { Menu } from 'lucide-react';

import { appConfig } from '@/config';

const family = appConfig.family;
const settings = appConfig.settings;
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { SearchInput } from '@/components/ui/SearchInput';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border/60 bg-surface/80 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <button
            aria-label="Open navigation"
            className="inline-flex rounded-2xl border border-border bg-panel p-3 text-text transition hover:bg-surface lg:hidden"
            onClick={onMenuClick}
            type="button"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs uppercase tracking-[0.3em] text-muted">
              {settings.appName}
            </p>
            <p className="truncate font-display text-2xl font-semibold text-text">{family.tagline}</p>
          </div>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
        <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-center">
          <Breadcrumb />
          <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
            {settings.enableSearch ? <SearchInput /> : null}
            <div className="md:hidden">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
