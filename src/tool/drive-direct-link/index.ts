import type { ToolDefinition, ToolsToolEntry } from '../../types';
import type { DriveDirectLinkUI } from './ui';
import DriveDirectLinkComponent from './component.astro';
import DriveDirectLinkSEO from './seo.astro';
import DriveDirectLinkBibliography from './bibliography.astro';

export const driveDirectLink: ToolsToolEntry<DriveDirectLinkUI> = {
  id: 'drive-direct-link',
  icons: { bg: 'mdi:google-drive', fg: 'mdi:download' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const DRIVE_DIRECT_LINK_TOOL: ToolDefinition = {
  entry: driveDirectLink,
  Component: DriveDirectLinkComponent,
  SEOComponent: DriveDirectLinkSEO,
  BibliographyComponent: DriveDirectLinkBibliography,
};
