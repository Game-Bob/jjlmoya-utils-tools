import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { WhatsappLinkUI } from '../ui';

const faqData = [
  {
    question: 'Come genero un link WhatsApp?',
    answer: 'Per creare il tuo link, inserisci il tuo numero di cellulare includendo il prefisso internazionale. Ad esempio, per l\'Italia inserisci prima 39, seguito dal tuo numero locale. Puoi aggiungere un messaggio opzionale e lo strumento genererà il link wa.me finale pronto da copiare.',
  },
  {
    question: 'Posso aggiungere un lungo messaggio precompilato?',
    answer: 'Sì. Puoi allegare un messaggio che apparirà automaticamente nella casella di chat quando qualcuno clicca sul tuo link. Lo strumento utilizza la codifica URL per supportare spazi, accenti ed emoji senza interrompere l\'URL.',
  },
  {
    question: 'Come uso il codice QR generato?',
    answer: 'Una volta generato un link valido, appare il pulsante "Mostra QR". Il codice QR contiene l\'URL del tuo link. Fai clic con il pulsante destro del mouse su di esso e seleziona "Salva immagine come" per scaricare un file pulito ad alta risoluzione per biglietti da visita, poster o social media.',
  },
  {
    question: 'Dove finiscono i miei dati?',
    answer: 'Il generatore elabora tutto lato client, direttamente nel tuo browser. Il tuo numero di telefono e il messaggio precompilato non vengono mai inviati a nessun server né memorizzati in alcun database.',
  },
];

const howToData = [
  { name: 'Seleziona il prefisso', text: 'Scegli il tuo prefisso internazionale dal menu a discesa e inserisci il tuo numero di telefono senza il prefisso.' },
  { name: 'Aggiungi un messaggio opzionale', text: 'Scrivi un testo precompilato che apparirà quando qualcuno apre il link e tocca Invia.' },
  { name: 'Genera il link', text: 'Premi il pulsante verde per ottenere il tuo URL wa.me diretto pronto per la condivisione.' },
  { name: 'Condividi o stampa il QR', text: 'Copia il link, testa la chat o scarica il codice QR per biglietti e stampa.' },
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
  name: 'Come creare un link WhatsApp diretto',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Generatore di Link WhatsApp',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Crea link di chat WhatsApp diretti con messaggio precompilato e codice QR. Strumento gratuito, nessuna registrazione, 100% privato.',
};

const ui: WhatsappLinkUI = {
  phoneLabel: 'Numero di Telefono WhatsApp',
  phonePlaceholder: '333 00 00 000',
  messageLabel: 'Messaggio di apertura (opzionale)',
  messagePlaceholder: 'Ciao! Vorrei maggiori informazioni sul tuo servizio...',
  generateBtn: 'Genera Link',
  resultLabel: 'Link Diretto Generato',
  copyTitle: 'Copia negli appunti',
  copyDone: 'Copiato!',
  testBtn: 'Testa Chat',
  qrShow: 'Mostra QR',
  qrHide: 'Nascondi QR',
  errorPhone: 'Per favore, inserisci un numero di telefono valido.',
  defaultPrefix: '39',
};

export const content: ToolLocaleContent<WhatsappLinkUI> = {
  slug: 'generatore-link-whatsapp',
  title: 'Generatore di Link WhatsApp con QR',
  description: 'Crea link di chat WhatsApp diretti con messaggio precompilato e codice QR. Strumento gratuito, nessuna registrazione, 100% privato.',
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    { name: 'Come usare la funzione Clicca per chattare — Centro assistenza di WhatsApp', url: 'https://faq.whatsapp.com/591339899867293' },
    { name: 'API Clicca per chattare: parametri e formati — WhatsApp', url: 'https://faq.whatsapp.com/425559092497645' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Genera link diretti brevi per WhatsApp' },
    {
      type: 'paragraph',
      html: 'Hai bisogno che clienti o follower ti contattino su WhatsApp senza dover prima salvare il tuo numero? Il nostro <strong>creatore di link wa.me</strong> risolve questo problema generando un link che apre istantaneamente una chat diretta, senza passaggi preventivi.',
    },
    { type: 'title', level: 3, text: 'A cosa serve l\'abbreviatore WhatsApp wa.me?' },
    {
      type: 'paragraph',
      html: 'WhatsApp offre un\'API chiamata "Clicca per chattare". Utilizzando un URL speciale, qualsiasi utente può aprire una nuova chat con te senza dover prima aggiungerti come contatto, sia da mobile che da WhatsApp Web.',
    },
    {
      type: 'list',
      items: [
        '<strong>Più conversioni:</strong> Un pulsante "Contattaci su WhatsApp" nel tuo negozio riduce gli attriti e aumenta le vendite.',
        '<strong>Messaggio precompilato:</strong> L\'utente preme semplicemente "Invia". Esempio: "Ciao! Vengo da Instagram e voglio richiedere l\'offerta."',
        '<strong>Codice QR automatico:</strong> Scarica il QR per biglietti da visita, poster o post sui social media.',
      ],
    },
    { type: 'title', level: 3, text: 'Come funziona la generazione del link?' },
    {
      type: 'paragraph',
      html: 'Lo strumento concatena il prefisso internazionale e il numero di telefono pulito, quindi lo aggiunge all\'API ufficiale di WhatsApp insieme al parametro del messaggio convertito tramite <em>url-encoding</em>.',
    },
    {
      type: 'code',
      ariaLabel: 'Formato URL WhatsApp',
      code: 'https://wa.me/39XXXXXXXXX\nhttps://wa.me/39XXXXXXXXX?text=%C2%A1Ciao!%20Vorrei...',
    },
    { type: 'title', level: 3, text: 'Privacy garantita ed elaborazione locale' },
    {
      type: 'paragraph',
      html: 'Tutta la costruzione del link avviene nel tuo browser tramite JavaScript. Nessun server registra, salva o legge i numeri di telefono o i messaggi inseriti. La tua privacy è completamente protetta.',
    },
    {
      type: 'tip',
      title: 'Importanza del prefisso internazionale',
      html: 'Affinché WhatsApp instradi correttamente il messaggio, il prefisso internazionale è obbligatorio. Per l\'Italia è <strong>39</strong>, seguito dal numero di cellulare, senza spazi o il simbolo +. Il risultato finale sarebbe, ad esempio, <code>3933XXXXXXXX</code>.',
    },
  ],
};
