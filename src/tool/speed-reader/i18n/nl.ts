import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedReaderUI } from '../ui';

const faqData = [
  {
    question: 'Wat is RSVP-technologie?',
    answer: 'RSVP staat voor Rapid Serial Visual Presentation. Woorden verschijnen een voor een op hetzelfde brandpunt, waardoor u uw ogen niet meer van links naar rechts hoeft te bewegen. Dit maakt het mogelijk om met veel hogere snelheden te lezen zonder dat dit ten koste gaat van het begrip, mits u oefent.',
  },
  {
    question: 'Vermindert sneller lezen het begrip?',
    answer: 'Dat hangt af van de training. Bij matige snelheden (350-500 WPM) melden veel gebruikers een hogere concentratie door het elimineren van subvocalisatie (de innerlijke stem). Bij extreme snelheden (800+ WPM) kan de retentie afnemen zonder voorafgaande oefening.',
  },
  {
    question: 'Wat is de gemiddelde leessnelheid?',
    answer: 'De gemiddelde volwassene leest tussen de 200 en 250 woorden per minuut. Met de RSVP-lezer en wat oefening is het gebruikelijk om die snelheid te verdubbelen (400-500 WPM) terwijl u een uitstekend begrip behoudt.',
  },
  {
    question: 'Veroorzaakt RSVP vermoeide ogen?',
    answer: 'Door de spierinspanning van het bewegen van uw ogen te elimineren, merken veel gebruikers dat ze met minder vermoeidheid kunnen lezen dan met traditionele methoden. Het kan in het begin intens aanvoelen, maar de hersenen passen zich snel aan.',
  },
];

const howToData = [
  { name: 'Voer uw tekst in', text: 'Plak het artikel, boek of document dat u wilt lezen in het tekstveld.' },
  { name: 'Stel WPM in', text: 'Pas de woorden per minuut (WPM) aan. Als u een beginner bent, begin dan bij 300 WPM en verhoog dit geleidelijk.' },
  { name: 'Fixeer uw blik', text: 'Houd uw ogen op de rode letter gericht (ORP-brandpunt). Probeer de woorden niet te volgen met oogbewegingen.' },
  { name: 'Start de training', text: 'Druk op de afspeelknop en laat de informatie stromen. U kunt op elk moment pauzeren.' },
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
  name: 'Hoe de RSVP-snelheidslezer te gebruiken',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RSVP Speed Reader',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Train uw leessnelheid tot 1000 woorden per minuut met RSVP-technologie en een optimale uitlijning van het herkenningspunt.',
};

const ui: SpeedReaderUI = {
  progressLabel: 'Leesvoortgang',
  speedLabel: 'Snelheid',
  slowLabel: 'LANGZAAM',
  fastLabel: 'GODMODUS',
  speedHint: 'Begin bij 300 WPM en verhoog dit geleidelijk om uw grenzen te verleggen.',
  textLabel: 'Te verwerken tekst',
  textPlaceholder: 'Plak hier uw artikel, boek of tekst...',
  clearLabel: 'WISSEN',
  words: 'woorden',
  defaultText: 'Welkom bij de RSVP Speed Reader. Plak hieronder uw tekst om te beginnen. Deze technologie helpt u om tot drie keer sneller te lezen door onnodige oogbewegingen te elimineren.',
  play: 'Afspelen',
  pause: 'Pauze',
};

export const content: ToolLocaleContent<SpeedReaderUI> = {
  slug: 'snellezer',
  title: 'RSVP Speed Reader',
  description: 'Train uw leessnelheid tot 1000 woorden per minuut. RSVP-technologie met optimale brandpuntuitlijning. Verdubbel uw intellectuele productiviteit.',
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    { name: 'Rayner, K., et al. (2016). So much to read, so little time. Psychological Science in the Public Interest.', url: 'https://journals.sagepub.com/doi/full/10.1177/1529100615623267' },
    { name: 'Forster, K. I. (1970). Visual perception of rapidly presented word sequences. Perception & Psychophysics.', url: 'https://link.springer.com/article/10.3758/BF03212522' },
    { name: 'Öquist, G., & Goldstein, M. (2003). Towards an improved readability on mobile devices. Mobile HCI.', url: 'https://www.researchgate.net/publication/221063852_Towards_an_improved_readability_on_mobile_devices' },
    { name: 'Juola, J. F., et al. (1982). Visual search and reading of rapid serial visual presentations. Perception & Psychophysics.', url: 'https://link.springer.com/article/10.3758/BF03202598' },
    { name: 'Masson, M. E. J. (1983). Conceptual processing of text during rapid serial visual presentation. Journal of Educational Psychology.', url: 'https://psycnet.apa.org/record/1984-08638-001' },
    { name: 'Saldana, D., & Greene, R. (2022). Reading effectiveness with RSVP apps. Reading Psychology.', url: 'https://www.tandfonline.com/doi/abs/10.1080/02702711.2022.2030000' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'De Formule 1 van het lezen: Ontgrendel uw mentale bandbreedte' },
    {
      type: 'paragraph',
      html: 'Wat als lezen, biomechanisch gezien, tijdverspilling zou zijn? Uw hersenen zijn een supercomputer die wordt afgeremd door een analoge verbinding: uw ogen. De <strong>RSVP-lezer</strong> doorbreekt dat knelpunt door woorden te presenteren op precies het brandpunt waar uw geest ze het snelst verwerkt.',
    },
    {
      type: 'paragraph',
      html: 'Traditioneel lezen is een inefficiënt proces. Uw ogen werken niet als een scanner; ze werken als een camera in burst-modus: stop, focus, sprong. Deze sprong, een <strong>saccade</strong> genoemd, betekent dat u een groot deel van de leestijd besteedt aan het simpelweg bewegen van uw ogen in plaats van het opnemen van informatie.',
    },
    {
      type: 'tip',
      html: '"RSVP-lezen is niet alleen sneller lezen. Het is het elimineren van de mechanische wrijving tussen tekst en uw hersenen."',
    },
    { type: 'title', level: 3, text: 'De wetenschap achter data-injectie' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:bullseye-arrow',
          title: 'Optimaal herkenningspunt (ORP)',
          description: 'Elk woord heeft een punt waar uw hersenen het het snelst herkennen. Het algoritme berekent die exacte letter (de rode) en centreert deze perfect. Uw ogen bewegen geen enkele millimeter.',
        },
        {
          icon: 'mdi:speedometer-slow',
          title: 'Cognitieve stilte',
          highlight: true,
          description: 'Boven de 400-500 WPM wordt uw innerlijke stem stil — hij kan het niet bijhouden. U stopt met het "horen" van wat u leest en begint pure betekenissen en concepten te "zien". Dit is de ultieme flow-staat.',
        },
        {
          icon: 'mdi:brain',
          title: 'Visuele neuroplasticiteit',
          description: 'Net als naar de sportschool gaan: 300 WPM zal in het begin snel aanvoelen. Na een week zal 500 WPM als een wandeling voelen. U traint de neurale paden opnieuw die uw visuele cortex verbinden met taalverwerking.',
        },
      ],
    },
    { type: 'title', level: 3, text: 'Trainingsprotocol: van beginner tot Neo' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Niveau 1: Het ontwaken (200 tot 300 WPM)',
          description: 'Uw normale leessnelheid. Wen aan de interface. Ontspan uw gezicht en laat de woorden naar u toe komen. Probeer ze niet te "grijpen".',
          points: ['Ideaal voor beginners', 'ORP-kennismaking', 'Geen vermoeide ogen'],
        },
        {
          title: 'Niveau 2: Geluidsbarrière (400 tot 500 WPM)',
          highlight: true,
          description: 'Dit is waar de magie gebeurt. U zult ongemak voelen. Rem niet af wanneer u een woord mist — uw hersenen zullen leren om gaten op te vullen vanuit de context.',
          points: ['Subvocalisatie verdwijnt', 'Mentale flow-staat', 'Verdubbel uw basissnelheid'],
        },
        {
          title: 'Niveau 3: Ontsnappingssnelheid (600+ WPM)',
          description: 'Geavanceerd gebied. Ideaal voor het doornemen van studiemateriaal, het lezen van nieuws of het consumeren von technische documentatie waarbij u op zoek bent naar kernconcepten.',
          points: ['Gemiddelde roman in 2 uur', 'Maximale leesefficiëntie', 'Vereist voorafgaande oefening'],
        },
      ],
    },
  ],
};
