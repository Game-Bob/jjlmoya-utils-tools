export * from './entry';
export const TEXT_PIXEL_CALCULATOR_TOOL: ToolDefinition = {
  entry: textPixelCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
