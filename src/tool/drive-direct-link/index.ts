import { driveDirectLink } from './entry';
export * from './entry';
export const DRIVE_DIRECT_LINK_TOOL: ToolDefinition = {
  entry: driveDirectLink,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
