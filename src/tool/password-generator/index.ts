import type { ToolDefinition, ToolsToolEntry } from '../../types';
import type { PasswordGeneratorUI } from './ui';
import PasswordGeneratorComponent from './component.astro';
import PasswordGeneratorSEO from './seo.astro';
import PasswordGeneratorBibliography from './bibliography.astro';

export const passwordGenerator: ToolsToolEntry<PasswordGeneratorUI> = {
  id: 'password-generator',
  icons: { bg: 'mdi:shield-key', fg: 'mdi:lock-reset' },
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

export const PASSWORD_GENERATOR_TOOL: ToolDefinition = {
  entry: passwordGenerator,
  Component: PasswordGeneratorComponent,
  SEOComponent: PasswordGeneratorSEO,
  BibliographyComponent: PasswordGeneratorBibliography,
};
