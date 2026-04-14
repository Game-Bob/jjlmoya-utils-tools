import type { ToolDefinition, ToolsToolEntry } from '../../types';
import type { EnvBadgeSpainUI } from './ui';
import EnvBadgeSpainComponent from './component.astro';
import EnvBadgeSpainSEO from './seo.astro';
import EnvBadgeSpainBibliography from './bibliography.astro';

export const envBadgeSpain: ToolsToolEntry<EnvBadgeSpainUI> = {
  id: 'env-badge-spain',
  icons: { bg: 'mdi:car-info', fg: 'mdi:leaf' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const ENV_BADGE_SPAIN_TOOL: ToolDefinition = {
  entry: envBadgeSpain,
  Component: EnvBadgeSpainComponent,
  SEOComponent: EnvBadgeSpainSEO,
  BibliographyComponent: EnvBadgeSpainBibliography,
};
