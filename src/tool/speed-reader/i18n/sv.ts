import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedReaderUI } from '../ui';

const faqData = [
  {
    question: 'Vad är RSVP-teknik?',
    answer: 'RSVP står för Rapid Serial Visual Presentation. Ord visas ett i taget på samma fokuspunkt, vilket eliminerar behovet av att flytta ögonen från vänster till höger. Detta gör det möjligt att läsa i mycket högre hastigheter utan att offra förståelsen när man har övat.',
  },
  {
    question: 'Minskar läsförståelsen om man läser snabbare?',
    answer: 'Det beror på träning. Vid måttliga hastigheter (350-500 WPM) rapporterar många användare högre koncentration genom att eliminera subvokalisering (den inre röst man hör när man läser). Vid extrema hastigheter (800+ WPM) kan förståelsen minska utan föregående träning.',
  },
  {
    question: 'Vad är den genomsnittliga läshastigheten?',
    answer: 'Den genomsnittliga vuxna läser mellan 200 och 250 ord per minut. Med RSVP-läsaren och lite träning är det vanligt att fördubbla den hastigheten (400-500 WPM) med bibehållen utmärkt förståelse.',
  },
  {
    question: 'Orsakar RSVP ansträngda ögon?',
    answer: 'Genom att eliminera den muskulära ansträngningen av att flytta ögonen upplever många användare att de kan läsa med mindre trötthet än med traditionella metoder. Det kan kännas intensivt i början, men hjärnan anpassar sig snabbt.',
  },
];

const howToData = [
  { name: 'Ange din text', text: 'Klistra in artikeln, boken eller dokumentet du vill läsa i textområdet.' },
  { name: 'Konfigurera WPM', text: 'Justera ord per minut (WPM). Om du är nybörjare, börja på 300 WPM och öka gradvis.' },
  { name: 'Fixera blicken', text: 'Håll ögonen på den röda bokstaven (ORP-fokuspunkt). Försök inte följa orden med ögonrörelser.' },
  { name: 'Börja träna', text: 'Tryck på play-knappen och låt informationen flöda. Du kan pausa när som helst.' },
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
  name: 'Hur man använder RSVP-snabbläsaren',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RSVP Speed Reader',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Träna din läshastighet upp till 1000 ord per minut med RSVP-teknik och optimal inriktning av igenkänningspunkten.',
};

const ui: SpeedReaderUI = {
  progressLabel: 'Läsningens framsteg',
  speedLabel: 'Hastighet',
  slowLabel: 'LÅNGSAM',
  fastLabel: 'GUD',
  speedHint: 'Börja på 300 WPM e öka gradvis för att utmana dina gränser.',
  textLabel: 'Text att bearbeta',
  textPlaceholder: 'Klistra in din artikel, bok eller text här...',
  clearLabel: 'RENSA',
  words: 'ord',
  defaultText: 'Välkommen till RSVP Speed Reader. Klistra in din text nedan för att börja. Denna teknik hjälper dig att läsa upp till tre gånger snabbare genom att eliminera onödiga ögonrörelser.',
  play: 'Spela',
  pause: 'Pausa',
};

export const content: ToolLocaleContent<SpeedReaderUI> = {
  slug: 'snabblasare',
  title: 'RSVP Speed Reader',
  description: 'Träna din läshastighet upp till 1000 ord per minut. RSVP-teknik med optimal fokuspunktinriktning. Fördubbla din intellektuella produktivitet.',
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenser',
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
    { type: 'title', level: 2, text: 'Läsningens Formel 1: Lås upp din mentala bandbredd' },
    {
      type: 'paragraph',
      html: 'Tänk om läsning, biomekaniskt sett, vore slöseri med tid? Din hjärna är en superdator som begränsas av en analog anslutning: dina ögon. <strong>RSVP-läsaren</strong> bryter den flaskhalsen genom att presentera ord vid den exakta fokuspunkt där ditt sinne bearbetar dem snabbast.',
    },
    {
      type: 'paragraph',
      html: 'Traditionell läsning är en ineffektiv process. Dina ögon fungerar inte som en skanner; de fungerar som en kamera i burst-läge: stoppa, fokusera, hoppa. Detta hopp, kallat en <strong>sackad</strong>, innebär att du spenderar en stor del av lästiden på att bara flytta ögonen istället för att ta till dig information.',
    },
    {
      type: 'tip',
      html: '"RSVP-läsning handlar inte bara om att läsa snabbare. Det handlar om att eliminera den mekaniska friktionen mellan text och din hjärna."',
    },
    { type: 'title', level: 3, text: 'Vetenskapen bakom datainjektion' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:bullseye-arrow',
          title: 'Optimal Recognition Point (ORP)',
          description: 'Varje ord har en punkt där din hjärna känner igen det snabbast. Algoritmen beräknar den exakta bokstaven (den röda) och centrerar den perfekt. Dina ögon rör sig inte en millimeter.',
        },
        {
          icon: 'mdi:speedometer-slow',
          title: 'Kognitiv tystnad',
          highlight: true,
          description: 'Över 400-500 WPM tystnar din inre röst — den hinner inte med. Du slutar "höra" det du läser och börjar "se" rena betydelser och koncept. Detta är det ultimata flow-tillståndet.',
        },
        {
          icon: 'mdi:brain',
          title: 'Visuell neuroplasticitet',
          description: 'Som att gå till gymmet: 300 WPM kommer att kännas snabbt i början. Efter en vecka kommer 500 WPM att kännas som en promenad. Du tränar om nervbanorna som kopplar din visuella cortex till språkbehandling.',
        },
      ],
    },
    { type: 'title', level: 3, text: 'Träningsprotokoll: Från nybörjare till Neo' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Nivå 1: Uppvaknandet (200 till 300 WPM)',
          description: 'Din normala läshastighet. Vänj dig vid gränssnittet. Slappna av i ansiktet och låt orden komma till dig. Försök inte "fånga" dem.',
          points: ['Idealisk för nybörjare', 'ORP-bekantskap', 'Ingen ansträngning för ögonen'],
        },
        {
          title: 'Nivå 2: Ljudvallen (400 till 500 WPM)',
          highlight: true,
          description: 'Det är här magin händer. Du kommer att känna obehag. Sänk inte farten när du missar ett ord — din hjärna kommer att lära sig att fylla i luckor från sammanhanget.',
          points: ['Subvokalisering försvinner', 'Mentalt flow-tillstånd', 'Fördubbla din bashastighet'],
        },
        {
          title: 'Nivå 3: Flykthastighet (600+ WPM)',
          description: 'Avancerat territorium. Perfekt för att granska studiematerial, läsa nyheter eller konsumera teknisk dokumentation där du söker nyckelbegrepp.',
          points: ['Genomsnittlig roman på 2 timmar', 'Maximal läseffektivitet', 'Kräver föregående träning'],
        },
      ],
    },
  ],
};
