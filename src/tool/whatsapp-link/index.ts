import { whatsappLink } from './entry';
export * from './entry';
export const WHATSAPP_LINK_TOOL: ToolDefinition = {
  entry: whatsappLink,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
