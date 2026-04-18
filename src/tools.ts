export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { ROUTES_TOOL } from './tool/routes/index';
import { RULE_OF_THREE_TOOL } from './tool/rule-of-three/index';
import { PASSWORD_GENERATOR_TOOL } from './tool/password-generator/index';
import { MORSE_BEACON_TOOL } from './tool/morse-beacon/index';
import { SPEED_READER_TOOL } from './tool/speed-reader/index';
import { WHATSAPP_LINK_TOOL } from './tool/whatsapp-link/index';
import { TEXT_PIXEL_CALCULATOR_TOOL } from './tool/text-pixel-calculator/index';
import { DATE_DIFF_CALCULATOR_TOOL } from './tool/date-diff-calculator/index';
import { EMAIL_LIST_CLEANER_TOOL } from './tool/email-list-cleaner/index';
import { ENV_BADGE_SPAIN_TOOL } from './tool/env-badge-spain/index';
import { DRIVE_DIRECT_LINK_TOOL } from './tool/drive-direct-link/index';
import { SEO_CONTENT_OPTIMIZER_TOOL } from './tool/seo-content-optimizer/index';

export const ALL_TOOLS: ToolDefinition[] = [ROUTES_TOOL, RULE_OF_THREE_TOOL, PASSWORD_GENERATOR_TOOL, MORSE_BEACON_TOOL, SPEED_READER_TOOL, WHATSAPP_LINK_TOOL, TEXT_PIXEL_CALCULATOR_TOOL, DATE_DIFF_CALCULATOR_TOOL, EMAIL_LIST_CLEANER_TOOL, ENV_BADGE_SPAIN_TOOL, DRIVE_DIRECT_LINK_TOOL, SEO_CONTENT_OPTIMIZER_TOOL];

