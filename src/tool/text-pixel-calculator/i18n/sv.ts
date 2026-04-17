import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TextPixelCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Hur beräknar jag pixelbredden för text online?',
    answer: 'Klistra in din text i inmatningsrutan, konfigurera typsnitt och storlek, så använder verktyget automatiskt webbläsarens Canvas API för att returnera den exakta bredden i pixlar.',
  },
  {
    question: 'Varför varierar pixelbredden mellan olika typsnitt?',
    answer: "De flesta typsnitt är proportionella, vilket innebär att varje tecken har en annan bredd. Till exempel är ett versalt 'M' alltid bredare än ett gement 'i' i ett vanligt sans-serif-typsnitt.",
  },
  {
    question: 'Är mätning av tecken detsamma som mätning av pixlar?',
    answer: 'Nej. Mätning av tecken ger dig stränglängden, medan mätning av pixlar ger dig det visuella utrymmet den upptar. Detta är avgörande för att säkerställa att texten inte flödar över sin behållare i en webbdesign.',
  },
  {
    question: 'Kan jag använda vilket Google Fonts-typsnitt som helst?',
    answer: 'Ja, så länge typsnittet är installerat på ditt operativsystem eller laddat på den aktuella sidan, kommer verktyget att mäta dess dimensioner korrekt.',
  },
  {
    question: 'Är det säkert att bearbeta privat text eller kodsnuttar?',
    answer: 'Ja. Kalkylatorn fungerar helt lokalt. Inga data skickas till externa servrar, vilket garanterar fullständig integritet för dina projekt.',
  },
];

const howToData = [
  { name: 'Ange texten', text: 'Skriv eller klistra in texten du vill mäta i inmatningsområdet.' },
  { name: 'Konfigurera typsnittet', text: 'Ställ in typsnittsfamilj, storlek i pixlar, vikt och om den ska vara kursiv.' },
  { name: 'Läs av resultatet', text: 'Pixelbredden och teckenantalet uppdateras i realtid.' },
  { name: 'Kopiera värdet', text: 'Klicka på "Kopiera bredd" för att spara pixelantalet till klippbordet.' },
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
  name: 'Hur man mäter textbredd i pixlar',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Textpixelbreddskalkylator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Beräkna pixelbredden för valfri text korrekt baserat på typsnitt, storlek och stil.',
};

const ui: TextPixelCalculatorUI = {
  textLabel: 'Text att mäta',
  textPlaceholder: 'Skriv eller klistra in texten du vill mäta här...',
  defaultText: 'Hej världen',
  fontLabel: 'Typsnittsfamilj',
  sizeLabel: 'Storlek (px)',
  weightLabel: 'Vikt',
  italicLabel: 'Kursiv',
  widthLabel: 'Bredd (pixlar)',
  charsLabel: 'Tecken',
  previewLabel: 'Visuell förhandsgranskning',
  copyBtn: 'Kopiera bredd',
  resetBtn: 'Återställ',
  copyDone: 'Bredd kopierad',
};

export const content: ToolLocaleContent<TextPixelCalculatorUI> = {
  slug: 'text-pixel-width-calculator-sv',
  title: 'Text Pixel Beräknare',
  description: 'Beräkna exakt hur bred en text är i pixlar baserat på typsnitt, storlek och stil. Gratis verktyg för designers och utvecklare.',
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    { name: 'W3C: CSS Text Module Level 3', url: 'https://www.w3.org/TR/css-text-3/' },
    { name: 'Google Fonts: Understanding variable fonts', url: 'https://fonts.google.com/knowledge/glossary/variable_fonts' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Mät den exakta pixelbredden för valfri text' },
    {
      type: 'paragraph',
      html: 'Flödar din text över sin behållare? Behöver du veta hur mycket utrymme en rubrik tar upp innan den renderas? Webbläsarens <strong>Canvas API</strong> låter dig mäta den exakta bredden på valfri textsträng med pixelprecision, utan att rendera den i DOM.',
    },
    { type: 'title', level: 3, text: 'Varför teckenräkning inte räcker' },
    {
      type: 'paragraph',
      html: 'Moderna typsnitt är <strong>proportionella</strong>: varje glyf har en annan bredd. Ett "W" kan ta upp tre gånger mer utrymme än ett "i". Antalet tecken säger ingenting om det faktiska visuella utrymmet texten upptar.',
    },
    {
      type: 'list',
      items: [
        '<strong>Webbdesign:</strong> Förhindra spill i knappar, etiketter och tabellceller.',
        '<strong>SEO:</strong> Sökmotorer trunkerar titlar efter pixlar, inte efter tecken.',
        '<strong>Canvas och PDF:</strong> Beräkna den exakta positionen innan du ritar text programmatiskt.',
        '<strong>Tooltips och bubblor:</strong> Storleksanpassa behållare dynamiskt baserat på den inre texten.',
      ],
    },
    { type: 'title', level: 3, text: 'Hur mätning fungerar med Canvas' },
    {
      type: 'paragraph',
      html: 'Metoden <code>ctx.measureText()</code> i Canvas API returnerar ett <code>TextMetrics</code>-objekt med en <code>width</code>-egenskap som speglar CSS-pixelbredden med det för närvarande aktiva typsnittet. Detta verktyg konfigurerar kontexten med ditt typsnitt, storlek, vikt och stil före mätning.',
    },
    {
      type: 'code',
      ariaLabel: 'Exempel på Canvas measureText',
      code: "const ctx = document.createElement('canvas').getContext('2d');\nctx.font = '700 16px Inter, system-ui, sans-serif';\nconst width = ctx.measureText('Hej världen').width; // t.ex. 74.5",
    },
    { type: 'title', level: 3, text: 'Integritet och lokal bearbetning' },
    {
      type: 'paragraph',
      html: 'All beräkning sker i din webbläsare. Ingen text, kodsnutt eller privat data lämnar din enhet.',
    },
    {
      type: 'tip',
      title: 'Google Fonts typsnitt',
      html: 'För att mäta ett Google Fonts-typsnitt korrekt, se först till att det är laddat på sidan eller installerat på ditt system. Annars kommer webbläsaren att falla tillbaka på ett ersättningstypsnitt och resultatet kommer att skilja sig.',
    },
  ],
};
