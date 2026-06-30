import { createPlaceholderPage } from '@/components/templates/PlaceholderPageFactory';

const KnowledgePage = createPlaceholderPage({
  eyebrow: 'Reference system',
  title: 'Knowledge',
  description: 'Policies, how-tos, and shared knowledge can live here without introducing page-specific assumptions.',
  highlights: [
    {
      title: 'Living documentation',
      description: 'The route can evolve into a searchable knowledge base or shared wiki surface.',
    },
    {
      title: 'Composable content',
      description: 'Sections can be assembled from widgets, markdown, or provider-fed data later.',
    },
    {
      title: 'Shared enough for anyone',
      description: 'The route is intentionally broad enough for apartments, clubs, or teams.',
    },
  ],
  footerNote: 'Knowledge features are intentionally postponed.',
});

export default KnowledgePage;
