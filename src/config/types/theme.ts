export type ThemeMode = 'light' | 'dark' | 'system';

export type ResolvedThemeMode = Exclude<ThemeMode, 'system'>;

export interface ThemeConfig {
  defaultMode: ThemeMode;
  storageKey: string;
  brandColor: string;
  modeOptions: ThemeMode[];
}
