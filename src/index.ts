export { toolsCategory } from './category';
export const toolsCategorySEO = () => import('./category/seo.astro').then((m) => m.default);

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

export { ALL_ENTRIES, ALL_TOOLS } from './tools';

export { routes, ROUTES_TOOL } from './tool/routes/index';
export const RoutesComponent = () => import('./tool/routes/component.astro').then((m) => m.default);
export const RoutesSEO = () => import('./tool/routes/seo.astro').then((m) => m.default);
export const RoutesBibliography = () => import('./tool/routes/bibliography.astro').then((m) => m.default);
export type { RoutesUI } from './tool/routes/ui';

export { ruleOfThree, RULE_OF_THREE_TOOL } from './tool/rule-of-three/index';
export const RuleOfThreeComponent = () => import('./tool/rule-of-three/component.astro').then((m) => m.default);
export const RuleOfThreeSEO = () => import('./tool/rule-of-three/seo.astro').then((m) => m.default);
export const RuleOfThreeBibliography = () => import('./tool/rule-of-three/bibliography.astro').then((m) => m.default);
export type { RuleOfThreeUI } from './tool/rule-of-three/ui';

export { passwordGenerator, PASSWORD_GENERATOR_TOOL } from './tool/password-generator/index';
export const PasswordGeneratorComponent = () => import('./tool/password-generator/component.astro').then((m) => m.default);
export const PasswordGeneratorSEO = () => import('./tool/password-generator/seo.astro').then((m) => m.default);
export const PasswordGeneratorBibliography = () => import('./tool/password-generator/bibliography.astro').then((m) => m.default);
export type { PasswordGeneratorUI } from './tool/password-generator/ui';

export { morseBeacon, MORSE_BEACON_TOOL } from './tool/morse-beacon/index';
export const MorseBeaconComponent = () => import('./tool/morse-beacon/component.astro').then((m) => m.default);
export const MorseBeaconSEO = () => import('./tool/morse-beacon/seo.astro').then((m) => m.default);
export const MorseBeaconBibliography = () => import('./tool/morse-beacon/bibliography.astro').then((m) => m.default);
export type { MorseBeaconUI } from './tool/morse-beacon/ui';

export { speedReader, SPEED_READER_TOOL } from './tool/speed-reader/index';
export const SpeedReaderComponent = () => import('./tool/speed-reader/component.astro').then((m) => m.default);
export const SpeedReaderSEO = () => import('./tool/speed-reader/seo.astro').then((m) => m.default);
export const SpeedReaderBibliography = () => import('./tool/speed-reader/bibliography.astro').then((m) => m.default);
export type { SpeedReaderUI } from './tool/speed-reader/ui';

export { whatsappLink, WHATSAPP_LINK_TOOL } from './tool/whatsapp-link/index';
export const WhatsappLinkComponent = () => import('./tool/whatsapp-link/component.astro').then((m) => m.default);
export const WhatsappLinkSEO = () => import('./tool/whatsapp-link/seo.astro').then((m) => m.default);
export const WhatsappLinkBibliography = () => import('./tool/whatsapp-link/bibliography.astro').then((m) => m.default);
export type { WhatsappLinkUI } from './tool/whatsapp-link/ui';

export { textPixelCalculator, TEXT_PIXEL_CALCULATOR_TOOL } from './tool/text-pixel-calculator/index';
export const TextPixelCalculatorComponent = () => import('./tool/text-pixel-calculator/component.astro').then((m) => m.default);
export const TextPixelCalculatorSEO = () => import('./tool/text-pixel-calculator/seo.astro').then((m) => m.default);
export const TextPixelCalculatorBibliography = () => import('./tool/text-pixel-calculator/bibliography.astro').then((m) => m.default);
export type { TextPixelCalculatorUI } from './tool/text-pixel-calculator/ui';

export { dateDiffCalculator, DATE_DIFF_CALCULATOR_TOOL } from './tool/date-diff-calculator/index';
export const DateDiffCalculatorComponent = () => import('./tool/date-diff-calculator/component.astro').then((m) => m.default);
export const DateDiffCalculatorSEO = () => import('./tool/date-diff-calculator/seo.astro').then((m) => m.default);
export const DateDiffCalculatorBibliography = () => import('./tool/date-diff-calculator/bibliography.astro').then((m) => m.default);
export type { DateDiffCalculatorUI } from './tool/date-diff-calculator/ui';

export { emailListCleaner, EMAIL_LIST_CLEANER_TOOL } from './tool/email-list-cleaner/index';
export const EmailListCleanerComponent = () => import('./tool/email-list-cleaner/component.astro').then((m) => m.default);
export const EmailListCleanerSEO = () => import('./tool/email-list-cleaner/seo.astro').then((m) => m.default);
export const EmailListCleanerBibliography = () => import('./tool/email-list-cleaner/bibliography.astro').then((m) => m.default);
export type { EmailListCleanerUI } from './tool/email-list-cleaner/ui';

export { envBadgeSpain, ENV_BADGE_SPAIN_TOOL } from './tool/env-badge-spain/index';
export const EnvBadgeSpainComponent = () => import('./tool/env-badge-spain/component.astro').then((m) => m.default);
export const EnvBadgeSpainSEO = () => import('./tool/env-badge-spain/seo.astro').then((m) => m.default);
export const EnvBadgeSpainBibliography = () => import('./tool/env-badge-spain/bibliography.astro').then((m) => m.default);
export type { EnvBadgeSpainUI } from './tool/env-badge-spain/ui';

export { driveDirectLink, DRIVE_DIRECT_LINK_TOOL } from './tool/drive-direct-link/index';
export const DriveDirectLinkComponent = () => import('./tool/drive-direct-link/component.astro').then((m) => m.default);
export const DriveDirectLinkSEO = () => import('./tool/drive-direct-link/seo.astro').then((m) => m.default);
export const DriveDirectLinkBibliography = () => import('./tool/drive-direct-link/bibliography.astro').then((m) => m.default);
export type { DriveDirectLinkUI } from './tool/drive-direct-link/ui';

export { seoContentOptimizer, SEO_CONTENT_OPTIMIZER_TOOL } from './tool/seo-content-optimizer/index';
export const SeoContentOptimizerComponent = () => import('./tool/seo-content-optimizer/component.astro').then((m) => m.default);
export const SeoContentOptimizerSEO = () => import('./tool/seo-content-optimizer/seo.astro').then((m) => m.default);
export const SeoContentOptimizerBibliography = () => import('./tool/seo-content-optimizer/bibliography.astro').then((m) => m.default);
export type { SeoContentOptimizerUI } from './tool/seo-content-optimizer/ui';
