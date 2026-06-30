import { createPlaceholderPage } from '@/components/templates/PlaceholderPageFactory';

const TravelPage = createPlaceholderPage({
  eyebrow: 'Trips',
  title: 'Travel',
  description: 'Trip planning can share the same shell as everyday operations, with provider-driven cards and links.',
  highlights: [
    {
      title: 'Itinerary friendly',
      description: 'Flights, reservations, packing checklists, and local links can all live in this route.',
    },
    {
      title: 'Cross-device state',
      description: 'Travel context can be persisted locally or synchronized later through providers.',
    },
    {
      title: 'No structural rewrite',
      description: 'Adding travel support should not force a layout or routing redesign.',
    },
  ],
  footerNote: 'Travel logic will be layered in after the foundation.',
});

export default TravelPage;
