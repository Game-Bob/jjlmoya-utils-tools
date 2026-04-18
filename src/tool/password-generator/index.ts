export * from './entry';
export const PASSWORD_GENERATOR_TOOL: ToolDefinition = {
  entry: passwordGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
