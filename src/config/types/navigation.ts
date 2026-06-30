export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: string;
  description: string;
}

export interface NavigationConfig {
  brand: string;
  items: NavItem[];
}
