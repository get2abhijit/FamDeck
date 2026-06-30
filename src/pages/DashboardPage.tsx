import dashboard from '@/config/dashboard.json';
import links from '@/config/links.json';
import providers from '@/config/providers.json';
import widgets from '@/config/widgets.json';
import { Card } from '@/components/ui/Card';
import { createPlaceholderPage } from '@/components/templates/PlaceholderPageFactory';

const DashboardPage = createPlaceholderPage({
  eyebrow: dashboard.hero.eyebrow,
  title: dashboard.hero.title,
  description: dashboard.hero.description,
  stats: dashboard.stats,
  highlights: dashboard.highlights,
  footerNote: 'This dashboard is intentionally light on behavior until the feature layers are ready.',
  actions: (
    <Card className="space-y-2 p-4 shadow-none">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Ready for expansion</p>
      <p className="text-sm text-muted">
        {widgets.widgets.length} widget slots, {providers.providers.length} provider stubs, {links.links.length}{' '}
        links.
      </p>
    </Card>
  ),
});

export default DashboardPage;
