import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PasswordGeneratorUI } from '../ui';

const faqData = [
  {
    question: 'È sicuro usare un generatore di password online?',
    answer: "Sì, a patto che il generatore sia basato sul client. Il nostro strumento genera password localmente nel tuo browser utilizzando algoritmi crittograficamente sicuri. La tua password non viene mai inviata via internet né memorizzata su alcun server.",
  },
  {
    question: "Cosa rende una password 'a prova di hacker'?",
    answer: "La chiave è l'entropia (casualità). Un mix di lettere maiuscole, minuscole, numeri e simboli speciali combinato con una lunghezza minima di 12-16 caratteri rende un attacco brute-force praticamente impossibile con la tecnologia attuale.",
  },
  {
    question: 'Perché evitare parole comuni o date?',
    answer: 'Gli hacker utilizzano attacchi a dizionario che testano milioni di parole, nomi e combinazioni di date al secondo. Le password puramente casuali non seguono schemi linguistici, rendendole molto più sicure.',
  },
  {
    question: 'Dovrei memorizzare tutte le mie password?',
    answer: 'Non è raccomandato. L\'approccio ideale è utilizzare un gestore di password (come Bitwarden, 1Password o quello integrato nel browser) per memorizzare queste password lunghe e casuali, in modo da dover ricordare solo una password principale forte.',
  },
];

const howToData = [
  {
    name: 'Imposta la lunghezza',
    text: 'Regola lo slider per scegliere quanti caratteri avrà la tua password. Gli standard di sicurezza attuali raccomandano almeno 12.',
  },
  {
    name: 'Scegli la complessità',
    text: 'Seleziona le opzioni per maiuscole, numeri e simboli in base ai requisiti del sito in cui utilizzerai la password.',
  },
  {
    name: 'Genera la password',
    text: 'Clicca sul pulsante genera. Ogni clic crea una combinazione unica ad alta entropia basata su algoritmi crittografici.',
  },
  {
    name: 'Copia con un clic',
    text: 'Usa il pulsante copia per inviare la password direttamente nei tuoi appunti in modo sicuro.',
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
  name: 'Come usare il generatore di password sicure',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Generatore di Password Casuali Sicure',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Crea istantaneamente password forti e a prova di hacker. Strumento gratuito di cybersecurity per generare chiavi casuali e sicure.',
};

const ui: PasswordGeneratorUI = {
  generating: 'Generazione...',
  labelSecurity: 'Forza',
  labelLength: 'Lunghezza',
  strengthWeak: 'Debole',
  strengthFair: 'Discreta',
  strengthGood: 'Buona',
  strengthStrong: 'Forte',
  strengthUnbreakable: 'Inviolabile',
  optionUppercase: 'Maiuscole',
  optionLowercase: 'Minuscole',
  optionNumbers: 'Numeri',
  optionSymbols: 'Simboli',
  copyTitle: 'Copia',
  regenerateTitle: 'Genera Nuova',
};

export const content: ToolLocaleContent<PasswordGeneratorUI> = {
  slug: 'generatore-password',
  title: 'Generatore di Password Casuali Sicure',
  description: 'Crea istantaneamente password forti e a prova di hacker. Strumento gratuito di cybersecurity per generare chiavi casuali e sicure.',
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    { name: 'Web Cryptography API — MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API' },
    { name: 'NIST SP 800-63B: Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { name: 'Password — Wikipedia', url: 'https://it.wikipedia.org/wiki/Password' },
    { name: 'Have I Been Pwned — Controlla se la tua password è stata esposta', url: 'https://haveibeenpwned.com/Passwords' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'L\'Anatomia di una Password Inviolabile',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La tua password è l\'unica barriera tra i tuoi dati personali (banche, cartelle cliniche, foto) e un criminale informatico. Eppure l\'utente medio si affida ancora a schemi prevedibili come "123456" o nomi di animali domestici, che possono essere violati in <strong>meno di un secondo</strong>.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:alert-circle',
          title: 'Il Pericolo delle Rainbow Table',
          description: 'Gli hacker non indovinano la tua password un tentativo alla volta. Usano enormi database (Rainbow Table) contenenti milioni di hash precalcolati di password comuni. Se la tua password è nel dizionario o è una frase famosa, era già compromessa prima che iniziassi a usarla.',
          points: [],
        },
        {
          icon: 'mdi:flask',
          title: 'La Soluzione: Pura Entropia',
          description: 'L\'entropia misura il disordine o l\'imprevedibilità. Maggiore è l\'entropia (bit), più tempo serve a un computer per violarla. Questo strumento utilizza crypto.getRandomValues(), un\'API del browser che genera numeri casuali crittograficamente sicuri, a differenza di Math.random() che è prevedibile.',
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Principi di Base della Cybersecurity',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:ruler',
          title: 'Lunghezza sopra Complessità',
          description: 'Una password di 20 caratteri composta solo da minuscole è più sicura di una di 8 caratteri con simboli rari. Matematicamente, ogni carattere extra moltiplica la difficoltà in modo esponenziale.',
          points: [],
        },
        {
          icon: 'mdi:eye-off',
          title: 'Il Mito della Sostituzione',
          description: 'Sostituire la "a" con "@" o la "e" con "3" (Leetspeak) non inganna nessuno. I moderni dizionari di attacco includono già queste variazioni automaticamente. Evita di usare parole riconoscibili.',
          points: [],
        },
        {
          icon: 'mdi:key-chain',
          title: 'Sito Diverso, Chiave Diversa',
          description: 'Se usi la stessa password per l\'e-mail e un forum, e il forum viene hackerato, ora hanno accesso alla tua e-mail. Usa un gestore di password (come Bitwarden o 1Password) per ricordare password complesse per te.',
          points: [],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Privacy garantita',
      html: 'Tutta la generazione avviene <strong>nel tuo browser</strong>. Nessuna password viene trasmessa via internet o registrata su alcun server. Il codice sorgente è verificabile.',
    },
  ],
};
