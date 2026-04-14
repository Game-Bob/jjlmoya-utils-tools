import type { ToolDefinition, ToolsToolEntry } from '../../types';
import type { RoutesUI } from './ui';
import RoutesComponent from './component.astro';
import RoutesSEO from './seo.astro';
import RoutesBibliography from './bibliography.astro';

export const routes: ToolsToolEntry<RoutesUI> = {
  id: 'routes',
  icons: { bg: 'mdi:map-marker-path', fg: 'mdi:map-search' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const ROUTES_TOOL: ToolDefinition = {
  entry: routes,
  Component: RoutesComponent,
  SEOComponent: RoutesSEO,
  BibliographyComponent: RoutesBibliography,
};
