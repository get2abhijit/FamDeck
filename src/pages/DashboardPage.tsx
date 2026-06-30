import { useMemo } from 'react';

import {
  BookOpenText,
  CalendarDays,
  FolderKanban,
  HeartPulse,
  Home,
  Image,
  Landmark,
  Link2,
  PlaneTakeoff,
  Plus,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { Card } from '@/components/ui/Card';
import {
  dashboardCards,
  familyName,
  homeSubtitle,
  homeTitle,
  members,
  quickActions,
  tipsOfTheDay,
} from '@/config/family';

const cardIconMap: Record<(typeof dashboardCards)[number]['id'], LucideIcon> = {
  family: Users,
  calendar: CalendarDays,
  documents: FolderKanban,
  finance: Landmark,
  travel: PlaneTakeoff,
  health: HeartPulse,
  knowledge: BookOpenText,
  photos: Image,
};

const actionIconMap: Record<(typeof quickActions)[number]['id'], LucideIcon> = {
  'add-link': Plus,
  'open-calendar': CalendarDays,
  'open-documents': FolderKanban,
  'manage-family': Users,
};

function getGreeting(date: Date): string {
  const hour = date.getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 18) return 'Good Afternoon';
  return 'Good Evening';
}

function getTipOfTheDay(tips: string[]): string {
  if (tips.length === 0) return 'No tips available.';
  return tips[Math.floor(Math.random() * tips.length)];
}

function getInitial(name: string): string {
  return name.trim().charAt(0).toUpperCase();
}

function DashboardPage() {
  const greeting = getGreeting(new Date());
  const tipOfTheDay = useMemo(() => getTipOfTheDay(tipsOfTheDay), []);

  return (
    <div className="space-y-10 pb-12 sm:space-y-12 lg:space-y-14">
      <Card className="overflow-hidden border-accent/30 bg-gradient-to-br from-panel via-panel to-surface/80 p-7 shadow-lift sm:p-10 lg:p-12">
        <div className="space-y-5 sm:space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">{greeting}</p>
          <h1 className="max-w-4xl text-3xl font-bold leading-[1.08] text-text sm:text-5xl lg:text-6xl">{homeTitle}</h1>
          <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{homeSubtitle}</p>
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-panel/90 px-4 py-2 text-sm font-semibold text-text shadow-lift">
            <Home className="h-4 w-4 text-accent" aria-hidden="true" />
            <span>Family {familyName}</span>
          </div>
        </div>
      </Card>

      <section className="space-y-5">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Navigation</p>
          <h2 className="text-2xl font-bold leading-tight text-text sm:text-3xl">Home Cards</h2>
          <p className="text-sm text-muted">Jump to the spaces your family uses the most.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {dashboardCards.map((card) => {
            const Icon = cardIconMap[card.id];
            return (
              <Link
                key={card.id}
                to={card.path}
                className="group rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface"
              >
                <Card className="h-full border-border/80 p-6 shadow-lift transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:border-accent/50 group-hover:shadow-soft">
                  <div className="space-y-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent transition-transform duration-300 ease-out group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-text">{card.title}</h3>
                      <p className="text-sm leading-relaxed text-muted">{card.description}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <section className="space-y-5 xl:col-span-7">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">People</p>
            <h2 className="text-2xl font-bold leading-tight text-text sm:text-3xl">Family Members</h2>
            <p className="text-sm text-muted">Quick view of your household roster.</p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {members.map((member) => (
              <Card
                key={member.name}
                className="p-6 shadow-lift transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 text-lg font-bold text-accent shadow-lift">
                    {getInitial(member.name)}
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-semibold text-text">{member.name}</p>
                    <p className="text-sm text-muted">{member.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-5 xl:col-span-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Utilities</p>
            <h2 className="text-2xl font-bold leading-tight text-text sm:text-3xl">Quick Actions</h2>
            <p className="text-sm text-muted">Placeholder actions for upcoming integrations.</p>
          </div>
          <Card className="p-5 shadow-lift">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {quickActions.map((action) => {
                const Icon = actionIconMap[action.id];
                return (
                  <button
                    key={action.id}
                    type="button"
                    onClick={() => console.log(`Quick action: ${action.label}`)}
                    className="group inline-flex items-center justify-center gap-2 rounded-xl border border-border/80 bg-surface/70 px-4 py-3 text-sm font-semibold text-text shadow-lift transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/10 hover:shadow-soft"
                  >
                    <Icon className="h-4 w-4 text-accent transition-transform duration-300 ease-out group-hover:scale-105" aria-hidden="true" />
                    {action.label}
                  </button>
                );
              })}
            </div>
          </Card>
        </section>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <section className="space-y-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Timeline</p>
            <h2 className="text-2xl font-bold leading-tight text-text sm:text-3xl">Recent Activity</h2>
            <p className="text-sm text-muted">Your shared feed will appear here.</p>
          </div>
          <Card className="p-7 shadow-lift">
            <p className="text-sm text-muted">No recent activity</p>
          </Card>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Insight</p>
            <h2 className="text-2xl font-bold leading-tight text-text sm:text-3xl">Tip of the Day</h2>
            <p className="text-sm text-muted">Small setup wins to help your family dashboard grow.</p>
          </div>
          <Card className="border-accent/30 p-7 shadow-lift transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
              Daily tip
            </div>
            <p className="mt-4 text-base font-medium leading-relaxed text-text">{tipOfTheDay}</p>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;
