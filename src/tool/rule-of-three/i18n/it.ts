import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RuleOfThreeUI } from '../ui';

const faqData = [
  {
    question: "Cos'è la regola del tre semplice diretta?",
    answer: "È un metodo matematico per risolvere problemi di proporzionalità tra tre valori noti e un'incognita. Viene chiamata 'diretta' perché all'aumentare di una quantità, l'altra aumenta nella stessa proporzione.",
  },
  {
    question: 'Quando dovrei usare la regola del tre inversa?',
    answer: "Si usa quando le quantità sono inversamente proporzionali (se una aumenta, l'altra diminuisce). Ad esempio: se 2 pittori impiegano 5 ore, 4 pittori impiegheranno meno tempo. Il nostro calcolatore attuale si concentra sulla proporzionalità diretta.",
  },
  {
    question: 'È accurato per calcoli professionali?',
    answer: 'Sì. Il nostro calcolatore utilizza un\'elevata precisione in virgola mobile, ideale per regolazioni di dosaggi, scale di progettazione grafica, budget commerciali e conversioni di ricette.',
  },
  {
    question: 'Come si calcola manualmente?',
    answer: 'La formula è: (Valore B * Valore C) / Valore A = X. Ovvero, si moltiplicano i valori in diagonale e si divide il risultato per il valore rimanente.',
  },
];

const howToData = [
  {
    name: 'Identifica la relazione di base',
    text: 'Inserisci i due valori noti che formano la proporzione iniziale (ad es. 100km equivalgono a 8 litri).',
  },
  {
    name: 'Inserisci il terzo valore',
    text: 'Scrivi il nuovo valore di cui vuoi trovare l\'equivalente (ad es. se devo percorrere 250km...).',
  },
  {
    name: 'Ottieni il risultato',
    text: 'Il sistema calcolerà automaticamente l\'incognita (X) in tempo reale senza premere alcun pulsante.',
  },
  {
    name: 'Copia o resetta',
    text: 'Puoi copiare il risultato direttamente negli appunti o cancellare i campi per eseguire un nuovo calcolo.',
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
  name: 'Come usare il calcolatore della regola del tre',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calcolatore Regola del Tre Semplice',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Risolvi proporzioni matematiche all\'istante. Lo strumento definitivo per calcolare quantità, ricette, sconti e conversioni.',
};

const ui: RuleOfThreeUI = {
  labelA: 'Se ho...',
  labelB: 'Equivale a...',
  labelC: 'E ora ho...',
  labelX: 'Risultato (X)',
  hintA: 'Quantità iniziale',
  hintB: 'Valore noto',
  hintC: 'Nuova quantità',
  hintX: 'Valore calcolato',
  separatorIsTo: 'sta a',
  separatorWillBe: 'sarà',
  copyTitle: 'Copia risultato',
};

export const content: ToolLocaleContent<RuleOfThreeUI> = {
  slug: 'regola-del-tre',
  title: 'Calcolatore Regola del Tre Semplice',
  description: 'Risolvi proporzioni matematiche all\'istante. Lo strumento definitivo per calcolare quantità, ricette, sconti e conversioni.',
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    { name: 'Proporzionalità (matematica) — Wikipedia', url: 'https://it.wikipedia.org/wiki/Proporzionalit%C3%A0_(matematica)' },
    { name: 'Rapporti e proporzioni — Khan Academy', url: 'https://it.khanacademy.org/math/arithmetic-home/arith-review-ratios-rates' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'A cosa serve la regola del tre?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La regola del tre semplice diretta è lo "coltellino svizzero" della matematica. Risolve problemi in cui sono noti tre dati e ne cerchiamo il quarto. Se conosci la relazione tra <strong>A e B</strong>, e hai un nuovo valore <strong>C</strong>, il calcolatore trova <strong>X</strong> istantaneamente.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:chef-hat',
          title: 'Cucina e Ricette',
          description: 'Se la ricetta richiede 500g di farina per 4 persone, di quanta ne ho bisogno per 7?',
          points: ['(500 × 7) ÷ 4 = 875g'],
        },
        {
          icon: 'mdi:shopping',
          title: 'Shopping e Prezzi',
          description: 'Se una confezione da 3 lattine costa 2,50 €, quanto mi costerebbero 10 lattine?',
          points: ['(2,50 × 10) ÷ 3 = 8,33 €'],
        },
        {
          icon: 'mdi:car',
          title: 'Viaggi e Distanze',
          description: 'Se impiego 45 min per fare 60km, quanto tempo impiegherò per farne 140km?',
          points: ['(45 × 140) ÷ 60 = 105 min'],
        },
        {
          icon: 'mdi:monitor-screenshot',
          title: 'Design e Schermi',
          description: 'Se l\'immagine è larga 1920px e voglio ridurla a 800px mantenendo la proporzione...',
          points: ['(AltezzaOriginale × 800) ÷ 1920 = NuovaAltezza'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Come funziona la formula?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La formula è sempre la stessa: <strong>moltiplicare i valori in diagonale e dividere per quello rimanente</strong>.',
    },
    {
      type: 'code',
      code: '(B × C) ÷ A = X',
      ariaLabel: 'Formula regola del tre semplice diretta',
    },
    {
      type: 'paragraph',
      html: 'Nel calcolatore: moltiplichiamo il valore <strong>B</strong> per il valore <strong>C</strong> e dividiamo per <strong>A</strong>. Il risultato è <strong>X</strong>.',
    },
    {
      type: 'title',
      text: 'Usi professionali e quotidiani',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Oltre alla matematica scolastica, la regola del tre è ovunque: in farmacia per calcolare i dosaggi in base al peso corporeo, in fotografia per calcolare i tempi di esposizione, in finanza per calcolare le variazioni percentuali, o nella stampa per scalare le dimensioni dei formati.',
    },
    {
      type: 'tip',
      title: 'Consiglio sulla precisione',
      html: 'Il risultato viene visualizzato con un massimo di 4 cifre decimali significative. Se lavori con denaro o misure esatte, ricorda di arrotondare in base al contesto: euro a 2 decimali, pixel a numeri interi.',
    },
  ],
};
