import { createPlaceholderPage } from '@/components/templates/PlaceholderPageFactory';

const PhotosPage = createPlaceholderPage({
  eyebrow: 'Memories',
  title: 'Photos',
  description: 'A future photo hub can organize shared memories while keeping the application shell stable.',
  highlights: [
    {
      title: 'Gallery-ready layout',
      description: 'This template already supports cards, grids, and large content surfaces.',
    },
    {
      title: 'Provider flexibility',
      description: 'Google Photos, local storage, or a dedicated media backend can plug in later.',
    },
    {
      title: 'Nothing hardcoded',
      description: 'Album names, sources, and captions should all come from configuration or providers.',
    },
  ],
  footerNote: 'Media browsing and sync are left for later.',
});

export default PhotosPage;
