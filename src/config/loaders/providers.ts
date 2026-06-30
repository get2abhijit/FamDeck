import rawProviders from '@/config/providers.json';
import type { ProviderItem, ProviderStatus, ProvidersConfig } from '@/config/types/providers';
import { createAssertions } from '@/config/validation/guards';
import type { Assertions } from '@/config/validation/guards';

const SECTION = 'providers';

const VALID_STATUSES: readonly ProviderStatus[] = ['placeholder', 'active', 'disabled'];

function assertProviderItem(item: unknown, index: number): asserts item is ProviderItem {
  const a: Assertions = createAssertions(`${SECTION}.providers[${index}]`);
  a.assertObject(item, 'item');
  const o = item as Record<string, unknown>;
  a.assertNonEmptyString(o['id'], 'id');
  a.assertNonEmptyString(o['label'], 'label');
  a.assertOneOf(o['status'], 'status', VALID_STATUSES);
}

function validateProvidersConfig(raw: unknown): ProvidersConfig {
  const a: Assertions = createAssertions(SECTION);
  a.assertObject(raw, SECTION);
  const o = raw as Record<string, unknown>;
  a.assertArrayOf(o['providers'], 'providers', assertProviderItem);
  return raw as unknown as ProvidersConfig;
}

export function loadProvidersConfig(): ProvidersConfig {
  return validateProvidersConfig(rawProviders);
}
