import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EmailListCleanerUI } from '../ui';

const faqData = [
  {
    question: 'Cosa fa esattamente questo pulitore di liste email?',
    answer: 'Lo strumento analizza la tua lista email, rimuove i duplicati, elimina gli spazi vuoti non necessari, convalida il formato di base e normalizza tutti gli indirizzi in minuscolo per garantire un database pulito.',
  },
  {
    question: 'C\'è un limite al numero di email?',
    answer: 'Non c\'è un limite rigido di record. Puoi elaborare migliaia di email istantaneamente in un unico passaggio. L\'unico vincolo è la memoria del tuo browser se la lista è estremamente grande.',
  },
  {
    question: 'È sicuro incollare le mie email qui?',
    answer: 'Assolutamente sì. Tutte le elaborazioni vengono eseguite localmente nel tuo browser tramite JavaScript. I tuoi dati non vengono mai inviati ai nostri server né memorizzati in database esterni.',
  },
  {
    question: 'In che modo questo migliora la deliverability della mia campagna?',
    answer: 'Rimuovendo gli indirizzi inesistenti o malformati riduci il tasso di rimbalzo (bounce rate), il che migliora la reputazione del tuo dominio presso provider come Gmail, Outlook e Yahoo.',
  },
];

const howToData = [
  { name: 'Incolla le tue email', text: 'Copia la tua lista email e incollala nella casella di testo. Possono essere separate da righe, virgole o spazi.' },
  { name: 'Pulisci la lista', text: 'Fai clic sul pulsante "Pulisci Lista" per avviare il processo di convalida e rimozione dei duplicati.' },
  { name: 'Rivedi i risultati', text: 'Controlla le statistiche che mostrano le email originali rispetto a quelle finali e rivedi la lista pulita nel pannello inferiore.' },
  { name: 'Copia o scarica', text: 'Copia il risultato direttamente negli appunti o scaricalo come file .txt pronto all\'uso.' },
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
  name: 'Come pulire una lista email',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pulitore di Liste Email',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Rimuovi i duplicati, correggi gli spazi vuoti e convalida i formati nella tua lista email. Strumento gratuito senza limite di record.',
};

const ui: EmailListCleanerUI = {
  inputLabel: 'Lista email',
  inputPlaceholder: 'Incolla qui la tua lista email (separata da righe, virgole o spazi)...',
  cleanBtn: 'Pulisci Lista',
  clearBtn: 'Cancella Tutto',
  statsOriginal: 'Originali',
  statsRemoved: 'Rimosse',
  statsFinal: 'Pulite',
  resultLabel: 'Risultato Pulito',
  copyBtn: 'Copia Lista',
  copyDone: 'Copiato!',
  downloadBtn: 'Scarica .txt',
  registered: 'registrate',
  downloadFilename: 'email-pulite',
};

export const content: ToolLocaleContent<EmailListCleanerUI> = {
  slug: 'pulitore-liste-email',
  title: 'Pulitore di Liste Email',
  description: 'Pulisci le liste email gratuitamente. Rimuovi i duplicati, correggi gli spazi e convalida i formati in pochi secondi. Risparmia sui costi e migliora la tua deliverability.',
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    { name: 'RFC 5322: Internet Message Format', url: 'https://datatracker.ietf.org/doc/html/rfc5322' },
    { name: 'Google: Linee guida per i mittenti di email', url: 'https://support.google.com/a/answer/81126' },
    { name: 'Wikipedia: Spam (posta elettronica)', url: 'https://it.wikipedia.org/wiki/Spam' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Perché usare un pulitore di liste email è essenziale?' },
    {
      type: 'paragraph',
      html: 'Nel mondo del marketing digitale, la qualità del tuo database conta molto più della sua dimensione. Avere una lista di 50.000 email non vale nulla se la metà sono indirizzi inesistenti, contengono refusi o sono duplicati. È qui che un <strong>pulitore di liste email</strong> diventa indispensabile.',
    },
    { type: 'title', level: 3, text: 'I rischi di una lista email sporca' },
    {
      type: 'paragraph',
      html: 'Mantenere un database non pulito può avere gravi conseguenze. L\'invio di email a indirizzi inesistenti genera un "hard bounce". Se questa percentuale supera il 2-3%, i filtri spam inizieranno a esaminare attentamente il tuo dominio e potresti finire in una blacklist internazionale.',
    },
    {
      type: 'tip',
      title: 'Consiglio dell\'esperto',
      html: 'Non comprare mai liste email. È il modo più veloce per rovinare la reputazione del tuo dominio. Costruisci la tua lista in modo organico e puliscila ogni 3-6 mesi.',
    },
    { type: 'title', level: 3, text: 'In che modo il nostro strumento ottimizza il tuo database' },
    {
      type: 'paragraph',
      html: 'La nostra utility gratuita esegue una pulizia accurata e veloce dei tuoi database senza limiti di record. Esegue istantaneamente diversi compiti critici di convalida:',
    },
    {
      type: 'list',
      items: [
        '<strong>Rimozione duplicati:</strong> Lo stesso utente non riceverà la stessa email due volte.',
        '<strong>Correzione spazi vuoti:</strong> Eliminiamo gli spazi accidentali all\'inizio o alla fine che renderebbero non valido l\'invio.',
        '<strong>Convalida formato:</strong> Filtriamo le voci che non hanno una struttura email valida.',
        '<strong>Normalizzazione:</strong> Tutto viene convertito in minuscolo per evitare record ridondanti.',
      ],
    },
    { type: 'title', level: 3, text: 'Qual è il momento giusto per pulire la tua lista?' },
    {
      type: 'list',
      items: [
        'Prima di importare i contatti in un nuovo CRM o piattaforma di invio (Mailchimp, SendGrid, ecc.).',
        'Se noti che il tuo tasso di apertura è sceso al di sotto della media abituale.',
        'Dopo un evento o una fiera in cui hai raccolto i dati manualmente.',
        'Come manutenzione preventiva ogni trimestre per mantenere la salute del dominio.',
      ],
    },
    { type: 'title', level: 3, text: 'Impatto sul ritorno sull\'investimento' },
    {
      type: 'paragraph',
      html: 'L\'email marketing rimane uno dei canali con il più alto ROI, ma solo se i messaggi raggiungono la posta in arrivo. Utilizzando un <strong>pulitore di email</strong>, stai ottimizzando il tuo funnel di vendita dalla fonte e smettendo di pagare le piattaforme per contatti che non vedranno mai i tuoi messaggi.',
    },
    {
      type: 'tip',
      title: 'Implementa il double opt in',
      html: 'Il modo migliore per evitare email false è richiedere agli utenti di confermare la loro iscrizione facendo clic su un link inviato alla loro casella di posta. Questo garantisce che l\'email esista e che l\'utente vi abbia accesso.',
    },
  ],
};
