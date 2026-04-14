import type { ToolDefinition, ToolsToolEntry } from '../../types';
import type { RuleOfThreeUI } from './ui';
import RuleOfThreeComponent from './component.astro';
import RuleOfThreeSEO from './seo.astro';
import RuleOfThreeBibliography from './bibliography.astro';

export const ruleOfThree: ToolsToolEntry<RuleOfThreeUI> = {
  id: 'rule-of-three',
  icons: { bg: 'mdi:calculator-variant', fg: 'mdi:equal' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const RULE_OF_THREE_TOOL: ToolDefinition = {
  entry: ruleOfThree,
  Component: RuleOfThreeComponent,
  SEOComponent: RuleOfThreeSEO,
  BibliographyComponent: RuleOfThreeBibliography,
};
