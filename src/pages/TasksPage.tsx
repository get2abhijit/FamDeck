import { createPlaceholderPage } from '@/components/templates/PlaceholderPageFactory';

const TasksPage = createPlaceholderPage({
  eyebrow: 'Coordination',
  title: 'Tasks',
  description: 'A shared task surface can be layered onto the shell later without changing the navigation structure.',
  highlights: [
    {
      title: 'Small and reusable',
      description: 'Task cards, queues, and reminders can be introduced as widgets or provider data.',
    },
    {
      title: 'No workflow lock-in',
      description: 'This architecture does not assume a specific task methodology or naming scheme.',
    },
    {
      title: 'Ready for automation',
      description: 'The future may include notifications, AI suggestions, or integrations layered on top.',
    },
  ],
  footerNote: 'Task workflow logic is intentionally absent for now.',
});

export default TasksPage;
