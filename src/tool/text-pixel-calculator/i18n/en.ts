import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TextPixelCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'How do I calculate the pixel width of text online?',
    answer: 'Paste your text into the input box, configure the font and size, and the tool will automatically use the browser Canvas API to return the exact width in pixels.',
  },
  {
    question: 'Why does pixel width vary between typefaces?',
    answer: "Most fonts are proportional, meaning each character has a different width. For example, an uppercase 'M' is always wider than a lowercase 'i' in a standard sans-serif font.",
  },
  {
    question: 'Is measuring characters the same as measuring pixels?',
    answer: 'No. Measuring characters gives you the string length, while measuring pixels gives you the visual space it occupies. This is crucial to ensure text does not overflow its container in a web design.',
  },
  {
    question: 'Can I use any Google Fonts typeface?',
    answer: 'Yes, as long as the font is installed on your operating system or loaded on the current page, the tool will measure its dimensions accurately.',
  },
  {
    question: 'Is it safe to process private text or code snippets?',
    answer: 'Yes. The calculator works entirely locally. No data is sent to external servers, guaranteeing complete privacy for your projects.',
  },
];

const howToData = [
  { name: 'Enter the text', text: 'Type or paste the text you want to measure into the input area.' },
  { name: 'Configure the font', text: 'Set the font family, size in pixels, weight and whether it is italic.' },
  { name: 'Read the result', text: 'The pixel width and character count update in real time.' },
  { name: 'Copy the value', text: 'Click "Copy Width" to save the pixel number to the clipboard.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to measure text width in pixels',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Text Pixel Width Calculator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Accurately calculate the pixel width of any text based on font, size and style.',
};

const ui: TextPixelCalculatorUI = {
  textLabel: 'Text to measure',
  textPlaceholder: 'Type or paste here the text you want to measure...',
  defaultText: 'Hello World',
  fontLabel: 'Font family',
  sizeLabel: 'Size (px)',
  weightLabel: 'Weight',
  italicLabel: 'Italic',
  widthLabel: 'Width (pixels)',
  charsLabel: 'Characters',
  previewLabel: 'Visual preview',
  copyBtn: 'Copy Width',
  resetBtn: 'Reset',
  copyDone: 'Width copied',
};

export const content: ToolLocaleContent<TextPixelCalculatorUI> = {
  slug: 'text-pixel-width-calculator',
  title: 'Text Pixel Width Calculator',
  description: 'Accurately calculate how wide any text is in pixels based on font, size and style. Free tool for designers and developers.',
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'References',
  bibliography: [
    { name: 'W3C: CSS Text Module Level 3', url: 'https://www.w3.org/TR/css-text-3/' },
    { name: 'Google Fonts: Understanding variable fonts', url: 'https://fonts.google.com/knowledge/glossary/variable_fonts' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Measure the exact pixel width of any text' },
    {
      type: 'paragraph',
      html: 'Is your text overflowing its container? Need to know how much space a heading takes up before rendering it? The <strong>browser Canvas API</strong> allows you to measure the exact width of any text string with pixel precision, without rendering it in the DOM.',
    },
    { type: 'title', level: 3, text: 'Why character counting is not enough' },
    {
      type: 'paragraph',
      html: 'Modern typefaces are <strong>proportional</strong>: each glyph has a different width. A "W" can take up three times more space than an "i". The number of characters tells you nothing about the actual visual space the text occupies.',
    },
    {
      type: 'list',
      items: [
        '<strong>Web design:</strong> Prevent overflow in buttons, labels and table cells.',
        '<strong>SEO:</strong> Search engines truncate titles by pixels, not by characters.',
        '<strong>Canvas and PDF:</strong> Calculate the exact position before drawing text programmatically.',
        '<strong>Tooltips and bubbles:</strong> Dynamically size containers based on inner text.',
      ],
    },
    { type: 'title', level: 3, text: 'How measurement works with Canvas' },
    {
      type: 'paragraph',
      html: 'The <code>ctx.measureText()</code> method of the Canvas API returns a <code>TextMetrics</code> object with a <code>width</code> property reflecting the CSS pixel width using the currently active font. This tool configures the context with your font, size, weight and style before measuring.',
    },
    {
      type: 'code',
      ariaLabel: 'Canvas measureText example',
      code: "const ctx = document.createElement('canvas').getContext('2d');\nctx.font = '700 16px Inter, system-ui, sans-serif';\nconst width = ctx.measureText('Hello World').width; // e.g. 74.5",
    },
    { type: 'title', level: 3, text: 'Privacy and local processing' },
    {
      type: 'paragraph',
      html: 'All calculation happens in your browser. No text, code snippet or private data leaves your device.',
    },
    {
      type: 'tip',
      title: 'Google Fonts typefaces',
      html: 'To measure a Google Fonts typeface accurately, first make sure it is loaded on the page or installed on your system. Otherwise the browser will fall back to a substitute font and the result will differ.',
    },
  ],
};
