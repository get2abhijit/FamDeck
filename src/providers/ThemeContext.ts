import { createContext, useContext } from 'react';
import type { ThemeMode, ResolvedThemeMode } from '@/config/types/theme';

export type { ThemeMode, ResolvedThemeMode };

export interface ThemeContextValue {
  mode: ThemeMode;
  resolvedMode: ResolvedThemeMode;
  setMode: (mode: ThemeMode) => void;
}

export const ThemeContext = createContext<ThemeContextValue | null>(null);

export function useTheme() {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error('useTheme must be used inside ThemeProvider');
  }

  return value;
}
