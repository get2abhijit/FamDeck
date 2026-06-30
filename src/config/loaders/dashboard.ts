import rawDashboard from '@/config/dashboard.json';
import type {
  DashboardConfig,
  DashboardHero,
  DashboardHighlight,
  DashboardStat,
} from '@/config/types/dashboard';
import { createAssertions } from '@/config/validation/guards';
import type { Assertions } from '@/config/validation/guards';

const SECTION = 'dashboard';

function assertHero(val: unknown): asserts val is DashboardHero {
  const a: Assertions = createAssertions(`${SECTION}.hero`);
  a.assertObject(val, 'hero');
  const o = val as Record<string, unknown>;
  a.assertNonEmptyString(o['eyebrow'], 'eyebrow');
  a.assertNonEmptyString(o['title'], 'title');
  a.assertNonEmptyString(o['description'], 'description');
}

function assertStat(item: unknown, index: number): asserts item is DashboardStat {
  const a: Assertions = createAssertions(`${SECTION}.stats[${index}]`);
  a.assertObject(item, 'item');
  const o = item as Record<string, unknown>;
  a.assertNonEmptyString(o['label'], 'label');
  a.assertNonEmptyString(o['value'], 'value');
  a.assertString(o['note'], 'note');
}

function assertHighlight(item: unknown, index: number): asserts item is DashboardHighlight {
  const a: Assertions = createAssertions(`${SECTION}.highlights[${index}]`);
  a.assertObject(item, 'item');
  const o = item as Record<string, unknown>;
  a.assertNonEmptyString(o['title'], 'title');
  a.assertNonEmptyString(o['description'], 'description');
}

function validateDashboardConfig(raw: unknown): DashboardConfig {
  const a: Assertions = createAssertions(SECTION);
  a.assertObject(raw, SECTION);
  const o = raw as Record<string, unknown>;
  assertHero(o['hero']);
  a.assertArrayOf(o['stats'], 'stats', assertStat);
  a.assertArrayOf(o['highlights'], 'highlights', assertHighlight);
  return raw as unknown as DashboardConfig;
}

export function loadDashboardConfig(): DashboardConfig {
  return validateDashboardConfig(rawDashboard);
}
