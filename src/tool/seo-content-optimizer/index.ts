import type { ToolDefinition, ToolsToolEntry } from '../../types';
import type { SeoContentOptimizerUI } from './ui';
import SeoContentOptimizerComponent from './component.astro';
import SeoContentOptimizerSEO from './seo.astro';
import SeoContentOptimizerBibliography from './bibliography.astro';

export const seoContentOptimizer: ToolsToolEntry<SeoContentOptimizerUI> = {
  id: 'seo-content-optimizer',
  icons: { bg: 'mdi:file-search', fg: 'mdi:shield-check-outline' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const SEO_CONTENT_OPTIMIZER_TOOL: ToolDefinition = {
  entry: seoContentOptimizer,
  Component: SeoContentOptimizerComponent,
  SEOComponent: SeoContentOptimizerSEO,
  BibliographyComponent: SeoContentOptimizerBibliography,
};
