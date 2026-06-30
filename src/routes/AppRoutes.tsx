import { lazy, Suspense, type ComponentType } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import navigation from '@/config/navigation.json';
import settings from '@/config/settings.json';
import { AppLayout } from '@/components/layout/AppLayout';
import { pageLoaders } from '@/routes/pageLoaders';

// Lazy components must be created once at module scope.
// Creating them inside a component body causes React to treat each render
// as a new component type, forcing a full unmount/remount on every update.
const lazyPages = Object.fromEntries(
  Object.entries(pageLoaders).map(([id, loader]) => [
    id,
    lazy(loader as () => Promise<{ default: ComponentType }>),
  ]),
) as Record<keyof typeof pageLoaders, ReturnType<typeof lazy>>;

const fallback = (
  <div className="rounded-3xl border border-border/60 bg-panel/75 p-6 text-muted shadow-soft">
    Loading…
  </div>
);

export function AppRoutes() {
  return (
    <Suspense fallback={fallback}>
      <Routes>
        <Route element={<AppLayout />}>
          {navigation.items.map((item) => {
            const LazyPage = lazyPages[item.id as keyof typeof pageLoaders];

            if (item.path === '/') {
              return <Route key={item.id} index element={<LazyPage />} />;
            }

            return <Route key={item.id} path={item.path.slice(1)} element={<LazyPage />} />;
          })}
          <Route element={<Navigate replace to={settings.defaultRoute} />} path="*" />
        </Route>
      </Routes>
    </Suspense>
  );
}
