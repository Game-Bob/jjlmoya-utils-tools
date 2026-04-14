import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DriveDirectLinkUI } from '../ui';

const faqData = [
  {
    question: 'How do I use the Google Drive download converter?',
    answer: 'Copy the full "Share" link from any file stored on Google Drive (it must have public permissions). Paste it into the tool\'s text box and click "Generate Direct Link". A new URL will appear that starts the download without opening Google\'s viewer.',
  },
  {
    question: 'Can I generate a direct download link for a private file?',
    answer: 'If the file is private or access-restricted, Google will ask you to sign in with an authorised account. For clean downloads without registration, the file permissions must be set to "Anyone with the link can view".',
  },
  {
    question: 'Is it safe to convert my Drive links here?',
    answer: 'Yes. The conversion happens 100% in your browser and is completely anonymous. The tool does not store your link or make any server calls; it only analyses the URL structure client-side to generate the download version.',
  },
  {
    question: 'What happens if my Drive file is very large?',
    answer: 'For files larger than approximately 100 MB, Google Drive does not allow an instant direct download. Instead, it shows a warning page about file size and antivirus scanning bypass. This is a fixed Google server policy that no external tool can circumvent.',
  },
];

const howToData = [
  { name: 'Copy the share link', text: 'In Google Drive, right-click the file and select "Get link". Make sure the permissions allow access to anyone with the link.' },
  { name: 'Paste the link into the generator', text: 'Enter the full Drive URL in the text field of the tool and click the "Generate Direct Link" button.' },
  { name: 'Copy and use the generated link', text: 'Copy the new direct download link and use it in emails, websites, newsletters or anywhere you need the file to download immediately on click.' },
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
  name: 'How to generate a direct download link for Google Drive',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Google Drive Direct Download Link Generator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Convert any Google Drive share link into a direct download link with one click, bypassing the file preview page. Free tool.',
};

const ui: DriveDirectLinkUI = {
  inputLabel: 'Paste your Google Drive link here:',
  inputPlaceholder: 'https://drive.google.com/file/d/...',
  generateBtn: 'Generate Direct Link',
  resultLabel: 'Direct Download Link:',
  copyTitle: 'Copy to clipboard',
  copyDone: 'Copied',
  testBtn: 'Test Download',
  errorMsg: 'The link you entered does not appear to be a valid Google Drive link.',
};

export const content: ToolLocaleContent<DriveDirectLinkUI> = {
  slug: 'google-drive-direct-download-link',
  title: 'Google Drive Direct Download Link Generator',
  description: 'Easily convert any Google Drive share link into a direct download link with one click, bypassing the file preview. Free tool.',
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'References',
  bibliography: [
    { name: 'Download files from Google Drive (Google Workspace)', url: 'https://support.google.com/drive/answer/2423534' },
    { name: 'Google Drive API: Download Files', url: 'https://developers.google.com/drive/api/guides/manage-downloads' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Convert Google Drive share links to direct download links' },
    {
      type: 'paragraph',
      html: 'If you share files frequently via Google Drive, you know how annoying the preview page can be. When your users click your link, they land on an intermediate screen that forces them to find the download button. Our <strong>Google Drive direct download link generator</strong> solves this by converting any share link into one that starts the download automatically.',
    },
    { type: 'title', level: 3, text: 'Why use a direct download link?' },
    {
      type: 'paragraph',
      html: 'The main benefit is a much better user experience. When sharing a PDF, image or software installer, users expect clicking the link to start the download immediately:',
    },
    {
      type: 'list',
      items: [
        '<strong>Saves time:</strong> One-click download with no extra steps.',
        '<strong>Professional look:</strong> Ideal for download buttons on websites, newsletters or client emails.',
        '<strong>Fewer drop-offs:</strong> Less tech-savvy users can be confused by the Drive preview and not know how to download.',
        '<strong>HTML-ready:</strong> Perfect for <code>href</code> or <code>src</code> attributes in your web pages.',
      ],
    },
    { type: 'title', level: 3, text: 'How does the direct link generator work?' },
    {
      type: 'paragraph',
      html: 'Everything happens 100% in your browser. Google Drive share links contain a unique file ID. The tool extracts that ID and builds a new URL using Google\'s native export parameter: <code>https://drive.google.com/uc?export=download&amp;id=YOUR_ID</code>.',
    },
    {
      type: 'tip',
      title: 'Warning for large files',
      html: 'For files over approximately 100 MB, Google Drive displays an antivirus scan warning page before the download starts. This is a fixed Google server policy that no external tool can bypass.',
    },
    { type: 'title', level: 3, text: 'Privacy and security guaranteed' },
    {
      type: 'paragraph',
      html: 'This tool fully respects your privacy. The entire link transformation is performed via client-side JavaScript on your own device. No link, file ID or personal information is ever sent to any external server.',
    },
  ],
};
