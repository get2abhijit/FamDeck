import type { ReactNode } from 'react';

import { PageShell } from '@/components/templates/PageShell';

export interface PlaceholderPageSpec {
  eyebrow: string;
  title: string;
  description: string;
  stats?: Array<{ label: string; value: string; note: string }>;
  highlights?: Array<{ title: string; description: string }>;
  footerNote?: string;
  actions?: ReactNode;
}

export function createPlaceholderPage(spec: PlaceholderPageSpec) {
  return function PlaceholderPage() {
    return <PageShell {...spec} />;
  };
}
