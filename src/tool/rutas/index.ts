import type { ToolDefinition, ToolsToolEntry } from '../../types';
import type { RutasUI } from './ui';
import RutasComponent from './component.astro';
import RutasSEO from './seo.astro';
import RutasBibliography from './bibliography.astro';

export const rutas: ToolsToolEntry<RutasUI> = {
  id: 'rutas',
  icons: { bg: 'mdi:map-marker-path', fg: 'mdi:map-search' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const RUTAS_TOOL: ToolDefinition = {
  entry: rutas,
  Component: RutasComponent,
  SEOComponent: RutasSEO,
  BibliographyComponent: RutasBibliography,
};
