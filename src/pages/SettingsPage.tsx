import { createPlaceholderPage } from '@/components/templates/PlaceholderPageFactory';

const SettingsPage = createPlaceholderPage({
  eyebrow: 'System control',
  title: 'Settings',
  description: 'Application preferences, providers, theming, and configuration controls can gather here later.',
  highlights: [
    {
      title: 'Theme and layout',
      description: 'The app already includes a theme toggle and collapsible navigation shell.',
    },
    {
      title: 'Config-first editing',
      description: 'Future settings UI should primarily manipulate JSON-backed configuration.',
    },
    {
      title: 'Extensible surface',
      description: 'New provider and widget settings can be added without changing the shell.',
    },
  ],
  footerNote: 'Settings currently only expose the architecture, not the controls.',
});

export default SettingsPage;
