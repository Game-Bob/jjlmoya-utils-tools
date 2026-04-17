import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedReaderUI } from '../ui';

const faqData = [
  {
    question: 'Cos\'è la tecnologia RSVP?',
    answer: 'RSVP sta per Rapid Serial Visual Presentation. Le parole appaiono una alla volta nello stesso punto focale, eliminando la necessità di muovere gli occhi da sinistra a destra. Ciò consente di leggere a velocità molto più elevate senza sacrificare la comprensione, se ci si allena.',
  },
  {
    question: 'Leggere più velocemente riduce la comprensione?',
    answer: 'Dipende dall\'allenamento. A velocità moderate (350-500 WPM), molti utenti riferiscono una maggiore concentrazione eliminando la subvocalizzazione (la voce interiore). A velocità estreme (800+ WPM), la ritenzione può diminuire senza una pratica precedente.',
  },
  {
    question: 'Qual è la velocità di lettura media?',
    answer: 'Un adulto medio legge tra 200 e 250 parole al minuto. Con il lettore RSVP e un po\' di pratica, è comune raddoppiare tale velocità (400-500 WPM) mantenendo un\'eccellente comprensione.',
  },
  {
    question: 'L\'RSVP causa affaticamento degli occhi?',
    answer: 'Eliminando lo sforzo muscolare del movimento degli occhi, molti utenti scoprono di poter leggere con meno fatica rispetto ai metodi tradizionali. All\'inizio può sembrare intenso, ma il cervello si adatta rapidamente.',
  },
];

const howToData = [
  { name: 'Inserisci il tuo testo', text: 'Incolla l\'articolo, il libro o il documento che desideri leggere nell\'area di testo.' },
  { name: 'Configura le WPM', text: 'Regola le Parole Al Minuto (WPM). Se sei un principiante, inizia a 300 WPM e aumenta gradualmente.' },
  { name: 'Fissa lo sguardo', text: 'Mantieni gli occhi sulla lettera rossa (punto focale ORP). Non cercare di seguire le parole con il movimento degli occhi.' },
  { name: 'Inizia l\'allenamento', text: 'Premi il pulsante play e lascia scorrere le informazioni. Puoi mettere in pausa in qualsiasi momento.' },
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
  name: 'Come usare il lettore veloce RSVP',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RSVP Speed Reader',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Allena la tua velocità di lettura fino a 1000 parole al minuto con la tecnologia RSVP e l\'allineamento del punto di riconoscimento ottimale.',
};

const ui: SpeedReaderUI = {
  progressLabel: 'Progresso di lettura',
  speedLabel: 'Velocità',
  slowLabel: 'LENTO',
  fastLabel: 'DIO',
  speedHint: 'Inizia a 300 WPM e aumenta gradualmente per superare i tuoi limiti.',
  textLabel: 'Testo da elaborare',
  textPlaceholder: 'Incolla qui il tuo articolo, libro o testo...',
  clearLabel: 'PULISCI',
  words: 'parole',
  defaultText: 'Benvenuto in RSVP Speed Reader. Incolla il tuo testo qui sotto per iniziare. Questa tecnologia ti aiuterà a leggere fino a tre volte più velocemente eliminando i movimenti oculari non necessari.',
  play: 'Riproduci',
  pause: 'Pausa',
};

export const content: ToolLocaleContent<SpeedReaderUI> = {
  slug: 'lettore-veloce',
  title: 'RSVP Speed Reader',
  description: 'Allena la tua velocità di lettura fino a 1000 parole al minuto. Tecnologia RSVP con allineamento ottimale del punto focale. Raddoppia la tua produttività intellettuale.',
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Riferimenti',
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
    { type: 'title', level: 2, text: 'La Formula 1 della Lettura: Sblocca la tua Larghezza di Banda Mentale' },
    {
      type: 'paragraph',
      html: 'E se leggere fosse, biomeccanicamente, una perdita di tempo? Il tuo cervello è un supercomputer frenato da una connessione analogica: i tuoi occhi. Il <strong>Lettore RSVP</strong> rompe quel collo di bottiglia presentando le parole nel punto focale esatto in cui la tua mente le elabora più velocemente.',
    },
    {
      type: 'paragraph',
      html: 'La lettura tradizionale è un processo inefficiente. I tuoi occhi non funzionano come uno scanner; funzionano come una macchina fotografica in modalità raffica: stop, messa a fuoco, salto. Questo salto, chiamato <strong>saccade</strong>, significa che passi gran parte del tempo di lettura semplicemente muovendo gli occhi invece di assorbire informazioni.',
    },
    {
      type: 'tip',
      html: '"La lettura RSVP non è solo leggere più velocemente. È eliminare l\'attrito meccanico tra il testo e il tuo cervello."',
    },
    { type: 'title', level: 3, text: 'La Scienza dietro l\'Iniezione di Dati' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:bullseye-arrow',
          title: 'Punto di Riconoscimento Ottimale (ORP)',
          description: 'Ogni parola ha un punto in cui il tuo cervello la riconosce più velocemente. L\'algoritmo calcola quella lettera esatta (quella rossa) e la centra perfettamente. I tuoi occhi non si muovono di un solo millimetro.',
        },
        {
          icon: 'mdi:speedometer-slow',
          title: 'Silenzio Cognitivo',
          highlight: true,
          description: 'Sopra le 400-500 WPM, la tua voce interiore tace — non riesce a tenere il passo. Smetti di "sentire" ciò che leggi e inizi a "vedere" puri significati e concetti. Questo è lo stato di flow definitivo.',
        },
        {
          icon: 'mdi:brain',
          title: 'Neuroplasticità Visiva',
          description: 'Come andare in palestra: 300 WPM sembreranno veloci all\'inizio. Dopo una settimana, 500 WPM sembreranno una passeggiata. Stai ri-allenando i percorsi neurali che collegano la tua corteccia visiva all\'elaborazione del linguaggio.',
        },
      ],
    },
    { type: 'title', level: 3, text: 'Protocollo di Allenamento: Da Principiante a Neo' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Livello 1: Il Risveglio (da 200 a 300 WPM)',
          description: 'La tua velocità di lettura normale. Abituati all\'interfaccia. Rilassa il viso e lascia che le parole vengano a te. Non cercare di "afferrarle".',
          points: ['Ideale per principianti', 'Familiarizzazione ORP', 'Nessun affaticamento degli occhi'],
        },
        {
          title: 'Livello 2: Barriera del Suono (da 400 a 500 WPM)',
          highlight: true,
          description: 'Qui è dove accade la magia. Sentirai del disagio. Non rallentare quando perdi una parola — il tuo cervello imparerà a colmare le lacune dal contesto.',
          points: ['La subvocalizzazione scompare', 'Stato di flow mentale', 'Raddoppia la tua velocità di base'],
        },
        {
          title: 'Livello 3: Velocità di Fuga (600+ WPM)',
          description: 'Territorio avanzato. Ideale per ripassare materiale di studio, leggere notizie o consumare documentazione tecnica dove cerchi concetti chiave.',
          points: ['Romanzo medio in 2 ore', 'Massima efficienza di lettura', 'Richiede pratica precedente'],
        },
      ],
    },
  ],
};
