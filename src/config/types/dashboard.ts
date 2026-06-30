export interface DashboardHero {
  eyebrow: string;
  title: string;
  description: string;
}

export interface DashboardStat {
  label: string;
  value: string;
  note: string;
}

export interface DashboardHighlight {
  title: string;
  description: string;
}

export interface DashboardConfig {
  hero: DashboardHero;
  stats: DashboardStat[];
  highlights: DashboardHighlight[];
}
