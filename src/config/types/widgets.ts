export type WidgetSize = 'sm' | 'md' | 'lg' | 'full';

export interface WidgetItem {
  id: string;
  title: string;
  description: string;
  size?: WidgetSize;
}

export interface WidgetsConfig {
  widgets: WidgetItem[];
}
