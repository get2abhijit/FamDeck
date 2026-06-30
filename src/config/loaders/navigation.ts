import rawNavigation from '@/config/navigation.json';
import type { NavItem, NavigationConfig } from '@/config/types/navigation';
import { createAssertions } from '@/config/validation/guards';
import type { Assertions } from '@/config/validation/guards';

const SECTION = 'navigation';

function assertNavItem(item: unknown, index: number): asserts item is NavItem {
  const a: Assertions = createAssertions(`${SECTION}.items[${index}]`);
  a.assertObject(item, 'item');
  const o = item as Record<string, unknown>;
  a.assertNonEmptyString(o['id'], 'id');
  a.assertNonEmptyString(o['label'], 'label');
  a.assertNonEmptyString(o['path'], 'path');
  a.assertNonEmptyString(o['icon'], 'icon');
  a.assertString(o['description'], 'description');
}

function validateNavigationConfig(raw: unknown): NavigationConfig {
  const a: Assertions = createAssertions(SECTION);
  a.assertObject(raw, SECTION);
  const o = raw as Record<string, unknown>;
  a.assertNonEmptyString(o['brand'], 'brand');
  a.assertArrayOf(o['items'], 'items', assertNavItem);
  return raw as unknown as NavigationConfig;
}

export function loadNavigationConfig(): NavigationConfig {
  return validateNavigationConfig(rawNavigation);
}
