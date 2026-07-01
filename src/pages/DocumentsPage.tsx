import { ExternalLink } from 'lucide-react';

import { Card } from '@/components/ui/Card';
import { links } from '@/config/links';

function DocumentsPage() {
  return (
    <div className="space-y-8 pb-12 sm:space-y-10">
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Reference hub</p>
        <h1 className="text-3xl font-bold leading-tight text-text sm:text-4xl">Documents</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          Important references are rendered from configuration so updates can be made without touching React components.
        </p>
      </section>

      {links.documents.map((group) => (
        <section key={group.category} className="space-y-4">
          <h2 className="text-2xl font-bold leading-tight text-text">{group.category}</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {group.items.map((document) => (
              <a
                key={document.title}
                href={document.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <Card className="h-full border-border/80 p-6 shadow-lift transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-accent/50 group-hover:shadow-soft">
                  <div className="space-y-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent transition-transform duration-300 ease-out group-hover:scale-110">
                      <ExternalLink className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-text">{document.title}</h3>
                      <p className="text-sm leading-relaxed text-muted">{document.description}</p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default DocumentsPage;
