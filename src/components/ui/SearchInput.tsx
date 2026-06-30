import { Search } from 'lucide-react';

import { Card } from '@/components/ui/Card';

interface SearchInputProps {
  placeholder?: string;
}

export function SearchInput({ placeholder = 'Search the workspace' }: SearchInputProps) {
  return (
    <Card className="flex items-center gap-3 px-4 py-3">
      <Search className="h-4 w-4 text-muted" />
      <input
        aria-label="Search workspace"
        className="w-full bg-transparent text-sm text-text placeholder:text-muted focus:outline-none"
        placeholder={placeholder}
        type="search"
      />
      <kbd className="hidden rounded-full border border-border bg-surface px-2 py-1 text-[11px] font-medium text-muted sm:inline-flex">
        ⌘K
      </kbd>
    </Card>
  );
}
