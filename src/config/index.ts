/**
 * Configuration engine for FamDeck.
 *
 * All configuration is loaded and validated once at module initialisation.
 * Consumers import `appConfig` for type-safe, validated access to every
 * configuration section.  Raw JSON files remain the single source of truth;
 * this module is the typed, validated gateway to them.
 *
 * Import pattern:
 *   import { appConfig } from '@/config';
 *
 * Type-only import pattern:
 *   import type { NavigationConfig, NavItem } from '@/config';
 */

import { loadDashboardConfig } from './loaders/dashboard';
import { loadFamilyConfig } from './loaders/family';
import { loadLinksConfig } from './loaders/links';
import { loadNavigationConfig } from './loaders/navigation';
import { loadProvidersConfig } from './loaders/providers';
import { loadSettingsConfig } from './loaders/settings';
import { loadThemeConfig } from './loaders/theme';
import { loadWidgetsConfig } from './loaders/widgets';

// ---------------------------------------------------------------------------
// Singleton — validated once on first import, frozen to prevent mutation.
// ---------------------------------------------------------------------------

export const appConfig = Object.freeze({
  navigation: loadNavigationConfig(),
  dashboard: loadDashboardConfig(),
  links: loadLinksConfig(),
  widgets: loadWidgetsConfig(),
  family: loadFamilyConfig(),
  theme: loadThemeConfig(),
  providers: loadProvidersConfig(),
  settings: loadSettingsConfig(),
} as const);

export type AppConfig = typeof appConfig;

// ---------------------------------------------------------------------------
// Re-export all types so callers never need to reach into sub-paths.
// ---------------------------------------------------------------------------

export type { NavigationConfig, NavItem } from './types/navigation';
export type { DashboardConfig, DashboardHero, DashboardStat, DashboardHighlight } from './types/dashboard';
export type { LinksConfig, LinkItem } from './types/links';
export type { WidgetsConfig, WidgetItem, WidgetSize } from './types/widgets';
export type { FamilyConfig } from './types/family';
export type { ThemeConfig, ThemeMode, ResolvedThemeMode } from './types/theme';
export type { ProvidersConfig, ProviderItem, ProviderStatus } from './types/providers';
export type { SettingsConfig } from './types/settings';

// ---------------------------------------------------------------------------
// Re-export validation primitives for use in extension points.
// ---------------------------------------------------------------------------

export { ConfigValidationError } from './validation/errors';
export { createAssertions } from './validation/guards';
export type { Assertions } from './validation/guards';
