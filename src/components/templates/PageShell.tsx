import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { Card } from '@/components/ui/Card';

type StatItem = {
  label: string;
  value: string;
  note: string;
};

type HighlightItem = {
  title: string;
  description: string;
};

interface PageShellProps {
  eyebrow: string;
  title: string;
  description: string;
  stats?: StatItem[];
  highlights?: HighlightItem[];
  footerNote?: string;
  actions?: ReactNode;
}

export function PageShell({ eyebrow, title, description, stats = [], highlights = [], footerNote, actions }: PageShellProps) {
  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-border/60 bg-panel/75 p-0">
        <div className="flex flex-col gap-6 p-6 sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
              <div className="space-y-3">
                <h1 className="font-display text-4xl font-semibold tracking-tight text-text sm:text-5xl">
                  {title}
                </h1>
                <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>
              </div>
            </div>
            {actions ? <div className="flex shrink-0 flex-wrap gap-3">{actions}</div> : null}
          </div>

          {stats.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {stats.map((stat) => (
                <Card key={stat.label} className="p-5 shadow-none">
                  <p className="text-sm text-muted">{stat.label}</p>
                  <p className="mt-3 font-display text-3xl font-semibold text-text">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted">{stat.note}</p>
                </Card>
              ))}
            </div>
          ) : null}
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-3">
        {highlights.map((highlight) => (
          <Card key={highlight.title} className="space-y-3">
            <h2 className="font-display text-2xl font-semibold text-text">{highlight.title}</h2>
            <p className="text-sm leading-6 text-muted">{highlight.description}</p>
          </Card>
        ))}
      </div>

      <Card className="flex items-center justify-between gap-4">
        <div className="space-y-1">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Next layer</p>
          <p className="text-base text-text">{footerNote ?? 'Widgets, providers, and cloud integrations will plug into this shell later.'}</p>
        </div>
        <ArrowUpRight className="hidden h-5 w-5 shrink-0 text-accent sm:block" />
      </Card>
    </div>
  );
}
