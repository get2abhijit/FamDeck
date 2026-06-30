export interface FamilyMember {
  name: string;
  role: string;
}

export interface DashboardCardConfig {
  id: 'family' | 'calendar' | 'documents' | 'finance' | 'travel' | 'health' | 'knowledge' | 'photos';
  title: string;
  description: string;
  path: string;
}

export interface QuickActionConfig {
  id: 'add-link' | 'open-calendar' | 'open-documents' | 'manage-family';
  label: string;
}

export const familyName = 'Deshpande';

export const homeTitle = 'Welcome home, Abhijit';

export const homeSubtitle = 'Everything your family needs in one place.';

export const members: FamilyMember[] = [
  { name: 'Abhijit', role: 'Administrator' },
  { name: 'Nihira', role: 'Member' },
  { name: 'Ira', role: 'Member' },
];

export const dashboardCards: DashboardCardConfig[] = [
  {
    id: 'family',
    title: 'Family',
    description: 'People, roles, and shared household context.',
    path: '/family',
  },
  {
    id: 'calendar',
    title: 'Calendar',
    description: 'Schedules, events, and upcoming plans.',
    path: '/calendar',
  },
  {
    id: 'documents',
    title: 'Documents',
    description: 'Files, records, and important links.',
    path: '/documents',
  },
  {
    id: 'finance',
    title: 'Finance',
    description: 'Budgets, bills, and account overview.',
    path: '/finance',
  },
  {
    id: 'travel',
    title: 'Travel',
    description: 'Trips, checklists, and logistics in one place.',
    path: '/travel',
  },
  {
    id: 'health',
    title: 'Health',
    description: 'Appointments, care notes, and essentials.',
    path: '/health',
  },
  {
    id: 'knowledge',
    title: 'Knowledge',
    description: 'Household guides and shared references.',
    path: '/knowledge',
  },
  {
    id: 'photos',
    title: 'Photos',
    description: 'Shared memories and family moments.',
    path: '/photos',
  },
];

export const quickActions: QuickActionConfig[] = [
  { id: 'add-link', label: 'Add Link' },
  { id: 'open-calendar', label: 'Open Calendar' },
  { id: 'open-documents', label: 'Open Documents' },
  { id: 'manage-family', label: 'Manage Family' },
];

export const tipsOfTheDay = [
  'Add your Google Drive links.',
  'Configure providers.',
  'Create your first travel page.',
];
