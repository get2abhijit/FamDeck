import { createPlaceholderPage } from '@/components/templates/PlaceholderPageFactory';

const DocumentsPage = createPlaceholderPage({
  eyebrow: 'Reference hub',
  title: 'Documents',
  description: 'Documents, links, policies, and shared files can all converge here through configuration.',
  highlights: [
    {
      title: 'Source agnostic',
      description: 'Drive, OneDrive, Dropbox, Nextcloud, and similar providers can be layered in later.',
    },
    {
      title: 'Clean hierarchy',
      description: 'The shell leaves room for categories, collections, and smart access patterns.',
    },
    {
      title: 'No hardcoded owners',
      description: 'Every document source should be driven from config or provider data, not React code.',
    },
  ],
  footerNote: 'Document browsing and upload logic will come in a later layer.',
});

export default DocumentsPage;
