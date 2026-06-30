import { createPlaceholderPage } from '@/components/templates/PlaceholderPageFactory';

const FamilyPage = createPlaceholderPage({
  eyebrow: 'Shared context',
  title: 'Family',
  description: 'A shared roster and relationship layer can live here later without changing the app shell.',
  highlights: [
    {
      title: 'People as data',
      description: 'Profile records, preferences, and role-based access can be pulled from configuration and providers.',
    },
    {
      title: 'Cross-device continuity',
      description: 'This view is ready to sit on top of local storage, cloud sync, or a backend service.',
    },
    {
      title: 'Composable surface',
      description: 'Nothing in this page depends on a family-specific layout or naming convention.',
    },
  ],
  footerNote: 'Future profile and membership widgets belong here.',
});

export default FamilyPage;
