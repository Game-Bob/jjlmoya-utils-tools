import type { ToolDefinition, ToolsToolEntry } from '../../types';
import type { TextPixelCalculatorUI } from './ui';
import TextPixelCalculatorComponent from './component.astro';
import TextPixelCalculatorSEO from './seo.astro';
import TextPixelCalculatorBibliography from './bibliography.astro';

export const textPixelCalculator: ToolsToolEntry<TextPixelCalculatorUI> = {
  id: 'text-pixel-calculator',
  icons: { bg: 'mdi:format-text', fg: 'mdi:ruler' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const TEXT_PIXEL_CALCULATOR_TOOL: ToolDefinition = {
  entry: textPixelCalculator,
  Component: TextPixelCalculatorComponent,
  SEOComponent: TextPixelCalculatorSEO,
  BibliographyComponent: TextPixelCalculatorBibliography,
};
