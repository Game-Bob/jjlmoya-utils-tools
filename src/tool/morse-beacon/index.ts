import type { ToolDefinition, ToolsToolEntry } from '../../types';
import type { MorseBeaconUI } from './ui';
import MorseBeaconComponent from './component.astro';
import MorseBeaconSEO from './seo.astro';
import MorseBeaconBibliography from './bibliography.astro';

export const morseBeacon: ToolsToolEntry<MorseBeaconUI> = {
  id: 'morse-beacon',
  icons: { bg: 'mdi:transmission-tower', fg: 'mdi:dots-horizontal' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const MORSE_BEACON_TOOL: ToolDefinition = {
  entry: morseBeacon,
  Component: MorseBeaconComponent,
  SEOComponent: MorseBeaconSEO,
  BibliographyComponent: MorseBeaconBibliography,
};
