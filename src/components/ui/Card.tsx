import type { HTMLAttributes } from 'react';

import { cn } from '@/utils/cn';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('rounded-3xl border border-border/70 bg-panel/85 p-6 shadow-soft backdrop-blur-xl', className)} {...props} />;
}
