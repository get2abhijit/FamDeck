import { ChevronRight, House } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import navigation from '@/config/navigation.json';
import { Card } from '@/components/ui/Card';

export function Breadcrumb() {
  const location = useLocation();
  const currentItem = navigation.items.find((item) => item.path === location.pathname);

  return (
    <Card className="px-4 py-3">
      <div className="flex items-center gap-2 text-sm text-muted">
        <Link className="inline-flex items-center gap-2 font-medium text-text transition hover:text-accent" to="/">
          <House className="h-4 w-4" />
          Home
        </Link>
        <ChevronRight className="h-4 w-4" />
        <span aria-current="page" className="font-medium text-text">
          {currentItem?.label ?? 'Workspace'}
        </span>
      </div>
    </Card>
  );
}
