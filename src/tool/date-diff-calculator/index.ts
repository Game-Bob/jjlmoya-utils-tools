export * from './entry';
export const DATE_DIFF_CALCULATOR_TOOL: ToolDefinition = {
  entry: dateDiffCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
