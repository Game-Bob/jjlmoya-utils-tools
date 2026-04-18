import { seoContentOptimizer } from './entry';
export * from './entry';
export const SEO_CONTENT_OPTIMIZER_TOOL: ToolDefinition = {
  entry: seoContentOptimizer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
