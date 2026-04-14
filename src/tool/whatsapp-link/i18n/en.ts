import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { WhatsappLinkUI } from '../ui';

const faqData = [
  {
    question: 'How do I generate a WhatsApp link?',
    answer: 'To create your link, enter your mobile number including the country code. For example, for Spain put 34 first, for Mexico 52, followed by your local number. You can add an optional message and the tool will generate the final wa.me link ready to copy.',
  },
  {
    question: 'Can I add a long pre-filled message?',
    answer: 'Yes. You can attach a message that will automatically appear in the chat box when someone clicks your link. The tool uses URL encoding to support spaces, accents and emojis without breaking the URL.',
  },
  {
    question: 'How do I use the generated QR code?',
    answer: 'Once a valid link is generated, the "Show QR" button appears. The QR code contains your link URL. Right-click on it and select "Save image as" to download a clean, high-resolution file for business cards, posters or social media.',
  },
  {
    question: 'Where does my data go?',
    answer: 'The generator processes everything client-side, directly in your browser. Your phone number and pre-filled message are never sent to any server or stored in any database.',
  },
];

const howToData = [
  { name: 'Select the prefix', text: 'Choose your country code from the dropdown and enter your phone number without the prefix.' },
  { name: 'Add an optional message', text: 'Write a pre-filled text that will appear when someone opens the link and taps Send.' },
  { name: 'Generate the link', text: 'Press the green button to get your direct wa.me URL ready to share.' },
  { name: 'Share or print the QR', text: 'Copy the link, test the chat or download the QR code for cards and printing.' },
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
  name: 'How to create a direct WhatsApp link',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WhatsApp Link Generator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Create direct WhatsApp chat links with pre-filled message and QR code. Free tool, no registration, 100% private.',
};

const ui: WhatsappLinkUI = {
  phoneLabel: 'WhatsApp Phone Number',
  phonePlaceholder: '600 00 00 00',
  messageLabel: 'Opening message (optional)',
  messagePlaceholder: 'Hi! I would like more information about your service...',
  generateBtn: 'Generate Link',
  resultLabel: 'Direct Link Generated',
  copyTitle: 'Copy to clipboard',
  copyDone: 'Copied!',
  testBtn: 'Test Chat',
  qrShow: 'Show QR',
  qrHide: 'Hide QR',
  errorPhone: 'Please enter a valid phone number.',
  defaultPrefix: '44',
};

export const content: ToolLocaleContent<WhatsappLinkUI> = {
  slug: 'whatsapp-link-generator',
  title: 'WhatsApp Link Generator with QR',
  description: 'Create direct WhatsApp chat links with pre-filled message and QR code. Free tool, no registration, 100% private.',
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'References',
  bibliography: [
    { name: 'How to use the click to chat feature — WhatsApp Help Center', url: 'https://faq.whatsapp.com/591339899867293' },
    { name: 'API Click to chat: parameters and formats — WhatsApp', url: 'https://faq.whatsapp.com/425559092497645' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Generate short direct links for WhatsApp' },
    {
      type: 'paragraph',
      html: 'Need customers or followers to contact you on WhatsApp without saving your number first? Our <strong>wa.me link creator</strong> solves this by generating a link that opens a direct chat instantly, no prior steps required.',
    },
    { type: 'title', level: 3, text: 'What is the wa.me WhatsApp shortener for?' },
    {
      type: 'paragraph',
      html: 'WhatsApp offers an API called "Click to Chat". Using a special URL, any user can open a new chat with you without needing to add you as a contact first, from both mobile and WhatsApp Web.',
    },
    {
      type: 'list',
      items: [
        '<strong>More conversions:</strong> A "Contact via WhatsApp" button on your shop reduces friction and increases sales.',
        '<strong>Pre-filled message:</strong> The user just presses "Send". Example: "Hi! I came from Instagram and want to claim the offer."',
        '<strong>Automatic QR code:</strong> Download the QR for business cards, posters or social media posts.',
      ],
    },
    { type: 'title', level: 3, text: 'How does link generation work?' },
    {
      type: 'paragraph',
      html: 'The tool concatenates the international prefix and the clean phone number, then appends it to the official WhatsApp API together with the message parameter converted via <em>url-encoding</em>.',
    },
    {
      type: 'code',
      ariaLabel: 'WhatsApp URL format',
      code: 'https://wa.me/34XXXXXXXXX\nhttps://wa.me/34XXXXXXXXX?text=%C2%A1Hola!%20Me%20gustar%C3%ADa...',
    },
    { type: 'title', level: 3, text: 'Guaranteed privacy and local processing' },
    {
      type: 'paragraph',
      html: 'All link construction happens in your browser via JavaScript. No server records, saves or reads the phone numbers or messages you enter. Your privacy is fully protected.',
    },
    {
      type: 'tip',
      title: 'Importance of the international prefix',
      html: 'For WhatsApp to route the message correctly, the country code is mandatory. For Spain it is <strong>34</strong>, followed by the 9-digit number, no spaces or + symbol. The final result would be, for example, <code>346XXXXXXXX</code>.',
    },
  ],
};
