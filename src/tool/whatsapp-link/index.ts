import type { ToolDefinition, ToolsToolEntry } from '../../types';
import type { WhatsappLinkUI } from './ui';
import WhatsappLinkComponent from './component.astro';
import WhatsappLinkSEO from './seo.astro';
import WhatsappLinkBibliography from './bibliography.astro';

export const whatsappLink: ToolsToolEntry<WhatsappLinkUI> = {
  id: 'whatsapp-link',
  icons: { bg: 'mdi:whatsapp', fg: 'mdi:link-variant' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const WHATSAPP_LINK_TOOL: ToolDefinition = {
  entry: whatsappLink,
  Component: WhatsappLinkComponent,
  SEOComponent: WhatsappLinkSEO,
  BibliographyComponent: WhatsappLinkBibliography,
};
