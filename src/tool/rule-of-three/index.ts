import { ruleOfThree } from './entry';
export * from './entry';
export const RULE_OF_THREE_TOOL: ToolDefinition = {
  entry: ruleOfThree,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
