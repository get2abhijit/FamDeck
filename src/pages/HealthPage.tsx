import { createPlaceholderPage } from '@/components/templates/PlaceholderPageFactory';

const HealthPage = createPlaceholderPage({
  eyebrow: 'Wellbeing',
  title: 'Health',
  description: 'Health reminders, records, and emergency context can attach to this page in a future provider layer.',
  highlights: [
    {
      title: 'Sensitive data boundary',
      description: 'The UI is separated from any health data source or synchronization strategy.',
    },
    {
      title: 'Reminder-ready',
      description: 'This page can later host medications, appointments, and care plans as widgets.',
    },
    {
      title: 'Configuration-first',
      description: 'Labels, sections, and provider visibility should remain fully configurable.',
    },
  ],
  footerNote: 'Health records and logic are intentionally out of scope for the shell.',
});

export default HealthPage;
