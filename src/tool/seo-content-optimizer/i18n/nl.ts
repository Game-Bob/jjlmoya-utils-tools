import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SeoContentOptimizerUI } from '../ui';

const faqData = [
  {
    question: 'Hoe helpt deze tool mijn SEO-ranking?',
    answer: 'Door de zoekwoorddichtheid en de leesbaarheid van zinnen te analyseren, zorgt u ervoor dat uw inhoud gemakkelijk te begrijpen is voor gebruikers en relevant is voor zoekmachines, terwijl u boetes voor over-optimalisatie vermijdt.',
  },
  {
    question: 'Welke HTML-elementen controleert de technische analyse?',
    answer: 'Het verifieert het bestaan en de uniciteit van de H1-tag, de aanwezigheid van H2/H3-subkoppen en alt-attributen bij afbeeldingen.',
  },
  {
    question: 'Wordt mijn inhoud op een server opgeslagen?',
    answer: 'Nee. De analyse draait 100% lokaal in uw browser. Uw inhoud verlaat nooit uw computer.',
  },
  {
    question: 'Is het compatibel met de Yoast SEO-criteria?',
    answer: 'Ja, we implementeren vergelijkbare criteria als Yoast: zinlengte, alinea-verdeling en koptekst-hiërarchie.',
  },
];

const howToData = [
  { name: 'Schrijf of plak uw tekst', text: 'Voer de inhoud die u wilt analyseren in het hoofdtekstveld in.' },
  { name: 'Bekijk de optimalisatie-checklist', text: 'Controleer de waarschuwingen voor lengte, leesbaarheid en zoekwoorddichtheid in het zijpaneel.' },
  { name: 'Analyseer technische HTML', text: 'Schakel over naar het tabblad voor technische analyse om H1-tags, alt-teksten van afbeeldingen en metagegevensstructuur te verifiëren.' },
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
  name: 'Hoe inhoud te optimaliseren voor SEO',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SEO Content Optimizer',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Analyseer de zoekwoorddichtheid, leesbaarheid en technische HTML-structuur van uw teksten in realtime, zonder gegevens naar een server te verzenden.',
};

const ui: SeoContentOptimizerUI = {
  tabText: 'Tekstanalyse',
  tabHtml: 'Technische HTML-analyse',
  textareaPlaceholder: 'Schrijf uw tekst of plak hier uw HTML-code...',
  statsChars: 'Tekens',
  statsWords: 'Woorden',
  statsReading: 'Leestijd',
  statsSentences: 'Zinnen',
  checklistTitle: 'Optimalisatie-checklist',
  keywordsTitle: 'Zoekwoorddichtheid',
  technicalTitle: 'Technische HTML-analyse',
  h1Label: 'H1 gedetecteerd',
  linksLabel: 'Links (a)',
  imgsLabel: 'Afbeeldingen (img)',
  altsLabel: 'Ontbrekende alts',
  emptyState: 'Geen gegevens',
  analyzing: 'Analyseren...',
  checkInsufficient: 'Onvoldoende lengte (< 300 woorden)',
  checkPillar: 'Uitstekende pillar-content (> 900 woorden)',
  checkGoodLength: 'Goede lengte voor SEO',
  checkLongSentences: 'Te veel lange zinnen (> 25% van de tekst)',
  checkGoodReadability: 'Optimale leesbaarheid van zinnen',
  checkLongParagraphs: 'Splits zeer lange alinea\'s (> 150 woorden)',
  checkMissingH1: 'H1-tag ontbreekt',
  checkMultipleH1: 'Meerdere H1-tags gedetecteerd',
  checkMissingH2: 'Subkoppen (H2) ontbreken',
  checkMissingTitle: 'Meta title-tag ontbreekt',
  stopWords: JSON.stringify(['de', 'het', 'een', 'en', 'of', 'maar', 'in', 'op', 'bij', 'te', 'voor', 'van', 'met', 'door', 'uit', 'als', 'is', 'was', 'zijn', 'waren', 'worden', 'geweest', 'hebben', 'heeft', 'had', 'doen', 'doet', 'deed', 'het', 'zijn', 'dit', 'dat', 'deze', 'die', 'niet', 'geen', 'zo', 'op', 'als', 'mijn', 'jouw', 'zijn', 'haar', 'onze', 'jullie', 'hun']),
};

export const content: ToolLocaleContent<SeoContentOptimizerUI> = {
  slug: 'seo-content-optimizer-nl',
  title: 'SEO Content Optimizer',
  description: 'Analyseer de zoekwoorddichtheid, leesbaarheid en technische HTML-structuur van uw teksten in realtime. Gratis en privé SEO-tool.',
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    { name: "Google's SEO-starthandleiding", url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=nl' },
    { name: 'Yoast SEO leesbaarheidscriteria', url: 'https://yoast.com/what-is-readability/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'SEO Content Optimizer: Zoekwoorden, Leesbaarheid en Structuur' },
    {
      type: 'paragraph',
      html: 'De kwaliteit van de inhoud wordt niet langer uitsluitend gemeten aan de hand van de zoekwoorden die u opneemt, maar aan de hand van de manier waarop u uw informatie structureert, zodat deze begrijpelijk is voor zowel mensen als Google-crawlers. Onze <strong>realtime SEO-analysetool</strong> geeft u volledige controle over zoekwoorddichtheid, leesbaarheid van alinea\'s en fundamentele technische HTML-elementen.',
    },
    { type: 'title', level: 3, text: 'Zoekwoorddichtheid en semantische relevantie' },
    {
      type: 'paragraph',
      html: 'De <strong>zoekwoorddichtheid</strong> geeft aan hoe vaak een term voorkomt in vergelijking met de rest van de tekst. Overmatige herhaling activeert <em>keyword stuffing</em>-filters, terwijl een zeer lage dichtheid het voor zoekmachines moeilijk kan maken om het centrale onderwerp van uw artikel te identificeren.',
    },
    {
      type: 'list',
      items: [
        '<strong>Relevantie-analyse:</strong> Identificeer of de meest herhaalde woorden overeenkomen met uw zoekintentie.',
        '<strong>Voorkomen van boetes:</strong> Vermijd het overmatig herhalen van termen die als spam kunnen overkomen.',
        '<strong>Semantische optimalisatie:</strong> Vind de balans tussen technische termen en natuurlijke taal.',
      ],
    },
    { type: 'title', level: 3, text: 'Leesbaarheid in de Yoast-stijl' },
    {
      type: 'paragraph',
      html: 'Leesbaarheid is een indirecte maar cruciale rankingfactor. Als gebruikers vertrekken omdat alinea\'s eindeloze tekstblokken zijn, daalt uw <em>Dwell Time</em>. De analyzer detecteert lange zinnen (meer dan 20 woorden), alinea\'s van meer dan 150 woorden en controleert op subkoppen.',
    },
    {
      type: 'tip',
      title: 'Leestijd',
      html: 'De meeste gebruikers beslissen binnen 10 seconden of ze een artikel gaan lezen. Het kennen van de geschatte leestijd (berekend op een gemiddelde van 200 woorden per minuut) helpt het bouncepercentage te verlagen door de verwachtingen van de lezer te managen.',
    },
    { type: 'title', level: 3, text: 'Technische HTML-analyse' },
    {
      type: 'paragraph',
      html: 'Plak uw broncode om belangrijke elementen te verifiëren: uniciteit van de <strong>H1</strong>, aanwezigheid van H2/H3-subkoppen, afbeeldingen zonder <code>alt</code>-attributen en het bestaan van de <code>title</code>-tag. Alle verwerking vindt plaats in uw browser zonder gegevens naar een server te verzenden.',
    },
  ],
};
