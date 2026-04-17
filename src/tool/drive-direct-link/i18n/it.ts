import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DriveDirectLinkUI } from '../ui';

const faqData = [
  {
    question: 'Come uso il convertitore di download di Google Drive?',
    answer: 'Copia il link "Condividi" completo di qualsiasi file memorizzato su Google Drive (deve avere permessi pubblici). Incollalo nella casella di testo dello strumento e fai clic su "Genera link diretto". Apparirà un nuovo URL che avvierà il download senza aprire il visualizzatore di Google.',
  },
  {
    question: 'Posso generare un link di download diretto per un file privato?',
    answer: 'Se il file è privato o l\'accesso è limitato, Google ti chiederà di accedere con un account autorizzato. Per download puliti senza registrazione, i permessi del file devono essere impostati su "Chiunque abbia il link può visualizzare".',
  },
  {
    question: 'È sicuro convertire i miei link di Drive qui?',
    answer: 'Sì. La conversione avviene al 100% nel tuo browser ed è completamente anonima. Lo strumento non memorizza il tuo link né effettua chiamate al server; analizza solo la struttura dell\'URL lato client per generare la versione di download.',
  },
  {
    question: 'Cosa succede se il mio file di Drive è molto grande?',
    answer: 'Per i file più grandi di circa 100 MB, Google Drive non consente un download diretto istantaneo. Visualizza invece una pagina di avviso sulle dimensioni del file e il bypass della scansione antivirus. Questa è una politica fissa dei server di Google che nessuno strumento esterno può aggirare.',
  },
];

const howToData = [
  { name: 'Copia il link di condivisione', text: 'In Google Drive, fai clic con il pulsante destro del mouse sul file e seleziona "Ottieni link". Assicurati che i permessi consentano l\'accesso a chiunque abbia il link.' },
  { name: 'Incolla il link nel generatore', text: 'Inserisci l\'URL completo di Drive nel campo di testo dello strumento e fai clic sul pulsante "Genera link diretto".' },
  { name: 'Copia e usa il link generato', text: 'Copia il nuovo link di download diretto e usalo in email, siti web, newsletter o ovunque tu abbia bisogno che il file venga scaricato immediatamente al clic.' },
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
  name: 'Come generare un link di download diretto per Google Drive',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Generatore di Link di Download Diretto Google Drive',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Converti qualsiasi link di condivisione di Google Drive in un link di download diretto con un clic, saltando la pagina di anteprima del file. Strumento gratuito.',
};

const ui: DriveDirectLinkUI = {
  inputLabel: 'Incolla qui il tuo link di Google Drive:',
  inputPlaceholder: 'https://drive.google.com/file/d/...',
  generateBtn: 'Genera Link Diretto',
  resultLabel: 'Link di Download Diretto:',
  copyTitle: 'Copia negli appunti',
  copyDone: 'Copiato',
  testBtn: 'Testa Download',
  errorMsg: 'Il link inserito non sembra essere un link valido di Google Drive.',
};

export const content: ToolLocaleContent<DriveDirectLinkUI> = {
  slug: 'link-download-diretto-google-drive',
  title: 'Generatore di Link di Download Diretto Google Drive',
  description: 'Converti facilmente qualsiasi link di condivisione di Google Drive in un link di download diretto con un clic, saltando l\'anteprima del file. Strumento gratuito.',
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    { name: 'Scaricare file da Google Drive (Google Workspace)', url: 'https://support.google.com/drive/answer/2423534' },
    { name: 'Google Drive API: Scaricare file', url: 'https://developers.google.com/drive/api/guides/manage-downloads' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Converti i link di condivisione di Google Drive in link di download diretto' },
    {
      type: 'paragraph',
      html: 'Se condividi spesso file tramite Google Drive, sai quanto possa essere fastidiosa la pagina di anteprima. Quando i tuoi utenti cliccano sul tuo link, atterrano su una schermata intermedia che li costringe a cercare il pulsante di download. Il nostro <strong>generatore di link di download diretto Google Drive</strong> risolve questo problema convertendo qualsiasi link di condivisione in uno che avvia automaticamente il download.',
    },
    { type: 'title', level: 3, text: 'Perché usare un link di download diretto?' },
    {
      type: 'paragraph',
      html: 'Il vantaggio principale è un\'esperienza utente molto migliore. Quando si condivide un PDF, un\'immagine o un programma di installazione software, gli utenti si aspettano che il clic sul link avvii immediatamente il download:',
    },
    {
      type: 'list',
      items: [
        '<strong>Risparmio di tempo:</strong> Download con un clic senza passaggi extra.',
        '<strong>Aspetto professionale:</strong> Ideale per pulsanti di download su siti web, newsletter o email ai clienti.',
        '<strong>Meno abbandoni:</strong> Gli utenti meno esperti di tecnologia possono essere confusi dall\'anteprima di Drive e non sapere come scaricare il file.',
        '<strong>Pronto per l\'HTML:</strong> Perfetto per gli attributi <code>href</code> o <code>src</code> nelle tue pagine web.',
      ],
    },
    { type: 'title', level: 3, text: 'Come funziona il generatore di link diretti?' },
    {
      type: 'paragraph',
      html: 'Tutto avviene al 100% nel tuo browser. I link di condivisione di Google Drive contengono un ID file univoco. Lo strumento estrae tale ID e crea un nuovo URL utilizzando il parametro di esportazione nativo di Google: <code>https://drive.google.com/uc?export=download&amp;id=IL_TUO_ID</code>.',
    },
    {
      type: 'tip',
      title: 'Avviso per i file di grandi dimensioni',
      html: 'Per i file superiori a circa 100 MB, Google Drive visualizza una pagina di avviso della scansione antivirus prima dell\'inizio del download. Questa è una politica fissa dei server di Google che nessuno strumento esterno può aggirare.',
    },
    { type: 'title', level: 3, text: 'Privacy e sicurezza garantite' },
    {
      type: 'paragraph',
      html: 'Questo strumento rispetta pienamente la tua privacy. L\'intera trasformazione del link viene eseguita tramite JavaScript lato client sul tuo dispositivo. Nessun link, ID file o informazione personale viene mai inviato a server esterni.',
    },
  ],
};
