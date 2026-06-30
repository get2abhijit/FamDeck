export const pageLoaders = {
  dashboard: () => import('@/pages/DashboardPage'),
  family: () => import('@/pages/FamilyPage'),
  calendar: () => import('@/pages/CalendarPage'),
  documents: () => import('@/pages/DocumentsPage'),
  finance: () => import('@/pages/FinancePage'),
  health: () => import('@/pages/HealthPage'),
  travel: () => import('@/pages/TravelPage'),
  photos: () => import('@/pages/PhotosPage'),
  knowledge: () => import('@/pages/KnowledgePage'),
  tasks: () => import('@/pages/TasksPage'),
  emergency: () => import('@/pages/EmergencyPage'),
  settings: () => import('@/pages/SettingsPage'),
} as const;
