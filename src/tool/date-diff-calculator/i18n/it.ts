import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DateDiffCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Questo calcolatore di differenza tra date è gratuito?',
    answer: 'Sì, è uno strumento gratuito al 100% accessibile da qualsiasi browser senza necessità di registrazione o download.',
  },
  {
    question: 'Come vengono gestiti gli anni bisestili nel tempo totale?',
    answer: 'Lo strumento utilizza la cronologia standard di JavaScript (UTC), che gestisce automaticamente gli anni bisestili e il numero variabile di giorni in ogni mese per fornire un risultato esatto.',
  },
  {
    question: 'Posso calcolare anche la differenza tra ore e minuti?',
    answer: 'Sì. I campi di input consentono di selezionare l\'ora esatta. Il risultato fornisce una ripartizione in giorni, ore, minuti e secondi, nonché i totali accumulati.',
  },
  {
    question: 'Le mie date vengono inviate a qualche server?',
    answer: 'No. Tutte le elaborazioni vengono eseguite localmente nel browser. Non memorizziamo né riceviamo alcuna informazione sulle date calcolate.',
  },
];

const howToData = [
  { name: 'Seleziona la data di inizio', text: "Inserisci la data e l'ora di inizio, oppure fai clic su 'Oggi' per impostarla istantaneamente." },
  { name: 'Seleziona la data di fine', text: "Definisci il momento di arrivo. Usa 'Adesso' per misurare il tempo trascorso fino a questo preciso istante." },
  { name: 'Leggi i risultati', text: 'Controlla la ripartizione in giorni, ore, minuti e secondi, oltre ai totali accumulati per settimane e ore.' },
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
  name: 'Come calcolare la differenza tra due date',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calcolatore di Differenza tra Date',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Calcola esattamente quanto tempo è passato tra due date o quanto manca a un evento. Risultati in giorni, ore e minuti.',
};

const ui: DateDiffCalculatorUI = {
  startLabel: 'Data di Inizio',
  endLabel: 'Data di Fine',
  nowBtn: 'Adesso',
  todayBtn: 'Oggi',
  tomorrowBtn: 'Domani',
  daysLabel: 'Giorni',
  hoursLabel: 'Ore',
  minsLabel: 'Min',
  secsLabel: 'Sec',
  weeksLabel: 'Settimane Totali',
  totalHoursLabel: 'Ore Totali',
  totalMinsLabel: 'Minuti Totali',
  elapsed: 'Tempo Trascorso',
  past: 'Tempo nel Passato',
  invalidDates: 'Date non valide',
};

export const content: ToolLocaleContent<DateDiffCalculatorUI> = {
  slug: 'calcolatrice-differenza-date',
  title: 'Calcolatore di Differenza tra Date',
  description: 'Calcola esattamente quanto tempo è passato tra due date o quanto manca a un evento. Strumento gratuito con risultati in giorni, ore e minuti.',
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    { name: 'Time and Date: World Clock and Time Zone Converter', url: 'https://www.timeanddate.com/worldclock/' },
    { name: 'Wikipedia: History of the Gregorian Calendar', url: 'https://it.wikipedia.org/wiki/Calendario_gregoriano' },
    { name: 'Wikipedia: Eisenhower Matrix and Time Management', url: 'https://it.wikipedia.org/wiki/Gestione_del_tempo#Metodo_di_Eisenhower' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calcolatore di differenza tra date con giorni, ore e minuti' },
    {
      type: 'paragraph',
      html: 'Calcolare la <strong>differenza tra due date</strong> è uno dei compiti più comuni e sottovalutati sia nella vita quotidiana che in contesti professionali. Che si tratti di pianificare il lancio di un prodotto, calcolare l\'età esatta di una persona o misurare il tempo rimanente a un evento speciale, disporre di uno strumento preciso è essenziale per un\'efficiente gestione del tempo.',
    },
    { type: 'title', level: 3, text: 'A cosa serve il calcolatore di differenza tra date?' },
    {
      type: 'paragraph',
      html: 'L\'utilità di questo strumento si estende a molteplici settori. Nel lavoro, i project manager lo usano per definire le scadenze di consegna e tracciare i progressi dei traguardi. In contesti legali e amministrativi, è fondamentale per calcolare i termini di prescrizione o la durata dei contratti.',
    },
    {
      type: 'list',
      items: [
        '<strong>Pianificazione di eventi:</strong> Scopri quante settimane e giorni mancano a un matrimonio, una conferenza o un viaggio.',
        '<strong>Gestione dei progetti:</strong> Calcola il tempo trascorso dall\'inizio di una fase fino al suo completamento.',
        '<strong>Finanza:</strong> Determina il numero di giorni per il calcolo degli interessi o le scadenze delle fatture.',
        '<strong>Risorse Umane:</strong> Misura l\'anzianità dei dipendenti o i giorni di vacanza accumulati.',
        '<strong>Salute:</strong> Monitora i progressi di un trattamento o il tempo di recupero dopo un intervento.',
      ],
    },
    { type: 'title', level: 3, text: 'Percezione del tempo e precisione digitale' },
    {
      type: 'paragraph',
      html: 'Spesso tendiamo ad arrotondare il tempo. Diciamo "circa un mese" quando mancano effettivamente 27 giorni e 14 ore. Utilizzando un calcolatore digitale, eliminiamo la soggettività e otteniamo dati puliti per un processo decisionale informato.',
    },
    { type: 'title', level: 3, text: 'Giorni naturali contro giorni lavorativi' },
    {
      type: 'paragraph',
      html: 'Questo strumento calcola i <strong>giorni di calendario</strong>, inclusi i fine settimana e i giorni festivi. Per i calcoli astronomici e civili generali, il tempo viene misurato in modo continuo. Se devi stimare i tempi di un progetto, ricorda che i giorni mostrati rappresentano l\'intero calendario reale.',
    },
    { type: 'title', level: 3, text: 'L\'impatto del tempo sulla produttività' },
    {
      type: 'paragraph',
      html: 'La Legge di Parkinson afferma che il lavoro si espande fino a occupare tutto il tempo disponibile per il suo completamento. Visualizzando esattamente quante ore e minuti mancano a una scadenza, i team tendono a ottimizzare i propri sforzi e a mantenere la concentrazione.',
    },
    {
      type: 'tip',
      title: 'Date future e passate',
      html: 'Puoi usare il calcolatore sia per date future che passate. Se la data di fine è precedente alla data di inizio, il sistema rileva automaticamente che si tratta di tempo trascorso nel passato, mantenendo la precisione nei valori di differenza assoluta.',
    },
  ],
};
