import type { ToolsCategoryEntry } from '../types';
import { routes } from '../tool/routes/index';
import { ruleOfThree } from '../tool/rule-of-three/index';
import { passwordGenerator } from '../tool/password-generator/index';
import { morseBeacon } from '../tool/morse-beacon/index';
import { speedReader } from '../tool/speed-reader/index';
import { whatsappLink } from '../tool/whatsapp-link/index';
import { textPixelCalculator } from '../tool/text-pixel-calculator/index';
import { dateDiffCalculator } from '../tool/date-diff-calculator/index';
import { emailListCleaner } from '../tool/email-list-cleaner/index';
import { envBadgeSpain } from '../tool/env-badge-spain/index';
import { driveDirectLink } from '../tool/drive-direct-link/index';
import { seoContentOptimizer } from '../tool/seo-content-optimizer/index';

export const toolsCategory: ToolsCategoryEntry = {
  icon: 'mdi:toolbox',
  tools: [routes, ruleOfThree, passwordGenerator, morseBeacon, speedReader, whatsappLink, textPixelCalculator, dateDiffCalculator, emailListCleaner, envBadgeSpain, driveDirectLink, seoContentOptimizer],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};
