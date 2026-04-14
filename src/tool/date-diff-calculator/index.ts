import type { ToolDefinition, ToolsToolEntry } from '../../types';
import type { DateDiffCalculatorUI } from './ui';
import DateDiffCalculatorComponent from './component.astro';
import DateDiffCalculatorSEO from './seo.astro';
import DateDiffCalculatorBibliography from './bibliography.astro';

export const dateDiffCalculator: ToolsToolEntry<DateDiffCalculatorUI> = {
  id: 'date-diff-calculator',
  icons: { bg: 'mdi:calendar-clock', fg: 'mdi:clock-fast' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const DATE_DIFF_CALCULATOR_TOOL: ToolDefinition = {
  entry: dateDiffCalculator,
  Component: DateDiffCalculatorComponent,
  SEOComponent: DateDiffCalculatorSEO,
  BibliographyComponent: DateDiffCalculatorBibliography,
};
