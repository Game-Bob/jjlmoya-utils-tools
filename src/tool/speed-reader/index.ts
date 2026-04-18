export * from './entry';
export const SPEED_READER_TOOL: ToolDefinition = {
  entry: speedReader,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
