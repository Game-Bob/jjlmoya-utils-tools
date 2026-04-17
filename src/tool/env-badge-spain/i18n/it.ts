import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnvBadgeSpainUI } from '../ui';

const faqData = [
  {
    question: 'Cosa succede se guido un veicolo senza bollino in una Zona a Basse Emissioni (ZBE) in Spagna?',
    answer: 'Se entri in una ZBE in una delle principali città spagnole con un veicolo sprovvisto di bollino ambientale e senza una deroga speciale, riceverai una multa per un\'infrazione grave, che di solito ammonta a 200 euro.',
  },
  {
    question: 'Devo esporre il bollino fisico della DGT sul parabrezza?',
    answer: 'La DGT raccomanda di esporlo, ma le multe per la mancata esposizione sono stabilite da ogni autorità locale. A Madrid è obbligatorio, mentre in altre città il controllo si affida interamente alle telecamere per il riconoscimento automatico della targa.',
  },
  {
    question: 'Il mio diesel è stato immatricolato prima del 2006 ma la scheda tecnica dice Euro 4. Posso ottenere un bollino?',
    answer: 'Sì. Se i dati del veicolo in possesso delle autorità del traffico riflettono solo la data di immatricolazione, puoi richiedere un certificato al produttore tramite un concessionario ufficiale e presentarlo all\'ufficio del traffico per correggere la tua classificazione.',
  },
  {
    question: 'Cosa significa il bollino C (Verde) per le auto in Spagna nel 2025?',
    answer: 'Nella maggior parte delle ZBE puoi ancora circolare liberamente, ma il bollino C limita il parcheggio in strada. Sarà necessario utilizzare parcheggi sotterranei o autorizzati vicino ai perimetri delle ZBE.',
  },
];

const howToData = [
  { name: 'Seleziona il tipo di veicolo', text: 'Scegli se il tuo veicolo è un\'auto o un furgone, una motocicletta o un veicolo pesante. Ogni categoria ha una diversa logica di classificazione secondo le norme del traffico spagnole.' },
  { name: 'Scegli il tipo di carburante o energia', text: 'Elettrico, ibrido plug-in, ibrido convenzionale, gas, benzina o diesel portano tutti a diversi risultati del bollino. La soglia di autonomia per gli ibridi plug-in è di 40 km.' },
  { name: 'Inserisci l\'anno di immatricolazione o lo standard Euro', text: 'Per i veicoli a combustione, lo standard Euro è il fattore decisivo. La data di immatricolazione sulla scheda tecnica fornisce un\'approssimazione affidabile dello standard.' },
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
  name: 'Come simulare il bollino ambientale spagnolo DGT per il tuo veicolo',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Simulatore Bollino Ambientale Spagnolo DGT',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Scopri quale bollino ambientale spagnolo DGT si applica al tuo veicolo in base a tipo, carburante e anno di immatricolazione. Strumento gratuito per prepararsi alle Zone a Basse Emissioni in Spagna.',
};

const ui: EnvBadgeSpainUI = {
  step1Label: '1. Tipo di veicolo',
  vehicleCar: 'Auto / Furgone',
  vehicleMoto: 'Motocicletta',
  vehicleHeavy: 'Camion / Autobus',
  errVehicle: 'Seleziona un tipo di veicolo',

  step2Label: '2. Carburante o Energia',
  fuelElectric: '100% Elettrico / Cella a combustibile',
  fuelPhevHigh: 'Ibrido plug-in (>40 km)',
  fuelPhevLow: 'Ibrido plug-in (<40 km)',
  fuelHybridGas: 'Ibrido (HEV) o Gas',
  fuelGasoline: 'Benzina',
  fuelDiesel: 'Diesel',
  errFuel: 'Seleziona un tipo di carburante o energia',

  step3Label: '3. Standard Euro o Anno di Immatricolazione',
  yearPre2000: 'Prima del 2000',
  year20002005: 'Dal 2000 al 2005',
  year20062013: 'Dal 2006 al 2013',
  yearPost2014: '2014 o successivo',
  errYear: 'Seleziona il periodo di immatricolazione',
  helpText: 'In caso di dubbio, lo standard Euro indicato sulla scheda tecnica prevale sulla data di immatricolazione.',

  submitBtn: 'Controlla il mio bollino',

  resultTitle: 'Bollino Assegnato',

  badge0Label: 'Bollino Zero Emissioni',
  badge0Letter: '0',
  badge0Sub: 'EMISSIONI',
  badge0Desc: 'Veicoli di massima efficienza. Godono di accesso illimitato alle Zone a Basse Emissioni (ZBE) in Spagna e di ampie esenzioni fiscali.',

  badgeEcoLabel: 'Bollino ECO',
  badgeEcoLetter: 'ECO',
  badgeEcoDesc: 'Veicoli a basse emissioni come ibridi e auto alimentate a gas. Consente l\'accesso alla maggior parte delle ZBE e offre sconti nelle zone di parcheggio regolamentate.',

  badgeCLabel: 'Bollino C',
  badgeCLetter: 'C',
  badgeCDesc: 'Veicoli a combustione recenti con uno standard Euro elevato. Libera circolazione ma soggetta a restrizioni di parcheggio in alcune aree ZBE.',

  badgeBLabel: 'Bollino B',
  badgeBLetter: 'B',
  badgeBDesc: 'Veicoli a combustione meno recenti. Soggetti a maggiori restrizioni di accesso e parcheggio nelle città spagnole.',

  badgeALabel: 'Senza Bollino',
  badgeALetter: 'NO',
  badgeASub: 'BOLLINO',
  badgeADesc: 'Veicoli altamente inquinanti senza diritto a un bollino. Sono progressivamente esclusi dai centri urbani e dalle Zone a Basse Emissioni in tutta la Spagna.',

  warningText: 'Verifica sempre sul sito ufficiale della DGT utilizzando la tua targa per confermare il risultato, specialmente in caso di discrepanze amministrative.',
  resetBtn: 'Nuova Simulazione',
};

export const content: ToolLocaleContent<EnvBadgeSpainUI> = {
  slug: 'simulatore-bollino-ambientale-spagna',
  title: 'Simulatore Bollino Ambientale Spagna',
  description: 'Scopri gratuitamente quale bollino ambientale spagnolo DGT si applica alla tua auto, motocicletta o furgone per le Zone a Basse Emissioni (ZBE) in Spagna.',
  ui,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Riferimenti',
  bibliography: [
    { name: 'Regolamenti DGT su Cambiamento Climatico e Traffico (Spagnolo)', url: 'https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/muevete-con-seguridad/normas-de-trafico/MOV-gestion-trafico/2023/INSTRUCCION-recomendaciones-ZBE_fe.pdf' },
    { name: 'Legge spagnola sul cambiamento climatico e zone a basse emissioni (BOE)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Cos\'è il bollino ambientale spagnolo DGT?' },
    {
      type: 'paragraph',
      html: 'Il <strong>bollino ambientale spagnolo DGT</strong> (distintivo ambiental) è un sistema di classificazione dei veicoli introdotto in Spagna per dare un trattamento preferenziale ai veicoli meno inquinanti. Viene utilizzato principalmente per controllare l\'accesso alle Zone a Basse Emissioni (ZBE) nelle città spagnole con più di 50.000 abitanti.',
    },
    { type: 'title', level: 3, text: 'Tipi di bollino e i loro vantaggi in Spagna' },
    {
      type: 'list',
      items: [
        '<strong>Bollino Zero Emissioni:</strong> Per veicoli elettrici puri, ibridi plug-in con oltre 40 km di autonomia elettrica e celle a combustibile a idrogeno. Accesso illimitato alle ZBE ed esenzioni fiscali.',
        '<strong>Bollino ECO:</strong> Ibridi convenzionali, GPL, metano e ibridi plug-in con meno di 40 km di autonomia. Ampio accesso alle zone a traffico limitato e sconti sul parcheggio.',
        '<strong>Bollino C:</strong> Benzina Euro 4 o successivo, diesel Euro 6. Libera circolazione ma restrizioni sul parcheggio in strada vicino alle ZBE.',
        '<strong>Bollino B:</strong> Benzina Euro 3, diesel Euro 4 o 5. Restrizioni crescenti e divieti saltuari di ingresso.',
        '<strong>Senza Bollino (Categoria A):</strong> Veicoli più vecchi o più inquinanti progressivamente esclusi dai centri urbani spagnoli dal 2024.',
      ],
    },
    { type: 'title', level: 3, text: 'Zone a Basse Emissioni nelle città spagnole' },
    {
      type: 'paragraph',
      html: 'L\'implementazione delle ZBE segue la legge spagnola sul cambiamento climatico, che richiede ai comuni che superano determinate soglie di popolazione di crearle. Esempi notevoli sono <em>Madrid 360</em> e le <em>Superilles</em> di Barcellona, dove entrare senza almeno un bollino B può comportare multe automatiche emesse tramite telecamere per il riconoscimento della targa.',
    },
    {
      type: 'tip',
      title: 'Come ottenere l\'adesivo fisico in Spagna',
      html: 'Se il simulatore conferma che hai diritto a un bollino, puoi acquistare l\'adesivo fisico per circa 5 euro presso qualsiasi ufficio di Correos (posta), officine autorizzate o uffici del traffico. Porta i documenti di immatricolazione del veicolo.',
    },
  ],
};
