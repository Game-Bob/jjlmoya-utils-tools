import { envBadgeSpain } from './entry';
export * from './entry';
export const ENV_BADGE_SPAIN_TOOL: ToolDefinition = {
  entry: envBadgeSpain,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
