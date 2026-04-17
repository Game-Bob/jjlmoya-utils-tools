import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PasswordGeneratorUI } from '../ui';

const faqData = [
  {
    question: 'Är det säkert att använda en lösenordsgenerator online?',
    answer: "Ja, så länge generatorn körs på klientsidan (client-side). Vårt verktyg genererar lösenord lokalt i din webbläsare med hjälp av kryptografiskt säkra algoritmer. Ditt lösenord skickas aldrig över internet och lagras inte på någon server.",
  },
  {
    question: "Vad gör ett lösenord 'hacksäkert'?",
    answer: 'Nyckeln är entropi (slumpmässighet). En blandning av stora och små bokstäver, siffror och specialtecken i kombination med en minsta längd på 12-16 tecken gör en brute-force-attack praktiskt taget omöjlig med dagens teknologi.',
  },
  {
    question: 'Varför ska man undvika vanliga ord eller datum?',
    answer: 'Hackare använder ordboksattacker som testar miljontals ord, namn och datumkombinationer per sekund. Helt slumpmässiga lösenord följer inga språkliga mönster, vilket gör dem mycket säkrare.',
  },
  {
    question: 'Borde jag memorera alla mina lösenord?',
    answer: 'Det rekommenderas inte. Det bästa tillvägagångssättet är att använda en lösenordshanterare (som Bitwarden, 1Password eller den som finns inbyggd i din webbläsare) för att lagra dessa långa, slumpmässiga lösenord, så att du bara behöver komma ihåg ett starkt huvudlösenord.',
  },
];

const howToData = [
  {
    name: 'Välj längd',
    text: 'Justera reglaget för att välja hur många tecken ditt lösenord ska ha. Nuvarande säkerhetsstandarder rekommenderar minst 12.',
  },
  {
    name: 'Välj komplexitet',
    text: 'Markera alternativen för stora bokstäver, siffror och symboler enligt kraven för den webbplats där du ska använda lösenordet.',
  },
  {
    name: 'Generera lösenordet',
    text: 'Klicka på generera-knappen. Varje klick skapar en unik kombination med hög entropi baserad på kryptografiska algoritmer.',
  },
  {
    name: 'Kopiera med ett klick',
    text: 'Använd kopiera-knappen för att skicka lösenordet direkt till ditt urklipp på ett säkert sätt.',
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
  name: 'Hur man använder den säkra lösenordsgeneratorn',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Säker slumpmässig lösenordsgenerator',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Skapa starka, hacksäkra lösenord omedelbart. Gratis cybersäkerhetsverktyg för att generera slumpmässiga, säkra nycklar.',
};

const ui: PasswordGeneratorUI = {
  generating: 'Genererar...',
  labelSecurity: 'Styrka',
  labelLength: 'Längd',
  strengthWeak: 'Svag',
  strengthFair: 'Godtagbar',
  strengthGood: 'Bra',
  strengthStrong: 'Stark',
  strengthUnbreakable: 'Oknäckbar',
  optionUppercase: 'Stora bokstäver',
  optionLowercase: 'Små bokstäver',
  optionNumbers: 'Siffror',
  optionSymbols: 'Symboler',
  copyTitle: 'Kopiera',
  regenerateTitle: 'Generera nytt',
};

export const content: ToolLocaleContent<PasswordGeneratorUI> = {
  slug: 'losenordsgenerator',
  title: 'Säker slumpmässig lösenordsgenerator',
  description: 'Skapa starka, hacksäkra lösenord omedelbart. Gratis cybersäkerhetsverktyg för att generera slumpmässiga, säkra nycklar.',
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    { name: 'Web Cryptography API — MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API' },
    { name: 'NIST SP 800-63B: Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { name: 'Lösenord — Wikipedia', url: 'https://sv.wikipedia.org/wiki/L%C3%B6senord' },
    { name: 'Have I Been Pwned — Kontrollera om ditt lösenord har exponerats', url: 'https://haveibeenpwned.com/Passwords' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Anatomin hos ett oknäckbart lösenord',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ditt lösenord är den enda barriären mellan dina personliga data (bank, sjukvård, foton) och en cyberkriminell. Ändå förlitar sig den genomsnittliga användaren fortfarande på förutsägbara mönster som "123456" eller husdjursnamn, som kan knäckas på <strong>mindre än en sekund</strong>.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:alert-circle',
          title: 'Faran med Rainbow Tables',
          description: 'Hackare gissar inte ditt lösenord ett försök i taget. De använder massiva databaser (Rainbow Tables) som innehåller miljontals förberäknade hashar av vanliga lösenord. Om ditt lösenord finns i ordboken eller är en känd fras var det redan komprometterat innan du började använda det.',
          points: [],
        },
        {
          icon: 'mdi:flask',
          title: 'Lösningen: Ren entropi',
          description: 'Entropi mäter oordning eller oförutsägbarhet. Ju högre entropi (bitar), desto mer tid behöver en dator för att knäcka det. Det här verktyget använder crypto.getRandomValues(), ett webbläsar-API som genererar kryptografiskt säkra slumptal, till skillnad från Math.random() som är förutsägbart.',
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Grundläggande cybersäkerhetsprinciper',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:ruler',
          title: 'Längd före komplexitet',
          description: 'Ett lösenord med 20 tecken och endast små bokstäver är säkrare än ett lösenord med 8 tecken och sällsynta symboler. Matematiskt sett multiplicerar varje extra tecken svårigheten exponentiellt.',
          points: [],
        },
        {
          icon: 'mdi:eye-off',
          title: 'Myten om substitution',
          description: 'Att ersätta "a" med "@" eller "e" med "3" (Leetspeak) lurar ingen. Moderna ordboksattacker inkluderar automatiskt dessa variationer. Undvik att använda igenkännbara ord.',
          points: [],
        },
        {
          icon: 'mdi:key-chain',
          title: 'Olika sajter, olika nycklar',
          description: 'Om du använder samma lösenord för din e-post och ett forum, och forumet blir hackat, har de nu tillgång till din e-post. Använd en lösenordshanterare (som Bitwarden eller 1Password) för att komma ihåg komplexa lösenord åt dig.',
          points: [],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Garanterad integritet',
      html: 'All generering sker <strong>i din webbläsare</strong>. Inget lösenord skickas över internet eller loggas på någon server. Källkoden är granskningsbar.',
    },
  ],
};
