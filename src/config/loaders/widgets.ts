import rawWidgets from '@/config/widgets.json';
import type { WidgetItem, WidgetSize, WidgetsConfig } from '@/config/types/widgets';
import { createAssertions } from '@/config/validation/guards';
import type { Assertions } from '@/config/validation/guards';

const SECTION = 'widgets';

const VALID_SIZES: readonly WidgetSize[] = ['sm', 'md', 'lg', 'full'];

function assertWidgetItem(item: unknown, index: number): asserts item is WidgetItem {
  const a: Assertions = createAssertions(`${SECTION}.widgets[${index}]`);
  a.assertObject(item, 'item');
  const o = item as Record<string, unknown>;
  a.assertNonEmptyString(o['id'], 'id');
  a.assertNonEmptyString(o['title'], 'title');
  a.assertNonEmptyString(o['description'], 'description');
  if (o['size'] !== undefined) {
    a.assertOneOf(o['size'], 'size', VALID_SIZES);
  }
}

function validateWidgetsConfig(raw: unknown): WidgetsConfig {
  const a: Assertions = createAssertions(SECTION);
  a.assertObject(raw, SECTION);
  const o = raw as Record<string, unknown>;
  a.assertArrayOf(o['widgets'], 'widgets', assertWidgetItem);
  return raw as unknown as WidgetsConfig;
}

export function loadWidgetsConfig(): WidgetsConfig {
  return validateWidgetsConfig(rawWidgets);
}
