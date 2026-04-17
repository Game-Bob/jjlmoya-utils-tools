import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SeoContentOptimizerUI } from '../ui';

const faqData = [
  {
    question: 'In che modo questo strumento aiuta il mio posizionamento SEO?',
    answer: 'Analizzando la densità delle parole chiave e la leggibilità delle frasi, ti assicuri che il tuo contenuto sia facile da capire per gli utenti e pertinente per i motori di ricerca, evitando penalizzazioni per sovra-ottimizzazione.',
  },
  {
    question: 'Quali elementi HTML controlla l\'analisi tecnica?',
    answer: 'Verifica l\'esistenza e l\'unicità del tag H1, la presenza di sottotitoli H2/H3 e gli attributi alt sulle immagini.',
  },
  {
    question: 'I miei contenuti vengono memorizzati su qualche server?',
    answer: 'No. L\'analisi viene eseguita al 100% localmente nel tuo browser. I tuoi contenuti non lasciano mai il tuo computer.',
  },
  {
    question: 'È compatibile con i criteri Yoast SEO?',
    answer: 'Sì, implementiamo criteri simili a Yoast: lunghezza delle frasi, distribuzione dei paragrafi e gerarchia dei titoli.',
  },
];

const howToData = [
  { name: 'Scrivi o incolla il tuo testo', text: 'Inserisci il contenuto che vuoi analizzare nell\'area di testo principale.' },
  { name: 'Controlla la checklist di ottimizzazione', text: 'Verifica gli avvisi su lunghezza, leggibilità e densità delle parole chiave nel pannello laterale.' },
  { name: 'Analizza l\'HTML tecnico', text: 'Passa alla scheda dell\'analisi tecnica per verificare i tag H1, gli alt delle immagini e la struttura dei metadati.' },
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
  name: 'Come ottimizzare i contenuti per la SEO',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ottimizzatore di Contenuti SEO',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Analizza la densità delle parole chiave, la leggibilità e la struttura HTML tecnica dei tuoi testi in tempo reale, senza inviare dati a nessun server.',
};

const ui: SeoContentOptimizerUI = {
  tabText: 'Analisi del Testo',
  tabHtml: 'Analisi HTML Tecnica',
  textareaPlaceholder: 'Scrivi il tuo testo o incolla qui il tuo codice HTML...',
  statsChars: 'Caratteri',
  statsWords: 'Parole',
  statsReading: 'Lettura',
  statsSentences: 'Frasi',
  checklistTitle: 'Checklist di Ottimizzazione',
  keywordsTitle: 'Densità Parole Chiave',
  technicalTitle: 'Analisi HTML Tecnica',
  h1Label: 'H1 Rilevato',
  linksLabel: 'Link (a)',
  imgsLabel: 'Immagini (img)',
  altsLabel: 'Alt mancanti',
  emptyState: 'Nessun dato',
  analyzing: 'Analisi in corso...',
  checkInsufficient: 'Lunghezza insufficiente (< 300 parole)',
  checkPillar: 'Eccellente contenuto pillar (> 900 parole)',
  checkGoodLength: 'Buona lunghezza per la SEO',
  checkLongSentences: 'Troppe frasi lunghe (> 25% del testo)',
  checkGoodReadability: 'Leggibilità delle frasi ottimale',
  checkLongParagraphs: 'Dividi i paragrafi molto lunghi (> 150 parole)',
  checkMissingH1: 'Tag H1 mancante',
  checkMultipleH1: 'Rilevati più tag H1',
  checkMissingH2: 'Sottotitoli (H2) mancanti',
  checkMissingTitle: 'Tag meta title mancante',
  stopWords: JSON.stringify(['il', 'lo', 'la', 'i', 'gli', 'le', 'un', 'uno', 'una', 'e', 'o', 'ma', 'in', 'su', 'a', 'per', 'di', 'con', 'da', 'come', 'è', 'era', 'sono', 'erano', 'essere', 'stato', 'avere', 'ha', 'aveva', 'fare', 'fa', 'fece', 'esso', 'suo', 'questo', 'quello', 'questi', 'quelli', 'non', 'no', 'così', 'su', 'se', 'mio', 'tuo', 'suo', 'sua', 'nostro', 'vostro', 'loro']),
};

export const content: ToolLocaleContent<SeoContentOptimizerUI> = {
  slug: 'ottimizzatore-contenuti-seo',
  title: 'Ottimizzatore di Contenuti SEO',
  description: 'Analizza la densità delle parole chiave, la leggibilità e la struttura HTML tecnica dei tuoi testi in tempo reale. Strumento SEO gratuito e privato.',
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    { name: "Guida introduttiva di Google alla SEO", url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=it' },
    { name: 'Criteri di leggibilità Yoast SEO', url: 'https://yoast.com/what-is-readability/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Ottimizzatore di Contenuti SEO: Parole Chiave, Leggibilità e Struttura' },
    {
      type: 'paragraph',
      html: 'La qualità dei contenuti non si misura più solo in base alle parole chiave incluse, ma a come strutturi le informazioni per renderle digeribili sia per gli esseri umani che per i crawler di Google. Il nostro <strong>strumento di analisi SEO in tempo reale</strong> ti offre il pieno controllo sulla densità delle parole chiave, sulla leggibilità dei paragrafi e sui fondamentali elementi tecnici HTML.',
    },
    { type: 'title', level: 3, text: 'Densità delle Parole Chiave e Rilevanza Semantica' },
    {
      type: 'paragraph',
      html: 'La <strong>densità delle parole chiave</strong> indica quanto spesso appare un termine rispetto al resto del testo. Una ripetizione eccessiva attiva i filtri di <em>keyword stuffing</em>, mentre una densità molto bassa può rendere difficile per i motori di ricerca identificare l\'argomento centrale del tuo articolo.',
    },
    {
      type: 'list',
      items: [
        '<strong>Analisi della rilevanza:</strong> Identifica se le parole più ripetute corrispondono al tuo intento di ricerca.',
        '<strong>Prevenzione delle penalità:</strong> Evita di ripetere eccessivamente termini che potrebbero apparire come spam.',
        '<strong>Ottimizzazione semantica:</strong> Trova l\'equilibrio tra termini tecnici e linguaggio naturale.',
      ],
    },
    { type: 'title', level: 3, text: 'Leggibilità in Stile Yoast' },
    {
      type: 'paragraph',
      html: 'La leggibilità è un fattore di ranking indiretto ma cruciale. Se gli utenti se ne vanno perché i paragrafi sono blocchi infiniti di testo, il tuo <em>Dwell Time</em> diminuisce. L\'analizzatore rileva frasi lunghe (oltre 20 parole), paragrafi oltre le 150 parole e controlla la presenza di sottotitoli.',
    },
    {
      type: 'tip',
      title: 'Tempo di lettura',
      html: 'La maggior parte degli utenti decide se leggere un articolo in meno di 10 secondi. Conoscere il tempo di lettura stimato (calcolato su una media di 200 parole al minuto) aiuta a ridurre il bounce rate impostando le aspettative del lettore.',
    },
    { type: 'title', level: 3, text: 'Analisi HTML Tecnica' },
    {
      type: 'paragraph',
      html: 'Incolla il tuo codice sorgente per verificare gli elementi chiave: unicità dell\'<strong>H1</strong>, presenza di sottotitoli H2/H3, immagini senza attributi <code>alt</code> ed esistenza del tag <code>title</code>. Tutta l\'elaborazione avviene nel tuo browser senza inviare dati a nessun server.',
    },
  ],
};
