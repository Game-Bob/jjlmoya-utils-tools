import fs from 'fs';
import path from 'path';

const toolsDir = 'd:/code/jjlmoya-utils-tools/src/tool';
const languages = ['de', 'en', 'es', 'fr', 'id', 'it', 'ja', 'ko', 'nl', 'pl', 'pt', 'ru', 'sv', 'tr', 'zh'];

const tools = fs.readdirSync(toolsDir).filter(f => fs.statSync(path.join(toolsDir, f)).isDirectory());

const missing = {};

tools.forEach(tool => {
    const i18nDir = path.join(toolsDir, tool, 'i18n');
    if (!fs.existsSync(i18nDir)) {
        missing[tool] = languages;
        return;
    }
    const files = fs.readdirSync(i18nDir).filter(f => f.endsWith('.ts')).map(f => f.replace('.ts', ''));
    const missingLangs = languages.filter(lang => !files.includes(lang));
    if (missingLangs.length > 0) {
        missing[tool] = missingLangs;
    }
});

console.log(JSON.stringify(missing, null, 2));
