import { createPlaceholderPage } from '@/components/templates/PlaceholderPageFactory';

const EmergencyPage = createPlaceholderPage({
  eyebrow: 'Critical access',
  title: 'Emergency',
  description: 'Emergency contacts, safety information, and important steps can be surfaced here with minimal friction.',
  highlights: [
    {
      title: 'Fast path design',
      description: 'This route should remain quick to access on mobile and desktop layouts.',
    },
    {
      title: 'Sensitive content',
      description: 'Critical details can be sourced from config or protected provider data later.',
    },
    {
      title: 'Foundation first',
      description: 'Only the shell exists right now; the operational logic comes later.',
    },
  ],
  footerNote: 'Emergency workflows are not implemented yet.',
});

export default EmergencyPage;
