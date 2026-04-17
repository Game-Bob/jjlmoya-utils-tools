import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SeoContentOptimizerUI } from '../ui';

const faqData = [
  {
    question: 'Hur hjälper detta verktyg min SEO-ranking?',
    answer: 'Genom att analysera sökordsdensitet och meningsläsbarhet säkerställer du att ditt innehåll är lätt att förstå för användare och relevant för sökmotorer, samtidigt som du undviker straffavgifter för överoptimering.',
  },
  {
    question: 'Vilka HTML-element kontrollerar den tekniska analysen?',
    answer: 'Den verifierar förekomsten och unikheten hos H1-taggen, närvaron av H2/H3-underrubriker och alt-attribut på bilder.',
  },
  {
    question: 'Lagras mitt innehåll på någon server?',
    answer: 'Nej. Analysen körs till 100 % lokalt i din webbläsare. Ditt innehåll lämnar aldrig din dator.',
  },
  {
    question: 'Är det kompatibelt med Yoast SEO-kriterier?',
    answer: 'Ja, vi implementerar liknande kriterier som Yoast: meningslängd, styckesfördelning och rubrikhierarki.',
  },
];

const howToData = [
  { name: 'Skriv eller klistra in din text', text: 'Ange innehållet du vill analysera i huvudtextområdet.' },
  { name: 'Granska checklistan för optimering', text: 'Kontrollera varningar om längd, läsbarhet och sökordsdensitet i sidopanelen.' },
  { name: 'Analysera teknisk HTML', text: 'Byt till fliken för teknisk analys för att verifiera H1-taggar, bild-alts och metadatastruktur.' },
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
  name: 'Hur man optimerar innehåll för SEO',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SEO Content Optimizer',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Analysera sökordsdensitet, läsbarhet och teknisk HTML-struktur i dina texter i realtid, utan att skicka data till någon server.',
};

const ui: SeoContentOptimizerUI = {
  tabText: 'Textanalys',
  tabHtml: 'Teknisk HTML-analys',
  textareaPlaceholder: 'Skriv din text eller klistra in din HTML-kod här...',
  statsChars: 'Tecken',
  statsWords: 'Ord',
  statsReading: 'Läsning',
  statsSentences: 'Meningar',
  checklistTitle: 'Checklista för optimering',
  keywordsTitle: 'Sökordsdensitet',
  technicalTitle: 'Teknisk HTML-analys',
  h1Label: 'H1 upptäckt',
  linksLabel: 'Länkar (a)',
  imgsLabel: 'Bilder (img)',
  altsLabel: 'Saknade alts',
  emptyState: 'Ingen data',
  analyzing: 'Analyserar...',
  checkInsufficient: 'Otillräcklig längd (< 300 ord)',
  checkPillar: 'Utmärkt pillar-innehåll (> 900 ord)',
  checkGoodLength: 'Bra längd för SEO',
  checkLongSentences: 'För många långa meningar (> 25 % av texten)',
  checkGoodReadability: 'Optimal meningsläsbarhet',
  checkLongParagraphs: 'Dela upp mycket långa stycken (> 150 ord)',
  checkMissingH1: 'H1-tagg saknas',
  checkMultipleH1: 'Flera H1-taggar upptäckta',
  checkMissingH2: 'Underrubriker (H2) saknas',
  checkMissingTitle: 'Meta title-tagg saknas',
  stopWords: JSON.stringify(['och', 'eller', 'men', 'i', 'på', 'vid', 'till', 'för', 'av', 'med', 'från', 'som', 'är', 'var', 'ha', 'hade', 'göra', 'den', 'det', 'denna', 'detta', 'dessa', 'inte', 'nej', 'så', 'om', 'min', 'din', 'hans', 'hennes', 'vår', 'er', 'deras']),
};

export const content: ToolLocaleContent<SeoContentOptimizerUI> = {
  slug: 'seo-innehallsoptimizerare',
  title: 'SEO Content Optimizer',
  description: 'Analysera sökordsdensitet, läsbarhet och teknisk HTML-struktur i dina texter i realtid. Gratis och privat SEO-verktyg.',
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    { name: "Googles startguide för SEO", url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=sv' },
    { name: 'Yoast SEO läsbarhetskriterier', url: 'https://yoast.com/what-is-readability/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'SEO Content Optimizer: Sökord, läsbarhet och struktur' },
    {
      type: 'paragraph',
      html: 'Innehållskvalitet mäts inte längre enbart genom de sökord du inkluderar, utan genom hur du strukturerar din information så att den är lättsmält för både människor och Googles sökrobotar. Vårt <strong>verktyg för SEO-analys i realtid</strong> ger dig full kontroll över sökordsdensitet, styckesläsbarhet och grundläggande tekniska HTML-element.',
    },
    { type: 'title', level: 3, text: 'Sökordsdensitet och semantisk relevans' },
    {
      type: 'paragraph',
      html: '<strong>Sökordsdensitet</strong> anger hur ofta en term förekommer jämfört med resten av texten. Överdriven upprepning utlöser <em>keyword stuffing</em>-filter, medan mycket låg densitet kan göra det svårt för sökmotorer att identifiera din artikels centrala ämne.',
    },
    {
      type: 'list',
      items: [
        '<strong>Relevansanalys:</strong> Identifiera om de mest upprepade orden matchar din sökintention.',
        '<strong>Förebyggande av straff:</strong> Undvik att upprepa termer i onödan som kan framstå som spam.',
        '<strong>Semantisk optimering:</strong> Hitta balansen mellan tekniska termer och naturligt språk.',
      ],
    },
    { type: 'title', level: 3, text: 'Läsbarhet i Yoast-stil' },
    {
      type: 'paragraph',
      html: 'Läsbarhet är en indirekt men avgörande rankningsfaktor. Om användare lämnar sidan för att styckena är oändliga textblock, sjunker din <em>Dwell Time</em>. Analysatorn upptäcker långa meningar (över 20 ord), stycken på över 150 ord och kontrollerar om det finns underrubriker.',
    },
    {
      type: 'tip',
      title: 'Lästid',
      html: 'De flesta användare bestämmer sig för om de ska läsa en artikel på under 10 sekunder. Att känna till den beräknade lästiden (beräknad på ett genomsnitt av 200 ord per minut) hjälper till att minska avvisningsfrekvensen genom att ställa in läsarens förväntningar.',
    },
    { type: 'title', level: 3, text: 'Teknisk HTML-analys' },
    {
      type: 'paragraph',
      html: 'Klistra in din källkod för att verifiera nyckelelement: unikhet hos <strong>H1</strong>, närvaro av H2/H3-underrubriker, bilder utan <code>alt</code>-attribut och att <code>title</code>-taggen finns. All bearbetning sker i din webbläsare utan att data skickas till någon server.',
    },
  ],
};
