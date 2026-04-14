import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SeoContentOptimizerUI } from '../ui';

const faqData = [
  {
    question: 'How does this tool help my SEO ranking?',
    answer: 'By analyzing keyword density and sentence readability, you ensure your content is easy to understand for users and relevant to search engines, avoiding over-optimization penalties.',
  },
  {
    question: 'What HTML elements does the technical analysis check?',
    answer: 'It verifies the existence and uniqueness of the H1 tag, the presence of H2/H3 subheadings, and alt attributes on images.',
  },
  {
    question: 'Is my content stored on any server?',
    answer: 'No. The analysis runs 100% locally in your browser. Your content never leaves your computer.',
  },
  {
    question: 'Is it compatible with Yoast SEO criteria?',
    answer: 'Yes, we implement similar criteria to Yoast: sentence length, paragraph distribution, and heading hierarchy.',
  },
];

const howToData = [
  { name: 'Write or paste your text', text: 'Enter the content you want to analyze in the main text area.' },
  { name: 'Review the optimization checklist', text: 'Check the length, readability, and keyword density alerts in the side panel.' },
  { name: 'Analyze technical HTML', text: 'Switch to the technical analysis tab to verify H1 tags, image alts, and metadata structure.' },
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
  name: 'How to optimize content for SEO',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SEO Content Optimizer',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Analyze keyword density, readability, and technical HTML structure of your texts in real time, without sending data to any server.',
};

const ui: SeoContentOptimizerUI = {
  tabText: 'Text Analysis',
  tabHtml: 'Technical HTML Analysis',
  textareaPlaceholder: 'Write your text or paste your HTML code here...',
  statsChars: 'Characters',
  statsWords: 'Words',
  statsReading: 'Reading',
  statsSentences: 'Sentences',
  checklistTitle: 'Optimization Checklist',
  keywordsTitle: 'Keyword Density',
  technicalTitle: 'Technical HTML Analysis',
  h1Label: 'H1 Detected',
  linksLabel: 'Links (a)',
  imgsLabel: 'Images (img)',
  altsLabel: 'Missing alts',
  emptyState: 'No data',
  analyzing: 'Analyzing...',
  checkInsufficient: 'Insufficient length (< 300 words)',
  checkPillar: 'Excellent pillar content (> 900 words)',
  checkGoodLength: 'Good length for SEO',
  checkLongSentences: 'Too many long sentences (> 25% of text)',
  checkGoodReadability: 'Optimal sentence readability',
  checkLongParagraphs: 'Split very long paragraphs (> 150 words)',
  checkMissingH1: 'Missing H1 tag',
  checkMultipleH1: 'Multiple H1 tags detected',
  checkMissingH2: 'Missing subheadings (H2)',
  checkMissingTitle: 'Missing meta title tag',
  stopWords: JSON.stringify(['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'from', 'as', 'is', 'was', 'are', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'it', 'its', 'this', 'that', 'these', 'those', 'not', 'no', 'so', 'up', 'if', 'my', 'your', 'his', 'her', 'our', 'their']),
};

export const content: ToolLocaleContent<SeoContentOptimizerUI> = {
  slug: 'seo-content-optimizer',
  title: 'SEO Content Optimizer',
  description: 'Analyze keyword density, readability, and technical HTML structure of your texts in real time. Free and private SEO tool.',
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'References',
  bibliography: [
    { name: "Google's SEO Starter Guide", url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
    { name: 'Yoast SEO readability criteria', url: 'https://yoast.com/what-is-readability/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'SEO Content Optimizer: Keywords, Readability and Structure' },
    {
      type: 'paragraph',
      html: 'Content quality is no longer measured solely by the keywords you include, but by how you structure your information to be digestible for both humans and Google crawlers. Our <strong>real-time SEO analysis tool</strong> gives you full control over keyword density, paragraph readability, and fundamental HTML technical elements.',
    },
    { type: 'title', level: 3, text: 'Keyword Density and Semantic Relevance' },
    {
      type: 'paragraph',
      html: '<strong>Keyword density</strong> indicates how often a term appears compared to the rest of the text. Excess repetition triggers <em>keyword stuffing</em> filters, while very low density may make it difficult for search engines to identify your article\'s central topic.',
    },
    {
      type: 'list',
      items: [
        '<strong>Relevance analysis:</strong> Identify if the most repeated words match your search intent.',
        '<strong>Penalty prevention:</strong> Avoid over-repeating terms that may appear spammy.',
        '<strong>Semantic optimization:</strong> Find balance between technical terms and natural language.',
      ],
    },
    { type: 'title', level: 3, text: 'Readability in the Yoast Style' },
    {
      type: 'paragraph',
      html: 'Readability is an indirect but crucial ranking factor. If users leave because paragraphs are endless blocks of text, your <em>Dwell Time</em> drops. The analyzer detects long sentences (over 20 words), paragraphs over 150 words, and checks for subheadings.',
    },
    {
      type: 'tip',
      title: 'Reading time',
      html: 'Most users decide whether to read an article in under 10 seconds. Knowing the estimated reading time (calculated at an average of 200 words per minute) helps reduce bounce rate by setting reader expectations.',
    },
    { type: 'title', level: 3, text: 'Technical HTML Analysis' },
    {
      type: 'paragraph',
      html: 'Paste your source code to verify key elements: uniqueness of the <strong>H1</strong>, presence of H2/H3 subheadings, images without <code>alt</code> attributes, and existence of the <code>title</code> tag. All processing happens in your browser without sending data to any server.',
    },
  ],
};
