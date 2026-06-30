import rawSettings from '@/config/settings.json';
import type { SettingsConfig } from '@/config/types/settings';
import { createAssertions } from '@/config/validation/guards';
import type { Assertions } from '@/config/validation/guards';

const SECTION = 'settings';

function validateSettingsConfig(raw: unknown): SettingsConfig {
  const a: Assertions = createAssertions(SECTION);
  a.assertObject(raw, SECTION);
  const o = raw as Record<string, unknown>;
  a.assertNonEmptyString(o['appName'], 'appName');
  a.assertString(o['brandTagline'], 'brandTagline');
  a.assertBoolean(o['sidebarCollapsedByDefault'], 'sidebarCollapsedByDefault');
  a.assertNonEmptyString(o['sidebarStorageKey'], 'sidebarStorageKey');
  a.assertBoolean(o['enableSearch'], 'enableSearch');
  a.assertNonEmptyString(o['defaultRoute'], 'defaultRoute');
  a.assertBoolean(o['showFooter'], 'showFooter');
  return raw as unknown as SettingsConfig;
}

export function loadSettingsConfig(): SettingsConfig {
  return validateSettingsConfig(rawSettings);
}
