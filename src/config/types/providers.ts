export type ProviderStatus = 'placeholder' | 'active' | 'disabled';

export interface ProviderItem {
  id: string;
  label: string;
  status: ProviderStatus;
}

export interface ProvidersConfig {
  providers: ProviderItem[];
}
