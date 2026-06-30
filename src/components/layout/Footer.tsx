import family from '@/config/family.json';

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-4 py-4 text-sm text-muted sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {family.name} is scaffolded as a configuration-first shell for shared spaces.
        </p>
        <p>{family.subtitle}</p>
      </div>
    </footer>
  );
}
