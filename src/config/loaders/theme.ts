import rawTheme from '@/config/theme.json';
import type { ThemeConfig, ThemeMode } from '@/config/types/theme';
import { createAssertions } from '@/config/validation/guards';
import type { Assertions } from '@/config/validation/guards';

const SECTION = 'theme';

const VALID_MODES: readonly ThemeMode[] = ['light', 'dark', 'system'];

function assertThemeMode(val: unknown, field: string): asserts val is ThemeMode {
  const a: Assertions = createAssertions(SECTION);
  a.assertOneOf(val, field, VALID_MODES);
}

function validateThemeConfig(raw: unknown): ThemeConfig {
  const a: Assertions = createAssertions(SECTION);
  a.assertObject(raw, SECTION);
  const o = raw as Record<string, unknown>;
  assertThemeMode(o['defaultMode'], 'defaultMode');
  a.assertNonEmptyString(o['storageKey'], 'storageKey');
  a.assertNonEmptyString(o['brandColor'], 'brandColor');
  a.assertArrayOf(o['modeOptions'], 'modeOptions', (item, i) =>
    assertThemeMode(item, `modeOptions[${i}]`),
  );
  return raw as unknown as ThemeConfig;
}

export function loadThemeConfig(): ThemeConfig {
  return validateThemeConfig(rawTheme);
}
