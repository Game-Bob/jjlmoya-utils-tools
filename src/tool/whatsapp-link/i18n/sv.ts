import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { WhatsappLinkUI } from '../ui';

const faqData = [
  {
    question: 'Hur skapar jag en WhatsApp-länk?',
    answer: 'För att skapa din länk, ange ditt mobilnummer inklusive landskod. För Sverige ange till exempel först 46, följt av ditt lokala nummer. Du kan lägga till ett valfritt meddelande så skapar verktyget den slutliga wa.me-länken redo att kopieras.',
  },
  {
    question: 'Kan jag lägga till ett långt förifyllt meddelande?',
    answer: 'Ja. Du kan bifoga ett meddelande som automatiskt visas i chattfönstret när någon klickar på din länk. Verktyget använder URL-kodning för att stödja mellanslag, accenter och emojis utan att bryta URL-adressen.',
  },
  {
    question: 'Hur använder jag den genererade QR-koden?',
    answer: 'När en giltig länk har skapats visas knappen "Visa QR". QR-koden innehåller din länk-URL. Högerklicka på den och välj "Spara bild som" för att ladda ner en ren, högupplöst fil för visitkort, affischer eller sociala medier.',
  },
  {
    question: 'Vart tar mina data vägen?',
    answer: 'Generatorn bearbetar allt på klientsidan, direkt i din webbläsare. Ditt telefonnummer och förifyllt meddelande skickas aldrig till någon server eller lagras i någon databas.',
  },
];

const howToData = [
  { name: 'Välj prefix', text: 'Välj din landskod från rullgardinsmenyn och ange ditt telefonnummer utan prefixet.' },
  { name: 'Lägg till ett valfritt meddelande', text: 'Skriv en förifylld text som visas när någon öppnar länken och trycker på Skicka.' },
  { name: 'Skapa länken', text: 'Tryck på den gröna knappen för att få din wa.me-direktlänk redo att delas.' },
  { name: 'Dela eller skriv ut QR-koden', text: 'Kopiera länken, testa chatten eller ladda ner QR-koden för kort och utskrift.' },
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
  name: 'Hur man skapar en direkt WhatsApp-länk',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WhatsApp-länkgenerator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Skapa direkta WhatsApp-chattlänkar med förifyllt meddelande och QR-kod. Gratis verktyg, ingen registrering, 100 % privat.',
};

const ui: WhatsappLinkUI = {
  phoneLabel: 'WhatsApp-telefonnummer',
  phonePlaceholder: '070 000 00 00',
  messageLabel: 'Inledande meddelande (valfritt)',
  messagePlaceholder: 'Hej! Jag skulle vilja ha mer information om din tjänst...',
  generateBtn: 'Skapa länk',
  resultLabel: 'Direktlänk skapad',
  copyTitle: 'Kopiera till urklipp',
  copyDone: 'Kopierat!',
  testBtn: 'Testa chatt',
  qrShow: 'Visa QR',
  qrHide: 'Dölj QR',
  errorPhone: 'Ange ett giltigt telefonnummer.',
  defaultPrefix: '46',
};

export const content: ToolLocaleContent<WhatsappLinkUI> = {
  slug: 'whatsapp-lank-generator',
  title: 'WhatsApp länkgenerator med QR',
  description: 'Skapa direkta WhatsApp-chattlänkar med förifyllt meddelande och QR-kod. Gratis verktyg, ingen registrering, 100 % privat.',
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    { name: 'Hur du använder funktionen "klicka för att chatta" — WhatsApp hjälpcenter', url: 'https://faq.whatsapp.com/591339899867293' },
    { name: 'API Klicka för att chatta: parametrar och format — WhatsApp', url: 'https://faq.whatsapp.com/425559092497645' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Skapa korta direktlänkar för WhatsApp' },
    {
      type: 'paragraph',
      html: 'Behöver du att kunder eller följare kontaktar dig på WhatsApp utan att behöva spara ditt nummer först? Vår <strong>wa.me-länkskapare</strong> löser detta genom att generera en länk som öppnar en direktchatt omedelbart, utan föregående steg.',
    },
    { type: 'title', level: 3, text: 'Vad används wa.me WhatsApp-förkortaren till?' },
    {
      type: 'paragraph',
      html: 'WhatsApp erbjuder ett API som kallas "Klicka för att chatta". Genom att använda en speciell URL kan vilken användare som helst öppna en ny chatt med dig utan att behöva lägga till dig som kontakt först, från både mobil och WhatsApp Web.',
    },
    {
      type: 'list',
      items: [
        '<strong>Fler konverteringar:</strong> En "Kontakta via WhatsApp"-knapp i din butik minskar friktionen och ökar försäljningen.',
        '<strong>Förifyllt meddelande:</strong> Användaren trycker bara på "Skicka". Exempel: "Hej! Jag kom från Instagram och vill ta del av erbjudandet."',
        '<strong>Automatisk QR-kod:</strong> Ladda ner QR-koden för visitkort, affischer eller inlägg i sociala medier.',
      ],
    },
    { type: 'title', level: 3, text: 'Hur fungerar länkgenereringen?' },
    {
      type: 'paragraph',
      html: 'Verktyget sammanfogar det internationella prefixet och det rena telefonnumret och lägger sedan till det i det officiella WhatsApp API:et tillsammans med meddelandeparametern konverterad via <em>url-kodning</em>.',
    },
    {
      type: 'code',
      ariaLabel: 'WhatsApp URL-format',
      code: 'https://wa.me/46XXXXXXXXX\nhttps://wa.me/46XXXXXXXXX?text=%C2%A1Hej!%20Jag%20skulle...',
    },
    { type: 'title', level: 3, text: 'Garanterad integritet och lokal bearbetning' },
    {
      type: 'paragraph',
      html: 'Hela skapandet av länken sker i din webbläsare via JavaScript. Ingen server registrerar, sparar eller läser de telefonnummer eller meddelanden du anger. Din integritet är helt skyddad.',
    },
    {
      type: 'tip',
      title: 'Vikten av internationellt prefix',
      html: 'För att WhatsApp ska dirigera meddelandet korrekt är landskoden obligatorisk. För Sverige är den <strong>46</strong>, följt av mobilnumret, utan mellanslag eller +-symbolen. Slutresultatet blir till exempel <code>467XXXXXXXX</code>.',
    },
  ],
};
