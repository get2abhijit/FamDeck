import rawLinks from '@/config/links.json';
import type { LinkItem, LinksConfig } from '@/config/types/links';
import { createAssertions } from '@/config/validation/guards';
import type { Assertions } from '@/config/validation/guards';

const SECTION = 'links';

function assertLinkItem(item: unknown, index: number): asserts item is LinkItem {
  const a: Assertions = createAssertions(`${SECTION}.links[${index}]`);
  a.assertObject(item, 'item');
  const o = item as Record<string, unknown>;
  a.assertNonEmptyString(o['id'], 'id');
  a.assertNonEmptyString(o['label'], 'label');
  a.assertNonEmptyString(o['href'], 'href');
}

function validateLinksConfig(raw: unknown): LinksConfig {
  const a: Assertions = createAssertions(SECTION);
  a.assertObject(raw, SECTION);
  const o = raw as Record<string, unknown>;
  a.assertArrayOf(o['links'], 'links', assertLinkItem);
  return raw as unknown as LinksConfig;
}

export function loadLinksConfig(): LinksConfig {
  return validateLinksConfig(rawLinks);
}
