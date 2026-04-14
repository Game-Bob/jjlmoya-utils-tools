import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EmailListCleanerUI } from '../ui';

const faqData = [
  {
    question: 'What does this email list cleaner do exactly?',
    answer: 'The tool analyses your email list, removes duplicates, strips unnecessary whitespace, validates basic format and normalises all addresses to lowercase to ensure a clean database.',
  },
  {
    question: 'Is there a limit on the number of emails?',
    answer: 'There is no strict record limit. You can process thousands of emails instantly in a single pass. The only constraint is your browser\'s memory if the list is extremely large.',
  },
  {
    question: 'Is it safe to paste my emails here?',
    answer: 'Absolutely. All processing is done locally in your own browser via JavaScript. Your data is never sent to our servers or stored in any external database.',
  },
  {
    question: 'How does this improve my campaign deliverability?',
    answer: 'By removing non-existent or malformed addresses you reduce your bounce rate, which improves your domain reputation with providers like Gmail, Outlook and Yahoo.',
  },
];

const howToData = [
  { name: 'Paste your emails', text: 'Copy your email list and paste it into the text box. They can be separated by lines, commas or spaces.' },
  { name: 'Clean the list', text: "Click the 'Clean List' button to start the validation and duplicate removal process." },
  { name: 'Review the results', text: 'Check the statistics showing original vs. final emails and review the cleaned list in the lower panel.' },
  { name: 'Copy or download', text: 'Copy the result directly to the clipboard or download it as a ready-to-use .txt file.' },
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
  name: 'How to clean an email list',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Email List Cleaner',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Remove duplicates, fix whitespace and validate formats in your email list. Free tool with no record limit.',
};

const ui: EmailListCleanerUI = {
  inputLabel: 'Email list',
  inputPlaceholder: 'Paste your email list here (separated by lines, commas or spaces)...',
  cleanBtn: 'Clean List',
  clearBtn: 'Clear All',
  statsOriginal: 'Original',
  statsRemoved: 'Removed',
  statsFinal: 'Clean',
  resultLabel: 'Clean Result',
  copyBtn: 'Copy List',
  copyDone: 'Copied!',
  downloadBtn: 'Download .txt',
  registered: 'registered',
  downloadFilename: 'clean-emails',
};

export const content: ToolLocaleContent<EmailListCleanerUI> = {
  slug: 'email-list-cleaner',
  title: 'Email List Cleaner',
  description: 'Clean email lists for free. Remove duplicates, fix whitespace and validate formats in seconds. Save costs and improve your deliverability.',
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'References',
  bibliography: [
    { name: 'RFC 5322: Internet Message Format', url: 'https://datatracker.ietf.org/doc/html/rfc5322' },
    { name: 'Google: Email sender guidelines', url: 'https://support.google.com/a/answer/81126' },
    { name: 'Wikipedia: Email spam', url: 'https://en.wikipedia.org/wiki/Email_spam' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Why is using an email list cleaner essential?' },
    {
      type: 'paragraph',
      html: 'In the world of digital marketing, the quality of your database matters far more than its size. Having a list of 50,000 emails is worthless if half of them are non-existent addresses, contain typos or are duplicated. This is where an <strong>email list cleaner</strong> becomes indispensable.',
    },
    { type: 'title', level: 3, text: 'The risks of a dirty email list' },
    {
      type: 'paragraph',
      html: 'Keeping an uncleaned database can have serious consequences. Sending emails to addresses that do not exist generates a "hard bounce". If this percentage exceeds 2-3%, spam filters will start scrutinising your domain and you could end up on an international blacklist.',
    },
    {
      type: 'tip',
      title: 'Expert tip',
      html: 'Never buy email lists. It is the fastest way to ruin your domain reputation. Build your own list organically and clean it every 3 to 6 months.',
    },
    { type: 'title', level: 3, text: 'How our tool optimises your database' },
    {
      type: 'paragraph',
      html: 'Our free utility performs a thorough and fast cleanup of your databases with no record limits. It runs several critical validation tasks instantly:',
    },
    {
      type: 'list',
      items: [
        '<strong>Duplicate removal:</strong> The same user will not receive the same email twice.',
        '<strong>Whitespace correction:</strong> We strip accidental spaces at the start or end that would invalidate sending.',
        '<strong>Format validation:</strong> We filter out entries that do not have a valid email structure.',
        '<strong>Normalisation:</strong> Everything is converted to lowercase to avoid redundant records.',
      ],
    },
    { type: 'title', level: 3, text: 'When is the right time to clean your list?' },
    {
      type: 'list',
      items: [
        'Before importing contacts into a new CRM or sending platform (Mailchimp, SendGrid, etc.).',
        'If you notice your open rate has dropped below its usual average.',
        'After an event or trade show where you collected data manually.',
        'As preventive maintenance every quarter to maintain domain health.',
      ],
    },
    { type: 'title', level: 3, text: 'Impact on return on investment' },
    {
      type: 'paragraph',
      html: 'Email marketing remains one of the highest-ROI channels, but only if messages reach the inbox. By using an <strong>email cleaner</strong>, you are optimising your sales funnel from the source and stopping paying platforms for contacts who will never see your messages.',
    },
    {
      type: 'tip',
      title: 'Implement double opt in',
      html: 'The best way to avoid fake emails is to require users to confirm their subscription by clicking a link sent to their inbox. This guarantees the email exists and that the user has access to it.',
    },
  ],
};
