import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TextPixelCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Hoe bereken ik online de pixelbreedte van tekst?',
    answer: 'Plak uw tekst in het invoervak, configureer het lettertype en de grootte, en de tool gebruikt automatisch de Canvas API van de browser om de exacte breedte in pixels te retourneren.',
  },
  {
    question: 'Waarom varieert de pixelbreedte tussen verschillende lettertypen?',
    answer: "De meeste lettertypen zijn proportioneel, wat betekent dat elk teken een andere breedte heeft. Een hoofdletter 'M' is bijvoorbeeld altijd breder dan een kleine letter 'i' in een standaard sans-serif lettertype.",
  },
  {
    question: 'Is het meten van tekens hetzelfde als het meten van pixels?',
    answer: 'Nee. Het meten van tekens geeft u de lengte van de reeks, terwijl het meten van pixels u de visuele ruimte geeft die het inneemt. Dit is cruciaal om ervoor te zorgen dat tekst in een webontwerp niet buiten zijn container valt.',
  },
  {
    question: 'Kan ik elk Google Fonts-lettertype gebruiken?',
    answer: 'Ja, zolang het lettertype op uw besturingssysteem is geïnstalleerd of op de huidige pagina is geladen, zal de tool de afmetingen nauwkeurig meten.',
  },
  {
    question: 'Is het veilig om privetekst of codefragmenten te verwerken?',
    answer: 'Ja. De calculator werkt volledig lokaal. Er worden geen gegevens naar externe servers verzonden, wat volledige privacy voor uw projecten garandeert.',
  },
];

const howToData = [
  { name: 'Voer de tekst in', text: 'Typ of plak de tekst die u wilt meten in het invoerveld.' },
  { name: 'Configureer het lettertype', text: 'Stel de lettertypefamilie, grootte in pixels, dikte in en of het cursief is.' },
  { name: 'Lees het resultaat', text: 'De pixelbreedte en het aantal tekens worden in realtime bijgewerkt.' },
  { name: 'Kopieer de waarde', text: 'Klik op "Breedte kopiëren" om het aantal pixels naar het klembord te kopiëren.' },
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
  name: 'Hoe de tekstbreedte in pixels te meten',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Tekst Pixelbreedte Calculator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Bereken nauwkeurig de pixelbreedte van elke tekst op basis van lettertype, grootte en stijl.',
};

const ui: TextPixelCalculatorUI = {
  textLabel: 'Te meten tekst',
  textPlaceholder: 'Typ of plak hier de tekst die u wilt meten...',
  defaultText: 'Hallo Wereld',
  fontLabel: 'Lettertypefamilie',
  sizeLabel: 'Grootte (px)',
  weightLabel: 'Dikte',
  italicLabel: 'Cursief',
  widthLabel: 'Breedte (pixels)',
  charsLabel: 'Tekens',
  previewLabel: 'Visueel voorbeeld',
  copyBtn: 'Breedte kopiëren',
  resetBtn: 'Resetten',
  copyDone: 'Breedte gekopieerd',
};

export const content: ToolLocaleContent<TextPixelCalculatorUI> = {
  slug: 'text-pixel-breedte-calculator',
  title: 'Tekst Pixelbreedte Calculator',
  description: 'Bereken nauwkeurig hoe breed een tekst in pixels is op basis van lettertype, grootte en stijl. Gratis tool voor ontwerpers en ontwikkelaars.',
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    { name: 'W3C: CSS Text Module Level 3', url: 'https://www.w3.org/TR/css-text-3/' },
    { name: 'Google Fonts: Understanding variable fonts', url: 'https://fonts.google.com/knowledge/glossary/variable_fonts' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Meet de exacte pixelbreedte van elke tekst' },
    {
      type: 'paragraph',
      html: 'Valt uw tekst buiten de container? Moet u weten hoeveel ruimte een kop inneemt voordat u deze rendert? De <strong>Canvas API van de browser</strong> stelt u in staat om de exacte breedte van elke tekstreeks met pixelprecisie te meten, zonder deze in de DOM te renderen.',
    },
    { type: 'title', level: 3, text: 'Waarom het tellen van tekens niet genoeg is' },
    {
      type: 'paragraph',
      html: 'Moderne lettertypen zijn <strong>proportioneel</strong>: elk glyph heeft een andere breedte. Een "W" kan drie keer meer ruimte innemen dan een "i". Het aantal tekens zegt niets over de werkelijke visuele ruimte die de tekst inneemt.',
    },
    {
      type: 'list',
      items: [
        '<strong>Webontwerp:</strong> Voorkom overflow in knoppen, labels en tabelcellen.',
        '<strong>SEO:</strong> Zoekmachines kappen titels af op basis van pixels, niet op basis van tekens.',
        '<strong>Canvas en PDF:</strong> Bereken de exacte positie voordat u tekst programmatisch tekent.',
        '<strong>Tooltips en bubbels:</strong> Pas de grootte van containers dynamisch aan op basis van de binnenste tekst.',
      ],
    },
    { type: 'title', level: 3, text: 'Hoe meten met Canvas werkt' },
    {
      type: 'paragraph',
      html: 'De methode <code>ctx.measureText()</code> van de Canvas API retourneert een <code>TextMetrics</code>-object met een <code>width</code>-eigenschap die de CSS-pixelbreedte weergeeft met het momenteel actieve lettertype. Deze tool configureert de context met uw lettertype, grootte, dikte en stijl voordat er wordt gemeten.',
    },
    {
      type: 'code',
      ariaLabel: 'Canvas measureText voorbeeld',
      code: "const ctx = document.createElement('canvas').getContext('2d');\nctx.font = '700 16px Inter, system-ui, sans-serif';\nconst width = ctx.measureText('Hallo Wereld').width; // bijv. 74.5",
    },
    { type: 'title', level: 3, text: 'Privacy en lokale verwerking' },
    {
      type: 'paragraph',
      html: 'Alle berekeningen vinden plaats in uw browser. Geen enkele tekst, codefragment of privégegevens verlaat uw apparaat.',
    },
    {
      type: 'tip',
      title: 'Google Fonts lettertypen',
      html: 'Om een Google Fonts-lettertype nauwkeurig te meten, moet u er eerst voor zorgen dat het op de pagina is geladen of op uw systeem is geïnstalleerd. Anders valt de browser terug op een vervangend lettertype en zal het resultaat afwijken.',
    },
  ],
};
