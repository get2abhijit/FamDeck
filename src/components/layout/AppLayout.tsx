import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import settings from '@/config/settings.json';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { cn } from '@/utils/cn';

export function AppLayout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  // Lazy initializer reads localStorage once on mount so stored preferences
  // override the config default in both directions (true and false).
  const [collapsed, setCollapsed] = useState(() => {
    const stored = window.localStorage.getItem(settings.sidebarStorageKey);
    if (stored === 'true') return true;
    if (stored === 'false') return false;
    return settings.sidebarCollapsedByDefault;
  });

  // Close the mobile sidebar when the route changes (handles programmatic navigation).
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  // Persist sidebar preference whenever it changes.
  useEffect(() => {
    window.localStorage.setItem(settings.sidebarStorageKey, String(collapsed));
  }, [collapsed]);

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[auto_minmax(0,1fr)]">
      {mobileOpen ? (
        <button
          aria-label="Close sidebar overlay"
          className="fixed inset-0 z-30 bg-slate-950/40 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          type="button"
        />
      ) : null}
      <Sidebar
        collapsed={collapsed}
        mobileOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onToggleCollapse={() => setCollapsed((value) => !value)}
      />
      <div className={cn('relative flex min-h-screen flex-col', collapsed && 'lg:max-w-[calc(100vw-5.5rem)]')}>
        <Header onMenuClick={() => setMobileOpen(true)} />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
        {settings.showFooter ? <Footer /> : null}
      </div>
    </div>
  );
}
