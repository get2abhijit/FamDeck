import { createPlaceholderPage } from '@/components/templates/PlaceholderPageFactory';

const CalendarPage = createPlaceholderPage({
  eyebrow: 'Scheduling',
  title: 'Calendar',
  description: 'Calendar integrations can be slotted into this route while the layout remains unchanged.',
  highlights: [
    {
      title: 'Provider ready',
      description: 'Google Calendar, Outlook, and other sources can appear as widgets or aggregated views.',
    },
    {
      title: 'Event-first design',
      description: 'The visual shell can support upcoming agenda cards, reminders, and timeline views later.',
    },
    {
      title: 'Responsive by default',
      description: 'The page template already adapts to compact and wide layouts.',
    },
  ],
  footerNote: 'Calendar business logic is intentionally omitted at this stage.',
});

export default CalendarPage;
