import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PasswordGeneratorUI } from '../ui';

const faqData = [
  {
    question: 'Is het veilig om een online wachtwoordgenerator te gebruiken?',
    answer: "Ja, zolang de generator aan de clientzijde werkt. Onze tool genereert wachtwoorden lokaal in uw browser met behulp van cryptografisch veilige algoritmen. Uw wachtwoord wordt nooit over het internet verzonden of op een server opgeslagen.",
  },
  {
    question: "Wat maakt een wachtwoord 'hackerbestendig'?",
    answer: 'De sleutel is entropie (willekeur). Een mix van hoofdletters, kleine letters, cijfers en speciale symbolen in combinatie met een minimale lengte van 12-16 tekens maakt een brute-force aanval met de huidige technologie praktisch onmogelijk.',
  },
  {
    question: 'Waarom moet ik gewone woorden of datums vermijden?',
    answer: 'Hackers gebruiken woordenboekaanvallen die miljoenen woorden, namen en datumcombinaties per seconde testen. Puur willekeurige wachtwoorden volgen geen taalkundige patronen, waardoor ze veel veiliger zijn.',
  },
  {
    question: 'Moet ik al mijn wachtwoorden onthouden?',
    answer: 'Niet aanbevolen. De ideale aanpak is om een wachtwoordmanager te gebruiken (zoals Bitwarden, 1Password of de ingebouwde manager in uw browser) om deze lange, willekeurige wachtwoorden op te slaan, zodat u slechts één sterk hoofdwachtwoord hoeft te onthouden.',
  },
];

const howToData = [
  {
    name: 'Stel de lengte in',
    text: 'Pas de schuifregelaar aan om te kiezen hoeveel tekens uw wachtwoord zal hebben. De huidige beveiligingsnormen raden er minimaal 12 aan.',
  },
  {
    name: 'Kies complexiteit',
    text: 'Vink de opties voor hoofdletters, cijfers en symbolen aan volgens de vereisten van de site waar u het wachtwoord gaat gebruiken.',
  },
  {
    name: 'Genereer het wachtwoord',
    text: 'Klik op de knop Genereren. Elke klik creëert een unieke combinatie met een hoge entropie op basis van cryptografische algoritmen.',
  },
  {
    name: 'Kopiëren met één klik',
    text: 'Gebruik de kopieerknop om het wachtwoord op een veilige manier rechtstreeks naar uw klembord te sturen.',
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
  name: 'Hoe de veilige wachtwoordgenerator te gebruiken',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Veilige willekeurige wachtwoordgenerator',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Maak direct sterke, hackerbestendige wachtwoorden. Gratis cybersecurity-tool om willekeurige, veilige sleutels te genereren.',
};

const ui: PasswordGeneratorUI = {
  generating: 'Genereren...',
  labelSecurity: 'Sterkte',
  labelLength: 'Lengte',
  strengthWeak: 'Zwak',
  strengthFair: 'Redelijk',
  strengthGood: 'Goed',
  strengthStrong: 'Sterk',
  strengthUnbreakable: 'Onbreekbaar',
  optionUppercase: 'Hoofdletters',
  optionLowercase: 'Kleine letters',
  optionNumbers: 'Cijfers',
  optionSymbols: 'Symbolen',
  copyTitle: 'Kopiëren',
  regenerateTitle: 'Nieuwe genereren',
};

export const content: ToolLocaleContent<PasswordGeneratorUI> = {
  slug: 'wachtwoord-generator',
  title: 'Veilige willekeurige wachtwoordgenerator',
  description: 'Maak direct sterke, hackerbestendige wachtwoorden. Gratis cybersecurity-tool om willekeurige, veilige sleutels te genereren.',
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    { name: 'Web Cryptography API — MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API' },
    { name: 'NIST SP 800-63B: Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { name: 'Wachtwoord — Wikipedia', url: 'https://nl.wikipedia.org/wiki/Wachtwoord' },
    { name: 'Have I Been Pwned — Controleer of uw wachtwoord is uitgelekt', url: 'https://haveibeenpwned.com/Passwords' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'De anatomie van een onbreekbaar wachtwoord',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Uw wachtwoord is de enige barrière tussen uw persoonlijke gegevens (bankzaken, medische gegevens, foto\'s) und een cybercrimineel. Toch vertrouwt de gemiddelde gebruiker nog steeds op voorspelbare patronen zoals "123456" of namen van huisdieren, die in <strong>minder dan een seconde</strong> kunnen worden gekraakt.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:alert-circle',
          title: 'Het gevaar van Rainbow Tables',
          description: 'Hackers raden uw wachtwoord niet poging voor poging. Ze gebruiken enorme databases (Rainbow Tables) met miljoenen vooraf berekende hashes van veelgebruikte wachtwoorden. Als uw wachtwoord in het woordenboek staat of een bekende zin is, was het al gecompromitteerd voordat u het begon te gebruiken.',
          points: [],
        },
        {
          icon: 'mdi:flask',
          title: 'De oplossing: Pure Entropie',
          description: 'Entropie meet wanorde of onvoorspelbaarheid. Hoe hoger de entropie (bits), hoe meer tijd een computer nodig heeft om het te kraken. Deze tool maakt gebruik van crypto.getRandomValues(), een browser-API die cryptografisch veilige willekeurige getallen genereert, in tegenstelling tot Math.random() dat voorspelbaar is.',
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Basisprincipes van cybersecurity',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:ruler',
          title: 'Lengte boven complexiteit',
          description: 'Een wachtwoord van 20 tekens met alleen kleine letters is veiliger dan een wachtwoord van 8 tekens met zeldzame symbolen. Wiskundig gezien vermenigvuldigt elk extra teken de moeilijkheidsgraad exponentieel.',
          points: [],
        },
        {
          icon: 'mdi:eye-off',
          title: 'De mythe van vervanging',
          description: 'Het vervangen van "a" door "@" of "e" door "3" (Leetspeak) houdt niemand voor de gek. Moderne aanvalswoordenboeken bevatten deze variaties al automatisch. Vermijd het gebruik van herkenbare woorden.',
          points: [],
        },
        {
          icon: 'mdi:key-chain',
          title: 'Verschillende site, verschillende sleutel',
          description: 'Als u hetzelfde wachtwoord gebruikt voor uw e-mail en een forum, en het forum wordt gehackt, hebben ze nu toegang tot uw e-mail. Gebruik een wachtwoordmanager (zoals Bitwarden of 1Password) om complexe wachtwoorden voor u te onthouden.',
          points: [],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Privacy gegarandeerd',
      html: 'De gehele generatie vindt plaats <strong>in uw browser</strong>. Er wordt geen wachtwoord over het internet verzonden of op een server gelogd. De broncode is controleerbaar.',
    },
  ],
};
