import type { ToolDefinition, ToolsToolEntry } from '../../types';
import type { SpeedReaderUI } from './ui';
import SpeedReaderComponent from './component.astro';
import SpeedReaderSEO from './seo.astro';
import SpeedReaderBibliography from './bibliography.astro';

export const speedReader: ToolsToolEntry<SpeedReaderUI> = {
  id: 'speed-reader',
  icons: { bg: 'mdi:book-open-page-variant', fg: 'mdi:lightning-bolt' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const SPEED_READER_TOOL: ToolDefinition = {
  entry: speedReader,
  Component: SpeedReaderComponent,
  SEOComponent: SpeedReaderSEO,
  BibliographyComponent: SpeedReaderBibliography,
};
