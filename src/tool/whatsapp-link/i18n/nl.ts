import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { WhatsappLinkUI } from '../ui';

const faqData = [
  {
    question: 'Hoe genereer ik een WhatsApp-link?',
    answer: 'Om uw link aan te maken, voert u uw mobiele nummer in inclusief de landcode. Voor Nederland zet u bijvoorbeeld eerst 31, gevolgd door uw lokale nummer. U kunt een optioneel bericht toevoegen en de tool genereert de definitieve wa.me-link die klaar is om te kopiëren.',
  },
  {
    question: 'Kan ik een lang vooraf ingevuld bericht toevoegen?',
    answer: 'Ja. U kunt een bericht toevoegen dat automatisch in het chatvenster verschijnt wanneer iemand op uw link klikt. De tool gebruikt URL-codering om spaties, accenten en emoji\'s te ondersteunen zonder de URL te verbreken.',
  },
  {
    question: 'Hoe gebruik ik de gegenereerde QR-code?',
    answer: 'Zodra een geldige link is gegenereerd, verschijnt de knop "QR tonen". De QR-code bevat de URL van uw link. Klik er met de rechtermuisknop op en selecteer "Afbeelding opslaan als" om een schoon bestand met hoge resolutie te downloaden voor visitekaartjes, posters of sociale media.',
  },
  {
    question: 'Waar gaan mijn gegevens heen?',
    answer: 'De generator verwerkt alles aan de clientzijde, direct in uw browser. Uw telefoonnummer und vooraf ingevulde bericht worden nooit naar een server verzonden of in een database opgeslagen.',
  },
];

const howToData = [
  { name: 'Selecteer het prefix', text: 'Kies uw landcode in het vervolgkeuzemenu en voer uw telefoonnummer in zonder het prefix.' },
  { name: 'Voeg een optioneel bericht toe', text: 'Schrijf een vooraf ingevulde tekst die verschijnt wanneer iemand de link opent en op Verzenden tikt.' },
  { name: 'Genereer de link', text: 'Druk op de groene knop om uw directe wa.me-URL te ontvangen die klaar is om te delen.' },
  { name: 'Deel of print de QR', text: 'Kopieer de link, test de chat of download de QR-code voor kaartjes en drukwerk.' },
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
  name: 'Hoe een directe WhatsApp-link aan te maken',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WhatsApp Link Generator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Maak directe WhatsApp-chatlinks met een vooraf ingevuld bericht en QR-code. Gratis tool, geen registratie, 100% privé.',
};

const ui: WhatsappLinkUI = {
  phoneLabel: 'WhatsApp telefoonnummer',
  phonePlaceholder: '6 00000000',
  messageLabel: 'Openingsbericht (optioneel)',
  messagePlaceholder: 'Hallo! Ik zou graag meer informatie willen over uw service...',
  generateBtn: 'Link genereren',
  resultLabel: 'Directe link gegenereerd',
  copyTitle: 'Kopieer naar klembord',
  copyDone: 'Gekopieerd!',
  testBtn: 'Test chat',
  qrShow: 'QR tonen',
  qrHide: 'QR verbergen',
  errorPhone: 'Voer een geldig telefoonnummer in.',
  defaultPrefix: '31',
};

export const content: ToolLocaleContent<WhatsappLinkUI> = {
  slug: 'whatsapp-berichtlink-generator',
  title: 'WhatsApp Link Generator met QR',
  description: 'Maak directe WhatsApp-chatlinks met vooraf ingevuld bericht en QR-code. Gratis tool, geen registratie, 100% privé.',
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    { name: 'De functie "Klik om te chatten" gebruiken — WhatsApp Helpcentrum', url: 'https://faq.whatsapp.com/591339899867293' },
    { name: 'API Klik om te chatten: parameters en formaten — WhatsApp', url: 'https://faq.whatsapp.com/425559092497645' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Genereer korte directe links voor WhatsApp' },
    {
      type: 'paragraph',
      html: 'Moeten klanten of volgers contact met u opnemen via WhatsApp zonder eerst uw nummer op te slaan? Onze <strong>wa.me link maker</strong> lost dit op door een link te genereren die onmiddellijk een chat opent, zonder verdere stappen.',
    },
    { type: 'title', level: 3, text: 'Waar dient de wa.me WhatsApp shortener voor?' },
    {
      type: 'paragraph',
      html: 'WhatsApp biedt een API genaamd "Klik om te chatten". Met een speciale URL kan elke gebruiker een nieuwe chat met u openen zonder u eerst als contactpersoon te hoeven toevoegen, zowel mobiel als via WhatsApp Web.',
    },
    {
      type: 'list',
      items: [
        '<strong>Meer conversies:</strong> Een "Contact via WhatsApp"-knop in uw winkel vermindert drempels en verhoogt de verkoop.',
        '<strong>Vooraf ingevuld bericht:</strong> De gebruiker drukt gewoon op "Verzenden". Voorbeeld: "Hallo! Ik kom van Instagram en wil graag gebruikmaken van de aanbieding."',
        '<strong>Automatische QR-code:</strong> Download de QR voor visitekaartjes, posters of social media berichten.',
      ],
    },
    { type: 'title', level: 3, text: 'Hoe werkt de link-generatie?' },
    {
      type: 'paragraph',
      html: 'De tool voegt de landcode en het kale telefoonnummer samen en koppelt dit vervolgens aan de officiële WhatsApp API samen met de berichtparameter die via <em>url-encoding</em> is geconverteerd.',
    },
    {
      type: 'code',
      ariaLabel: 'WhatsApp URL-formaat',
      code: 'https://wa.me/31XXXXXXXXX\nhttps://wa.me/31XXXXXXXXX?text=%C2%A1Hallo!%20Ik%20zou...',
    },
    { type: 'title', level: 3, text: 'Gegarandeerde privacy en lokale verwerking' },
    {
      type: 'paragraph',
      html: 'De volledige link-constructie vindt plaats in uw browser via JavaScript. Geen enkele server registreert, bewaart of leest de telefoonnummers of berichten die u invoert. Uw privacy is volledig beschermd.',
    },
    {
      type: 'tip',
      title: 'Belang van de landcode',
      html: 'Om ervoor te zorgen dat WhatsApp het bericht correct routeert, is de landcode verplicht. Voor Nederland is dit <strong>31</strong>, gevolgd door het mobiele nummer, zonder spaties of het +-symbool. Het eindresultaat zou bijvoorbeeld <code>316XXXXXXXX</code> zijn.',
    },
  ],
};
