import { routes } from './entry';
export * from './entry';
export const ROUTES_TOOL: ToolDefinition = {
  entry: routes,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
