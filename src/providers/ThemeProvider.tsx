import { useEffect, useState, type ReactNode } from 'react';

import { appConfig } from '@/config';
import type { ResolvedThemeMode, ThemeMode } from '@/config/types/theme';
import { ThemeContext } from '@/providers/ThemeContext';

const themeConfig = appConfig.theme;

function getSystemTheme(): ResolvedThemeMode {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getStoredTheme(storageKey: string): ThemeMode {
  if (typeof window === 'undefined') {
    return themeConfig.defaultMode as ThemeMode;
  }

  const storedValue = window.localStorage.getItem(storageKey);

  if (storedValue === 'light' || storedValue === 'dark' || storedValue === 'system') {
    return storedValue;
  }

  return themeConfig.defaultMode as ThemeMode;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(() => getStoredTheme(themeConfig.storageKey));
  const resolvedMode: ResolvedThemeMode = mode === 'system' ? getSystemTheme() : mode;

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle('dark', resolvedMode === 'dark');
    root.style.colorScheme = resolvedMode;
    window.localStorage.setItem(themeConfig.storageKey, mode);
  }, [mode, resolvedMode]);

  useEffect(() => {
    if (mode !== 'system') {
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const nextTheme = mediaQuery.matches ? 'dark' : 'light';
      document.documentElement.classList.toggle('dark', nextTheme === 'dark');
      document.documentElement.style.colorScheme = nextTheme;
    };

    mediaQuery.addEventListener('change', handleChange);
    handleChange();

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, resolvedMode, setMode }}>{children}</ThemeContext.Provider>
  );
}
