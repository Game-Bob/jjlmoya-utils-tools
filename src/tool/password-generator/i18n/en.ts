import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PasswordGeneratorUI } from '../ui';

const faqData = [
  {
    question: 'Is it safe to use an online password generator?',
    answer: "Yes, as long as the generator is client-side. Our tool generates passwords locally in your browser using cryptographically secure algorithms. Your password is never sent over the internet or stored on any server.",
  },
  {
    question: "What makes a password 'hacker-proof'?",
    answer: 'The key is entropy (randomness). A mix of uppercase, lowercase, numbers and special symbols combined with a minimum length of 12-16 characters makes a brute-force attack practically impossible with current technology.',
  },
  {
    question: 'Why avoid common words or dates?',
    answer: 'Hackers use dictionary attacks that test millions of words, names and date combinations per second. Purely random passwords follow no linguistic patterns, making them far more secure.',
  },
  {
    question: 'Should I memorise all my passwords?',
    answer: 'Not recommended. The ideal approach is to use a password manager (like Bitwarden, 1Password or your browser built-in) to store these long, random passwords, so you only need to remember one strong master password.',
  },
];

const howToData = [
  {
    name: 'Set the length',
    text: 'Adjust the slider to choose how many characters your password will have. Current security standards recommend at least 12.',
  },
  {
    name: 'Choose complexity',
    text: 'Check the uppercase, numbers and symbols options according to the requirements of the site where you will use the password.',
  },
  {
    name: 'Generate the password',
    text: 'Click the generate button. Each click creates a unique, high-entropy combination based on cryptographic algorithms.',
  },
  {
    name: 'Copy with one click',
    text: 'Use the copy button to send the password directly to your clipboard in a secure way.',
  },
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
  name: 'How to use the secure password generator',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Secure Random Password Generator',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Create strong, hack-proof passwords instantly. Free cybersecurity tool to generate random, secure keys.',
};

const ui: PasswordGeneratorUI = {
  generating: 'Generating...',
  labelSecurity: 'Strength',
  labelLength: 'Length',
  strengthWeak: 'Weak',
  strengthFair: 'Fair',
  strengthGood: 'Good',
  strengthStrong: 'Strong',
  strengthUnbreakable: 'Unbreakable',
  optionUppercase: 'Uppercase',
  optionLowercase: 'Lowercase',
  optionNumbers: 'Numbers',
  optionSymbols: 'Symbols',
  copyTitle: 'Copy',
  regenerateTitle: 'Generate New',
};

export const content: ToolLocaleContent<PasswordGeneratorUI> = {
  slug: 'password-generator',
  title: 'Secure Random Password Generator',
  description: 'Create strong, hack-proof passwords instantly. Free cybersecurity tool to generate random, secure keys.',
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'References',
  bibliography: [
    { name: 'Web Cryptography API — MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API' },
    { name: 'NIST SP 800-63B: Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { name: 'Password — Wikipedia', url: 'https://en.wikipedia.org/wiki/Password' },
    { name: 'Have I Been Pwned — Check if your password was exposed', url: 'https://haveibeenpwned.com/Passwords' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The Anatomy of an Uncrackable Password',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Your password is the only barrier between your personal data (banking, medical, photos) and a cybercriminal. Yet the average user still relies on predictable patterns like "123456" or pet names, which can be cracked in <strong>less than a second</strong>.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:alert-circle',
          title: 'The Danger of Rainbow Tables',
          description: 'Hackers do not guess your password one attempt at a time. They use massive databases (Rainbow Tables) containing millions of pre-computed hashes of common passwords. If your password is in the dictionary or is a famous phrase, it was already compromised before you started using it.',
          points: [],
        },
        {
          icon: 'mdi:flask',
          title: 'The Solution: Pure Entropy',
          description: 'Entropy measures disorder or unpredictability. The higher the entropy (bits), the more time a computer needs to crack it. This tool uses crypto.getRandomValues(), a browser API that generates cryptographically secure random numbers, unlike Math.random() which is predictable.',
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Basic Cybersecurity Principles',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:ruler',
          title: 'Length over Complexity',
          description: 'A 20-character lowercase-only password is more secure than an 8-character one with rare symbols. Mathematically, each extra character multiplies the difficulty exponentially.',
          points: [],
        },
        {
          icon: 'mdi:eye-off',
          title: 'The Substitution Myth',
          description: 'Replacing "a" with "@" or "e" with "3" (Leetspeak) fools no one. Modern attack dictionaries already include these variations automatically. Avoid using recognisable words.',
          points: [],
        },
        {
          icon: 'mdi:key-chain',
          title: 'Different Site, Different Key',
          description: 'If you use the same password for your email and a forum, and the forum gets hacked, they now have access to your email. Use a Password Manager (like Bitwarden or 1Password) to remember complex passwords for you.',
          points: [],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Privacy guaranteed',
      html: 'All generation happens <strong>in your browser</strong>. No password is transmitted over the internet or logged on any server. The source code is auditable.',
    },
  ],
};
