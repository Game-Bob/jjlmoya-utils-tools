import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { MorseBeaconUI } from '../ui';

const faqData = [
  {
    question: 'Vad är SOS-nödsignalen i morsekod?',
    answer: "Signalen är '... --- ...' (tre punkter, tre streck, tre punkter). Den sänds kontinuerligt utan mellanslag mellan bokstäverna för att indikera en omedelbar nödsituation.",
  },
  {
    question: 'Varför fungerar inte ficklampan i min webbläsare?',
    answer: 'Aktivering av ficklampan kräver att webbläsaren har kamerabehörighet. Vissa mobilwebbläsare eller äldre skrivbordsversioner stöder inte detta API av integritetsskäl.',
  },
  {
    question: 'Är SOS-skärmsignalen synlig?',
    answer: 'Ja, vid totalt mörker kan den maximala ljusstyrkan från en vit skärm som blinkar i morsekod ses på flera hundra meters håll, vilket gör den till ett användbart alternativ om ficklampan slutar fungera.',
  },
  {
    question: 'Vad är internationell morsekod?',
    answer: 'Det är ett kommunikationssystem som använder sekvenser av korta (punkter) och långa (streck) signaler för att representera bokstäver och siffror, standardiserat av ITU för radiokommunikation och optiska signaler.',
  },
];

const howToData = [
  {
    name: 'Skriv meddelandet',
    text: "Ange texten du vill sända eller använd den förkonfigurerade 'SOS'-knappen för nödsituationer.",
  },
  {
    name: 'Konfigurera hastighet',
    text: 'Justera WPM (ord per minut) för att göra signalen snabbare eller långsammare beroende på siktförhållandena.',
  },
  {
    name: 'Välj ljuskälla',
    text: 'Aktivera blinkning i helskärm eller tillåt åtkomst till kamerans ficklampa för en starkare signal.',
  },
  {
    name: 'Starta sändning',
    text: 'Tryck på Sänd för att låta systemet konvertera texten till automatiska visuella pulser enligt morsestandarden.',
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
  name: 'Hur man använder morsefyr för att sända meddelanden',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Morsesfyr: Taktisk SOS-sändare',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Förvandla din enhet till en morsesändningsstation. Använd blixt och skärm som nödljusignaler och taktisk kommunikation.',
};

const ui: MorseBeaconUI = {
  labelMessage: 'Meddelande att sända',
  placeholder: 'Skriv ditt meddelande här (SOS, HELLO, HELP)...',
  btnTransmit: 'Sänd',
  btnSosLoop: 'SOS-loop',
  btnStop: 'Stopp',
  labelTorch: 'Blixt/Ficklampa',
  statusStandby: 'STANDBY',
  statusTransmitting: 'SÄNDER',
  statusStopping: 'STOPPAR...',
  statusWaiting: 'VÄNTAR',
  statusReady: 'HÅRDVARA REDO',
  statusNoTorch: 'INGEN FICKLAMPA',
  statusNoPermission: 'INGET TILLSTÅND',
  statusNotSupported: 'STÖDS EJ',
  statusReqHttps: 'KRÄVER HTTPS',
  statusSending: 'SÄNDER:',
};

export const content: ToolLocaleContent<MorseBeaconUI> = {
  slug: 'morsefyr',
  title: 'Morsefyr: Taktisk SOS sändare',
  description: 'Förvandla din enhet till en morsesändningsstation. Använd blixt och skärm som nödljusignaler och taktisk kommunikation.',
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    { name: 'ITU-R M.1677-1 — International Morse Code', url: 'https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.1677-1-200910-I!!PDF-E.pdf' },
    { name: 'W3C MediaCapture Image — Torch', url: 'https://w3c.github.io/mediacapture-image/#torch' },
    { name: 'Morsekod — Wikipedia', url: 'https://sv.wikipedia.org/wiki/Morsekod' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Ljusets språk',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Det här verktyget förvandlar din enhet till en optisk signalfyr som kan sända meddelanden synliga på flera kilometers avstånd. Med hjälp av den internationella morsekodstandarden möjliggör den tyst kommunikation eller nödkommunikation via ljuspulser (ficklampa och skärm).',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:history',
          title: 'En universell standard',
          description: 'Det här binära systemet med punkter och streck, som utvecklades 1830 av Samuel Morse, revolutionerade telekommunikationen. Dess enkelhet gör det extremt robust: det kan sändas via ljud, radio, elektricitet eller ljus, och förblir läsbart även vid svåra störningar.',
          points: [],
        },
        {
          icon: 'mdi:flash-alert',
          title: 'SOS nödläge',
          description: "Knappen 'SOS-loop' sänder kontinuerligt sekvensen ··· --- ···. Denna signal är universellt erkänd som ett nödanrop och är, tack vare LED-ficklampans höga kontrast, synlig på långt avstånd även i dagsljus under vissa förhållanden.",
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'ITU-R M.1677-1-standard',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Det här verktyget respekterar strikt de <strong>reglerade tiderna</strong> för internationell morsekod enligt definitionen av International Telecommunication Union.',
    },
    {
      type: 'list',
      items: [
        '1 punkt = 1 tidsenhet',
        '1 streck = 3 tidsenheter',
        'Mellanrum mellan element = 1 enhet',
        'Mellanrum mellan bokstäver = 3 enheter',
        'Mellanrum mellan ord = 7 enheter',
      ],
    },
    {
      type: 'tip',
      title: 'Standardhastighet',
      html: 'Standardhastigheten är <strong>15 WPM</strong> (ord per minut), vilket motsvarar ett professionellt sändningstempo. Vid 15 WPM är 1 enhet = 80 ms.',
    },
  ],
};
