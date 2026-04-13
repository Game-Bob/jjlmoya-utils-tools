export { toolsCategory } from './category';
export { default as toolsCategorySEO } from './category/seo.astro';

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  ToolsToolEntry,
  ToolsCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_TOOLS } from './tools';

export { rutas, RUTAS_TOOL } from './tool/rutas/index';
export { default as RutasComponent } from './tool/rutas/component.astro';
export { default as RutasSEO } from './tool/rutas/seo.astro';
export { default as RutasBibliography } from './tool/rutas/bibliography.astro';
export type { RutasUI } from './tool/rutas/ui';
