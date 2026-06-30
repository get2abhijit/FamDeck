import { createPlaceholderPage } from '@/components/templates/PlaceholderPageFactory';

const FinancePage = createPlaceholderPage({
  eyebrow: 'Shared finances',
  title: 'Finance',
  description: 'Budgeting, account summaries, and shared financial links can be supported without altering navigation.',
  highlights: [
    {
      title: 'Private by design',
      description: 'Financial data should remain a provider concern while the UI stays configuration-first.',
    },
    {
      title: 'Expandable surface',
      description: 'Budgets, transactions, and payment reminders can be added as widget layers later.',
    },
    {
      title: 'Generic enough for others',
      description: 'The same route could serve clubs, apartments, or small teams with only config changes.',
    },
  ],
  footerNote: 'No account logic is implemented in the foundation.',
});

export default FinancePage;
