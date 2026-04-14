import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { MorseBeaconUI } from '../ui';

const faqData = [
  {
    question: 'What is the SOS distress signal in Morse code?',
    answer: "The signal is '... --- ...' (three dots, three dashes, three dots). It is transmitted continuously without spaces between the letters to indicate an immediate emergency.",
  },
  {
    question: 'Why is the torch not working in my browser?',
    answer: 'Activating the torch requires the browser to have camera permissions. Some mobile browsers or older desktop versions do not support this API for privacy reasons.',
  },
  {
    question: 'Is the SOS screen signal visible?',
    answer: 'Yes, in conditions of total darkness, the maximum brightness of a white screen flashing in Morse can be seen from several hundred metres away, making it a useful alternative if the torch fails.',
  },
  {
    question: 'What is the international Morse code?',
    answer: 'It is a communication system that uses sequences of short (dots) and long (dashes) signals to represent letters and numbers, standardised by the ITU for radio communications and optical signals.',
  },
];

const howToData = [
  {
    name: 'Write the message',
    text: "Enter the text you want to transmit or use the pre-configured 'SOS' button for emergencies.",
  },
  {
    name: 'Configure speed',
    text: 'Adjust the WPM (words per minute) to make the signal faster or slower depending on visibility.',
  },
  {
    name: 'Choose light source',
    text: 'Enable full-screen flashing or allow access to the camera torch for a stronger signal.',
  },
  {
    name: 'Start transmission',
    text: 'Press Transmit to have the system convert the text into automatic visual pulses following the Morse standard.',
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
  name: 'How to use the Morse beacon to transmit messages',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Morse Beacon: Tactical SOS Transmitter',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Turn your device into a Morse transmission station. Use flash and screen as emergency light signals and tactical communication.',
};

const ui: MorseBeaconUI = {
  labelMessage: 'Message to Transmit',
  placeholder: 'Type your message here (SOS, HELLO, HELP)...',
  btnTransmit: 'Transmit',
  btnSosLoop: 'SOS Loop',
  btnStop: 'Stop',
  labelTorch: 'Flash/Torch',
  statusStandby: 'STANDBY',
  statusTransmitting: 'TRANSMITTING',
  statusStopping: 'STOPPING...',
  statusWaiting: 'WAITING',
  statusReady: 'HARDWARE READY',
  statusNoTorch: 'NO TORCH',
  statusNoPermission: 'NO PERMISSION',
  statusNotSupported: 'NOT SUPPORTED',
  statusReqHttps: 'REQ. HTTPS',
  statusSending: 'SENDING:',
};

export const content: ToolLocaleContent<MorseBeaconUI> = {
  slug: 'morse-beacon',
  title: 'Morse Beacon: Tactical SOS Transmitter',
  description: 'Turn your device into a Morse transmission station. Use flash and screen as emergency light signals and tactical communication.',
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'References',
  bibliography: [
    { name: 'ITU-R M.1677-1 — International Morse Code', url: 'https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.1677-1-200910-I!!PDF-E.pdf' },
    { name: 'W3C MediaCapture Image — Torch', url: 'https://w3c.github.io/mediacapture-image/#torch' },
    { name: 'Morse code — Wikipedia', url: 'https://en.wikipedia.org/wiki/Morse_code' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'The Language of Light',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This tool turns your device into an optical signalling beacon capable of transmitting messages visible from kilometres away. Using the international Morse Code standard, it enables silent or emergency communication via light pulses (torch and screen).',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:history',
          title: 'A Universal Standard',
          description: 'Developed in 1830 by Samuel Morse, this binary system of dots and dashes revolutionised telecommunications. Its simplicity makes it extremely robust: it can be transmitted by sound, radio, electricity or light, and remains readable even under severe interference.',
          points: [],
        },
        {
          icon: 'mdi:flash-alert',
          title: 'SOS Emergency Mode',
          description: "The 'SOS Loop' button continuously transmits the sequence ··· --- ···. This signal is universally recognised as a distress call and, thanks to the high contrast of the LED torch, is visible from a great distance even in daylight under certain conditions.",
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'ITU-R M.1677-1 Standard',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'This tool strictly respects the <strong>regulatory timings</strong> of the international Morse code as defined by the International Telecommunication Union.',
    },
    {
      type: 'list',
      items: [
        '1 dot = 1 time unit',
        '1 dash = 3 time units',
        'Space between elements = 1 unit',
        'Space between letters = 3 units',
        'Space between words = 7 units',
      ],
    },
    {
      type: 'tip',
      title: 'Standard speed',
      html: 'The default speed is <strong>15 WPM</strong> (words per minute), which corresponds to a professional transmission pace. At 15 WPM, 1 unit = 80 ms.',
    },
  ],
};
