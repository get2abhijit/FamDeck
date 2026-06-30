import { Monitor, Moon, Sun } from 'lucide-react';

import { Card } from '@/components/ui/Card';
import { type ThemeMode, useTheme } from '@/providers/ThemeContext';

const themeLabels: Record<ThemeMode, string> = {
  light: 'Light',
  dark: 'Dark',
  system: 'System',
};

const themeIcons: Record<ThemeMode, typeof Sun> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

const themeOrder: ThemeMode[] = ['system', 'light', 'dark'];

export function ThemeToggle() {
  const { mode, setMode } = useTheme();
  const Icon = themeIcons[mode];

  const handleClick = () => {
    const nextIndex = (themeOrder.indexOf(mode) + 1) % themeOrder.length;
    setMode(themeOrder[nextIndex]);
  };

  return (
    <Card className="p-0">
      <button
        className="flex items-center gap-2 rounded-3xl px-4 py-3 text-sm font-medium text-text transition hover:bg-surface/80"
        onClick={handleClick}
        type="button"
      >
        <Icon className="h-4 w-4 text-accent" />
        <span>{themeLabels[mode]}</span>
      </button>
    </Card>
  );
}
