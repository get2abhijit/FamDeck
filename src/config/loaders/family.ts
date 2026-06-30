import rawFamily from '@/config/family.json';
import type { FamilyConfig } from '@/config/types/family';
import { createAssertions } from '@/config/validation/guards';
import type { Assertions } from '@/config/validation/guards';

const SECTION = 'family';

function validateFamilyConfig(raw: unknown): FamilyConfig {
  const a: Assertions = createAssertions(SECTION);
  a.assertObject(raw, SECTION);
  const o = raw as Record<string, unknown>;
  a.assertNonEmptyString(o['name'], 'name');
  a.assertNonEmptyString(o['tagline'], 'tagline');
  a.assertNonEmptyString(o['subtitle'], 'subtitle');
  a.assertNonEmptyString(o['timezone'], 'timezone');
  a.assertNonEmptyString(o['locale'], 'locale');
  a.assertNonEmptyString(o['ownerLabel'], 'ownerLabel');
  return raw as unknown as FamilyConfig;
}

export function loadFamilyConfig(): FamilyConfig {
  return validateFamilyConfig(rawFamily);
}
