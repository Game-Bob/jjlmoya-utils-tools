import type { ToolDefinition, ToolsToolEntry } from '../../types';
import type { EmailListCleanerUI } from './ui';
import EmailListCleanerComponent from './component.astro';
import EmailListCleanerSEO from './seo.astro';
import EmailListCleanerBibliography from './bibliography.astro';

export const emailListCleaner: ToolsToolEntry<EmailListCleanerUI> = {
  id: 'email-list-cleaner',
  icons: { bg: 'mdi:email-check-outline', fg: 'mdi:email-remove' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const EMAIL_LIST_CLEANER_TOOL: ToolDefinition = {
  entry: emailListCleaner,
  Component: EmailListCleanerComponent,
  SEOComponent: EmailListCleanerSEO,
  BibliographyComponent: EmailListCleanerBibliography,
};
