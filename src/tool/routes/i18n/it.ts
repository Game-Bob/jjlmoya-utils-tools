import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RoutesUI } from '../ui';

const faqData = [
  {
    question: 'Quale algoritmo di ottimizzazione utilizza?',
    answer: 'Utilizza una risoluzione avanzata del Problema del Commesso Viaggiatore (TSP). L\'algoritmo analizza tutte le tappe e determina l\'ordine sequenziale che minimizza la distanza totale percorsa, risparmiando tempo e carburante.',
  },
  {
    question: 'È sicuro condividere la mia posizione?',
    answer: 'Sì. Lo strumento elabora i dati geografici localmente nel tuo browser. Non memorizziamo le tue rotte, tappe o cronologia delle posizioni sui nostri server.',
  },
  {
    question: 'Quante tappe posso ottimizzare contemporaneamente?',
    answer: 'La nostra versione gratuita ti consente di ottimizzare fino a 10 tappe istantaneamente. Per rotte professionali più ampie, il sistema è ottimizzato per mantenere alte prestazioni senza bloccare il browser.',
  },
  {
    question: 'Posso usare la rotta direttamente in Google Maps?',
    answer: 'Assolutamente sì! Una volta che la rotta è ottimizzata, lo strumento genera un link di navigazione compatibile con Google Maps in modo da poter iniziare il viaggio direttamente dal tuo telefono.',
  },
];

const howToData = [
  {
    name: 'Aggiungi punto di partenza',
    text: 'Digita l\'indirizzo di partenza o clicca sulla mappa per impostare l\'inizio della tua rotta.',
  },
  {
    name: 'Inserisci le tappe di destinazione',
    text: 'Aggiungi tutte le località che devi visitare. L\'ordine non conta, poiché il sistema le riordinerà per te.',
  },
  {
    name: 'Ottimizza la sequenza',
    text: 'Clicca sul pulsante ottimizza. L\'algoritmo calcolerà in pochi secondi l\'ordine più efficiente per coprire tutte le tappe.',
  },
  {
    name: 'Apri nel navigatore',
    text: 'Usa il pulsante di navigazione per portare la rotta ottimizzata sulla tua applicazione di mappe preferita.',
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
  name: 'Come ottimizzare una rotta con più tappe',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calcolatore di Rotte Ottimali',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Ottimizza le tue rotte di consegna o di viaggio gratuitamente. Riordina automaticamente le tappe per trovare il percorso più breve ed efficiente.',
};

const ui: RoutesUI = {
  titleSidebar: 'Punti della Rotta',
  descriptionSidebar: 'Clicca sulla mappa per aggiungere tappe. Il primo punto è la partenza.',
  emptyState: 'Nessun punto aggiunto',
  btnOptimize: 'Calcola Rotta Ottimale',
  btnCalculating: 'Calcolo in corso...',
  btnClear: 'Cancella Tutto',
  labelDistance: 'Distanza Totale Stimata',
  labelDeleteAria: 'Elimina',
  labelLoadingAddress: 'Caricamento indirizzo...',
  labelPoint: 'Punto',
  errorMinPoints: 'Sono necessari almeno due punti per calcolare una rotta.',
  errorCalculate: 'Errore nel calcolo della rotta.',
  errorAddress: 'Errore nel recupero dell\'indirizzo',
  errorAddressName: 'Punto sconosciuto',
};

export const content: ToolLocaleContent<RoutesUI> = {
  slug: 'rotte-ottimali',
  title: 'Calcolatore di Rotte Ottimali Gratuito',
  description: 'Ottimizza le tue rotte di consegna o di viaggio gratuitamente. Il nostro strumento riordina automaticamente le tue tappe per trovare il percorso più breve ed efficiente.',
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Tecnologie e Fonti',
  bibliography: [
    { name: 'Leaflet — Libreria di mappe interattive open-source', url: 'https://leafletjs.com/' },
    { name: 'OpenStreetMap — Dati cartografici aperti', url: 'https://www.openstreetmap.org/' },
    { name: 'CARTO — Tile delle mappe Voyager', url: 'https://carto.com/basemaps/' },
    { name: 'Nominatim — Servizio di geocodifica inversa (OpenStreetMap)', url: 'https://nominatim.org/' },
    { name: 'OSRM — Open Source Routing Machine (ottimizzazione rotte)', url: 'http://project-osrm.org/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Ottimizzatore Intelligente di Rotte: TSP per Consegne e Viaggi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'<strong>ottimizzatore di rotte online</strong> è uno strumento gratuito che risolve il classico <em>Problema del Commesso Viaggiatore (TSP)</em>. Aggiungi tutte le tue tappe in qualsiasi ordine e l\'algoritmo calcolerà automaticamente la sequenza più efficiente per minimizzare la distanza totale percorsa.',
    },
    {
      type: 'title',
      text: 'Come funziona l\'algoritmo di ottimizzazione delle rotte?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lo strumento utilizza l\'API <strong>OSRM (Open Source Routing Machine)</strong>, un motore di routing ad alte prestazioni basato sui dati di OpenStreetMap. Il processo è il seguente: prima calcola la rotta circolare ottimale tra tutti i punti (algoritmo TSP), poi determina il miglior punto di taglio per convertirla in un viaggio lineare a senso unico, e infine disegna la rotta sulla mappa con la distanza totale stimata.',
    },
    {
      type: 'title',
      text: 'Casi d\'uso: consegne, rappresentanti e viaggi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'ottimizzatore di rotte è ideale per <strong>corrieri indipendenti</strong> che devono organizzare più consegne giornaliere, <strong>rappresentanti di vendita</strong> che visitano i clienti in una zona, o <strong>viaggiatori</strong> che desiderano visitare diverse città o punti di interesse nell\'ordine più efficiente. Lo strumento elabora tutte le informazioni nel browser, senza condividere i tuoi dati con alcun server proprietario.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { value: 'TSP', label: 'Algoritmo', icon: 'mdi:chart-line' },
        { value: 'OSRM', label: 'Motore di routing', icon: 'mdi:map-marker-path' },
        { value: 'Local-First', label: 'Privacy', icon: 'mdi:lock-check' },
        { value: 'Gratis', label: 'Costo', icon: 'mdi:currency-eur-off' },
      ],
    },
    {
      type: 'title',
      text: 'Privacy ed elaborazione locale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tutta la logica dello strumento viene eseguita direttamente nel tuo browser. Le coordinate delle tue tappe vengono inviate solo alle API pubbliche di OSRM e Nominatim per calcolare le rotte e ottenere i nomi degli indirizzi, ma <strong>non vengono memorizzate su alcun server proprietario</strong>. Puoi usare lo strumento in sicurezza per pianificare rotte di lavoro con informazioni sensibili.',
    },
    {
      type: 'tip',
      title: 'Consiglio d\'uso',
      html: '<strong>Per risultati ottimali</strong>, aggiungi le tappe cliccando direttamente sulla mappa invece di cercare gli indirizzi. I segnalini sono trascinabili, quindi puoi regolare la posizione esatta di ogni punto dopo averlo posizionato.',
    },
  ],
};
