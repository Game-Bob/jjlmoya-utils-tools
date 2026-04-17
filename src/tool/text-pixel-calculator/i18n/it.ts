import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TextPixelCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Come calcolo la larghezza in pixel di un testo online?',
    answer: 'Incolla il tuo testo nella casella di input, configura il carattere e la dimensione, e lo strumento utilizzerà automaticamente l\'API Canvas del browser per restituire la larghezza esatta in pixel.',
  },
  {
    question: 'Perché la larghezza in pixel varia tra i diversi tipi di carattere?',
    answer: "La maggior parte dei caratteri sono proporzionali, il che significa che ogni carattere ha una larghezza diversa. Ad esempio, una 'M' maiuscola è sempre più larga di una 'i' minuscola in un carattere sans-serif standard.",
  },
  {
    question: 'Misurare i caratteri è lo stesso che misurare i pixel?',
    answer: 'No. Misurare i caratteri ti dà la lunghezza della stringa, mentre misurare i pixel ti dà lo spazio visivo che occupa. Questo è fondamentale per garantire che il testo non trabocchi dal suo contenitore in un web design.',
  },
  {
    question: 'Posso usare qualsiasi carattere di Google Fonts?',
    answer: 'Sì, purché il carattere sia installato sul tuo sistema operativo o caricato sulla pagina corrente, lo strumento misurerà accuratamente le sue dimensioni.',
  },
  {
    question: 'È sicuro elaborare testi privati o snippet di codice?',
    answer: 'Sì. Il calcolatore funziona interamente in locale. Nessun dato viene inviato a server esterni, garantendo la completa privacy per i tuoi progetti.',
  },
];

const howToData = [
  { name: 'Inserisci il testo', text: 'Digita o incolla il testo che desideri misurare nell\'area di input.' },
  { name: 'Configura il carattere', text: 'Imposta la famiglia di caratteri, la dimensione in pixel, lo spessore e se è in corsivo.' },
  { name: 'Leggi il risultato', text: 'La larghezza in pixel e il conteggio dei caratteri si aggiornano in tempo reale.' },
  { name: 'Copia il valore', text: 'Fai clic su "Copia larghezza" per salvare il numero di pixel negli appunti.' },
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
  name: 'Come misurare la larghezza del testo in pixel',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calcolatore di larghezza pixel del testo',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Calcola accuratamente la larghezza in pixel di qualsiasi testo in base al carattere, alle dimensioni e allo stile.',
};

const ui: TextPixelCalculatorUI = {
  textLabel: 'Testo da misurare',
  textPlaceholder: 'Digita o incolla qui il testo che desideri misurare...',
  defaultText: 'Ciao Mondo',
  fontLabel: 'Famiglia di caratteri',
  sizeLabel: 'Dimensione (px)',
  weightLabel: 'Spessore',
  italicLabel: 'Corsivo',
  widthLabel: 'Larghezza (pixel)',
  charsLabel: 'Caratteri',
  previewLabel: 'Anteprima visiva',
  copyBtn: 'Copia larghezza',
  resetBtn: 'Reset',
  copyDone: 'Larghezza copiata',
};

export const content: ToolLocaleContent<TextPixelCalculatorUI> = {
  slug: 'calcolatore-larghezza-pixel-testo',
  title: 'Calcolatore di larghezza pixel del testo',
  description: 'Calcola accuratamente quanto è largo qualsiasi testo in pixel in base al carattere, alle dimensioni e allo stile. Strumento gratuito per designer e sviluppatori.',
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    { name: 'W3C: CSS Text Module Level 3', url: 'https://www.w3.org/TR/css-text-3/' },
    { name: 'Google Fonts: Understanding variable fonts', url: 'https://fonts.google.com/knowledge/glossary/variable_fonts' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Misura l\'esatta larghezza in pixel di qualsiasi testo' },
    {
      type: 'paragraph',
      html: 'Il tuo testo trabocca dal suo contenitore? Hai bisogno di sapere quanto spazio occupa un titolo prima di renderizzarlo? L\'<strong>API Canvas del browser</strong> ti consente di misurare l\'esatta larghezza di qualsiasi stringa di testo con precisione al pixel, senza renderizzarla nel DOM.',
    },
    { type: 'title', level: 3, text: 'Perché il conteggio dei caratteri non è sufficiente' },
    {
      type: 'paragraph',
      html: 'I caratteri moderni sono <strong>proporzionali</strong>: ogni glifo ha una larghezza diversa. Una "W" può occupare tre volte più spazio di una "i". Il numero di caratteri non dice nulla sullo spazio visivo effettivo occupato dal testo.',
    },
    {
      type: 'list',
      items: [
        { title: 'Web design', text: 'Previeni l\'overflow in pulsanti, etichette e celle di tabelle.' },
        { title: 'SEO', text: 'I motori di ricerca troncano i titoli in base ai pixel, non ai caratteri.' },
        { title: 'Canvas e PDF', text: 'Calcola la posizione esatta prima di disegnare il testo a livello di programmazione.' },
        { title: 'Tooltip e fumetti', text: 'Dimensiona dinamicamente i contenitori in base al testo interno.' },
      ],
    },
    { type: 'title', level: 3, text: 'Come funziona la misurazione con Canvas' },
    {
      type: 'paragraph',
      html: 'Il metodo <code>ctx.measureText()</code> dell\'API Canvas restituisce un oggetto <code>TextMetrics</code> con una proprietà <code>width</code> che riflette la larghezza in pixel CSS utilizzando il carattere attualmente attivo. Questo strumento configura il contesto con carattere, dimensione, spessore e stile prima della misurazione.',
    },
    {
      type: 'code',
      ariaLabel: 'Esempio Canvas measureText',
      code: "const ctx = document.createElement('canvas').getContext('2d');\nctx.font = '700 16px Inter, system-ui, sans-serif';\nconst width = ctx.measureText('Ciao Mondo').width; // es. 74.5",
    },
    { type: 'title', level: 3, text: 'Privacy ed elaborazione locale' },
    {
      type: 'paragraph',
      html: 'Tutti i calcoli avvengono nel tuo browser. Nessun testo, snippet di codice o dato privato lascia il tuo dispositivo.',
    },
    {
      type: 'tip',
      title: 'Caratteri Google Fonts',
      html: 'Per misurare accuratamente un carattere di Google Fonts, assicurati prima che sia caricato sulla pagina o installato sul tuo sistema. In caso contrario, il browser utilizzerà un carattere sostitutivo e il risultato differirà.',
    },
  ],
};
