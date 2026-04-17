import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { MorseBeaconUI } from '../ui';

const faqData = [
  {
    question: 'Qual è il segnale di soccorso SOS in codice Morse?',
    answer: "Il segnale è '... --- ...' (tre punti, tre linee, tre punti). Viene trasmesso continuamente senza spazi tra le lettere per indicare un'emergenza immediata.",
  },
  {
    question: 'Perché la torcia non funziona nel mio browser?',
    answer: 'L\'attivazione della torcia richiede che il browser abbia i permessi della fotocamera. Alcuni browser mobili o versioni desktop più vecchie non supportano questa API per motivi di privacy.',
  },
  {
    question: 'Il segnale SOS tramite schermo è visibile?',
    answer: 'Sì, in condizioni di oscurità totale, la luminosità massima di uno schermo bianco che lampeggia in Morse può essere vista da diverse centinaia di metri di distanza, rappresentando un\'alternativa utile se la torcia non funziona.',
  },
  {
    question: 'Cos\'è il codice Morse internazionale?',
    answer: 'È un sistema di comunicazione che utilizza sequenze di segnali brevi (punti) e lunghi (linee) per rappresentare lettere e numeri, standardizzato dall\'ITU per comunicazioni radio e segnali ottici.',
  },
];

const howToData = [
  {
    name: 'Scrivi il messaggio',
    text: "Inserisci il testo che vuoi trasmettere o usa il pulsante 'SOS' preconfigurato per le emergenze.",
  },
  {
    name: 'Configura la velocità',
    text: 'Regola i WPM (parole al minuto) per rendere il segnale più veloce o più lento a seconda della visibilità.',
  },
  {
    name: 'Scegli la fonte luminosa',
    text: 'Abilita il lampeggiamento a schermo intero o consenti l\'accesso alla torcia della fotocamera per un segnale più forte.',
  },
  {
    name: 'Avvia la trasmissione',
    text: 'Premi Trasmetti per fare in modo che il sistema converta il testo in impulsi visivi automatici seguendo lo standard Morse.',
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
  name: 'Come usare il segnalatore Morse per trasmettere messaggi',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Faro Morse: Trasmettitore Tattico SOS',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Trasforma il tuo dispositivo in una stazione di trasmissione Morse. Usa il flash e lo schermo come segnali luminosi di emergenza e comunicazione tattica.',
};

const ui: MorseBeaconUI = {
  labelMessage: 'Messaggio da Trasmettere',
  placeholder: 'Scrivi qui il tuo messaggio (SOS, CIAO, AIUTO)...',
  btnTransmit: 'Trasmetti',
  btnSosLoop: 'Loop SOS',
  btnStop: 'Stop',
  labelTorch: 'Flash/Torcia',
  statusStandby: 'STANDBY',
  statusTransmitting: 'IN TRASMISSIONE',
  statusStopping: 'ARRESTO...',
  statusWaiting: 'IN ATTESA',
  statusReady: 'HARDWARE PRONTO',
  statusNoTorch: 'NO TORCIA',
  statusNoPermission: 'NO PERMESSI',
  statusNotSupported: 'NON SUPPORTATO',
  statusReqHttps: 'REQ. HTTPS',
  statusSending: 'INVIO:',
};

export const content: ToolLocaleContent<MorseBeaconUI> = {
  slug: 'faro-morse-trasmettitore',
  title: 'Faro Morse: Trasmettitore Tattico SOS',
  description: 'Trasforma il tuo dispositivo in una stazione di trasmissione Morse. Usa il flash e lo schermo come segnali luminosi di emergenza e comunicazione tattica.',
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    { name: 'ITU-R M.1677-1 — Codice Morse Internazionale', url: 'https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.1677-1-200910-I!!PDF-E.pdf' },
    { name: 'W3C MediaCapture Image — Torch', url: 'https://w3c.github.io/mediacapture-image/#torch' },
    { name: 'Codice Morse — Wikipedia', url: 'https://it.wikipedia.org/wiki/Codice_Morse' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Il Linguaggio della Luce',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo strumento trasforma il tuo dispositivo in un segnalatore ottico capace di trasmettere messaggi visibili da chilometri di distanza. Utilizzando lo standard internazionale del Codice Morse, permette comunicazioni silenziose o di emergenza tramite impulsi luminosi (torcia e schermo).',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:history',
          title: 'Uno Standard Universale',
          description: 'Sviluppato nel 1830 da Samuel Morse, questo sistema binario di punti e linee ha rivoluzionato le telecomunicazioni. La sua semplicità lo rende estremamente robusto: può essere trasmesso via suono, radio, elettricità o luce, e rimane leggibile anche in presenza di gravi interferenze.',
          points: [],
        },
        {
          icon: 'mdi:flash-alert',
          title: 'Modalità Emergenza SOS',
          description: "Il pulsante 'Loop SOS' trasmette continuamente la sequenza ··· --- ···. Questo segnale è universalmente riconosciuto come una chiamata di soccorso e, grazie all'alto contrasto della torcia LED, è visibile da grande distanza anche alla luce del giorno in determinate condizioni.",
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Standard ITU-R M.1677-1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Questo strumento rispetta rigorosamente i <strong>tempi normativi</strong> del codice Morse internazionale come definito dall\'Unione Internazionale delle Telecomunicazioni.',
    },
    {
      type: 'list',
      items: [
        '1 punto = 1 unità di tempo',
        '1 linea = 3 unità di tempo',
        'Spazio tra gli elementi = 1 unità',
        'Spazio tra le lettere = 3 unità',
        'Spazio tra le parole = 7 unità',
      ],
    },
    {
      type: 'tip',
      title: 'Velocità standard',
      html: 'La velocità predefinita è <strong>15 WPM</strong> (parole al minuto), che corrisponde a un ritmo di trasmissione professionale. A 15 WPM, 1 unità = 80 ms.',
    },
  ],
};
