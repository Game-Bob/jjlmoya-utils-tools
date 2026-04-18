import { morseBeacon } from './entry';
export * from './entry';
export const MORSE_BEACON_TOOL: ToolDefinition = {
  entry: morseBeacon,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
