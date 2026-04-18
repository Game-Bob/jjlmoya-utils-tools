export * from './entry';
export const EMAIL_LIST_CLEANER_TOOL: ToolDefinition = {
  entry: emailListCleaner,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
