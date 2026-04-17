import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EmailListCleanerUI } from '../ui';

const faqData = [
  {
    question: 'Wat doet deze e-maillijst-cleaner precies?',
    answer: 'De tool analyseert uw e-maillijst, verwijdert duplicaten, verwijdert onnodige witruimte, valideert de basisindeling en normaliseert alle adressen naar kleine letters om een schone database te garanderen.',
  },
  {
    question: 'Is er een limiet aan het aantal e-mails?',
    answer: 'Er is geen strikte recordlimiet. U kunt duizenden e-mails direct in één keer verwerken. De enige beperking is het geheugen van uw browser als de lijst extreem groot is.',
  },
  {
    question: 'Is it veilig om mijn e-mails hier te plakken?',
    answer: 'Absoluut. Alle verwerking vindt lokaal plaats in uw eigen browser via JavaScript. Uw gegevens worden nooit naar onze servers verzonden of opgeslagen in een externe database.',
  },
  {
    question: 'Hoe verbetert dit de afleverbaarheid van mijn campagne?',
    answer: 'Door niet-bestaande of verkeerd opgemaakte adressen te verwijderen, verlaagt u uw bouncepercentage, wat uw domeinreputatie verbetert bij providers zoals Gmail, Outlook en Yahoo.',
  },
];

const howToData = [
  { name: 'Plak uw e-mails', text: 'Kopieer uw e-maillijst en plak deze in het tekstvak. Ze kunnen worden gescheiden door regels, komma\'s of spaties.' },
  { name: 'Schoon de lijst op', text: "Klik op de knop 'Lijst Opschonen' om het validatie- en duplicaatverwijderingsproces te starten." },
  { name: 'Bekijk de resultaten', text: 'Controleer de statistieken die originele vs. uiteindelijke e-mails tonen en bekijk de opgeschoonde lijst in het onderste paneel.' },
  { name: 'Kopieer of download', text: 'Kopieer het resultaat rechtstreeks naar het klembord of download het als een kant-en-klaar .txt-bestand.' },
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
  name: 'Hoe een e-maillijst op te schonen',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'E-maillijst Cleaner',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Verwijder duplicaten, corrigeer witruimte en valideer formaten in uw e-maillijst. Gratis tool zonder recordlimiet.',
};

const ui: EmailListCleanerUI = {
  inputLabel: 'E-maillijst',
  inputPlaceholder: 'Plak hier uw e-maillijst (gescheiden door regels, komma\'s of spaties)...',
  cleanBtn: 'Lijst Opschonen',
  clearBtn: 'Alles Wissen',
  statsOriginal: 'Origineel',
  statsRemoved: 'Verwijderd',
  statsFinal: 'Schoon',
  resultLabel: 'Schoon Resultaat',
  copyBtn: 'Lijst Kopiëren',
  copyDone: 'Gekopieerd!',
  downloadBtn: 'Download .txt',
  registered: 'geregistreerd',
  downloadFilename: 'schone-emails',
};

export const content: ToolLocaleContent<EmailListCleanerUI> = {
  slug: 'email-lijst-cleaner',
  title: 'E maillijst Cleaner',
  description: 'Schoon e-maillijsten gratis op. Verwijder duplicaten, corrigeer witruimte en valideer formaten in seconden. Bespaar kosten en verbeter uw afleverbaarheid.',
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    { name: 'RFC 5322: Internet Message Format', url: 'https://datatracker.ietf.org/doc/html/rfc5322' },
    { name: 'Google: Richtlijnen voor e-mailverzenders', url: 'https://support.google.com/a/answer/81126' },
    { name: 'Wikipedia: E-mailspam', url: 'https://nl.wikipedia.org/wiki/Spam_(post)' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Waarom is het gebruik van een e-maillijst-cleaner essentieel?' },
    {
      type: 'paragraph',
      html: 'In de wereld van digitale marketing is de kwaliteit van uw database veel belangrijker dan de grootte ervan. Een lijst met 50.000 e-mails is waardeloos als de helft ervan niet-bestaande adressen zijn, typefouten bevatten of duplicaten zijn. Dit is waar een <strong>e-maillijst-cleaner</strong> onmisbaar wordt.',
    },
    { type: 'title', level: 3, text: 'De risico\'s van een vervuilde e-maillijst' },
    {
      type: 'paragraph',
      html: 'Het bijhouden van een niet-opgeschoonde database kan ernstige gevolgen hebben. Het verzenden van e-mails naar adressen die niet bestaan, genereert een "hard bounce". Als dit percentage de 2-3% overschrijdt, zullen spamfilters uw domein nauwkeuriger gaan onderzoeken en kunt u op een internationale zwarte lijst terechtkomen.',
    },
    {
      type: 'tip',
      title: 'Expert tip',
      html: 'Koop nooit e-maillijsten. Het is de snelste manier om uw domeinreputatie te ruïneren. Bouw uw eigen lijst organisch op en schoon deze elke 3 tot 6 maanden op.',
    },
    { type: 'title', level: 3, text: 'Hoe onze tool uw database optimaliseert' },
    {
      type: 'paragraph',
      html: 'Onze gratis tool voert een grondige en snelle opschoning van uw databases uit zonder recordlimieten. Het voert direct verschillende kritieke validatietaken uit:',
    },
    {
      type: 'list',
      items: [
        '<strong>Duplicaatverwijdering:</strong> Dezelfde gebruiker ontvangt niet twee keer dezelfde e-mail.',
        '<strong>Witruimte-correctie:</strong> We verwijderen onbedoelde spaties aan het begin of einde die de verzending ongeldig zouden maken.',
        '<strong>Formaatvalidatie:</strong> We filteren vermeldingen die geen geldige e-mailstructuur hebben.',
        '<strong>Normalisatie:</strong> Alles wordt omgezet naar kleine letters om redundante records te voorkomen.',
      ],
    },
    { type: 'title', level: 3, text: 'Wanneer is het juiste moment om uw lijst op te schonen?' },
    {
      type: 'list',
      items: [
        'Voordat u contacten importeert in een nieuw CRM- of verzendplatform (Mailchimp, SendGrid, etc.).',
        'Als u merkt dat uw open rate onder het gebruikelijke gemiddelde is gedaald.',
        'Na een evenement of beurs waar u handmatig gegevens hebt verzameld.',
        'Als preventief onderhoud elk kwartaal om de gezondheid van het domein te behouden.',
      ],
    },
    { type: 'title', level: 3, text: 'Impact op return on investment' },
    {
      type: 'paragraph',
      html: 'E-mailmarketing blijft een van de kanalen met de hoogste ROI, maar alleen als berichten de inbox bereiken. Door een <strong>e-mailcleaner</strong> te gebruiken, optimaliseert u uw verkooptrechter vanaf de bron en stopt u met het betalen van platforms voor contacten die uw berichten nooit zullen zien.',
    },
    {
      type: 'tip',
      title: 'Implementeer double opt in',
      html: 'De beste manier om nepe-mails te voorkomen is door van gebruikers te vragen hun abonnement te bevestigen door op een link te klikken die naar hun inbox is verzonden. Dit garandeert dat de e-mail bestaat en dat de gebruiker er toegang toe heeft.',
    },
  ],
};
